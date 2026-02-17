import { useCart } from "../context/CartContext";
interface Props {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ name, price, description, image }: Props) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
      <img src={image} alt={name} className="h-48 w-full object-cover" />

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>

        <p className="text-sm text-gray-500 mt-2 flex-1">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-semibold">
            ₦{price.toLocaleString()}
          </span>

          <button
            onClick={() =>
              addToCart({
                id: Date.now(),
                name,
                price,
                image,
                quantity: 1,
              })
            }
            className="bg-primary text-white px-4 py-2 text-sm rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
