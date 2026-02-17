import Specials from "./Specials";
import Container from "./Container";

const ChefSpecials = () => {
  return (
    <section className=" sm:px-6 md:px-10 py-16 sm:py-24 bg-[#f9fafc]">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-10 md:mb-12">
          Chef's Specials
        </h2>

        <Specials />
      </Container>
    </section>
  );
};

export default ChefSpecials;
