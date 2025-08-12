import React, { useState } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "I was impressed by foxsolution's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies. Also, their communication skills were great; it never felt like a long-distance project. It felt like fox solutions was working next door because their project manager was always keeping me updated. Initially.",
      author: "Benjamin Dorsinvil",
      position: "Founder, SellBig"
    },
    {
      id: 2,
      quote: "Working with foxsolution has been a pleasure. Their expertise in custom software development helped us transform our business processes. The team was responsive, detail-oriented, and delivered exactly what we needed within the timeline.",
      author: "Sarah Johnson",
      position: "CTO, TechInnovate"
    },
    {
      id: 3,
      quote: "foxsolution's development team exceeded our expectations. They not only understood our requirements perfectly but also suggested improvements we hadn't considered. The final product has significantly improved our operational efficiency by 40%.",
      author: "Michael Chen",
      position: "Operations Director, GlobalLogic"
    },
    {
      id: 4,
      quote: "The level of professionalism at foxsolution is outstanding. From project initiation to delivery, they maintained transparent communication and high-quality code. I particularly appreciated their agile approach and how they adapted to our changing requirements.",
      author: "Elena Rodriguez",
      position: "Product Manager, InnovateNow"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-4xl font-serif text-blue-900 self-start">"</div>
            <div className="flex-1">
              <div className="text-lg text-gray-700 mb-6">
                {testimonials[currentIndex].quote}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
                </div>
                <div>
                  <div className="font-medium text-blue-900">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentIndex].position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          
          <a href="#" className="text-red-500 hover:text-red-700 flex items-center gap-1 font-medium">
            All Reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;