import Image from "next/image";
import Link from "next/link";

const ErrorMsg = ({ content }) => {
  return (
    <div className="ctn">
      <div className="flex flex-col h-[60vh] justify-center items-center">
        {content === "Invalid Link" ? (
          <div className="flex flex-col gap-8 justify-center items-center">
            <h2 className="font-bold text-2xl">This is an invalid link.</h2>
            <Link href="/">
              <div className="btn cursor-pointer">Back to Homepage</div>
            </Link>
          </div>
        ) : (
          <>
            <div className="relative h-[80px] w-[80px] animate-pulse">
              <Image
                src="/ag-logo.svg"
                alt="Agenda Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-center text-lg tracking-wider text-gray-300">
              Loading
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorMsg;
