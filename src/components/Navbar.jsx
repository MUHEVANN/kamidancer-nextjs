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

  const close = () => {
    setNavOpen(!navOpen);
  };
  const NavLinks = ({ content, href, text, click = null }) => {
    const router = usePathname();

    return (
      <li onClick={click}>
        <Link
          href={href}
          className={`py-4 px-2 relative ${
            router === href ? "text-[#C79277]" : text
          }  group`}
        >
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
          <NavLinks href={"/post"} content={"Home"} text={"text-[#C79277]"} />
          <NavLinks href={"/post/article"} content={"Article"} />
        </ul>
        <FiMenu
          className="md:hidden text-[#C79277]"
          size={24}
          onClick={() => setNavOpen(!navOpen)}
        />
      </div>
      {/* mobile */}
      <div
        ref={menu}
        className={`w-[50%] h-screen ease-in-out duration-300 text-white  md:hidden px-5 pt-8 bg-black/80 z-[100] fixed top-0 right-0 ${
          navOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <ul className=" gap-y-4 flex flex-col">
          <NavLinks
            href={"/post"}
            content={"Home"}
            text={"text-white"}
            click={close}
          />
          <NavLinks
            href={"/post/article"}
            content={"Article"}
            text={"text-white"}
            click={close}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
