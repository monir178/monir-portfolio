"use client";
import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TProject } from "./Projects";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }: { project: TProject }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="w-full h-full  hover:scale-105 hover:shadow-2xl hover:shadow-purple-400 transition-all">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full flex flex-col">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project?.image}
            alt={project?.name}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        <div className="relative p-4 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold text-purple-100 mb-2">
              {project?.name}
            </h1>

            <div className="text-sm flex-wrap text-purple-200 border border-purple-300 font-medium flex gap-2 rounded-lg px-2 py-1">
              {project?.technologies?.map((tech, index) => (
                <React.Fragment key={index}>
                  <p>{tech}</p>
                  {index !== project?.technologies?.length - 1 && <p>,</p>}
                </React.Fragment>
              ))}
            </div>

            <p
              className={`text-purple-200 my-4 ${
                showFullText ? "" : "line-clamp-2"
              }`}>
              {project.details}
            </p>
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-300 hover:underline">
              {showFullText ? "Show Less" : "Read More"}
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
  );
};

export default ProjectCard;
