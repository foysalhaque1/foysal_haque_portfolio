import React from 'react';

const Education = () => {
    return (
        <div>
            <section
                id="education"
                className="bg-gradient-to-r max-w-11/12 mt-4 from-indigo-50 via-purple-50 to-pink-50 py-16 px-4 sm:px-10 md:px-16 lg:px-24 shadow-lg rounded-lg mx-auto"
            >
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8">
                        Education Journey
                    </h2>
                    
                    {/* Education Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden lg:block absolute h-full w-1 bg-indigo-200 left-1/2 transform -translate-x-1/2"></div>
                        
                        {/* Military Institute card */}
                        <div className="relative mb-12 lg:w-1/2 lg:ml-auto lg:pl-12 cursor-pointer">
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Military Institute of Science & Technology</h3>
                                </div>
                                <p className="text-indigo-600 font-medium mb-2">B.Sc. in Industrial & Production Engineering</p>
                                <p className="text-gray-600 mb-3">2016 - 2020</p>
                                <p className="text-gray-700">
                                    Comprehensive engineering program focusing on manufacturing systems, operations management, and industrial optimization techniques.
                                </p>
                            </div>
                            {/* Connector for mobile */}
                            <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-0 h-10 border-l-2 border-dashed border-indigo-300"></div>
                        </div>
                        
                        {/* Cantonment Public School card */}
                        <div className="relative lg:w-1/2 lg:pr-12 lg:mr-auto cursor-pointer">
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Cantonment Public School & College, Rangpur</h3>
                                </div>
                                <p className="text-purple-600 font-medium mb-2">Higher Secondary Certificate (HSC)</p>
                                <p className="text-gray-600 mb-3">2013 - 2015</p>
                                <p className="text-gray-700">
                                    Completed higher secondary education with focus on science stream, laying foundation for analytical thinking and problem-solving skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional note */}
                    <div className="mt-12 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                        <h3 className="text-lg font-semibold text-indigo-700 mb-3">Continuous Learning</h3>
                        <p className="text-gray-700">
                            Beyond formal education, I actively pursue knowledge in frontend technologies through online courses, workshops, and personal projects to stay at the forefront of web development.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;