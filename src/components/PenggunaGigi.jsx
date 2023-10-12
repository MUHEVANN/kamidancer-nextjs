import Image from "next/image";
import React from "react";
import icon from "@/image/icon-data.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PenggunaGigi = () => {
  return (
    <div className="h-auto paddings flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <Image src={icon} alt="icon data" />
      </div>
      <div className="flex-1 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-1">
          <h1 className="header max-w-[340px]">
            Data Riskesdas pegguna gigi tiruan di sulawesi
          </h1>
          <p className="max-w-[508px] text-[14px]">
            Data Riskesdas 2018 menunjukkan 4,8% dari penduduk di Sulawesi
            Selatan menggunakan gigi tiruan. Jumlah ini akan bertambah seiring
            dengan banyaknya ...
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

export default PenggunaGigi;
