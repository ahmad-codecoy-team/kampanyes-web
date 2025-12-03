// src/pages/home/index.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* <main className="flex-1 pt-10 "> */}
      <main className="flex-1 pt-16 md:pt-20">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
