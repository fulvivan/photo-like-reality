import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logger from "../utils/logger";
import Logo from "./Logo";
import "./Navbar.css";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  // { onLogin, onProfile, onFavs, onSearch, onHome }
  logger.debug("Navbar -> render");

  const navigate = useNavigate();
  const [view, setView] = useState("");
  const { token } = sessionStorage;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    logger.debug("Navbar -> useEffect");

    if (token) {
      setView("loggedIn");
    } else {
      setView("loggedOut");
    }
  }, [token]);

  return (
    <nav className="navbar">
      <div className="logo clickable" onClick={() => navigate("/")}>
        <Logo />
      </div>

      <ul
        className={
          isMobile ? "nav-links-mobile" : "nav-links"
        }
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="">
          <li className="home clickable">Home</li>
        </Link>

        <Link to="/search" className="">
          <li className="search clickable">Search</li>
        </Link>
        <Link to="/favs" className="">
          <li className="favs clickable">Favs</li>
        </Link>
        <>
          {view === "loggedOut" && (
            <Link to="/register" className="">
              <li className="register clickable">Register</li>
            </Link>
          )}
          {view === "loggedOut" && (
            <Link to="/login" className="">
              <li className="login clickable">Login</li>
            </Link>
          )}
          {view === "loggedIn" && (
            <Link to="/profile" className="">
              <li className="profile clickable">Profile</li>
            </Link>
          )}
        </>
        <div className="theme clickable">
          <ThemeSwitch />
        </div>
      </ul>
      <button
        className="mobile-menu-icon clickable"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times clickable"></i>
        ) : (
          <i className="fas fa-bars clickable"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
