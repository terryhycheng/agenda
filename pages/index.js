import HeroSection from "../components/index/HeroSection";
import LatestWorks from "../components/index/LatestWorks";
import NewsList from "../components/index/NewsList";
import Quote from "../components/index/Quote";
import Services from "../components/index/Services";
import Statistcs from "../components/index/Statistcs";
import Values from "../components/index/Values";
import { sanityClient } from "../lib/sanity";

const newsQuery = `*[_type == "news"] | order(date desc)[0...3] {
  _id,
  date,
  title,
  content,
  slug,
  featureImg
}`;
const projectQuery = `*[_type == "project" && isFeature ] | order(name asc) {
  _id,
  name,
  intro,
  slug,
  mainImage,
}`;

export default function Home({ db_news, latestWorks }) {
  return (
    <>
      <div className="ctn">
        <HeroSection />
        <Services />
        <Statistcs />
      </div>
      <Quote />
      <div className="ctn">
        <LatestWorks latestWorks={latestWorks} />
      </div>
      <Values />
      <div className="ctn">
        <NewsList news={db_news} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const db_news = await sanityClient.fetch(newsQuery);
  const latestWorks = await sanityClient.fetch(projectQuery);
  return { props: { db_news, latestWorks } };
}
