// components/SearchBar.tsx
import Container from "./Container";

const SearchBar = () => {
  return (
    <div className="-mt-6 sm:-mt-8 relative z-20 px-4 sm:px-0">
      <Container>
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            
            {/* Image inside input */}
            <img
              src="/search.png"
              alt="search"
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />

            <input
              type="text"
              placeholder="What are you craving for today?"
              className="w-full py-3 sm:py-4 md:py-6 pl-12 sm:pl-14 md:pl-16 pr-4 sm:pr-6 rounded-lg shadow-lg bg-white
              placeholder-black placeholder:text-sm sm:placeholder:text-lg md:placeholder:text-2xl lg:placeholder:text-3xl
              placeholder:font-semibold text-sm sm:text-base md:text-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
