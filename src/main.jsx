import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Athletes from './pages/Athletes.jsx'
import Faq from './pages/faq.jsx'
import ExploreAthletes from './pages/ExploreAthletes.jsx'
import OurTeam from './pages/OurTeam.jsx'
import StoreFront from './pages/StoreFront.jsx'
import AthletesSignUp from './pages/AthletesSignUp.jsx'
import MasterLayout from './masterlayout/index.jsx'
import NilService from './adminpages/NilService.jsx'
import Subscription from './adminpages/Subscription.jsx'
import Settings from './adminpages/Settings.jsx'
import AdminHome from './adminpages/index.jsx'
import Reviews from './adminpages/Reviews.jsx'
import Graphic from './adminpages/graphic/index.jsx'
import Dashboard from './adminpages/dashboard.jsx/index.jsx'
import Policy from './pages/Policy.jsx'
import TwelveDayCounter from './components/TwelveDayCounter.jsx'
import Login from './pages/Login.jsx'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/ScrollToTop.jsx' // adjust path if needed



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<><Outlet /></>}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="athletes" element={<Athletes />} />
            <Route path="faq" element={<Faq />} />
            <Route path="explore-athletes" element={<ExploreAthletes />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="store-front" element={<StoreFront />} />
            <Route path="athlete-signup" element={<AthletesSignUp />} />
            <Route path="policy" element={<Policy />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path='/athlete/dashboard' element={<TwelveDayCounter />} />

          <Route path='adqdnqnwdjnqdn' element={<MasterLayout />} >
            <Route path='home' element={<AdminHome />} />
            <Route path='dashboardss' element={<Dashboard />} />
            <Route path='nil-service' element={<NilService />} />
            <Route path='subscription' element={<Subscription />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='graphic' element={<Graphic />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
