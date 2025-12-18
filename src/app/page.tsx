import { Navbar, Footer } from "@/components/shared";
import {
  Hero,
  Integrations,
  Problem,
  Features,
  InteractiveDemo,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Problem />
        <Features />
        <InteractiveDemo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
