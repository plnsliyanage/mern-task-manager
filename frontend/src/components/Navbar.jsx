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
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Task Manager</h1>

        {token && user && (
          <div className="flex items-center gap-4">
            <p>Hello {user.name}</p>

            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
