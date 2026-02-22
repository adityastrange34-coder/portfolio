import { Code2, Globe, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Java', 'Python'],
      color: 'blue',
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'cyan',
    },
    {
      title: 'Database Technologies',
      icon: Database,
      skills: ['SQL', 'Supabase'],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-600 to-blue-400';
      case 'cyan':
        return 'from-cyan-600 to-cyan-400';
      case 'green':
        return 'from-green-600 to-green-400';
      default:
        return 'from-blue-600 to-blue-400';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${getColorClasses(category.color)} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
