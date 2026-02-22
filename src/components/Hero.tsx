import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Vantharam Aditya
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            B.Tech Student & Aspiring Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Passionate about building innovative solutions with modern technologies.
            Currently pursuing B.Tech at Neerukonda Institute of Technology and Science.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:Adityavantharam999@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/Vantharam_Aditya_Final_Resume.pdf"
              download
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/aditya-vantharam-bb9624310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/IMG-20250328-WA0057.jpg"
              alt="Vantharam Aditya"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
