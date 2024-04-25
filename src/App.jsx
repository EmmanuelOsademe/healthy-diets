import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AboutusPage from "./pages/aboutUs";
import Services from "./pages/OurServices";
import ServicePage from "./pages/ServicePage";
import ResetPassword from "./pages/ResetPassword";
import BlogPage from "./pages/Blog";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import CreateBlog from "./pages/CreateBlog";
import HomePage from "./pages/Home";
import PaymentPage from "./pages/Payment";

import SingleBlogPage1 from "./pages/SingleBlog";
import ContactPage from "./pages/ContactPage";
import SingleBlogPage from "./pages/SingleBlog2";

import Footer from "./components/Footer";
import MenuPaymentPage from "./pages/MenuPayment";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/single-blog" element={<SingleBlogPage1 />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/single-blog/:slug" element={<SingleBlogPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/menupayment" element={<MenuPaymentPage />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};
export default App;
