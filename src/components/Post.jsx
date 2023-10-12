"use client";
import { usePostStore } from "@/app/postStore/postStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const Post = ({ posts }) => {
  const allData = posts.data;
  const { setPosts } = usePostStore();
  useEffect(() => {
    setPosts(allData);
  }, [allData, setPosts]);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 ">
      {allData.map((post) => {
        return (
          <div className="p-5" key={post.id}>
            <div className="w-[100%] h-[300px]">
              <Image
                src={`http://127.0.0.1:8000/storage/${post.thumbnail}`}
                className="object-cover w-full h-[300px]"
                alt={post.title}
                layout=""
                width={300}
                height={300}
              />
            </div>
            <div className="mt-3">
              <h1 className="text-[#C79277] font-semibold capitalize text-[18px]">
                {post.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.slice(0, 80) + "...",
                }}
                className="text-[14px]"
              ></div>
              <div className="mt-2 font-semibold">
                <Link
                  href={`/post/article/${post.id}`}
                  className="font-semibold text-[16px] flex items-center hover:gap-x-4 group ease-in-out duration-300 gap-x-2"
                >
                  <span className="group-hover:underline">Read More</span>{" "}
                  <BsArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
