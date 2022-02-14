import ContactHero from "../../components/contact/ContactHero";
import Map from "../../components/contact/Map";

const Contact = () => {
  return (
    <>
      <div className="ctn">
        <ContactHero />
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-16 mb-20">
          <div className="col-span-2">
            <Map />
          </div>
          <div className="flex flex-col gap-8 my-20 md:my-0 md:text-left text-center">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-primary text-3xl">Phone & Email</h2>
              <p className="leading-relaxed">
                <a
                  href="mailto:info@agconsulting.asia"
                  className="text-primary underline-offset-1 underline"
                >
                  info@agconsulting.asia
                </a>
                <br />
                +852 2890 4500
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-primary text-3xl">Our Office</h2>
              <p className="leading-relaxed">
                1201, Chinachem Hollywood Centre
                <br />
                1-12 Hollywood Road, Central
                <br />
                Hong Kong
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-primary text-3xl">Office Hours</h2>
              <p className="leading-relaxed">
                Monday - Friday
                <br />
                9:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
