import NewsHero from "../../components/news/NewsHero";
import NewsList from "../../components/news/NewsList";
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const directions = ["Latest to Oldest", "Oldest to Latest"];
  const [direction, setDirection] = useState("Latest to Oldest");

  useEffect(async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data);
  }, [direction]);

  function reorder(arr) {
    const ordered_list = arr.sort((a, b) => {
      var nameA = a.date.toUpperCase(); // ignore upper and lowercase
      var nameB = b.date.toUpperCase(); // ignore upper and lowercase
      if (direction === "Latest to Oldest") {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    });
    return ordered_list;
  }

  return (
    <>
      <div className="ctn min-h-screen">
        <NewsHero directions={directions} setDirection={setDirection} />
        <NewsList news={reorder(news)} />
      </div>
    </>
  );
};

export default News;
