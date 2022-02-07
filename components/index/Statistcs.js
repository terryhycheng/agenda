const statCards = [
  {
    num: "860+",
    title: "projects",
    color: "bg-gradient-to-t from-primary to-primary_grad",
  },
  {
    num: "55+",
    title: "clients",
    color: "bg-gradient-to-t to-[#7FC945] from-[#26A623]",
  },
  {
    num: "10+",
    title: "awards",
    color: "bg-gradient-to-t from-primary to-primary_grad",
  },
  {
    num: "100%",
    title: "repeat client rate",
    color: "bg-gradient-to-t to-[#7FC945] from-[#26A623]",
  },
];

const Statistcs = () => {
  return (
    <div className="grid grid-cols-2 gap lg:grid-cols-4 rounded-xl overflow-hidden mb-[105px]">
      {statCards.map((card, index) => (
        <div
          className={`${card.color} min-h-[220px] lg:min-h-[150px] lg:flex lg:items-center px-8 relative text-white`}
          key={index}
        >
          <h3 className="absolute lg:static bottom-10">
            <span className="text-5xl font-bold ">{card.num}</span>
            <br />
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Statistcs;
