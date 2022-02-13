import Link from "next/link";
import WorksCard from "../WorksCard";
import ErrorMsg from "../ErrorMsg";
import { getFeatureProjects } from "../../src/projects";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LatestWorks = () => {
  // const projects = getFeatureProjects();

  const [projects_f, setProject_f] = useState([]);
  const router = useRouter();

  useEffect(async () => {
    const res = await fetch("/api/projects/feature");
    const data = await res.json();
    setProject_f(data);
  }, []);

  const counting = projects_f.length < 4 ? 3 : 4;

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
        {projects_f.length !== 0 ? (
          projects_f.map((project) => (
            <>
              <WorksCard key={project.id} info={project} />
            </>
          ))
        ) : (
          <ErrorMsg />
        )}
      </div>
    </div>
  );
};

export default LatestWorks;
