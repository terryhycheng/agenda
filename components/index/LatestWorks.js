import Link from "next/link";
import WorksCard from "../WorksCard";

const LatestWorks = ({ latestWorks }) => {
  return (
    <div className="mb-[85px]">
      <div className="flex justify-between">
        <h2 className="subtitle text-3xl lg:text-4xl">Latest Works</h2>
        <Link scroll={false} href="/projects">
          <button className="btn">see more</button>
        </Link>
      </div>
      <div
        className={`flex flex-row gap-6 overflow-x-scroll lg:grid lg:grid-cols-${
          latestWorks?.length > 4 ? 4 : latestWorks?.length
        } lg:overflow-auto`}
      >
        {latestWorks?.length &&
          latestWorks.map((project) => (
            <>
              <WorksCard key={project._id} project={project} />
            </>
          ))}
      </div>
    </div>
  );
};

export default LatestWorks;
