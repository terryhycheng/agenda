import { BiXCircle } from "react-icons/bi";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import { useDispatch } from "react-redux";
import { setPhotoClose } from "../../lib/reducers/innerPageSlice";

const GalleryModal = ({ photo }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed mx-auto top-0 left-0 h-full w-full bg-black bg-opacity-90 shadow-md z-40 flex justify-center items-center">
      <div className="relative flex flex-col lg:h-2/3 lg:w-2/3 lg:max-w-[1000px] lg:max-h-[550px] h-[75vh] w-[90%]  rounded-2xl bg-opacity-90 justify-center items-end">
        <BiXCircle
          className=" text-white text-4xl z-50 opacity-50 hover:opacity-100 cursor-pointer lg:text-gray-400"
          onClick={() => dispatch(setPhotoClose())}
        />

        <div className="relative max-w-[800px] w-[1000px] max-h-[500px] h-[1000px]">
          <Image
            src={urlFor(photo).url()}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={urlFor(photo).url()}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
