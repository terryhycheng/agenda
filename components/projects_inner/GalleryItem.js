import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import GalleryModal from "./GalleryModal";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoOpen } from "../../lib/reducers/innerPageSlice";

const GalleryItem = ({ photo }) => {
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.innerPage.photoValue);
  const selectedPhoto = useSelector((state) => state.innerPage.photoKey);

  return (
    <>
      {isModal && photo._key === selectedPhoto && (
        <GalleryModal photo={photo} />
      )}
      <div
        className="relative flex flex-col items-center gap-4 w-[95%] my-3 cursor-pointer"
        onClick={() => dispatch(setPhotoOpen(photo._key))}
      >
        <div className="relative w-11/12 h-[300px] overflow-hidden rounded-xl">
          <Image
            src={urlFor(photo).url()}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={urlFor(photo).url()}
            className="hover:scale-105 ani"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
