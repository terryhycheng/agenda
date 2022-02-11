import Image from "next/image";

0;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const allEntries = importAll(
  require.context(
    "../../public/projects/carnival/gallery",
    true,
    /\.(png|jpe?g|svg)$/
  )
);

const entriesArr = [];

for (const i in allEntries) {
  entriesArr.push(i);
}

// console.log(entriesArr);

const FeatureCard = () => {
  return (
    <>
      {entriesArr.map((entry, index) => (
        <div
          className="relative flex flex-col items-center gap-4 w-[95%] my-4"
          key={index}
        >
          <div className="absolute w-11/12 h-[300px] overflow-hidden rounded-xl">
            <Image
              src={allEntries[`${entry}`]}
              layout="fill"
              objectFit="cover"
            />
            {console.log(entry)}
          </div>
          <div className="mt-[260px] p-10 pt-20 border-2 border-primary border-opacity-20 rounded-2xl">
            <h1 className="text-3xl font-bold text-primary mb-8">
              Putting the audience first
            </h1>
            <p className="text-sm">
              The demographic for the Carnival is broad. From teenagers and
              young families to professionals and corporate partners.
              Understanding the audience forms a key component of the marketing
              and communications strategy. We develop and execute high-reach
              strategies which incorporate our digital marketing expertise to
              drive conversion of the most valuable segments. Using eye-catching
              promotional content which speaks to the diverse audience, we
              generate hype and anticipation.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
