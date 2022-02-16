import Image from "next/image";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { setVideoClose, setVideoOpen } from "../../lib/reducers/innerPageSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const isVideo = useSelector((state) => state.innerPage.videoValue);
  return (
    <>
      {isVideo ? (
        <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-screen z-30 p-4 bg-black bg-opacity-90">
          <ReactPlayer
            url="https://vimeo.com/449573751"
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
      <div className="grid grid-cols-2 lg:mt-8 mt-2 mb-[105px] lg:mb-[0px] gap-6 lg:min-h-[700px] min-h-[70vh] items-center">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 my-3 justify-center items-center lg:items-start lg:pr-[20%]">
          <div className="relative">
            <h1 className=" font-bold text-4xl lg:5xl lg:text-6xl text-primary text-center lg:text-left">
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
          <div className="flex flex-col lg:flex-row space-y-0 w-full lg:items-start items-center gap-4">
            <Link href="/team">
              <a className="btn text-neutral bg-primary w-full lg:w-3/4 text-center py-2">
                About Us
              </a>
            </Link>
            <button
              className="btn flex justify-center items-center w-full py-2"
              onClick={() => {
                dispatch(setVideoOpen());
              }}
            >
              <BiPlayCircle size={20} className="mr-1" />
              Watch Video
            </button>
          </div>
        </div>
        <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              alt=""
              src="/main_grid_bg.jpg"
              layout="fill"
              objectFit="cover"
              className="z-10"
              placeholder="blur"
              blurDataURL="/main_grid_bg.jpg"
            />
          </div>
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
