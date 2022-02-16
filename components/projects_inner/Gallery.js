import GalleryItem from "./GalleryItem";

const Gallery = ({ gallery }) => {
  return (
    <>
      {gallery?.length ? (
        <div className="my-20 py-20 bg-[#E7F2E8] shadow-inner">
          <div className="ctn">
            <h3 className="font-bold text-5xl text-primary mb-10">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {gallery.map((photo) => (
                <GalleryItem key={photo._key} photo={photo} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Gallery;
