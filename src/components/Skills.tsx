import React from "react";

import SkillText from "@/components/data/SkillText";
import SkillCard from "@/components/SkillCard";

export type TSkill = {
  _id: string;
  img: string;
  name: string;
};

const Skills = async () => {
  const res = await fetch(
    "https://portfolio-server-steel-seven.vercel.app/skills",
    {
      cache: "no-store",
    }
  );
  const skills = await res.json();

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mb-4"
      style={{ transform: "scale(0.9)" }}>
      <SkillText />
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-10 items-center">
        {skills?.data.map((skill: TSkill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
