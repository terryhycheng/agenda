import parse from "html-react-parser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import ErrorMsg from "../../components/ErrorMsg";
import Image from "next/image";
import MiniNewsBar from "../../components/news/MiniNewsBar";

const NewsSingle = () => {
  const [content, setContent] = useState([]);
  const [contentAll, setContentAll] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();
  const { newsId } = router.query;

  useEffect(async () => {
    const res = await fetch(`/api/news/${newsId}`);
    const res_2 = await fetch(`/api/news/`);
    const data_2 = await res_2.json();
    const data = await res.json();
    if (!data.message) {
      setContent(data);
    } else {
      setContent(data.message);
    }
    setContentAll(
      data_2
        .filter((each) => each.id != newsId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
    setIsChange(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // console.log("fetch");
  }, [router.isReady, isChange]);

  const date = new Date(content.date).toDateString();

  return (
    <div className="ctn mt-20 min-h-[100vh]">
      {content.title ? (
        <>
          <h2 className="text-base space-x-2 text-center lg:text-left mt-8">
            <Link href="/">
              <a className="hover:text-primary ani">Home</a>
            </Link>
            <span> &gt; </span>
            <Link href="/news">
              <a className="hover:text-primary ani">News</a>
            </Link>
            <span> &gt; </span>
            <span className="font-bold text-primary">{content.title}</span>
          </h2>
          {/* -------- CONTENT TITLE ------- */}
          <div className="mb-10 mt-4">
            <div className="flex flex-col py-4 lg:py-10 gap-6">
              <h1 className="font-bold text-5xl text-primary leading-tight">
                {content.title}
              </h1>
              <p className="opacity-85">{date}</p>
              <hr />
            </div>
            <div className="grid lg:grid-cols-3">
              {/* -------- CONTENT CONTAINER ------- */}
              <div className="flex flex-col gap-4 col-span-2">
                <div className="relative w-full h-[300px] lg:h-[50vh] overflow-hidden rounded-2xl mb-4">
                  <Image src={content.image} layout="fill" objectFit="cover" />
                </div>
                {content.innerTitle ? (
                  <h3 className="font-bold text-2xl">{content.innerTitle}</h3>
                ) : (
                  ""
                )}
                <div className="text-sm leading-normal">
                  {parse(`${content.content}`)}
                </div>
                {content.quote ? (
                  <p className="italic p-6 text-sm text-black text-opacity-70 border-neutral_var border-4 bg-neutral_var bg-opacity-30 rounded-2xl">
                    {parse(`${content.quote}`)}
                  </p>
                ) : (
                  ""
                )}
              </div>
              {/* -------- Mini News Bar ------- */}
              <MiniNewsBar contentAll={contentAll} setIsChange={setIsChange} />
            </div>
          </div>
          {/* -------- BUTTONS ------- */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-[65px] lg:my-[90px] lg:w-2/3 mx-auto">
            <Link href="/news">
              <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
                Back to News
              </p>
            </Link>
            <Link href="/">
              <p className="btn text-md lg:text-base w-full p-4 cursor-pointer text-center">
                Back to Homepage
              </p>
            </Link>
          </div>
        </>
      ) : (
        <ErrorMsg content={content} />
      )}
    </div>
  );
};

export default NewsSingle;
