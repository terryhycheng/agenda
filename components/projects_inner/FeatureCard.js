import Image from "next/image";
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
          />
        </div>
        <div className="mt-[300px] p-10 pt-20 border-4 border-netural_var rounded-2xl h-full flex flex-col justify-evenly">
          <h1 className="text-3xl font-bold text-primary mb-8">
            {feature.title}
          </h1>
          <p className="text-sm whitespace-pre-line">{feature.paragrah}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
