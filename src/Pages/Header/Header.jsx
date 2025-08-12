import React from 'react';
import myLogo from '../../assets/my logo.png';
import { FiDownload, FiHome, FiUser, FiCode, FiBook, FiFolder, FiMail } from 'react-icons/fi';

const Header = () => {
    const handleDownloadResume = () => {
        // Direct users to your Google Drive link
        window.open(
            'https://drive.google.com/file/d/1jjSxZHdmFzk2IoIPxMfzO6ooNZV72htL/view?usp=sharing',
            '_blank' // Opens in new tab
        );
    };

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo + Name */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={myLogo}
                            alt="Foysal Haque"
                            className="w-9 h-9 rounded-full border-2 border-indigo-100 object-cover"
                        />
                        <a href="#home" className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
                            Foysal <span className="text-indigo-600">Haque</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <FiHome className="mr-1" /> Home
                        </a>
                        <a href="#about" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <FiUser className="mr-1" /> About
                        </a>
                        <a href="#skills" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <FiCode className="mr-1" /> Skills
                        </a>
                        <a href="#education" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <FiBook className="mr-1" /> Education
                        </a>
                        <a href="#projects" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <FiFolder className="mr-1" /> Projects
                        </a>
                        <a href="#contact" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <FiMail className="mr-1" /> Contact
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <button
                        onClick={handleDownloadResume}
                        className="hidden md:flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                    >
                        <FiDownload className="inline mr-2" />
                        View Resume
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-600 hover:text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu (Dropdown) */}
                <div className="md:hidden mt-3 py-2 px-4 bg-white rounded-lg shadow-lg border border-gray-100">
                    <a href="#home" className="block py-2 text-gray-600 hover:text-indigo-600"><FiHome className="inline mr-2" /> Home</a>
                    <a href="#about" className="block py-2 text-gray-600 hover:text-indigo-600"><FiUser className="inline mr-2" /> About</a>
                    <a href="#skills" className="block py-2 text-gray-600 hover:text-indigo-600"><FiCode className="inline mr-2" /> Skills</a>
                    <a href="#education" className="block py-2 text-gray-600 hover:text-indigo-600"><FiBook className="inline mr-2" /> Education</a>
                    <a href="#projects" className="block py-2 text-gray-600 hover:text-indigo-600"><FiFolder className="inline mr-2" /> Projects</a>
                    <a href="#contact" className="block py-2 text-gray-600 hover:text-indigo-600"><FiMail className="inline mr-2" /> Contact</a>
                    <a
                        href="https://drive.google.com/file/d/1jjSxZHdmFzk2IoIPxMfzO6ooNZV72htL/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-2 py-2 text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        <FiDownload className="inline mr-2" />
                        View Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;