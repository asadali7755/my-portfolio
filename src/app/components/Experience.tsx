import React from 'react';
import { Reveal } from './Reveal';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise applications using React and TypeScript. Implemented design systems and component libraries to improve development efficiency by 40%.',
      achievements: [
        'Improved application performance by 35%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for clients across various industries. Collaborated with UX designers to implement pixel-perfect interfaces.',
      achievements: [
        'Built 15+ client projects',
        'Reduced load times by 50%',
        'Implemented automated testing'
      ]
    },
    {
      id: 3,
      role: 'Junior Web Developer',
      company: 'Creative Web Agency',
      period: '2018 - 2020',
      description: 'Created websites and web applications for small businesses. Maintained and updated existing client sites.',
      achievements: [
        'Delivered 30+ websites',
        'Learned modern development practices',
        'Assisted in SEO optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Work <span className="text-cyan-400">Experience</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              My professional journey and the experiences that shaped my career as a developer.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyan-500/20 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id}>
                <div
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-cyan-400 text-lg mb-3">{exp.company}</h4>
                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      <div className="mt-4">
                        <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-cyan-400 mr-2">✓</span>
                              <span className="text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="md:absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:px-8"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;