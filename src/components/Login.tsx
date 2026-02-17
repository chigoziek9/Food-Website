import { Mail, Lock, EyeOff } from "lucide-react";

const Login = () => {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center"
        style={{
          backgroundImage: `url('/login.png')`, // replace with your image
          backgroundSize: "cover",
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
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100 px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <img
            src="/Chuks Kitchen.png"
            alt=""
            className="h-10 w-[160px] mx-auto block"
          />

         
          <h3 className="text-2xl font-semibold text-center mb-8">
            Login your Account
          </h3>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-2">
              Email or phone number
            </label>
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="name@gmail.com"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm text-gray-600 mb-2">Password</label>
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
              <Lock className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="******"
                className="w-full outline-none bg-transparent"
              />
              <EyeOff className="w-5 h-5 text-gray-400 ml-3 cursor-pointer" />
            </div>
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-blue-500">
              Forgot Password?
            </a>
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

          {/* Signup */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 font-medium">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
