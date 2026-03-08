import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { ResultsFirst } from "@/components/ResultsFirst";
import { AllAboutYou } from "@/components/AllAboutYou";
import { WorkingTogether } from "@/components/WorkingTogether";
import { SlidingTools } from "@/components/SlidingTools";
import { Footer } from "@/components/Footer";
import ChatbotModal from "@/components/chatbot-modal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Logos /> */}
      <ResultsFirst />
      <AllAboutYou />
      <WorkingTogether />
      <SlidingTools />
      <Footer />
      <ChatbotModal />
    </main>
  );
}
