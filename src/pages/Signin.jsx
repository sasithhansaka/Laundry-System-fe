import React from "react";
import "./SignIn.css";
import SignInImg from '../images/signin.png';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen px-6 py-12" id="login">
      <div className="max-w-4xl bg-white rounded-3xl flex overflow-hidden animate-fadeIn border border-3 border-purple-600">

        {/* Left side with image and title */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-tr from-purple-800 to-purple-600 text-white w-1/2 p-12 rounded-l-3xl">
          <img src={SignInImg} alt="Sign In" className="h-32 w-32 mb-6 animate-pulse-slow" />
          <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">Welcome Back!</h2>
          <p className="mt-2 text-purple-200 max-w-xs text-center">
            Sign in to access your account and continue your journey with us.
          </p>
        </div>

        {/* Right side: form */}
        <div className="w-full md:w-1/2 p-12 ">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Sign in</h3>

          <form className="space-y-6" action="#" method="POST" name="loginForm">

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="example@gmail.com"
                className="input-field"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="input-field"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <button
                type="submit"
                className="btn-primary"
                onClick={() => navigate('/dashboard/home')}

              >
                Login
              </button>

              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="btn-secondary"
              >
                Not registered? Create an Account
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
