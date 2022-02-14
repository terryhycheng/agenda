import ProjectHero from "../../components/projects/ProjectHero";
import ProjectCardList from "../../components/projects/ProjectCardList";
import { useState } from "react";

const Projects = () => {
  const tags = ["all", "education", "corporate", "event", "marketing"];
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className="ctn">
        <ProjectHero tags={tags} setFilter={setFilter} />
        <ProjectCardList filter={filter} />
      </div>
    </>
  );
};

export default Projects;
