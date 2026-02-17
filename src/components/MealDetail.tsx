import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Meal, MealsData } from "../types";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const MealDetail = () => {
  const { mealId } = useParams<{ mealId: string }>();
  const numericMealId = Number(mealId);
  const [meal, setMeal] = useState<Meal | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/Meals.json")
      .then((res) => res.json())
      .then((data: MealsData) => {
        let foundMeal: Meal | undefined;

        data.categories.forEach((category) => {
          const match = category.meals.find((m) => m.id === numericMealId);
          if (match) foundMeal = match;
        });

        if (foundMeal) {
          setMeal(foundMeal);
        }
      });
  }, [numericMealId]);

  if (!meal) return <p className="p-6">Loading meal...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* LEFT SIDE - IMAGE */}
        <div>
          <img
            src={`/${meal.image}`}
            alt={meal.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="p-8 bg-[#f3f4f6]">
          <div className="bg-white p-5 relative">
            {/* Close Button */}
            <button className="absolute top-4 right-4 bg-black text-white w-8 h-8 rounded-md flex items-center justify-center">
              ✕
            </button>

            <h1 className="text-3xl font-bold mt-5">{meal.name}</h1>

            <p className="text-2xl text-orange-500 mt-2 font-semibold">
              ₦{meal.amount}
            </p>

            <p className="mt-4 text-gray-600">{meal.description}</p>

            {/* Protein Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Choose Your Protein
              </h2>

              <div className="space-y-4">
                <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="protein" defaultChecked />
                    <span>Fried Chicken</span>
                  </div>
                  <span className="text-gray-500">(Default)</span>
                </label>

                <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="protein" />
                    <span>Grilled Fish</span>
                  </div>
                  <span className="text-gray-500">+₦500</span>
                </label>

                <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="protein" />
                    <span>Beef</span>
                  </div>
                  <span className="text-gray-500">+₦700</span>
                </label>
              </div>
            </div>

            {/* Extra Sides */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Extra Sides (Optional)
              </h2>

              <div className="space-y-4">
                <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span>Fried Plantain</span>
                  </div>
                  <span className="text-gray-500">+₦700</span>
                </label>

                <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span>Coleslaw</span>
                  </div>
                  <span className="text-gray-500">+₦500</span>
                </label>

                <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span>Extra Pepper Sauce</span>
                  </div>
                  <span className="text-gray-500">+₦300</span>
                </label>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">
                Special Instructions
              </h2>

              <textarea
                placeholder="E.g no onion, food is too spicy..."
                className="w-full border rounded-lg p-4 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                addToCart({
                  id: Number(meal.id),
                  name: meal.name,
                  price: meal.amount,
                  image: meal.image,
                  quantity: 1,
                });

                toast.success(`${meal.name} added to cart 🛒`);
              }}
              className="mt-8 w-full py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
