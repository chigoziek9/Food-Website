import {useCart } from "../context/CartContext";
import type { CartItem  } from "../context/CartContext";

interface QuantityStepperProps {
  item: CartItem;
}

export default function QuantityStepper({ item }: QuantityStepperProps) {
  const { cart, increaseQty, decreaseQty } = useCart();

  const currentQuantity =
    cart.find((i) => i.id === item.id)?.quantity || 1;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => decreaseQty(item.id)}
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
        onClick={() => increaseQty(item.id)}
        className="px-3 py-1 text-lg bg-gray-200 rounded-md"
      >
        +
      </button>
    </div>
  );
}


