"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Banner = ({ img }) => {
  return (
    <div className="pt-[80px] w-full ">
      <Image
        // src={`http://127.0.0.1:8000/storage/${img}`}
        src={img}
        alt="kamidancer-blog"
        width={1200}
        height={400}
        className="w-full h-[40vh] object-cover bg-center"
      />
    </div>
  );
};

export default Banner;
