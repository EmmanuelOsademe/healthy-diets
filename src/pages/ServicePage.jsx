import "../index.css";
import telephone from "../assets/images/Images/telephone-img.png";
import cutlery from "../assets/images/Images/cutlery-img.png";



function ServicePage() {
  return (

    
    <section className="ml-12 mr-12 gap-7 rounded-3xl">

<div className="bg-secondaryPink  flex flex-row justify-center pt-14  ">
        <img
         src={telephone}
          className=" pt-12" 
          alt="" />
        <h1 id="virtual_consultation" className="mt-20 text-5xl capitalize font-bold placeholder-blue-100   font-poppins">
          Virtual <br /> Consultation
        </h1>
        <p className="m-10 pt-7 text-left text-lg">
          Discover the convenience of virtual <br />
          consultations with our expert dietitian. Get <br />
          personalized nutrition advice, meal plans, and <br />
          lifestyle recommendations from the comfort of <br />
          your home.
         
        </p>
      </div>
     
     
      <div className="flex justify-center pb-20 pt-10 bg-secondaryPink gap-8  ">
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
         <ul className="list-image-[url(src/assets/images/checkmark.png)] pl-10 ">
         <li>3 virtual meetings or phone calls <br /></li>
         <li>Unlimited access to a Dietitian via <br /></li>
         <li>email Nutrition assessment, counselling <br /></li> and management{" "}
         </ul>
         {/* </p> */}

        <a href="/payment">
        <button className="bg-primaryOrange rounded-2xl text-bold text-white pl-7 pr-8 pt-3 pb-3">
          Get Started
        </button>
        </a>
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

        <a href="/payment">
        <button className="bg-primaryOrange rounded-2xl text-bold text-white pl-7 pr-8 pt-3 pb-3 ">
          Get Started
        </button>
        </a>
      </div>

      <div className="bg-white rounded-2xl  pt-9 ">
        <h1 className="text-2xl font-extrabold pb-3">Annually</h1>
        <p className="pb-4">Access to a Dietitian for 12 months</p>
        <hr className="h-px my-8 bg-slate-400 border-0 " />
        <p className="font-extrabold text-2xl pb-4 font-poppins capitalize">
          NGN 60,000 <span className="">per week</span>
        </p>
        <p className="text-bold">What’s included</p>

        <ul className="list-image-[url(src/assets/images/checkmark.png)] "></ul>
          <li>12 virtual meetings or phone calls  </li>
           <li> Unlimited access to a Dietitian via email </li>
          
          <li>
            {" "}
            Nutrition assessment, counselling <br />
            and management{" "}
          </li>
          <li>
            {" "}
            Support and follow-up from a <br /> Dietitian{" "}
          </li>
          <li>
            Access to a private community of <br />{" "}
          </li>
          <li>
            subscribers for support and <br />{" "}
          </li>
         <li>accountability Webinar series on healthy <br /> food choices and lifestyle{" "} </li>
          
          <li> Online classes that focus on nutrition for families </li>

       <a href="/payment">
       <button className="bg-primaryOrange rounded-2xl text-bold text-white   pl-8 pr-8 pt-3 pb-3">
          Get Started
        </button>
       </a>
        </div>
        </div>
       
        
        <h6 className="top-72">Chose Plan</h6>

        




<section className="">
        <div className="bg-secondaryPink gap-16 flex flex-row justify-center pb-10  border rounded-3xl mt-32 ">
        <img 
        src={cutlery} 
        className="max-w-xs h-48 pt-10" 
        
        alt="" />

        <h1 className="mt-16 text-5xl capitalize font-extrabold  font-poppins ">
          Curated <br />
          Menu Plan
        </h1>
        <p className="m-10 text-lg text-left">
          Unlock the power of personalized nutrition with <br />
          a menu plan crafted by our Dietitian. Tailored to <br />
          your unique dietary needs and preferences, our <br />
          plans are designed to help you achieve your <br />
          health and wellness goals.
          
        </p>
        </div>


       <div className="flex justify-center bg-secondaryPink gap-8 pt-10 mb-10  ">
      <div className="bg-white mb-72 rounded-2xl  ">
        <h1 className="text-2xl font-extrabold pt-8">Weekly</h1>
        <p className="pb-4 pt-4">Access to a Dietitian for 1 week</p>
        <hr className="h-px my-8  bg-slate-400 border-0 " />
        <p className="font-extrabold text-3xl pb-4 font-poppins capitalize">
          NGN 5,00 0{" "}
        </p>
        <span>per week</span> 
        <p className="text-bold">What’s included</p>
        
         <ul className="list-image-[url(src/assets/images/checkmark.png)] pl-10 ">
         <li>3 virtual meetings or phone calls <br /></li>
         <li >Unlimited access to a Dietitian via <br /></li>
         <li>email Nutrition assessment, counselling <br /></li> and management{" "}
         </ul>
        

        <a href="/menupayment">
        <button className="bg-primaryOrange rounded-2xl text-white text-bold  pl-7 pr-8 pt-3 pb-3">
          Get Started
        </button>
        </a>
      </div>

      <div className="bg-white mb-72 rounded-2xl  ">
        <h1 className="text-2xl font-extrabold pt-8">Weekly</h1>
        <p className="pb-4 pt-4">Access to a Dietitian for 1 week</p>
        <hr className="h-px my-8  bg-slate-400 border-0 " />
        <p className="font-extrabold text-3xl pb-4 font-poppins capitalize">
          NGN 5,00 0{" "}
        </p>
        <span>per week</span> 
        <p className="text-bold">What’s included</p>
        {/* <p className="pb-7"> */}
         <ul className="list-image-[url(src/assets/images/checkmark.png)] pl-10">
         <li>3 virtual meetings or phone calls <br /></li>
         <li>Unlimited access to a Dietitian via <br /></li>
         <li>email Nutrition assessment, counselling <br /></li> and management{" "}
         </ul>
         {/* </p> */}

        <a href="/menupayment">
        <button className="bg-primaryOrange rounded-2xl text-bold text-white p-2">
          Get Started
        </button>
        </a>
      </div>


       </div>
      </section>
      

      
      
      </section>
    
  );
}

export default ServicePage;
