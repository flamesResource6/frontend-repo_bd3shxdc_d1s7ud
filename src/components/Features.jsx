import { Music2, Mic2, MixerHorizontal, Headphones } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="relative">
      <div className="absolute -inset-2 bg-yellow-300 rotate-1" aria-hidden />
      <div className="relative bg-black text-yellow-100 p-6 border-4 border-black">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0_0_#000]">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-extrabold tracking-wide">{title}</h3>
        </div>
        <p className="mt-3 text-yellow-200/90">{desc}</p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section id="services" className="relative py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Mic2} title="Recording" desc="Pristine vocal and instrument capture, from whisper to roar." />
          <Feature icon={MixerHorizontal} title="Mixing" desc="Analog warmth meets digital precision for that cel-shaded punch." />
          <Feature icon={Headphones} title="Production" desc="Original beats and scores styled with graphic-novel grit." />
          <Feature icon={Music2} title="Mastering" desc="Loud, clean, and ready for every wasteland radio." />
        </div>
      </div>
    </section>
  )
}

export default Features
