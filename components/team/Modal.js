import Image from "next/image";
import { BiXCircle } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Modal = ({ image, name, title, intro, closeHandler, socialMedia }) => {
  const getIcon = (key, value) => {
    if (key === "Facebook") {
      return (
        <a href={value} target="_blank" rel="noreferrer">
          <BsFacebook href={value} />
        </a>
      );
    } else if (key === "Instagram") {
      return (
        <a href={value} target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      );
    } else {
      return (
        <a href={value} target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      );
    }
  };

  return (
    <div className="fixed mx-auto top-0 left-0 h-full w-full bg-black bg-opacity-70 shadow-md z-40 flex justify-center items-center">
      <div className="relative grid lg:grid-cols-2 lg:h-2/3 lg:w-2/3 lg:max-w-[1000px] lg:max-h-[550px] h-[75vh] w-[90%] bg-white rounded-2xl bg-opacity-90 justify-center items-between overflow-y-auto">
        <BiXCircle
          className="absolute text-white text-4xl right-3 top-3 z-50 opacity-50 hover:opacity-100 cursor-pointer lg:text-gray-400"
          onClick={() => closeHandler(false)}
        />
        <div className="relative min-h-[350px] w-full lg:w-[90%]">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={image}
          />
        </div>
        <div className="px-6 flex flex-col justify-center py-8">
          <h2 className="text-3xl font-bold text-primary">{name}</h2>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="mb-8">{intro}</p>
          <div className="flex space-x-8 text-3xl">
            {socialMedia.map((media, index) => getIcon(media[0], media[1]))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
