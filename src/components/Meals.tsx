import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Category, Meal, MealsData } from "../types";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const Meals = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Format category name nicely (e.g. jollof-rice → Jollof Rice)
  const formattedCategory =
    categoryName
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()) || "";

  useEffect(() => {
    fetch("/Meals.json")
      .then((res) => res.json())
      .then((data: MealsData) => {
        const category = data.categories.find(
          (cat: Category) => cat.name === categoryName
        );

        if (category) {
          setMeals(category.meals);
        } else {
          setMeals([]);
        }
      });
  }, [categoryName]);

  return (
    <div className="p-4 sm:p-6">
      {/* Category Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        {formattedCategory}
      </h1>

      {/* If no meals found */}
      {meals.length === 0 ? (
        <p className="text-gray-500 text-lg">
          No meals available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {meals.map((meal) => (
            <div
              key={meal.id}
              onClick={() => navigate(`/meal/${meal.id}`)}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden 
              hover:shadow-lg transition duration-300 h-auto"
            >
              <img
                src={`/${meal.image}`}
                alt={meal.name}
                className="h-48 sm:h-56 md:h-64 lg:h-72 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {meal.name}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 py-2 line-clamp-2">
                  {meal.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-base sm:text-lg md:text-xl text-[#FF7A18]">
                    ₦{meal.amount}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      addToCart({
                        id: Number(meal.id),
                        name: meal.name,
                        price: Number(meal.amount),
                        image: meal.image,
                        quantity: 1,
                      });

                      toast.success(`${meal.name} added to cart 🛒`);
                    }}
                    className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-orange-500 
                    text-white rounded-lg hover:bg-orange-600 text-sm sm:text-base"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;
