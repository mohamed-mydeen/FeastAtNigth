import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const categories = ['Chicken Mandi', 'Juices', 'Sides', 'Desserts']

const mandiItems = [
  {
    name: 'Juicy Chicken Mandi',
    desc: 'Slow-cooked tender chicken served over a bed of smoky, long-grain basmati rice.',
    price: '₹199',
    badge: 'Bestseller',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrntNqGechpYpSEUuhayBKhUwSqbs2Wa-G44zdVUECHCgoQShJ9lOLQrsKXDlOMb39z60BolaYKLoPKSj6aSgdjFdP5VKrcyc3XIVxNbA9gzqTqTC38ZWCmbAbGHiE2bH1wMYDXs3VESKWD66J-3unGoY1UCk9kF-pTOeR7-w1cr7xfAgB7-_NbWLRcQV27H2zZUaqZye9cPURcPKwWr8NpeMlVWhfKumSXKgSTxXj55vNIuh43g10MDcL6d-q4f4ZA_2bMpNep3Y',
  },
  {
    name: 'Alfaham Chicken Mandi',
    desc: 'Charcoal-grilled chicken marinated in Arabian spices for a rich, smoky flavor.',
    price: '₹229',
    badge: null,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzT5E9fZF3rqX-JnQIRJvalMIQJ44GIK7Wbt6eDse5GYHGOzyzSoxDV3KtsnLQujjKXMUgdPb1VVaJh0p5c9-_QSRNrH33IcyGhkoyiVTZ5rK8i0Xsez179ZBXyMuFXPkL20tIFkimi2ysciyPARZimCOIa1HA5ZBlZmOQFtR5jtDkmZrUFJweoiRczKDFPzBtNJxgTj9caGF9UC1P8LsYj4bHL6QzmaCjtSSCkJrbj00yHVljt6hc8rdIZn6dpNNr5T3aRR0mf5A',
  },
  {
    name: 'Hariyali Chicken Mandi',
    desc: 'Mint and coriander infused grilled chicken, a refreshing twist on the classic mandi.',
    price: '₹229',
    badge: null,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEXd4iIOsacdsFDKr3tHHGyNsabdcu_8GVY5ccfDIMSEzIVJC2C3u3TrbE1q2f-bP9DElKKHnekgsC0Rmok30a7s62euTkpJ0dnr_KItlOU9M-np8UUTrjjRwXe8_P08E9XNmIP9QgAoOOUl2TItvMpu1izcIKehsIl52LMn3Mu8iBz8rWwls4-1ckt2yaOuInhbYb-acWsCDqKpI3xmAs75OfBP2m74h_vwE5JKge3Paz6bmF2jluEpDiVl4tEV0cNg1pBIfkFL8',
  },
  {
    name: 'Afgani Chicken Mandi',
    desc: 'Mild and creamy Afgani marinade with cashew nut paste and subtle aromatic spices.',
    price: '₹239',
    badge: null,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmmDm03BKoEp0mCJyAGqyeqLpTQe9KqBtuLpGMJNdT7bsdzzcLfoZOnrf3AKNvHw7uwMrE2-QtQW7c0ZMgfOjYqb5pNPDGJ6UHPxtM3FNaofAUJq_CDRN4oRV0nwzW4HhYI8_jjdNLD6hopRW8eZAcl9swO53yzy7KjPu0eife2qSpKkb4BDq0W5sBHXd_fqdFtahyoQUF8-N1UDC0SxE6q05Qwo4Ms6hoQQ0H9wutsRWRbwVyqbbQehJKYqfz1p9cO-qVq4NHEM0',
  },
  {
    name: 'Tandoori Chicken Mandi',
    desc: 'Fiery red tandoori spices meet the traditional mandi rice for a bold flavor explosion.',
    price: '₹229',
    badge: null,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Y80ZdnMav26vtElBX7chUtk8dLhDfC0_UT38CG8A5GeXeyaQN6oCyrfiH5XcPe6Xz1xrnNUpPSLK5Ufc0RFj8Nf3LRVvg_BmUKh9X4w1qaj9Pr8kP4fteGj_nyIMYdmtbTuFmjCv0JPkW-VKBVa_Oq2BkEkTXOANmpvn2rIysV6zq3h4lHWQh3Cjo4Ah1ZfFeFJAOoab6TYuLpUyHp79c0jIt6tcLSbE7ChyMLdXV_1TN4GSgQ4rzuy37LtcBx0psJebZY7fgJY',
  },
]

