import ServiceCard from "./ServiceCard";
import { BiPen, BiTestTube, BiBarChartAlt2, BiCalendar } from "react-icons/bi";

const Cards = [
  {
    icon: BiCalendar,
    title: "Strategic Planning",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: BiBarChartAlt2,
    title: "Marketing & PR",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: BiPen,
    title: "Design & Production",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
  {
    icon: BiTestTube,
    title: "Research & Training",
    paragraph:
      "We work hard for our clients and are humbled when our results are recognised.",
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="subtitle text-center text-3xl lg:text-4xl">
        What Do We Help?
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 lg:mt-10 lg:mb-10">
        {Cards.map((card) => (
          <ServiceCard
            key={card.title.replace(/\s+/g, "")}
            Icon={card.icon}
            title={card.title}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
