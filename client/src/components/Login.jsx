import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const User = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("https://e-commerce-three-beta.vercel.app/user/login", User);
      if (res.data) {
        toast.success("Login successful");
        localStorage.setItem('user', JSON.stringify(res.data));
        reset();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 bg-pink-600 text-white p-5 text-center rounded">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-md text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-md text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-success bg-green-500 text-white p-2 rounded font-semibold hover:bg-green-600 transition duration-200 w-full"
          >
            Submit
          </button>

          <div className="text-center">
            <Link to="/signup" className="text-blue-500">
              Create New Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
