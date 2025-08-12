
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileAlt, FaUsersCog, FaHandshake, FaProjectDiagram, FaMoneyCheckAlt, FaShippingFast, FaIndustry, FaMobileAlt, FaCheck} from 'react-icons/fa';
import { ShieldCheck, CloudCog, BarChart3, Users2, Lock, RefreshCcw, ChevronRight, Touchpad,SquareM,Shuffle,MessageSquare, CheckSquare, Shield, FileCode, Bot,SpellCheck,Clock, DollarSign, PieChart } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import FAQ from '@/components/ui/faq';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import { CertificationsSection } from '@/components/ui/Certification';
import TestimonialCarousel from '@/components/ui/Testimonial';
import { title } from 'process';


const contentsMenu = [
    { title: 'Our Blockchain Services', id: 'Our-blockchain-services' },
    { title: ' How We Can Help', id: 'help' },
    { title: ' Blockchain Development Process', id: 'development-process' },
    
    { title: 'Awards & Recognitions', id: 'Certification' },  
    { title: 'Awesome stories', id: 'stroiesSection' },
    {title:'FAQ',id:'faq'},
  ];



  const articles = [
      {
          title: "Top 10 ChatGpt Alternatives for Business Use in2025",
          time: "52 mins",
          date: "March 24, 2025",
          image: "https://thimpress.com/wp-content/uploads/2025/03/best-character-ai-alternatives.webp",
          path: "/articles/chatgpt-alternatives"
      },
      {
          title: "Top 25 MVP Development Companies?",
          time: "52 mins",
          date: "February 24, 2025",
          path: "/articles/iot-oil-gas"
      },
      {
          title: "IoT Apps For Oil & Gas Industry-Whats in It?",
          time: "12 mins",
          date: "February 20, 2025",
          path: "/articles/iot-logistics"
      },
      {
          title: "Internet Of Things in Logistic Development",
          time: "11 mins",
          date: "February 18, 2025",
          path: "/articles/iot-education"
      },
  ];
  




