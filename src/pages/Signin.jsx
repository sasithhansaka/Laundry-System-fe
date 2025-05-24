import React, { useState } from "react";
import "./SignIn.css";
import SignInImg from '../images/signin.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post(
        `https://lms-system-9a515d1462cd.herokuapp.com/api/users/login`,
        null, // No request body, since data goes in query string
        {
          params: {
            email: email,
            password: password
          }
        }
      );

      if (response.status === 200) {
        // Success - navigate to dashboard
        navigate('/dashboard/home');
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setErrorMsg('Invalid email or password.');
      } else {
        setErrorMsg('An error occurred. Please try again later.');
      }
    }
  };

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

          <form className="space-y-6" onSubmit={handleLogin}>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="input-field"
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="text-red-600 text-sm font-semibold">
                {errorMsg}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <button type="submit" className="btn-primary">
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
