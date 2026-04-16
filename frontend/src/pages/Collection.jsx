import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Collection() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mb-4">
            Collection
          </p>

          <h1
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Coming Soon
          </h1>

          <div className="w-10 h-px bg-[#C9A84C] mx-auto mb-6" />

          <p className="text-gray-500 text-sm tracking-wide">
            Our exclusive fragrance collection is on its way.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Collection;