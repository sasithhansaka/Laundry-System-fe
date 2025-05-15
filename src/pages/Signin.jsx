import React from "react";
import "./SignIn.css";
import SignInImg from '../images/signin.png';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex-wrap mx-auto flex justify-center login min-h-full px-6 py-12 lg:px-8" id="login">
      <div className="sm:max-w-sm flex flex-col items-end justify-center mr-20">
        <img className="h-20 w-20" src={SignInImg} alt="Login" />
        <h2 className="mt-1 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
      </div>

      <div className="flex justify-start p-3">
        <form className="forms space-y-3" action="#" method="POST" name="loginForm">
          <div className="email">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                placeholder="example@gmail.com"
              />
            </div>
          </div>

          <div className="password">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                placeholder="*****"
              />
            </div>
          </div>

          <div className="w-full flex justify-center max-w-sm space-y-3 flex items-center">
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="flex w-full justify-center rounded-lg bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
            >
              Not registered? Create an Account
            </button>
          </div>

          <div className="max-w-sm mt-3 space-y-3 flex items-center">
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700" >
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default SignIn;
