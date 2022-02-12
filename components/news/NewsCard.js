import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const NewsCard = ({ content }) => {
  const date = new Date(content.date);

  return (
    <>
      <Link href={`/news/${content.id}`}>
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 hover:bg-neutral_var rounded-2xl  cursor-pointer ani">
          <div className="relative h-[250px] w-full lg:h-[250px] lg:w-[90%] rounded-xl overflow-hidden xl:col-span-2">
            <Image src={content.image} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly xl:col-span-4 lg:items-center gap-4">
            <div className="lg:basis-1/2">
              <p className="text-sm mb-4 opacity-50">{date.toDateString()}</p>
              <h3 className="text-xl lg:text-2xl leading-tight font-bold text-primary">
                {content.title}
              </h3>
            </div>
            <div className="lg:basis-3/4 mt-2 text-sm leading-tight lg:text-base space-y-3 flex flex-col gap-2">
              <p className="line-clamp-3 lg:px-4">{content.content}</p>
              <div>
                <div className="btn xl:hidden text-center">Read more</div>
              </div>
            </div>
            <button>
              <BsArrowRightCircle className="hidden xl:block text-4xl text-primary mx-auto" />
            </button>
          </div>
        </div>
      </Link>
      <hr className="border-t-2 my-6" />
    </>
  );
};

export default NewsCard;
