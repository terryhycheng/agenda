import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import links from "../src/navLinks";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center fixed w-full top-0 z-30 bg-neutral bg-opacity-90 border-b-2">
        <div className="container mx-auto grid grid-cols-3 justify-between items-center py-4 px-2">
          <div>
            <HiMenuAlt2 className="lg:hidden text-4xl" />
            <ul className="hidden lg:flex space-x-10 text-primary font-bold">
              {links.map((link) => (
                <li className="hover:text-secondary ani" key={link.title}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Image src="/ag-logo.svg" alt="Agenda Logo" width={90} height={60} />
          <Link href="/contact">
            <div className="btn text-xs lg:text-base w-3/4 lg:w-1/2 text-center cursor-pointer">
              Contact
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
