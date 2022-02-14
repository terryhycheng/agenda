import Image from "next/image";
import { useEffect, useState } from "react";
import GalleryModal from "./GalleryModal";

const GalleryItem = ({ allEntries, entry }) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    isModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModal]);

  return (
    <>
      {isModal && (
        <GalleryModal
          setIsModal={setIsModal}
          allEntries={allEntries}
          entry={entry}
        />
      )}
      <div
        className="relative flex flex-col items-center gap-4 w-[95%] my-3 cursor-pointer"
        onClick={() => setIsModal(true)}
      >
        <div className="relative w-11/12 h-[300px] overflow-hidden rounded-xl">
          <Image
            src={allEntries[`${entry}`]}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={allEntries[`${entry}`]}
            className="hover:scale-105 ani"
          />
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
