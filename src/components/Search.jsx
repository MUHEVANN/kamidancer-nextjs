"use client";
import { usePostStore } from "@/app/postStore/postStore";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { data } from "@/dummy/data";
const Search = () => {
  const url = usePathname();
  const { query, setQuery } = usePostStore();
  const filteredData = data.filter((data) => {
    return data.title.toLowerCase().includes(query.toLowerCase());
  });

  const searchRef = useRef();
  const [isSearchVisible, setSearchVisible] = useState(false);
  useEffect(() => {
    if (url !== "/post/article") {
      setQuery(null);
    }
  }, [url]);
  useEffect(() => {
    const handleClick = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setSearchVisible(false); // Menyembunyikan hasil pencarian ketika klik di luar elemen pencarian
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%] flex items-center justify-center relative">
          <input
            type="text"
            onFocus={() => setSearchVisible(true)} // Menampilkan hasil pencarian saat input mendapatkan fokus
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-2 focus:border-[#C79277] focus:shadow-md ease-in-out duration-300 px-4 py-2 rounded-full w-full"
            placeholder="Search"
          />
          <HiOutlineSearch
            className="absolute right-3 text-[#C79277]"
            size={24}
          />
        </div>
      </div>
      <div
        className={`w-full justify-center relative ${
          isSearchVisible && query !== "" ? "flex" : "hidden" // Menampilkan hasil pencarian jika isSearchVisible true dan ada query
        }`}
        ref={searchRef}
      >
        <div className="w-[50%] flex flex-col absolute gap-y-3 bg-white py-4 overflow-y-scroll border shadow-lg">
          {filteredData.length === 0 ? (
            <p>
              No result for <span className="font-bold">{query}</span>
            </p>
          ) : (
            filteredData.map((post) => (
              <Link
                href={`/post/article/${post.id}`}
                key={post.id}
                className="flex border-b px-4 hover:bg-[#f5f5f5] py-2 flex-col"
              >
                <h1>{post.title}</h1>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
