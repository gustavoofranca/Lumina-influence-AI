import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AuthProvider }  from './context/AuthContext.jsx'
import ProtectedRoute    from './components/auth/ProtectedRoute.jsx'
import AppLayout         from './layouts/AppLayout.jsx'

import LandingPage    from './pages/LandingPage.jsx'
import Welcome        from './pages/Welcome.jsx'
import DesignSystem   from './pages/DesignSystem.jsx'
import Login          from './pages/Login.jsx'
import Cadastro       from './pages/Cadastro.jsx'
import RecuperarSenha from './pages/RecuperarSenha.jsx'
import Dashboard      from './pages/Dashboard.jsx'
import Influenciadores from './pages/Influenciadores.jsx'

// Placeholders — substituídos nas etapas seguintes
function Placeholder({ label }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-text-muted">{label} — em breve</p>
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

          {/* App interno — protegido + AppLayout */}
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index                element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard"     element={<Dashboard />} />
            <Route path="influenciadores"  element={<Influenciadores />} />
            <Route path="influenciadores/:id" element={<Placeholder label="Influenciador" />} />
            <Route path="campanhas"     element={<Placeholder label="Campanhas" />} />
            <Route path="campanhas/nova" element={<Placeholder label="Nova Campanha" />} />
            <Route path="campanhas/:id" element={<Placeholder label="Campanha" />} />
            <Route path="diagnostico"   element={<Placeholder label="Diagnóstico IA" />} />
            <Route path="relatorios"    element={<Placeholder label="Relatórios" />} />
            <Route path="relatorios/novo" element={<Placeholder label="Novo Relatório" />} />
            <Route path="configuracoes" element={<Placeholder label="Configurações" />} />
            <Route path="configuracoes/:tab" element={<Placeholder label="Configurações" />} />
            <Route path="suporte"       element={<Placeholder label="Suporte" />} />
          </Route>

          {/* Utilitários */}
          <Route path="/welcome"       element={<Welcome />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
