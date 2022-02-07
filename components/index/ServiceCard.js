const ServiceCard = ({ Icon, title, paragraph }) => {
  return (
    <div className="flex flex-col justify-center lg:items-center lg:text-center lg:first:mt-0 lg:last:mb-0 first:mt-10 last:mb-10 p-6 border-4 border-netural_var rounded-2xl gap-2 lg:py-6 lg:min-h-[350px]">
      <div className="py-2">
        <Icon className="text-8xl overflow-visible p-5 rounded-full  bg-primary_light text-primary" />
      </div>
      <h2 className="font-bold text-2xl text-primary">{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
