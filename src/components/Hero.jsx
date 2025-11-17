import { Play, Waves, Volume2 } from 'lucide-react'

function Hero({ onPlay }) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center grayscale-[40%] brightness-[0.6]" aria-hidden />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="inline-block relative">
            <div className="absolute -inset-2 bg-yellow-300 rotate-1" aria-hidden />
            <h1 className="relative text-4xl md:text-6xl font-extrabold text-black tracking-widest p-3 bg-black text-yellow-200 border-4 border-black">
              HAND-DRAWN SOUND, BORDERLANDS ENERGY
            </h1>
          </div>
          <p className="mt-6 max-w-2xl bg-black/80 text-yellow-100 p-4 border-2 border-yellow-300 inline-block">
            We craft gritty, comic-inked audio with heavy lines and heavier bass. Recording, mixing, and production with a signature cel-shaded vibe.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button onClick={onPlay} className="inline-flex items-center gap-2 bg-yellow-300 text-black font-extrabold px-5 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition">
              <Play className="h-5 w-5" /> Play Demo
            </button>
            <div className="flex items-center gap-2 text-yellow-200">
              <Waves className="h-5 w-5" />
              <Volume2 className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-4 bg-yellow-300 border-t-4 border-black" />
    </section>
  )
}

export default Hero
