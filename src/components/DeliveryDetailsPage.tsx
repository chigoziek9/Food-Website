import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const DeliveryDetailsPage = () => {
 
  const [instructions, setInstructions] = useState("");
  const [phone, setPhone] = useState("+234 801 234 5678");
const { cart } = useCart();
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery",
  );
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const deliveryFee = deliveryType === "delivery" ? 500 : 0;
  const serviceFee = 200;
  const tax = 0;

  const total = subtotal + deliveryFee + serviceFee + tax;


  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white rounded-xl p-8 shadow-sm">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Delivery Details</h1>
        <hr className="mb-6" />

        {/* Address Section */}
        <div className="mb-8">
          <div className="border rounded-lg p-5 flex justify-between items-start">
            <div>
              <p className="font-medium">
                Home: 123 Main Street, Victoria Island, Lagos
              </p>
              <p className="text-gray-600">
                Apt 4B, Opposite Mega Plaza
              </p>
            </div>

            <button className="text-blue-600 font-medium hover:underline">
              Change Address
            </button>
          </div>
        </div>

        {/* Delivery Time */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Delivery Time</h2>
          <div className="border rounded-lg p-4">
            ASAP (30-25)
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Delivery Instructions (Optional)
          </h2>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            placeholder="E.g leave at the front of the door, knock twice..."
            className="w-full border rounded-lg p-4 resize-none"
          />
        </div>

        {/* Contact Address */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Contact Address
          </h2>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg p-4"
          />
        </div>

        {/* Proceed Button */}
        <button
         onClick={() => navigate("/payment", { state: { 
            total,
             mealName: cart[0]?.name || "Meal"
        } })}
          className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Proceed to Payment
        </button>

           

      </div>
    </div>
  );
};

export default DeliveryDetailsPage;
