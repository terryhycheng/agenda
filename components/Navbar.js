import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import links from "../src/navLinks";
import MobileMenu from "./MobileMenu";
import { useSelector, useDispatch } from "react-redux";
import { setMenuOpen } from "../lib/reducers/mobileMenuSlice";

const Navbar = () => {
  const menuState = useSelector((state) => state.mobileMenu.value);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex justify-center items-center fixed w-full top-0 z-30 bg-neutral bg-opacity-90 border-b-2 lg:px-10 px-4 max-h-[8%]">
        <div className="container mx-auto grid grid-cols-3 justify-between items-center py-4 px-2">
          <div>
            {/* {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />} */}
            {menuState && <MobileMenu />}
            <HiMenuAlt2
              className="xl:hidden text-5xl  p-[8px] rounded-full ani cursor-pointer"
              onClick={() => {
                dispatch(setMenuOpen());
              }}
            />
            <ul className="hidden xl:flex space-x-10 text-primary font-bold">
              {links.map((link) => (
                <li className="hover:text-secondary ani" key={link.title}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative lg:h-[50px] h-[80%] w-[100%]">
            <Image
              src="/ag-logo.svg"
              alt="Agenda Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/contact">
            <a className="btn text-xs lg:text-base md:w-3/4 lg:w-1/2 text-center cursor-pointer">
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
