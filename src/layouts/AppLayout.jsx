import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/layout/Sidebar.jsx'
import Topbar  from '../components/layout/Topbar.jsx'

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-bg-base text-text-primary">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Área principal — offset da sidebar em lg */}
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
