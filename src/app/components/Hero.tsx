import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Asad Ali</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
              Frontend Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-400 max-w-lg mb-10">
              I create beautiful, responsive websites and applications with modern technologies and clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/30">
                About Me
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-medium rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Contact Me
              </button>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Profile image container with animated border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 animate-spin-slow" style={{animationDuration: '10s'}}>
                <div className="absolute inset-0.5 rounded-full bg-gray-900 overflow-hidden">
                  <Image
                    src="/image/my2.jpg"
                    alt="Asad Ali - Portfolio"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-cyan-500 w-24 h-24 rounded-full opacity-70 blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 w-24 h-24 rounded-full opacity-70 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-cyan-400 flex justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
