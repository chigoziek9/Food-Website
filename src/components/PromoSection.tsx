import Container from "./Container";

const PromoSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <img
        src="/promo.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Promo"
      />

      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          Introducing Our New Menu Additions!
        </h2>

        <p className="mt-4 max-w-full sm:max-w-lg md:max-w-xl text-sm sm:text-base md:text-lg text-white/90">
          Explore exciting new dishes, crafted with the freshest
          ingredients and authentic Nigerian flavors.
        </p>

        <button className="mt-6 bg-orange-500 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base">
          Discover what's new
        </button>
      </Container>
    </section>
  );
};

export default PromoSection;
