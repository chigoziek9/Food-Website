import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  image: string;
}

const CategoryCard = ({ title, image }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${title}`)}
      className="cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden 
      hover:shadow-md transition duration-300 h-auto"
    >
      <img
        src={image}
        alt={title}
        className="h-40 sm:h-48 md:h-56 lg:h-60 w-full object-cover"
      />

      <p className="py-4 sm:py-6 md:py-8 lg:py-10 text-center font-bold text-black 
      text-base sm:text-lg md:text-xl">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
