import Image from "next/image";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import ReactPlayer from "react-player";
import { PortableText, urlFor } from "../../lib/sanity";
import { useDispatch, useSelector } from "react-redux";
import { setVideoClose, setVideoOpen } from "../../lib/reducers/innerPageSlice";

const InnerHero = ({ project }) => {
  const dispatch = useDispatch();
  const isVideo = useSelector((state) => state.innerPage.videoValue);

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
      {isVideo && project?.mainVideo ? (
        <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-screen z-30 p-4 bg-black bg-opacity-90">
          <ReactPlayer
            url={project?.mainVideo}
            controls="true"
            wrapper="div"
            className="max-w-full"
          />
          <button
            className="btn border-white text-white hover:bg-white hover:text-black text-xl z-50 sm:mt-8"
            onClick={() => {
              dispatch(setVideoClose());
            }}
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}
      {project?.name ? (
        <h2 className="mb-8 text-base space-x-2 text-center lg:text-left lg:mt-8 mt-2 ">
          <Link href="/">
            <a className="hover:text-primary ani">Home</a>
          </Link>
          <span> &gt; </span>
          <Link scroll={false} href="/projects">
            <a className="hover:text-primary ani">Projects</a>
          </Link>
          <span> &gt; </span>
          <span className="font-bold text-primary">{project.name}</span>
        </h2>
      ) : (
        ""
      )}
      <div className="grid grid-cols-2 lg:mb-[85px] gap-24 lg:gap-12 min-h-[50vh] items-center">
        {project?.mainImage ? (
          <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1 ">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                alt=""
                src={urlFor(project.mainImage).url()}
                layout="fill"
                objectFit="cover"
                className="z-10"
                placeholder="blur"
                blurDataURL={urlFor(project.mainImage).url()}
              />
            </div>
            {/* Decorations */}
            <div className="absolute h-3/4 w-3/4 border-4 rounded-2xl border-primary left-[-50px] bottom-[-50px]"></div>
            <div className="absolute h-[90%] w-[90%] rounded-2xl bg-primary bg-opacity-10 left-[-30px] bottom-[-30px]"></div>
            <div className="absolute h-[15%] w-[1%] bg-primary left-[-20px] bottom-[-40px] z-10"></div>
            <div className="absolute h-[2%] w-[10%] bg-primary top-[-20px] right-[0px] z-10"></div>
            <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-60 right-[-20px] bottom-[-20px] z-10"></div>
          </div>
        ) : (
          ""
        )}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 mb-20 lg:mb-0 justify-center items-center lg:items-start lg:pl-20">
          <div className="relative">
            {/* -------- Title -------- */}
            <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left mb-4">
              <span className="inline-block relative leading-[1.1]">
                {project?.innerTitle && seperate(project.innerTitle)[0]}
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>{" "}
                <span className="inline-block relative">
                  {project?.innerTitle && seperate(project.innerTitle)[1]}
                  <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
                </span>
              </span>
            </h1>
          </div>
          {/* -------- Inner Paragraph -------- */}
          <div className="text-center lg:text-left text-sm">
            <PortableText blocks={project.introParagraph} />
          </div>
          {/* -------- Button -------- */}
          {project?.mainVideo ? (
            <>
              <button
                className="btn flex justify-center items-center min-w-[180px] py-3 text-lg mt-6 w-3/4 md:w-1/2"
                onClick={() => {
                  dispatch(setVideoOpen());
                }}
              >
                <BiPlayCircle size={20} className="mr-1" />
                Watch Video
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default InnerHero;
