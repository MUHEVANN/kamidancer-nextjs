import { redirect } from "next/navigation";
export default async function blocked() {
  redirect("/post");
  // ...
}
