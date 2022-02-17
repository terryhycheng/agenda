import ProjectHero from "../../components/projects/ProjectHero";
import ProjectCardList from "../../components/projects/ProjectCardList";
import { sanityClient } from "../../lib/sanity";
import { motion } from "framer-motion";
import fadeInOut from "../../lib/animations/fadeInOut";
import Loading from "../../components/Loading";

const categoryQuery = `*[_type == "category"]{
  _id,
  title
}`;
const projectsQuery = `*[_type == "project"] | order(name, asc){
  _id,
  mainImage,
  name,
  intro,
  slug,
  category->{
    title
  }
}`;

const Projects = ({ category, projects }) => {
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
          <ProjectHero category={category} />
          <ProjectCardList projects={projects} />
        </div>
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
  const category = await sanityClient.fetch(categoryQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { category, projects } };
};

export default Projects;
