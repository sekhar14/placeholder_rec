import { Navbar, Footer } from "@/components/shared";
import {
  Hero,
  Problem,
  Solution,
  Features,
  BiasShield,
  TwoPaths,
  HowItWorks,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <BiasShield />
        <TwoPaths />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
