import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { MapPinned } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: "School",
      institution: "Mymensingh Zilla School",
      img: "/assets/school.jpg",
      location: "Mymensingh, Bangladesh",
      duration: "(2009-2017)",
    },
    {
      id: 2,
      type: "College",
      institution: "Notre Dame College",
      img: "/assets/college.jpeg",
      location: "Mymensingh, Bangladesh",
      duration: "(2017-2019)",
    },
    {
      id: 3,
      type: "University",
      institution: "University of Chittagong",
      img: "/assets/varsity.jpg",
      location: "Chittagong, Bangladesh",
      duration: "(2019-Present)",
    },
  ];

  return (
    <div>
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-4xl font-medium tracking-widest uppercase text-transparent md:text-5xl lg:text-7xl mb-20">
        {" "}
        Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {educationData.map((item) => (
          <CardContainer key={item.id} className="inter-var w-full h-full">
            <CardBody className="bg-transparent bg-opacity-15 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.5] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold  dark:text-purple-200">
                {item.type}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-purple-200">
                {item.institution}
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className=" rounded-xl text-sm font-normal dark:text-purple-200">
                {item.duration}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full h-60 overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl group-hover/card:shadow-xl"
                    alt={item.institution}
                  />
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl   flex items-center gap-2 text-purple-200 text-lg font-bold">
                  <MapPinned />
                  <span>{item.location}</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Education;
