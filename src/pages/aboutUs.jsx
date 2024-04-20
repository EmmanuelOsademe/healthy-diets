// import NavbarSection from "../Navbar";

import aboutbg from "../assets/images/Images/aboutbg.png";
import aboutbg2 from "../assets/images/Images/aboutbg2.png";
import dieticianimg from "../assets/images/Dietician-img.png";
// import Qicon from "../assets/images/Images/Qicon1.png";
// import Qicon2 from "./assets/images/Images/Qicon2.png";
// import veggie from "../assets/images/Images/veggie-img.png";

const AboutusPage = () => {
  return (
    <>
      {/* <NavbarSection /> */}

      <div className="">
        <div className="relative">
          <div>
            <img className=" w-lvw h-lvh " src={aboutbg} alt="" />
          </div>

          <div className="absolute top-[6rem] right-[2.6rem] flex flex-col gap-8 justify-center items-center">
            <button className="pr-2 text-4xl w-[200px] pt-2 pb-2 bg-white border border-slate-500 rounded-3xl font-extrabold ">
              About <span className="text-primaryOrange">Us</span>
            </button>
            <div className="max-w-[650px] text-left">
              <p className=" text-xl mb-4">
                Healthy diet for all aims at inspiring and empowering people to
                make positive changes to their lifestyle and improve their
                overall well-being.
              </p>
              <p className="text-xl">
                Our mission is to equip individuals with the knowledge and tools
                to make informed dietary choices for their long-term well-being
                and also assist them in bridging the gap between busy lifestyles
                and healthy eating habits.{" "}
              </p>
            </div>

            <button className="bg-primaryOrange pt-2 pb-2 text-white w-52 rounded-2xl ">
              Our Services
            </button>
          </div>
        </div>

        <div>
          <button className="pt-5 mt-9 pb-5 border border-slate-400  bg-slate-100 w-96 font-extrabold text-3xl">
            Know your <span className="text-primaryOrange">Dietician</span>
          </button>

          <div className="border border-primaryGreen pb-16 m-20 rounded-3xl flex items-center">
            <div className="flex-1">
              {/* <img
               src={veggie} 
               className=" p-9" 
               alt="" />  */}

              {/* <img src={Qicon} alt="quotesicon" className="w-132 pl-1" /> */}
              <h4 className="bg-white pb-16 text-2xl pr-10 mr-20  pt-10">
                I believe that every person is unique, and so is their
                relationship with food. That's why I offer personalised
                nutrition plans{" "}
              </h4>
              {/* <img src={Qicon2} alt="quotesicon" className="w-132 pl-1" /> */}

              <p className="pt-5 ml-10  pr-20 border w-[600px] border-slate-400 text-lg">
                Pascaline Ukwueze is a registered dietician with over five years
                of experience in the field of dietetics. She earned her B.Sc. in
                nutrition and dietetics from the University of Nigeria, Nsukka,
                and has since worked as a clinical dietician in two hospitals.
                She’s passionate about helping people to stay healthy while
                living their best lives through nutrition education, support,
                and encouragement.
              </p>
            </div>

            <div>
              <img
                src={dieticianimg}
                alt=""
                className="w-[300px] pr-12 pt-32"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <img className=" w-lvw h-lvh" src={aboutbg2} alt="" />

          <div className=" top-60 pl-20 absolute">
            <h3 className="mb-8 mt-28 text-4xl font-bold border inline-block border-b-2 border-primaryGreen ">
              Join The Thriving{" "}
              <span className="text-primaryOrange">Community</span>
            </h3>

            <div className="flex mr-32  mb-32">
              <input
                type="text"
                placeholder="Your Email"
                className="mr-8 ml-32 border border-gray-900 w-full pl-4 "
              />
              <button className="bg-primaryOrange text-white w-64 h-12 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
