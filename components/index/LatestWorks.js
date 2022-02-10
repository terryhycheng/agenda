import Link from "next/link";
import WorksCard from "../WorksCard";
import { getFeatureProjects } from "../../src/projects";

const LatestWorks = () => {
  const projects = getFeatureProjects();
  const counting = projects.length < 4 ? 3 : 4;

  return (
    <div className="mb-[105px]">
      <div className="flex justify-between">
        <h2 className="subtitle">Latest Works</h2>
        <Link href="/projects">
          <button className="btn">see more</button>
        </Link>
      </div>
      <div
        className={`flex flex-row gap-6 overflow-x-scroll lg:grid lg:grid-cols-${counting} lg:overflow-auto`}
      >
        {projects.map((project) => (
          <>
            <WorksCard key={project.id} info={project} />
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestWorks;
