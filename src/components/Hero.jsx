"use client";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
const Hero = () => {
  
  const goToProduct = () => {
    const id = document.getElementById("product");
    id.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative h-[95vh] bg-kakao">
      <div className="text-white grid place-content-center gap-y-3 h-[70vh] text-center">
        <div>
          <h1 className="font-bold text-3xl">Kamidancer</h1>
          <p className="text-[14px]">PEMBERSIH GIGI TIRUAN DARI BAHAN ALAMI?</p>
        </div>
        <div
          onClick={goToProduct}
          className="flex justify-center bouncing-arrow cursor-pointer"
        >
          <BsArrowDown size={24} />
        </div>
      </div>
      <div className="bg-kertas absolute z-[0] bottom-[-5%] lg:bottom-0 w-full h-[10vh]" />
    </div>
  );
};

export default Hero;
