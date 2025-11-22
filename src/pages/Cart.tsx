import {  useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import HeadingText from "../components/HeadingText";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const cart = cartContext?.cart || [];
  const navigate = useNavigate();
  const totalPrice = cartContext?.totalPrice ?? 0;

  const handleRemove = (id: number) => {
    cartContext?.removeFromCart(id);
    toast.success("Item removed from cart!");
  };

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "2rem auto",
        padding: "2rem",
        // border: "1px solid #e0e0e0",
        // borderRadius: 12,
        // boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        backgroundColor: "#fff",
      }}
    >
      <h4
        style={{ cursor: "pointer", display: "inline-block" }}
        onClick={() => navigate(-1)}
      >
        &larr; Go Back
      </h4>


      <HeadingText
        text="Shopping"
        highlight="Cart" />


      {cart.length === 0 ? (
        <div style={{textAlign:'center'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={200}
            height={200}
            fill="#00000013"
            className="bi bi-emoji-tear"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M6.831 11.43A3.1 3.1 0 0 1 8 11.196c.916 0 1.607.408 2.25.826.212.138.424-.069.282-.277-.564-.83-1.558-2.049-2.532-2.049-.53 0-1.066.361-1.536.824q.126.27.232.535.069.174.135.373ZM6 11.333C6 12.253 5.328 13 4.5 13S3 12.254 3 11.333c0-.706.882-2.29 1.294-2.99a.238.238 0 0 1 .412 0c.412.7 1.294 2.284 1.294 2.99M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5m-1.5-3A.5.5 0 0 1 10 3c1.162 0 2.35.584 2.947 1.776a.5.5 0 1 1-.894.448C11.649 4.416 10.838 4 10 4a.5.5 0 0 1-.5-.5M7 3.5a.5.5 0 0 0-.5-.5c-1.162 0-2.35.584-2.947 1.776a.5.5 0 1 0 .894.448C4.851 4.416 5.662 4 6.5 4a.5.5 0 0 0 .5-.5" />
          </svg>

          <p style={{ fontSize: "1.2rem", color: "#666" }}>Your cart is empty</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: 8,
              }}
            >
              <img src={item.image} loading="lazy" alt={item.title} style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                marginRight: "15px",
              }} />
              <div style={{ flex: "1" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: 4 }}>{item.title}</h4>
                <p style={{ fontSize: "0.95rem", color: "#555" }}>
                  ₹{item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b71c1c")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e53935")}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            Total: ₹{totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
