import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MERN Task Manager</h1>

        {token && user ? (
          <div className="flex items-center gap-4">
            <span>Hello, {user.name}</span>

            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
