import "../index.css";
import telephone from "../assets/images/Images/telephone-img.png";
import cutlery from "../assets/images/Images/cutlery-img.png";



function ServicePage() {
  return (

    
    <section className="bg-secondaryPink ml-12 mr-12  rounded-3xl">

<div className="flex flex-row justify-center  mt-14 gap-9 ">
        <img
         src={telephone}
          className=" pt-12" 
          alt="" />
        <h1 className="mt-20 text-5xl capitalize font-bold  font-poppins">
          Virtual <br /> Consultation
        </h1>
        <p className="m-10 text-lg">
          Discover the convenience of virtual <br />
          consultations with our expert dietitian. Get <br />
          personalized nutrition advice, meal plans, and <br />
          lifestyle recommendations from the comfort of <br />
          your home.
          <h5 className="pt-5 pr-64 font-bold">View Plan</h5>
        </p>
      </div>
     
     
      <div className="flex justify-center  gap-5  ">
      <div className="bg-white mb-72 rounded-2xl  ">
        <h1 className="text-2xl font-extrabold pt-8">Weekly</h1>
        <p className="pb-4 pt-4">Access to a Dietitian for 1 week</p>
        <hr className="h-px my-8  bg-slate-400 border-0 " />
        <p className="font-extrabold text-3xl pb-4 font-poppins capitalize">
          NGN 5,000{" "}
        </p>
        <span>per week</span> 
        <p className="text-bold">What’s included</p>
        {/* <p className="pb-7"> */}
          
       

         <ul className="list-image-checkmark ">
         <li>3 virtual meetings or phone calls <br /></li>
         <li>Unlimited access to a Dietitian via <br /></li>
         <li>email Nutrition assessment, counselling <br /></li> and management{" "}
         </ul>
         {/* </p> */}

        <button className="bg-primaryOrange rounded-2xl text-bold  pl-7 pr-8 pt-3 pb-3">
          Select Plan
        </button>
      </div>

      <div className="bg-white rounded-2xl ">
        <h1 className="text-2xl font-extrabold pb-3">Monthly</h1>
        <p className="pb-4">Access to a Dietitian for 1 month</p>
        <hr className="h-px my-9  bg-slate-400 border-0 " />
        <p className="font-extrabold text-2xl pb-4 font-poppins capitalize">
          NGN 10,000{" "}
        </p>
        <span>per week</span>
        <p className="font-bold text-xl">What’s included</p>
        <p className="pb-7">
          12 virtual meetings or phone calls <br />
          Unlimited access to a Dietitian via email <br />
          Nutrition assessment, counselling <br />
          and management Support and follow-up from a <br /> 
          Dietitian Access to
          a private community of <br />
          subscribers for support and <br />
          accountability
        </p>

        <button className="bg-primaryOrange rounded-2xl text-bold  pl-7 pr-8 pt-3 pb-3 ">
          Select Plan
        </button>
      </div>

      <div className="bg-white rounded-2xl  pt-9 ">
        <h1 className="text-2xl font-extrabold pb-3">Annually</h1>
        <p className="pb-4">Access to a Dietitian for 12 months</p>
        <hr className="h-px my-8 bg-slate-400 border-0 " />
        <p className="font-extrabold text-2xl pb-4 font-poppins capitalize">
          NGN 60,000 <span className="">per week</span>
        </p>
        <p className="text-bold">What’s included</p>
        <p className="pb-7">
          12 virtual meetings or phone calls <br />
          <p>
            Unlimited access to a Dietitian via email <br />
          </p>
          <p>
            {" "}
            Nutrition assessment, counselling <br />
            and management{" "}
          </p>
          <p>
            {" "}
            Support and follow-up from a <br /> Dietitian{" "}
          </p>
          <p>
            Access to a private community of <br />{" "}
          </p>
          <p>
            subscribers for support and <br />{" "}
          </p>
          accountability Webinar series on healthy <br /> food choices and lifestyle{" "}
          <br />
          Online classes that focus on nutrition for families
        </p>
        

        <button className="bg-primaryOrange rounded-2xl text-bold  pl-8 pr-8 pt-3 pb-3">
          Select Plan
        </button>
        </div>
        </div>
      





        <div className="bg-secondaryPink gap-16 flex flex-row justify-center pb-5 pt-20 border rounded-3xl mt-32 ">
        <img 
        src={cutlery} 
        className="max-w-xs max- mx-2" 
        alt="" />

        <h1 className="mt-16 text-3xl capitalize font-extrabold  font-poppins ">
          Curated <br />
          Menu Plan
        </h1>
        <p className="m-10">
          Unlock the power of personalized nutrition with <br />
          a menu plan crafted by our Dietitian. Tailored to <br />
          your unique dietary needs and preferences, our <br />
          plans are designed to help you achieve your <br />
          health and wellness goals.
          <h5 className="pt-5 pr-64 font-bold">View Plan</h5>
        </p>
        
      
      </div>
      

      
      
      
    </section>
  );
}

export default ServicePage;
