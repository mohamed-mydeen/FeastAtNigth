import { useNavigate } from 'react-router-dom'

export default function TopBar({ showSubtitle = true }) {
  const navigate = useNavigate()
  return (
    <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-5 py-4 w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/home')}
            className="material-symbols-outlined text-[22px] text-orange-800 cursor-pointer active:scale-95 transition-transform"
          >
            menu
          </button>
          <span className="font-headline font-black text-orange-900 tracking-tighter text-lg">
            Feast At Night
          </span>
        </div>
        {showSubtitle && (
          <div className="text-orange-800 font-headline font-bold tracking-tight text-xs opacity-80">
            In the name of Allah
          </div>
        )}
      </div>
    </div>
  )
}
