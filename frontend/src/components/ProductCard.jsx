import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="group cursor-pointer bg-[#111] border border-[#222] hover:border-[#C9A84C] transition-all duration-300 hover:-translate-y-1"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A]">
        <img
          src={product.images?.[0] || "https://placehold.co/400x600?text=No+Image"}
          alt={product.name}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap border border-[#C9A84C] text-[#C9A84C] text-[9px] tracking-[0.18em] uppercase px-5 py-2 bg-black/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View Details
        </div>
      </div>

      <div className="p-4">
        <p className="text-[9px] tracking-[0.22em] uppercase text-[#8A6F2E] mb-1">
          {product.brand || "Luxury Fragrance"}
        </p>
        <h2
          className="text-[19px] text-white font-light mb-2 leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h2>
        <p className="text-[11px] text-[#555] line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[17px] text-[#C9A84C]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <div className="flex gap-1">
            {product.sizes?.map((size) => (
              <span key={size} className="text-[9px] border border-[#2A2A2A] px-2 py-0.5 text-[#555] tracking-wide">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;