import Image from "next/image";
import Link from "next/link";

const TeamHero = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:mt-8 mb-[105px] lg:mb-[0px] gap-6 lg:min-h-[700px] items-center">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 lg:my-3 justify-center items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h2 className="mb-8 text-base space-x-2 text-center lg:text-left">
              <Link href="/">Home</Link>
              <span> &gt; </span>
              <span className="font-bold text-primary"> Team</span>
            </h2>
            <h1 className=" font-bold text-4xl lg:text-5xl text-primary text-center lg:text-left lg:mb-4">
              <div className="inline-block relative">
                To
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>
              </div>{" "}
              Drive{" "}
              <div className="inline-block relative">
                Community
                <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
              </div>
              Engagement
            </h1>
          </div>
          <p className="text-center lg:text-left text-sm">
            Our business was established to offer strategic and tactical
            expertise for schools to help deepen their connections with
            stakeholders. Today, we serve multiple sectors where generating
            greater social purpose is at our core.
            <br />
            <br /> We believe education, charity and business are inextricably
            linked through the communities they serve. As a local company with
            renowned, international partnerships, we successfully harness the
            depth and breadth of our relationships to cultivate meaningful
            connections. We use our marketing and communications expertise to
            join the dots.
          </p>
        </div>
        <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              alt=""
              src="/group_photo_1.jpg"
              layout="fill"
              objectFit="cover"
              className="z-10"
              placeholder="blur"
              blurDataURL="/group_photo_1.jpg"
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

export default TeamHero;
