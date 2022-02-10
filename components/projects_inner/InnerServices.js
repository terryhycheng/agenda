import { BiPen } from "react-icons/bi";

const InnerServices = ({ project }) => {
  return (
    <div className="py-20 bg-[url('/background.png')] bg-cover bg-opacity-60 text-primary mb-[105px]">
      <div className="ctn">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-8">
          <div className="flex flex-col justify-center md:items-start items-center">
            <BiPen className="text-8xl overflow-visible p-5 rounded-full  bg-primary_light text-primary" />
            <h2 className="font-bold text-5xl text-center md:text-left mt-4">
              Our Services
            </h2>
          </div>
          <div className="col-span-2 md:columns-2 columns-1 md:text-xl text-lg md:leading-loose leading-7 capitalize font-medium">
            {project.services.map((service) => (
              <li className="text-center md:text-left">{service}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerServices;
