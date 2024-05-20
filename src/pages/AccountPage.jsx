import "../index.css";
import womanimg from "../assets/images/Images/woman-img.png";


const AccountPage = () => {
    return (

        <div>
            <h1 className="font-bold text-5xl bg-primaryGreen pt-10 pb-10">My Account</h1>

            <div className="flex pb-9 justify-center flex-row">
                <div className="text-left pl-5 pt-8">
                    <img src={womanimg} 
                    className="w-48"
                     alt="" />
                    <h4 className="font-extrabold pt-8 text-3xl">Jen Bell</h4>
                    <p className="pb-8 ">jenbell@gmail.com</p>

                    <button className="p-3 bg-primaryGreen border rounded-2xl border-primaryGreen text-green-600">Personal Information</button>

                    <ul className="font-bold pl-2 pt-5 ">
                        <li className="">Appointments</li>
                        <li className="pt-6">Menu Plan</li>
                        <li className="pt-6">Settings</li>
                        <li className="pt-6  text-red-600">Log Out</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold  pt-10 pl-20 text-left text-3xl pb-5 ">Personal Information</h1>

                    <div className=" text-left ml-20 p-9 bg-secondaryPink w-96">
                    <h4 className="pt-4">Name</h4>
                    <p className="font-bold">Jen Bell</p>

                    <h4 className="pt-4">Age</h4>
                    <p className="font-bold">24</p>

                    <h4 className="pt-4">Birthday</h4>
                    <p className="font-bold">5th March, 2000</p>

                    <h4 className="pt-4">Weight</h4>
                    <p className="font-bold">65kg</p>

                    <h4 className="pt-4">height</h4>
                    <p className="font-bold">1.64cm</p>

                    <h4 className="pt-4">BMI</h4>
                    <p className="font-bold">22kg/cm</p>

                    <h4 className="pt-4">Allergens</h4>
                    <p className=" font-bold">Peanut</p>

                    <h4 className="pt-4">Diabetic</h4>
                    <p className="font-bold">No</p>


                    <h4 className="pt-4">Hypertenive</h4>
                    <p className="font-bold">No</p>












                    </div>
                </div>
            </div>
        </div>

    );
};

export default AccountPage;
