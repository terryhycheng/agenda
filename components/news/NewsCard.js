import Image from "next/image";
import Link from "next/link";
import { urlFor, PortableText } from "../../lib/sanity";

const NewsCard = ({ content }) => {
  const date = new Date(content.date);

  return (
    <>
      <Link scroll={false} href={`/news/${content.slug.current}`}>
        <div className="grid grid-cols-1 xl:grid-cols-6 sm:grid-cols-2 gap-4 lg:gap-10 hover:bg-neutral_var rounded-2xl  cursor-pointer ani my-2 first:mt-8 border-neutral_var border-4 overflow-hidden shadow-sm group">
          <div className="relative h-[250px] w-full lg:h-full lg:min-h-[250px] xl:col-span-2">
            <Image
              src={urlFor(content.featureImg).url()}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={urlFor(content.featureImg).url()}
              className="group-hover:scale-105 ani"
            />
          </div>
          <div className="flex flex-col xl:flex-row justify-evenly xl:col-span-4 xl:items-center gap-2 px-6 pb-6 lg:py-6">
            <div className="lg:basis-1/2">
              <p className="text-sm mb-4 opacity-50">{date.toDateString()}</p>
              <h3 className="text-xl lg:text-2xl leading-tight font-bold text-primary">
                {content.title}
              </h3>
            </div>
            <div className="lg:basis-1/2 mt-2 text-sm leading-tight lg:text-base space-y-3 flex flex-col gap-2">
              <div className="line-clamp-3 xl:px-4">
                <PortableText blocks={content.content} />
              </div>
              <div>
                <div className="btn xl:hidden text-center text-neutral bg-primary">
                  Read more
                </div>
              </div>
            </div>

            {/* <BsArrowRightCircle className="hidden xl:block text-4xl text-primary mx-auto" /> */}
          </div>
        </div>
      </Link>
      {/* <hr className="border-t-2 my-6" /> */}
    </>
  );
};

export default NewsCard;
