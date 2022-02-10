import Link from "next/link";
import NewsCard from "./NewsCard";

const NewsList = () => {
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
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default NewsList;
