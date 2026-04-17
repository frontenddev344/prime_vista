import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Bars from "./pages/Bars";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from './pages/Booking'
import OffersPromotion from './pages/OffersPromotions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsCondition from './pages/TermsConditions'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bars-and-lounges" element={<Bars />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/offers-promotions" element={<OffersPromotion />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
