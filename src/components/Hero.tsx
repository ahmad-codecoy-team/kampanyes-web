// src/components/Hero.tsx
import heroImage from "@/assets/hero.png";
import StoreButtons from "@/components/StoreButtons";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-4 sm:pt-6 pb-16 sm:pb-20">
      <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        {/* Left: copy */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Discover the best Deals in
            <br />
            <span className="whitespace-nowrap">One Place</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-muted leading-relaxed">
            Find new folders, exclusive discounts, and your favorite stores—
            instantly.
          </p>

          <StoreButtons />
        </div>

        {/* Right: hero mockup */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="KampanYES app mockup"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md max-h-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
