
import OurProduct from "@/components/OurProduct";
import PenggunaGigi from "@/components/PenggunaGigi";
import Keunggulan from "@/components/Keunggulan";
import OurBlog from "@/components/OurBlog";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <OurProduct />
      <PenggunaGigi />
      <Keunggulan />
      <OurBlog />
      <Team />
    </div>
  );
}
