import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ info }) => {
  return (
    <Link href={"projects/" + info.id}>
      <div className="relative flex flex-col justify-between items-center hover:-translate-y-2 ani cursor-pointer mb-20">
        <div className="relative min-h-[350px] w-full rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image
            src={info.image}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute bottom-[-80px] p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-full">
          <h3 className="font-bold text-3xl text-primary mb-1">{info.title}</h3>
          <p className="text-sm truncate">{info.intro}</p>
          <div className="grid lg:grid-cols-2 grid-cols-3 xl:grid-cols-4 mt-3 gap-2">
            {info.tags.map((tag) => (
              <p
                key={tag}
                className="capitalize text-xs text-emerald-600 bg-emerald-100 bg-opacity-40 p-1 rounded-full text-center"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
