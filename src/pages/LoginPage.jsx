import "../index.css";
import Logo from "../assets/images/logo.png";
import googleicon from "../assets/images/google.png";
import fbicon from "../assets/images/facebook.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import { login } from "../services/backend.services";
import { useNavigate } from "react-router-dom";
import { userActions } from "../context/slices/user.slice";
import { useDispatch } from "react-redux";

function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { setUserData } = userActions;

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const onLogin = (accesToken, user) => {
    sessionStorage.setItem("accessToken", accesToken);
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginDetails;
    setSubmitting(true);

    const toastId = toast.loading("Logging in");

    try {
      const { user, accessToken } = await login(email, password);
      if (user && accessToken) {
        console.log(user, accessToken);
        navigate("/");
        dispatch(setUserData(user));
        onLogin(accessToken, user);
        afterAccountCreation();
        toast.update(toastId, {
          render: "Logged in successfully 👌",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (e) {
      toast.update(toastId, {
        render: `${e.message} 🤯`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      afterAccountCreation();
    }
  };

  const afterAccountCreation = () => {
    setSubmitting(false);
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  return (
    <div className=" ">
      <div className=" mt-20 md:mt-0 flex flex-col items-center justify-center  ">
        <div className="flex flex-col items-center justify-center">
          <div className="pt-10 ">
            <img src={Logo} alt="login icon" className="" />
          </div>
          <h2 className="hidden md:flex  text-2xl capitalize mt-4 ml-5 mb-2 font-poppins font-extrabold">
            Welcome Back
          </h2>
          <div className="mt-2 items-center justify-center flex flex-col ">
            <form
              className=" "
              onSubmit={handleSubmit}
            >
              <InputField
                label="Email"
                name="email"
                placeholder="Enter email address"
                inputType="email"
                required={true}
                handleChange={handleChange}
                value={loginDetails.email}
                isPassword={false}
              />

              <InputField
                label="Password"
                name="password"
                placeholder="Password"
                inputType="password"
                required={true}
                handleChange={handleChange}
                value={loginDetails.password}
                isPassword={true}
              />
              <button
                type="submit"
                className="Login bg-primaryOrange items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3"
              >
                {submitting ? "Logging in" : "Login"}
              </button>
            </form>
          </div>

          <h4 className="text-start  text-lg font-medium cursor-pointer mt-2 text-primary">
            Forgotten password?
          </h4>
          <p className=" text-center mt-3 text-slate-500 md:text-black text-lg  font-medium mb-2">
            Dont have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to={"/sign-up"}>Sign Up</Link>
            </span>{" "}
            <br />
            or continue with
          </p>
          <div className="socials flex items-center justify-evenly mb-10 md:justify-center ">
            <img src={googleicon} alt="" className=" px-2 pr-5" />
            <img src={fbicon} alt="" className=" px-2  pr-5" />
          </div>
          <p className="ml-40">By logging in, you are indicating that you have read and agreed to the
          <Link className="pt-5  text-blue-500  font-bold" to="/sign-up">Terms of use </Link>  and <Link className="pt-5 pr-64 text-blue-500  font-bold" to="/sign-up">Privacy Policy </Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
