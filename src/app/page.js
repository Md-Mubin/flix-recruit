import ClientPriority from "@/Components/ClientPriority";
import Counter from "@/Components/Counter";
import Flix_video from "@/Components/Flix_video";
import Hero from "@/Components/Hero";
import Industry from "@/Components/Industry";
import Newsletter from "@/Components/Newsletter";
import Players from "@/Components/Players";

export default function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Players />
      <Flix_video/>
      <Industry/>
      <ClientPriority/>
      <Newsletter/>
    </>
  )
}
