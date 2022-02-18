import TeamHero from "../../components/team/TeamHero";
import MidBanner from "../../components/team/MidBanner";
import TeamCardList from "../../components/team/TeamCardList";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../../lib/animations/fadeInOut";
import Loading from "../../components/Loading";

const staffQuery = `*[_type == "staff"]{
  _id,
  name,
  title,
  order,
  profilePic,
  introduction,
  socialMedia
}`;

const Team = ({ staff }) => {
  return (
    <>
      <Loading />
      <motion.div
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="ctn">
          <TeamHero />
        </div>
        <MidBanner />
        <div className="ctn">
          <TeamCardList staff={staff} />
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 mb-[65px] xl:my-[90px] xl:w-2/3 mx-auto">
            <Link scroll={false} href="/">
              <p className="btn text-md xl:text-base w-full cursor-pointer text-center">
                Back to Homepage
              </p>
            </Link>
            <Link scroll={false} href="/projects">
              <p className="btn text-md xl:text-base w-full cursor-pointer text-center">
                Our Works
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export async function getStaticProps() {
  const staff = await sanityClient.fetch(staffQuery);
  return { props: { staff } };
}

export default Team;
