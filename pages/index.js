import HeroSection from "../components/index/HeroSection";
import LatestWorks from "../components/index/LatestWorks";
import NewsList from "../components/index/NewsList";
import Quote from "../components/index/Quote";
import Services from "../components/index/Services";
import Statistcs from "../components/index/Statistcs";
import Values from "../components/index/Values";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data);
  }, []);

  return (
    <>
      <div className="ctn">
        <HeroSection />
        <Services />
        <Statistcs />
      </div>
      <Quote />
      <div className="ctn">
        <LatestWorks />
      </div>
      <Values />
      <div className="ctn">
        <NewsList news={news} />
      </div>
    </>
  );
}
