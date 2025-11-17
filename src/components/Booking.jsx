import { useState } from 'react'
import { Calendar, Clock, Send } from 'lucide-react'

function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Recording',
    booking_date: '',
    time: '',
    duration_hours: 2,
    notes: '',
  })
  const [status, setStatus] = useState({ loading: false, ok: null, message: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, message: '' })
    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, duration_hours: Number(form.duration_hours) })
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ loading: false, ok: true, message: 'Request sent! We will confirm via email.' })
      // Reset basic fields but keep notes
      setForm({ name: '', email: '', phone: '', service: 'Recording', booking_date: '', time: '', duration_hours: 2, notes: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, message: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="booking" className="relative py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 inline-block relative">
          <div className="absolute -inset-2 bg-yellow-300 rotate-1" aria-hidden />
          <h2 className="relative text-3xl md:text-4xl font-extrabold tracking-wider bg-black text-yellow-200 border-4 border-black px-4 py-2">Book the Studio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="relative">
            <div className="absolute -inset-2 bg-yellow-300 -rotate-1" aria-hidden />
            <div className="relative bg-black text-yellow-200 border-4 border-black p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" />
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" />
                <select name="service" value={form.service} onChange={handleChange} className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black">
                  <option>Recording</option>
                  <option>Mixing</option>
                  <option>Production</option>
                  <option>Mastering</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="relative">
                  <input type="date" name="booking_date" value={form.booking_date} onChange={handleChange} required className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black" />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-black/70" />
                </div>
                <div className="relative">
                  <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black" />
                  <Clock className="absolute right-3 top-3 h-5 w-5 text-black/70" />
                </div>
                <input type="number" name="duration_hours" min="1" max="12" value={form.duration_hours} onChange={handleChange} required placeholder="Hours" className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black" />
              </div>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} placeholder="Tell us your vibe, references, gear needs…" className="w-full bg-yellow-50 text-black px-4 py-3 border-4 border-black placeholder-black/60" />

              <button disabled={status.loading || !baseUrl} className="inline-flex items-center gap-2 bg-yellow-300 text-black font-extrabold px-5 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] disabled:opacity-60">
                <Send className="h-5 w-5" /> {status.loading ? 'Sending…' : baseUrl ? 'Send Booking Request' : 'Backend URL Missing'}
              </button>

              {status.message && (
                <p className={`mt-2 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.message}</p>
              )}
            </div>
          </form>

          <div className="relative">
            <div className="absolute -inset-2 bg-yellow-300 rotate-1" aria-hidden />
            <div className="relative bg-black text-yellow-100 border-4 border-black p-6">
              <h3 className="text-2xl font-extrabold">How booking works</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-yellow-200/90">
                <li>Pick your service and preferred day/time.</li>
                <li>We’ll confirm availability and send rates.</li>
                <li>Deposits secure the slot; reschedules are flexible.</li>
                <li>Gear list and prep guide arrive after confirmation.</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-lg font-bold">Rates & Rooms</h4>
                <p className="mt-2 text-yellow-200/90">Recording starts at $60/hr. Mixing and mastering are quoted per project. Live Room fits 6-piece band; Vocal Booth is ultra-dead. Control Room tuned for translation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-4 bg-yellow-300 border-t-4 border-black" />
    </section>
  )
}

export default Booking
