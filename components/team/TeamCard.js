import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../lib/reducers/staffModalSlice";
import { urlFor, PortableText } from "../../lib/sanity";
import Modal from "./Modal";

const TeamCard = ({ staff }) => {
  const modalState = useSelector((state) => state.staffModal.value);
  const whichModal = useSelector((state) => state.staffModal.staff);
  const dispatch = useDispatch();

  return (
    <>
      {modalState && whichModal === staff?.name ? (
        <Modal
          image={urlFor(staff?.profilePic).url()}
          title={staff?.title}
          name={staff?.name}
          intro={<PortableText blocks={staff?.introduction} />}
          socialMedia={staff?.socialMedia}
        />
      ) : (
        ""
      )}
      <div
        className="flex flex-col justify-between items-center cursor-pointer hover:-translate-y-2 ani"
        onClick={() => {
          dispatch(setModalOpen(staff?.name));
        }}
      >
        <div className="relative min-h-[350px] w-full rounded-xl overflow-hidden lg:min-h-[350px]">
          <Image
            src={urlFor(staff?.profilePic).url()}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={urlFor(staff?.profilePic).url()}
            alt=""
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
