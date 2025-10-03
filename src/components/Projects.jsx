import React, { useState } from 'react'

const allProjects = [
  // Web Design
  { id: 1, category: 'Web Design', title: 'AirCalling Landing Page Design', image: '/images/wev.jpg' },
  { id: 2, category: 'Web Design', title: 'Business Landing Page Design', image: '/images/wev.jpg' },
  { id: 3, category: 'Web Design', title: 'Ecom Web Page Design', image: '/images/wev.jpg' },

  // App Design
  { id: 4, category: 'App Design', title: 'Food Delivery App UI', image: '/images/app1.jpg' },
  { id: 5, category: 'App Design', title: 'Finance Tracker Mobile App', image: '/images/app2.jpg' },
  { id: 6, category: 'App Design', title: 'Travel Booking App', image: '/images/app3.jpg' },

  // UI/UX
  { id: 7, category: 'UI/UX', title: 'SaaS Dashboard UI/UX', image: '/images/gp1.jpeg' },
  { id: 8, category: 'UI/UX', title: 'Portfolio UX Redesign', image: '/images/gp2.jpeg' },
  { id: 9, category: 'UI/UX', title: 'E-learning UX Case Study', image: '/images/gp3.jpeg' },

  // Graphic Design
  { id: 10, category: 'Graphic Design', title: 'Brand Identity Kit', image: '/images/gp1.jpeg' },
  { id: 11, category: 'Graphic Design', title: 'Poster & Flyer Design', image: '/images/gp2.jpeg' },
  { id: 12, category: 'Graphic Design', title: 'Logo Collection', image: '/images/gp3.jpeg' },
]

const categories = ['All', ...new Set(allProjects.map(p => p.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter)

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
      {/* Section Title & Description */}
      <h3 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">My Projects</h3>
      <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
        A collection of my design & development works across multiple categories.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            data-active={filter === c}
            className="px-4 py-2 rounded-md border border-gray-300
                       text-gray-800 bg-white
                       hover:bg-orange-500 hover:text-white
                       transition-colors duration-200
                       data-[active=true]:bg-orange-500 data-[active=true]:text-white data-[active=true]:border-orange-500"
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No projects found in this category.
          </p>
        )}

        {filtered.map(p => (
          <div 
            key={p.id} 
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition bg-white" // ✅ always white
          >
            <div className="p-4">
              {/* Card Image Wrapper */}
              <div className="rounded-md p-3 flex items-center justify-center
                              bg-[#fff3e8] transition-colors duration-300">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="object-cover w-full h-48 rounded transform transition duration-300 hover:scale-105" 
                />
              </div>

              <div className="mt-4">
                {/* Category */}
                <p className="text-sm font-medium text-orange-500 mb-1">{p.category}</p>
                {/* Title */}
                <h4 className="font-semibold text-gray-900">{p.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
