import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const NewsCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="relative h-[250px] w-[90%] lg:h-[250px] lg:w-[90%] rounded-xl overflow-hidden">
          <Image
            src="/news/The-Marketing-Society_Linkedin-2-01-1-1024x1024.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly xl:col-span-3 items-center">
          <div className="lg:basis-1/2">
            <p className="text-sm mb-4 opacity-50">August 27, 2021</p>
            <h3 className="text-xl lg:text-2xl leading-tight font-bold text-primary">
              Winner – Innovative Use of Technology Marketing Award
            </h3>
          </div>
          <div className="lg:basis-1/2 mt-2 text-sm leading-tight lg:text-base overflow-hidden space-y-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu
              lacus cras nullam ut sed orci aenean.
            </p>
            <Link href="#">
              <button className="btn xl:hidden">Read more</button>
            </Link>
          </div>
        </div>
        <button>
          <BsArrowRightCircle className="hidden xl:block text-4xl text-primary mx-auto" />
        </button>
      </div>
      <hr className="border-t-2 my-6" />
    </>
  );
};

export default NewsCard;
