import NewsHero from "../../components/news/NewsHero";
import NewsList from "../../components/news/NewsList";
import { useState, useEffect } from "react";
import { sanityClient } from "../../lib/sanity";

const newsQuery = `*[_type == "news"]{
  date,
  title,
  content,
  slug,
  featureImg
}`;

const News = ({ db_news }) => {
  console.log(db_news);
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

export async function getStaticProps() {
  const db_news = await sanityClient.fetch(newsQuery);
  return { props: { db_news } };
}

export default News;
