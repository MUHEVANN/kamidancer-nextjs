import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],
  setPosts: (data) => set((state) => ({ posts: data })),
  query: "",
  setQuery: (data) => set((state) => ({ query: data })),
}));
