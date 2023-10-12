"use client";
import Banner from "@/components/Banner";
import BlogText from "@/components/BlogText";
import axios from "axios";
import React from "react";
import { data } from "@/dummy/data";
import Error from "next/error";
export default async function DetailPost({ params }) {
  const { id } = params;

  // const res = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
  // const detail = res.data.data;
  const detail = data.find((item) => item.id === parseInt(id));
  if (!detail) {
    return <Error statusCode={404} title="Halaman tidak ditemukan" />;
  }
  return (
    <div>
      {/* <Banner img={detail.image} /> */}
      <BlogText
        title={detail.title}
        desc={detail.content}
        image={detail.image}
      />
    </div>
  );
}
