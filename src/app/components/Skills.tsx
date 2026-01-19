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
              <h3 className="text-2xl font-semibold text-white mb-8">Technical Expertise</h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-bold">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:h-4"
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Reveal key={index}>
                  <div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl text-center hover:from-gray-700 hover:to-gray-800 transition-all duration-500 border border-gray-700 hover:border-cyan-500/50 group shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                  >
                    <div className="text-4xl text-cyan-400 mb-3 group-hover:scale-125 transition-transform duration-500 bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      {tool.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg">{tool.name}</h4>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-white mb-6">Core Competencies</h3>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <h4 className="text-lg font-bold text-white flex items-center">
                      <span className="mr-2 text-cyan-400">•</span> Problem Solving
                    </h4>
                    <p className="text-gray-400">Analyzing complex challenges and developing efficient solutions</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <h4 className="text-lg font-bold text-white flex items-center">
                      <span className="mr-2 text-cyan-400">•</span> Team Collaboration
                    </h4>
                    <p className="text-gray-400">Working effectively with cross-functional teams</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <h4 className="text-lg font-bold text-white flex items-center">
                      <span className="mr-2 text-cyan-400">•</span> Project Management
                    </h4>
                    <p className="text-gray-400">Leading projects from conception to deployment</p>
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