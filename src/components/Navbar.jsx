/* eslint-disable react/prop-types */
import "../index.css";
import Logo from "../assets/images/logo.png";
// import Profileicon from "../assets/images/profileicon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../context/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/backend.services";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const { setUserData } = userActions;
  const { userData } = useSelector((states) => states.userStates);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      const sUser = JSON.parse(sessionStorage.getItem("user"));
      if (sUser) {
        dispatch(setUserData(sUser));
      }
    }
  }, [dispatch, setUserData, userData]);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (currIndex) => {
    setSelectedIndex(currIndex);
  };

  const handleLogout = async () => {
    navigate("/");
    const toastId = toast.loading("Logging out");

    try {
      const status = await logout();
      if (status === 200) {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("user");
        dispatch(setUserData(null));

        toast.update(toastId, {
          render: "Logged out successfully 👌",
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
    } finally {
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="flex justify-between rounded-full bg-white border-2 border-gray-100 px-4 z-10 relative">
      <Link to={"/"} onClick={() => setSelectedIndex(-1)}>
        <img
          src={Logo}
          className="pt-4 pb-4 w-48 h-24"
          alt="healthydiet_logo"
        />
      </Link>

      <div className="flex gap-[20px] items-center font-semibold">
        {navItems.map((item, index) => (
          <NavItem
            item={item}
            key={index}
            userData={userData}
            index={index}
            handleClick={handleClick}
            selected={`${
              selectedIndex === index
                ? "text-black underline underline-offset-4"
                : "text-black"
            }`}
          />
        ))}
        {userData !== null && userData.fullName && (
          <Link to="/user-page" className="p-2 rounded-full bg-gray-100">
            {userData.fullName.split(" ")[0][0]}
            {userData.fullName.split(" ")[1][0]}
          </Link>
        )}
        <button
          type="button"
          className={`px-2 py-1 rounded-md bg-gray-100 ${
            userData ? "flex" : "hidden"
          }`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const navItems = [
  { title: "About Us", link: "/about-us", access: "user" },
  { title: "Our Services", link: "/services", access: "user" },
  { title: "Contact", link: "/contact-us", access: "user" },
  { title: "Blogs", link: "/blogs", access: "user" },
  { title: "Create Blog", link: "/create-blog", access: "admin" },
  { title: "Sign Up", link: "/sign-up", access: "user" },
];

const NavItem = ({ item, userData, index, handleClick, selected }) => {
  const showItem =
    (item.access === "admin" && userData?.userType === "admin") ||
    (item.title === "Sign up" && userData === null) ||
    (item.title !== "Sign up" && item.access === "user");

  return (
    <Link
      to={item.link}
      className={`px-2 py-1 rounded-md ${
        showItem ? "flex" : "hidden"
      } ${selected}`}
      onClick={() => handleClick(index)}
    >
      {item.title}
    </Link>
  );
};
