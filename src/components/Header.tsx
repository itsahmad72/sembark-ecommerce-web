import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header: React.FC = () => {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext?.totalItems || 0;

  return (
    <header>
      <nav className="navigation" role="navigation" aria-label="Main Navigation">
        <Link to="/" className="navbar-logo" aria-label="Go to Home Page" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/vite.svg"
            loading="lazy"
            alt="SEMBARK Logo"
            style={{ width: 40, height: 40 }}
          />
          SEMBARK
        </Link>

        <Link
          to="/cart"
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "4px" }}
          aria-label={`Shopping cart, ${totalItems} items`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>

          {totalItems > 0 && (
            <span
              className="count-badge"
              aria-live="polite"
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                backgroundColor: "red",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: 12,
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
