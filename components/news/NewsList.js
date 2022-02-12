import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  return (
    <div className="mb-[105px]">
      {news.length !== 0
        ? news.map((news_s) => <NewsCard key={news_s.id} content={news_s} />)
        : "Loading..."}
    </div>
  );
};

export default NewsList;
