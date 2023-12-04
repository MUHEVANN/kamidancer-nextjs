"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import product from "@/image/kamidancer-new.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const OurProduct = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const refProduct = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refProduct,
    offset: ["start end", "end end "],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div id="product" className="h-auto relative ">
      <div className="text-center flex justify-center header mt-[40px]">
        <h1>Our Product</h1>
      </div>
      <div
        className="flex flex-col-reverse lg:flex-row items-center paddings z-20"
        // data-aos="fade-up"
        // data-aos-anchor-placement="center-bottom"
      >
        <div className="flex-1">
          <p>
            Produk Kamidancer merupakan singkatan dari kata Kakao, UMI
            (Universitas Muslim Indonesia) dan denture cleanser yang artinya
            pembersih gigi tiruan. Nama Kamidancer terinspirasi dari kata dancer
            yang artinya “menari”, sesuai dengan kegunaan produk kami, “menari
            membersihkan seluruh plak, bakteri, dan jamur pada gigi tiruan
            Anda”. Komposisi Kamidancer ialah ekstrak kulit kakao, asam tartart,
            asam sitrat, PVP K-30, aquades dan natrium bikarbonat yang mampu
            menghambat pertumbuhan bakteri streptococcus mutans dan jamur
            candida albicans sehingga mencegah denture stomatitits dan berbagai
            penyakit akibat ketidakmampaun merawat gigi tiruan.
          </p>
        </div>
        <div className="flex-1 h-[550px]">
          <Image
            src={product}
            alt="kamidancer-product"
            className="w-full lg:w-full h-[250px] lg:h-full object-contain"
          />
        </div>
      </div>
      <span className="kulit-kakao hidden absolute right-0 top-[180px] w-[300px] h-[550px] z-10" />
      <span className="kakao-full absolute hidden md:left-[-15%] top-[40%] w-full h-[550px] z-10" />
      {/* </motion.div> */}
    </div>
  );
};

export default OurProduct;
