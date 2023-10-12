import React from "react";
import anggota1 from "@/image/anggota1.png";
import anggota2 from "@/image/anggota2.png";
import anggota3 from "@/image/anggota3.png";
import anggota4 from "@/image/anggota4.png";
import anggota5 from "@/image/anggota5.png";
import anggota6 from "@/image/anggota6.png";
import Image from "next/image";
const Team = () => {
  return (
    <div className="paddings my-[80px]">
      <h1 className="header text-center mb-[35px]">Team</h1>
      <div className="grid grid-cols-3 gap-y-5">
        <div className="cols-span-1 flex justify-center items-center">
          <Image src={anggota1} alt="kamidancer-team" />
        </div>
        <div className="cols-span-1 flex justify-center items-center">
          <Image src={anggota2} alt="kamidancer-team" />
        </div>
        <div className="cols-span-1 flex justify-center items-center">
          <Image src={anggota3} alt="kamidancer-team" />
        </div>
        <div className="cols-span-1 flex justify-center items-center">
          <Image src={anggota4} alt="kamidancer-team" />
        </div>
        <div className="cols-span-1 flex justify-center items-center">
          <Image src={anggota5} alt="kamidancer-team" />
        </div>
        <div className="cols-span-1 flex justify-center items-center">
          <Image src={anggota6} alt="kamidancer-team" />
        </div>
      </div>
    </div>
  );
};

export default Team;
