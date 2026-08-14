import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";
import Cart from "./pages/Cart";
import BookDetails from "./components/Bookdetails";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>
  );
}

export default App;

// import ProductParent from "./practice/ProductParent";

// function App() {
//   return (
//     <ProductParent />
//   )
// }

// export default App;