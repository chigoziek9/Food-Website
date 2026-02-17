import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Link
          to="/"
          className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base"
        >
          Go Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-10 px-2 sm:px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 sm:mb-8">Your Cart</h1>

        <div className="space-y-4 sm:space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:justify-between border rounded-lg p-4 sm:p-5 gap-4 sm:gap-6"
            >
              {/* LEFT SECTION */}
              <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                    With plantain, extra pepper sauce
                  </p>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mt-4 md:mt-0 w-full md:w-auto justify-end">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded flex items-center justify-center text-sm sm:text-lg"
                  >
                    +
                  </button>

                  <span className="text-lg sm:text-2xl font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded flex items-center justify-center text-sm sm:text-lg"
                  >
                    −
                  </button>
                </div>

                {/* Price */}
                <p className="text-lg sm:text-2xl font-bold text-orange-500">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-orange-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center text-sm sm:text-lg"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL SECTION */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-end items-end gap-4 sm:gap-6">
          <div className="text-right">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-4">
              Total: ₦{total.toLocaleString()}
            </h2>

            <button
              onClick={() => navigate("/order-summary")}
              className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-orange-600 transition text-sm sm:text-base"
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Add More Link */}
        <div className="mt-4 sm:mt-6">
          <Link to="/" className="text-blue-500 flex items-center gap-2 text-sm sm:text-base">
            + Add more items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
