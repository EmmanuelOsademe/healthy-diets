import { useNavigate } from "react-router-dom";
import backgroundimg from "../assets/images/Images/veggies-img.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendMessage } from "../services/backend.services";

const ContactPage = () => {
  const navigate = useNavigate();

  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setMessageData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const messageInput = {
      name: messageData.name,
      email: messageData.email,
      phone: messageData.phone,
      message: messageData.message,
    };

    const toastId = toast.loading("Sending Message");

    try {
      const status = await sendMessage(messageInput);
      if (status === 200) {
        toast.update(toastId, {
          render: "Message sent successfully 👌",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        navigate("/");
      }
    } catch (e) {
      toast.update(toastId, {
        render: `${e.message} 🤯`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4">
      <img src={backgroundimg} className="relative" alt="" />

      <div className=" absolute border border-slate-200 rounded-1xl top-9 pt-48 pb-10 w-[1220px]">
        <button className="pr-2 text-3xl w-[300px] pt-16 pb-9 bg-white border border-white rounded-3xl font-extrabold ">
          Get In Touch
        </button>

        <p className="font-semibold pb-4 ">
          We are here for you, feel free to reach out
        </p>

        <form
          className="mb-4 w-full flex flex-col gap-2  items-center"
          onSubmit={handleSubmit}
        >
          <div className=" bg-white gap-2 w-[460px]">
            <input
              required
              className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={messageData.name}
              type="text"
            />
          </div>

          <div className="flex flex-col pb-5 bg-white pt-5 gap-1 w-[460px]">
            <input
              required
              className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
              name="email"
              placeholder="john.doe@email.com"
              type="email"
              onChange={handleChange}
              value={messageData.email}
            />
          </div>

          <div className="flex flex-col pb-5 bg-white gap-1 w-[460px]">
            <input
              required
              className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
              name="phone"
              type="text"
              min={11}
              max={11}
              placeholder="08000000000"
              onChange={handleChange}
              value={messageData.phone}
            />
          </div>

          <div className="flex flex-col gap- bg-white w-[460px]">
            <textarea
              name="message"
              rows={7}
              cols={1}
              className="border rounded-xl md:rounded-md border-slate-600 md:text-black text-xl pl-3"
              placeholder="How can we help you?"
              onChange={handleChange}
              value={messageData.message}
            />
          </div>

          <button
            disabled={submitting}
            className="text-white bg-primaryOrange w-52 px-4 py-2 mt-4"
            type="submit"
          >
            {submitting ? "Sending" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
