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
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-4xl font-medium tracking-widest uppercase text-transparent md:text-5xl lg:text-7xl mb-20 leading-relaxed">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-12 gap-y-10 md:gap-y-6">
        {projects?.data.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
