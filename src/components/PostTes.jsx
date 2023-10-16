import Image from "next/image";
import React from "react";
import smile from "@/image/smile.webp";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PostTes = ({ props }) => {
  const { title, content, id, image } = props;
  let words = content;
  let wordCut = words.split(" ").splice(0, 12).join(" ") + "...";
  return (
    <div className="col-span-1 p-2  hover:shadow-xl transition-all ease-in-out duration-300 cursor-pointer group">
      <Link href={`/post/article/${id}`} className="block w-full h-[250px]">
        <Image
          src={image}
          width={500}
          height={500}
          alt="orang senyum"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="py-2">
        <div className="flex justify-end">
          <span className="text-gray-400 text-sm font-medium ">21-09-2023</span>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-[14px] leading-none hover:underline cursor-pointer">
            {title}
          </h1>
          <div>
            <p className="text-[14px]">{wordCut}</p>
            <Link
              href={`/post/article/${id}`}
              className="font-semibold text-[16px] flex items-center hover:gap-x-4  ease-in-out duration-300 gap-x-2"
            >
              <span className="group-hover:underline text-[14px]">
                Read More
              </span>{" "}
              <BsArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTes;
