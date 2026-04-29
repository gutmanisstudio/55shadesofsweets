import Hero from "@/components/Hero";
import TopPicks from "@/components/TopPicks";
import Divider from "@/components/Divider";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Pickup from "@/components/Pickup";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopPicks />
      <Divider />
      <Gallery />
      <Team />
      <Pickup />
    </main>
  );
}
