import { Phone, Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative py-16 bg-black text-yellow-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold tracking-wider">Book a Session</h2>
          <p className="mt-3 text-yellow-200/90">Tell us about your project and we’ll get back with times and rates.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-6 space-y-4">
            <input className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" placeholder="Name" />
            <input className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" placeholder="Email" />
            <textarea rows={4} className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" placeholder="Tell us your vibe" />
            <button className="bg-yellow-300 text-black font-extrabold px-5 py-3 border-4 border-black shadow-[4px_4px_0_0_#000]">
              Send Request
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5" /> <span>+1 (555) 808-1313</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5" /> <span>hey@borderwave.studio</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5" /> <span>New Pandora District</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-4 bg-yellow-300 border-t-4 border-black" />
    </section>
  )
}

export default Contact
