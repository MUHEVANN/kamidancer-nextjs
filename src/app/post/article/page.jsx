import Search from "@/components/Search";
import axios from "axios";
import PostTes from "@/components/PostTes";

const Page = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/posts");
  const posts = res.data.data.data;
  console.log(posts);
  return (
    <div className="h-auto paddings mb-[80px]">
      <div className="w-full pt-[80px] mb-5">
        <Search />
      </div>
      <div className=" ">
        <PostTes data={posts} />
      </div>
    </div>
  );
};
{
  /* <Post posts={posts.data} /> */
}

export default Page;
