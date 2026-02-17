import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Meal, MealsData } from "../types";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const Specials = () => {
  const { addToCart } = useCart();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Meals.json")
      .then((res) => res.json())
      .then((data: MealsData) => {
        const allMeals: Meal[] = data.categories.flatMap(
          (category) => category.meals
        );

        const limitedMeals = allMeals.slice(0, 6);

        setMeals(limitedMeals);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading meals...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6  sm:p-6">
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
  );
};

export default Specials;
