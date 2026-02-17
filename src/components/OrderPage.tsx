import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
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
    <div className="min-h-screen bg-gray-100 py-16 px-4 flex justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
        <hr className="mb-6" />

        {/* Promo Code */}
        <h2 className="text-xl mb-3">Add a Promo Code</h2>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter Code here"
            className="flex-1 border rounded-md px-4 py-3"
          />
          <button className="bg-orange-500 text-white px-6 rounded-md">
            Login
          </button>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Service Fee</span>
            <span>₦{serviceFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>₦{tax.toLocaleString()}</span>
          </div>
        </div>

        <hr className="my-6" />

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Total</h2>
          <span className="text-2xl font-bold">₦{total.toLocaleString()}</span>
        </div>

        {/* Delivery Toggle */}
        <div className="flex mb-6 rounded-md overflow-hidden">
          <button
            onClick={() => setDeliveryType("delivery")}
            className={`flex-1 py-3 ${
              deliveryType === "delivery"
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            Delivery
          </button>

          <button
            onClick={() => setDeliveryType("pickup")}
            className={`flex-1 py-3 ${
              deliveryType === "pickup"
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            Pick up
          </button>
        </div>

        {/* Special Instructions */}
        <h2 className="text-xl mb-3">Special Instructions for Restaurant</h2>

        <textarea
          rows={4}
          className="w-full border rounded-md p-4 mb-6"
          placeholder="E.g no onion, food is too spicy..."
        />

        {/* Checkout Button */}

       
        <button
          onClick={() => navigate("/delivery", { state: { 
            total,
             mealName: cart[0]?.name || "Meal"
        } })}
          className="w-full bg-orange-500 text-white py-4 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
