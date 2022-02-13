import Link from "next/link";
import { useRouter } from "next/router";
import InnerHero from "../../components/projects_inner/InnerHero";
import InnerServices from "../../components/projects_inner/InnerServices";
import FeatureCardList from "../../components/projects_inner/FeatureCardList";
import Gallery from "../../components/projects_inner/Gallery";
import { useEffect, useState } from "react";
import ErrorMsg from "../../components/ErrorMsg";

const Project = () => {
  const [project_s, setProject_s] = useState([]);
  const router = useRouter();
  const { projectid } = router.query;

  useEffect(async () => {
    const res = await fetch(`/api/projects/${projectid}`);
    const data = await res.json();
    if (!data.message) {
      setProject_s(data);
    } else {
      setProject_s(data.message);
    }
  }, [router.isReady]);

  return (
    <>
      {project_s.title ? (
        <>
          <div className="ctn">
            <InnerHero project={project_s} />
          </div>
          {project_s.services && <InnerServices project={project_s} />}
          <div className="ctn">
            {project_s.features && <FeatureCardList project={project_s} />}
          </div>
          <Gallery project={project_s} />
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
      ) : (
        <ErrorMsg content={project_s} />
      )}
    </>
  );
};

export default Project;
