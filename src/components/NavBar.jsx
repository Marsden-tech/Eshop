import { FaShoppingCart, FaUser, FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-12 flex items-center justify-between">
      {/* Left - Shop Name */}
      <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide font-serif ml-6">Eshop</h1>
      
      {/* Center - Nav Links */}
      <ul className="flex space-x-16 text-gray-700 font-medium">
        <li><Link to="/" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Home</Link></li>
        <li><Link to="/shop" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Shop</Link></li>
        <li><Link to="/about" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">About</Link></li>
        <li><Link to="/contact" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition">Contacts</Link></li>
      </ul>
      
      {/* Right - Icons */}
      <div className="flex space-x-8 text-2xl text-gray-500">
        <FaSearch className="cursor-pointer hover:text-gray-700 transition" />
        <FaHeart className="cursor-pointer hover:text-gray-700 transition" />
        <FaUser className="cursor-pointer hover:text-gray-700 transition" />
        <FaShoppingCart className="cursor-pointer hover:text-gray-700 transition" />
      </div>
    </nav>
  );
}
