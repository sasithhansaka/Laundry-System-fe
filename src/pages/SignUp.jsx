import React from "react";
import signin from "../images/signin.png";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form handling logic here
        console.log("Form submitted");
        // You can navigate to another page after successful submission
        navigate('/dashboard'); // Assuming you want to go to a dashboard page after signup
    };

    return (
        <div className="container flex-wrap mx-auto flex justify-center login min-h-full px-6 py-12 lg:px-8" id="signin">
            <div className="sm:max-w-sm flex flex-col items-end justify-center mr-20">
                <img className="h-20 w-20" src={signin} alt="Sign in" />
                <h2 className="mt-1 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
            </div>

            <div className="flex justify-start p-3">
                <form className="forms space-y-3" onSubmit={handleSubmit} name="signInForm">
                    <div className="fname">
                        <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                                placeholder="First Name"
                            />
                        </div>
                    </div>

                    <div className="lname">
                        <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                autoComplete="family-name"
                                required
                                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            E-mail
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div className="password">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="confirm-password">
                        <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-100 px-5"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="w-full flex justify-center max-w-sm space-y-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => navigate('/signin')}
                            className="flex w-full justify-center rounded-lg bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                        >
                            Already registered? Login
                        </button>
                    </div>

                    <div className="max-w-sm mt-3 space-y-3 flex items-center">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-lg bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-700"
                        >
                            Create My Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
