import Testimonial from "./Testimonial";
import { GoPrimitiveDot } from "react-icons/go";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import DaisyTest from "./DaisyTest";

const Testimonials = () => {
  return (
    <>
      <div>
        {/* <Testimonial /> */}
        <DaisyTest />
      </div>
      <div className="mx-auto max-w-lg flex justify-between items-center my-6">
        <button>
          <BsArrowLeftCircle className="text-4xl text-primary" />
        </button>
        <div className="flex text-md gap-2">
          <GoPrimitiveDot className="text-primary" />
          <GoPrimitiveDot className="text-secondary text-opacity-20" />
          <GoPrimitiveDot className="text-secondary text-opacity-20" />
        </div>
        <button>
          <BsArrowRightCircle className="text-4xl text-primary" />
        </button>
      </div>
    </>
  );
};

export default Testimonials;
