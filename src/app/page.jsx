import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="text-black">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
