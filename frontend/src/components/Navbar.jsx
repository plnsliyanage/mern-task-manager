import { useDispatch, useSelector } from "react-redux";

import { logout } from "../features/auth/authSlice";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logged out successfully");

    navigate("/");
  };

  return (
    <nav className="bg-blue-950 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <div className="bg-blue-950 shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-8">
              <h1 className="text-4xl font-bold text-white tracking-wide">
                Task Dashboard
              </h1>

              <p className="text-blue-200 mt-2 text-lg">
                Manage your tasks efficiently and stay productive.
              </p>
            </div>
          </div>

          {/* User Section */}

          {token && user && (
            <div className="flex items-center gap-10">
              <div className="hidden sm:block">
                <p className="text-blue-200 text-sm">Welcome back</p>

                <p className="font-semibold text-white">{user.name}</p>
              </div>

              <button
                onClick={handleLogout}
                className="bg-white text-blue-950 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
