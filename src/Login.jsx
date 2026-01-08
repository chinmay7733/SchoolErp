import { useState } from "react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import campus from "./assets/campus.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      
    
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={campus}
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-600/60"></div>
      </div>

    
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome
          </h2>
          <p className="text-amber-700 mb-4">
            Please enter your details to sign in
          </p>

       
          <div className="flex gap-3 mb-4">
            <button className="flex-1 py-2 rounded-md bg-blue-600 text-white flex items-center justify-center text-lg">
              <FaFacebookF />
            </button>

            <button className="flex-1 py-2 rounded-md border flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
            </button>

            <button className="flex-1 py-2 rounded-md bg-black text-white flex items-center justify-center text-lg">
              <FaApple />
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mb-3">
            OR
          </div>

        
          <div className="mb-3">
            <label className="text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

   
          <div className="mb-3 relative">
            <label className="text-sm text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-600" />
              Remember Me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition">
            Sign In
          </button>

  
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Create Account
            </a>
          </p>

          <p className="text-center text-xs text-gray-400 mt-4">
            © 2024 Preskool
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
