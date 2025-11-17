import { motion } from 'framer-motion'

function AnimatedAccent({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <motion.div
        className="absolute -inset-2 bg-yellow-300"
        initial={{ rotate: 0, x: 2, y: 2, opacity: 0 }}
        whileInView={{ rotate: 2, x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      />
    </div>
  )
}

export default AnimatedAccent
