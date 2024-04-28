import "../index.css";
import InputField from "../components/InputField";
import green from "../assets/images/Images/greenimg.png";
import halforange from "../assets/images/Images/halforange.png";
import chicken from "../assets/images/Images/chicken-img.png";



const FormsPage = () => {
    return (
      <>


           <div className="flex justify-center  mb-32">
    <div className="relative pb-36 ml-20">

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


        <div className="ml-2 pl-12 mr-20 mt-24">
          <h3 className="text-3xl pl-20 font-bold text-left">Tell us about yourself</h3>
          <p>Please fill this form so we can get to know you and <br />
           personalize this experience for you.</p> 

          <InputField
            label="Name"
            name="fullName"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Email"
            name="email"
            inputType="email"
            width="w-[450px]"
          />

          <InputField
            label="Age"
            name="Age"
            inputType="Age"
            width="w-[450px]"
          />

          <InputField
            label="Gender"
            name="Gender"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Phone Number"
            name="phone number"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Location"
            name="location"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Nationality"
            name="nationality"
            inputType="text"
            width="w-[450px]"
          />

          <InputField
            label="Height"
            name="height"
            inputType="text"
            width="w-[450px]"
          />

         <InputField
            label="Weight"
            name="weight"
            inputType="text"
            width="w-[450px]"
          />

          <button className="text-white rounded-2xl bg-primaryOrange pl-16 pr-16 pt-4 pb-4 mt-9">Submit</button>


          </div>
          </div>


          </>
  );
};

export default FormsPage;
        