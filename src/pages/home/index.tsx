// sr/pages/home/index.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";



function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Main content scrolls under sticky header */}
      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;

