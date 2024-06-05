"use client";
import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors-effect";
import { TBlog } from "@/components/Blogs";

const BlogsCard = ({ blog }: { blog: TBlog }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="">
      <div className=" w-full relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-purple-200 transform scale-[0.80]  rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-[#030014] border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-purple-100 mb-4 relative z-50">
            {blog.title}
          </h1>

          <p
            className={`font-normal text-base text-purple-200 mb-4 relative z-50 ${
              expanded ? "" : "line-clamp-3"
            }`}>
            {blog.description}
          </p>

          {expanded ? (
            <button
              onClick={toggleExpand}
              className="border px-4 py-1 rounded-lg  border-gray-500 text-purple-100">
              Show Less
            </button>
          ) : (
            <button
              onClick={toggleExpand}
              className="border px-4 py-1 rounded-lg  border-gray-500 text-purple-100">
              Read More
            </button>
          )}

          <Meteors number={50} />
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
