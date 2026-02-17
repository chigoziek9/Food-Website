// components/Hero.tsx
import Container from "./Container";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <img
        src="/hero.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative h-full flex items-center">
        <div className="max-w-4xl px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Heart of Nigerian Home Cooking
          </h2>

          <p className="text-white mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-xl">
            Handcrafted with passion, delivered with care.
          </p>

          <button className="mt-6 bg-[#e18500] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base">
            Discover what's new
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
