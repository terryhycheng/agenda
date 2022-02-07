import Image from "next/image";

const WorksCard = () => {
  return (
    <div className="flex flex-col mt-8 mb-5 justify-center items-center cursor-pointer hover:-translate-y-2 ani">
      <div className="relative h-[250px] w-[250px] lg:w-full rounded-xl overflow-hidden lg:h-[350px]">
        <Image
          src="/carnival_main.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10">
        <h3 className="font-bold text-2xl text-primary">AIA Carnival</h3>
        <p className="text-sm">
          One of the biggest outdoor events in Hong Kong
        </p>
      </div>
    </div>
  );
};

export default WorksCard;
