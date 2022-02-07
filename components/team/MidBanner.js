import Image from "next/image";

const Quote = () => {
  return (
    <div className="py-20 bg-[url('/background.png')] bg-cover bg-opacity-60 mb-[85px] lg:min-h-[20vh]">
      <div className="ctn">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-10">
            <h2 className="font-bold text-4xl lg:text-4xl text-center lg:text-left mb-5 text-primary">
              Our Team
            </h2>
            <h3 className="font-bold text-2xl lg:text-2xl text-center lg:text-left mb-5">
              Our dynamic team ensures our clients have their fingers on the
              pulse
            </h3>
          </div>
          <div className="px-10 text-center lg:text-left">
            <div className="relative w-full h-[100px] lg:w-1/2 lg:h-1/2 mb-3">
              <Image
                alt=""
                src="/scm_logo.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="">
              Our in-house production team, South Central Media, are close to
              the action and help us execute timely, relevant and impactful
              solutions for our global clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
