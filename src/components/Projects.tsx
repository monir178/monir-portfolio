import ProjectCard from "./ProjectCard";

export type TProject = {
  _id: string;
  name: string;
  liveLink: string;
  github: string;
  image: string;
  technologies: string[];
  details: string;
  features: string[];
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
      <h1 className="text-3xl anton-text tracking-wider font-medium bg-clip-text text-transparent bg-gradient-to-t from-purple-300 to-violet-600 md:text-6xl text-center mb-8 md:mb-12 leading-relaxed">
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
