import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CarParts from './components/CarParts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carparts" element={<CarParts />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}