import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data);
  }
    reset();
    toast.success("Form submitted successfully!");


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 bg-pink-600 text-white p-5 text-center rounded">
          Signup
        </h2>

        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full mb-4">
            <label htmlFor="fullname" className="block mb-1 font-semibold">
              Fullname
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Fullname"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-md text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

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
            <label htmlFor="number" className="block mb-1 font-semibold">
              Number
            </label>
            <input
              type="text"
              id="number"
              placeholder="Enter your number"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("number", {
                required: "Number is required",
                minLength: {
                  value: 10,
                  message: "Number must be at least 10 digits long",
                },
                maxLength: {
                  value: 15,
                  message: "Number must be no more than 15 digits long",
                },
              })}
            />
            {errors.number && (
              <span className="text-md text-red-600">
                {errors.number.message}
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

          <div className="text-center mt-4">
            <Link to="/" className="text-blue-500">
              Home Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
