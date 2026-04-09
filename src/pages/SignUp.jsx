import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()

  return (
    <div className="bg-white text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container relative">

      {/* Background blobs */}
      <div className="fixed top-0 right-0 -z-10 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full" />
      <div className="fixed bottom-0 left-0 -z-10 w-96 h-96 bg-tertiary-container/10 blur-[120px] rounded-full" />

      {/* Header */}
      <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/login')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95 duration-200"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <span className="text-2xl font-black tracking-tighter text-zinc-900">FEAST AT NIGHT</span>
        <div className="w-10" />
      </header>

      <main className="max-w-md mx-auto px-6 pt-12 pb-24">

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Sign Up</h1>
          <p className="text-secondary font-body leading-relaxed">
            Join Feast At Night and curate your next midnight culinary journey.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/home') }}>
          {[
            { id: 'name', label: 'Full Name', type: 'text', placeholder: 'E.g. Julian Vane' },
            { id: 'email', label: 'Email Address', type: 'email', placeholder: 'julian@example.com' },
            { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="space-y-2">
              <label className="block text-[10px] font-semibold tracking-tight text-on-surface-variant ml-1 uppercase" htmlFor={id}>
                {label}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline-variant text-on-surface shadow-sm"
              />
            </div>
          ))}

          <div className="flex items-start gap-3 pt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-5 h-5 rounded-md border-outline-variant text-primary focus:ring-primary-container cursor-pointer"
              />
            </div>
            <label className="text-sm text-secondary leading-tight" htmlFor="terms">
              I agree to the{' '}
              <a className="text-primary font-semibold hover:underline" href="#">terms and conditions</a>{' '}
              and the privacy policy of Feast At Night.
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary py-5 rounded-full text-on-primary font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-12 flex items-center">
          <div className="flex-grow border-t border-surface-container" />
          <span className="flex-shrink mx-4 text-xs font-bold text-outline-variant tracking-widest uppercase">Or continue with</span>
          <div className="flex-grow border-t border-surface-container" />
        </div>

        {/* Social Auth */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 bg-surface-container-low border-none rounded-xl py-4 hover:bg-surface-container-high transition-colors active:scale-95 shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="font-semibold text-sm">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 bg-surface-container-low border-none rounded-xl py-4 hover:bg-surface-container-high transition-colors active:scale-95 shadow-sm">
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-semibold text-sm">Facebook</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-secondary">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-primary font-bold ml-1 hover:underline decoration-2 underline-offset-4"
            >
              Log in
            </button>
          </p>
        </div>
      </main>

      {/* Thematic Imagery (desktop only) */}
      <section className="max-w-screen-xl mx-auto px-6 pb-24 hidden md:grid grid-cols-3 gap-6">
        {[
          { label: 'Sensory Experience', title: 'Midnight Flavors', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIqV3RWtrM6gswHLaNKVhNbNnwCv02SSGOXKnpK5qyc7aFInwAKGd_S5M2-nYTa1qPi0UD7OuRIpHnLGCRdz0oRSfuucRZDFV7gAJdYQl_81qPHo0Mnen26Et7pGo54b00lRzhy77G6_Sh3PQTwmOE5KA53qTzg3LZWASmqn7zvSc4I7oDybYILpMyZ0x4tkJsITVFAXRLf2QBcz-scq77iGSpan5zzuOdgtaq2_BNslron00488sN2_OI2S6NAcDRnchZlvtQUz8' },
          { label: 'Exclusivity', title: 'Curated Atmosphere', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2SY9Zj9zAinBhoYkwD-b-fCCNXUFCDekopZ2k0YmW_x6kkIYzCRQfs4qvm6kwjNpGRIOTh1JG0mwjqi8r2Pp7A-pur9PPxV9ReKImUo9HpRp0RqDaozAhtBLMdxJl6Ye8vILEK8Nl4pYNZqNy1JjshcKrhfOTPingOH1gmHufL-lLE345drX6hoRMfoIEv1Qtd1Z1C6NiZrdvXIgTW1ZlVSuJHIB1qDGYTiftxh2-jueKsH7VRhPoFWIjgEMXczEXzZc0iYMlG0', translate: true },
          { label: 'Mixology', title: 'Liquid Artistry', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpEfXuplnIroOyxFkyUdYL0Hw2o-JYG9_u7Q5Mjdu-W9L8TR7J2gCD1WOeCnblekuwamatm8y0dPcnHMcx3KRetNXTImfrurcHfZnX5RZNetUkXtpHnCOYvELdOUoYnITdmN30AKR06XGq6p6A0I9dmDtKJ0AKTlSiafNaF11o_MfjuVQjx7u6zHucQQNmW7wFe83viSOPX_HvJkmGxzK7z_OkIGheTDnAKu-95xR4hMZ4vJYyfk0xPmIs4BV1SDLBghLXaUjIQsY' },
        ].map(({ label, title, src, translate }) => (
          <div key={label} className={`relative h-64 rounded-xl overflow-hidden shadow-2xl ${translate ? 'md:translate-y-8' : ''}`}>
            <img src={src} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">{label}</span>
              <p className="font-headline font-bold">{title}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
