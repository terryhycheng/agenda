import Link from "next/link";
import WorksCard from "../WorksCard";

const LatestWorks = () => {
  return (
    <div className="mb-[105px]">
      <div className="flex justify-between">
        <h2 className="subtitle">Latest Works</h2>
        <Link href="#">
          <button className="btn">see more</button>
        </Link>
      </div>
      <div className="flex flex-row gap-6 overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-auto">
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
      </div>
    </div>
  );
};

export default LatestWorks;
