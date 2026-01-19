import React from 'react';
import { Reveal } from './Reveal';

const Contact = () => {
  return (
    <section id="contact" className=" w-full h-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact <span className="text-cyan-400">Me</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          <Reveal>
            <div className="w-full h-full">
              <div className=" w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-6 text-center">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 rounded-xl mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center flex-grow">
                      <h4 className="text-base font-bold text-white mr-2">Phone:</h4>
                      <p className="text-gray-300 text-sm flex-grow">+92 327 8262792</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 rounded-xl mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center flex-grow">
                      <h4 className="text-base font-bold text-white mr-2">WhatsApp:</h4>
                      <p className="text-gray-300 text-sm flex-grow">+92 311 5086688</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 rounded-xl mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center flex-grow">
                      <h4 className="text-base font-bold text-white mr-2">Email:</h4>
                      <p className="text-gray-300 text-sm flex-grow">leoali851@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 rounded-xl mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center flex-grow">
                      <h4 className="text-base font-bold text-white mr-2">Location:</h4>
                      <p className="text-gray-300 text-sm flex-grow">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;