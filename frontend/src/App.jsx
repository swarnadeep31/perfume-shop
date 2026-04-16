import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/home";
import About from "./pages/About";
import Collection from "./pages/Collection";


    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
<Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;