import Image from "next/image";
import parse from "html-react-parser";
// console.log(entriesArr);

const FeatureCard = ({ project, feature }) => {
  return (
    <>
      <div className="relative flex flex-col items-center gap-4 lg:w-[85%] w-[95%] my-4">
        <div className="absolute w-11/12 h-[350px] overflow-hidden rounded-xl shadow-md">
          <Image
            src={`/projects/features/${project.id}/${feature.image}`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`/projects/features/${project.id}/${feature.image}`}
          />
        </div>
        <div className="mt-[300px] p-10 pt-20 border-4 border-netural_var rounded-2xl h-full flex flex-col justify-evenly">
          <h1 className="text-3xl font-bold text-primary mb-8">
            {feature.title}
          </h1>
          <div className="text-sm whitespace-pre-line list-decimal">
            {parse(`${feature.paragrah}`)}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
