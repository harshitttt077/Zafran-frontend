import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import FrontendOnlyEnhancements from '@/components/FrontendOnlyEnhancements'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import SmoothScroll from '@/components/SmoothScroll'
import GSAPAnimations from '@/components/GSAPAnimations'

const Home = lazy(() => import('@/pages/Home'))
const AboutUs = lazy(() => import('@/pages/AboutUs'))
const ContactUs = lazy(() => import('@/pages/ContactUs'))
const Catering = lazy(() => import('@/pages/Catering'))
const PrivateEvents = lazy(() => import('@/pages/PrivateEvents'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('@/pages/TermsAndConditions'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function RouteFallback() {
  return (
    <main className="main-wrapper">
      <section className="section_layout1">
        <div className="padding-global">
          <div className="container-large">
            <div
              style={{
                minHeight: '40vh',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div className="text-color-white">Loading page...</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <GSAPAnimations />
      <FrontendOnlyEnhancements />
      <Toaster position="bottom-center" />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </SmoothScroll>
  )
}
