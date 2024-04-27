// import "../index.css";
// import telephone from "../assets/images/Images/telephone-img.png";
// import cutlery from "../assets/images/Images/cutlery-img.png";
// import Berriesicon from "../assets/images/berriesicon.png";

// function ServicePage() {
//   return (

//     <section className="ml-12 mr-12 gap-7 ">

//  <div className="w-full bg-primaryGreen">
//         <div className="max-w-4 ">
//           <img
//             src={Berriesicon}
//             className="max-w-48 absolute pb-10 top-custom2 left-13"
//             alt="berriesicon"
//           />
//         </div>
//         <h2 className="text-5xl pt-14 pb-4">Our Services</h2>
//         <p className="pb-20">
//           Your source for nutritional wisdom and inspiration. Explore articles
//           curated just for you on healthy <br />
//           eating, recipes and more. Join us on a journey towards better health
//           through balanced nutrition.
//           <br />
//           Stay Informed, Stay Healthy.
//         </p>
//       </div>

// <div className="bg-secondaryPink flex flex-row justify-center pt-14  ">
//         <img
//          src={telephone}
//           className=" pt-12"
//           alt="" />
//         <h1 id="virtual_consultation" className="mt-20 text-5xl capitalize font-bold placeholder-blue-100   font-poppins">
//           Virtual <br /> Consultation
//         </h1>
//         <p className="m-10 pt-7 text-left text-lg">
//           Discover the convenience of virtual <br />
//           consultations with our expert dietitian. Get <br />
//           personalized nutrition advice, meal plans, and <br />
//           lifestyle recommendations from the comfort of <br />
//           your home.

//         </p>
//         </div>

//       <div className="flex justify-center pb-20 pt-10 bg-secondaryPink gap-8  ">
//       <div className="bg-white mb-72 rounded-2xl  ">
//         <h1 className="text-2xl font-extrabold pt-8">Weekly</h1>
//         <p className="pb-4 pt-4">Access to a Dietitian for 1 week</p>
//         <hr className="h-px my-8  bg-slate-400 border-0 " />

//         <div className="flex flex-col justify-center">

//         <h3 className=" font-extrabold text-3xl pr-32 font-poppins capitalize">
//           NGN 5,000
//         </h3>
//         <p className="pl-32 ">per week</p>
//         </div>
//         <p className="font-bold pr-32">What’s included</p>
//         {/* <p className="pb-7"> */}
//          <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pr-6 pl-10 ">
//          <li>3 virtual meetings or phone calls <br /></li>
//          <li>Unlimited access to a Dietitian via <br /></li>
//          <li>email Nutrition assessment, counselling <br /></li> and management{" "}
//          </ul>
//          {/* </p> */}

//         <a href="/payment">
//         <button className="bg-primaryOrange rounded-2xl text-bold text-white pl-7 pr-8 pt-3 pb-3">
//           Get Started

//         <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">
//       Select Plan

//         </button>
//         </a>
//       </div>

//       <div className="bg-white rounded-2xl mb-32 ">
//         <h1 className="text-2xl font-extrabold pb-3 pt-9">Monthly</h1>
//         <p className="pb-4">Access to a Dietitian for 1 month</p>
//         <hr className="h-px my-9  bg-slate-400 border-0 " />
//         <p className="font-extrabold text-2xl pr-32 font-poppins capitalize">
//           NGN 10,000{" "}
//         </p>
//         <span className="pl-32">per week</span>
//         <p className="font-bold pr-32">What’s included</p>

//         <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pr-6 pl-14 pt-1" >
//           <li>12 virtual meetings or phone calls </li>
//           <li> Unlimited access to a Dietitian via <br /> email </li>
//           <li>  Nutrition assessment, counselling <br />
//           and management </li>
//           <li>   Support and follow-up from a
//           Dietitian </li>
//           <li> Access to a private community of <br />
//           subscribers for support and <br />
//           accountability </li>

//         <a href="/payment">
//         <button className="bg-primaryOrange rounded-2xl text-bold text-white pl-7 pr-8 pt-3 pb-3 ">

//           </ul>

//         <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">
//           Get Started
//         </button>
//         </a>
//       </div>

//       <div className="bg-white rounded-2xl  pt-9 ">
//         <h1 className="text-2xl font-extrabold pb-3">Annually</h1>
//         <p className="pb-4">Access to a Dietitian for 12 months</p>
//         <hr className="h-px my-8 bg-slate-400 border-0 " />
//         <p className="font-extrabold pr-32 text-2xl font-poppins capitalize">
//           NGN 60,000
//         </p>
//         <span className="pl-32">per week</span>
//         <p className="font-bold pr-32">What’s included</p>

//         <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pl-14 pr-6 pt-2">

//        <a href="/payment">
//        <button className="bg-primaryOrange rounded-2xl text-bold text-white   pl-8 pr-8 pt-3 pb-3">

