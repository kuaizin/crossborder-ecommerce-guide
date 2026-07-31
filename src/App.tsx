import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import NetworkGuide from './pages/NetworkGuide'
import PhoneGuide from './pages/PhoneGuide'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/network" element={<NetworkGuide />} />
      <Route path="/phone" element={<PhoneGuide />} />
    </Routes>
  )
}
