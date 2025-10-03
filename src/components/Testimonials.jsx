import React, { useEffect, useState } from 'react'

const data = [
  { id:1, name: 'John Doe', role:'CEO', avatar: '/images/profile.png', text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan...' },
  { id:2, name: 'Sarah Khan', role:'Product Manager', avatar: '/images/profile.png', text: 'Professional and timely. Highly recommended for UI/UX projects.' },
  { id:3, name: 'Ali Rahman', role:'Founder', avatar: '/images/profile.png', text: 'Delivered quality work. Great communication and design sensibilities.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % data.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
      <h3 className="text-3xl font-bold text-center mb-4">Testimonials</h3>
      <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {data.map((d) => (
            <div className="testimonial-card p-6 md:p-10 min-h-[180px] flex-shrink-0" key={d.id}>
              <div className="bg-[#f6f6f6] rounded-xl p-6 md:p-10 flex items-start gap-6">
                <img src={d.avatar} alt={d.name} className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <p className="text-gray-700 italic">“{d.text}”</p>
                  <div className="mt-4">
                    <div className="font-semibold">{d.name}</div>
                    <div className="text-sm text-gray-500">{d.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        {data.map((_, i) => (
          <div key={i} className={`small-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
        ))}
      </div>
    </section>
  )
}
