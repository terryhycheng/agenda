import TeamCard from "./TeamCard";
import teamCards from "../../src/staff";
import { useEffect, useState } from "react";
import ErrorMsg from "../../components/ErrorMsg";

const TeamCardList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(async () => {
    const res = await fetch("/api/staff");
    const data = await res.json();
    setStaff(data);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mb-[65px] gap-4 lg:gap-8 ">
      {staff.length !== 0 ? (
        staff.map((card) => <TeamCard key={card.name} info={card} />)
      ) : (
        <ErrorMsg />
      )}
    </div>
  );
};

export default TeamCardList;
