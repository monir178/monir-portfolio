import ProjectCard from "./ProjectCard";

export type TProject = {
  _id: string;
  name: string;
  liveLink: string;
  github: string;
  image: string;
  technologies: string[];
  details: string;
};

const Projects = async () => {
  const res = await fetch(
    "https://portfolio-server-steel-seven.vercel.app/all-projects",
    {
      cache: "no-store",
    }
  );
  const projects = await res.json();

  return (
    <div id="projects">
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-2xl font-medium tracking-widest uppercase text-transparent md:text-3xl lg:text-5xl mb-8 md:mb-12 leading-relaxed">
        Recent Projects
      </h1>
      <div className="flex justify-center items-center  flex-wrap mb-6 gap-8">
        {projects?.data.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
