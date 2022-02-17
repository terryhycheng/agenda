import Link from "next/link";
import Image from "next/image";
import { setFilter } from "../../lib/reducers/projectSlice";
import { useDispatch, useSelector } from "react-redux";

const ProjectHero = ({ category }) => {
  const filter = useSelector((state) => state.project.filterValue);
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-1 lg:mt-8 lg:mb-[40px] mb-[40px] lg:gap-6 lg:min-h-[25vh] items-center">
        <div className="pointer-events-none">
          <Image
            src="/curve.svg"
            alt=""
            layout="fill"
            objectFit="contain"
            className="opacity-50"
          />
        </div>
        <div className="flex flex-col lg:gap-6 gap-4 my-3 justify-center items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h2 className="lg:mb-8 mb-4 text-base space-x-2 text-center lg:text-left">
              <Link scroll={false} href="/">
                Home
              </Link>
              <span> &gt; </span>
              <span className="font-bold text-primary"> Projects</span>
            </h2>
            <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left lg:mb-4">
              <div className="inline-block relative">
                Our
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>
              </div>{" "}
              <div className="inline-block relative">
                Works
                <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
              </div>
            </h1>
          </div>
          <p className="text-center lg:text-left text-sm lg:w-3/4 w-full">
            Deserunt reprehenderit enim labore id et labore culpa excepteur
            occaecat aliqua. Est ea cupidatat minim proident commodo sint amet
            duis deserunt aliqua cillum.Consectetur ullamco laborum et ad
            adipisicing.
          </p>
          <div className="flex flex-wrap justify-center lg:gap-4 gap-2 mt-2">
            <button
              className="btn text-lg px-6"
              onClick={() => {
                dispatch(setFilter(""));
              }}
            >
              All
            </button>
            {category?.map((tag) => (
              <button
                className={`btn text-lg px-6 ${
                  tag.title === filter && "bg-primary text-neutral"
                }`}
                key={tag._id}
                onClick={() => {
                  dispatch(setFilter(tag.title));
                }}
              >
                {tag.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
