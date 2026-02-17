import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Container from "./Container";

interface Category {
  name: string;
  image: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/Meals.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40  sm:px-6 md:px-10 bg-[#f9fafc]">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-10 md:mb-12">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.name}
              image={`/${category.image}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
