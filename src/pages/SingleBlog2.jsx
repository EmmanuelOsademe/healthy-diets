import "../index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBlog } from "../services/backend.services";

const SingleBlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetchBlog(slug);
        setBlog(response);
      } catch (e) {
        console.log(e);
      }
    };
    getBlog();
  }, [slug]);

  if (!blog) return;

  return (
    <div>
      <nav>
        <ul className="bg-secondaryPink flex justify-center pt-10 space-x-16 font-semibold pb-8 ml-36 mr-36 rounded-lg ">
          <li> All</li>
          <li>Weightloss Tips</li>
          <li>Healthy Eating</li>
          <li
            className="bg-primaryOrange text-white w-36 h-8"
            style={{ paddingTop: "5px", marginTop: "0px", borderRadius: "15%" }}
          >
            Meal Planning
          </li>
          <li>Exercise Tips</li>
        </ul>
      </nav>

      <h3 className="bg-primaryOrange mt-8 mb-8 text-white text-4xl">
        {blog.title}
      </h3>

      <div className="flex gap-6">
        <img src={blog.imageUrl} className="ml-4 w-2/3" alt="" />
        <div className="flex flex-col justify-center">
          <h3 className="text-left font-bold text-xl mb-4">
            Don&apos;t Miss Out On The Latest Post <br />{" "}
            <span className="text-primaryOrange">Subscribe Now</span>
          </h3>
          <input
            type="text"
            placeholder="Your Email"
            className="w-full pl-4 h-16 border"
          />
          <button className="bg-primaryOrange text-white w-32 h-10 mt-4 self-start">
            {" "}
            {/* Add self-start class to align the button to the start */}
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-left ml-4 mt-2 mb-8">By Mia Bankole</p>
      <div
        dangerouslySetInnerHTML={{ __html: blog.description }}
        className={" text-[#4F547B]"}
      />
    </div>
  );
};

export default SingleBlogPage;
