import Testimonials from "./Testimonials";
import Image from "next/image";

const logos = [
  {
    title: "Android",
    image: "/logos/1024px-Android_O_Preview_Logo.png",
  },
  {
    title: "Burger King",
    image: "/logos/burger_king_PNG14.png",
  },
  {
    title: "Coca Cola",
    image: "/logos/coca-cola-logo.png",
  },
  {
    title: "FedEx",
    image: "/logos/FedEx-Logo-PNG-Transparent.png",
  },
  {
    title: "Google",
    image:
      "/logos/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
  },
  {
    title: "RPC",
    image: "/logos/RPC-JP_Logo.png",
  },
  {
    title: "Starbucks",
    image: "/logos/Starbucks-Logo.png",
  },
  {
    title: "Wiki",
    image: "/logos/Wikimedia-logo.png",
  },
  {
    title: "Disney",
    image: "/logos/disney.png",
  },
];

const Values = () => {
  return (
    <div className="inner-shadow">
      <div className="mb-[105px] px-6 container mx-auto py-10 lg:py-20">
        <h2 className="subtitle text-center capitalize md:mb-6">
          We Shared Value with our clients
        </h2>
        <div className="flex overflow-hidden py-8 lg:py-12 lg:justify-center">
          <div className="flex gap-10">
            {logos.map((logo) => (
              <div
                key={logo.title}
                className="relative h-[55px] w-[100px] grayscale contrast-75"
              >
                <Image
                  alt={logo.title}
                  src={logo.image}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={logo.image}
                />
              </div>
            ))}
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Values;
