import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Products */}
      <div className="px-6 md:px-16 py-16">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.25em] text-[#8A6F2E] uppercase mb-2">
            Collection
          </p>
          <h2
            className="text-3xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Featured Fragrances
          </h2>
          <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;