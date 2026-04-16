import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-[#1A1A1A] bg-[#0A0A0A] sticky top-0 z-50">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl tracking-widest text-[#C9A84C] cursor-pointer"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
      >
        Maison Elara
      </h1>
      <div className="flex gap-7 text-[11px] tracking-[0.18em] uppercase">
        <span onClick={() => navigate("/")} className="text-[#C9A84C] cursor-pointer">Home</span>
        <span className="text-[#555] hover:text-[#C9A84C] cursor-pointer transition">Collections</span>
        <span className="text-[#555] hover:text-[#C9A84C] cursor-pointer transition">About</span>
      </div>
    </nav>
  );
}

export default Navbar;