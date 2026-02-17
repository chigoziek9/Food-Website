import { useEffect, useState } from "react";
import type { Category, MealsData } from "../types";
import { useNavigate } from "react-router-dom";

const ExploreCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Meals.json")
      .then((res) => res.json())
      .then((data: MealsData) => {
        setCategories(data.categories);

        // Default to Jollof
        const jollof = data.categories.find(
          (cat) => cat.name.toLowerCase() === "jollof"
        );
        if (jollof) setActiveCategory(jollof.name);
        else if (data.categories.length > 0) setActiveCategory(data.categories[0].name);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      
      {/* ================= Sidebar ================= */}
      <aside className="w-full md:w-64 bg-white p-4 sm:p-6 shadow-md sticky top-0 h-auto md:h-screen mb-6 md:mb-0">
        <h2 className="font-bold text-lg mb-4">Menu Categories</h2>

        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`cursor-pointer px-3 sm:px-4 py-2 rounded-md transition 
                ${
                  activeCategory === category.name
                    ? "bg-orange-100 border-l-4 border-orange-500 font-semibold"
                    : "hover:bg-gray-100"
                }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* ================= Meals Section ================= */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {categories
          .filter((cat) => cat.name === activeCategory)
          .map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 sm:mb-6">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {category.meals.map((meal) => (
                  <div
                    key={meal.id}
                    onClick={() => navigate(`/meal/${meal.id}`)}
                    className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                  >
                    <img
                      src={`/${meal.image}`}
                      alt={meal.name}
                      className="h-48 sm:h-52 md:h-56 w-full object-cover"
                    />

                    <div className="p-3 sm:p-4 md:p-4">
                      <h3 className="font-semibold text-base sm:text-lg md:text-lg">
                        {meal.name}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-sm text-gray-600 mt-1 sm:mt-2">
                        {meal.description}
                      </p>

                      <div className="flex justify-between items-center mt-3 sm:mt-4">
                        <span className="text-orange-500 font-semibold text-sm sm:text-base">
                          ₦{meal.amount}
                        </span>

                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="bg-orange-500 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default ExploreCategories;
