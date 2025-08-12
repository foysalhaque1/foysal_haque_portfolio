import React from 'react';

import myPhoto from '../../assets/foysal haque.jpg'

const Introdution = () => {
    return (
        <div id='home'  className=" mt-4  justify-between max-w-11/12 mx-auto flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8 lg:p-12 bg-base-200 rounded-2xl shadow-2xl">

           

            {/* Intro */}
            <div className="text-center lg:text-left space-y-3 sm:space-y-4">

                {/* Name with gradient */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                   Hello I am S.M. Foysal Haque
                </h1>

                {/* Designation badge */}
                <div className="badge badge-lg badge-primary text-white">
                    Frontend Web Developer
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg italic text-secondary font-medium">
                    "Turning ideas into beautiful, functional web experiences."
                </p>

                {/* Detailed intro */}
                <p className="text-sm sm:text-base lg:text-lg text-base-content leading-relaxed max-w-xl mx-auto lg:mx-0">
                  As a frontend web developer specializing in creating responsive, user-friendly interfaces using modern web technologies. I focus on building clean, efficient, and visually appealing solutions that enhance user experience.
                </p>
            </div>
             {/* Photo */}
            <div className="flex-shrink-0">
                <img
                    src={myPhoto}// replace with your photo path
                    alt="S.M. Foysal Haque"
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-primary shadow-lg transition-transform duration-500 hover:scale-105"
                />
            </div>

        </div>
    );
};

export default Introdution;