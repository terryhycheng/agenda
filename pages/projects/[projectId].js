import Link from "next/link";
import InnerHero from "../../components/projects_inner/InnerHero";
import InnerServices from "../../components/projects_inner/InnerServices";
import FeatureCardList from "../../components/projects_inner/FeatureCardList";
import Gallery from "../../components/projects_inner/Gallery";
import { sanityClient } from "../../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../../lib/animations/fadeInOut";
import Loading from "../../components/Loading";

const singleProjectQuery = `*[_type == "project" && slug.current == $projectId ][0]{
  _id,
  name,
  features,
  gallery,
  innerTitle,
  introParagraph,
  mainImage,
  mainVideo,
  otherVideos,
  services
}`;

const Project = ({ singleProject }) => {
  return (
    <>
      <Loading />
      <motion.div
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {singleProject && (
          <>
            <div className="relative ctn">
              <InnerHero project={singleProject} />
            </div>
            <InnerServices project={singleProject} />
            <div className="ctn">
              {singleProject.features && (
                <FeatureCardList features={singleProject.features} />
              )}
            </div>
            <Gallery gallery={singleProject.gallery} />
            {/* {singleProject?.otherVideos && <p>Other videos</p>} */}
            <div className="ctn">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
                <Link scroll={false} href="/projects" passHref>
                  <p className="btn text-md lg:text-base w-full lg:w-[50%] p-4 cursor-pointer text-center content-center">
                    Back to Projects
                  </p>
                </Link>
                <Link scroll={false} href="/" passHref>
                  <p className="btn text-md lg:text-base w-full lg:w-[50%] p-4 cursor-pointer text-center content-center">
                    Back to Homepage
                  </p>
                </Link>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type == "project" && defined(slug.current)]{
    "params":{
      "projectId": slug.current
    }
  }`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { projectId } = params;
  const singleProject = await sanityClient.fetch(singleProjectQuery, {
    projectId,
  });
  return { props: { singleProject }, revalidate: 60 };
};

export default Project;
