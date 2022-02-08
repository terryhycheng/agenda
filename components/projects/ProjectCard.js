import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ info }) => {
  return (
    <Link href={"projects/" + info.id}>
      <div className="relative flex flex-col justify-between items-center hover:-translate-y-2 ani cursor-pointer">
        <div className="relative min-h-[350px] w-full rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image
            src={info.image}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute bottom-0 p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-[102%]">
          <h3 className="font-bold text-2xl text-primary">{info.title}</h3>
          <p className="text-sm">{info.intro}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
