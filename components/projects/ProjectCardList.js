import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";

const ProjectCardList = ({ projects }) => {
  const currentfilter = useSelector((state) => state.project.filterValue);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mb-[15vh] gap-4 lg:gap-8 ">
      {projects?.length && currentfilter !== ""
        ? ((projects = projects.filter(
            (project) => project?.category.title === currentfilter
          )),
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          )))
        : projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
    </div>
  );
};

export default ProjectCardList;
