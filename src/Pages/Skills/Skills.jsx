import React from "react";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-16 max-w-11/12 mx-auto mt-4 rounded-lg bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 px-6 sm:px-16 lg:px-24"
        >
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
                My Skills
            </h2>

            {/* Frontend Skills */}
            <div className="mb-14">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
                    Frontend
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">JavaScript</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">React</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML5"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">HTML5</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30YZ6OxUYmrkohkH5iLGg2eIdN2rgWi9sJA&s"
                            alt="Tailwind CSS"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">Tailwind CSS</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://i.ibb.co.com/0pcq8kgB/daisyui.png"
                            alt="DaisyUI"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">DaisyUI</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                            alt="Firebase"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">Firebase</h3>
                    </div>
                </div>
            </div>

            {/* Backend Skills */}
            <div>
                <h3 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
                    Backend
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">Node.js</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            alt="Express.js"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">Express.js</h3>
                    </div>

                    <div className="card w-40 sm:w-48 bg-white shadow-md hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">MongoDB</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
