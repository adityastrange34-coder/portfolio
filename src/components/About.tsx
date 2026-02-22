import { GraduationCap, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <GraduationCap size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Education</h3>
                <p className="text-gray-300 font-medium mb-1">Bachelor of Technology (B.Tech)</p>
                <p className="text-gray-400">Neerukonda Institute of Technology and Science</p>
                <div className="flex items-center gap-2 mt-3 text-gray-400">
                  <Calendar size={16} />
                  <span>2024 - 2028</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a dedicated B.Tech student with a passion for technology and innovation.
              My journey in software development has equipped me with a strong foundation
              in programming languages and modern development practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through internships and hands-on projects, I've gained practical experience in
              AI, web development, and database management. I'm always eager to learn new
              technologies and solve complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
