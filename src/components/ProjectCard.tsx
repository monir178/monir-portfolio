"use client";
import { Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TProject } from "./Projects";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }: { project: TProject }) => {
  // const [showFullText, setShowFullText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-full h-[350px] md:h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-400 transition-all">
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full flex flex-col">
          <div className="relative h-96 md:h-[150px] lg:h-[250px] w-full overflow-hidden">
            <Image
              src={project?.image}
              alt={project?.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
            />
          </div>

          <div className="relative p-4 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-semibold text-purple-100 mb-2">
                <span className="font-bold">Project Name:</span> {project?.name}
              </h1>

              <button
                onClick={openModal}
                className="border px-4 py-1 rounded-lg mt-2 border-gray-500 text-gray-300">
                Details
              </button>
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <Link href={project.liveLink} target="_blank">
                <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <div className="flex items-center justify-between gap-1">
                      <Navigation size={16} />
                      <span>Live Site</span>
                    </div>
                  </span>
                </button>
              </Link>
              <Link href={project.github} target="_blank">
                <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <div className="flex items-center justify-between gap-1">
                      <FaGithub size={16} />
                      <span>Github</span>
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center backdrop-filter backdrop-blur-lg">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-[#030014] p-4 rounded-xl border border-purple-400 text-purple-200 shadow-lg max-w-5xl mx-auto">
              <div className="text-sm flex-wrap text-purple-200 font-medium flex gap-2 rounded-lg py-1 mb-2">
                <p className="font-semibold">Used Technologies: </p>
                {project?.technologies?.map((tech: string, index: number) => (
                  <React.Fragment key={index}>
                    <p>{tech}</p>
                    {index !== project?.technologies?.length - 1 && <p>,</p>}
                  </React.Fragment>
                ))}
              </div>
              <p>
                <span className="font-semibold">Project Overview:</span>
                {project.details}
              </p>

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

export default ProjectCard;
