import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import EmailVerificationPage from "./pages/VerifyEmail";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<EmailVerificationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

