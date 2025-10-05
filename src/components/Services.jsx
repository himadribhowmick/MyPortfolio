import React from "react";
import { FiMonitor, FiSmartphone, FiLayout, FiPenTool } from "react-icons/fi";

const services = [
  {
    title: "UI/UX",
    desc: "User flow, wireframes and prototypes",
    icon: <FiLayout size={22} />,
  },
  {
    title: "Web Design",
    desc: "Modern responsive websites",
    icon: <FiMonitor size={22} />,
  },
  {
    title: "App Design",
    desc: "Mobile app UX & UI",
    icon: <FiSmartphone size={22} />,
  },
  {
    title: "Graphic Design",
    desc: "Branding and marketing materials",
    icon: <FiPenTool size={22} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
      {/* Section Title & Description: changes with dark mode */}
      <h3 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Services
      </h3>
      <p className="text-center mb-8 text-gray-700 dark:text-gray-300">
        I specialize in frontend web development, creating responsive and modern
        websites using HTML, CSS (Tailwind CSS), and JavaScript (React). My
        focus is on building clean designs, smooth user experiences, and
        optimized performance for every project.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            {/* Card icon */}
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-500/10 text-orange-500 mb-4">
              {s.icon}
            </div>
            {/* Card text: always same as light mode */}
            <h4 className="font-semibold mb-2 text-gray-900">{s.title}</h4>
            <p className="text-gray-700 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
