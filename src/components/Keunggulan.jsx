import Image from "next/image";
import React from "react";
import leaf from "@/image/alami.png";
import time from "@/image/jam.png";

const Keunggulan = () => {
  return (
    <div className="h-auto grid grid-cols-2 md:grid-cols-3 paddings mt-[80px]">
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
        <h1 className="font-bold text-xl">Keunggulan</h1>
        <h2 className="header max-w-[330px]">
          Keunggulan Dari Product Gigi Tiruan Kami
        </h2>
      </div>
      <div className="col-span-2 md:col-span-2">
        <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2">
          <div className="cols-span-1 flex flex-col w-full md:max-w-[350px] items-center gap-y-[29px] py-[40px] md:py-[30px] lg:py-[60px] px-[20px] shadow-lg">
            <Image src={leaf} alt="leaf" />
            <p className="text-center">
              Produk pembersih gigi tiruan yang tidak menggunakan bahan dasar
              kimiawi (khlorhexidin)
            </p>
          </div>
          <div className="cols-span-1 flex flex-col w-full md:max-w-[350px] items-center gap-y-[29px] py-[40px] md:py-[30px] lg:py-[60px] px-[20px] shadow-lg">
            <Image src={time} alt="time" />
            <p className="text-center">
              Kemampuan membersihkan (granulasi) mencapai 7 menit disbanding
              lainnya (3 menit)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