const juiceItems = [
  {
    name: 'Mojito',
    desc: 'Classic mint and lime fusion.',
    price: '₹79',
    tall: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4T-3cOL2qUbSl521pr6ga7f5FiIcagnM6NjSMC8IK-d1ChBH0BDA-pJuthuHHBj5ASzq01cXpJZI5VCUmqmDavEXm-cSTqw2-ervCrV9xbvRRzJiGTFnctyciw_w3Kf2s_TGUjb1yzIlFuaGGZ-TRzjljU39kb8K0WZ6-tp6lmsvVbvzm1sJIrimNLredqCqsuqO0VRjM91XAK5HWnU1ZQbv41a2KOmyniTe1j-8L7-y1WWZjj0DfBoxwwb5M4ySClomszFaTvwM',
  },
  {
    name: 'Mint Lemon',
    desc: null,
    price: '₹69',
    tall: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvUkEp1SBWqtojh9tRtxlXzfrqhj-q4fKmuM_gjCyMTcqIxHe7QmGDqMgxfIdJBmXbEcsTX5p6yQKeGvN8sLPqR6R2zxnXkZvVkZqfIG7GQu_ReiF6vZZndohIqyBK_DihtqCPL7pnkhD2Muy185ycZ3rYSD1oyyCSBHOS8cNqhxxbO8XwJNSmfTkmFgDwaFg0nbbME98vFuYadiQIhQ39EXWqTRbFW54mLBba3FRk4o8HKMqa_W9aJGF2INs53TRXK5lSN6T0e8M',
  },
  {
    name: 'Coke',
    desc: null,
    price: '₹59',
    tall: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI8XoUWgEBHh6ZKY53jS32_Y0wgNDget7Q7u_DDINuVbQFKhFCYZc3cypqej4zKhw8UjO25oRpFuw61Jz3bGMHTltnXepmE01rZuG_eatspithEQ9YB7An5YhrN9qULD-_yQt2NqYTIaGfE0wA0wEPydIdEbRm7vH6RMVBcXiKD84H-cFezv7uyidnrdVkKExtbjMu66rgKmw8R308TLuhKBP_TNyZi6Mu9MIaYTo_yaVlns-eryw6Bvyqw9ed8gTrcJkTvYQ3EJc',
  },
]

function MenuItemCard({ item }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.src}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {item.badge && (
          <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {item.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="font-headline font-bold text-lg mb-1">{item.name}</h4>
        <p className="text-on-surface-variant text-xs mb-4 line-clamp-2">{item.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-headline font-black text-xl text-primary">{item.price}</span>
          <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 active:scale-90 transition-all shadow-lg">
            <span className="material-symbols-outlined text-xl">add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Chicken Mandi')
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      <TopBar />

      <div className="flex-1 overflow-y-auto">
      <main className="px-4 pt-4 max-w-5xl mx-auto">
        {/* Hero */}
        <section className="mb-12 relative overflow-hidden rounded-xl h-64 flex flex-col justify-end p-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLI-bMVZavdnTVRulxLndrkdeNC5mKYf9JTGpUqCaC4_lPGW2UmqmQww5qKs77e5RfSd3liBWKAiwG7ANwU_xYEemKCgxNn0Y3LcRHD1btfS1nnA88i30xTs3iY6AfrgCv8Q65Y4SBlV87lO-sLS3L8djS8naZ3QxIYnyoJUZNtnWclVZa8VN7tkCirNczb9fj6RvihYIgVFogsN8y_NSpITTxjW53CSuPDSlRhb32JoxAiy5V3WXAfmtPTj2i6OPOgJtH26TSxQ"
            alt="Delicious Feast"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-white font-headline font-extrabold text-4xl tracking-tighter mb-2">
              The Midnight Curations
            </h2>
            <p className="text-white/80 font-body text-sm max-w-md italic">
              Authentic Mandi and Refreshing Blends for the nocturnal connoisseur.
            </p>
          </div>
        </section>

        {/* Category Pills */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-headline font-bold text-sm whitespace-nowrap active:scale-95 transition-transform ${
                activeCategory === cat
                  ? 'bg-primary-container text-on-primary-container shadow-md'
                  : 'bg-white text-on-surface-variant shadow-sm hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Chicken Mandi Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline font-black text-2xl text-on-surface tracking-tight">Chicken Mandi</h3>
            <div className="h-px flex-grow mx-6 bg-surface-container-highest" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mandiItems.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Juices — Bento Layout */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline font-black text-2xl text-on-surface tracking-tight">Juices</h3>
            <div className="h-px flex-grow mx-6 bg-surface-container-highest" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">
            {/* Mojito — tall */}
            <div className="md:col-span-2 md:row-span-2 group bg-white rounded-lg p-1 relative overflow-hidden shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary-container/20">
              <img
                src={juiceItems[0].src}
                alt="Mojito"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 w-full p-8 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-headline font-bold text-2xl mb-1">Mojito</h4>
                  <p className="text-white/70 text-sm">Classic mint and lime fusion.</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-white font-headline font-black text-2xl">₹79</span>
                  <button className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center active:scale-90 transition-all shadow-xl">
                    <span className="material-symbols-outlined font-bold">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mint Lemon */}
            <div className="md:col-span-2 group bg-white rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
              <div className="relative z-10 flex flex-col justify-center h-full">
                <h4 className="font-headline font-bold text-xl mb-1">Mint Lemon</h4>
                <span className="font-headline font-black text-2xl text-primary mb-4">₹69</span>
                <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-all shadow-md">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <img
                src={juiceItems[1].src}
                alt="Mint Lemon"
                className="w-32 h-32 object-cover rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-500"
              />
            </div>

            {/* Coke */}
            <div className="md:col-span-2 group bg-surface-container-low rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
              <div className="relative z-10 flex flex-col justify-center h-full">
                <h4 className="font-headline font-bold text-xl mb-1">Coke</h4>
                <span className="font-headline font-black text-2xl text-primary mb-4">₹59</span>
                <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-all shadow-md">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <img
                src={juiceItems[2].src}
                alt="Coke"
                className="w-32 h-32 object-cover rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      </main>
      </div>

      <BottomNav />
    </div>
  )
}
