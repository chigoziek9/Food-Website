import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const total = location.state?.total || 0;

  const [method, setMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const navigate = useNavigate();

  const mealName = location.state?.mealName || "Meal";

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-white rounded-xl p-8 shadow-sm">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Payment</h1>
        <hr className="mb-6" />

        {/* Pay With */}
        <h2 className="text-lg font-semibold mb-4">Pay With:</h2>

        <div className="flex gap-10 mb-8">
          {["card", "bank", "transfer"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value={option}
                checked={method === option}
                onChange={() => setMethod(option)}
                className="accent-green-500"
              />
              <span className="capitalize text-gray-700">{option}</span>
            </label>
          ))}
        </div>

        {/* Card Fields */}
        {method === "card" && (
          <>
            <div className="mb-5">
              <label className="block mb-2 font-medium">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9101 1121"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border rounded-md p-3"
              />
            </div>

            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <label className="block mb-2 font-medium">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full border rounded-md p-3"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full border rounded-md p-3"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={() => setSaveCard(!saveCard)}
              />
              <span className="text-gray-600">Save card details</span>
            </div>
          </>
        )}

        {/* Pay Button */}
        <button
          onClick={() =>
            navigate("/processing", {
              state: { mealName },
            })
          }
          className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Pay ₦{total.toLocaleString()}
        </button>

        {/* Privacy Text */}
        <p className="text-sm text-gray-500 mt-6 leading-relaxed">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
