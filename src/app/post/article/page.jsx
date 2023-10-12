import Post from "@/components/Post";
import Search from "@/components/Search";
import axios from "axios";
import Image from "next/image";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import PostTes from "@/components/PostTes";
import { data } from "@/dummy/data";

const Page = () => {
  // const posts = await axios.get("http://127.0.0.1:8000/api/posts");

  return (
    <div className="h-auto paddings mb-[80px]">
      <div className="w-full pt-[80px] mb-5">
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 ">
        {data.map((item) => {
          return <PostTes props={item} key={item.id} />;
        })}
      </div>
      {/* <Post posts={posts.data} /> */}
    </div>
  );
};

export default Page;
