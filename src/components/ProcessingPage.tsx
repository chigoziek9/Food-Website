import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProcessingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mealName = location.state?.mealName || "Meal";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/success", {
        state: { mealName }
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col items-center">
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin mb-6"></div>

        <p className="text-gray-600 text-lg">
          Processing your payment...
        </p>
      </div>
    </div>
  );
};

export default ProcessingPage;
