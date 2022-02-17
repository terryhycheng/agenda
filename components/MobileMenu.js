import links from "../src/navLinks";
import Link from "next/link";
import { BiXCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setMenuClose } from "../lib/reducers/mobileMenuSlice";

const MobileMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute top-16 left-5 rounded-2xl bg-neutral border-4 border-neutral_var z-50 shadow-lg">
        <div className="flex flex-col px-10 py-4 relative">
          {/* <BiXCircle
          className="absolute opacity-20 left-2 top-2 text-4xl cursor-pointer hover:opacity-60 ani"
          onClick={() => {
            dispatch(setMenuClose());
          }}
        /> */}
          <ul className=" text-primary font-bold">
            {links.map((link) => (
              <div className="cursor-pointer" key={link.title}>
                <Link scroll={false} href={link.link}>
                  <li
                    className="hover:text-secondary ani py-3 text-xl"
                    onClick={() => {
                      dispatch(setMenuClose());
                    }}
                  >
                    {link.title}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 bg-neutral_var w-full h-screen z-10 bg-opacity-60"
        onClick={() => dispatch(setMenuClose())}
      ></div>
    </>
  );
};

export default MobileMenu;
