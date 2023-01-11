import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Link scroll={false} href={"projects/" + project.slug.current} passHref>
        <div className="relative flex flex-col justify-between items-center hover:-translate-y-2 ani cursor-pointer mb-20 group">
          <div className="relative min-h-[300px] w-full rounded-xl overflow-hidden lg:min-h-[300px]">
            <Image
              src={urlFor(project.mainImage).url()}
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL={urlFor(project.mainImage).url()}
              className="group-hover:scale-105 ani"
              alt=""
            />
          </div>
          <div className="absolute bottom-[-80px] p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-full">
            <h3 className="font-bold text-3xl text-primary mb-1">
              {project.name}
            </h3>
            <p className="text-sm line-clamp-1">{project.intro}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
