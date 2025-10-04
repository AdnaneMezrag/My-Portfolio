import ShopyWearImage from '../assets/projects/shopyWear.png';
import MiniCourseraImage from '../assets/projects/miniCoursera.jpg';
import ScoutsImage from '../assets/projects/scouts.png';
import SupplyLinkImage from '../assets/projects/supplyLink.png';
import MoviesDiscoveryImage from '../assets/projects/moviesDiscovery.jpeg';
import DVLDImage from '../assets/projects/DVLD.jpg';
import CodeGeneratorImage from '../assets/projects/codeGenerator.jpg';
import GraphDrawingToolImage from '../assets/projects/graphDrawingTool.jpg';
import BankImage from '../assets/projects/bank.jpg';
import HealthCheckImage from '../assets/projects/healthCheck.jpg';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  imageUrl?: string; // New field for actual images
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string; // Backend GitHub URL
  videoUrl?: string; // Video demonstration URL
  setupUrl?: string; // Setup/Download URL
  featured?: boolean;
}

function ProjectCard({ title, description, image, imageUrl, technologies, liveUrl, githubUrl, githubBackendUrl, videoUrl, setupUrl, featured }: ProjectItem) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up h-full flex flex-col ${featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-100'}`}>
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden hover:from-blue-200 hover:to-indigo-200 transition-all duration-300">
        {featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full animate-bounce">
            Featured
          </div>
        )}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-6xl opacity-50 hover:scale-110 transition-transform duration-300 hover:rotate-6">{image}</div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className={`bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full hover:bg-blue-100 transition-all duration-300 hover:scale-110 animate-fade-in-up delay-${100 + index * 50}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15a2 2 0 002-2V9a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293L10.293 4.293A1 1 0 009.586 4H8a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Video</span>
            </a>
          )}
          {setupUrl && (
            <a
              href={setupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:border-gray-400 transform"
            >
              <svg className="w-4 h-4 hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>{githubBackendUrl ? 'Frontend' : 'GitHub'}</span>
            </a>
          )}
          {githubBackendUrl && (
            <a
              href={githubBackendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:border-gray-400 transform"
            >
              <svg className="w-4 h-4 hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Backend</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "ShopyWear - E-commerce Platform",
      description: "Full-stack e-commerce web application for clothing with advanced filtering, shopping cart, product and order management. Features both customer interface and administrative dashboard.",
      image: "🛍️",
      imageUrl: ShopyWearImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "C#", "SQL Server", "E-commerce"],
      liveUrl: "https://shopywear.vercel.app/",
      videoUrl: "https://drive.google.com/file/d/1K_aUONCcfdSuidfqq0EyKxVoayewlioS/view?usp=sharing",
      featured: true,
    },
    {
      title: "Mini Coursera Platform",
      description: "Completed full-stack e-learning platform inspired by Coursera, using modern web technologies and clean architecture principles. Features user authentication, role-based access, course management, and progress tracking.",
      image: "🎓",
      imageUrl: MiniCourseraImage,
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "ASP.NET Core 8", "SQL Server", "Entity Framework"],
      liveUrl: "https://mini-coursera-frontend.vercel.app/",
      githubUrl: "https://github.com/AdnaneMezrag/Mini-Coursera-Frontend",
      githubBackendUrl: "https://github.com/AdnaneMezrag/Mini-Coursera-Backend",
      videoUrl: "https://drive.google.com/file/d/1VVK8J6ahdL037jEl17GLKJUvD77j_9j2/view?usp=sharing",
      featured: true,
    },
    {
      title: "Scouts District Management System",
      description: "Customized software solution for Scout leaders management with evaluation system for performance tracking. Features archive system for efficient records storage.",
      image: "⚜️",
      imageUrl: ScoutsImage,
      technologies: ["C#", ".NET", "WinForms", "SQL Server"],
      liveUrl: "https://drive.google.com/file/d/1DYJY5Jqk9NfPZdqwLcdAPE-yKXGUG5rJ/view",
      featured: true,
    },
    {
      title: "SupplyLink - Salam Hack 2025",
      description: "AI-powered web platform for optimizing supply chain operations. Led team in hackathon with route optimization, recommendation system, and alert system analyzing global news and seller performance.",
      image: "🚚",
      imageUrl: SupplyLinkImage,
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Python", "Flask", "AI/ML", "REST APIs"],
      liveUrl: "https://www.youtube.com/watch?v=6vSGNh2axYw&ab_channel=Flash",
      githubUrl: "https://github.com/ahmed123456787/hakathon_supply_chain",
      githubBackendUrl: "https://github.com/AdnaneMezrag/SupplyChain",
      featured: true,
    },
    {
      title: "Movie Discovery",
      description: "Dynamic web application built with React and Tailwind CSS for discovering trending movies in real-time. Features live search with useDebounce and mobile-responsive design.",
      image: "🎬",
      imageUrl: MoviesDiscoveryImage,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Movie APIs", "Hooks"],
      liveUrl: "https://moviesbyadnanemezrag.netlify.app/",
      githubUrl: "https://github.com/AdnaneMezrag/Movie-Discover",
    },
    {
      title: "Driving License Management System",
      description: "Comprehensive DVLD system using 3-tier architecture. Automates license issuance, renewals, replacements, and manages different license categories with applicant verification processes.",
      image: "🚗",
      imageUrl: DVLDImage,
      technologies: [".NET", "WinForms", "C#", "SQL Server", "3-Tier Architecture"],
      liveUrl: "https://drive.google.com/file/d/1CmhtqmlpCn5rX8JnEmOBU_fCsSOAwAHi/view",
      githubUrl: "https://github.com/AdnaneMezrag/Driving-and-Vehicle-License-Department",
    },
    {
      title: "C# .NET Code Generator",
      description: "Desktop application for software developers that generates code for business and data access layers for Microsoft SQL Server. Streamlines development process and enhances productivity.",
      image: "⚙️",
      imageUrl: CodeGeneratorImage,
      technologies: ["C#", ".NET", "Windows Forms", "SQL Server", "Code Generation"],
      liveUrl: "https://drive.google.com/file/d/1Cef9kbBs2j2oKQDqU-yaVqP4SqXR0AME/view",
      setupUrl: "https://drive.google.com/file/d/1ecJT6D_G_0JyhMOwoef8OX2-6DAiUyt_/view",
      githubUrl: "https://github.com/AdnaneMezrag/Code-Generator",
    },
    {
      title: "Graph Drawing Tool",
      description: "Java-based application for creating and analyzing graphs through graphical interface. Supports Eulerian/Hamiltonian path checks, connectivity validation, and Dijkstra's shortest path algorithm.",
      image: "📊",
      imageUrl: GraphDrawingToolImage,
      technologies: ["Java", "Java Swing", "Graph Algorithms", "GUI"],
      githubUrl: "https://github.com/AdnaneMezrag/Graph-Drawing-Tool",
    },
    {
      title: "Bank Management System",
      description: "Comprehensive banking system in C++ with secure user login, client management, transaction handling, and currency exchange system with real-time rate updates.",
      image: "🏦",
      imageUrl: BankImage,
      technologies: ["C++", "File Management", "Encryption", "Modular Design"],
      githubUrl: "https://github.com/AdnaneMezrag/Bank-Project",
    },
    {
      title: "Health Check Mobile App",
      description: "Mobile application for monitoring patients' blood sugar and heart rate levels. Features progress tracking via graphs and date-based search functionality. Led team of six students.",
      image: "🏥",
      imageUrl: HealthCheckImage,
      technologies: ["React Native", "Express.js", "PostgreSQL", "Heroku", "Render"],
      githubUrl: "https://github.com/AdnaneMezrag/PPD-Project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className={`animate-fade-in-up delay-${200 + index * 100}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-800">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/AdnaneMezrag"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}