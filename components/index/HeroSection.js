import Image from "next/image";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-8 mb-[105px] lg:mb-[0px] gap-6 lg:min-h-[700px] min-h-[70vh] items-center">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 my-3 justify-center items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h1 className=" font-bold text-5xl lg:text-6xl text-primary text-center lg:text-left">
              <div className="inline-block relative">
                Provide
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>
              </div>{" "}
              Solutions
              <br />
              With{" "}
              <div className="inline-block relative">
                Creativity
                <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
              </div>
            </h1>
          </div>
          <p className="text-center lg:text-left text-sm">
            We utillise cutting edge solutions to seamlessly deliver
            multi-channel campaigns and keep pace in an ever-changing digital
            world.
          </p>
          <div className="flex space-x-3">
            <Link href="/team">
              <a className="btn2  min-w-[180px] text-center py-3">About Us</a>
            </Link>
            <Link href="#">
              <a className="btn flex justify-center items-center min-w-[180px] py-3">
                <BiPlayCircle size={20} className="mr-1" />
                Watch Video
              </a>
            </Link>
          </div>
        </div>
        <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1 ">
          <Image
            alt=""
            src="/main_grid_bg.jpg"
            layout="fill"
            objectFit="cover"
            className="z-10"
            placeholder="blur"
            blurDataURL="/main_grid_bg.jpg"
          />
          {/* Decorations */}
          <div className="absolute h-3/4 w-3/4 border-4 rounded-2xl border-primary left-[-50px] bottom-[-50px]"></div>
          <div className="absolute h-[90%] w-[90%] rounded-2xl bg-primary bg-opacity-10 left-[-30px] bottom-[-30px]"></div>
          <div className="absolute h-[15%] w-[1%] bg-primary left-[-20px] bottom-[-40px] z-20"></div>
          <div className="absolute h-[2%] w-[10%] bg-primary top-[-20px] right-[0px] z-20"></div>
          <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-60 right-[-20px] bottom-[-20px] z-20"></div>
        </div>
        <div className="pointer-events-none">
          <Image
            src="/curve.svg"
            alt=""
            layout="fill"
            objectFit="contain"
            className="opacity-50"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
