// // src/components/Hero.tsx
// import heroImage from "@/assets/hero.png";
// import StoreButtons from "@/components/StoreButtons";

// function Hero() {
//   return (
//     <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pb-20">
//       <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
//         {/* Left: copy */}
//         <div>
//           <h1 className="text-3xl md:text-4xl lg:text-[2.4rem] font-semibold leading-tight tracking-[0.01em]">
//             Discover the best Deals in
//             <br /> One Place
//           </h1>

//           <p className="mt-4 text-base md:text-lg lg:text-xl text-muted max-w-xl leading-relaxed">
//             Find new folders, exclusive discounts, and your favorite stores —
//             instantly.
//           </p>

//           <StoreButtons />
//         </div>

//         {/* Right: hero mockup */}
//         <div className="flex justify-center lg:justify-end">
//           <img
//             src={heroImage}
//             alt="KampanYES app mockup"
//             className="w-full max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg max-h-[520px] object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import heroImage from "@/assets/hero.png";
import StoreButtons from "@/components/StoreButtons";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pb-20">
      <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
        {/* Left: copy */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight tracking-tight text-foreground">
            Discover the best Deals in
            <br /> One Place
          </h1>

          <p className="mt-4 text-base md:text-lg lg:text-xl text-muted leading-relaxed max-w-xl">
            Find new folders, exclusive discounts, and your favorite stores—instantly.
          </p>

          <StoreButtons />
        </div>

        {/* Right: hero mockup */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="KampanYES app mockup"
            className="w-full max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg max-h-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
