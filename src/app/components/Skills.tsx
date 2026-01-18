import React from 'react';
import { Reveal } from './Reveal';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'UI/UX Design', level: 75 },
  ];

  const tools = [
    { name: 'Git', icon: 'V' },
    { name: 'VS Code', icon: 'C' },
    { name: 'Figma', icon: 'F' },
    { name: 'Webpack', icon: 'W' },
    { name: 'Jest', icon: 'J' },
    { name: 'Node.js', icon: 'N' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My <span className="text-cyan-400">Skills</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              I've honed my skills through various projects and continuous learning, focusing on modern web technologies and best practices.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-2xl font-semibold text-white mb-8">Professional Skills</h3>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <Reveal key={index}>
                  <div
                    className="bg-gray-800/50 p-6 rounded-xl text-center hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 group"
                  >
                    <div className="text-3xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h4 className="text-white font-medium">{tool.name}</h4>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>

                <div className="space-y-6">
                  <div className="border-l-2 border-cyan-500 pl-4 py-1 ml-3">
                    <h4 className="text-lg font-semibold text-white">Bachelor of Computer Science</h4>
                    <p className="text-cyan-400">University of XYZ</p>
                    <p className="text-gray-400">2018 - 2022</p>
                  </div>

                  <div className="border-l-2 border-cyan-500 pl-4 py-1 ml-3">
                    <h4 className="text-lg font-semibold text-white">Web Development Certification</h4>
                    <p className="text-cyan-400">Coursera</p>
                    <p className="text-gray-400">2021</p>
                  </div>

                  <div className="border-l-2 border-cyan-500 pl-4 py-1 ml-3">
                    <h4 className="text-lg font-semibold text-white">UI/UX Design Course</h4>
                    <p className="text-cyan-400">Udemy</p>
                    <p className="text-gray-400">2020</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;