import { Music2, Mic2, MixerHorizontal, Headphones, Sparkles, BadgeHelp } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedAccent from './AnimatedAccent'

function Feature({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <motion.div className="relative" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay, type: 'spring', stiffness: 120, damping: 14 }}>
      <AnimatedAccent />
      <div className="relative bg-black text-yellow-100 p-6 border-4 border-black">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0_0_#000]">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-extrabold tracking-wide">{title}</h3>
        </div>
        <p className="mt-3 text-yellow-200/90">{desc}</p>
      </div>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="services" className="relative py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 inline-block relative">
          <AnimatedAccent />
          <h2 className="relative text-3xl md:text-4xl font-extrabold tracking-wider bg-black text-yellow-200 border-4 border-black px-4 py-2">What we do</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Mic2} title="Recording" desc="Pristine vocal and instrument capture, from whisper to roar." delay={0.05} />
          <Feature icon={MixerHorizontal} title="Mixing" desc="Analog warmth meets digital precision for that cel-shaded punch." delay={0.1} />
          <Feature icon={Headphones} title="Production" desc="Original beats and scores styled with graphic-novel grit." delay={0.15} />
          <Feature icon={Music2} title="Mastering" desc="Loud, clean, and ready for every wasteland radio." delay={0.2} />
          <Feature icon={Sparkles} title="Sound Design" desc="Foley, FX, and atmospheres for trailers and games." delay={0.25} />
          <Feature icon={BadgeHelp} title="Consulting" desc="Studio builds, acoustics, and workflow optimization." delay={0.3} />
        </div>
      </div>
    </section>
  )
}

export default Features
