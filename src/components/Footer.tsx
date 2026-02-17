import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#6B4423] text-white pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
        
        {/* Left Section */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-script text-orange-400 mb-4 sm:mb-6">
            Chuks Kitchen
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 sm:space-y-4 text-gray-200 text-sm sm:text-base md:text-lg">
            <li>Home</li>
            <li>Explore</li>
            <li>My Order</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 font-semibold">
            Contact Us
          </h3>

          <ul className="space-y-3 sm:space-y-4 text-gray-200 text-sm sm:text-base md:text-lg">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <ul className="space-y-4 sm:space-y-6 text-gray-200 text-sm sm:text-base md:text-lg mt-6 sm:mt-10 md:mt-16">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 sm:mt-16 md:mt-20 text-gray-300 text-sm sm:text-base md:text-lg text-center md:text-left">
        © 2020 Lift Media. All rights reserved.
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 md:bottom-10 right-6 sm:right-8 md:right-10 
        bg-blue-600 p-3 sm:p-4 md:p-5 rounded-full shadow-lg 
        hover:bg-blue-700 transition"
      >
        <ArrowUp size={20} className="sm:hidden" />
        <ArrowUp size={24} className="hidden sm:block md:hidden" />
        <ArrowUp size={28} className="hidden md:block" />
      </button>

    </footer>
  );
};

export default Footer;
