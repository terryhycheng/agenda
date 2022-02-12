import Link from "next/link";
import NewsCard from "../news/NewsCard";

const filterHandler = (arr) => {
  const latestArr = [];
  arr.sort((a, b) => new Date(b.date) - new Date(a.date));
  for (let i in arr) {
    i < 3 ? latestArr.push(arr[i]) : "";
  }
  return latestArr;
};

const NewsList = ({ news }) => {
  return (
    <div className="mb-[80px]">
      <div className="flex justify-between">
        <h2 className="subtitle">News</h2>
        <Link href="/news">
          <button className="btn">see more</button>
        </Link>
      </div>
      <div className="flex flex-col">
        <hr className="border-t-2 my-8" />
        {filterHandler(news).map((news_s) => (
          <NewsCard key={news_s.id} content={news_s} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
