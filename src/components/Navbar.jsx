import { Menu, Music2, Phone, Instagram, Youtube } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-300 rotate-0 translate-x-1 translate-y-1" aria-hidden />
        <div className="relative bg-black text-yellow-200 border-4 border-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0_0_#000]">
                <Music2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold tracking-wider drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                  BorderWave Studio
                </p>
                <p className="text-xs text-yellow-300/80">Sound • Recording • Vibes</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
              <a href="#music" className="hover:text-white transition">Music</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#social" className="hover:text-white transition">Social</a>
            </nav>

            <button className="md:hidden p-2 border-2 border-yellow-300 text-yellow-300">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(135deg,rgba(0,0,0,0.2)_10%,transparent_10%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_60%,transparent_60%,transparent_100%)] bg-[length:10px_10px] h-2" />
    </header>
  )
}

export default Navbar
