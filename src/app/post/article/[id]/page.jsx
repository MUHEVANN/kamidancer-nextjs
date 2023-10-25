import Banner from "@/components/Banner";
import BlogText from "@/components/BlogText";
import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

export default async function DetailPost({ params }) {
  const { id } = params;

  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
    const detail = res.data.data;

    return (
      <div>
        {/* <Banner img={detail.image} /> */}
        <BlogText
          title={detail.title}
          desc={detail.description}
          image={detail.thumbnail}
        />
      </div>
    );
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Jika status respons adalah 404 (Not Found), arahkan pengguna ke halaman 404
      redirect("/404");
    } else {
      // Handle error lainnya sesuai dengan kebutuhan Anda
      console.error("Terjadi kesalahan:", error);
    }
  }
}
