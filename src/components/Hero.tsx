import ProfilePicture from '../assets/ProfilePicture.jpeg';
export function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up delay-100">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300 hover:shadow-xl">
              <img 
                src={ProfilePicture}
                alt="Adnane Mezrag" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-indigo-600', 'flex', 'items-center', 'justify-center');
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-4xl font-bold">AM</span>';
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-200">
            Hello, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">Adnane Mezrag</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Full-stack developer skilled in .NET, React, and SQL. Experienced in building real-world systems. 
            Passionate about clean architecture, scalable design, and solving real problems through technology. 
            Currently developing ShopyWear, a full-stack e-commerce platform for clothing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              View My Work
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-600">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-bounce-subtle">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-bounce-subtle delay-100">8+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-bounce-subtle delay-200">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-bounce-subtle delay-300">20+</div>
              <div className="text-gray-600">Courses Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}