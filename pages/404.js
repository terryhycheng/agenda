import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import fadeInOut from "../lib/animations/fadeInOut";

const ErrorPage = ({ content }) => {
  return (
    <motion.div
      className="ctn"
      variants={fadeInOut}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex flex-col h-[60vh] justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="relative h-[100px] w-[100px]">
            <Image
              src="/ag-logo.svg"
              alt="Agenda Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="font-bold text-2xl mb-8">This is an invalid link.</h2>
          <Link scroll={false} href="/" passHref>
            <div className="btn cursor-pointer">Back to Homepage</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
