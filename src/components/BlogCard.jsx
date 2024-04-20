/* eslint-disable react/prop-types */
import { convertStringToDate } from "../utils";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex justify-between gap-2 w-[600px] shadow-lg p-2">
      <img
        src={blog.imageUrl}
        alt="left_image"
        className="w-64 h-64 pt-6 pl-4 pb-4 pr-4"
      />
      <div className="w-[400px]">
        <h3 className="text-2xl pt-6">{blog.title}</h3>
        <p className="mb-4 text-xs">{convertStringToDate(blog.createdAt)}</p>
        <p className="mb-4 pr-8 text-sm line-clamp-5">{blog.overview}</p>
        <button className="bg-primaryOrange text-white w-32 h-10 rounded-full">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
