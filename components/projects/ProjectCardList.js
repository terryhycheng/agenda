import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../../src/projects";

const ProjectCardList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mb-[15vh] gap-4 lg:gap-8 ">
      {getAllProjects().map((card) => (
        <ProjectCard key={card.title.replace(" ", "")} info={card} />
      ))}
    </div>
  );
};

export default ProjectCardList;
