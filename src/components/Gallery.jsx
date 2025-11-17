function Gallery() {
  const items = [
    {
      title: 'Live Room',
      img: 'https://images.unsplash.com/photo-1585307573703-8a9ed8503ddf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Control Room',
      img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Analog Toys',
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  return (
    <section id="music" className="bg-yellow-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="relative group">
              <div className="absolute -inset-2 bg-yellow-300 rotate-1" aria-hidden />
              <figure className="relative border-4 border-black bg-black">
                <img src={it.img} alt={it.title} className="h-60 w-full object-cover grayscale-[30%]" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/80 text-yellow-200 p-3 font-extrabold tracking-wide">
                  {it.title}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
