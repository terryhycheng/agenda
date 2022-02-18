const DaisyTest = () => {
  return (
    <div className="carousel w-full gap-10">
      <div className="relative w-full pt-16 pb-6 carousel-item " id="test1">
        <div className="relative card lg:max-w-screen-md w-full my-auto mx-auto bg-white border-4 border-opacity-50 border-neutral_var shadow-md items-center overflow-visible">
          <div className="absolute -top-12 avatar">
            <div className="w-28 rounded-full ring ring-primary ring-offset-4">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="card-body text-center pt-20 pb-10">
            <blockquote className="italic opacity-60 text-sm">
              “I just wanted to personally thank you for being instrumental in
              involving The Hong Kong Cancer Fund and for making it possible for
              us to have been the beneficiary of the European Carnival. I can
              only say I was overwhelmed by their generosity we were not
              expecting to receive such an amazing donation.”
            </blockquote>
            <div className="divider border-t-2 w-1/2 mx-auto"></div>
            <h4 className="font-bold text-2xl leading-3 text-primary">
              Sally Lo, MBE
            </h4>
            <p className="leading-3">Hong Kong Cancer Fund</p>
          </div>
        </div>
      </div>
      <div
        className="relative w-full min-h-[300px] carousel-item bg-slate-300"
        id="test2"
      >
        234
      </div>
    </div>
  );
};

export default DaisyTest;
