import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-md px-5 py-5 flex items-center justify-between md:justify-around">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Chuks Kitchen.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-around flex-1 mx-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-[#fcd1b1]">Home</Link>
          </li>
          <li>
            <Link to="/explore" className="hover:text-[#fcd1b1]">Explore</Link>
          </li>
          <li>
            <Link to="/Cart" className="hover:text-[#fcd1b1]">Orders</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-[#fcd1b1]">Account</Link>
          </li>
        </ul>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#e18500] text-white px-[58.5px] py-[15px] rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#fcd1b1]"
          >
            Home
          </Link>

          <Link
            to="/explore"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#fcd1b1]"
          >
            Explore
          </Link>

          <Link
            to="/Cart"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-[#fcd1b1]"
          >
            Orders
          </Link>

          <button
            onClick={() => {
              navigate("/login");
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#e18500] text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
