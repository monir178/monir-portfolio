"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Meteors } from "@/components/ui/meteors-effect";
import { TBlog } from "./Blogs";
import Image from "next/image";

const BlogsCard = ({ blog }: { blog: TBlog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="relative w-80 h-[350px]">
        <div className="inset-0 absolute h-full w-full bg-gradient-to-r from-purple-500 to-purple-200 transform scale-[0.80]  rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-[#030014] border border-gray-800  px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-purple-100 mb-4 z-50">
            {blog.title}
          </h1>
          <div className="relative w-full h-[200px] mb-4 z-40">
            <Image
              src={blog.img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              alt={blog.title}
              className="rounded-xl "
            />
          </div>
          <div
            className="font-normal text-base text-purple-200 mb-4 relative z-50 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          <button
            onClick={openModal}
            className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 z-50">
            Read More
          </button>
          <Meteors number={50} />
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] flex items-center justify-center backdrop-filter backdrop-blur-lg">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-[#030014] p-8 rounded-xl text-purple-200 border border-purple-400 shadow-lg w-full max-w-5xl mx-2 lg:mx-auto">
              <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
              <div
                className="font-normal text-base text-purple-200 mb-4 relative z-50 "
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className=" ml-auto relative  h-12 w-32 mt-4 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Close
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogsCard;
