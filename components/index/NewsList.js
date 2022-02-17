import Link from "next/link";
import NewsCard from "../news/NewsCard";

const NewsList = ({ news }) => {
  return (
    <div className="mb-[80px]">
      <div className="flex justify-between">
        <h2 className="subtitle text-3xl lg:text-4xl">News</h2>
        <Link scroll={false} href="/news">
          <button className="btn">see more</button>
        </Link>
      </div>
      <div className="flex flex-col">
        {news.map((news_s) => (
          <NewsCard key={news_s._id} content={news_s} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
