import InputField from "../components/InputField";
import "../index.css";
import VCicon from "../assets/images/VC_icon.png";
// import Payment from "../assets/images/paymentoptions.png";
import PaymentComponent from "../components/Payment";
import { useState } from "react";

const PaymentPage = () => {
  const [showPaymentCard, setShowPaymentCard] = useState(false);
  return (
    <div>
      <div className="w-full mt-8 bg-primaryGreen mb-2">
        <div className="max-w-4"></div>
        <h2 className="text-5xl pt-14 pb-4">Payment</h2>
        <p className="pb-10">
          Your gateway to personalized consultations, curated recipes, and more
          for a healthier you. Please
          <br />
          complete the payment process to embark on a journey towards better
          health today.{" "}
        </p>
      </div>

      <div className="flex justify-between pt-10 mb-32">
        <div className="ml-12">
          <h3 className="text-3xl font-bold text-left">Billing Details</h3>

          <InputField
            label="Name"
            name="fullName"
            placeholder="Enter your full name"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email address"
            inputType="email"
            width="w-[450px]"
          />

          <InputField
            label="Phone Number"
            name="number"
            placeholder="Enter your phone number"
            inputType="number"
            width="w-[450px]"
          />

          <InputField
            label="Country"
            name="country"
            placeholder="Enter your country"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="State"
            name="state"
            placeholder="Enter your state"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Address"
            name="address"
            placeholder="Enter your address"
            inputType="text"
            width="w-[450px]"
          />
        </div>

        {!showPaymentCard && (
          <div className="ml-56 mr-12">
            <h2 className="text-3xl font-bold text-left pb-8">Selected Plan</h2>

            <div className="bg-secondaryPink rounded-xl flex justify-between text-left mb-4">
              <div className="ml-8 my-8">
                <h3 className="text-3xl font-bold  ">Virtual Consultation</h3>
                <p className="pt-2">MONTHLY SUBSCRIPTION</p>
              </div>
              <img src={VCicon} alt="virtual consultation icon" />
            </div>

            <div className="flex justify-between bg-secondaryPink rounded-xl mb-1">
              <div className="ml-8 my-8 font-bold">
                <p className="mb-4 text-left">Subtotal</p>
                <p>Discount</p>
              </div>
              <div className="ml-8 my-8 font-bold">
                <p className="mb-4 mr-8">NGN 10,000.00</p>
                <p>NGN 0.00</p>
              </div>
            </div>
            <div className="flex justify-between text-xl py-6 px-8 font-semibold bg-secondary rounded-md">
              <div>Total</div>
              <div>NGN 10,000.00</div>
            </div>

            {/* <img className="pt-8 pb-12" src={Payment} alt="payment options" /> */}
            <button
              onClick={() => setShowPaymentCard(true)}
              className="bg-primaryOrange text-white font-semibold text-xl px-4 py-2 rounded-xl mt-4"
            >
              Confirm Payment
            </button>
          </div>
        )}

        {showPaymentCard && (
          <div className="ml-56 mr-12">
            <PaymentComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
