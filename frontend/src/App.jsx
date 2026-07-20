import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

import { fetchUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  // Hide Navbar on Login and Register pages
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <AppRoutes />
    </>
  );
}

export default App;
