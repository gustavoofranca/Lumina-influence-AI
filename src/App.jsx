import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage  from './pages/LandingPage.jsx'
import Welcome      from './pages/Welcome.jsx'
import DesignSystem from './pages/DesignSystem.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<LandingPage />} />
        <Route path="/welcome"       element={<Welcome />} />
        <Route path="/design-system" element={<DesignSystem />} />
        {/* Rotas das proximas etapas entram aqui */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
