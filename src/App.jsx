import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import AudioPlayer from './components/AudioPlayer'
import { Instagram, Youtube, Music2 } from 'lucide-react'

function App() {
  const playerRef = useRef(null)

  const onPlay = () => {
    const btn = playerRef.current?.querySelector('button')
    btn?.click()
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,#fde68a_0%,transparent_30%),radial-gradient(circle_at_80%_30%,#facc15_0%,transparent_25%),radial-gradient(circle_at_50%_90%,#fef08a_0%,transparent_25%)]">
      <Navbar />

      <Hero onPlay={onPlay} />

      <div className="w-full flex justify-center py-8 bg-yellow-50">
        <div ref={playerRef}>
          <AudioPlayer src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Komiku/Its_time_for_adventure/Komiku_-_07_-_The_Adventure_Begins.mp3" />
        </div>
      </div>

      <Features />
      <Gallery />
      <Contact />

      <footer id="social" className="bg-yellow-50">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-300 rotate-0 translate-x-1 translate-y-1" aria-hidden />
          <div className="relative border-4 border-black bg-black text-yellow-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0_0_#000]">
                  <Music2 className="h-6 w-6" />
                </div>
                <p className="font-extrabold tracking-widest">BorderWave Studio</p>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="p-2 border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="YouTube" className="p-2 border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black transition">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs text-yellow-300/80">© {new Date().getFullYear()} BorderWave — Drawn lines. Heavy lines. Heavier bass.</p>
            </div>
          </div>
        </div>
        <div className="bg-[linear-gradient(135deg,rgba(0,0,0,0.2)_10%,transparent_10%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_60%,transparent_60%,transparent_100%)] bg-[length:10px_10px] h-2" />
      </footer>
    </div>
  )
}

export default App
