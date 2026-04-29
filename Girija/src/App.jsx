import myprofile from "./assets/myprofile.png"
import medicalInventoryImg from "./assets/projects/medical-inventory.png"
import eventBookingImg from "./assets/projects/event-booking.png"
import academicRiskImg from "./assets/projects/academic-risk.png"

import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (e.g., send to email or API)
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  const projects = [
    {
      title: "Medical Inventory Sharing Platform",
      image: medicalInventoryImg, // Replace with: medicalInventoryImg
      description:
        "Designed RESTful APIs to manage real-time medicine inventory across multiple pharmacies with structured validation. Implemented server-side data validation and consistency checks to ensure accurate and reliable updates. Optimized MongoDB queries and indexing for efficient geolocation-based pharmacy search and fast retrieval.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      features: ["RESTful APIs for real-time inventory", "Server-side validation and consistency", "Optimized MongoDB queries", "Geolocation-based pharmacy search"],
    },
    {
      title: "Event Booking System",
      image: eventBookingImg, // Replace with: eventBookingImg
      description:
        "Developed secure backend services using JWT authentication and role-based access control. Designed normalized database schemas for booking management and availability tracking. Improved API efficiency by reducing redundant queries and optimizing booking workflows.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: ["Secure JWT authentication", "Role-based access control", "Normalized database schemas", "Optimized booking workflows"],
    },
    {
      title: "Intelligent Academic Risk Mitigation System",
      image: academicRiskImg, // Replace with: academicRiskImg
      description:
        "Built backend services to process and manage structured academic performance datasets. Integrated a machine learning model to predict academic risk levels with data-driven insights. Optimized database schemas and queries for scalable storage and efficient analytical processing. Deployed the application on Vercel with environment configuration and production build optimization.",
      tech: ["React", "Node.js", "Express", "MongoDB", "ML"],
      features: ["Backend for academic datasets", "ML model for risk prediction", "Scalable database schemas", "Deployed on Vercel"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-24 py-24 space-y-32">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-400">Girija S</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-orange-400 transition">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-orange-400 transition">Skills</a>
            <a href="#education" className="text-gray-300 hover:text-orange-400 transition">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-orange-400 transition">Projects</a>
            <a href="#achievements" className="text-gray-300 hover:text-orange-400 transition">Achievements</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
<section id="hero" className="relative flex flex-col-reverse md:flex-row items-center gap-12">
  {/* Glow background */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
  <div className="absolute top-40 right-0 w-72 h-72 bg-orange-400/10 blur-3xl rounded-full" />

  {/* TEXT */}
  <div className="relative z-10 max-w-xl">
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
      Hi, I’m{" "}
      <span className="bg-orange-400 bg-clip-text text-transparent">
        Girija S
      </span>
    </h1>

    <p className="mt-6 text-lg text-gray-400">
      Aspiring Software Engineer with strong foundation in data structures, backend development, and scalable web applications. Experienced in building secure, full-stack systems using MERN stack with emphasis on performance, clean architecture, and problem-solving. Solved 300+ coding problems, demonstrating strong analytical and logical skills.
    </p>

    <div className="mt-10 flex flex-wrap gap-5">
      <a
        href="https://github.com/girijasivakumar242"
        target="_blank"
        className="px-7 py-3 rounded-xl font-semibold bg-orange-500 text-black
                   hover:bg-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]
                   transition"
      >
        View GitHub
      </a>

      <a
        href="https://linkedin.com/in/girija-s-303749292"
        target="_blank"
        className="px-7 py-3 rounded-xl border border-orange-500/60
                   hover:bg-orange-500 hover:text-black
                   transition"
      >
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/girijasivakumar242"
        target="_blank"
        className="px-7 py-3 rounded-xl border border-orange-500/60
                   hover:bg-orange-500 hover:text-black
                   transition"
      >
        LeetCode
      </a>

      <a
        href="/Resume-GIRIJA.pdf"
        target="_blank"
        className="px-7 py-3 rounded-xl font-semibold bg-orange-500 text-black
                   hover:bg-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]
                   transition"
      >
        View Resume
      </a>
    </div>
  </div>

  {/* PHOTO */}
 {/* PHOTO */}
<div className="relative z-10">
  <div
    className="rounded-2xl overflow-hidden
               border border-orange-500/40
               shadow-[0_0_30px_rgba(249,115,22,0.25)]
               hover:shadow-[0_0_45px_rgba(249,115,22,0.45)]
               transition"
  >
    <img
      src={myprofile}
      alt="Girija S"
      className="w-64 h-80 md:w-80 
                 object-cover bg-black"
    />
  </div>
</div>

</section>


      {/* ================= SKILLS ================= */}
      <section id="skills">
        <h2 className="text-4xl font-bold mb-10">
          Technical Skills
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "C", "Python", "Java", "JavaScript",
              ].map(skill => (
                <div
                  key={skill}
                  className="py-5 rounded-xl text-center font-medium
                             bg-white/5 border border-orange-500/30 backdrop-blur
                             hover:bg-orange-500 hover:text-black
                             hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                             transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React", "Node.js", "Express.js", "Tailwind CSS",
              ].map(skill => (
                <div
                  key={skill}
                  className="py-5 rounded-xl text-center font-medium
                             bg-white/5 border border-orange-500/30 backdrop-blur
                             hover:bg-orange-500 hover:text-black
                             hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                             transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Databases & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman",
                "REST APIs", "JSON", "ES6+", "HTML5", "CSS3",
                "API Security", "Database Optimization",
              ].map(skill => (
                <div
                  key={skill}
                  className="py-5 rounded-xl text-center font-medium
                             bg-white/5 border border-orange-500/30 backdrop-blur
                             hover:bg-orange-500 hover:text-black
                             hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                             transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education">
        <h2 className="text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="bg-white/5 backdrop-blur border border-orange-500/30 rounded-2xl p-7">
          <h3 className="text-2xl font-semibold mb-2">B.E. – ECE</h3>
          <p className="text-orange-400 mb-2">Bannari Amman Institute of Technology</p>
          <p className="text-gray-400">Expected Graduation: May 2027</p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects">
        <h2 className="text-4xl font-bold mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden
                         bg-white/5 backdrop-blur border border-orange-500/30
                         hover:scale-[1.03]
                         hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]
                         transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover
                           group-hover:scale-105 transition duration-500"
              />

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1 text-sm rounded-full
                                 border border-orange-500/50
                                 text-orange-400 bg-orange-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm rounded-full
                                 border border-orange-500/50
                                 text-orange-400 bg-orange-500/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS & CERTIFICATIONS ================= */}
      <section id="achievements">
        <h2 className="text-4xl font-bold mb-10">
          Achievements & Certifications
        </h2>

        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur border border-orange-500/30 rounded-2xl p-7">
            <h3 className="text-xl font-semibold">Web Development Certification</h3>
            <p className="text-gray-400">Udemy</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-orange-500/30 rounded-2xl p-7">
            <h3 className="text-xl font-semibold">Python Programming Certification</h3>
            <p className="text-gray-400">Udemy</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

        <p className="text-gray-400 mb-6 max-w-xl">
          I’m open to internships, collaborations, and full-stack development
          opportunities. Let’s build something meaningful together.
        </p>

        <p className="text-lg">
          📧{" "}
          <a
            href="mailto:Girija2462006@gmail.com"
            className="text-orange-400 hover:underline"
          >
            Girija2462006@gmail.com
          </a>
        </p>

        <p className="mt-2 text-lg">📞 6379142302</p>

        <p className="mt-2 text-gray-400">📍 Karur, India</p>

        <div className="mt-10 bg-white/5 backdrop-blur border border-orange-500/30 rounded-2xl p-7">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <p className="text-gray-400 mb-6">Have a question or project in mind? Let's connect.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-black border border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-black border border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-black border border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-black border border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="px-7 py-3 rounded-xl font-semibold bg-orange-500 text-black hover:bg-orange-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="pt-12 border-t border-white/10 text-center text-gray-500">
        Made with ❤️ by Girija S · © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
