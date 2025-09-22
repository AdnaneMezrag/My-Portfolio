interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  isFreelance?: boolean;
}

function ExperienceCard({ title, company, period, description, technologies, isFreelance }: ExperienceItem) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <div className="flex items-center space-x-2">
            <p className="text-blue-600 font-medium">{company}</p>
            {isFreelance && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full animate-pulse">
                Freelance
              </span>
            )}
          </div>
        </div>
        <span className="text-gray-500 text-sm mt-2 md:mt-0 bg-gray-100 px-2 py-1 rounded-full">{period}</span>
      </div>
      
      <ul className="space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className={`flex items-start space-x-2 animate-fade-in-up delay-${200 + index * 100}`}>
            <span className="text-blue-600 mt-1.5 text-xs animate-pulse">▪</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className={`bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-110 animate-fade-in-up delay-${400 + index * 50}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Meeedly - Global Summer Challenge Candidate",
      company: "Meeedly (Remote - California, USA)",
      period: "Jul 2025 - Present",
      description: [
        "Selected to participate in the Global Summer Challenge, a prestigious program organised by Meeedly",
        "Contributing to a global movement celebrating innovation and personal excellence",
        "Collaborating with an international community of professionals",
        "Working remotely on the world's leading enterprise meetings scheduling application",
      ],
      technologies: [".NET", "React", "Enterprise Software", "Remote Collaboration"],
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "Jun 2025 - Present",
      isFreelance: true,
      description: [
        " Developed and delivered custom software solutions for clients as a freelance developer.",
      ],
      technologies: [".NET", "C#", "SQL Server", "Custom Solutions"],
    },
    {
      title: "Full-Stack Developer - Scouts District Management System",
      company: "Algerian Muslim Scouts",
      period: "Oct 2024 - Mar 2025",
      description: [
        "Developing customized software solution for Scout leaders management",
        "Implementing evaluation system for Scouts performance tracking",
        "Creating archive system for efficient Scout records storage and retrieval",
      ],
      technologies: ["C#",".NET", "WinForms", "SQL Server"],
    },
    {
      title: "Full-Stack Developer",
      company: "Programming Advices",
      period: "Jul 2023 - Feb 2025",
      description: [
        "Completed intensive practical training in problem-solving and algorithms (+20 courses)",
        "Developed small-to-medium software projects in C#/C++ with OOP principles",
        "Applied debugging and optimization techniques to improve code performance",
        "Improved code readability and maintainability through clean coding practices",
      ],
      technologies: ["C#", "C++", "OOP", "Algorithms", "Problem Solving", "Version Control"],
    },
    {
      title: "Back End Developer & Team Lead",
      company: "Abdelhamid Mehri Constantine 2 University",
      period: "Mar 2024 - May 2024",
      description: [
        "Led team of six students on Health Check mobile application project",
        "Developed back-end architecture with Express.js and PostgreSQL",
        "Built system to monitor patients' blood sugar and heart rate levels",
        "Deployed server and database on Heroku and Render platforms",
      ],
      technologies: ["React Native", "Express.js", "PostgreSQL", "Heroku", "Render", "Team Leadership"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 animate-pulse"></div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative animate-fade-in-up delay-${200 + index * 100}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hover:bg-indigo-600 transition-colors duration-300 animate-pulse"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <ExperienceCard {...experience} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Courses Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}