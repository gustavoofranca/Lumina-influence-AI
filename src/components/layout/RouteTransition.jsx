import { useLocation } from 'react-router-dom'

/**
 * RouteTransition — wrapper que aplica fade-in sutil quando a rota muda.
 * Usa o pathname como key para forcar o React a remountar a subarvore
 * (acionando a animacao CSS).
 */
export default function RouteTransition({ children }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  )
}
