import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import AllRestaurantsPage from './Pages/AllRestaurantsPage/AllRestaurantsPage'
import { Div } from './LayoutStyle'
import ContactUs from './Pages/contactUs/ContactUs'
import TermOfUse from './Pages/TermOfUse/TermOfUse'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'

export default function Layout() {
    return (
        <Div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/restaurantsPage" element={<AllRestaurantsPage />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/TermOfUse" element={<TermOfUse />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </Div>
    )
}
