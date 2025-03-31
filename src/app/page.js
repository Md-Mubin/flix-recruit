import ClientPriority from "@/Components/ClientPriority";
import Counter from "@/Components/Counter";
import Hero from "@/Components/Hero";
import Players from "@/Components/Players";

export default function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Players />
      <ClientPriority/>
    </>
  )
}
