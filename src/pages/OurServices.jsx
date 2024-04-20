import "../index.css";
import Berriesicon from "../assets/images/berriesicon.png";
import telephone from "../assets/images/Images/telephone-img.png";
import cutlery from "../assets/images/Images/cutlery-img.png";

function Services() {
  return (
    <div className="mb-16 pb-4 mt-4 border">
      <div className="w-full bg-primaryGreen mb-2">
        <div className="max-w-4 ">
          <img
            src={Berriesicon}
            className="max-w-48 absolute pb-10 top-custom2 left-13"
            alt="berriesicon"
          />
        </div>
        <h2 className="text-5xl pt-14 pb-4">Our Blog</h2>
        <p className="pb-20">
          Your source for nutritional wisdom and inspiration. Explore articles
          curated just for you on healthy <br />
          eating, recipes and more. Join us on a journey towards better health
          through balanced nutrition.
          <br />
          Stay Informed, Stay Healthy.{" "}
        </p>
      </div>

      <div className="bg-secondaryPink flex flex-row justify-center pb-5 pt-5 border rounded-2xl w-[1100px] pl-10 mt-10 ml-10">
        <img src={telephone} className="max-w-xs" alt="" />
        <h1 className="mt-16 text-3xl capitalize font-extrabold  font-poppins">
          Virtual <br /> Consultation
        </h1>
        <p className="m-10 ">
          Discover the convenience of virtual <br />
          consultations with our expert dietitian. Get <br />
          personalized nutrition advice, meal plans, and <br />
          lifestyle recommendations from the comfort of <br />
          your home.
          <h5 className="pt-5 pr-64 font-bold">View Plan</h5>
        </p>
      </div>

      <div className="bg-secondaryPink flex flex-row justify-center pb-5 pt-5 border rounded-2xl w-[1100px] pl-10 mt-10 ml-10">
        <img src={cutlery} className="max-w-xs max- mx-2" alt="" />

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
    </div>
  );
}
export default Services;
