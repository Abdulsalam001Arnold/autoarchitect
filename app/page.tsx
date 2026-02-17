
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { ResultsFirst } from "@/components/ResultsFirst";
import { AllAboutYou } from "@/components/AllAboutYou";
import { WorkingTogether } from "@/components/WorkingTogether";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <ResultsFirst />
      <AllAboutYou />
      <WorkingTogether />
      <Footer />
    </main>
  );
}
