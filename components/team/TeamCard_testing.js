import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor, PortableText } from "../../lib/sanity";
import Modal_testing from "./Modal_testing";

const TeamCard = ({ staff }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal_testing
          image={urlFor(staff?.profilePic).url()}
          title={staff?.title}
          name={staff?.name}
          intro={<PortableText blocks={staff?.introduction} />}
          closeHandler={setIsOpen}
          socialMedia={staff?.socialMedia}
        />
      )}
      <div
        className="flex flex-col justify-between items-center cursor-pointer hover:-translate-y-2 ani"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative min-h-[350px] w-full rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image
            src={urlFor(staff?.profilePic).url()}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={urlFor(staff?.profilePic).url()}
          />
        </div>
        <div className="p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-full">
          <h3 className="font-bold text-2xl text-primary">{staff?.name}</h3>
          <p className="text-sm">{staff?.title}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
