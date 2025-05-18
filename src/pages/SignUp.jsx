import React from "react";
import SignInImg from '../images/signin.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form handling logic here
        console.log("Form submitted");
        navigate('/dashboard/home'); // Navigate after signup
    };

    return (
        <div className="container mx-auto flex justify-center items-center min-h-screen px-6 py-12" id="signup">
            <div className="max-w-4xl bg-white rounded-3xl flex overflow-hidden animate-fadeIn border border-purple-600">

                {/* Left side with image and title */}
                <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-tr from-purple-800 to-purple-600 text-white w-1/2 p-12 rounded-l-3xl">
                    <img src={SignInImg} alt="Sign Up" className="h-32 w-32 mb-6 animate-pulse-slow" />
                    <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">Join Us!</h2>
                    <p className="mt-2 text-purple-200 max-w-xs text-center">
                        Create your account to start your journey with us today.
                    </p>
                </div>

                {/* Right side: form */}
                <div className="w-full md:w-1/2 p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Sign up</h3>

                    <form className="space-y-6" onSubmit={handleSubmit} name="signUpForm">

                        {/* First Name */}
                        <div>
                            <label htmlFor="fname" className="block text-sm font-semibold text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                autoComplete="given-name"
                                required
                                placeholder="First Name"
                                className="input-field"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lname" className="block text-sm font-semibold text-gray-700 mb-2">
                                Last Name
                            </label>
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                autoComplete="family-name"
                                required
                                placeholder="Last Name"
                                className="input-field"
                            />
                        </div>

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
                                autoComplete="new-password"
                                required
                                placeholder="••••••••"
                                className="input-field"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="cpassword" className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="new-password"
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
                            >
                                Create My Account
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('/signin')}
                                className="btn-secondary"
                            >
                                Already registered? Login
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
