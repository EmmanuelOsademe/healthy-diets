import "../index.css";
import Berriesicon from "../assets/images/berriesicon.png";
import Bgimage from "../assets/images/bgimage.png";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../services/backend.services";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetchBlogs({ pageSize: 2 });
        setRecentBlogs(response.blogs);
      } catch (e) {
        console.log(e);
      }
    };
    getBlogs();
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetchBlogs({ pageSize: 6 });
        setTrendingBlogs(response.blogs);
      } catch (e) {
        console.log(e);
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <div className="w-full bg-primaryGreen mb-2">
        <div className="max-w-4">
          <img
            src={Berriesicon}
            className="max-w-48 absolute top-custom2 left-13"
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

      <nav>
        <ul className="bg-secondaryPink flex justify-center pt-10 space-x-16 font-semibold pb-8 ml-36 mr-36 rounded-lg ">
          <li
            className="bg-primaryOrange text-white w-24 h-8"
            style={{ paddingTop: "7px", marginTop: "0px", borderRadius: "15%" }}
          >
            All
          </li>
          <li>Weightloss Tips</li>
          <li>Healthy Eating</li>
          <li>Meal Planning</li>
          <li>Exercise Tips</li>
        </ul>
      </nav>

      <div style={{ textAlign: "left" }}>
        <h2 className="text-3xl font-semibold ml-12 my-8">Recent Posts</h2>
        <div className="flex justify-between flex-wrap gap-4 p-4 ">
          {recentBlogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>

      <div style={{ textAlign: "left" }}>
        <h2 className="text-3xl font-semibold ml-12 my-8">Trending Articles</h2>
        <div className="flex justify-between flex-wrap gap-4 p-4">
          {trendingBlogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
        {/* <div id="for_8_cards">
          <div id="trending_articles_cards1" className="flex mb-8">
            <div
              id="left_card1"
              className="flex rounded-md ml-12        shadow-lg"
            >
              <img
                src={Spicesoclock}
                alt="left_image"
                className="w-64
                         h-64 pt-6 pl-4 pb-4 pr-4"
              />
              <div>
                <h3 className="text-2xl pt-6">Spices O Clock!</h3>
                <p className="mb-6 text-xs">24th of March, 2024</p>

                <p className="mb-7 pr-8 text-sm">
                  Most people dismiss spices when it comes <br />
                  to eating healthily. There are so many <br />
                  spices you should start incorporating in <br />
                  your diet.
                </p>
                <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
                  Read More
                </button>
              </div>
            </div>
            <div
              id="right_card1"
              className="flex rounded-md ml-8        shadow-lg"
            >
              <img
                src={Spicesoclock}
                alt="left_image"
                className="w-64
                         h-64 pt-6 pl-4 pb-4 pr-4"
              />
              <div>
                <h3 className="text-2xl pt-6">Spices O Clock!</h3>
                <p className="mb-6 text-xs">24th of March, 2024</p>

                <p className="mb-7 pr-8 text-sm">
                  Most people dismiss spices when it comes <br />
                  to eating healthily. There are so many <br />
                  spices you should start incorporating in <br />
                  your diet.
                </p>
                <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div id="trending_articles_cards2" className="flex">
            <div
              id="left_card2"
              className="flex rounded-md ml-12        shadow-lg"
            >
              <img
                src={Spicesoclock}
                alt="left_image"
                className="w-64
                         h-64 pt-6 pl-4 pb-4 pr-4"
              />
              <div>
                <h3 className="text-2xl pt-6">Spices O Clock!</h3>
                <p className="mb-6 text-xs">24th of March, 2024</p>

                <p className="mb-7 pr-8 text-sm">
                  Most people dismiss spices when it comes <br />
                  to eating healthily. There are so many <br />
                  spices you should start incorporating in <br />
                  your diet.
                </p>
                <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
                  Read More
                </button>
              </div>
            </div>
            <div
              id="right_card2"
              className="flex rounded-md ml-8        shadow-lg"
            >
              <img
                src={Spicesoclock}
                alt="left_image"
                className="w-64
                         h-64 pt-6 pl-4 pb-4 pr-4"
              />
              <div>
                <h3 className="text-2xl pt-6">Spices O Clock!</h3>
                <p className="mb-6 text-xs">24th of March, 2024</p>

                <p className="mb-7 pr-8 text-sm">
                  Most people dismiss spices when it comes <br />
                  to eating healthily. There are so many <br />
                  spices you should start incorporating in <br />
                  your diet.
                </p>
                <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div id="trending_articles_cards3" className="flex">
            <div
              id="left_card3"
              className="flex rounded-md ml-12        shadow-lg"
            >
              <img
                src={Spicesoclock}
                alt="left_image"
                className="w-64
                         h-64 pt-6 pl-4 pb-4 pr-4"
              />
              <div>
                <h3 className="text-2xl pt-6">Spices O Clock!</h3>
                <p className="mb-6 text-xs">24th of March, 2024</p>

                <p className="mb-7 pr-8 text-sm">
                  Most people dismiss spices when it comes <br />
                  to eating healthily. There are so many <br />
                  spices you should start incorporating in <br />
                  your diet.
                </p>
                <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
                  Read More
                </button>
              </div>
            </div>
            <div
              id="right_card3"
              className="flex rounded-md ml-8        shadow-lg"
            >
              <img
                src={Spicesoclock}
                alt="left_image"
                className="w-64
                         h-64 pt-6 pl-4 pb-4 pr-4"
              />
              <div>
                <h3 className="text-2xl pt-6">Spices O Clock!</h3>
                <p className="mb-6 text-xs">24th of March, 2024</p>

                <p className="mb-7 pr-8 text-sm">
                  Most people dismiss spices when it comes <br />
                  to eating healthily. There are so many <br />
                  spices you should start incorporating in <br />
                  your diet.
                </p>
                <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="">
        <div className="flex justify-end">
          <img
            src={Bgimage}
            className="absolute h-96 mt-8 z-0 "
            alt="background_image"
          />
        </div>
        <h3 className="mb-8 mt-28 text-4xl font-bold border inline-block border-b-2 border-primaryGreen ">
          Join The Thriving{" "}
          <span className="text-primaryOrange">Community</span>
        </h3>

        <div className="flex mr-32 mb-32">
          <input
            type="text"
            placeholder="Your Email"
            className="mr-8 ml-32 border border-gray-900 w-full pl-4 "
          />
          <button className="bg-primaryOrange text-white w-64 h-12 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
