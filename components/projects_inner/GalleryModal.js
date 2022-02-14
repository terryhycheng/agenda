import { BiXCircle } from "react-icons/bi";
import Image from "next/image";

const GalleryModal = ({ setIsModal, allEntries, entry }) => {
  return (
    <div className="fixed mx-auto top-0 left-0 h-full w-full bg-black bg-opacity-90 shadow-md z-40 flex justify-center items-center">
      <div className="relative flex lg:h-2/3 lg:w-2/3 lg:max-w-[1000px] lg:max-h-[550px] h-[75vh] w-[90%]  rounded-2xl bg-opacity-90 justify-center items-center">
        <BiXCircle
          className="absolute text-white text-4xl right-20 top-5 z-50 opacity-50 hover:opacity-100 cursor-pointer lg:text-gray-400"
          onClick={() => setIsModal(false)}
        />

        <div className="relative max-w-[800px] w-[1000px] max-h-[500px] h-[1000px]">
          <Image
            src={allEntries[`${entry}`]}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={allEntries[`${entry}`]}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
