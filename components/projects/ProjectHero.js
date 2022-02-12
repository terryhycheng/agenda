import Link from "next/link";
import Image from "next/image";

const ProjectHero = () => {
  const tags = ["All", "Education", "Corporate"];

  return (
    <>
      <div className="grid grid-cols-1 mt-8 mb-[70px] gap-6 lg:min-h-[25vh] items-center">
        <div className="pointer-events-none">
          <Image
            src="/curve.svg"
            alt=""
            layout="fill"
            objectFit="contain"
            className="opacity-50"
          />
        </div>
        <div className="flex flex-col gap-6 my-3 justify-center items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h2 className="mb-8 text-base space-x-2 text-center lg:text-left">
              <Link href="/">Home</Link>
              <span> &gt; </span>
              <span className="font-bold text-primary"> Projects</span>
            </h2>
            <h1 className=" font-bold text-5xl lg:text-6xl text-primary text-center lg:text-left mb-4">
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
          <p className="text-center lg:text-left text-sm w-3/4">
            Deserunt reprehenderit enim labore id et labore culpa excepteur
            occaecat aliqua. Est ea cupidatat minim proident commodo sint amet
            duis deserunt aliqua cillum.Consectetur ullamco laborum et ad
            adipisicing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag) => (
              <button className="btn text-lg px-6" key={tag}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
