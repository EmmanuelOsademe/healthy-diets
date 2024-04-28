import "../index.css";
import InputField from "../components/InputField";
import green from "../assets/images/Images/greenimg.png";
import halforange from "../assets/images/Images/halforange.png";
import chicken from "../assets/images/Images/chicken-img.png";
import { Link } from "react-router-dom";





const FormsPage = () => {
    return (
      <>

<div className="pt-16  mb-48 flex justify-center"> 



<div className="flex justify-center  ">
    <div className="relative mb-52  ml-20">

        <img src={green}
        className="pt-52 mb-48 max-w-xl"
         alt="" />

        <img src={halforange}
         className="absolute top-52" 
         alt="" />

        <img src={chicken} 
        className="absolute top-96" 
        alt="" />

</div>
   

    <div className="mt-10  bg-white  pl-10 pt-96">

<h3 className="text-5xl pl-7 pb-9 font-bold text-left">Tell us about yourself</h3>
          <p className="pr-48 pl-32">Please fill this form so we can get to <br /> know you and 
           personalize this <br /> experience for you.</p>

           <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-8 mb-6 pl-16 pr-16 pt-4 pb-4">
            <Link to={"/forms"}>Fill Form</Link>
          </button>
          </div>
          </div>
          
    </div>



    </>
  );
};

export default FormsPage;
        