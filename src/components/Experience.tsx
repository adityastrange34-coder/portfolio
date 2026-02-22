import { Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Green Skills AI Intern',
      company: 'Edunet Foundation',
      period: 'Recent',
      achievements: [
        'Learned fundamentals of Artificial Intelligence with a focus on green and sustainable technologies',
        'Worked on hands-on labs and mini projects using AI tools and concepts',
        'Analyzed real-world problem statements and proposed AI-based solutions',
        'Enhanced technical, analytical, and teamwork skills through guided mentorship',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Briefcase size={28} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                </div>
              </div>
              <div className="space-y-3 pl-16">
                {exp.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
