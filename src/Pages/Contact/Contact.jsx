import React, { useState } from 'react';
import { FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [message, setMessage] = useState({
        email: '',
        content: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Initialize EmailJS with your User ID
        emailjs.init('CQFGkL9DIdvV0-hAT');

        emailjs.send(
            'service_msp71o6', // Service ID
            'template_woelo6g', // Template ID
            {
                from_email: message.email,
                message: message.content,
                to_email: 'foysalhaque.mist.ipe@gmail.com',
                reply_to: message.email
            }
        )
            .then(() => {
                setSendStatus('Message sent successfully!');
                setMessage({ email: '', content: '' });
            })
            .catch((err) => {
                console.error('Failed to send:', err);
                setSendStatus('Failed to send message. Please try again or use alternative contact methods.');
            })
            .finally(() => {
                setIsSending(false);
                setTimeout(() => setSendStatus(''), 5000);
            });
    };

    return (
        <div id='contact' className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Email Form Section */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <FiSend className="text-green-500" />
                        Quick Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={message.email}
                                onChange={(e) => setMessage({ ...message, email: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Write your message here..."
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={message.content}
                                onChange={(e) => setMessage({ ...message, content: e.target.value })}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${isSending
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                                }`}
                        >
                            {isSending ? (
                                'Sending...'
                            ) : (
                                <>
                                    <FiSend /> Send Message
                                </>
                            )}
                        </button>
                        {sendStatus && (
                            <p className={`text-sm mt-2 text-center ${sendStatus.includes('success') ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {sendStatus}
                            </p>
                        )}
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold mb-6">Direct Contacts</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 rounded-full text-green-600 flex-shrink-0">
                                <FiMail size={20} />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                                <a
                                    href="mailto:foysalhaque.mist.ipe@gmail.com"
                                    className="text-gray-600 hover:text-green-600 hover:underline break-all"
                                >
                                    foysalhaque.mist.ipe@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600 flex-shrink-0">
                                <FiPhone size={20} />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                                <a
                                    href="tel:+8801234567890"
                                    className="text-gray-600 hover:text-blue-600 hover:underline"
                                >
                                    +880 1234 567890
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 rounded-full text-green-600 flex-shrink-0">
                                <FiMessageSquare size={20} />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 mb-1">WhatsApp</h4>
                                <h2>01614888875</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;