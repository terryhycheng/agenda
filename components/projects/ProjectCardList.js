import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectCardList = ({ projects }) => {
  const currentfilter = useSelector((state) => state.project.filterValue);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mb-[15vh] gap-4 lg:gap-8 "
    >
      {projects?.length && currentfilter !== ""
        ? ((projects = projects.filter(
            (project) => project?.category.title === currentfilter
          )),
          projects.map((project) => (
            <motion.div key={project._id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          )))
        : projects.map((project) => (
            <motion.div key={project._id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
    </motion.div>
  );
};

export default ProjectCardList;
