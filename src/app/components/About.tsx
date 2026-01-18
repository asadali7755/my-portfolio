import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About <span className="text-cyan-400">Me</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Reveal>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500/30">
                  <img
                    src="/image/my2.jpg"
                    alt="Asad Ali"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cyan-500 w-24 h-24 rounded-full opacity-70 blur-xl -z-10"></div>
              </div>
            </div>
          </Reveal>

          <div className="lg:w-2/3 text-gray-300">
            <Reveal>
              <h3 className="text-2xl font-semibold text-white mb-6">I'm Asad Ali, Frontend Developer</h3>
            </Reveal>

            <Reveal>
              <p className="mb-6 leading-relaxed">
                I'm a passionate Frontend Developer with expertise in creating modern, responsive websites and applications.
                With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building intuitive user interfaces
                that provide exceptional user experiences.
              </p>
            </Reveal>

            <Reveal>
              <p className="mb-6 leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver solutions that not only
                meet functional requirements but also engage users effectively. I stay updated with the latest industry
                trends and technologies to ensure my work remains innovative and impactful.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Name: Asad Ali</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Email: your-email@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>From: Pakistan</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Availability: Available</span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;