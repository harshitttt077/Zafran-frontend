import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import GSAPAnimations from '@/components/GSAPAnimations'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import ContactUs from '@/pages/ContactUs'
import Catering from '@/pages/Catering'
import PrivateEvents from '@/pages/PrivateEvents'

export default function App() {
  return (
    <SmoothScroll>
      <GSAPAnimations />
      <Toaster position="bottom-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/private-events" element={<PrivateEvents />} />
      </Routes>
      <Footer />
    </SmoothScroll>
  )
}
