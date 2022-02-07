import TeamCard from "./TeamCard";
import teamCards from "../../src/staff";

const TeamCardList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mb-[65px] gap-4 lg:gap-8 ">
      {teamCards.map((card) => (
        <TeamCard key={card.name} info={card} />
      ))}
    </div>
  );
};

export default TeamCardList;
