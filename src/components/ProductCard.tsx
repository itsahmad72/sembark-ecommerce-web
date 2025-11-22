import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: any }) => {
  const styles: any = {
    card: {
      padding: "1rem",
      flex: "1 1 calc(16.66% - 1rem)",
      minWidth: "200px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
      ":hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
      "@media (max-width: 600px)": {
        flex: "1 1 100%",
      },
    },

    imageBox: {
      width: "100%",
      height: "180px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      marginBottom: "0.8rem",
    },

    image: {
      maxWidth: "100%",
      maxHeight: "160px",
      objectFit: "contain",
    },

    title: {
      fontSize: "16px",
      fontWeight: 600,
      margin: "0.5rem 0",
      lineHeight: "1.3",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      maxWidth: "200px",
    },

    price: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      margin: "0.5rem 0",
    },

    link: {
      color: "inherit",
      textDecoration: "none",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, styles.card[":hover"]);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, {
          transform: "translateY(0)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        });
      }}
    >
      <Link to={`/product/${product?.id}`} style={styles.link}>
        <div style={styles.imageBox}>
          <img src={product?.image} loading="lazy" alt={product?.title} style={styles.image} />
        </div>
        <h4 style={styles.title}>{product?.title}</h4>
        <h4 style={{ color: "#f5a623", margin: 0 }}>
          {Array.from({ length: 5 }, (_, i) =>
            i < Math.round(product?.rating?.rate) ? "★" : "☆"
          ).join("")}
        </h4>
        <p style={styles.price}>₹{product?.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