const Blockchain_Development = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef([]);
  const [activeModel, setActiveModel] = useState('softwareDevelopment');
  const toggleAccordion = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const [activeTab, setActiveTab] = useState('time-material');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  const processSteps = [
    { number: 1, title: 'Blockchain ideation' },
    { number: 2, title: 'Technology selection' },
    { number: 3, title: 'Design' },
    { number: 4, title: 'Development' },
    { number: 5, title: 'QA & Testing' },
    { number: 6, title: 'Deployment' },
    { number: 7, title: 'Support & Maintenance' }
  ];
  

  

  const mvpFaqs = [
    {
        question: "What are blockchain development services?",
        answer:"Blockchain development services are activities aimed at building an application that leverages the benefits of decentralized blockchain networks, which have enhanced security and increased traceability of operations within the network."
    },
    {
        question: "Which software is best for blockchain development?",
        answer:"Depending on the business goals, providers of blockchain development services use various tools:Solidity, Prysm, Web3j, Truffle, Vyper, EOS.IO, Metamask, Blockchain Testnet. The final choice of tools depends on the expertise of the blockchain development services provider and the project needs.",
           
    } ,
    {
        question: "What are the 4 types of Blockchains?",
        answer:"AI developers design, build, and optimize machine learning models, neural networks, and AI-driven applications. Responsibilities include data preprocessing, training models, fine-tuning algorithms, integrating AI into systems, and deploying AI models."
     },
    {
        question: "Why SumatoSoft?",
        answer:"AI service costs depend on project scope, complexity, and required AI models. Basic AI solutions start at $10,000–$30,000, while full-scale AI product development can exceed $100,000–$500,000+. You can refer for a free quote to any custom AI development company."
    },
   
];
        

  // Intersection Observer for ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -50% 0px' }
    );

    sectionRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  // Assign refs to sections
  const addToRefs = useCallback((el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  }, []);

  return (
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Contents Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Contents</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-4">
            {contentsMenu.map((item, index) => (
              <li
                key={index}
                className={`text-lg p-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
        {/* Breadcrumb Section */}
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
              <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Blockchain Development</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Custom  
            <span className="text-blue-500"> Blockchain </span> 
            development services
            
            </h1>
            <p className="mt-6 text-lg text-gray-300 mt-8 mb-8">
            We help enterprises and startups to get the full advantage of blockchain solutions, improve business efficiency, security and enable them to boost their businesses. Leverage cutting-edge blockchain technology to propel your business into the future.
            </p>
  
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
              <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
               Hire Blockchain Developers
              </button>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
                <span className="text-gray-200">Clients rate our services 5.0</span>
              </div>
            </div>
          </div>
        </section>
       

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {/* Main content container with proper layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main content area - takes full width on mobile, 3/4 on desktop */}
              <div className="w-full lg:w-3/4">
                {/* Enterprise Software Section */}

                <section id="Our-blockchain-services" ref={(el) => addToRefs(el, 0)} className="mb-16">
                  <RevealOnScroll>
                    <div className="bg-gray-50 py-3 px-4 md:px-8">
                    <h1 className="text-5xl font-bold mb-12">
                    Our<span className="text-blue-500"> blockchain development </span> services
        </h1>
       
       
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {/* Service 1 */}
          <div className="service-card">
            <div className="text-blue-500 mt-12 mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-14 h-14">
                <rect x="10" y="10" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="2"/>
                <circle cx="15" cy="30" r="2" fill="currentColor"/>
                <circle cx="45" cy="30" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Smart contracts</h2>
            <p className="text-gray-700">
              We develop, test and deploy tailor-made smart contracts with unique business logic. Crafting state-of-the-art smart contracts to empower your business with transparent and secure transactions.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="service-card">
            <div className="text-blue-500  mt-12 mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-14 h-14">
                <rect x="25" y="10" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="10" y="25" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="40" y="25" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="25" y="40" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="30" y1="20" x2="30" y2="25" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="2"/>
                <line x1="35" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="35" x2="30" y2="40" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Decentralized app development</h2>
            <p className="text-gray-700">
              We build high-end DApps that combine several interrelated smart contracts that share common logic and front end.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="service-card">
            <div className="text-blue-500 mt-12 mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-14 h-14">
                <rect x="15" y="15" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M30 26V34M27 29H33" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">ICO solutions</h2>
            <p className="text-gray-700">
              We provide you with our professional expertise, thus enabling you to launch a successful crowdfunding campaign.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="service-card">
            <div className="text-blue-500 mt-12 mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-14 h-14">
                <rect x="20" y="10" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="10" y="30" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="30" y="30" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="20" y="40" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="40" y="20" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="25" y1="20" x2="25" y2="30" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="35" x2="30" y2="35" stroke="currentColor" strokeWidth="2"/>
                <line x1="35" y1="30" x2="40" y2="25" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Custom blockchain networks</h2>
            <p className="text-gray-700">
              With our solid background and expertise in blockchain development, we deliver customized solutions that will refuel your business.
            </p>
          </div>

          
          {/* Service 5 */}
          <div className="service-card">
            <div className="text-blue-500  mt-12 mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-14 h-14">
                <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="25" y="25" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="20" y1="20" x2="40" y2="40" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="40" x2="40" y2="20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Crypto wallet development</h2>
            <p className="text-gray-700">
              We create crypto wallet DApps that support multiple cryptocurrencies and contain information about your wallet balance.
            </p>
          </div>

          
          {/* Service 6 */}
          <div className="service-card">
            <div className="text-blue-500 mt-12 mb-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-14 h-14">
                <path d="M30 15L45 22V35C45 40 38 45 30 48C22 45 15 40 15 35V22L30 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M30 25V35M25 30H35" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Security boost</h2>
            <p className="text-gray-700">
              We develop decentralized data storages to boost security, integrate data, ensure better access control and reduce risks.
            </p>
          </div>
        </div>
      </div>
         </div>
        </div>
        </RevealOnScroll>               
        </section>

        <section id="help" className='mt-16'>
        <div className="flex flex-col lg:flex-row mb-16  bg-white">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-16 text-center">
          <span className="text-blue-500">How</span> we can help
        </h1>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Benefit Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <rect x="12" y="15" width="36" height="25" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M20 25L30 35L40 25" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="30" y="33" textAnchor="middle" fill="currentColor" fontSize="8">$</text>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Cut the cost of business transactions</h3>
          </div>

          {/* Benefit Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <rect x="10" y="15" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="50" y1="25" x2="40" y2="25" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Streamline your financial operations</h3>
          </div>

          {/* Benefit Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <path d="M30 15L45 22V35C45 40 38 45 30 48C22 45 15 40 15 35V22L30 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M25 30L30 35L40 25" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Secure your financial operations</h3>
          </div>

          {/* Benefit Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <rect x="15" y="15" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="35" y="15" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="15" y="35" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="35" y="35" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="45" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="45" cy="50" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Reinforce your asset management</h3>
          </div>
        </div>
        </div>
        </div>
        </section>

        <section id="development-process" className='mt-16 mb-32'>
        {/* Development Process Section */}
        <div className="max-w-6xl mx-auto  mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our blockchain development <span className="text-blue-500">process</span>
          </h2>

         
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
            
            {/* Process Steps */}
            <div className="flex justify-between">
              {processSteps.map((step) => (
                <div key={step.number} className="flex flex-col items-center relative">
                  {/* Step Number Circle */}
                  <div className="w-24 h-24 rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center mb-6 z-10 text-blue-500 text-2xl font-bold">
                    {step.number}
                  </div>
                  {/* Step Title */}
                  <h3 className="text-center text-base font-medium max-w-24">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      
        </section>
        

        <section id="we-wrok-with" className='mt-32 mb-16'>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                
                 <img src="./Blockchain_Development_Images/We_Work_With.png" alt="AI" className="w-400 h-2000 mb-4 h mt-24" />
                
              </div>
            </section> 

            <section id="What-makes-us-different" className='mb-32'>
             <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6">
        What makes us   <span className="text-blue-500">different</span>  
        </h1>
      </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* SPA Solution */}
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20 20h24M20 30h24M20 40h12" stroke="currentColor" strokeWidth="2" />
              <path d="M22 12v-4M42 12v-4M22 56v-4M42 56v-4" stroke="currentColor" strokeWidth="2" />
              <path d="M16 18c-2 0-4-1-4-4M48 18c2 0 4-1 4-4M16 46c-2 0-4 1-4 4M48 46c2 0 4 1 4 4" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Technology expertise</h2>
          <p className="text-gray-700">
          Decade-long trailblazers in blockchain innovation, we’re committed to elevating your business with robust, bespoke blockchain solutions.          </p>
        </div>

       
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="10" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M40 15v4M36 44v4M40 44v8M44 44v4" stroke="currentColor" strokeWidth="2" />
              <circle cx="40" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 32c-3 3-3 9 0 12s9 3 12 0" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20 25c-6 6-6 15 0 21s15 6 21 0" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Quality control</h2>
          <p className="text-gray-700">
          Our Senior Developers and CTO always participate in the code review process regardless of the project size to ensure code quality.
          </p>
        </div>

        
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M22 36c-6 3-10 8-10 14h40c0-6-4-11-10-14" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="44" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M26 28l6-6 6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Full transparency</h2>
          <p className="text-gray-700">
          We communicate weekly, provide several contact points, send timesheet reports monthly even if you don’t request them, explain potential risks and help to handle them, and help to avoid unnecessary costs.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="16" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M32 24v8M16 40v-8h32v8" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Agile approach</h2>
          <p className="text-gray-700">
          We follow best project management practices & processes like Agile methodology, Scrum, and Kanban. We provide blockchain development services with a strong focus on timely software delivery and close cooperation.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="12" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="24" y="20" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M22 42h20M26 42v10M38 42v10" stroke="currentColor" strokeWidth="2" />
              <path d="M24 24h16M24 26h16" stroke="currentColor" strokeWidth="2" />
              <path d="M26 18l2-2 2 2M34 18l2-2 2 2" stroke="currentColor" strokeWidth="2" />
              <text x="30" y="30" fontSize="10" textAnchor="middle" fill="currentColor">ERP</text>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Trusted</h2>
          <p className="text-gray-700">
          Based on the most trusted review platforms:

5.00/5 Goodfirms.co

4.8/5 Clutch.co.
          </p>
          </div>
         </div>
             </section>

     <section id="Benefits-of-choosing-Fox-solution" className='mb-8'>
     <div className="flex flex-col lg:flex-row bg-white">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-16">
          <span className="text-blue-500">Benefits</span> of choosing SumatoSoft as the blockchain development service provider
        </h1>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Build on */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold">Build on</h2>
            
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <rect x="5" y="5" width="30" height="35" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="15" x2="28" y2="15" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="30" x2="20" y2="30" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 35L35 40M35 40L42 33" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Proven workflows, Dedicated QA specialists</h3>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <rect x="5" y="30" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="20" y="25" width="10" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M15 10L25 5L35 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="25" y1="5" x2="25" y2="25" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Lessons learned after 36000 hours of custom software development</h3>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <circle cx="15" cy="15" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="35" cy="15" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="15" cy="35" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="35" cy="35" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M22 15H28M15 22V28M35 22V28M22 35H28" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Openness to share knowledge and experience with your teams</h3>
              </div>
            </div>
          </div>
          
          {/* Column 2: Go faster with */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold">Go faster with</h2>
            
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M25 15C30 20 30 30 25 35" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M25 15C20 20 20 30 25 35" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Agile methodology</h3>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <rect x="10" y="10" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="15" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="15" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="2"/>
                  <line x1="15" y1="30" x2="35" y2="30" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="40" cy="20" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">100% transparency</h3>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="25" cy="25" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M15 15L35 35" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Dedicated Technical PO / PM / BA</h3>
              </div>
            </div>
          </div>
          
          {/* Column 3: Stay in control */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold">Stay in control</h2>
            
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="25" y1="15" x2="25" y2="25" stroke="currentColor" strokeWidth="2"/>
                  <line x1="25" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Clear and detailed estimates</h3>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <rect x="10" y="10" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="15" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="15" y1="25" x2="25" y2="25" stroke="currentColor" strokeWidth="2"/>
                  <path d="M40 30L30 40M30 40L20 30" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Sprint / monthly reports, custom reports</h3>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 50 50" className="w-12 h-12">
                  <rect x="10" y="10" width="30" height="25" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="15" y="15" width="20" height="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M20 40C20 37 30 37 30 40" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 45C20 42 30 42 30 45" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Regular communications: calls, emails, chats, personal meetings</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

     </section>

    <section id="our-recent-work">
     <div className="flex-1 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Recent <span className="text-blue-500">software</span> we developed
          </h1>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="./Blockchain_Development_Images/Frame-tartle-dashboard-screenshotr.webp" 
                    alt="Cost management platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">Innovative Big Data Trading Platform</h2>
                  <p className="text-lg mb-6">This blockchain-based solution enables companies and individuals to buy and sell big data sets securely through a private digital identity, without any intermediates, and pay with Bitcoin.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
            <div className="bg-teal-700 from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="./Blockchain_Development_Images/Frame-1787-1.webp" 
                    alt="Cost management platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">Cowfunding & Project Managemanet Service</h2>
                  <p className="text-lg mb-6">Umergence is a unique platform that connects people with ideas to people with skills and capital.</p>
                </div>
              </div>
            </div>
            </div>


            <div className="space-y-12">
            <div className="bg-slate-600 from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="./Blockchain_Development_Images/Umergence-perspr-1.webp" 
                    alt="Cost management platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">Dexai Robotics: graphical user interface for robot operation</h2>
                  <p className="text-lg mb-6">Meet Alfred, an automated robotic arm and your personal sous chef! Alfred was born at Dexai Robotics, while SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot!</p>
                </div>
              </div>
            </div>
            </div>
            
            
                
              </div>
            </div>
          </div>
        
        </section>
        <section id="reviews" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 mt-2">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <TestimonialCarousel />
            </div>
        </section> 

        <section id="Certification" className="mt-32 mb-32">
                
               <CertificationsSection/>
                
                </section>

           
                <section id="contactsection" className='mt-32'>
                <Contact/>
                </section>

                <section id="stroiesSection">
                <section id="stories" className="px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
              We have awesome <span className="text-blue-600">stories</span> to tell you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-gray-100 p-4 rounded-xl">
                  <img
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="rounded-xl mb-4 w-[800px] h-[260px] hover:scale-105 transition-transform duration-300"
                  />
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
                </section>

                <section id="faq" className="px-4 mb-32 mt-32">
                  <FAQ faqs={mvpFaqs}/>
                  <a className='text-red-500'>Load More  </a>
                </section>

                
                
              </div>
               
              {/* Table of Contents - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block w-1/4">
                <div className="sticky top-24 pl-4">
                  <TableOfContents
                    sections={contentsMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blockchain_Development;

