import React from 'react';

const Experience = () => {
    return (
        <div>
            <section
                id="experience"
                className="bg-gradient-to-r max-w-11/12 mt-4 from-indigo-50 via-purple-50 to-pink-50 py-16 px-4 sm:px-10 md:px-16 lg:px-24 shadow-lg rounded-lg mx-auto"
            >
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8">
                        Professional Journey
                    </h2>
                    
                    {/* Experience Timeline */}
                    <div className="space-y-10">
                        {/* Epyllion Group */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-0 h-full w-1 bg-indigo-200 group-first:hidden"></div>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Epyllion Group</h3>
                                        <p className="text-purple-600 font-medium">Executive - CAD Section</p>
                                        <p className="text-gray-500 text-sm">2021 - 2024</p>
                                    </div>
                                </div>
                                <div className="pl-2 sm:pl-16">
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Managed fabric consumption and optimization, reducing waste by <span className="font-semibold text-purple-600">15%+</span> through pattern engineering</li>
                                        <li>Developed CAD patterns and markers to maximize fabric utilization</li>
                                        <li>Collaborated with design and production teams to implement efficient cutting plans</li>
                                        <li>Implemented digital solutions to streamline the pattern-making process</li>
                                    </ul>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Pattern Engineering</span>
                                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Fabric Optimization</span>
                                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">CAD Software</span>
                                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Process Improvement</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Oporajeo Limited */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-0 h-full w-1 bg-indigo-200"></div>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Oporajeo Limited</h3>
                                        <p className="text-indigo-600 font-medium">Production Engineer</p>
                                        <p className="text-gray-500 text-sm">2020</p>
                                    </div>
                                </div>
                                <div className="pl-2 sm:pl-16">
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Monitored and optimized production processes in garment manufacturing</li>
                                        <li>Conducted time studies and workflow analysis to identify efficiency improvements</li>
                                        <li>Assisted in quality control measures and production line troubleshooting</li>
                                        <li>Gained hands-on experience with industrial production systems</li>
                                    </ul>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">Production Monitoring</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">Process Optimization</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">Quality Control</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">Industrial Engineering</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Career Transition Note */}
                        <div className="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200">
                            <h3 className="text-lg font-semibold text-indigo-700 mb-3">Engineering to Frontend Development</h3>
                            <p className="text-gray-700 mb-3">
                                My experience in production engineering and CAD optimization cultivated strong analytical and problem-solving skills that I now apply to frontend development. The precision required in pattern engineering translates beautifully to crafting pixel-perfect UIs, while production optimization experience informs my approach to performance optimization in web applications.
                            </p>
                            <p className="text-gray-700">
                                This unique background gives me a systems-thinking perspective when approaching development challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;