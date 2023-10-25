"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { usePostStore } from "@/app/postStore/postStore";

const PostTes = ({ data }) => {
  const { setPosts } = usePostStore();
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4">
      {data.map((item) => {
        let words = item.description;
        let wordCut = words.split(" ").splice(0, 12).join(" ") + "...";
        return (
          <div className="col-span-1 p-2  hover:shadow-xl transition-all ease-in-out duration-300 cursor-pointer group">
            <Link
              href={`/post/article/${item.id}`}
              className="block w-full h-[250px]"
            >
              <Image
                src={`http://127.0.0.1:8000/storage/${item.thumbnail}`}
                width={500}
                height={500}
                alt="orang senyum"
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="py-2">
              <div className="flex justify-end">
                <span className="text-gray-400 text-sm font-medium ">
                  21-09-2023
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <h1 className="font-bold text-[14px] leading-none hover:underline cursor-pointer">
                  {item.title}
                </h1>
                <div>
                  <div
                    className="text-[14px]"
                    dangerouslySetInnerHTML={{ __html: wordCut }}
                  ></div>
                  <Link
                    href={`/post/article/${item.id}`}
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
      })}
    </div>
  );
};

export default PostTes;
