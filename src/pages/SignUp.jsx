import React, { useState } from "react";
import SignInImg from "../images/signin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrorMsg(""); // Clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.cpassword) {
            setErrorMsg("Passwords do not match");
            return;
        }

        if (!formData.fname || !formData.lname || !formData.email || !formData.password) {
            setErrorMsg("Please fill all required fields.");
            return;
        }

        const nowISO = new Date().toISOString();

        const userPayload = {
            fullName: `${formData.fname} ${formData.lname}`,
            email: formData.email,
            password: formData.password,
            role: "USER",
            active: true,
            createdAt: nowISO,
            lastUpdatedAt: nowISO,
            id: 2,
        };

        try {
            const response = await axios.post(
                "https://lms-system-9a515d1462cd.herokuapp.com/api/users/register",
                userPayload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                navigate("/dashboard/home");
            } else {
                setErrorMsg("Registration failed. Please try again.");
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setErrorMsg(err.response.data.message);
            } else {
                setErrorMsg("An error occurred. Please try again later.");
            }
            console.error("Error during registration:", err);
        }
    };

    return (
        <div
            className="container mx-auto flex justify-center items-center min-h-screen px-6 py-12"
            id="signup"
        >
            <div className="max-w-4xl bg-white rounded-3xl flex overflow-hidden animate-fadeIn border border-purple-600">
                {/* Left side */}
                <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-tr from-purple-800 to-purple-600 text-white w-1/2 p-12 rounded-l-3xl">
                    <img
                        src={SignInImg}
                        alt="Sign Up"
                        className="h-32 w-32 mb-6 animate-pulse-slow"
                    />
                    <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
                        Join Us!
                    </h2>
                    <p className="mt-2 text-purple-200 max-w-xs text-center">
                        Create your account to start your journey with us today.
                    </p>
                </div>

                {/* Right side */}
                <div className="w-full md:w-1/2 p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Sign up</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* First Name */}
                        <div>
                            <label
                                htmlFor="fname"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                First Name
                            </label>
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                required
                                placeholder="First Name"
                                className="input-field"
                                value={formData.fname}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label
                                htmlFor="lname"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                required
                                placeholder="Last Name"
                                className="input-field"
                                value={formData.lname}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="example@gmail.com"
                                className="input-field"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="input-field"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="cpassword"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="input-field"
                                value={formData.cpassword}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Error Message */}
                        {errorMsg && (
                            <div className="text-red-600 text-sm font-semibold">{errorMsg}</div>
                        )}

                        {/* Buttons */}
                        <div className="flex flex-col gap-4 mt-8">
                            <button type="submit" className="btn-primary">
                                Create My Account
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/signin")}
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