//         <li>12 virtual meetings or phone calls <br /> every month</li>
//         <li> Unlimited access to a Dietitian via <br /> email</li>
//         <li>Nutrition assessment, counselling <br />
//        and management</li>
//        <li>Support and follow-up from a <br />
//        Dietitian</li>
//        <li>Access to a private community of <br />
//        subscribers for support and <br /> accountability</li>
//        <li>  Webinar series on healthy
//       food <br /> choices and lifestyle</li>
//        <li>Online classes that focus on <br /> nutrition for families</li>

//         </ul>

//         <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">

//           Get Started
//         </button>
//        </a>
//         </div>
//         </div>

//         <h6 className="top-72">Chose Plan</h6>

// <section className="rounded-3xl ">
//         <div className="bg-secondaryPink gap-16 flex flex-row justify-center pt-8 mt-10 ">
//         <img
//         src={cutlery}
//         className="max-w-xs h-48 pt-10"

//         alt="" />

//         <h1 className="mt-16 text-5xl capitalize font-extrabold  font-poppins ">
//           Curated <br />
//           Menu Plan
//         </h1>
//         <p className="m-10 text-lg text-left">
//           Unlock the power of personalized nutrition with <br />
//           a menu plan crafted by our Dietitian. Tailored to <br />
//           your unique dietary needs and preferences, our <br />
//           plans are designed to help you achieve your <br />
//           health and wellness goals.

//         </p>
//         </div>

//        <div className="flex justify-center bg-secondaryPink gap-8 pt-12 mb-10  ">
//       <div className="bg-white mb-72 rounded-3xl  ">
//         <h1 className="text-2xl font-extrabold pt-8">Weekly</h1>
//         <p className="pb-4 pt-4">Access to a Dietitian for 1 week</p>
//         <hr className="h-px my-8  bg-slate-400 border-0 " />
//         <p className="font-extrabold pr-28 text-3xl font-poppins capitalize">
//           NGN 15,000{" "}
//         </p>
//         <span className="pl-32">per week</span>
//         <p className="font-bold pr-32">What’s included</p>

//          <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left  pr-6 pl-14 ">
//          <li>3 virtual meetings or phone calls <br /></li>
//          <li >Unlimited access to a Dietitian via <br />email</li>
//          <li>Nutrition assessment, counselling <br /></li> and management{" "}
//          </ul>

//         <a href="/menupayment">
//         <button className="bg-primaryOrange rounded-2xl text-white text-bold  pl-7 pr-8 pt-3 pb-3">
//           Get Started
//         </button>

//         <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">
//           Select Plan

//         </button>
//         </a>
//       </div>

//       <div className="bg-white mb-72 rounded-2xl  ">
//         <h1 className="text-2xl font-extrabold pt-8">Monthly</h1>
//         <p className="pb-4 pt-4">Access to a Dietitian for 1 month</p>
//         <hr className="h-px my-8  bg-slate-400 border-0 " />
//         <p className="font-extrabold text-3xl pr-28 font-poppins capitalize">
//           NGN 30,000{" "}
//         </p>
//         <span className="pl-32">per month</span>
//         <p className="font-bold pr-32">What’s included</p>
//         {/* <p className="pb-7"> */}
//          <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pr-9 pl-14">
//          <li>12 virtual meetings or phone calls <br /></li>
//          <li>Unlimited access to a Dietitian via <br />email</li>
//          <li> Nutrition assessment, counselling <br /></li> and management{" "}
//          </ul>
//          {/* </p> */}

//         <a href="/menupayment">
//         <button className="bg-primaryOrange rounded-2xl text-bold text-white p-2">
//           Get Started
//         </button>
//         </a>
//       </div>

//         <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">
//         Select Plan
//         </button>

//       </section>

//   );
// }

// export default ServicePage;

import "../index.css";
import telephone from "../assets/images/Images/telephone-img.png";
import cutlery from "../assets/images/Images/cutlery-img.png";
import Berriesicon from "../assets/images/berriesicon.png";
import { Link } from "react-router-dom";

