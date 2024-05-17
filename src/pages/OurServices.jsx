import "../index.css";
import Berriesicon from "../assets/images/berriesicon.png";
import telephone from "../assets/images/Images/telephone-img.png";
import cutlery from "../assets/images/Images/cutlery-img.png";
import {Link} from "react-router-dom";

function Services() {
  return (
    <div className="mb-2 border">
      <div className="w-full bg-primaryGreen">
        <div className="max-w-4 ">
          <img
            src={Berriesicon}
            className="max-w-48 absolute pb-10 top-custom2 left-13"
            alt="berriesicon"
          />
        </div>
        <h2 className="text-5xl pt-14 pb-4">Our Services</h2>
        <p className="pb-20">
          Your pathway to optimal health and well being. <br />
          Discover virtual consultations and personalized menu plans
          <br />
          tailored to your needs.{" "}
        </p>
      </div>

      <div className="bg-secondaryPink gap-12 flex flex-row justify-center pb-10 pt-10 border rounded-2xl w-[1100px] ml-24 mt-14 ">
        <img
         src={telephone}
          className="max-w-xs  h-48 pt-10" 
          alt="" />
        <h1 className="mt-16 text-5xl  capitalize font-bold  font-poppins">
          Virtual <br /> Consultation
        </h1>
        <div className="text-left">
        <p className="m-10 text-lg ">
          Discover the convenience of virtual <br />
          consultations with our expert dietitian. Get <br />
          personalized nutrition advice, meal plans, and <br />
          lifestyle recommendations from the comfort of <br />
          your home.
          
        </p>
        <Link className="pt-5 pr-64  font-bold" to="/service">View Plan</Link>
        </div>
      </div>

      <div className="bg-secondaryPink gap-20 flex flex-row justify-center pb-10 pt-10 border rounded-2xl w-[1100px] mb-20 mt-14  ml-24">
        <img 
        src={cutlery} 
        className="max-w-xs h-48 pt-10" 
        alt="" />

        <h1 className="mt-16 text-5xl capitalize font-bold  font-poppins ">
          Curated <br />
          Menu Plan
        </h1>
        <div className="text-left">
        <p className=" m-10 text-lg">
          Unlock the power of personalized nutrition with <br />
          a menu plan crafted by our Dietitian. Tailored to <br />
          your unique dietary needs and preferences, our <br />
          plans are designed to help you achieve your <br />
          health and wellness goals.
        
        </p>
        <a href="/service#menu_plan" className="pt-5 pr-64  font-bold" >View Plan</a>
          {/* <Link className="pt-5 pr-64  font-bold" to="/service">View Plan</Link>  */}
        
          </div>
      </div>
      </div>
    
  );
}
export default Services;
