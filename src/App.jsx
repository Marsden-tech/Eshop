import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Dummy page components
const Home = () => <h2 className="text-center mt-10">Welcome to Eshop</h2>;
const Shop = () => <h2 className="text-center mt-10">Shop Page</h2>;
const About = () => <h2 className="text-center mt-10">About Us</h2>;
const Contact = () => <h2 className="text-center mt-10">Contact Us</h2>;
