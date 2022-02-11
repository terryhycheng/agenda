import Image from "next/image";

const Gallery = ({ project }) => {
  function importAll(r) {
    let images = {};
    r.keys()
      .filter((word) => word.includes(project.id))
      .map((item, index) => {
        images[item.replace(`./${project.id}/`, "")] = r(item);
      });
    return images;
  }

  const allEntries = importAll(
    require.context("../../public/projects/gallery", true, /\.(png|jpe?g|svg)$/)
  );

  const entriesArr = [];

  for (const i in allEntries) {
    entriesArr.push(i);
  }
  return (
    <div className="my-20 py-20 bg-[#E7F2E8] shadow-inner">
      <div className="ctn">
        <h3 className="font-bold text-5xl text-primary mb-10">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {entriesArr.map((entry, index) => (
            <div
              className="relative flex flex-col items-center gap-4 w-[95%] my-4"
              key={Math.floor(Math.random() * 1000)}
            >
              <div className="relative w-11/12 h-[300px] overflow-hidden rounded-xl">
                <Image
                  src={allEntries[`${entry}`]}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
