import { Fragment, useEffect, useMemo, useState } from "react";
import { fetchProducts, fetchCategories } from "../api";
import ProductCard from "../components/ProductCard";
import HeadingText from "../components/HeadingText";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const categoriesFromUrl = searchParams.get("categories");
    if (categoriesFromUrl) setSelectedCategories(categoriesFromUrl.split(","));
    const sortFromUrl = searchParams.get("sort");
    if (sortFromUrl) setSortOrder(sortFromUrl);
  }, []);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0) params.set("categories", selectedCategories.join(","));
    params.set("sort", sortOrder);
    setSearchParams(params);
  }, [selectedCategories, sortOrder, setSearchParams]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      if (selectedCategories.length > 0) {
        const promises = selectedCategories.map((cat) => fetchProducts(cat));
        const results = await Promise.all(promises);
        setProducts(results.flat());
      } else {
        setProducts(await fetchProducts());
      }
    };
    fetchAllProducts();
  }, [selectedCategories]);

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    if (sortOrder === "asc") sorted.sort((a, b) => a.price - b.price);
    else if (sortOrder === "desc") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [products, sortOrder]);

  const selectStyle: React.CSSProperties = {
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: 14,
    cursor: "pointer",
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <main style={{ position: "relative" }}>
      <div className="video-container" style={{ position: "relative" }}>
        <video autoPlay loop muted poster="assets/images/hero-thumb.jpg" id="video-bg" style={{ width: "100%", height: "auto", objectFit: "cover" }}>
          <source src="assets/images/hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      </div>

      <section className="home-wrapper">
        <HeadingText
          textStyle={{ color: "white", textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
          text="Our"
          highlight="Products"
          subText="Explore our latest products crafted with top-notch quality and attention to detail."
          side={
            <Fragment>
              <nav aria-label="Product Filters" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: 12 }}>
                {categories.map((cat) => (
                  <label
                    key={cat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "6px 14px",
                      border: "1px solid #ccc",
                      borderRadius: 20,
                      cursor: "pointer",
                      backgroundColor: selectedCategories.includes(cat) ? "var(--secondary)" : "#fff",
                      color: selectedCategories.includes(cat) ? "#fff" : "#333",
                      fontSize: 14,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <input
                      type="checkbox"
                      aria-checked={selectedCategories.includes(cat)}
                      style={{ display: "none" }}
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    {cat}
                  </label>
                ))}

                <select
                  aria-label="Sort products by price"
                  style={selectStyle}
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </nav>
            </Fragment>
          }
        />

        <section
          aria-label="Product List"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: 20,
          }}
        >
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Home;
