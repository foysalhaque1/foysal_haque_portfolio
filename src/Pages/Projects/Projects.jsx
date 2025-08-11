import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useNavigate } from 'react-router';


const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                setLoading(false);
            });
    }, []);

    const handleViewDetails = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    if (loading) return <div className="text-center py-12">Loading projects...</div>;

    return (
        <section id="projects" className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 px-4 sm:px-10 md:px-16 lg:px-24 shadow-lg rounded-lg mx-auto max-w-11/12 mt-4">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-8">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            <div className="h-48 overflow-hidden mt-2">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{project.brief}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                                    <button
                                        onClick={() => handleViewDetails(project.id)}
                                        className="flex-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                    >
                                        View Details
                                    </button>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center p-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                            title="Live Demo"
                                        >
                                            <FiExternalLink />
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center p-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                            title="GitHub"
                                        >
                                            <FiGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;