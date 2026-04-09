import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const categories = [
  { label: 'Chicken Mandi', icon: 'restaurant', active: true },
  { label: 'Juices', icon: 'local_drink', active: false },
  { label: 'Biryani', icon: 'rice_bowl', active: false },
  { label: 'Dosa', icon: 'flatware', active: false },
]

const foodItems = [
  { label: 'Parotta', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx8FdNj4dX0okI_gPQAAmlnjkulR9nOf5Mqrgo9lzPrDZMJ25ifiuTk6wK5SMgaht45pfc2pwtmvBW9IBz22Vn2Iw7_KRou1eetjIPjaFMV-3HNc3RDdsyp57_hx0u6m-RvefgHHq6Go2_y7pkzyndnoi75mUVSSzlhtZNdbSDdEhUJI_2sl7gsn6Qyu8n484OxxcLbwMCYZv1GfzD2dwyJI726v-kYc7rV7BOI5gbVpf2FcmiLNvPPgAxWyL0Aom39Fmw7ucUX5Y' },
  { label: 'Dosa', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk--qaDInP4y0Iqv8rOx8tSk2ppUDHQDrfPdvK9i104hag-s1f_ScprcNwPyDpQ_FJ_Iik7aRXs-X0SZutSvoS3tiI0dm1QaBsfitk78bIQhffzv5G8k2TJGPbhyU6hqby-bTNnnmUmdODc4j4AxcUgR6ebEPZxfZi5scTRodmLqJZNK9q7kqlZnZkMbxMXySUUuyBMvLbiX_8M-qk1MMOBuqHc_lNlhSwYMEz_--etU_A9oxdVPN7SgkjNJKz6G3wMREc6eXb4w4' },
  { label: 'South Indian', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7mp66XWfuiIbil4m-a-r5BBO6tqjoRdazB5DW-arGXQbmk97e--JqOrsluCiJP6rDHEMbK71xglPQTg2MUYLrvQhB-ghD7j4PlFrYPGfqURhPruiNwQo_GNkSV6Gu6LDo0vzi39o9fZbH5fCTGUi9bucwOyjO7tV8NpnHFeTN3GkqY-YLMbtf0NNPBU_svlmIr_3C-CjYHPkplxehwLuVN2a0yRPyNyPJ6QD0Sp0bqvWw9lSYS9pcU8wZOc3rkPV2HIYT7bWZIJI' },
  { label: 'Biryani', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv_61kKf4sSB2_h414yOye8GDqaJZWZOKLGUg3U3CWcU00JOGhw1tVjefdIUHhk96UjVscotstLRm1xkRxibcCJ_BhyxQo_mvTmSPY0NIqYTfAS0GD2ZktyPOrDzCYw61Mg4aEoWsEDsCTVotmamfrEt1d91AG03EHHTcS3MZpxiyWLZyav1eiJ0otoct8_d4YKyAXG0RxCYZZQw-HurGdoJXH6r-cKk4tqr3z8fmy58mJcT9jdH2YWf4Np_Brc1qK9rDbIztpLpU' },
  { label: 'Juices', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxS5dOteoiNRLIGoT8MJcGXtOQmjPZSKey15FAKdC2Ne5gA6Xj46YBY-7uP9gK5UL8DsrRpUTgA5WWY7DNx2v5fcp0bp3Q-J_CLiTU2-3HQJg18JBEMn8y52VBSS3JYmV1J5a8rpKQR38cD8LMEov8U8HKgCJfTytivPhNhLmQMGGX1CdtSYl_bDHjB6uiRI73v-NRi6DMZCS6m91Q_9EFPNRKD1yP5aonlqjYgt_lbiwLeLngzZRiLx8-5G2c8OuIcVlJlNqdo5o' },
  { label: 'North Indian', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3sxyK2a-PGGQXnw_USM8f4mzSgvOhMdLDOIdVfs2ZQLlrjG704cbKLxV62iaYNvITPXUrrVSB77mC2bD-MftV2s_H8-gyUPiiKM8xuIuMD1q_ihIVath9tG0xjg1KP4aYWShQKw8MBHj9MbRev6knLWSMkva0XcylPiCRU9AB1BPXB6VnSelHovKEn1p4goV2i_WwqzDOrev-nAHfPWl11omffvbOY4an8c9bdjkfUcKGGkf66RkVlmq7oezoI_ZhLcjOFYa33Fc' },
]

const featured = [
  {
    name: 'The Mandi House', tag: 'TOP RATED', tagColor: 'bg-primary',
    rating: '4.3', time: '30–40 mins', desc: 'Authentic Arabian, Middle Eastern, Hyderabadi',
    offer: 'Free delivery on orders above ₹199', offerIcon: 'payments',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEDYB4sZ6eYFfkHxhXc5CxUP0KRmlxm46hJV7s30m30FzlFbRGrsjKGH84Q5zcq3rUHxpeDndgqyPQeRp2qMg812-_hU8XLM3YygOhFTRK4z27sBa_K44ljQIed-vIi31-8RmzsQVbt5vnHQHXWdh5ULtiM5UAZyUtLqfb9EFkxKOUmhYWTD15bVn0bJpaAQmqlBmMEdEeNmE-uSOA5S_bVipiA9MjInjy6tCG04QV46r25W8hEgU8cJRQK1moS3njPT6l9nWlWUU',
  },
  {
    name: 'Juice Junction', tag: 'TRENDING', tagColor: 'bg-tertiary',
    rating: '4.5', time: '20–25 mins', desc: 'Fresh Juices, Shakes, Healthy Beverages',
    offer: 'Buy 1 Get 1 on All Seasonal Juices', offerIcon: 'local_offer',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_MXRMbe4dPk71VqMvKS1spNDBJy7RAldgMcJUkfL1iYHKL_xknghdRP1jeDvMroMkXnsno5aa8x3rzXUjJiCzUFBa6_CYrb4hWWhxDkSmMSgtRmQSpJKxTrL2-sluyCfXPNzWRvPgpZIuihRe3cIoNieVrWRhWgsOy2aVkGUMYUBMZvS_MRLSf-NSevVm-w5AqukAJq4YXcxonvySOyr981Lm6xJGNrW5Q5T792cMh9kZkJL44CvdY1c3A6jIabUzwujdXR6JYfg',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <TopBar />
      <div className="flex-1 overflow-y-auto">
        <main className="px-4 pt-4 pb-4 space-y-6">

          {/* Search */}
          <div className="flex items-center bg-white rounded-full px-5 py-3.5 shadow-sm focus-within:ring-2 ring-primary/20 transition-all">
            <span className="material-symbols-outlined text-outline mr-3 text-[20px]">search</span>
            <input
              className="bg-transparent border-none outline-none w-full text-on-surface placeholder:text-outline-variant font-medium text-sm"
              placeholder="Search for food or items"
              type="text"
            />
            <span className="material-symbols-outlined text-primary cursor-pointer text-[20px]">mic</span>
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {categories.map(({ label, icon, active }) => (
              <button
                key={label}
                onClick={() => navigate('/menu')}
                className={`flex-none px-4 py-2.5 rounded-full flex items-center gap-1.5 font-semibold text-sm shadow-sm cursor-pointer transition-all ${
                  active
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span className={`material-symbols-outlined text-[18px] ${active ? 'icon-filled' : ''}`}>{icon}</span>
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>

          {/* Offer Banner */}
          <div className="relative overflow-hidden rounded-xl h-40 flex items-center bg-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7pLDlPXS3CPGSwYbzLkOsiAR9L2n8Rab53YXaPBGMfUF5E_pL8lYi0PhVWc1rQk9wRMI5hyxXqnHCYttNSxo85eQ0tT01yPSL8gsqituLpAxLOjhXMCA_3JfAcWZRlIAqqyqa_i6bBJzGQ-oxmAuZ0DrqWCCmdw1rQhqiBqxvDyBc7quA3oA9LnnhmvUaF3kSL1HqLgNEDz22P-74VtXIIxxifiNAmyb5rc5A06QDi7pVMZ7wGPK6HRpH0Bg0womFk8nr0cMSYRg"
              alt="Banner"
            />
            <div className="relative z-20 px-6 space-y-1">
              <div className="bg-white text-primary px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-widest inline-block mb-1">
                LIMITED OFFER
              </div>
              <h2 className="text-white font-headline font-extrabold text-2xl leading-tight">
                60% OFF<br />
                <span className="text-primary-container text-xl">Night Feast Special</span>
              </h2>
              <p className="text-on-primary text-xs font-medium opacity-90">Valid on orders above ₹499</p>
            </div>
          </div>

          {/* Food Items Scroll */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-headline font-bold text-lg text-on-surface">Best Food Options</h3>
              <button onClick={() => navigate('/menu')} className="text-primary font-bold text-xs flex items-center gap-1">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4">
              {foodItems.map(({ label, src }) => (
                <button
                  key={label}
                  onClick={() => navigate('/menu')}
                  className="flex-none w-20 text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-2 ring-2 ring-transparent group-hover:ring-primary-container transition-all shadow-md">
                    <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs font-bold text-on-secondary-fixed-variant">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Flavors */}
          <div className="space-y-4 pb-4">
            <h3 className="font-headline font-bold text-lg text-on-surface">Featured Flavors</h3>
            {featured.map(({ name, tag, tagColor, rating, time, desc, offer, offerIcon, src }) => (
              <div
                key={name}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
                onClick={() => navigate('/menu')}
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span className="material-symbols-outlined text-orange-500 text-[14px] icon-filled">star</span>
                    <span className="text-xs font-black text-on-surface">{rating}</span>
                  </div>
                  <img src={src} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className={`${tagColor} px-2 py-0.5 rounded text-[9px] font-black text-white uppercase tracking-widest`}>
                      {tag}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-headline font-extrabold text-lg group-hover:text-primary transition-colors">{name}</h4>
                    <span className="text-xs font-medium text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">schedule</span> {time}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs font-medium mb-3">{desc}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-surface-container-high">
                    <span className="material-symbols-outlined text-primary text-[16px]">{offerIcon}</span>
                    <span className="text-xs font-bold text-on-surface">{offer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
