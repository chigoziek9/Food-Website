import Hero from "./Hero";
import SearchBar from "./SearchBar";
import ChefSpecials from "./ChefSpecials";
import Categories from "./Categories";
import PromoSection from "./PromoSection";


const Home = () => {
  return (
    <>
     <Hero />
      <SearchBar />
      <Categories />
       <ChefSpecials />
        <PromoSection />
     
    </>
  );
};

export default Home;
