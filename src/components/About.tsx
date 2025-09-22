import ProfilePicture from '../assets/ProfilePicture.jpeg';
export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative animate-fade-in-left">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center hover:shadow-xl transition-all duration-500 hover:scale-105 transform">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white mb-4 hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
                  <img 
                    src={ProfilePicture}
                    alt="Adnane Mezrag - Full-Stack Developer" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-indigo-600', 'flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-4xl font-bold">AM</span>';
                    }}
                  />
                </div>
                <p className="text-gray-700 font-medium">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 animate-fade-in-up delay-200">
              Full-Stack Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 leading-relaxed animate-fade-in-up delay-300">
              I'm Adnane Mezrag, a dedicated full-stack developer from Algeria with expertise in 
              .NET, React, and SQL. My journey in technology is driven by a passion for building 
              real-world systems that solve actual problems and improve people's lives.
            </p>

            <p className="text-gray-600 leading-relaxed animate-fade-in-up delay-400">
              Currently working as a Software Engineer Intern at Meeedly in California (Remote), 
              I'm participating in the Global Summer Challenge program while simultaneously 
              developing ShopyWear, a full-stack e-commerce platform for clothing. I believe in clean 
              architecture, scalable design, and writing maintainable code.
            </p>

            <p className="text-gray-600 leading-relaxed animate-fade-in-up delay-500">
              My experience ranges from building desktop applications with .NET WinForms to 
              modern web applications with React and ASP.NET Core. Recently completed my Mini Coursera 
              e-learning platform project and have finished over 20 courses in algorithms and 
              problem-solving, always striving to improve my technical skills and stay current with 
              industry best practices.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 animate-fade-in-up delay-600">
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Clean Architecture</span>
              </div>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                <span className="text-gray-700">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                <span className="text-gray-700">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-300"></div>
                <span className="text-gray-700">Team Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}