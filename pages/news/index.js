import NewsHero from "../../components/news/NewsHero";
import NewsList from "../../components/news/NewsList";
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data);
  }, []);

  return (
    <>
      <div className="ctn min-h-screen">
        <NewsHero />
        <NewsList news={news} />
      </div>
    </>
  );
};

export default News;
