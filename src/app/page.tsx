import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";
import Banner from "@/pages/home/Banner";
import Education from "@/pages/home/Education";
import Skills from "@/components/Skills";
import ContactForm from "@/pages/home/ContactForm";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 container mx-auto px-4">
        <Banner />
        <Skills />
        <Education />
        <Projects />
        <Blogs />
        <ContactForm />
      </div>
    </main>
  );
}
