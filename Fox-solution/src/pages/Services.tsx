import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TableOfContents } from '@/components/ui/TableOfContents';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '../components/ui/reviewCarousel';
import Contact from '@/components/home/Contact';

// Hero Section
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen w-full flex flex-col justify-start pt-20 bg-gradient-to-br from-blue-950 via-blue-950 to-purple-900 text-white relative"
        style={{ height: '100vh', minHeight: '100vh' }}
      >
        <div className="container mx-auto px-4 md:px-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <div className="flex items-center text-sm">
              <a href="/" className="text-white hover:text-blue-300">Home</a>
              <span className="mx-2">›</span>
              <a href="/services" className="text-white hover:text-blue-300">Services</a>
              <span className="mx-2">›</span>
              <span className="text-gray-300">Software product development</span>
            </div>
          </div>
          
          {/* Hero Content */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-blue-400">Software product development company</span>
          </h1>
          
          <h2 className="text-5xl font-bold mb-8">
            that delivers <span className="text-blue-400">innovation.</span>
          </h2>
          
          <p className="text-lg mb-12 max-w-3xl">
            Transform your vision into reality with our expert software product development services,
            delivering innovative, scalable solutions tailored to your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>specialization in IoT development;</span>
            </div>

            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>deep expertise in web and mobile development;</span>
            </div>

            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>experts in AI, ML, Big Data technologies;</span>
            </div>

            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>transparency in cooperation is our core value;</span>
            </div>

            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>ISO 9001, ISO 27001-certified company.</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded transition duration-300">
              Get in Touch
            </button>
            
            <div className="ml-0 md:ml-12 mt-6 md:mt-0 flex items-center">
              <span className="mr-2 text-sm">Clients rate our services</span>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="ml-2 font-semibold">5.0</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//FAQ
const FAQSection = () => {
  const SoftwareDevelopmentFaqs = [
    {
      question: "How do you ensure the quality of a software product during development?",
      answer: (
        <>
          <p>We have several aspects that serve to ensure the high quality of the final product:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>First, we adopt a quality assurance strategy where we agree upon the necessary quality of the software from the beginning. The quality is measured by the acceptance criteria which is a set of predefined conditions that a software product must meet to be accepted.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Secondly, we always check that the final software will go online without critical bugs and blockers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Thirdly, we thoroughly approach the initial stages of the business analysis and system architecture, laying the solid foundation for the whole project. We identify and address any issues proactively, ensuring that the final software meets the highest quality standards.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      question: "How does foxsolutions help in the ideation and concept development stage?",
      answer: (
        <>
          <p>In the ideation and concept development stage, foxsolutions offers a team of experienced business analysts, product managers and software developers who can run proof of concept or refine the Client ideas.</p>
          <p className="mt-2">foxsolutions is a reliable software development consultant that can help to lay the solid foundation for the project before its actual beginning. We conduct in-depth market research, analyze competitors, draw user personas, check the regulatory compliance of the idea, draw the product vision, and more.</p>
        </>
      )
    },
    {
      question: "What is the role of UI/UX design in software product development?",
      answer: (
        <>
          <p>UI/UX design is an integral part of any product development. Even if there is no designer on the project and the development team uses a UI library for all interfaces, it's impossible to release the software product without considering the UI/UX aspect. Here are a few examples of just general UI/UX best practices:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>clear website navigation so the user won't hunt for basic links like "Contact", "About us", or "Services".</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>a simple user interface with few and only necessary models and pop-ups so the website won't bombard users with multiple modal windows before they have even had the chance to view the content;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>optimized layouts for mobile resolutions;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>consistency in design when with the same color schemes, typography, and layout structures.</span>
            </li>
          </ul>
          <p className="mt-2">And many others. A well-conceived UI/UX is what encourages users to come back to the website and use it.</p>
        </>
      )
    },
    {
      question: "How does foxsolutions ensure the security of a software product?",
      answer: (
        <>
          <p>As one of the most professional software product companies with 12 years on the market, we came up with several sets of strategies, techniques, rules, and guidelines to ensure the robust security of the software. We adopted a flexible approach in that software development services, fitting our security efforts to the project requirements. Here are the components of our security approach:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Principle of least privilege – we grant users permissions to modules, processes, and components that are just enough to perform their functions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Threat modeling – we conduct threat modeling sessions to identify potential security threats and vulnerabilities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Abandonce to coding standards – we strictly follow coding standards provided by OWASP, the SARS Institute, and our best practices in security.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Static and dynamic code analysis – we run both these security tests if necessary.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Penetration testing and security audits – we have the expertise to implement both these activities that allow to identify security vulnerabilities and assess the application's compliance with security standards and regulations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Identification and encryption – we encrypt data both in the database and in transit using strong encryption protocols.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Robust authentication methods – we can implement multi-factor authentication to prevent unauthorized access and data breaches.</span>
            </li>
          </ul>
          <p className="mt-2">These are only some of the guidelines for our security standards.</p>
        </>
      )
    },
    {
      question: "How does foxsolutions handle post-launch support and maintenance for software products?",
      answer: (
        <>
          <p>Our post-launch support is a flexible service that we can adapt to the needs of the specific project and business. The basis of post-launch support service is bug fixing and comprehensive training on the solution where we share all relevant knowledge on the project.</p>
          <p className="mt-2">Then, we can extend the range of services and include feature enhancements, technology stack updates, software scaling, 24/7 monitoring to ensure the software performance and health.</p>
        </>
      )
    },
    {
      question: "What role does market research play in software product development?",
      answer: (
        <>
          <p>Market research is a critical step that must be taken even before referring to the software development company. Its goal is to understand the target audiences' needs, analyze competitors, define a unique selling proposition for the product, prioritize features, and draw a marketing and pricing strategy.</p>
          <p className="mt-2">The software developer provider can handle this during the Discovery phase as a part of their services. The ultimate role of market research is to ensure the development of competitive and successful software that will find the market fit and stand out in the market.</p>
        </>
      )
    }
  ];

  return (
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={SoftwareDevelopmentFaqs} />
    </section>
  )
};

const ServicesPage = () => {
  const sections = [
    { id: 'hero-section', title: 'Overview' },
    { id: 'services', title: 'Our Services' },
    { id: 'development-models', title: 'Development Models' },
    { id: 'tech-stack', title: 'Tech Stack' },
    { id: 'industries', title: 'Industries' },
    { id: 'process', title: 'Our Process' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'footer', title: 'FAQ' },

  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/* Main Content Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <section id="services">
              <h2 className="text-3xl font-bold text-center mb-16">
                Software product development <span className="text-sky-500">services</span>
              </h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {/* Custom Software Development */}
                <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-sky-50 hover:to-white hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] hover:-translate-y-1">
                  <div className="mr-6 flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 19H4V5H20V19Z" fill="#0369A1" />
                      <path d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 10H17V17H15V10Z" fill="#0369A1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Custom software development</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      We develop unique custom software solutions to meet your exact requirements. Custom development means full-native software development adapted to your ease regarding budget, timelines, tech stack, additional enhancements, and other aspects.
                    </p>
                    <a href="#" className="text-sky-500 hover:underline text-sm flex items-center group">
                      Custom software development services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Mobile App Development */}
                <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] hover:-translate-y-1">
                  <div className="mr-6 flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19ZM12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18Z" fill="#7E22CE" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Mobile app development</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      We design and develop custom iOS, Android, or cross-platform applications with a strong focus on designing intuitive user interfaces and providing a smooth user experience.
                    </p>
                    <a href="#" className="text-sky-500 hover:underline text-sm flex items-center group">
                      Mobile application development
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Web Application Development */}
                <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white hover:shadow-[0_10px_30px_rgba(5,150,105,0.1)] hover:-translate-y-1">
                  <div className="mr-6 flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z" fill="#059669" />
                      <path d="M12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12H12V4Z" fill="#059669" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Web application development</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      We develop scalable, high-performance, and secure web applications designed to perfectly integrate with your processes and grow with your business.
                    </p>
                    <a href="#" className="text-sky-500 hover:underline text-sm flex items-center group">
                      Custom web application development services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Internet of Things Development */}
                <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:-translate-y-1">
                  <div className="mr-6 flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 13H17V7H19V13ZM5 13H3V7H5V13ZM16 6H15V4H13V6H11V4H9V6H8C6.9 6 6 6.9 6 8V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V8C18 6.9 17.1 6 16 6ZM16 18H8V8H16V18ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z" fill="#0E7490" />
                      <path d="M12 12C12 12.55 12.45 13 13 13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11C12.45 11 12 11.45 12 12Z" fill="#0E7490" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Internet of Things development</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      We build IoT systems of any complexity that encompass several to hundreds of IoT devices. As a part of these software development services, we help to accelerate the shift of traditional hardware and sensor devices to smart connected solutions for device management and data monitoring, with secure all-to-centralized remote physical components, network access, data transfer, and software.
                    </p>
                    <a href="#" className="text-sky-500 hover:underline text-sm flex items-center group">
                      Internet of Things IoT development
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* AI & ML Development */}
                <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-fuchsia-50 hover:to-white hover:shadow-[0_10px_30px_rgba(192,38,211,0.1)] hover:-translate-y-1">
                  <div className="mr-6 flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4C13.93 4 15.68 4.78 16.95 6.05C18.22 7.32 19 9.07 19 11H12V4Z" fill="#A21CAF" />
                      <path d="M12 13C15.73 13 18.68 15.11 19.71 18.29C19.8 18.65 19.5 19 19.12 19H4.88C4.5 19 4.2 18.65 4.29 18.29C5.32 15.11 8.27 13 12 13Z" fill="#A21CAF" />
                      <path d="M12 4C10.07 4 8.32 4.78 7.05 6.05C5.78 7.32 5 9.07 5 11H12V4Z" fill="#A21CAF" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Artificial Intelligence (AI) & Machine Learning (ML) integration</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      We develop advanced human-computer interaction using natural language processing, speech and object recognition to add a personal touch to any application by providing personalized experiences.
                    </p>
                    <a href="#" className="text-sky-500 hover:underline text-sm flex items-center group">
                      Artificial Intelligence Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Big Data Development */}
                <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white hover:shadow-[0_10px_30px_rgba(234,88,12,0.1)] hover:-translate-y-1">
                  <div className="mr-6 flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="#EA580C" />
                      <path d="M7 10H9V17H7V10Z" fill="#EA580C" />
                      <path d="M11 7H13V17H11V7Z" fill="#EA580C" />
                      <path d="M15 13H17V17H15V13Z" fill="#EA580C" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Big Data development</h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      We help to deal with an overwhelming amount of information in the business realm by developing advanced solutions for big data processing, analysis, and visualization. Data is a competitive advantage, and we empower businesses with data-driven insights.
                    </p>
                    <a href="#" className="text-sky-500 hover:underline text-sm flex items-center group">
                      Big Data Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="development-models" className="bg-gray-50 py-16 px-4 mb-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Which product development services
                    <span className="text-blue-500">model</span> you need?
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                  <div className="bg-white p-8 rounded-lg">
                    <div className="mb-4">
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-500" fill="currentColor">
                          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Product development outsourcing</h3>

                    <p className="text-gray-600 mb-6 text-sm">
                      Our product development outsourcing services transform your vision into fully-fledged software. Whether launching a new product or upgrading an existing one, our expert team can lead you through the project development life cycle. We transform your business goals into a software application that achieves them.
                    </p>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">full-cycle product development;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">usage of the latest technologies like AI, ML, Computer Vision, etc.;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">well-established development processes;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">cost-effective and scalable solutions.</span>
                      </li>
                    </ul>

                    <div className="mt-4">
                      <a href="#" className="text-blue-500 text-sm font-medium flex items-center">
                        Get in touch
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-lg">
                    <div className="mb-4">
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-500" fill="currentColor">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Staff augmentation</h3>

                    <p className="text-gray-600 mb-6 text-sm">
                      We expand in-house teams with flexible staff augmentation services, providing the expertise of specialists you need. Whether it's a lack of specialized skills or the need for additional workforces, we can seamlessly extend your development team, adjusting to your internal working schedule and processes.
                    </p>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">short and long-term cooperation;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">web, mobile developers, designers, scrum masters, business analysts,QA;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">expertise of top senior-level specialists;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">on-demand scaling.</span>
                      </li>
                    </ul>

                    <div className="mt-4">
                      <a href="#" className="text-blue-500 text-sm font-medium flex items-center">
                        Get in touch
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transform Your Business Section */}
            <RevealOnScroll>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 relative overflow-hidden mb-12">
                <h2 className="text-3xl font-bold mb-4">Transform Your Business with Custom Solutions</h2>
                <p className="mb-6 text-gray-700">
                  Unlock your business potential with tailored enterprise software that adapts
                  to your unique challenges and drives innovation.
                </p>
                <AnimatedButton>
                  <Link
                    to="/contact"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
                  >
                    Get Started
                  </Link>
                </AnimatedButton>
              </div>
            </RevealOnScroll>

            {/* Core tech stack */}
            <section id="tech-stack" className="w-full py-16 mb-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-16">
                  <span className="text-blue-500">Core tech stack</span> we work with
                </h2>

                {/* Backend Development */}
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-60 text-gray-800 font-medium">Backend development</div>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>

                  <div className="flex flex-wrap gap-10 ml-60">
                    <div className="flex flex-col items-center">
                      <img src="/java.svg" alt="Java" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/dotnet-logo.svg" alt=".NET" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/rubyrails.svg" alt="Ruby" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/python.svg" alt="Python" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="nodejs.svg" alt="Node.js" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/javascript.svg" alt="JavaScript" className="h-12" />
                    </div>
                  </div>
                </div>

                {/* Frontend Development */}
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-60 text-gray-800 font-medium">Frontend development</div>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>

                  <div className="flex flex-wrap gap-10 ml-60">
                    <div className="flex flex-col items-center">
                      <img src="/reactjs.svg" alt="React" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/angular.svg" alt="Angular" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/nextjs.svg" alt="Next.js" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/vuejs.svg" alt="Vue.js" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/Bootstrap.png" alt="Bootstrap" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/jquery.svg" alt="jQuery" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/django.svg" alt="Django" className="h-12" />
                    </div>
                  </div>
                </div>

                {/* Mobile Development */}
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-60 text-gray-800 font-medium">Mobile development</div>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>

                  <div className="flex flex-wrap gap-10 ml-60">
                    <div className="flex flex-col items-center">
                      <img src="/reactnative.svg" alt="React Native" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/ios.svg" alt="iOS" className="h-12" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/android.svg" alt="Android" className="h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="industries" className="text-center p-8 mb-16">
              <h2 className="text-3xl font-semibold">
                <span className="text-blue-600">Industry-specific software</span> product
                development outsourcing
              </h2>
              <p className="text-gray-600 mt-4">
                We develop custom software products tailored to a specific industry the
                business operates in. Our expertise includes over 250+ completed projects
                in 12 industries.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
                {/* Healthcare */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7V12H7V14H12V19H14V14H19V12H14V7H12Z" fill="#3A7BED" />
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20Z" fill="#3A7BED" />
                  </svg>
                  <span className="mt-2">Healthcare</span>
                </div>

                {/* Media & Entertainment */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#6E44FF" />
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#6E44FF" />
                  </svg>
                  <span className="mt-2">Media & Entertainment</span>
                </div>

                {/* Enterprise */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#002366" />
                    <path d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 10H17V17H15V10Z" fill="#002366" />
                  </svg>
                  <span className="mt-2">Enterprise</span>
                </div>

                {/* Logistics */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5Z" fill="#FF6B35" />
                  </svg>
                  <span className="mt-2">Logistics</span>
                </div>

                {/* Food Tech */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.06 22.99H19.72C20.56 22.99 21.25 22.35 21.29 21.53L21.88 9.07C21.91 8.4 21.38 7.84 20.7 7.84H3.3C2.62 7.84 2.09 8.4 2.12 9.07L2.71 21.53C2.75 22.35 3.44 22.99 4.28 22.99H5.94C6.58 22.99 7.12 22.55 7.23 21.93L8.05 17.22C8.15 16.6 8.69 16.16 9.33 16.16H14.67C15.31 16.16 15.85 16.6 15.95 17.22L16.77 21.93C16.88 22.55 17.42 22.99 18.06 22.99ZM8.53 11.73C9.12 11.73 9.6 12.21 9.6 12.8C9.6 13.39 9.12 13.87 8.53 13.87C7.94 13.87 7.46 13.39 7.46 12.8C7.46 12.21 7.94 11.73 8.53 11.73ZM15.47 11.73C16.06 11.73 16.54 12.21 16.54 12.8C16.54 13.39 16.06 13.87 15.47 13.87C14.88 13.87 14.4 13.39 14.4 12.8C14.4 12.21 14.88 11.73 15.47 11.73ZM12 2.86C13.37 2.86 14.49 3.98 14.49 5.35C14.49 6.72 13.37 7.84 12 7.84C10.63 7.84 9.51 6.72 9.51 5.35C9.51 3.98 10.63 2.86 12 2.86Z" fill="#E63946" />
                  </svg>
                  <span className="mt-2">Food Tech</span>
                </div>

                {/* Banking & Finance */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7V9H21V7L12 2ZM11 10H13V15H11V10ZM3 17V19H21V17H3ZM3 21V23H21V21H3Z" fill="#2B9348" />
                    <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" fill="#2B9348" />
                  </svg>
                  <span className="mt-2">Banking & Finance</span>
                </div>

                {/* IoT Management */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H17V7H19V13ZM5 13H3V7H5V13ZM16 6H15V4H13V6H11V4H9V6H8C6.9 6 6 6.9 6 8V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V8C18 6.9 17.1 6 16 6ZM16 18H8V8H16V18ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z" fill="#2A9D8F" />
                  </svg>
                  <span className="mt-2">IoT Management</span>
                </div>

                {/* Education */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#720026" />
                  </svg>
                  <span className="mt-2">Education</span>
                </div>

                {/* Real Estate */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9.3V4H14V7.6L12 6L2 12L3 14L5 13V20H9V14H15V20H19V13L21 14L22 12L19 9.3ZM17 18H15V12H9V18H7V11.4L12 8.7L17 11.4V18Z" fill="#4B0082" />
                  </svg>
                  <span className="mt-2">Real Estate</span>
                </div>

                {/* eCommerce */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z" fill="#FF9900" />
                  </svg>
                  <span className="mt-2">eCommerce</span>
                </div>





                {/* Marketing */}
                <div className="flex flex-col items-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#D60270" />
                    <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#D60270" />
                    <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#D60270" />
                  </svg>
                  <span className="mt-2">Marketing</span>
                </div>
              </div>
            </section>

            <section id="process" className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-blue-900 to-blue-800 text-white rounded-xl shadow-2xl mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our product development <span className="text-blue-300">process</span>
              </h2>

              <div className="space-y-8">
                {/* Discovery and planning */}
                <div className="flex items-start space-x-6 group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-600 rounded-full border-2 border-blue-400 shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">Discovery and planning</h3>
                    <p className="text-blue-100 text-base group-hover:text-white transition-colors">
                      We kick off the project by analyzing your business goals, understanding user needs, and defining key market values. As a result, we will get a project scope, roadmap, detailed and well-studied wireframing, and risk assessment.
                    </p>
                  </div>
                </div>

                {/* Design and prototyping */}
                <div className="flex items-start space-x-6 group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-600 rounded-full border-2 border-blue-400 shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">Design and prototyping</h3>
                    <p className="text-blue-100 text-base group-hover:text-white transition-colors">
                      Our talented designers translate requirements into interactive prototypes and mockups. We develop intuitive and engaging user interfaces with a mobile-first approach, ensuring a seamless experience for all devices.
                    </p>
                  </div>
                </div>

                {/* Software architecture and development */}
                <div className="flex items-start space-x-6 group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-600 rounded-full border-2 border-blue-400 shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">Software architecture and development</h3>
                    <p className="text-blue-100 text-base group-hover:text-white transition-colors">
                      Our experienced developers build robust, scalable, and secure software architectures using the latest technologies and best practices. We focus on clean, maintainable code that meets your requirements and evolves with your needs.
                    </p>
                  </div>
                </div>

                {/* Software quality assurance and testing */}
                <div className="flex items-start space-x-6 group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-600 rounded-full border-2 border-blue-400 shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">Software quality assurance and testing</h3>
                    <p className="text-blue-100 text-base group-hover:text-white transition-colors">
                      We engage the QA strategy and implement effective testing at the beginning of the project. Our team conducts thorough unit tests, integration tests, and performance tests to ensure reliability and quality across the entire software lifecycle.
                    </p>
                  </div>
                </div>

                {/* Deployment and launch */}
                <div className="flex items-start space-x-6 group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-600 rounded-full border-2 border-blue-400 shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">Deployment and launch</h3>
                    <p className="text-blue-100 text-base group-hover:text-white transition-colors">
                      When the product is fully tested, we move it into a production environment. We validate the software and core functions, ensuring the solution is accessible to the public and ready to meet all end-user expectations.
                    </p>
                  </div>
                </div>

                {/* Post-launch support and maintenance */}
                <div className="flex items-start space-x-6 group hover:bg-white/10 p-6 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-600 rounded-full border-2 border-blue-400 shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">Post-launch support and maintenance</h3>
                    <p className="text-blue-100 text-base group-hover:text-white transition-colors">
                      Our commitment doesn't end at launch. Our development team stays with the product, monitoring its performance, fixing issues, and continuously improving the software to ensure it aligns with business needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Years Showcase */}
            <div className="p-8 space-y-12 mb-16">
              {/* First Section */}
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-medium">
                  For <span className="text-blue-600 font-semibold">3+ years</span> now we have been responsible for your projects and we are proud of it!
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6 text-lg font-medium">
                  <div>
                    <span className="text-blue-600 text-2xl font-bold">250+</span>
                    <p>Developed custom solutions</p>
                  </div>
                  <div>
                    <span className="text-blue-600 text-2xl font-bold">25+</span>
                    <p>Countries, including the USA</p>
                  </div>
                  <div>
                    <span className="text-blue-600 text-2xl font-bold">3+</span>
                    <p>Years' Client engagement</p>
                  </div>
                  <div>
                    <span className="text-blue-600 text-2xl font-bold">70%</span>
                    <p>Senior developers</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-blue-600 text-2xl font-bold">98%</span>
                    <p>Satisfaction rate</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-medium">
                    <span className="text-blue-600 font-semibold">Why choose</span> product development with foxsolutions
                  </h2>
                  <ul className="mt-6 space-y-4 text-gray-700">
                    <li>✔ <strong>Quality excellence:</strong> We strive for quality and security, and ISO 27001 and ISO 9001 certifications prove our commitment to the highest international standards.</li>
                    <li>✔ <strong>High Client satisfaction:</strong> Our client satisfaction rate is 98%, thanks to our firm commitment to deadlines and their needs.</li>
                    <li>✔ <strong>Proven track of records:</strong> We have successfully completed 250 software projects across 27 countries in 11 business domains.</li>
                    <li>✔ <strong>High English proficiency:</strong> Our development center in Warsaw has a B2 English level.</li>
                  </ul>
                </div>
                <div>
                  <img src="/Team.jpg" alt="Development Team" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
            {/* Client Reviews Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <ReviewCarousel />
              </div>
            </section>

            <section id="benefits" className="bg-gradient-to-b from-blue-900 to-black text-white p-10 mb-16">
              <h2 className="text-center text-2xl font-medium">
                <span className="text-blue-400 font-semibold">Benefits</span> of foxsolution's product development approach
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {/* Quality of Deliverables */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.3L12 4.19L18 6.3V11.09Z" fill="white" />
                    <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM11 13.73L9.25 11.98L10.41 10.82L11 11.41L13.59 8.83L14.75 10L11 13.73Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Quality of Deliverables</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      Our services earned multiple official reviews from Clutch, GoodFirms, and other platforms, proving our commitment to quality.
                    </p>
                  </div>
                </div>

                {/* Fast time to market */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white" />
                    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Fast time to market</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      We actively provide suggestions and solutions, helping clients speed up their product development process.
                    </p>
                  </div>
                </div>

                {/* Proactive Engagement */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
                    <path d="M12.34 7.45C12.12 7.16 11.76 7 11.38 7C10.91 7 10.5 7.27 10.31 7.69L7.85 13.57C7.7 13.9 7.74 14.28 7.94 14.58C8.15 14.87 8.51 15.03 8.89 15.03H13.38C13.86 15.03 14.27 14.76 14.46 14.34L15.97 11.33C16.14 10.95 16.06 10.51 15.76 10.21C15.46 9.91 15.02 9.83 14.64 10L12.34 7.45Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Proactive Engagement</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      We don't just follow instructions but challenge clients' thinking where necessary, ensuring valuable insights.
                    </p>
                  </div>
                </div>

                {/* Reduced development costs */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
                    <path d="M15.5 11C15.78 11 16 10.78 16 10.5C16 10.22 15.78 10 15.5 10H8.5C8.22 10 8 10.22 8 10.5C8 10.78 8.22 11 8.5 11H15.5ZM15.5 14C15.78 14 16 13.78 16 13.5C16 13.22 15.78 13 15.5 13H8.5C8.22 13 8 13.22 8 13.5C8 13.78 8.22 14 8.5 14H15.5Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Reduced development costs</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      We use reusable components, open-source tools, and proven frameworks to lower costs without sacrificing quality.
                    </p>
                  </div>
                </div>

                {/* Transparency and openness */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
                    <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM6 16C6 13.33 10 12 12 12C14 12 18 13.33 18 16V18H6V16Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Transparency and openness during development</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      We provide complete visibility into project progress, ensuring clients stay updated and involved.
                    </p>
                  </div>
                </div>

                {/* Well-established processes */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="white" />
                    <path d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 15H17V17H15V15Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Well-established processes and management</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      Our experience with different companies enables us to adjust workflows to meet unique business needs.
                    </p>
                  </div>
                </div>

                {/* Risk management */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.3L12 4.19L18 6.3V11.09Z" fill="white" />
                    <path d="M12 7C10.09 7 8.5 8.59 8.5 10.5C8.5 12.41 10.09 14 12 14C13.91 14 15.5 12.41 15.5 10.5C15.5 8.59 13.91 7 12 7ZM12 12C11.17 12 10.5 11.33 10.5 10.5C10.5 9.67 11.17 9 12 9C12.83 9 13.5 9.67 13.5 10.5C13.5 11.33 12.83 12 12 12ZM13 15.5H11V17H13V15.5Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Risk management</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      We mitigate risks by assessing data, time, and budget constraints, ensuring smooth project execution.
                    </p>
                  </div>
                </div>

                {/* Flexible outsourcing options */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="white" />
                    <path d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 15H17V17H15V15Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Flexible outsourcing options</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      We offer adaptable outsourcing models, allowing businesses to optimize team size efficiently.
                    </p>
                  </div>
                </div>

                {/* Scalable solutions */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.3L12 4.19L18 6.3V11.09Z" fill="white" />
                    <path d="M8.5 9.5L10.5 11.5L8.5 13.5L10.5 15.5L12.5 13.5L14.5 15.5L16.5 13.5L14.5 11.5L16.5 9.5L14.5 7.5L12.5 9.5L10.5 7.5L8.5 9.5Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Scalable solutions</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      Our development approach ensures projects are built for future growth, allowing seamless scaling.
                    </p>
                  </div>
                </div>



                {/* Enhanced customer satisfaction */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
                    <path d="M8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10ZM14 10C14 8.9 14.9 8 16 8C17.1 8 18 8.9 18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10ZM7.96 15.93C9.04 17.24 10.46 18 12 18C13.54 18 14.96 17.24 16.04 15.93C15.61 15.12 14.83 14.5 13.95 14.5H10.05C9.17 14.5 8.39 15.12 7.96 15.93Z" fill="white" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Enhanced customer satisfaction</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      Our customer-centric solutions ensure that end-users receive highly intuitive and efficient experiences.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Getting Started */}
            <section id="get-started" className="rounded-lg p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden mb-16">
              <RevealOnScroll>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Ready to start your software product development?</h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl">
                    Drop us a line and get a free analysis and time estimation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton size="lg">
                      Get in Touch
                    </AnimatedButton>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                  <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                </div>
              </RevealOnScroll>
            </section>




            {/* Enhanced customer satisfaction */}

            <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-200">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" />
                <path d="M8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10ZM14 10C14 8.9 14.9 8 16 8C17.1 8 18 8.9 18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10ZM7.96 15.93C9.04 17.24 10.46 18 12 18C13.54 18 14.96 17.24 16.04 15.93C15.61 15.12 14.83 14.5 13.95 14.5H10.05C9.17 14.5 8.39 15.12 7.96 15.93Z" fill="white" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">Enhanced customer satisfaction</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  Our customer-centric solutions ensure that end-users receive highly intuitive and efficient experiences.
                </p>
              </div>
            </div>




            <FAQSection />
            <Contact />
          </div>

          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4">
              <h3 className="font-medium mb-4">Table of Contents</h3>

            

              //<TableOfContents sections={sections}
              />



            </div>
          </div>
        </div>

        <section id='footer'>
          <Footer />
        </section>
      </div>
    </div>

  );
};

export default ServicesPage;