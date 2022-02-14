import Image from "next/image";
import Link from "next/link";

const WorksCard = ({ info }) => {
  return (
    <Link href={"projects/" + info.id}>
      <div className="relative flex flex-col mt-8 mb-16 justify-between items-center cursor-pointer hover:-translate-y-2 ani">
        <div className="relative min-h-[300px] min-w-[250px] lg:min-w-[50px] w-[98%] rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image
            src={info.image}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={info.image}
          />
        </div>
        <div className="absolute bottom-[-50px] p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-[100%]">
          <h3 className="font-bold text-2xl text-primary">{info.title}</h3>
          <p className="text-sm truncate">{info.intro}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorksCard;
