import Link from "next/link";
import { useRouter } from "next/router";
import { getProjectById } from "../../src/projects";
import InnerHero from "../../components/projects_inner/InnerHero";
import InnerServices from "../../components/projects_inner/InnerServices";
import FeatureCardList from "../../components/projects_inner/FeatureCardList";

const Project = () => {
  const router = useRouter();
  const { projectid } = router.query;
  const project = getProjectById(projectid);

  return (
    <>
      <div className="ctn">
        <InnerHero project={project} />
      </div>
      {project.services && <InnerServices project={project} />}
      <div className="ctn">
        <FeatureCardList />
      </div>
      <div className="ctn">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
          <Link href="/projects">
            <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
              Back to Projects
            </p>
          </Link>
          <Link href="/">
            <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
              Back to Homepage
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
