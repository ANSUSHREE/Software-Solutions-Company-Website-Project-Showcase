import { useState } from 'react';
import { Mail, Phone, MapPin, Users, ArrowRight } from 'lucide-react';

const RevealOnScroll = ({ children, className = '', delay = 0 }) => {
  // Simplified component for demo purposes
  return <div className={className}>{children}</div>;
};

const AnimatedButton = ({ children, type, size, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-lg font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'There was an error submitting your form. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: 'Call Us',
      content: '+91(953)263-4109',
      action: 'tel:+91(953)263-4109',
      actionText: 'Call now'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: 'Email Us',
      content: 'support@foxsolution.com',
      action: 'mailto:support@foxsolution.com',
      actionText: 'Send email'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: 'Visit Us',
      content: 'Noida-Greater Noida Expy, Sector 144',
      action: 'https://maps.google.com',
      actionText: 'Get directions'
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: 'Our Team',
      content: 'Available 24/7 for enterprise clients',
      action: '/about',
      actionText: 'Meet our experts'
    },
  ];

  const projectTypes = [
    'Website Development',
    'Mobile Application',
    'Enterprise Software',
    'E-commerce Solution',
    'UI/UX Design',
    'Digital Transformation',
    'AI & Machine Learning',
    'Cloud Migration',
    'Other'
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '/linked-in.svg', url: 'https://linked-in.com' },
    { name: 'Twitter', icon: '/twitter.png', url: 'https://twitter.com' },
    { name: 'Facebook', icon: '/facebook.svg', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '/instagram.svg', url: 'https://instagram.com' }
  ];

  return (
    <section id="contact" className="py-10 container px-4 mx-auto bg-blue-950 rounded-lg relative overflow-hidden">
      {/* Animated Background Elements - Reduced size */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-400 opacity-5 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-indigo-500 opacity-10 blur-2xl"></div>
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 font-medium text-sm tracking-wide mb-3 backdrop-blur-sm">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Transform Your Vision <span className="text-blue-300">Into Reality</span>
            </h2>
            <p className="text-base text-blue-200 max-w-xl mx-auto -mb-2">
              Our team is ready to help you achieve your business goals with cutting-edge tech solutions.
            </p>
          </div>
        </RevealOnScroll>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Information Card - Reduced padding */}
        <RevealOnScroll className="lg:col-span-5">
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl shadow-xl p-6 h-full border border-blue-700/30 relative z-10 backdrop-blur-sm">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full z-0"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center text-white flex-shrink-0 transform group-hover:scale-105 transition-all duration-300 shadow-md shadow-blue-600/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-200 text-base mb-0.5">{item.title}</h4>
                      <p className="text-white text-sm mb-1">{item.content}</p>
                      {item.action && (
                        <a
                          href={item.action}
                          className="text-xs font-medium text-blue-300 hover:text-blue-200 flex items-center gap-1 group-hover:underline"
                          target={item.action.startsWith('http') ? "_blank" : ""}
                          rel="noopener noreferrer"
                        >
                          {item.actionText}
                          <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-700/30 pt-5">
                <h4 className="font-semibold text-white mb-4 text-sm">Follow Our Journey</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-800/50 hover:bg-blue-600 transition-colors duration-300 shadow-md shadow-blue-800/20 border border-blue-700/30"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <img
                        src={social.icon}
                        alt={`${social.name} icon`}
                        className="w-4 h-4 opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Contact Form Card - Reduced padding */}
        <RevealOnScroll delay={200} className="lg:col-span-7">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-blue-700/20 relative z-10">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-400/10 rounded-full z-0"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-5">Start Your Project</h3>

              {formStatus.isSubmitted ? (
                <div className="bg-gradient-to-br from-green-900/70 to-green-800/70 border border-green-700/50 rounded-xl p-8 text-center backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Received!</h4>
                  <p className="text-green-200 mb-6 text-base">
                    Thank you for reaching out. One of our experts will contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300 font-medium shadow-lg shadow-blue-500/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="bg-red-900/50 border border-red-700/50 rounded-lg p-3 text-red-200 mb-4 text-sm">
                      {formStatus.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs font-medium text-blue-200 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-blue-700/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all text-white placeholder-blue-300/70 text-sm"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-xs font-medium text-blue-200 mb-1">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-blue-700/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all text-white placeholder-blue-300/70 text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="phone" className="block text-xs font-medium text-blue-200 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-blue-700/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all text-white placeholder-blue-300/70 text-sm"
                        placeholder="+91(953)263-4109"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="company" className="block text-xs font-medium text-blue-200 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-blue-700/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all text-white placeholder-blue-300/70 text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="projectType" className="block text-xs font-medium text-blue-200 mb-1">
                      What Service Are You Interested In?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-blue-700/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all text-white text-sm"
                    >
                      <option value="" className="bg-blue-900 text-white">Select a Service</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-blue-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-xs font-medium text-blue-200 mb-1">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-blue-700/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all text-white placeholder-blue-300/70 text-sm"
                      placeholder="Tell us about your project goals and requirements..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className="h-4 w-4 bg-white/10 border-blue-700/30 rounded text-blue-500 focus:ring-blue-500"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-xs text-blue-200">
                      I agree to the <a href="#" className="text-blue-300 hover:underline">Privacy Policy</a> and consent to being contacted.
                    </label>
                  </div>

                  <div>
                    <AnimatedButton
                      type="submit"
                      size="md"
                      className="w-full md:w-auto px-6 py-2.5 text-base shadow-lg shadow-blue-600/20 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white"
                      disabled={formStatus.isSubmitting}
                    >
                      {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                    </AnimatedButton>
                    <p className="mt-2 text-xs text-blue-300">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute top-1/3 right-0 transform -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full filter blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300/10 rounded-full filter blur-2xl"></div>
    </section>
  );
}

export default Contact;