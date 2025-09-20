interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
  achievements?: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

function EducationCard({ degree, institution, period, description, gpa, achievements }: EducationItem) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{degree}</h3>
          <p className="text-blue-600 font-medium">{institution}</p>
          {gpa && (
            <p className="text-sm text-gray-600 mt-1">GPA: {gpa}</p>
          )}
        </div>
        <span className="text-gray-500 text-sm mt-2 md:mt-0">{period}</span>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      {achievements && achievements.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1.5 text-xs">▪</span>
                <span className="text-gray-600 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CertificationCard({ name, issuer, date, credentialId }: CertificationItem) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300">
      <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-blue-600 text-sm mb-1">{issuer}</p>
      <p className="text-gray-500 text-xs">{date}</p>
      {credentialId && (
        <p className="text-gray-400 text-xs mt-1">ID: {credentialId}</p>
      )}
    </div>
  );
}

export function Education() {
  const education: EducationItem[] = [
    {
      degree: "Engineer's Degree in Computer Science",
      institution: "Abdelhamid Mehri Constantine 2 University",
      period: "Sep 2018 - May 2022",
      description: "Comprehensive computer science education focusing on software engineering, algorithms, and system design. Participated in team projects and gained hands-on experience in software development.",
      achievements: [
        "Led team projects including Health Check mobile application",
        "Collaborated with professors and peers on real-world software solutions",
        "Gained expertise in multiple programming languages and frameworks",
        "Developed strong foundation in algorithms and data structures"
      ]
    },
    {
      degree: "Baccalaureate Diploma in Experimental Sciences",
      institution: "High School",
      period: "Graduated 2018",
      gpa: "16.52/20",
      description: "Strong foundation in sciences and mathematics, providing excellent preparation for computer science studies.",
      achievements: [
        "Achieved high GPA of 16.52/20",
        "Specialized in experimental sciences",
        "Built strong analytical and problem-solving skills"
      ]
    }
  ];

  const certifications: CertificationItem[] = [
    {
      name: "Algorithms & Problem Solving Level 5",
      issuer: "Programming Advices",
      date: "Aug 2022 - Jul 2027",
      credentialId: "PA-ALGO-L5-2022"
    },
    {
      name: "C# Programming Fundamentals",
      issuer: "Programming Advices",
      date: "2023",
      credentialId: "PA-CSHARP-2023"
    },
    {
      name: "Object-Oriented Programming in C++",
      issuer: "Programming Advices",
      date: "2023",
      credentialId: "PA-CPP-OOP-2023"
    },
    {
      name: "Database Design and SQL",
      issuer: "Programming Advices",
      date: "2023",
      credentialId: "PA-SQL-2023"
    },
    {
      name: "Data Structures and Algorithms",
      issuer: "Programming Advices",
      date: "2022",
      credentialId: "PA-DSA-2022"
    },
    {
      name: ".NET Framework Development",
      issuer: "Programming Advices",
      date: "2024",
      credentialId: "PA-DOTNET-2024"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications that form the foundation of my expertise
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            I believe in lifelong learning and staying current with the latest technologies and best practices. 
            My commitment to continuous improvement drives me to regularly pursue new certifications, 
            attend workshops, and contribute to the developer community.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-sm font-medium text-gray-700">Self-Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-sm font-medium text-gray-700">Goal-Oriented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-sm font-medium text-gray-700">Tech Trends</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-sm font-medium text-gray-700">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}