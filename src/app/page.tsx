// import SparklesPreview from "@/components/SparklesPreview";

import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";
import Banner from "@/pages/home/Banner";
import Education from "@/pages/home/Education";
import Skills from "@/pages/home/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Banner />
        <Skills />
        <Education />
        <Projects />
        <Blogs />
      </div>
    </main>
  );
}
