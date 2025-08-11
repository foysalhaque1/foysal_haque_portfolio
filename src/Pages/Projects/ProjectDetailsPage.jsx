import React, { useState, useEffect } from 'react';

import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
                const foundProject = data.find(p => p.id === parseInt(id));
                setProject(foundProject);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading project:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-12">Loading project details...</div>;
    if (!project) return <div className="text-center py-12">Project not found</div>;

    return (
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
                >
                    <FiArrowLeft className="mr-2" /> Back to Projects
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 md:w-1/2">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.name}</h1>
                            <p className="text-gray-600 mb-6">{project.description}</p>

                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-3">Technology Stack</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mb-8">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <FiExternalLink className="mr-2" />
                                    Live Project
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                                >
                                    <FiGithub className="mr-2" />
                                    GitHub Repository
                                </a>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Challenges Faced</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {project.challenges.map((challenge, index) => (
                                            <li key={index}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Future Improvements</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {project.improvements.map((improvement, index) => (
                                            <li key={index}>{improvement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;