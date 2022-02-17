import Link from "next/link";
import Image from "next/image";
import MiniNewsBar from "../../components/news/MiniNewsBar";
import { sanityClient } from "../../lib/sanity";
import { urlFor, PortableText } from "../../lib/sanity";
import { useEffect } from "react";
import fadeInOut from "../../lib/animations/fadeInOut";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";

const singleNewsQuery = `*[_type == "news" && slug.current == $newsId][0]{
  _id,
  date,
  content,
  featureImg,
  slug,
  title
}`;

const miniNewsQuery = `*[_type == "news" && slug.current != $newsId] | order(date desc)[0...4]{
  _id,
  date,
  featureImg,
  slug,
  title
}`;

const NewsSingle = ({ data, miniNews }) => {
  const { singleNews } = data;
  const date = new Date(singleNews?.date).toDateString();

  useEffect(() => {
    global.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [singleNews]);

  return (
    <>
      <Loading />
      <motion.div
        className="ctn lg:mt-20 min-h-[100vh]"
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h2 className="text-base space-x-2 text-center lg:text-left lg:mt-8">
          <Link scroll={false} href="/">
            <a className="hover:text-primary ani">Home</a>
          </Link>
          <span> &gt; </span>
          <Link scroll={false} href="/news">
            <a className="hover:text-primary ani">News</a>
          </Link>
          <span> &gt; </span>
          <span className="font-bold text-primary">{singleNews?.title}</span>
        </h2>
        {/* -------- CONTENT TITLE ------- */}
        <div className="mb-10 mt-4">
          <div className="flex flex-col py-4 lg:py-10 gap-6">
            <h1 className="font-bold text-4xl lg:text-5xl text-primary leading-tight">
              {singleNews?.title}
            </h1>
            <p className="opacity-85">{date}</p>
            <hr />
          </div>
          <div className="grid lg:grid-cols-3">
            {/* -------- CONTENT CONTAINER ------- */}
            <div className="flex flex-col gap-4 col-span-2">
              <div className="relative w-full h-[300px] lg:h-[50vh] overflow-hidden rounded-2xl mb-4">
                <Image
                  src={urlFor(singleNews?.featureImg).url()}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={urlFor(singleNews?.featureImg).url()}
                />
              </div>
              <PortableText
                blocks={singleNews?.content}
                className="news text-sm"
              />
            </div>
            {/* -------- Mini News Bar ------- */}
            <MiniNewsBar miniNews={miniNews} />
          </div>
        </div>
        {/* -------- BUTTONS ------- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
          <Link scroll={false} href="/news">
            <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
              Back to News
            </p>
          </Link>
          <Link scroll={false} href="/">
            <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
              Back to Homepage
            </p>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type == "news" && defined(slug.current)]{
    "params":{
      "newsId" : slug.current
    }
  }`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { newsId } = params;
  const singleNews = await sanityClient.fetch(singleNewsQuery, { newsId });
  const miniNews = await sanityClient.fetch(miniNewsQuery, { newsId });
  return { props: { data: { singleNews }, miniNews } };
};

export default NewsSingle;
