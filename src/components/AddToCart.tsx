import {useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import type { CartItem  } from "../context/CartContext";

interface AddToCartProps {
  item: CartItem;
}

const AddToCart = ({ item }: AddToCartProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart 🛒`);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full p-4 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
