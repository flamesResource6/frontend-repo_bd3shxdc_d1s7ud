import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

function AudioPlayer({ src }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    const onEnd = () => setIsPlaying(false)
    audio?.addEventListener('ended', onEnd)
    return () => audio?.removeEventListener('ended', onEnd)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="inline-flex items-center gap-3 bg-black text-yellow-200 border-4 border-black px-4 py-2 shadow-[4px_4px_0_0_#000]">
      <button onClick={toggle} className="p-2 bg-yellow-300 text-black border-2 border-black">
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      <p className="font-bold tracking-wider">Demo Track</p>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  )
}

export default AudioPlayer
