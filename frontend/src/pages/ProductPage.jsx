import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [form, setForm] = useState({ name: "", rating: "", comment: "" });

  useEffect(() => {
    const fetchData = async () => {
      const productRes = await API.get(`/products/${id}`);
      setProduct(productRes.data);
      setSelectedSize(productRes.data.sizes?.[0]);
      const reviewRes = await API.get(`/reviews/product/${id}`);
      setReviews(reviewRes.data);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/reviews", { productId: id, ...form });
    const res = await API.get(`/reviews/product/${id}`);
    setReviews(res.data);
    setForm({ name: "", rating: "", comment: "" });
  };

  if (!product) return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#C9A84C] tracking-widest text-sm uppercase">
      Loading...
    </div>
  );

  return (
    <div className="bg-[#0A0A0A] min-h-screen px-6 md:px-16 py-12" style={{ fontFamily: "'Jost', sans-serif" }}>
        <Navbar/>
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden border border-[#1A1A1A]">
          <img
            src={product.images?.[0] || "https://placehold.co/600x800?text=No+Image"}
            alt={product.name}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-[9px] tracking-[0.22em] uppercase text-[#8A6F2E] mb-3">
            Luxury Fragrance
          </p>
          <h1
            className="text-5xl font-light text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {product.name}
          </h1>
          <div className="w-12 h-px bg-[#C9A84C] mb-6" />
          <p className="text-sm text-[#666] mb-6 leading-relaxed">{product.description}</p>
          <p className="text-3xl text-[#C9A84C] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          {/* Sizes */}
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#555] mb-3">Select Size</p>
          <div className="flex gap-3 mb-8">
            {product.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border text-[11px] tracking-wider px-5 py-2 transition-all duration-200 ${
                  selectedSize === size
                    ? "border-[#C9A84C] text-[#C9A84C]"
                    : "border-[#2A2A2A] text-[#555] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <button className="bg-[#C9A84C] text-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#E8C96A] transition-all duration-200 w-full md:w-auto">
            Add to Cart
          </button>

          {/* Reviews */}
          <div className="mt-12">
            <p className="text-[9px] tracking-[0.22em] uppercase text-[#8A6F2E] mb-6">Customer Reviews</p>
            {reviews.length === 0 && <p className="text-[#444] text-sm">No reviews yet. Be the first.</p>}
            <div className="space-y-3">
              {reviews.map((r) => (
                <div key={r._id} className="border border-[#1A1A1A] p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[13px] text-[#C9A84C]">{r.name}</p>
                    <p className="text-[#C9A84C] text-xs tracking-widest">
                      {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                    </p>
                  </div>
                  <p className="text-[12px] text-[#555] leading-relaxed">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.22em] uppercase text-[#8A6F2E] mb-5">Write a Review</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
              {["name", "rating", "comment"].map((field) =>
                field === "comment" ? (
                  <textarea
                    key={field}
                    name={field}
                    placeholder="Your review"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    rows={3}
                    className="bg-[#111] border border-[#2A2A2A] text-[#ccc] placeholder-[#444] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] transition resize-none"
                    required
                  />
                ) : (
                  <input
                    key={field}
                    type={field === "rating" ? "number" : "text"}
                    name={field}
                    placeholder={field === "rating" ? "Rating (1–5)" : "Your name"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    min={1} max={5}
                    className="bg-[#111] border border-[#2A2A2A] text-[#ccc] placeholder-[#444] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] transition"
                    required
                  />
                )
              )}
              <button className="border border-[#C9A84C] text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase py-3 hover:bg-[#C9A84C] hover:text-black transition-all duration-200">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default ProductPage;