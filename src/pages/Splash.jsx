import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0c0f10] flex flex-col">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5NpTxgT-xb07ZySbKhOwEsvp9h1XL-m8xyEWvO7etAqtVRTlrqICX5a4dGJXX0fl07YODKwkFiIDfVXAPaU_zjohjB_RMkVjwV_yHOmqKBWQfmaSnqftoQtmwycRTBync4oqxkUqjJpp250TcOsAj_ZJhf8BDPS5ba0SaVSicbswD16HzzvDhZWBeIbdcXfZb3eCKsPqmq-QES9YRtoa-uebvaMfpMSADTw06rJOzQjlb5VIjyfbf1Wptf0y-lwaD4wtpfl-U4mA"
          alt="Traditional Yemeni Mandi"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between flex-1 px-6 py-10 text-center">

        {/* Top label */}
        <span className="font-headline text-white/80 text-xs tracking-[0.2em] uppercase font-medium mt-2">
          In the name of Allah
        </span>

        {/* Center */}
        <div className="flex flex-col items-center">
          <h1 className="font-headline font-black text-white text-5xl tracking-tighter mb-3">
            Feast At Night
          </h1>
          <p className="font-headline font-semibold text-[#ff784c] text-base mb-2">
            Delicious Chicken Mandi &amp; Fresh Juices
          </p>
          <p className="font-body text-white/60 text-sm mb-8 max-w-xs leading-relaxed">
            Fast &amp; tasty food at your doorstep. Experience the warmth of traditional recipes delivered fresh.
          </p>
          <button
            onClick={() => navigate('/home')}
            className="relative inline-flex items-center justify-center px-10 py-4 font-headline font-bold text-[#ffefeb] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="absolute inset-0 bg-gradient-to-tr from-[#a83100] to-[#ff784c]" />
            <span className="relative flex items-center gap-2 text-base">
              Order Now
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </span>
          </button>
        </div>

        {/* Bottom icons */}
        <div className="flex flex-col items-center gap-3 mb-2">
          <div className="w-px h-8 bg-gradient-to-b from-[#ff784c] to-transparent opacity-50" />
          <div className="flex gap-3">
            {['restaurant_menu', 'local_bar', 'delivery_dining'].map((icon) => (
              <div key={icon} className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <span className="material-symbols-outlined text-white text-[20px]">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chef Card */}
      <div className="absolute bottom-28 left-4 z-20">
        <div className="bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-white/10 max-w-[170px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff784c] animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold">Chef's Choice</span>
          </div>
          <p className="text-white text-xs font-headline font-semibold">Special Mandi Platter</p>
          <p className="text-white/40 text-[10px] mt-0.5">Slow-cooked for 8 hours.</p>
        </div>
      </div>

      {/* Floating Rating Card */}
      <div className="absolute top-16 right-4 z-20">
        <div className="bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-white/10 flex items-center gap-3">
          <div className="flex -space-x-2">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAYO9ZH2JYES_XOgsY4YXn8MxJyTCZYzQlhDcAWycvVyhdzpytxhsLjfrjOOVSYgs883HWxSyZzIVp1EQG91dFco-nd132z07tlfbwjSgR1NaruVQpCK51GVLzCi68j8-SaHh2eEinaHtFhu0FlXGoj8ZfeHVYFkrXx57kwP4vKm5kKBYly0CF-_Y3zUGCP_rvoIvfL2TrK2mMZldFpUUn3Q-gwTtJ5PeVsDumbqTCurWFf_U-bbTYL--aujCpiasMqUg3GEnLyaUc',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAqhaDHpPWUasHt5gTXbZo6hElMii46NS3_UZdqcFAxVrbx7rkQvP0AcnORodMh5F9TxK8425ee3GEQp7n6tUrvwrBStMeah3kmBrrDEM61UUY8Sidz_l5bpts2Vu_bhVhpiEsNxNB9-kNw63lhadvDLBqrdA8TEfcQAKGPcQSTXBpLKkJywrZd_qi_KhlPmJwOxo_q6l3RnlNpVaFR8s92SVN9vPFOwSBDYMnlwJePH1pWoUoEhKFgu0y6dbNOCduw8PLQu1wEPwY',
            ].map((src, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white/30 overflow-hidden">
                <img src={src} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-white text-[10px] font-bold">1.2k+ Orders</p>
            <div className="flex text-[#ff784c]" style={{ fontSize: 10 }}>
              {'★★★★½'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
