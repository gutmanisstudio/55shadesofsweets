import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopPicks from "@/components/TopPicks";
import Flavours from "@/components/Flavours";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Pickup from "@/components/Pickup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TopPicks />
        <Flavours />
        <Gallery />
        <Team />
        <Pickup />
      </main>
      <Footer />
    </>
  );
}
