import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const MiniNewsBar = ({ miniNews }) => {
  return (
    <div className="lg:block hidden">
      <div className="ml-[10%]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-primary text-3xl">Other News</h3>
          <Link href="/news" scroll={false}>
            <a className="btn">see all</a>
          </Link>
        </div>
        <hr className="border-t-2 my-4" />
        <div className="flex flex-col">
          {miniNews?.length &&
            miniNews.map((news) => (
              <>
                <div key={news._id}>
                  <Link href={`/news/${news.slug.current}`} scroll={false}>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 cursor-pointer hover:bg-neutral_var ani p-1 rounded-2xl group">
                      <div className="relative w-full h-[130px] overflow-hidden rounded-lg">
                        <Image
                          src={urlFor(news.featureImg).url()}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-110 ani"
                          placeholder="blur"
                          blurDataURL={urlFor(news.featureImg).url()}
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <h4 className="font-bold text-md leading-tight group-hover:text-primary ani">
                          {news.title}
                        </h4>
                        <p className="opacity-50">
                          {new Date(news.date).toDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <hr className="border-t-2 my-4" />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MiniNewsBar;
