// components/Hero.tsx
import Container from "./Container";
import ExploreCategories from "./ExploreCategories";

const Explore = () => {
  return (
    <>
      <section className="relative">
        <img
          src="/explorehero.png"
          alt="Hero"
          className="absolute inset-0 w-full h-[50vh] sm:h-[55vh] md:h-[35vw] object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <Container className="relative h-full flex items-center">
          <div className="max-w-4xl px-4 sm:px-6 md:px-8 flex flex-col justify-center h-[35vw] sm:h-[45vw] md:h-[35vw]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
              Chuks Kitchen
            </h2>

            <p className="text-white mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-full sm:max-w-xl md:max-w-2xl">
              Chuks Kitchen Nigerian Home Kitchen 4.8 (1.2k)
            </p>
          </div>
        </Container>
      </section>

      <div className="py-8 sm:py-10 md:py-12 mt-6 sm:mt-8 md:mt-13">
        <ExploreCategories />
      </div>
    </>
  );
};

export default Explore;
