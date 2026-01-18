import React from 'react';
import { Reveal } from './Reveal';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online shopping platform with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/image/project1.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects with team collaboration features.',
      technologies: ['Next.js', 'TypeScript', 'Firebase'],
      image: '/image/project2.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/image/project3.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecasts and location-based services.',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      image: '/image/project4.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media accounts with data visualization.',
      technologies: ['React', 'Redux', 'D3.js'],
      image: '/image/project5.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Application for tracking workouts, nutrition, and health metrics.',
      technologies: ['React Native', 'GraphQL', 'PostgreSQL'],
      image: '/image/project6.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My <span className="text-cyan-400">Projects</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Here are some of my recent projects that showcase my skills and expertise in web development.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <div
                className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-gray-300 transition-colors flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;