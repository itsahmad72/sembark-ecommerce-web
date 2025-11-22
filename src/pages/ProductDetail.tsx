import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchProductById } from "../api";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (id) fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>;

  const handleAddToCart = () => {
    if (!cartContext) return;

    cartContext?.addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    });

    toast.success("Added to Cart!");

    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div
      style={{
        margin: "2rem auto",
        padding: "2rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ flex: "1 1 300px", textAlign: "center" }}>
        <img
          src={product.image}
          alt={product.title} loading="lazy"
          style={{
            maxWidth: "100%",
            borderRadius: 12,
            objectFit: "contain",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <div style={{ flex: "2 1 400px", display: "flex", flexDirection: "column", }}>
        <h4
          style={{ cursor: "pointer", display: "inline-block" }}
          onClick={() => navigate(-1)}
        >
          &larr; Go Back
        </h4>
        <p style={{ textAlign: "end", margin: 0 }}>{product?.category}</p>
        <h2 style={{ textAlign: "end", marginTop: 0, fontSize: 50 }}>
          {product.title}
        </h2>
        <p>{product.description}</p>

        <h2 style={{ fontSize: 30 }}>
          <span style={{ color: "#f5a623" }}>
            {Array.from({ length: 5 }, (_, i) =>
              i < Math.round(product.rating.rate) ? "★" : "☆"
            ).join("")}
          </span>
        </h2>

        <h2 style={{ fontSize: 30 }}>₹ {product.price} </h2>

        <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
          <button
            style={{
              border: "1px solid black",
              cursor: isAdding ? "not-allowed" : "pointer",
              background: isAdding ? "#d3d3d3" : "white",
              padding: 20,
              width: "100%",
              transition: "all 0.2s",
            }}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>

        <p style={{ fontSize: 13 }}>Delivery in 3-5 working days.</p>

      </div>
    </div>
  );
};

export default ProductDetail;
