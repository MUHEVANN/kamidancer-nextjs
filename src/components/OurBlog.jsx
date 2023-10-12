import Image from "next/image";
import React from "react";
import smile from "@/image/smile.webp";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const OurBlog = () => {
  return (
    <div className="flex flex-col md:flex-row paddings mt-[80px]">
      <div className=" flex-1 p-3">
        <Image
          src={smile}
          className="bg-no-repeat h-[300px] object-cover w-[300] md:w-[300px] lg:w-[600px] rounded h-100"
        />
      </div>
      <div className="flex-1 flex flex-col gap-y-5 justify-center">
        <div>
          <h1 className="font-bold mb-3 mt-3 md:mt-0">Our Blog</h1>
          <h2 className="header max-w-[350px]">
            Pentingnya menggunakan bahan alami
          </h2>
          <p className="text-[14px] max-w-[450px]">
            Sekian banyaknya orang diIndonesia tidak mempehatikan kesehatan gigi
            mereka. Jaga senyummu dengan merawat gigimu
          </p>
        </div>
        <Link
          href="#"
          className="font-semibold text-[16px] flex items-center hover:gap-x-4 group ease-in-out duration-300 gap-x-2"
        >
          <span className="group-hover:underline">Read More</span>{" "}
          <BsArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default OurBlog;
