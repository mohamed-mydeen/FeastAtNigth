import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', icon: 'home', path: '/home' },
  { label: 'Menu', icon: 'restaurant_menu', path: '/menu' },
  { label: 'Cart', icon: 'shopping_cart', path: '/cart' },
  { label: 'Contact', icon: 'contact_page', path: '/cart' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="sticky bottom-0 w-full z-50 rounded-t-[32px] bg-white/95 backdrop-blur-lg shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border-t border-neutral-100 flex justify-around items-center px-2 pb-5 pt-3">
      {navItems.map(({ label, icon, path }) => {
        const isActive = pathname === path || (label === 'Contact' && pathname === '/cart')
        const isCart = label === 'Cart'
        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`relative flex flex-col items-center justify-center transition-all active:scale-90 duration-200 px-4 py-1.5 rounded-full ${
              isActive
                ? 'bg-orange-100 text-orange-900'
                : 'text-neutral-400 hover:text-orange-600'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] ${isActive ? 'icon-filled' : ''}`}>
              {icon}
            </span>
            <span className="font-headline text-[9px] font-semibold uppercase tracking-widest mt-0.5">
              {label}
            </span>
            {isCart && (
              <span className="absolute -top-0.5 right-2 w-4 h-4 bg-[#a83100] text-white text-[8px] flex items-center justify-center rounded-full font-bold leading-none">
                2
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
