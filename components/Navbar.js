import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import links from "../src/navLinks";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, [isMenuOpen]);

  return (
    <>
      <nav className="flex justify-center items-center fixed w-full top-0 z-30 bg-neutral bg-opacity-90 border-b-2 lg:px-10 px-4">
        <div className="container mx-auto grid grid-cols-3 justify-between items-center py-4 px-2">
          <div>
            <div className="relative">
              {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
              <HiMenuAlt2
                className="xl:hidden text-6xl hover:bg-primary hover:text-neutral p-[8px] rounded-full ani cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            </div>
            <ul className="hidden xl:flex space-x-10 text-primary font-bold">
              {links.map((link) => (
                <li className="hover:text-secondary ani" key={link.title}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Image src="/ag-logo.svg" alt="Agenda Logo" width={70} height={50} />
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
