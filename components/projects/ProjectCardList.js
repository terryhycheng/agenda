import ProjectCard from "./ProjectCard";
import ErrorMsg from "../ErrorMsg";
import { useEffect, useState } from "react";

const ProjectCardList = ({ filter }) => {
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    if (filter !== "all") {
      data = data.filter((project) =>
        Object.values(project)[6].includes(filter)
      );
    }
    setProjects(data);
  }, [filter]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mb-[15vh] gap-4 lg:gap-8 ">
      {projects.length !== 0 ? (
        projects.map((card) => (
          <ProjectCard key={card.title.replace(" ", "")} info={card} />
        ))
      ) : (
        <div className="col-span-4">
          <ErrorMsg />
        </div>
      )}
    </div>
  );
};

export default ProjectCardList;
