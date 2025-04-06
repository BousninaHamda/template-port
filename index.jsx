// pages/index.js
import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>Your Name | Next.js & Nest.js Developer</title>
      </Head>

      {/* Innovative Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            YourName
          </motion.div>
          <div className="flex gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#8b5cf6' }}
                className="relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20" id="home">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Next.js & Nest.js <br />
              <span className="text-purple-500">Master Developer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Crafting scalable, performant web applications with modern JavaScript frameworks. 
              Specializing in Next.js for frontend and Nest.js for robust backend solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/yourusername"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full"
          />
        </div>
      </section>

      {/* Education */}
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "BS Computer Science", place: "University Name", year: "2018-2022" },
              { title: "Next.js Certification", place: "Online Platform", year: "2023" },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <h3 className="text-2xl font-semibold">{edu.title}</h3>
                <p className="text-purple-400">{edu.place}</p>
                <p className="text-gray-400">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              { role: "Senior Next.js Developer", company: "Tech Co", period: "2023-Present" },
              { role: "Full Stack Developer", company: "Startup Inc", period: "2021-2023" },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-purple-400">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full capitalize ${
                  filter === type ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Platform", type: "fullstack", img: "/project1.jpg" },
              { title: "Dashboard UI", type: "frontend", img: "/project2.jpg" },
              { title: "API Service", type: "backend", img: "/project3.jpg" },
            ].filter(project => filter === 'all' || project.type === filter).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-purple-400 capitalize">{project.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-6">your.email@example.com</p>
          <div className="flex justify-center gap-6">
            <motion.a href="#" whileHover={{ y: -5 }} className="text-gray-400 hover:text-purple-500">
              GitHub
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5 }} className="text-gray-400 hover:text-purple-500">
              LinkedIn
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5 }} className="text-gray-400 hover:text-purple-500">
              Twitter
            </motion.a>
          </div>
          <p className="text-gray-600 mt-8">© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// package.json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "^10.0.0",
    "tailwindcss": "^3.3.0"
  }
}
