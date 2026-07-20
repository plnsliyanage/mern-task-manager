import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
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

    dispatch(register(formData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Account created successfully");

        // Redirect to Login page
        navigate("/");
      } else {
        toast.error(result.payload || "Registration failed");
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-blue-950 rounded-t-xl px-8 py-6 shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center">
            Create Account
          </h1>

          <p className="text-blue-200 text-center mt-2">
            Join and manage your tasks easily
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white px-8 py-8 rounded-b-xl shadow-xl border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-blue-950 mb-6">Register</h2>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-blue-950 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
