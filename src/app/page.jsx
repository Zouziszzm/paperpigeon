import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Header/Navbar";

export default function Home() {
  return (
    <>
      <div className="text-black">
        <Navbar/>
        <Hero/>
      </div>
    </>
  );
}
