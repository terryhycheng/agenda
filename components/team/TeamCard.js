import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const TeamCard = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal
          image={info.url}
          title={info.title}
          name={info.name}
          intro={info.intro}
          closeHandler={setIsOpen}
          socialMedia={info.socialMedia}
        />
      )}
      <div
        className="flex flex-col justify-between items-center cursor-pointer hover:-translate-y-2 ani"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative min-h-[350px] w-full rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image src={info.url} layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className="p-4 mt-[-50px] bg-neutral border-4 border-neutral_var rounded-2xl z-10 w-full">
          <h3 className="font-bold text-2xl text-primary">{info.name}</h3>
          <p className="text-sm">{info.title}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
