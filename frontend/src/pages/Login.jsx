import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../features/auth/authSlice";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error(result.payload || "Login failed");
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-blue-950 rounded-t-xl px-8 py-6 shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center">
            Welcome Back
          </h1>

          <p className="text-blue-200 text-center mt-2">
            Login to manage your tasks
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white px-8 py-8 rounded-b-xl shadow-xl border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-blue-950 mb-6">
            Account Login
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-950 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
