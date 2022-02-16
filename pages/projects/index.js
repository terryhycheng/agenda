import ProjectHero from "../../components/projects/ProjectHero";
import ProjectCardList from "../../components/projects/ProjectCardList";
import { sanityClient } from "../../lib/sanity";

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
      <div className="ctn">
        {console.log(projects)}
        <ProjectHero category={category} />
        <ProjectCardList projects={projects} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const category = await sanityClient.fetch(categoryQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { category, projects } };
};

export default Projects;
