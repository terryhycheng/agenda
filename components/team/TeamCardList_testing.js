import TeamCard_testing from "./TeamCard_testing";
import ErrorMsg from "../ErrorMsg";

const TeamCardList = ({ staff }) => {
  staff.sort((a, b) => a.order - b.order);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mb-[65px] gap-4 lg:gap-8 ">
      {staff?.length > 0 ? (
        staff.map((card) => <TeamCard_testing key={card._id} staff={card} />)
      ) : (
        <ErrorMsg />
      )}
    </div>
  );
};

export default TeamCardList;
