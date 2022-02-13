import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../../src/projects";
import { useEffect, useState } from "react";
import ErrorMsg from "../ErrorMsg";

const ProjectCardList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mb-[15vh] gap-4 lg:gap-8 ">
      {projects.length !== 0 ? (
        projects.map((card) => (
          <ProjectCard key={card.title.replace(" ", "")} info={card} />
        ))
      ) : (
        <ErrorMsg />
      )}
    </div>
  );
};

export default ProjectCardList;
