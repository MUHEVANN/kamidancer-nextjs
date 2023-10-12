"use client";
import logo from "@/image/kamidancer-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  let menu = useRef();
  const NavLinks = ({ content, href }) => {
    const router = usePathname();

    return (
      <li>
        <Link href={href} className="py-4 px-2 relative text-[#C79277] group">
          {content}
          <span
            className={` h-1 bottom-0 group-hover:w-full rounded ease-in-out duration-300 left-0 absolute bg-[#C79277] ${
              router === href ? "w-full" : "w-0"
            }`}
          >
            &nbsp;
          </span>
        </Link>
      </li>
    );
  };
  //   ref
  useEffect(() => {
    let handler = (e) => {
      if (!menu.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="flex paddings  justify-between items-center absolute z-[100] w-full h-[80px]  ">
      <div>
        <Image src={logo} alt="kamidancer" />
      </div>
      <div>
        <ul className="items-center gap-x-2 hidden md:flex text-white">
          <NavLinks href={"/post"} content={"Home"} />
          <NavLinks href={"/post/article"} content={"Article"} />
        </ul>
        <FiMenu
          className="md:hidden text-white"
          size={24}
          onClick={() => setNavOpen(!navOpen)}
        />
      </div>
      {/* mobile */}
      <div
        ref={menu}
        className={`w-[50%] h-screen ease-in-out duration-300 text-white  md:hidden px-5 pt-8 bg-black z-[100] fixed top-0 right-0 ${
          navOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <ul className="items-center  md:flex flex-col">
          <li className="flex justify-end">
            <AiOutlineClose
              className=""
              size={24}
              onClick={() => setNavOpen(!navOpen)}
            />
          </li>
          <li>
            <Link href="/post" className="py-4 px-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/post/article" className="py-4 px-2">
              Article
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
