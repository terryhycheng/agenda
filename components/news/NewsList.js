import NewsCard from "./NewsCard";
import ErrorMsg from "../ErrorMsg";

const NewsList = ({ news }) => {
  return (
    <div className="mb-[105px]">
      {news?.length ? (
        news.map((news_s) => <NewsCard key={news_s._id} content={news_s} />)
      ) : (
        <ErrorMsg />
      )}
    </div>
  );
};

export default NewsList;
