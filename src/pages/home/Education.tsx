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
      <h1 className="text-3xl anton-text tracking-wider font-medium bg-clip-text text-transparent bg-gradient-to-t from-purple-300 to-violet-600 md:text-6xl text-center mb-8 md:mb-12">
        {" "}
        Education
      </h1>

      <div className="flex justify-center items-center gap-8  flex-wrap mb-12">
        {educationData.map((item) => (
          <CardContainer key={item.id} className="inter-var w-full h-full">
            <CardBody className="bg-transparent bg-opacity-15 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.5] dark:border-white/[0.2] border-white/[0.2]] w-[300px] h-[350px] rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold  dark:text-purple-200 text-purple-200">
                {item.type}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-purple-200 text-lg max-w-sm mt-2 dark:text-purple-200">
                {item.institution}
              </CardItem>
              <CardItem
                translateZ={20}
                className=" rounded-xl text-sm font-normal text-purple-200 dark:text-purple-200">
                {item.duration}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="w-full  overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    width={500}
                    height={400}
                    className="rounded-xl group-hover/card:shadow-xl h-[150px]"
                    alt={item.institution}
                  />
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-2">
                <CardItem
                  translateZ={20}
                  className=" py-2 rounded-xl   flex items-center gap-2 text-purple-200  font-bold">
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
