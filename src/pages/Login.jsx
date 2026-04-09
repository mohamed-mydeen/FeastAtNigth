import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden bg-background font-body text-on-background antialiased">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGlQFmkqPMwEF5CUr1vnUXRKSrbTSo4gbReOhsiBB9NtFWgD7KkUsL4YoFjqCekzUl1NG7cPryK-8rQ0hYM373RZlpsz5ntO2VrPCzuPtIJeaNk4RYPUekRILkqykJ3OJudT8Ig6afgLylLp_lD6VDb0P0kzG9K7gekxqR-9D0x3jjMu3oSj7peZXggoYHDeoemogf-w1q4PHOFNpyBPpqHD8Tfy8F8qqHBiAccFIKUyGWj0W31BcIptZIkNsTLJQmPVoEtGLub0"
          alt="Feast Background"
        />
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)' }}
        />
      </div>

      {/* Brand */}
      <header className="relative z-10 mb-12 text-center">
        <h1 className="font-headline font-black text-5xl md:text-6xl tracking-tighter text-white drop-shadow-2xl">
          FEAST AT NIGHT
        </h1>
      </header>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-xl p-8 md:p-10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)] border border-white/20">
        <div className="mb-8">
          <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">Welcome Back</h2>
          <p className="text-on-surface-variant text-sm">Enter your phone number to continue</p>
        </div>

        {/* Phone Input */}
        <div className="space-y-4">
          <div className="flex gap-3 h-14 items-center px-4 bg-surface-container-low rounded-lg border border-outline-variant/30 focus-within:border-primary-fixed transition-colors">
            <div className="flex items-center gap-2 pr-3 border-r border-outline-variant/30">
              <img
                alt="India Flag"
                className="w-5 h-4 object-cover rounded-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDznj3MJgetU4TSj5C0w7iq4du-8N5x94AcSj-6R-wafoEAN2ZZQuAge-Tu0J8wymBFAx6foK08e1Ab-75ljXzTqhbBFddYl7_7l7vBYJBCUZx4zFuSoVKNQuAT32prEBnc1zFbu660voRBDqamxa-5sKcQ9VO5WlF_1MDkBoz84Dw6tO6L2zs9n6lk4eAxYSkxQF4YZsds68TjruUr2WvmwJFCyiMmUa4EFU0mwqtx8h46w_tbSwh9il9Zpz-3z9TONI-lQZFeCO8"
              />
              <span className="font-semibold text-on-surface">+91</span>
            </div>
            <input
              className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-on-surface placeholder:text-outline font-medium tracking-wide"
              placeholder="Phone number"
              type="tel"
            />
          </div>

          <button
            onClick={() => navigate('/home')}
            className="w-full h-14 bg-primary text-on-primary font-bold rounded-lg text-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center shadow-lg shadow-primary/20"
          >
            Continue
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8 gap-4">
          <div className="h-px flex-1 bg-outline-variant/30" />
          <span className="text-xs font-bold text-outline uppercase tracking-widest">OR</span>
          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-1 gap-4">
          <button className="flex items-center justify-center gap-3 h-14 w-full bg-white border border-outline-variant/40 rounded-lg font-semibold text-on-surface hover:bg-surface-container-low transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <button className="flex items-center justify-center gap-3 h-14 w-full bg-[#1877F2] rounded-lg font-semibold text-white hover:opacity-90 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Continue with Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center space-y-4">
          <p className="text-on-surface-variant font-medium">
            New to Feast At Night?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-primary font-bold hover:underline ml-1"
            >
              Create an account
            </button>
          </p>
          <p className="text-[10px] text-outline leading-relaxed px-4">
            By continuing, you agree to our{' '}
            <a className="underline hover:text-on-surface" href="#">Terms of Service</a>{' '}
            and{' '}
            <a className="underline hover:text-on-surface" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
