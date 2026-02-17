import {useCart } from "../context/CartContext";
import type { CartItem  } from "../context/CartContext";

interface QuantityStepperProps {
  item: CartItem;
}

export default function QuantityStepper({ item }: QuantityStepperProps) {
  const { cartItems, updateQuantity } = useCart();

  const currentQuantity =
    cartItems.find((i) => i.id === item.id)?.quantity || 1;

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      updateQuantity(item.id, currentQuantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, currentQuantity + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrease}
        className="px-3 py-1 text-lg bg-gray-200 rounded-md"
      >
        −
      </button>
      <input
        type="number"
        value={currentQuantity}
        readOnly
        className="w-12 text-center border rounded-md"
      />
      <button
        onClick={handleIncrease}
        className="px-3 py-1 text-lg bg-gray-200 rounded-md"
      >
        +
      </button>
    </div>
  );
}
