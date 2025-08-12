import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { useState, useCallback, useEffect } from 'react';
import TestimonialCarousel from '@/components/ui/Testimonial';
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import { Link } from "react-router-dom";
import { Monitor, ShoppingCart, Plane, Car, FileText, Building, Briefcase, Tv, Stethoscope, BarChart2 } from 'lucide-react';
  import { Settings, ClipboardCheck, DollarSign, Star, Shield, Target } from 'lucide-react';

const HeroSection = () => {
    return (
        <>
            <RevealOnScroll>
                <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
                    <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white hover:text-pink-400 transition-colors duration-200'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/services" className='text-white hover:text-pink-400 transition-colors duration-200'>Services</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>ChatGPT development services</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                </RevealOnScroll>

            <RevealOnScroll>
            <section id="hero" className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-16 sm:py-20 px-4 md:px-16 lg:px-20 -mt-4 sm:-mt-6 md:-mt-8">
  <div className="max-w-5xl mx-auto text-center md:text-left md:ml-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      Custom <span className="text-blue-500">Chatgpt</span> development & <br className="hidden sm:block" />Integration Services
    </h1>
    <p className="text-base sm:text-lg mt-4 sm:mt-6 text-gray-300 max-w-3xl mx-auto md:mx-0">
      We develop tailored custom solutions powered by ChatGPT and advanced OpenAI models.
    </p>
    
    <div className="grid grid-cols-1 gap-3 sm:gap-4 text-base sm:text-lg mt-6 sm:mt-8 text-gray-100">
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
          <span>ChatGPT-powered applications</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
          <span>Integration with PGT-4, GPT-3.5 and other OpenAI models</span>
        </li>
      </ul>
    </div>
    
    {/* Mobile-optimized buttons and rating section */}
    <div className="mt-8 sm:mt-10 flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:items-center md:gap-6">
      {/* First button - full width on mobile */}
      <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold px-5 py-3 sm:py-2 transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-full md:w-fit">
        Free quote
      </button>
      
      {/* Second button - full width on mobile */}
      <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold px-5 py-3 sm:py-2 transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-full md:w-fit">
        Book a consaltation
      </button>
      
      {/* Rating section - flex layout changes on mobile vs desktop */}
      <div className="text-sm text-gray-300 flex flex-row md:flex-col items-center md:items-start justify-center gap-3 md:gap-0 mt-4 md:mt-0">
        <div>Clients rate our services</div>
        <div className="text-yellow-400 text-xl font-bold md:mt-1">★★★★★ 5.0</div>
      </div>
    </div>
  </div>
</section>
            </RevealOnScroll>
        </>
    );
};

