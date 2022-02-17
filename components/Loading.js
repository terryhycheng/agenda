import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingState } from "../lib/reducers/footerSlice";
import { setFilter } from "../lib/reducers/projectSlice";

function Loading() {
  const router = useRouter();
  const filterValue = useSelector((state) => state.project.filterValue);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <motion.div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-neutral bg-opacity-90 z-20 ani">
        <div className="relative h-[100px] w-[100px] animate-pulse">
          <Image
            src="/ag-logo.svg"
            alt="Agenda Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className="text-center text-xl tracking-wider text-secondary opacity-50">
          Loading
          {filterValue !== "" ? dispatch(setFilter("")) : ""}
        </h2>
      </motion.div>
    )
  );
}

export default Loading;
