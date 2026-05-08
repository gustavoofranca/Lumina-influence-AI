import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute   from './components/auth/ProtectedRoute.jsx'

import LandingPage    from './pages/LandingPage.jsx'
import Welcome        from './pages/Welcome.jsx'
import DesignSystem   from './pages/DesignSystem.jsx'
import Login          from './pages/Login.jsx'
import Cadastro       from './pages/Cadastro.jsx'
import RecuperarSenha from './pages/RecuperarSenha.jsx'

// Placeholder para o dashboard (Etapa 5)
function DashboardPlaceholder() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-base">
      <p className="text-text-secondary">Dashboard — Etapa 5</p>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Público */}
          <Route path="/"                element={<LandingPage />} />
          <Route path="/login"           element={<Login />} />
          <Route path="/cadastro"        element={<Cadastro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />

          {/* Interno — protegido */}
          <Route
            path="/app/*"
            element={
              <ProtectedRoute>
                <DashboardPlaceholder />
              </ProtectedRoute>
            }
          />

          {/* Utilitários */}
          <Route path="/welcome"       element={<Welcome />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
