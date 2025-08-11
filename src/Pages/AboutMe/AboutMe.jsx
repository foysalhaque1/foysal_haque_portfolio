import React from 'react';

const AboutMe = () => {
    return (
        <div >
            <section
                id="about"
                className="bg-gradient-to-r max-w-11/12 mt-4 from-indigo-50 via-purple-50 to-pink-50 py-16 px-4 sm:px-10 md:px-16 lg:px-24 shadow-lg rounded-lg  mx-auto"
            >
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">
                        About Me
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                        My journey into the tech world began out of curiosity, but it quickly grew into a deep interest in building interactive and user-friendly web experiences. Over time, I focused on <span className="font-semibold text-indigo-600">frontend development</span>, where I enjoy bringing designs to life and making websites not just functional, but enjoyable to use.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                        I love working on projects that challenge me to think creatively and solve problems — whether it’s refining UI details, improving performance, or experimenting with new frameworks and tools. The fast pace of frontend development excites me because there’s always something new to learn.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Outside of coding, I have a strong passion for <span className="font-semibold text-indigo-600">exploring new places</span>. Traveling helps me gain fresh perspectives, fuels my creativity, and reminds me of the diversity and beauty of the world beyond the screen. It’s this curiosity and drive to explore — in both technology and life — that shapes who I am, both as a developer and as a person.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;