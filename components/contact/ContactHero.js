import Link from "next/link";

const ContactHero = () => {
  return (
    <>
      <div className="grid grid-cols-1 mt-8 gap-6 mb-6 lg:min-h-[20vh] items-center">
        <div className="flex flex-col gap-6 my-3 justify-center items-center lg:items-start lg:pr-40">
          <div className="relative">
            <h2 className="mb-8 text-base space-x-2 text-center lg:text-left">
              <Link href="/">Home</Link>
              <span> &gt; </span>
              <span className="font-bold text-primary"> Contact</span>
            </h2>
            <h1 className=" font-bold text-5xl lg:text-6xl text-primary text-center lg:text-left mb-4">
              <div className="inline-block relative">
                Contact
                <div className="absolute h-[20px] w-[100%] rounded-full bg-[#DFFF9A]  bottom-[-3px] z-[-1]"></div>
                <div className="absolute h-[60px] w-[60px] rounded-full bg-primary bg-opacity-10 left-[-30px] top-[-20px]"></div>
              </div>
            </h1>
          </div>
          <p className="text-center lg:text-left text-sm w-full">
            Ipsum cillum eu velit commodo non quis sint esse. Non do ea ipsum
            non dolor. Pariatur aliquip sunt culpa quis non ipsum adipisicing
            occaecat id nisi irure.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
