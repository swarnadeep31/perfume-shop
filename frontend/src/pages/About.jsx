import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      <Navbar />

      <div className="px-6 md:px-16 py-16 max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mb-4">
          Our Story
        </p>

        <h1
          className="text-4xl md:text-5xl mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Maison Elara
        </h1>

        <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-8" />

        <p className="text-gray-400 leading-relaxed mb-6">
          Maison Elara was born from a passion for timeless elegance and the art of fragrance.
          Each scent is crafted to evoke emotion, memory, and identity — a signature that
          lingers long after the moment has passed.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          Inspired by luxury, minimalism, and modern sophistication, our perfumes blend
          rare ingredients with refined craftsmanship to create an unforgettable experience.
        </p>

        <p className="text-gray-400 leading-relaxed">
          We believe fragrance is more than a scent — it is a statement of who you are.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;