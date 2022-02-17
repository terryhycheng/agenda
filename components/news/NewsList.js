import NewsCard from "./NewsCard";
import { motion } from "framer-motion";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const NewsList = ({ news }) => {
  return (
    <motion.div
      className="mb-[105px]"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {news?.length &&
        news.map((news_s) => (
          <motion.div variants={item} key={news_s._id}>
            <NewsCard content={news_s} />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default NewsList;
