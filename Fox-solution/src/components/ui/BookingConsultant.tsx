import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { X, ChevronLeft, Calendar, Check, Users, Shield, Clock } from 'lucide-react';

const BookingConsultation = ({ onClose }: { onClose: () => void }) => {
    const [step, setStep] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<Date>(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    });
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        guests: [],
        newGuestEmail: '',
        acceptCommunications: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Generate 45-minute time slots from 9 AM to 6 PM
    const generateTimeSlots = () => {
        const startHour = 9;
        const endHour = 19;
        const slots = [];

        for (let hour = startHour; hour < endHour; hour++) {
            // Add full hour slot
            slots.push(formatTime(hour, 0));

            // Add 30-minute slot except for the last hour
            if (hour < endHour - 1) {
                slots.push(formatTime(hour, 30));
            }
        }
        return slots;
    };

    const formatTime = (hour, minutes) => {
        const date = new Date();
        date.setHours(hour);
        date.setMinutes(minutes);
        return date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    const timeSlots = generateTimeSlots();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddGuest = () => {
        if (formData.newGuestEmail && formData.guests.length < 10) {
            setFormData(prev => ({
                ...prev,
                guests: [...prev.guests, prev.newGuestEmail],
                newGuestEmail: ''
            }));
        }
    };

    const handleRemoveGuest = (index) => {
        setFormData(prev => ({
            ...prev,
            guests: prev.guests.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            guests: formData.guests,
            acceptCommunications: formData.acceptCommunications,
            selectedDate,
            selectedTime,
        };

        try {
            const res = await fetch('http://localhost:5000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (!res.ok) throw new Error('Failed to save booking');

            alert('Booking confirmed and saved!');
            onClose();
        } catch (err) {
            console.error(err);
            alert('Failed to save booking. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50 p-2 overflow-y-auto pt-4 sm:pt-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-2xl w-full max-w-2xl animate-fade-in mb-8">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl p-4 flex justify-between items-center text-white">
                    <button
                        onClick={step === 1 ? onClose : () => setStep(1)}
                        className="text-white hover:text-blue-200 p-1 rounded-full transition-colors duration-200"
                    >
                        {step === 1 ? <X size={24} /> : <ChevronLeft size={24} />}
                    </button>
                    <h2 className="text-xl font-bold text-white">
                        {step === 1 ? 'Book a Consultation' : 'Complete Your Booking'}
                    </h2>
                    <div className="w-6"></div> {/* Spacer for alignment */}
                </div>

                {/* Step indicator */}
                <div className="flex justify-center py-4">
                    <div className="flex items-center space-x-4 text-sm">
                        <div className={`flex items-center ${step === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${step === 1 ? 'bg-blue-600 text-white' : step > 1 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                                {step > 1 ? <Check size={16} /> : '1'}
                            </div>
                            <span className="ml-2 font-medium">Choose Time</span>
                        </div>
                        <div className={`h-px w-8 ${step > 1 ? 'bg-green-500' : 'bg-gray-300'} transition-colors duration-300`}></div>
                        <div className={`flex items-center ${step === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                2
                            </div>
                            <span className="ml-2 font-medium">Your Info</span>
                        </div>
                    </div>
                </div>

                {/* Step 1: Date and Time Selection */}
                {step === 1 && (
                    <div className="p-4 sm:p-6 justify-items-center">
                        <div className="text-center mb-6 ">
                            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-3">
                                <Calendar size={24} className="text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Meet with Priya</h2>
                            <p className="text-gray-600">
                                Select a date and time for your 30-minute consultation.
                            </p>
                        </div>

                        {/* Calendar section with shadow */}
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date: Date) => {
                                setSelectedDate(date);
                                setSelectedTime(null); // reset time on date change
                            }}
                            minDate={new Date()}
                            inline
                            className="w-full bg-blue-300"
                        />

                        {/* Time slots section */}
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <Clock size={18} className="text-blue-600 mr-2" />
                                <label className="font-medium text-gray-700">
                                    Available Time Slots
                                </label>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`border-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${selectedTime === time
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Continue Button */}
                        <div className="flex justify-center py-4">
                            <button
                                onClick={() => step === 1 && selectedTime && setStep(2)}
                                disabled={!selectedTime}
                                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${selectedTime
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Continue to Details
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: User Information */}
                {step === 2 && (
                    <div className="p-4 sm:p-6">
                        <div className="mb-6 p-4 bg-blue-100 rounded-lg shadow-inner border border-blue-200">
                            <div className="flex items-start">
                                <Calendar size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">
                                        {selectedDate.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        {selectedTime}
                                        <button
                                            onClick={() => setStep(1)}
                                            className="ml-2 text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors duration-200"
                                        >
                                            Edit
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        First name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your email address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center mb-4">
                                    <Users size={18} className="text-blue-600 mr-2" />
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Add guests
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Invite up to 10 guests to join your consultation meeting.
                                </p>

                                <div className="flex gap-2 mb-4">
                                    <input
                                        type="email"
                                        value={formData.newGuestEmail}
                                        onChange={(e) => setFormData({ ...formData, newGuestEmail: e.target.value })}
                                        placeholder="Add an email address..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddGuest}
                                        disabled={!formData.newGuestEmail || formData.guests.length >= 10}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                                    >
                                        Add
                                    </button>
                                </div>

                                <p className="text-sm text-gray-600 mb-4">
                                    Added <strong>{formData.guests.length}/10 guests</strong>
                                </p>

                                {formData.guests.length > 0 && (
                                    <div className="space-y-2">
                                        {formData.guests.map((guest, index) => (
                                            <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                                                <span className="font-medium text-gray-700">{guest}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveGuest(index)}
                                                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center mb-4">
                                    <Shield size={18} className="text-blue-600 mr-2" />
                                    <h3 className="text-lg font-bold text-gray-800">Data privacy</h3>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-inner border border-gray-200 text-sm text-gray-600 space-y-3">
                                    <p>
                                        FoxSolutions is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us.
                                    </p>
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="acceptCommunications"
                                            name="acceptCommunications"
                                            checked={formData.acceptCommunications}
                                            onChange={(e) => setFormData({ ...formData, acceptCommunications: e.target.checked })}
                                            className="mt-1 mr-2"
                                        />
                                        <label htmlFor="acceptCommunications" className="cursor-pointer">
                                            I agree to receive other communications from FoxSolutions.
                                        </label>
                                    </div>
                                    <p>
                                        By clicking confirm below, you consent to allow FoxSolutions to store and process the personal information submitted above to provide you the content requested.
                                    </p>
                                </div>
                            </div>


                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >

                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : 'Confirm Booking'}

                                </button>

                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingConsultation;