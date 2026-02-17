import { useLocation } from "react-router-dom";
import { useState } from "react";

const SuccessPage = () => {
  const location = useLocation();
  const mealName = location.state?.mealName || "Meal";

  const [orderNumber] = useState(() =>
  "ORD" + Math.floor(100000000 + Math.random() * 900000000)
);


  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4">
      
      {/* Green Check */}
      <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-xl font-semibold mb-2">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-8 text-center">
        Your delicious {mealName} is on its way!
      </p>

      <div className="mt-6 text-xl font-semibold mb-4">
        Order #{orderNumber} Confirmed
      </div>

      <button className="bg-orange-500 text-white px-10 py-3 rounded-lg mb-4 hover:bg-orange-600 transition">
        Track Order
      </button>

      <p className="text-gray-400 mb-4 cursor-pointer">
        Generate Receipt
      </p>

      <p className="text-blue-600 cursor-pointer">
        Need help with your order?
      </p>
    </div>
  );
};

export default SuccessPage;
