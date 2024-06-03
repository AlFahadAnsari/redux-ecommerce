import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = useSelector((state) => state.cart);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 607);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 607);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Update login state if localStorage changes
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar bg-slate-500 rounded-lg p-4 text-white md:px-28">
      <div className="flex-1 flex items-center">
        <Link
          to="/"
          className="fa-solid fa-house hover:bg-slate-700 p-4 rounded-lg"
        ></Link>
        {isWideScreen && <h1 className="mx-3 text-xl">Alfahad Ansari</h1>}
      </div>
      <div className="flex-none flex items-center">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link to="/cart" className="text-[20px]">
                Cart
              </Link>
              <span className="badge badge-sm indicator-item">
                {item.length}
              </span>
            </div>
          </button>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn text-white btn-danger bg-purple-600 btn-sm mx-5"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn text-white btn-warning btn-sm mx-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
