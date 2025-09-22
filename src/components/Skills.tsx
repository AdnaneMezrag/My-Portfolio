interface SkillProps {
  name: string;
  level: number;
  icon: string;
}

function SkillBar({ name, level, icon }: SkillProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl animate-bounce hover:animate-spin transition-all duration-300">{icon}</span>
          <span className="font-semibold text-gray-900">{name}</span>
        </div>
        <span className="text-sm text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export function Skills() {
  const frontendSkills = [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "HTML5", level: 95, icon: "�️" },
    { name: "CSS", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 85, icon: "💨" },
  ];

  const backendSkills = [
    { name: ".NET Core", level: 95, icon: "�" },
    { name: "C#", level: 95, icon: "�" },
    { name: "ASP.NET Web API", level: 90, icon: "🚀" },
    { name: "Entity Framework Core", level: 90, icon: "�" },
    { name: "SQL Server", level: 90, icon: "🗄️" },
    { name: "REST APIs", level: 95, icon: "🔗" },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", level: 90, icon: "📱" },
    { name: "Windows Forms", level: 85, icon: "�️" },
    { name: "LINQ", level: 85, icon: "�" },
    { name: "Clean Architecture", level: 80, icon: "🏛️" },
    { name: "SQL Database Design", level: 90, icon: "📐" },
    { name: "Responsive Design", level: 85, icon: "📱" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="animate-fade-in-left delay-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Frontend Development</span>
            </h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="animate-fade-in-up delay-400">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Backend & .NET</span>
            </h3>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className={`animate-fade-in-up delay-${500 + index * 100}`}>
                  <SkillBar {...skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="animate-fade-in-right delay-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tools & Architecture</span>
            </h3>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <div key={skill.name} className={`animate-fade-in-up delay-${700 + index * 100}`}>
                  <SkillBar {...skill} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications or Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-900">Performance</h4>
              <p className="text-sm text-gray-600">Optimization</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900">Responsive</h4>
              <p className="text-sm text-gray-600">Design</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold text-gray-900">Problem</h4>
              <p className="text-sm text-gray-600">Solving</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold text-gray-900">Team</h4>
              <p className="text-sm text-gray-600">Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}