const Logos = () => {
    const logos = [
        {
            name: 'Toyota',
            svg: (
                <img
                    src="https://sumatosoft.com/wp-content/uploads/2022/12/5c98e3297e3bc92bd580af14_toyota_l-1.svg"
                    alt="Toyota Logo"
                    className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                />
            )
        },
        {
            name: 'Desai',
            svg: (
                <img src="https://sumatosoft.com/wp-content/uploads/2022/12/5ecce35506c123c4936b0303_dexai-logo-1.svg" alt="Desai logo"
                    className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

            )
        },
        {
            name: 'Beiersdorf',
            svg: (
                <img src="https://sumatosoft.com/wp-content/uploads/2022/12/5ecba50d2b50b63a7a1871ad_beiersdorf-logo-1.svg" alt="Beiersdorf logo"
                    className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

            )
        },
        {
            name: 'SMI',
            svg: (
                <img src="https://sumatosoft.com/wp-content/uploads/2024/10/SMI_Logo-1-2-2.svg" alt="SMI logo"
                    className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />


            )
        },
        {
            name: 'ClimeCo',
            svg: (
                <img src="https://sumatosoft.com/wp-content/uploads/2025/01/ClimeCo.svg" alt="ClimeCo logo"
                    className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

            )
        },
        {
            name: 'Tartle',
            svg: (
                <img src="	https://sumatosoft.com/wp-content/uploads/2025/01/Tartle.svg" alt="Tartle logo"
                    className="w-24 h-24 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />


            )
        },
        // {
        //     name: 'Nika Group',
        //     svg: (
        //         <img src="https://sumatosoft.com/wp-content/uploads/2025/01/TL-Nika.svg" alt="NikeGroup logo"
        //             className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

        //     )
        // },
    ]
    return (
     
      <section className='mb-0 -mt-16 sm:-mt-20 md:-mt-28'>
      <div className='bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 -mt-2'>
        <div className='mx-auto max-w-7xl px-2 sm:px-4 mt-0'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 sm:gap-4 items-center justify-center'>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-1 sm:p-2 transition-all duration-300 hover:bg-white rounded-lg"
              >
                <div className='relative group'>
                  {logo.svg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
        
    )
}

const ChatGPTServices = () => {
    const services = [
        {
            title: "ChatGPT consultation",
            description: "We work closely with Clients to brainstorm and refine their app ideas, leveraging ChatGPT's capabilities to ensure their solutions align with cutting-edge technology and industry trends.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L8 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H16L12 2Z" />
                    <path d="M7 11H17M7 15H13" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "ChatGPT development",
            description: "We create robust, scalable solutions using OpenAI's advanced models. Our ChatGPT development services start with a comprehensive business analysis to identify use cases where ChatGPT can benefit your business. Then, we develop applications that feature exceptional performance, security, and value for the business.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 10L7 12L9 14M15 10L17 12L15 14" strokeLinecap="round" />
                    <circle cx="17" cy="19" r="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Customization",
            description: "Our experts tailor OpenAI models to meet the needs of your application. We fine-tune models for specific industries and use cases, train them on custom datasets, and optimize for particular business goals.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="17" cy="12" r="3" />
                    <path d="M8 9H11M8 12H11M8 15H11" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "ChatGPT integration",
            description: "We seamlessly embed ChatGPT into any app's architecture. We design user-friendly interfaces that connect the capabilities of OpenAI models with your application, develop robust APIs, and ensure that ChatGPT enriches user experiences without compromising app performance.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                    <path d="M10 7h4M7 10v4M17 10v4M10 17h4" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "ChatGPT solutions",
            description: "We provide end-to-end solutions for customer support automation, content creation, virtual assistance, language translation, sales & lead generation, healthcare assistants, chatbots, and much more. From concept to deployment, our team delivers functional solutions to different industries.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l2 2" strokeLinecap="round" />
                    <path d="M9 2l-2 2m10-2l2 2M2 9l2 2m16-2l2 2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Testing",
            description: "Our team conducts thorough testing, including real-world scenarios, edge cases, and stress tests, to guarantee smooth, reliable, and engaging interactions. From debugging to user experience optimization, we ensure everything works flawlessly.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
                    <rect x="17" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Maintenance and support",
            description: "After the integration, we provide continuous support and maintenance. Our goal is to keep your app, and ChatGPT features running at peak performance. Our team monitors for technology updates, manages model improvements, fine-tunes them based on new data, and introduces new features if necessary.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M5 5l2 2m12 12l-2-2" strokeLinecap="round" />
                    <path d="M12 9v3l2 2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "ChatGPT modernization",
            description: "We upgrade and enhance existing ChatGPT implementations, ensuring they stay up-to-date with the latest advancements in OpenAI technology. From performance optimization to improved response times, enhanced security, and integrating new features – we ensure your app stays ahead of competitors.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v8" strokeLinecap="round" />
                    <path d="M8 12h8" strokeLinecap="round" />
                    <path d="M7.5 7.5l9 9" strokeLinecap="round" />
                    <path d="M7.5 16.5l9-9" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Independent testing",
            description: "We provide unbiased testing services to evaluate your ChatGPT application's performance, security, and usability. Our detailed analysis helps identify areas for improvement and ensures the highest quality standards are met.",
            icon: (
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="15" rx="2" />
                    <path d="M8 21h8M12 18v3" strokeLinecap="round" />
                    <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
                </svg>
            )
        }
    ];

    return (
      <RevealOnScroll>
      <section id="services">
        <div className="bg-gray-50 min-h-screen py-8 px-4 -mt-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2">
                        ChatGPT development <span className="text-blue-500">services</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start max-w-xs p-4">
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
        </RevealOnScroll>
    );
};

const BusinessBanner: React.FC = () => {
    return (
      <RevealOnScroll>
       <section className="bg-gradient-to-r from-[#083f93] via-[#061c3d] to-[#043b86] text-white py-8 sm:py-10 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
    <div className="text-center lg:text-left w-full lg:w-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
        AI That Works for Your Business
      </h2>
      <p className="text-sm sm:text-base text-white/90">
        Custom OpenAI-powered apps designed to solve your specific challenges.
        <br className="hidden sm:block" />
        Book a free consultation and let's build something groundbreaking!
      </p>
    </div>
    
    <button className="mt-6 lg:mt-0 bg-[#fa4169] hover:bg-[#e8355c] text-white font-semibold px-6 py-3 rounded w-full lg:w-auto">
      Book Consultation
    </button>
  </div>
</section>
        </RevealOnScroll>
    );
};
const OpenAIDevelopment: React.FC = () => {
    return (
      <RevealOnScroll>
        <section>
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
                <h1 className="text-5xl font-bold mb-8">
                    <span className="text-blue-500">OpenAI</span> model-based
                    <br />application development
                </h1>

                <p className="text-gray-700 text-lg">
                    Use our development services to leverage the capabilities of OpenAI
                    models, build next-generation products and improve existing
                    platforms with extended modern capabilities. Collaborate with our
                    expert ChatGPT developers to integrate advanced language models
                    like GPT-3.5 Turbo, Davinci, Ada, Babbage, and Curie. We also
                    provide ChatGPT app development services using the latest image
                    models like DALL-E and CLIP, audio models such as Jukebox, and
                    cutting-edge code models like GPT-3 Code.
                </p>
            </div>

            {/* Right Image - Simple div for your image */}
            <div className="lg:w-1/2 flex justify-center">
                <div className="bg-blue-50 rounded-lg p-6 w-full max-w-md">
                    <img
                        src="https://api.wezom.com/storage/blog/list_big_x2/lo0jrmWd2sSiJ72HhtCMlO0GGNmOIqvI6bnZkN2p.png.webp?v=1681311586"
                        alt="OpenAI model-based application development"
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />

                    {/* Company Logo */}
                    <div className="flex justify-end mt-4">
                        <div className="flex items-center text-blue-600 font-semibold">
                            <svg className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                            foxSolution
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </RevealOnScroll>
    );
};

const OpenAIAPITools= () => {
    return (
      <RevealOnScroll>
        <section id="ai-tools">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          OpenAI API & other open-source LLM <span className="text-blue-500">tools</span>
        </h1>
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Row */}
          
          {/* OpenAI API Integration - API/Connection Icon */}
          <div className="flex flex-col">
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="6" />
                <path d="M12 6v12" strokeLinecap="round" />
                <path d="M8 8l8 8" strokeLinecap="round" />
                <path d="M8 16l8-8" strokeLinecap="round" />
                <path d="M6 12h12" strokeLinecap="round" />
                <circle cx="12" cy="12" r="10" strokeDasharray="1 3" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">OpenAI API integration</h2>
            <p className="text-gray-700">
              We integrate OpenAI APIs, including ChatGPT for conversational
              AI, DALL-E for image generation, and Whisper for speech-to-text
              conversion. OpenAI unlocks multiple capabilities: natural language
              understanding, sentiment analysis, anomaly detection, multi-factor
              authentication, and more.
            </p>
          </div>
          
          {/* Prompt Engineering - Code/Pencil/Settings Icon */}
          <div className="flex flex-col">
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 8h10" strokeLinecap="round" />
                <path d="M7 12h10" strokeLinecap="round" />
                <path d="M7 16h5" strokeLinecap="round" />
                <circle cx="17" cy="16" r="2" />
                <path d="M17 14v-2" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Prompt engineering</h2>
            <p className="text-gray-700">
              We write and fine-tune prompts to optimize the responses of
              language models like ChatGPT. We refine prompts to handle tasks
              like question-answering in the support systems, arithmetic
              reasoning in banking applications, text summarization in the
              management tools, code generation for developers, and more.
            </p>
          </div>
          
          {/* Second Row */}
          
          {/* LangChain - Chain/Link Icon */}
          <div className="flex flex-col">
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.5 7L8 5.5C7 4.5 5.5 4.5 4.5 5.5v0C3.5 6.5 3.5 8 4.5 9L6 10.5" strokeLinecap="round" />
                <path d="M14.5 17L16 18.5C17 19.5 18.5 19.5 19.5 18.5v0c1-1 1-2.5 0-3.5L18 13.5" strokeLinecap="round" />
                <path d="M14 10l-4 4" strokeLinecap="round" />
                <rect x="7" y="7" width="6" height="6" rx="1" />
                <rect x="11" y="11" width="6" height="6" rx="1" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">LangChain</h2>
            <p className="text-gray-700">
              We use LangChain to create more dynamic and context-aware
              ChatGPT-like applications. We chain multiple calls by breaking
              complex requests into smaller, interconnected steps and making
              separate API calls to resolve them. We also integrate the system
              with external data sources to enrich chatbot responses with
              specific data.
            </p>
          </div>
          
          {/* Hugging Face Models - Face with Arms Icon */}
          <div className="flex flex-col">
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="10" r="7" />
                <path d="M8 9h.01M16 9h.01" strokeLinecap="round" />
                <path d="M8 13h8" strokeLinecap="round" />
                <path d="M4 17c1.5 2 4.5 3 8 3s6.5-1 8-3" strokeLinecap="round" />
                <path d="M3 16c0-2 2-3 3-3" strokeLinecap="round" />
                <path d="M21 16c0-2-2-3-3-3" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Hugging face models</h2>
            <p className="text-gray-700">
              Hugging Face offers a wide range of pre-trained models for
              specific tasks such as text classification, sentiment analysis, named
              entity recognition, and more. We leverage the Hugging Face API to
              access and integrate powerful models such as GPT-3, Jurassic-1
              Jumbo, or LaMDA for building ChatGPT-like applications. Our team
              ensures optimal performance through continuous hyperparameter
              tuning and iterative improvements.
            </p>
          </div>
        </div>
      </div>
      </section>
      </RevealOnScroll>
    );
  };

  const benefits = [
    {
      title: "Enhanced user engagement",
      description: "AI-powered conversations transform your interactions into dynamic, engaging experiences. Applications with conversations keep users actively involved with your app, building true dialogue.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Personalized user experience",
      description: "Our solutions are designed to provide bespoke, user-centric experiences. AI-powered apps can provide a highly personalized user experience by analyzing user preferences, behaviors, and needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Efficient customer support",
      description: "ChatGPT reduces the burden on customer support teams by automatically processing common queries and issues with human-like understanding. This leads to faster response times, quicker issue resolutions and enhanced user satisfaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Availability and scale",
      description: "AI-powered apps operate around the clock, providing uninterrupted service 24/7. They can simultaneously handle thousands of conversations while maintaining high availability and consistent performance during peak times.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Data-driven insights",
      description: "Conversations powered by AI generate valuable data about user preferences, pain points, and behaviors. This data can be analyzed to uncover trends, improve offerings, and drive strategic decisions for enhanced user satisfaction and business growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Time and cost savings",
      description: "ChatGPT is capable of automating routine and repetitive tasks, thus reallocating resources to higher-priority objectives. ChatGPT helps to save operational costs and streamline workflows for increased productivity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Innovation and differentiation",
      description: "Integrating AI into your applications provides a competitive edge by introducing unique, innovative features. Advanced capabilities attract new users and help retain existing ones by providing value beyond standard functionality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Multi-language support",
      description: "ChatGPT handles multiple languages, which helps businesses expand their global reach and make their apps accessible to diverse audiences with little effort and without needing to recruit translators.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: "Continuous improvement",
      description: "AI-powered interactions get smarter over time by learning from user behavior. This continuous improvement ensures more accurate, effective, and relevant responses, enhancing the overall app experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Automation",
      description: "ChatGPT streamlines processes by automating repetitive and time-consuming tasks. From responding to FAQs to managing routine workflows, automation powered by ChatGPT reduces manual effort, improves efficiency, and minimizes errors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
  ];
const BusinessBenefits =()=>{
  return (
    <RevealOnScroll>
    <section id='benefits'>
    <div className="bg-[#0a1733] text-white min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Essential business <span className="text-blue-400">benefits</span> of ChatGPT development
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4 text-gray-300 flex items-center justify-center md:justify-start">
                {benefit.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2">{benefit.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    </RevealOnScroll>
  );
}

  function OpenAIModelsDevelopment() {
    // Process steps data
    const processSteps = [
      {
        number: 1,
        title: "Problem formulation",
        description: "Our process starts with a deep understanding of the business problem and needs and the possible role of AI or automation in addressing them. Our ChatGPT experts examine the available business data and practical implementation of AI: be it image recognition or image generation, multilingual support, enhanced customer support, or any other use case."
      },
      {
        number: 2,
        title: "Data collection and pre-processing",
        description: "The next step is to ensure proper data governance, including proper data collection, structuring, filtering, sharing, and processing practices. The goal here is to ensure the data is ready for usage. The structured and cleaned data are then used to build predictive models and derive insights from the datasets."
      },
      {
        number: 3,
        title: "Model architecture",
        description: "Our experts design a neural network architecture tailored to the specific task. For example, they may use LSTMs for sequence modeling, CNNs for image-related tasks, or Transformers for language processing. Various architectures are tested and optimized for performance."
      },
      {
        number: 4,
        title: "Hyperparameter tuning",
        description: "Key hyperparameters, such as learning rate, batch size, and the number of layers or neurons, are fine-tuned to enhance model training and performance. We imply the best practices to ensure the architecture is optimized for two core parameters: accuracy and efficiency."
      },
      {
        number: 5,
        title: "Model training",
        description: "We train the model using high-powered GPUs, employing techniques such as supervised learning, reinforcement learning, or transfer learning. We also use transfer learning to fine-tune pre-trained large language models for specific tasks or domains. By training an LLM on a smaller, domain-specific dataset, we achieve high performance while minimizing the computational resources required to train a model from scratch."
      },
      {
        number: 6,
        title: "Model evaluation",
        description: "Once trained, the model is rigorously evaluated against test data and the performance metrics established during problem formulation. If the results fall short of expectations, we revisit earlier steps to improve the model."
      },
      {
        number: 7,
        title: "Deployment",
        description: "Deployment happens only when the model meets the criteria defined in the first step in our process. We deploy the model into the production environment and start collecting real usage data to refine it further."
      },
      {
        number: 8,
        title: "Feedback and iteration",
        description: "As a part of our services, we continuously monitor the model performance and gather feedback from users. Based on the collected data, we improve the performance and accuracy of the model responses. Through ongoing data collection, model updates, and retraining, we ensure that the solution evolves to meet changing business needs and deliver long-term value."
      }
    ];
  
    return (
      <RevealOnScroll>
        <section id='process'>
      <div className="bg-[#f7f9fc] min-h-screen p-4 md:p-8 font-sans">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our OpenAI models-based development
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
              process
            </h2>
          </header>
  
          <div className="relative">
            {/* Vertical line connecting the numbers */}
            <div className="absolute left-8 top-10 bottom-0 w-0.5 bg-blue-100 z-0" style={{ height: 'calc(100% - 75px)' }}></div>
            
            {/* Process steps */}
            <div className="space-y-10">
              {processSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  {/* Numbered circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-blue-100">
                      <span className="text-blue-500 font-bold text-xl">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
      </RevealOnScroll>
    );
  }

  interface EngagementModel {
    id: string;
    title: string;
    icon: React.ReactNode;
    points: string[];
  }
  
   function EngagementModels() {
    // Define the three engagement models
    const models: EngagementModel[] = [
      {
        id: 'time-material',
        title: 'Time & Material',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none">
            {/* Clock with money symbol - representing time and payment */}
            <circle cx="12" cy="12" r="9" stroke="#2196F3" strokeWidth="1.5" />
            <path d="M12 7v5l3.5 3.5" stroke="#2196F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M16 14.5c0 0.5 0.75 1.5 2 1.5s2-1 2-2c0-2-4-1-4-3c0-1 0.75-2 2-2s2 1 2 1.5" stroke="#2196F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <line x1="18" y1="7" x2="18" y2="17" stroke="#2196F3" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        ),
        points: [
          'Ideal for all collaboration terms: short, medium and long terms',
          'Flexible budget and timeframe',
          'Payment only for actually worked hours',
          'Highly scalable developers team',
          'Frequent adjustments to priorities and workloads'
        ]
      },
      {
        id: 'fixed-cost',
        title: 'Fixed Cost',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none">
            {/* Document with price tag - representing fixed contract */}
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="#2196F3" strokeWidth="1.5" />
            <path d="M8 8h8" stroke="#2196F3" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M8 12h8" stroke="#2196F3" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M8 16h4" stroke="#2196F3" strokeLinecap="round" strokeWidth="1.5" />
            <circle cx="17" cy="17" r="3" stroke="#2196F3" strokeWidth="1.5" />
            <path d="M17 15.5v3" stroke="#2196F3" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M15.5 17h3" stroke="#2196F3" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        ),
        points: [
          'Short-medium term collaboration',
          'Low scalable team',
          'A pre-agreed, fixed price for the entire project scope',
          'Projects with well-defined requirements',
          'Clear deadlines'
        ]
      },
      {
        id: 'dedicated-team',
        title: 'Dedicated Team',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none">
            {/* Team of people connected - representing dedicated team */}
            <circle cx="9" cy="7" r="2.5" stroke="#2196F3" strokeWidth="1.5" />
            <circle cx="15" cy="7" r="2.5" stroke="#2196F3" strokeWidth="1.5" />
            <circle cx="12" cy="15" r="2.5" stroke="#2196F3" strokeWidth="1.5" />
            <path d="M9 9.5c-2.5 0-4.5 2-4.5 4.5v3h4.5" stroke="#2196F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M15 9.5c2.5 0 4.5 2 4.5 4.5v3h-4.5" stroke="#2196F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12 17.5v3" stroke="#2196F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10 12l2-2 2 2" stroke="#2196F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        ),
        points: [
          'Long-term collaboration',
          'Full developers commitment to your projects',
          'Direct management of the development team',
          'Dedicated experts that know business context',
          'High scalability of resources'
        ]
      }
    ];
    
  
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<string>(models[0].id);
  
    // Get the active model
    const activeModel = models.find(model => model.id === activeTab) || models[0];
  
    return (
      <RevealOnScroll>
        <section id='pricing'>
      <div className="max-w-4xl mx-auto p-6 font-sans">
        {/* Tabs */}
        <div className="flex justify-between items-center border-b border-gray-200">
          {models.map(model => (
            <div 
              key={model.id} 
              className="flex flex-col items-center cursor-pointer flex-1"
              onClick={() => setActiveTab(model.id)}
            >
              <div className={`w-14 h-14 mb-4 ${activeTab === model.id ? 'text-blue-500' : 'text-gray-400'}`}>
                {model.icon}
              </div>
              <div className={`text-center ${activeTab === model.id ? 'text-blue-500 font-semibold' : 'text-gray-400'}`}>
                {model.title}
              </div>
              <div className="w-full mt-2">
                <div className={`h-1 w-full ${activeTab === model.id ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">{activeModel.title}</h2>
          <ul className="space-y-4">
            {activeModel.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="#" className="text-red-500 flex items-center hover:underline">
              Engagement models
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </section>
      </RevealOnScroll>
    );
  }

interface SolutionCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Solution Card Component
const SolutionCard = ({ icon, title, description }: SolutionCardProps) => {
  return (
    <div className="flex flex-col items-start mb-8">
      <div className="text-blue-500 mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};
 function IndustrySolutions() {
    // Solution data
    const solutions = [
      {
        icon: <ShoppingCart size={40} className="text-blue-500" />,
        title: "Online Marketplaces",
        description: "Bring online shopping experiences to a new level with AI-driven personalized recommendations, instant answers to product inquiries, and seamless transaction support. ChatGPT solutions ensure customers find exactly what they need quickly and efficiently."
      },
      {
        icon: <Plane size={40} className="text-blue-500" />,
        title: "Travel",
        description: "Enhance traveler experiences by providing real-time assistance, personalized itinerary planning, and travel tips. From booking flights to finding local attractions, ChatGPT adapts to the dynamic needs of the travel industry."
      },
      {
        icon: <Car size={40} className="text-blue-500" />,
        title: "Automotive",
        description: "Streamline the car-buying and ownership journey with AI-powered tools. ChatGPT can assist customers in finding the perfect vehicle, schedule maintenance, and provide answers to common queries about car features and financing options."
      },
      {
        icon: <FileText size={40} className="text-blue-500" />,
        title: "Insurance",
        description: "Simplify customer interactions with instant policy quotes, answer coverage questions, and assist with claims processing. ChatGPT ensures policyholders get the support they need quickly and efficiently."
      },
      {
        icon: <Briefcase size={40} className="text-blue-500" />,
        title: "Recruiting",
        description: "Optimize the recruitment process with candidate screening, job matching, and automated responses to frequently asked questions. ChatGPT frees up recruiter time by streamlining and automating the majority of tasks related to HR activities."
      },
      {
        icon: <Building size={40} className="text-blue-500" />,
        title: "Rental",
        description: "Provide a seamless rental experience with new features: automatic reservation management, instant answers to questions about available options, and customer support. We offer rental solutions for any industry: vehicles, properties, equipment – we enhance any rental journey."
      },
      {
        icon: <Tv size={40} className="text-blue-500" />,
        title: "Media",
        description: "Boost audience engagement with personalized content recommendations, real-time news updates, and AI-powered responses to inquiries. ChatGPT helps media platforms maintain trust and relevance in this era of terabytes of information."
      },
      {
        icon: <Stethoscope size={40} className="text-blue-500" />,
        title: "Healthcare",
        description: "Empower patients with instant access to information about symptoms, appointment scheduling, and general medical advice."
      },
      {
        icon: <BarChart2 size={40} className="text-blue-500" />,
        title: "Business Intelligence",
        description: "ChatGPT can truly revolutionize business intelligence with its advanced analytical opportunities. By analyzing customer interactions, feedback, market trends, and operational metrics, OpenAI models uncover hidden patterns, identify opportunities for growth, and provide deep insights into the company data."
      }
    ];
  
    return (
      <RevealOnScroll>
        <section id="industries">
      <div className="bg-gray-50 p-6 max-w-6xl mx-auto mb-8 mt-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-10">
            Tailored industry-specific ChatGPT <span className="text-blue-500">solutions</span>
          </h1>
        </div>
  
        {/* Grid layout for the first 8 solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 mb-8">
          {solutions.slice(0, 8).map((solution, index) => (
            <SolutionCard 
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
  
        {/* Business Intelligence section (full width) */}
        <div className="mt-4">
          <SolutionCard 
            icon={solutions[8].icon}
            title={solutions[8].title}
            description={solutions[8].description}
          />
        </div>
      </div>
      </section>
      </RevealOnScroll>
    );
  }

  interface FeatureCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  // Feature Card Component
  const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
      <RevealOnScroll>
      <div className="flex flex-col items-start mb-12">
        <div className="text-white mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-white text-sm leading-relaxed">{description}</p>
      </div>
      </RevealOnScroll>
    );
  };
  
  // Main Component
  function WhyFoxSolution() {
    // Feature data
    const features = [
      {
        icon: <Settings size={40} className="text-white" strokeWidth={1.5} />,
        title: "Deep expertise",
        description: "With over 13 years of experience and 250+ successful projects across industries such as eCommerce, eLearning, finance, real estate, logistics, travel, and more, we bring unmatched expertise to every project. Our team of specialists combines technical proficiency with business acumen to deliver solutions that deliver business value and exceed user expectations."
      },
      {
        icon: <ClipboardCheck size={40} className="text-white" strokeWidth={1.5} />,
        title: "Quality standards",
        description: "We, as a ChatGPT development company, adhere to the highest quality standards, backed by our ISO 9001 and ISO 27001 certifications. Every project undergoes rigorous quality assurance, releasing only when it meets the agreed-upon percentage of acceptance criteria. Our commitment to quality ensures robust, secure, and reliable solutions."
      },
      {
        icon: <DollarSign size={40} className="text-white" strokeWidth={1.5} />,
        title: "Efficiency at minimal costs",
        description: "We have streamlined and well-established processes that enable us to offer fair and reasonable costs without compromising quality. You get access to our 13+ years of expertise while we get enough resources to grow as professionals."
      },
      {
        icon: <Star size={40} className="text-white" strokeWidth={1.5} />,
        title: "Highly customized solutions",
        description: "Custom development services are our specialization, so we know how to tailor every solution to various industries. Whether it's IoT applications, scalable cloud architectures, or advanced AI integrations, we design solutions that align perfectly with business goals."
      },
      {
        icon: <Shield size={40} className="text-white" strokeWidth={1.5} />,
        title: "Reliability & support",
        description: "Our long-term cooperation approach is proven by the fact that 70% of our Clients return with new projects. We provide continuous support, guarantee bug fixes for an agreed period after deployment, and ensure smooth operation through regular updates and maintenance."
      },
      {
        icon: <Target size={40} className="text-white" strokeWidth={1.5} />,
        title: "Transparency & cooperation",
        description: "Transparency is a core value at Foxsolution, a ChatGPT app development company. We provide detailed time and budget estimates, regular progress reports, and real-time access to project management tools. Our well-established processes ensure you're informed and involved every step of the way."
      }
    ];
  
    return (
      <RevealOnScroll>
        <section id='why-foxsolution'>
      <div className="bg-navy-900 p-12 max-w-full" style={{ backgroundColor: '#14213D' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-500">Why</span> <span className="text-white">FoxSolution</span>
          </h1>
  
          {/* Grid layout for the features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      </section>
      </RevealOnScroll>
    );
  }

  interface StatCardProps {
    number: string;
    description: string;
  }
  
  // Stat Card Component
  const StatCard = ({ number, description }: StatCardProps) => {
    return (
      
      <div className="border border-gray-200 p-8 flex flex-col items-center justify-center">
        <div className="text-blue-500 text-5xl font-bold mb-2">{number}</div>
        <div className="text-center text-gray-800">{description}</div>
      </div>
    );
  };
  
  // Main Component
  function KeyNumbers() {
    // Stats data
    const stats = [
      {
        number: "98%",
        description: "User satisfaction rate"
      },
      {
        number: "200+",
        description: "Successful projects"
      },
      {
        number: "25",
        description: "States served in India"
      },
      {
        number: "3+",
        description: "Years' Client engagement"
      },
      {
        number: "70%",
        description: "Senior specialists"
      },
      {
        number: "3+",
        description: "Years on the market"
      }
    ];
  
    return (
      <RevealOnScroll>
        <section>
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Key <span className="text-blue-500">numbers</span> about FoxSolution
        </h1>
  
        {/* Grid layout for the stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
      </section>
      </RevealOnScroll>
    );
  }

  const AITurnIdeasSection = () => {
    return (
      <RevealOnScroll>
   <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-[#0d47a1] via-[#0b2c58] to-[#0d47a1] overflow-hidden">
  {/* Background overlay shapes */}
  <div className="absolute inset-0 bg-[url('/background-pattern.png')] bg-cover bg-center opacity-20" />
  
  <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8 z-10 mt-0 md:mt-[-40px]">
    <div className="text-white max-w-2xl text-center md:text-left w-full md:w-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
        Turn AI Ideas into Reality
      </h2>
      <p className="text-base sm:text-lg">
        Have a vision for an AI-powered app? Our expert developers can bring it to life with OpenAI's cutting-edge models. Let's discuss your project!
      </p>
    </div>
    
    <button className="bg-[#ff3c5f] hover:bg-[#e63253] transition-colors text-white font-semibold py-3 px-8 rounded w-full md:w-auto mt-6 md:mt-0">
      Get in Touch
    </button>
  </div>
</section>
      </RevealOnScroll>
    );
  };



function PortfolioSection () {
const [hoveredId, setHoveredId] = useState<number | null>(null);
const projects = [
  {
    id: 1,
    title: "Graphical user interface for robot operation",
    description: "Foxsolution developed a graphic user interface (GUI) that helps to communicate with the robot Alfred, an automated robotic arm.",
    image: "/Casestudies1.webp",
    bgColor: "bg-purple-900",
    hoverBgColor: "bg-purple-800",
    logo: "DEXAI ROBOTICS",
  },
  {
    id: 2,
    title: "Innovative big data trading platform",
    description: "A blockchain-based web and mobile platform that allows companies and individuals to buy and sell big data sets securely through a private digital identity and pay with Bitcoin.",
    image: "/Casestudies2.webp",
    bgColor: "bg-blue-950",
    hoverBgColor: "bg-blue-900",
  },
  {
    id: 3,
    title: "Transportation management system",
    description: "A comprehensive solution for companies operating in the logistics industry, covering all the major aspects of transport and cargo management.",
    image: "/Casestudies3.webp",
    bgColor: "bg-purple-800",
    hoverBgColor: "bg-purple-700",
    logo: "NIKA",
  }
];
return (
  <RevealOnScroll>
  <section id="case-studies">
  <div className="max-w-6xl mx-auto py-6 px-4">
  {projects.map((project) => (
    <div 
      key={project.id}
      className="mb-4 overflow-hidden rounded shadow-md transition-all duration-300"
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{ 
        backgroundColor: hoveredId === project.id 
          ? project.hoverBgColor.replace('bg-', '') 
          : project.bgColor.replace('bg-', '')
      }}
    >
      <div className={`flex flex-col md:flex-row ${hoveredId === project.id ? project.hoverBgColor : project.bgColor}`}>
        <div className="w-full md:w-1/2 overflow-hidden max-h-52">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto transition-transform duration-300 object-cover"
            style={{ 
              transform: hoveredId === project.id ? 'scale(0.95)' : 'scale(1)'
            }}
          />
        </div>
        <div className="w-full md:w-1/2 p-3 text-white">
          {project.logo && (
            <div className="text-xs font-semibold mb-1">{project.logo}</div>
          )}
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  ))}

  <div className="text-center mt-6">
    <a href="#" className="text-pink-500 font-bold text-sm hover:underline">
      All projects →
    </a>
  </div>
</div>
  </section>
  </RevealOnScroll>
);
 };

 const ReviewsSection = () => {
  return (
    <RevealOnScroll>
      <section id="reviews" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mt-2">
              <h2 className="text-3xl font-bold text-center mb-12">
                  What Our <span className="text-blue-600">Clients Say</span>
              </h2>
              <TestimonialCarousel />
          </div>
      </section>
      </RevealOnScroll>
  );
};

const CustomSection= () => {
  return (
    <RevealOnScroll>
   <section className="w-full bg-chatgpt-section bg-gradient-to-r from-[#0d47a1] via-[#0b2c58] to-[#0d47a1] text-white py-8 md:py-12 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="max-w-2xl mb-4 md:mb-0 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 md:mb-4">
        Custom ChatGPT Development for Your Needs
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        From virtual assistants to AI-driven analytics—unlock the potential of ChatGPT. Talk to our experts!
      </p>
    </div>
    <div className="w-full md:w-auto">
      <button className="bg-[#FF3B60] text-white font-medium px-6 py-2.5 md:py-3 rounded hover:bg-[#e3345b] transition w-full md:w-auto">
        Get in Touch
      </button>
    </div>
  </div>
</section>
    </RevealOnScroll>
  );
};
const ChatGPTFAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqItems = [
    {
      id: 1,
      question: "Can I incorporate ChatGPT into my current software and systems?",
      answer: "Yes, we can easily integrate ChatGPT into your existing software and systems with our app development with ChatGPT. We develop custom APIs and use ready-to-use solutions to ensure the communication between your existing software and ChatGPT."
    },
    {
      id: 2,
      question: "What use does ChatGPT API serve?",
      answer: "ChatGPT API allows businesses to integrate ChatGPT's conversational capabilities into applications, enabling features like real-time communication, personalized recommendations, language translation, and more. APIs serve as a room for communication between the application and ChatGPT capabilities."
    },
    {
      id: 3,
      question: "What are the different ML models that you can create?",
      answer: "We develop diverse ML models, including language models for natural language processing, computer vision models for image recognition, and predictive models for data analysis. Each model is customized to suit your business requirements and use cases, ensuring optimal performance."
    },
    {
      id: 4,
      question: "Are there any privacy concerns regarding ChatGPT?",
      answer: "We prioritize data security and adhere to strict privacy standards, including ISO 27001 and GDPR compliance. ChatGPT implementations include measures like encrypted data transfer, role-based access control, and regular audits to ensure your business and user data remain secure."
    },
    {
      id: 5,
      question: "Do you provide optimization and maintenance services after developing and deploying the OpenAI model?",
      answer: "Yes, we offer post-deployment support as a part of OpenAI development services, including performance optimization, bug fixes, updates, and retraining based on new data. Our goal is to ensure your OpenAI model continues to deliver exceptional results after the launch."
    },
    {
      id: 6,
      question: "How much does it cost to build a generative AI model?",
      answer: "The cost varies based on factors like project complexity, data requirements, and customizations. We provide a detailed cost estimate after understanding your needs, ensuring transparency and fair pricing for a high-quality solution. For example, fine-tuning an existing model may cost less (around $20,000–$50,000), while building from scratch can exceed $300,000."
    },
    {
      id: 7,
      question: "What is ChatGPT app development?",
      answer: "ChatGPT app development involves integrating the ChatGPT language model into applications to enable natural language interactions and conversations with users."
    },
    {
      id: 8,
      question: "Is technical expertise required to integrate ChatGPT?",
      answer: "No, technical expertise from your side is unnecessary. Our team provides ChatGPT integration & development services, which means we handle the entire integration process, from API implementation to customization, training you on how to use ChatGPT services along the way."
    },
    {
      id: 9,
      question: "Can I monitor and improve the quality of ChatGPT’s responses?",
      answer: "Absolutely, you can monitor and provide feedback to continuously improve ChatGPT’s responses and ensure they align with your app’s goals."
    },
    {
      id: 10,
      question: "Is user data privacy maintained during ChatGPT interactions? How does the OpenAI API ensure data security and privacy?",
      answer: "Yes, we prioritize user data privacy when providing ChatGPT software development services. ChatGPT interactions are secure and comply with privacy regulations to protect user information."
    },
    {
      id: 11,
      question: "How does Foxsolution ensure its ChatGPT applications meet the specific needs of US-based businesses?",
      answer: "Our approach to serving US-based businesses involves a thorough consultation process where we dive deep into understanding your business objectives, target audience, and regulatory requirements. When providing ChatGPT applications development services, we leverage this insight to craft ChatGPT solutions that are highly relevant and effective within the American context."
    }
  ];

  const toggleAnswer = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const displayedItems = showAll ? faqItems : faqItems.slice(0, 5);

  return (
    <RevealOnScroll>
      <section id="things">
        <div className="max-w-4xl mx-auto p-5 font-sans">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-8 leading-snug max-w-xs sm:max-w-2xl mx-auto text-center">
  Things to Know about ChatGPT Development
</h1>

          <div className="space-y-0">
            {displayedItems.map((item) => (
              <div key={item.id}>
                <hr className="border-t border-gray-200 my-6" />
                <div className="mb-4">
                  <div
                    className="flex items-start cursor-pointer"
                    onClick={() => toggleAnswer(item.id)}
                  >
                    <span className="text-blue-500 mr-2">o</span>
                    <span className="text-blue-500 font-medium text-lg">
                      {item.question}
                    </span>
                  </div>

                  {expandedId === item.id && (
                    <div className="ml-6 text-gray-700 mt-2 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <hr className="border-t border-gray-200 my-6" />
          </div>

          {!showAll && (
            <div className="mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="text-red-400 flex items-center hover:underline"
              >
                Load more <span className="ml-1 text-lg">›</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </RevealOnScroll>
  );
};

const StoriesSection = () => {
  const articles = [
    {
      title: "FoxSolution Ranked Among Top Mobile App Development Companies in the USA by AppFirmsReview",
      time: "52 mins",
      date: "March 24, 2025",
      image: "https://sumatosoft.com/wp-content/uploads/2025/04/USA-2048x1622.png",
      path: "/articles/chatgpt-alternatives"
    },
    {
      title: "Top 10 ChatGPT Alternatives for Business Use in 2025",
      time: "52 mins",
      date: "February 24, 2025",
      path: "/articles/iot-oil-gas"
    },
    {
      title: "Top 25 MVP Development Companies",
      time: "12 mins",
      date: "February 20, 2025",
      path: "/articles/iot-logistics"
    },
    {
      title: "IoT Apps for Oil & Gas Industry – What’s in It?",
      time: "11 mins",
      date: "February 18, 2025",
      path: "/articles/iot-education"
    },
  ];

  return (
    <RevealOnScroll>
   <section id="awsome" className="px-4 mb-16">
  <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
    We have awesome <span className="text-blue-600">stories</span> to tell you
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <section className="bg-gray-100 p-4 rounded-xl">
      {/* Modified image container with slightly decreased width and height */}
      <div className="w-11/12 mx-auto overflow-hidden rounded-xl">
        <img
          src={articles[0].image}
          alt={articles[0].title}
          className="rounded-xl mb-4 w-full h-[260px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <Link
        to={articles[0].path}
        className="text-xl font-semibold text-black hover:text-red-500 transition-colors"
      >
        {articles[0].title}
      </Link>
      <p className="text-gray-600 text-sm mt-1">
        🕒 {articles[0].time} | {articles[0].date}
      </p>
    </section>
    
    <section>
      {articles.slice(1).map((article, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <Link
            to={article.path}
            className="text-lg font-medium text-black hover:text-red-500 transition-colors"
          >
            {article.title}
          </Link>
          <p className="text-gray-500 text-sm mt-1">
            🕒 {article.time} | {article.date}
          </p>
        </div>
      ))}
    </section>
  </div>
  
  <p className="text-red-500 font-medium mt-6 cursor-pointer hover:underline">
    All articles &gt;
  </p>
</section>
    </RevealOnScroll>
  );
};
 
  
const OpenaiDevelopment = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  
  const contentsMenu = [
    { title: 'Services', id: 'services' },
    { title: 'OpenAi tools', id: 'ai-tools' },
    { title: 'Business benefits', id: 'benefits' },
    { title: 'Pricing models', id: 'pricing' },
    { title: 'Industries', id: 'industries' },
    { title: 'Case studies', id: 'case-studies' },
    { title: 'Process', id: 'process' },
    { title: 'Things to know', id: 'things' },
    { title: 'Why Foxsolution', id: 'why-foxsolution' },
    { title: 'Awsome stories', id:'awsome' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of contentsMenu) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset considering mobile header height
      const offset = window.innerWidth < 1024 ? 80 : 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }, []);
  
  return (
    <div>
      <Navbar />
      
      {/* Mobile Menu Toggle Button - Wider and more visible */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors w-16 h-16 flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Contents Menu - Slide from left */}
      <div 
        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-full sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">Contents</h3>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <ul className="space-y-2">
            {contentsMenu.map((item, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-600 font-medium border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <HeroSection />
      <Logos />
      
      {/* Flex container for main content and TOC */}
      <div className="container mx-auto flex flex-col lg:flex-row">
        
        {/* Main content column */}
        <div className="w-full lg:w-[200%] px-2">
          <ChatGPTServices />
          <BusinessBanner />
          <OpenAIDevelopment />
          <OpenAIAPITools />
          <section id='openai' className='mt-10 mb-10'>
            <img
              src="/OpenAiTech.png"
              alt="Technologies we work with including AWS IoT, Azure IoT, and Google Cloud services"
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy" />
          </section>
          <BusinessBenefits />
          <EngagementModels />
          <AITurnIdeasSection />
          <IndustrySolutions />
          <PortfolioSection />
          <ReviewsSection />
          <CustomSection />
          <OpenAIModelsDevelopment />
          <ChatGPTFAQ />
          <WhyFoxSolution />
          <KeyNumbers />
          
          <div className='mb-6 w-auto'>
            <CertificationsSection
              heading={<>
                <span className="text-blue-500">Awards</span> & recognitions
              </>}
              description="Foxsolutions has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
              imageSize="w-16 md:w-24"
            />
          </div>
          <Contact />
          <StoriesSection />
        </div>
      
        {/* Table of Contents - Sticky on large screens - UNCHANGED */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
            <TableOfContents sections={contentsMenu} />
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default OpenaiDevelopment;