import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include interactive sections, contact form with database integration, and SEO optimization.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <ExternalLink size={18} />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
