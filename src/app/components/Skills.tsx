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
    { name: 'GitHub', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
    { name: 'Git Bash', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 11-1.103 1.03l-2.48-2.48v6.53a1.838 1.838 0 11-1.512-.122V8.744a1.838 1.838 0 01-.998-2.41L7.629 3.601.452 10.778a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.428-10.43a1.55 1.55 0 000-2.186z"/></svg> },
    { name: 'Figma', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 8.943h-4.588c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM4.618 11.968c0 1.664 1.354 3.018 3.019 3.018h3.117V8.949H7.637c-1.665 0-3.019 1.355-3.019 3.019zm0 7.471c0 1.664 1.354 3.019 3.019 3.019h3.117v-6.028H7.637c-1.665 0-3.019 1.345-3.019 3.009zm0-14.943c0 1.665 1.354 3.019 3.019 3.019h3.117V1.478H7.637C5.972 1.478 4.618 2.832 4.618 4.496zm8.117 7.472c0 2.476 2.014 4.49 4.49 4.49s4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49-4.49 2.014-4.49 4.49zm1.471 0c0-1.664 1.354-3.019 3.019-3.019s3.019 1.355 3.019 3.019-1.354 3.019-3.019 3.019-3.019-1.355-3.019-3.019z"/></svg> },
    { name: 'Vercel', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg> },
    { name: 'OpenAI Agents SDK', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.05.518 6.046 6.046 0 005.17 4.31a5.985 5.985 0 00-3.996 2.9 6.046 6.046 0 00.749 7.11 5.985 5.985 0 00.516 4.911 6.046 6.046 0 006.51 2.9A6.065 6.065 0 0013.95 23.5a6.046 6.046 0 005.88-3.792 5.985 5.985 0 003.996-2.9 6.046 6.046 0 00-.749-7.11 5.985 5.985 0 00.205.123zM13.95 21.784a4.508 4.508 0 01-2.893-1.05l.144-.08 4.81-2.778a.782.782 0 00.395-.678v-6.788l2.032 1.174a.072.072 0 01.04.055v5.617a4.524 4.524 0 01-4.528 4.528zm-9.735-4.155a4.505 4.505 0 01-.54-3.031l.144.086 4.81 2.778a.782.782 0 00.787 0l5.872-3.39v2.348a.072.072 0 01-.029.062l-4.862 2.808a4.524 4.524 0 01-6.182-1.66zm-1.268-10.5a4.506 4.506 0 012.354-1.982V10.8a.782.782 0 00.395.678l5.872 3.39-2.032 1.174a.072.072 0 01-.068.006l-4.862-2.808a4.524 4.524 0 01-1.66-6.182zm16.727 3.89L13.802 7.63l2.032-1.174a.072.072 0 01.068-.006l4.862 2.808a4.524 4.524 0 01-.7 8.164v-5.652a.782.782 0 00-.39-.678zm2.023-3.06l-.144-.085-4.81-2.778a.782.782 0 00-.787 0l-5.872 3.39V6.938a.072.072 0 01.029-.062l4.862-2.808a4.524 4.524 0 016.722 4.692zM10.14 13.625L8.108 12.45a.072.072 0 01-.04-.055V6.778a4.524 4.524 0 017.421-3.469l-.144.08-4.81 2.778a.782.782 0 00-.395.678zm1.104-2.384l2.615-1.51 2.615 1.51v3.02l-2.615 1.51-2.615-1.51z"/></svg> },
    { name: 'Node.js', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.994a.282.282 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.752a.28.28 0 00-.138.24v10.146c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.089c0 1.744-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 01-.922-1.604V6.994c0-.66.354-1.277.922-1.606L11.076.312a1.929 1.929 0 011.846 0l8.794 5.076c.57.329.924.946.924 1.606v10.077c0 .66-.354 1.273-.924 1.604l-8.794 5.078a1.848 1.848 0 01-.924.247z"/></svg> },
    { name: 'Next.js', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.572 0c-.176.001-.349.006-.523.014C5.598.269 1.34 4.6.138 10.153a11.977 11.977 0 009.42 13.68c2.59.463 5.27.125 7.644-.992L9.418 12.56V18.4H7.636V9.6h1.782l9.58 13.207a11.937 11.937 0 003.464-3.05L14.47 9.6h2.085l6.882 8.727A11.886 11.886 0 0024 11.977C23.924 5.344 18.565.088 11.935.002a12.36 12.36 0 00-.363-.002z"/></svg> },
    { name: 'Hugging Face', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 4a1.5 1.5 0 011.5 1.5c0 .53-.274.995-.688 1.262.688.345 1.188 1.042 1.188 1.858 0 .706-.35 1.328-.881 1.703.262.196.462.468.568.788h.063c.106-.32.306-.592.568-.788A2.126 2.126 0 0112.938 8.62c0-.816.5-1.513 1.187-1.858A1.494 1.494 0 0113.438 5.5 1.5 1.5 0 0114.938 4a1.5 1.5 0 010 3c-.17 0-.332-.03-.482-.083a1.625 1.625 0 00-.768 1.393c0 .622.35 1.157.862 1.428a1.627 1.627 0 00-.362.88h-4.376a1.627 1.627 0 00-.362-.88 1.627 1.627 0 00.862-1.428c0-.614-.316-1.15-.768-1.393A1.494 1.494 0 019.062 7a1.5 1.5 0 010-3 1.5 1.5 0 011.438 1.5zm-3 8.5c.828 0 1.5.895 1.5 2s-.672 2-1.5 2-1.5-.895-1.5-2 .672-2 1.5-2zm7 0c.828 0 1.5.895 1.5 2s-.672 2-1.5 2-1.5-.895-1.5-2 .672-2 1.5-2zm-3.5 5c1.38 0 2.5.448 2.5 1s-1.12 1-2.5 1-2.5-.448-2.5-1 1.12-1 2.5-1z"/></svg> },
    { name: 'Claude AI', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M4.709 15.955l4.71-2.758-1.094-1.873-6.062 3.552L4.709 15.955zm7.291.045c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7.291 6.455l2.446-1.079-6.062-3.552-1.094 1.873 4.71 2.758zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/></svg> },
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
                    <div className="text-cyan-400 mb-3 group-hover:scale-125 transition-transform duration-500 bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
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
                      <span className="mr-2 text-cyan-400">•</span> AI Agents & Chatbots
                    </h4>
                    <p className="text-gray-400">Building intelligent AI agents, custom chatbots, and automation solutions that work 24/7</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <h4 className="text-lg font-bold text-white flex items-center">
                      <span className="mr-2 text-cyan-400">•</span> Full Stack Development
                    </h4>
                    <p className="text-gray-400">End-to-end web applications from frontend design to backend APIs and deployment</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <h4 className="text-lg font-bold text-white flex items-center">
                      <span className="mr-2 text-cyan-400">•</span> Workflow Automation
                    </h4>
                    <p className="text-gray-400">Automating business processes with AI-powered tools to scale smarter and faster</p>
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