import Link from "next/link";
import { useDispatch } from "react-redux";
import { sorting } from "../../lib/reducers/newsSlice";

const NewsHero = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-1 lg:mt-8 mb-[40px] gap-6 lg:min-h-[20vh] items-center">
        <div className="flex flex-col lg:gap-6 gap-4 my-3 justify-center items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h2 className="mb-8 text-base space-x-2 text-center lg:text-left">
              <Link href="/">Home</Link>
              <span> &gt; </span>
              <span className="font-bold text-primary"> News</span>
            </h2>
            <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left lg:mb-4">
              <div className="inline-block relative">
                News
                <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>
              </div>
            </h1>
          </div>
          <p className="text-center lg:text-left text-sm lg:w-3/4 w-full">
            Ipsum cillum eu velit commodo non quis sint esse. Non do ea ipsum
            non dolor. Pariatur aliquip sunt culpa quis non ipsum adipisicing
            occaecat id nisi irure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            Sorting :
            <select
              name="direction"
              className="rounded-lg text-primary border-2 border-neutral_var bg-opacity-60"
              onChange={(e) => {
                dispatch(sorting(parseInt(e.currentTarget.value)));
              }}
            >
              <option value={0}>Latest to Oldest</option>
              <option value={1}>Oldest to Latest</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHero;
