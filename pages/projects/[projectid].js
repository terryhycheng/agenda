import Link from "next/link";
import { useRouter } from "next/router";
import projects from "../../src/projects";

const Project = () => {
  const router = useRouter();
  const { projectid } = router.query;
  const project = {};

  //Fetching JSON
  for (const i in projects) {
    if (projects[i].id === projectid) {
      project = projects[i];
    }
  }
  return (
    <>
      <div className="ctn">
        <div className="min-h-[20vh] flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl text-primary mb-4 text-center">
            {project.title}
          </h1>
          <p>{project.intro}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
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
