import NewsHero from "../../components/news/NewsHero";
import NewsList from "../../components/news/NewsList";
import { sanityClient } from "../../lib/sanity";
import { useSelector } from "react-redux";

const newsQuery = `*[_type == "news"]{
  _id,
  date,
  title,
  content,
  slug,
  featureImg
}`;

const News = ({ db_news }) => {
  const newsOrder = useSelector((state) => state.news.value);

  newsOrder !== 0
    ? db_news.sort((a, b) => new Date(a.date) - new Date(b.date))
    : db_news.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <div className="ctn min-h-screen">
        <NewsHero />
        <NewsList news={db_news} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const db_news = await sanityClient.fetch(newsQuery);
  return { props: { db_news } };
}

export default News;
