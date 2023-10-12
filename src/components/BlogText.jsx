import Image from "next/image";
import React from "react";

const BlogText = ({ title, desc, image }) => {
  return (
    <div className="grid bg-[#f5f5f5] place-content-center">
      <div className=" px-5 w-full md:w-[60vw] ">
        <div className="bg-white pb-[50px] w-full  min-h-screen h-full p-5 rounded">
          <div className="pt-[80px] w-full ">
            <Image
              // src={`http://127.0.0.1:8000/storage/${img}`}
              src={image}
              alt="kamidancer-blog"
              width={1200}
              height={400}
              className="w-full h-[40vh] object-cover bg-center"
            />
          </div>
          <h1 className="capitalize text-[#C79277] font-semibold my-5">
            {title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogText;
