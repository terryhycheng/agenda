import HeroSection from "../components/index/HeroSection";
import LatestWorks from "../components/index/LatestWorks";
import NewsList from "../components/index/NewsList";
import Quote from "../components/index/Quote";
import Services from "../components/index/Services";
import Statistcs from "../components/index/Statistcs";
import Values from "../components/index/Values";

export default function Home() {
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
        <NewsList />
      </div>
    </>
  );
}
