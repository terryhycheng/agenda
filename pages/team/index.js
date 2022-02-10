import TeamHero from "../../components/team/TeamHero";
import MidBanner from "../../components/team/MidBanner";
import TeamCardList from "../../components/team/TeamCardList";
import Link from "next/link";

const Team = () => {
  return (
    <>
      <div className="ctn">
        <TeamHero />
      </div>
      <MidBanner />
      <div className="ctn">
        <TeamCardList />
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
          <Link href="/">
            <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
              Back to Homepage
            </p>
          </Link>
          <Link href="/projects">
            <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
              Our Works
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Team;
