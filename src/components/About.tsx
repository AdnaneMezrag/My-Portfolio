export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  AM
                </div>
                <p className="text-gray-700 font-medium">Software Developer</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Full-Stack Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm Adnane Mezrag, a dedicated full-stack developer from Algeria with expertise in 
              .NET, React, and SQL. My journey in technology is driven by a passion for building 
              real-world systems that solve actual problems and improve people's lives.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Currently working as a Software Engineer Intern at Meeedly in California (Remote), 
              I'm participating in the Global Summer Challenge program while simultaneously 
              developing my own e-learning platform inspired by Coursera. I believe in clean 
              architecture, scalable design, and writing maintainable code.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My experience ranges from building desktop applications with .NET WinForms to 
              modern web applications with React and ASP.NET Core. I've completed over 20 courses 
              in algorithms and problem-solving, always striving to improve my technical skills 
              and stay current with industry best practices.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Clean Architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Team Leadership</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-6">
              <a
                href="/cv/Adnane_Mezrag_CV.pdf"
                download
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}