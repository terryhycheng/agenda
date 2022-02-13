import Image from "next/image";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import parser from "html-react-parser";

const InnerHero = ({ project }) => {
  const seperate = (arr) => {
    const lastword = arr.split(" ").pop();
    arr = arr
      .split(" ")
      .filter((element) => element != lastword)
      .join(" ");
    return [arr, lastword];
  };
  return (
    <>
      {/* -------- Breadcrumbs -------- */}
      {project.title ? (
        <h2 className="mb-8 text-base space-x-2 text-center lg:text-left mt-8">
          <Link href="/">
            <a className="hover:text-primary ani">Home</a>
          </Link>
          <span> &gt; </span>
          <Link href="/projects">
            <a className="hover:text-primary ani">Projects</a>
          </Link>
          <span> &gt; </span>
          <span className="font-bold text-primary">{project.title}</span>
        </h2>
      ) : (
        ""
      )}
      <div className="grid grid-cols-2 lg:mb-[85px] gap-24 min-h-[50vh] items-center">
        {project.image ? (
          <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1 ">
            <Image
              alt=""
              src={project.image}
              layout="fill"
              objectFit="cover"
              className="z-10"
              placeholder="blur"
              blurDataURL={project.image}
            />
            {/* Decorations */}
            <div className="absolute h-3/4 w-3/4 border-4 rounded-2xl border-primary left-[-50px] bottom-[-50px]"></div>
            <div className="absolute h-[90%] w-[90%] rounded-2xl bg-primary bg-opacity-10 left-[-30px] bottom-[-30px]"></div>
            <div className="absolute h-[15%] w-[1%] bg-primary left-[-20px] bottom-[-40px] z-20"></div>
            <div className="absolute h-[2%] w-[10%] bg-primary top-[-20px] right-[0px] z-20"></div>
            <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-60 right-[-20px] bottom-[-20px] z-20"></div>
          </div>
        ) : (
          ""
        )}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 my-3 justify-center items-center lg:items-start lg:pl-20">
          <div className="relative">
            {/* -------- Title -------- */}
            <h1 className=" font-bold text-5xl lg:text-6xl text-primary text-center lg:text-left mb-4">
              <span className="inline-block relative leading-[1.1]">
                {project.innerTitle && seperate(project.innerTitle)[0]}
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>{" "}
                <span className="inline-block relative">
                  {project.innerTitle && seperate(project.innerTitle)[1]}
                  <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
                </span>
              </span>
            </h1>
          </div>
          {/* -------- Inner Paragraph -------- */}
          <p className="text-center lg:text-left leading-6 whitespace-pre-line">
            {parser(`${project.intro_paragraph}`)}
          </p>
          {/* -------- Button -------- */}
          {project.video ? (
            <button className="btn flex justify-center items-center min-w-[180px] py-3 text-lg mt-6 w-3/4 md:w-1/2">
              <BiPlayCircle size={20} className="mr-1" />
              Watch Video
            </button>
          ) : (
            ""
          )}
        </div>
        {/* -------- Main Image -------- */}
        {project.image ? (
          <div className="pointer-events-none">
            <Image
              src="/curve.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              className="opacity-50 translate-y-[-150px]"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default InnerHero;
