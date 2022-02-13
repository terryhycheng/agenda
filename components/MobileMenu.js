import links from "../src/navLinks";
import Link from "next/link";
import { BiXCircle } from "react-icons/bi";

const MobileMenu = ({ setIsMenuOpen }) => {
  return (
    <div className="absolute top-3 left-3 rounded-2xl bg-neutral border-4 border-neutral_var z-50 shadow-lg">
      <div className="flex flex-col px-10 py-6 relative">
        <BiXCircle
          className="absolute opacity-20 left-2 top-2 text-4xl cursor-pointer hover:opacity-60 ani"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        />
        <ul className=" text-primary font-bold pt-3">
          {links.map((link) => (
            <div className="cursor-pointer">
              <Link href={link.link}>
                <li
                  className="hover:text-secondary ani py-3 text-xl"
                  key={link.title}
                  onClick={() => {
                    setIsMenuOpen(false);
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
  );
};

export default MobileMenu;
