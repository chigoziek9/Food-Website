import { useState } from "react";
import { Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className=" flex">
      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center "
        style={{
          backgroundImage: `url('/login.png')`, // replace with your image
        
          backgroundPosition: "center",
        }}
      >
        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-orange-500/80"></div>

        {/* Text Content */}
        <div className="relative text-white text-center px-12 max-w-xl">
          <h1 className="text-5xl font-bold mb-6">Chuks Kitchen</h1>
          <p className="text-xl leading-relaxed">
            Your journey to delicious, authentic Nigerian meals starts here.
            Sign up or log in to order your favorites today!
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100 px-8 py-12  ">
        <div className="w-full max-w-md mt-25">
          {/* Logo */}
          <h2 className="text-orange-500 text-2xl italic mb-2 text-center">
            Chuks Kitchen
          </h2>

          <h3 className="text-2xl font-semibold text-center mb-8">
            Create Your Account
          </h3>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-2">
              Phone number
            </label>
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
              <Phone className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="tel"
                placeholder="8123340690"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="QWE123#"
                className="w-full outline-none bg-transparent"
              />
              {showPassword ? (
                <Eye
                  className="w-5 h-5 text-gray-400 ml-3 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff
                  className="w-5 h-5 text-gray-400 ml-3 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">
              Confirm password
            </label>
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
              <Lock className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="QWE123#"
                className="w-full outline-none bg-transparent"
              />
              {showConfirmPassword ? (
                <Eye
                  className="w-5 h-5 text-gray-400 ml-3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <EyeOff
                  className="w-5 h-5 text-gray-400 ml-3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start mb-6 text-sm">
            <input type="checkbox" className="mt-1 mr-2 accent-blue-600" />
            <p className="text-gray-600">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Continue
          </button>

          {/* Divider */}
          <div className="text-center text-sm text-gray-500 my-6">
            Or continue with
          </div>

          {/* Google */}
          <button className="w-full border py-3 rounded-lg mb-4 bg-white hover:bg-gray-50 transition">
            Continue with Google
          </button>

          {/* Apple */}
          <button className="w-full border py-3 rounded-lg bg-white hover:bg-gray-50 transition">
            Continue with Apple
          </button>

          {/* Sign in */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
