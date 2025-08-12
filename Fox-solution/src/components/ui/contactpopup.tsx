import { useState } from 'react';
import { X, Mail, Upload, ChevronRight, Check, Calendar } from 'lucide-react';
import BookingConsultation from '../ui/BookingConsultant';

const ContactPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        file: null
    });
    const [showBooking, setShowBooking] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
                <div className="bg-blue-950 rounded-xl shadow-2xl w-full max-w-5xl animate-fade-in text-white my-4 max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="border-b border-black p-4 sm:p-6 flex justify-between items-center sticky top-0 bg-blue-950 z-10">
                        <h2 className="text-3xl font-bold">FoxSolutions</h2>
                        <button
                            onClick={onClose}
                            className="text-blue-300 hover:text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Body - Two column layout */}
                    <div className="p-4 sm:p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* Left Column - Contact Form */}
                            <div>
                                <div className="flex items-center text-white mb-6 flex-wrap">
                                    <Mail size={20} className="mr-2" />
                                    <span className="text-sm sm:text:text-base md:text-lg">Email us: <span className="font-semibold">support@foxsolution.com</span></span>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1 sm:mb-2">
                                            Full Name<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black placeholder-gray-600"
                                            placeholder="John Smith"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1 sm:mb-2">
                                            Email Address<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black placeholder-gray-600"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1 sm:mb-2">
                                            Message<span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white border border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-black placeholder-gray-600"
                                            placeholder="Describe your idea"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1 sm:mb-2">
                                            Choose File
                                        </label>
                                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                            <label className="cursor-pointer flex-1 min-w-0">
                                                <div className="px-3 py-2 sm:px-4 sm:py-3 bg-white border-2 border-dashed border-blue-700 rounded-lg flex items-center gap-2 sm:gap-3 transition-colors">
                                                    <Upload size={18} className="text-black" />
                                                    <span className="text-xs sm:text-sm truncate text-gray-600 overflow-hidden">
                                                        {formData.file ? formData.file.name : 'No file chosen'}
                                                    </span>
                                                </div>
                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                            {formData.file && (
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                                                    className="text-xs sm:text-sm text-blue-300 hover:text-white transition-colors whitespace-nowrap"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                        <p className="mt-1 sm:mt-2 text-xs text-white">
                                            Your data is protected in accordance with our Privacy Notice.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-48 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg"
                                        >
                                            Send
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowBooking(true)}
                                            className="w-full sm:w-64 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                                        >
                                            <Calendar className="mr-2" size={20} />
                                            Book Consultation
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Column - Information */}
                            <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                                {/* Premium Services Card */}
                                <div className="bg-blue-800/30 border border-blue-700 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-xl sm:text-xl font-semibold text-white mb-3 sm:mb-4">Premium Services</h3>
                                    <p className="text-blue-100 mb-4 sm:mb-5 text-sm sm:text-base">
                                        Our team provides expert services tailored to your business needs.
                                    </p>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {['Fast response time', 'Expert consultation', 'Professional outcomes'].map((item) => (
                                            <li key={item} className="flex items-start">
                                                <Check size={18} className="text-green-400 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                                                <span className="text-blue-100 text-sm sm:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Security Card */}
                                <div className="bg-blue-800/30 border border-blue-700 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Security and Confidentiality</h3>
                                    <p className="text-blue-100 text-xs sm:text-sm">
                                        We are committed to protecting and respecting your privacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Consultation Modal */}
            {showBooking && (
                <BookingConsultation onClose={() => setShowBooking(false)} />
            )}
        </>
    );
};

export default ContactPopup;