function ServicePage() {
  return (
    <section className="ml-12 mr-12 gap-7 ">
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
          Your source for nutritional wisdom and inspiration. Explore articles
          curated just for you on healthy <br />
          eating, recipes and more. Join us on a journey towards better health
          through balanced nutrition.
          <br />
          Stay Informed, Stay Healthy.
        </p>
      </div>

      <div className="bg-secondaryPink flex flex-row justify-center pt-14  ">
        <img src={telephone} className=" pt-12" alt="" />
        <h1 className="mt-20 text-5xl capitalize font-bold placeholder-blue-100   font-poppins">
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

          <div className="flex flex-col justify-center">
            <h3 className=" font-extrabold text-3xl pr-32 font-poppins capitalize">
              NGN 5,000
            </h3>
            <p className="pl-32 ">per week</p>
          </div>
          <p className="font-bold pr-32">What’s included</p>
          {/* <p className="pb-7"> */}
          <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pr-6 pl-10 ">
            <li>
              3 virtual meetings or phone calls <br />
            </li>
            <li>
              Unlimited access to a Dietitian via <br />
            </li>
            <li>
              email Nutrition assessment, counselling <br />
            </li>{" "}
            and management{" "}
          </ul>
          {/* </p> */}
          <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-8 mb-6 pl-16 pr-16 pt-4 pb-4">
            <Link to={"/payment"}>Select plan</Link>
          </button>
        </div>

        <div className="bg-white rounded-2xl mb-32 ">
          <h1 className="text-2xl font-extrabold pb-3 pt-9">Monthly</h1>
          <p className="pb-4">Access to a Dietitian for 1 month</p>
          <hr className="h-px my-9  bg-slate-400 border-0 " />
          <p className="font-extrabold text-2xl pr-32 font-poppins capitalize">
            NGN 10,000{" "}
          </p>
          <span className="pl-32">per week</span>
          <p className="font-bold pr-32">What’s included</p>

          <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pr-6 pl-14 pt-1">
            <li>12 virtual meetings or phone calls </li>
            <li>
              {" "}
              Unlimited access to a Dietitian via <br /> email{" "}
            </li>
            <li>
              {" "}
              Nutrition assessment, counselling <br />
              and management{" "}
            </li>
            <li> Support and follow-up from a Dietitian </li>
            <li>
              {" "}
              Access to a private community of <br />
              subscribers for support and <br />
              accountability{" "}
            </li>
          </ul>

          <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-8 mb-6 pl-16 pr-16 pt-4 pb-4">
            <Link to={"/payment"}>Select plan</Link>
          </button>
        </div>

        <div className="bg-white rounded-2xl  pt-9 ">
          <h1 className="text-2xl font-extrabold pb-3">Annually</h1>
          <p className="pb-4">Access to a Dietitian for 12 months</p>
          <hr className="h-px my-8 bg-slate-400 border-0 " />
          <p className="font-extrabold pr-32 text-2xl font-poppins capitalize">
            NGN 60,000
          </p>
          <span className="pl-32">per week</span>
          <p className="font-bold pr-32">What’s included</p>

          <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pl-14 pr-6 pt-2">
            <li>
              12 virtual meetings or phone calls <br /> every month
            </li>
            <li>
              {" "}
              Unlimited access to a Dietitian via <br /> email
            </li>
            <li>
              Nutrition assessment, counselling <br />
              and management
            </li>
            <li>
              Support and follow-up from a <br />
              Dietitian
            </li>
            <li>
              Access to a private community of <br />
              subscribers for support and <br /> accountability
            </li>
            <li>
              {" "}
              Webinar series on healthy food <br /> choices and lifestyle
            </li>
            <li>
              Online classes that focus on <br /> nutrition for families
            </li>
          </ul>

          <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-8 mb-6 pl-16 pr-16 pt-4 pb-4">
            <Link to={"/payment"}>Select plan</Link>
          </button>
        </div>
      </div>

      <h6 className="top-72">Chose Plan</h6>

      <section className="rounded-3xl ">
        <div className="bg-secondaryPink gap-16 flex flex-row justify-center pt-8 mt-10 ">
          <img src={cutlery} className="max-w-xs h-48 pt-10" alt="" />

          <h1 id="menu_plan" className="mt-16 text-5xl capitalize font-extrabold  font-poppins ">
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

        <div className="flex justify-center bg-secondaryPink gap-8 pt-12 mb-10  ">
          <div className="bg-white mb-72 rounded-3xl  ">
            <h1 className="text-2xl font-extrabold pt-8">Weekly</h1>
            <p className="pb-4 pt-4">Access to a Dietitian for 1 week</p>
            <hr className="h-px my-8  bg-slate-400 border-0 " />
            <p className="font-extrabold pr-28 text-3xl font-poppins capitalize">
              NGN 15,000{" "}
            </p>
            <span className="pl-32">per week</span>
            <p className="font-bold pr-32">What’s included</p>

            <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left  pr-6 pl-14 ">
              <li>
                3 virtual meetings or phone calls <br />
              </li>
              <li>
                Unlimited access to a Dietitian via <br />
                email
              </li>
              <li>
                Nutrition assessment, counselling <br />
              </li>{" "}
              and management{" "}
            </ul>

            <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">
              Select Plan
            </button>
          </div>

          <div className="bg-white mb-72 rounded-2xl  ">
            <h1 className="text-2xl font-extrabold pt-8">Monthly</h1>
            <p className="pb-4 pt-4">Access to a Dietitian for 1 month</p>
            <hr className="h-px my-8  bg-slate-400 border-0 " />
            <p className="font-extrabold text-3xl pr-28 font-poppins capitalize">
              NGN 30,000{" "}
            </p>
            <span className="pl-32">per month</span>
            <p className="font-bold pr-32">What’s included</p>
            {/* <p className="pb-7"> */}
            <ul className="list-image-[url(src/assets/images/checkmark.png)] text-left pr-9 pl-14">
              <li>
                12 virtual meetings or phone calls <br />
              </li>
              <li>
                Unlimited access to a Dietitian via <br />
                email
              </li>
              <li>
                {" "}
                Nutrition assessment, counselling <br />
              </li>{" "}
              and management{" "}
            </ul>
            {/* </p> */}

            <button className="bg-primaryOrange rounded-2xl text-bold text-white mt-7 mb-6 pl-16 pr-16 pt-4 pb-4">
              Select Plan
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ServicePage;
