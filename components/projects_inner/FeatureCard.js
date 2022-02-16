import Image from "next/image";
import { PortableText, urlFor } from "../../lib/sanity";

const FeatureCard = ({ feature }) => {
  return (
    <>
      <div className="relative flex flex-col items-center gap-4 lg:w-[90%] w-full my-2">
        <div className="absolute lg:w-11/12 lg:h-[350px] w-full h-[250px] overflow-hidden rounded-xl shadow-md">
          <Image
            src={urlFor(feature.featureImage).url()}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={urlFor(feature.featureImage).url()}
            className="hover:scale-105 ani"
          />
        </div>
        <div className="lg:mt-[300px] mt-[200px] p-10 px-8 pt-20 border-4 border-netural_var rounded-2xl h-full flex flex-col justify-evenly feature">
          <h1 className="text-3xl font-bold text-primary">
            {feature.featureTitle}
          </h1>
          <div className="text-sm whitespace-pre-line list-decimal">
            <PortableText blocks={feature.featureContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
