import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

const WorksCard = ({ project }) => {
  return (
    <Link scroll={false} href={`projects/${project.slug.current}`} passHref>
      <div className="relative flex flex-col mt-8 mb-16 justify-between items-center cursor-pointer hover:-translate-y-2 ani">
        <div className="relative min-h-[300px] min-w-[250px] lg:min-w-[50px] w-[98%] rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image
            src={urlFor(project.mainImage).url()}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={urlFor(project.mainImage).url()}
            alt=""
          />
        </div>
        <div className="absolute bottom-[-50px] p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-[100%]">
          <h3 className="font-bold text-2xl text-primary">{project.name}</h3>
          <p className="text-sm truncate">{project.intro}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorksCard;
