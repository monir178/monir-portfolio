import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-4xl font-medium tracking-widest uppercase text-transparent md:text-5xl lg:text-7xl mb-20 leading-relaxed">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
