import Image from "next/image";
import Link from "next/link";

const ErrorPage = ({ content }) => {
  return (
    <div className="ctn">
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
          <Link href="/">
            <div className="btn cursor-pointer">Back to Homepage</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
