import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../context/slices/user.slice";
import { makePayment } from "../services/backend.services";
import { toast } from "react-toastify";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const paymentObj = {
  amount: 500,
  frequency: "Weekly",
  type: "Consult",
};

const stripePromise = loadStripe(
  "pk_test_51LUEo9JUDhHI2CZCg2zDAvIlyj0QmztftbzEZWXWwQzjzz5G23rLPfxOWgYuYfnzUNS4rMqPlS4wkBy6DdM8EWu600RAqjR4Ru"
);

const Payment = () => {
  const dispatch = useDispatch();
  const { setUserData } = userActions;
  const { userData } = useSelector((states) => states.userStates);

  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (!userData) {
      const sUser = JSON.parse(sessionStorage.getItem("user"));
      if (sUser) {
        dispatch(setUserData(sUser));
      }
    }
  }, [dispatch, setUserData, userData]);

  useEffect(() => {
    const payload = {
      amount: paymentObj.amount,
      frequency: paymentObj.frequency,
      type: paymentObj.type,
    };

    const pay = async () => {
      try {
        const res = await makePayment(payload);
        if (res) {
          setClientSecret(res.paymentIntent.client_secret);
        }
      } catch (e) {
        console.log(e);
      }
    };
    pay();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-[360px] flex flex-col items-center justify-center p-4 background-light800_dark400 rounded-lg">
        {stripePromise && clientSecret && (
          <>
            <div className="base-medium ">
              Hello{" "}
              <span className="text-light-500 font-semibold">
                {userData.name}
              </span>
            </div>
            <div className="mt-2 mb-4 base-medium text-dark100_light900">
              Please enter your card details
            </div>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <Checkout />
            </Elements>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);

    const toastId = toast.loading("Making payment");

    try {
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}`,
        },
        redirect: "if_required",
      });
      toast.update(toastId, {
        render: "Payment completed 👌",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
      navigate("/");
    } catch (e) {
      toast.update(toastId, {
        render: `Error making payment 🤯`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <PaymentElement />
      <button
        className="mt-4 bg-primaryOrange text-white font-semibold text-xl px-4 py-2 rounded-xl"
        onClick={handleSubmit}
      >
        {isProcessing ? "Processing" : "Pay Now"}
      </button>
    </>
  );
};
