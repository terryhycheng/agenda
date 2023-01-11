import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-white p-10 shadow-lg rounded-xl text-center flex flex-col justify-center items-center relative mt-20">
      <div className="absolute top-[-60px] h-[120px] w-[120px] mb-5 rounded-full overflow-hidden shadow-md">
        <Image
          src="/avatar/zvY94dFUiqKwu1PMVsw5_thatnordicguyredo.jpg"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/avatar/zvY94dFUiqKwu1PMVsw5_thatnordicguyredo.jpg"
          alt=""
        />
      </div>
      <p className="mt-8 text-sm">
        “I just wanted to personally thank you for being instrumental in
        involving The Hong Kong Cancer Fund and for making it possible for us to
        have been the beneficiary of the European Carnival. I can only say I was
        overwhelmed by their generosity we were not expecting to receive such an
        amazing donation.”
      </p>
      <hr className="border-t-2 my-4 w-3/4"></hr>
      <h3 className="text-2xl font-bold text-primary">Sally Lo, MBE</h3>
      <h4>Hong Kong Cancer Fund</h4>
    </div>
  );
};

export default Testimonial;
