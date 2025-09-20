interface SkillProps {
  name: string;
  level: number;
  icon: string;
}

function SkillBar({ name, level, icon }: SkillProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <span className="font-semibold text-gray-900">{name}</span>
        </div>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Frontend Development
            </h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Backend & .NET
            </h3>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Tools & Architecture
            </h3>
            <div className="space-y-4">
              {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
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