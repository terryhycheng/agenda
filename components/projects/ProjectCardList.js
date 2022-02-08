import teamCards from "../../src/staff";
import ProjectCard from "./ProjectCard";
import projects from "../../src/projects";

const ProjectCardList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mb-[65px] gap-4 lg:gap-8 ">
      {projects.map((card) => (
        <ProjectCard key={card.title.replace(" ", "")} info={card} />
      ))}
    </div>
  );
};

export default ProjectCardList;
