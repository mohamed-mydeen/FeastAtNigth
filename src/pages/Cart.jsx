import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const initialItems = [
  {
    id: 1,
    name: 'Juicy Chicken Mandi',
    desc: 'Slow-cooked smoked rice served with tender roasted chicken and spicy red chutney.',
    price: 450,
    qty: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8NLHthIRpqYDSjwEjl58Pzt2PlfEGi-pH_x0L15aGsIMamrlda6J6UjCdzAZLNn2SRZbEl6EYRmrk3Bi8uMF1Tt5pGo9Xd0vFhn5jl_4nWxq5X4hBkDuUNuZ49wIILvSV-CHHvQUh7ukg5xUnX4LAKTPyEkFfIgICwSsUVsjyFup3Cf-50KfmpcuiMzrjXJ1IArQlmXYTvS780PMk3SHD4KnW1qxJzxUQhHSUFyXSTW-sn9kRGjfxeGvOzXuZKSaR0VxEzyxERX4',
  },
  {
    id: 2,
    name: 'Virgin Mojito',
    desc: 'Refreshing garden mint and zesty lime muddled with chilled sparkling water.',
    price: 180,
    qty: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05OKD2U-w91N52ltl2rCbPYdK6V4banFr2OE4r2mWm8b5zaOjUneXZ888h-4ZDiGDUnZU2Ih3V8Gv8Os7nKS8UxN0CVDU5y0E8A4gyzoPjnbYI4ExAQRkZa1PkZdIRjmNG6mq1WNPlDdcixT3whRbwNb37hanYNxPzFbk6DjKjsYF8Alacz2dn92bScx_JsV_bOZVj4i13wEUq7QxSQHx8iCHcehdW2_8EwqVKFfFVOuvC_y1Pnbe_wl8PNa0a8iu3h8XZt274DU',
  },
]

const DELIVERY_FEE = 45
const TAX_RATE = 0.05

export default function Cart() {
  const navigate = useNavigate()
  const [items, setItems] = useState(initialItems)

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const taxes = subtotal * TAX_RATE
  const total = subtotal + DELIVERY_FEE + taxes

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface font-body">
      {/* Sticky TopBar */}
      <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[22px] text-orange-800 cursor-pointer active:scale-95 transition-transform">menu</span>
            <span className="font-headline font-black text-orange-900 tracking-tighter text-lg">Feast At Night</span>
          </div>
          <span className="text-orange-800 font-headline font-bold tracking-tight text-xs opacity-80">In the name of Allah</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
      <main className="px-4 pt-4 pb-4 max-w-7xl mx-auto space-y-8">

        {/* Cart + Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Items Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-end justify-between px-2">
              <div>
                <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-on-surface">
                  Your Feast
                </h1>
                <p className="text-secondary font-medium">Curating your midnight sensory experience.</p>
              </div>
              <span className="text-primary font-black text-xl bg-primary-container/10 px-4 py-1 rounded-full">
                {items.length} {items.length === 1 ? 'Item' : 'Items'}
              </span>
            </div>

            <div className="space-y-4">
              {items.length === 0 && (
                <div className="text-center py-20 text-on-surface-variant font-medium">
                  Your feast is empty.{' '}
                  <button onClick={() => navigate('/menu')} className="text-primary font-bold hover:underline">
                    Browse Menu
                  </button>
                </div>
              )}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-xl overflow-hidden p-4 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-headline font-bold text-on-surface">{item.name}</h3>
                        <p className="text-secondary text-sm mt-1 max-w-sm">{item.desc}</p>
                      </div>
                      <p className="text-xl font-black text-primary">₹{(item.price * item.qty).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6 md:mt-0">
                      <div className="flex items-center bg-surface-container rounded-full p-1">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center rounded-full text-secondary hover:bg-white active:scale-90 transition-all"
                        >
                          <span className="material-symbols-outlined">remove</span>
                        </button>
                        <span className="px-6 font-bold text-lg">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-md active:scale-90 transition-all"
                        >
                          <span className="material-symbols-outlined">add</span>
                        </button>
                      </div>
                      <button
                        onClick={() => updateQty(item.id, -item.qty)}
                        className="text-error-dim font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete_outline</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-xl p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-headline font-black text-on-surface border-b border-surface-container pb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span className="font-semibold text-on-surface">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-on-surface">₹{DELIVERY_FEE.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Taxes (5%)</span>
                  <span className="font-semibold text-on-surface">₹{taxes.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-dashed border-outline-variant flex justify-between items-end">
                  <div>
                    <p className="text-sm text-secondary uppercase tracking-widest font-bold">Total Amount</p>
                    <p className="text-3xl font-black text-primary">₹{total.toFixed(2)}</p>
                  </div>
                  <div className="bg-primary-container/10 px-3 py-1 rounded text-primary-dim text-xs font-bold">
                    GST Incl.
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full font-headline font-bold text-lg shadow-[0_8px_24px_rgba(168,49,0,0.2)] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Proceed to Checkout
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-center text-xs text-secondary px-4">
                By proceeding, you agree to our terms of sensory service and midnight delivery policies.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Booking */}
        <section id="contact" className="mt-20">
          <div className="bg-surface-container-low rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="text-primary font-black tracking-[0.3em] uppercase text-sm mb-4">Reservations</span>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-6">Book Your Feast</h2>
              <p className="text-secondary text-lg mb-12 leading-relaxed">
                Planning a grand evening? Secure your table or pre-order your midnight feast through our direct concierge lines.
              </p>
              <div className="space-y-8">
                {[
                  { label: 'Primary Line', icon: 'call', number: '+91 93842 34560', tel: 'tel:+919384234560' },
                  { label: 'Alternate Line', icon: 'support_agent', number: '+91 70943 31888', tel: 'tel:+917094331888' },
                ].map(({ label, icon, number, tel }) => (
                  <div
                    key={label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-lg border border-transparent hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined icon-filled">{icon}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-secondary uppercase">{label}</p>
                        <p className="text-xl font-bold text-on-surface">{number}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={tel}
                        className="flex-1 sm:flex-none px-4 py-2 bg-primary text-on-primary rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">call</span> Call
                      </a>
                      <a
                        href="#"
                        className="flex-1 sm:flex-none px-4 py-2 bg-[#25D366] text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px] overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcsxZUU4nN3eScsbCmDcHRpoZGUoJBRV0CDCHjnOWldQRo5nyMpxZPVnEZil25U4Dtuhox4q-32HFleSb5OF4rHGb23yS1XUz9ykWBqCti1aDiGaFR8Cuhvgj7sDtBgqFwB8_Gn0XTvXk-t3TkV5PBwdvECptV6mvdJWXvtOZj25aFRDf-hMJwi3b_2nMi0aKeMLbvR2ErXZSaV4AVNG1VJYclu6cZw_v635KEJV58uLjrPZ5htZE3YbxGph_nLndf_L3Blkk4tZo"
                alt="Restaurant Interior"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent hidden md:block" />
            </div>
          </div>
        </section>
      </main>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="font-headline font-black text-orange-900 text-3xl tracking-tighter mb-2">Feast At Night</h2>
              <p className="text-secondary max-w-xs">
                Elevating the midnight dining experience with authentic flavors and editorial precision.
              </p>
            </div>
            <div className="flex gap-6">
              {['social_leaderboard', 'camera', 'alternate_email'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-surface-container pt-8 flex flex-col md:flex-row justify-between text-xs font-bold text-secondary tracking-widest uppercase">
            <p>© 2024 FEAST AT NIGHT. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <BottomNav />
    </div>
  )
}
