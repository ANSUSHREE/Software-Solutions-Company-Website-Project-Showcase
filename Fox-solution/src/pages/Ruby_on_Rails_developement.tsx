
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileAlt, FaUsersCog, FaHandshake, FaProjectDiagram, FaMoneyCheckAlt, FaShippingFast, FaIndustry, FaMobileAlt, FaCheck } from 'react-icons/fa';
import { ShieldCheck, CloudCog, BarChart3, Users, Lock, RefreshCcw, ChevronRight, Touchpad, SquareM, Shuffle, MessageSquare, CheckSquare, Shield, FileCode, Bot, SpellCheck, Clock, DollarSign, PieChart } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import FAQ from '@/components/ui/faq';
import { TableOfContents } from '../components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import { CertificationsSection } from '@/components/ui/Certification';
import TestimonialCarousel from '@/components/ui/Testimonial';
import { link } from 'fs';
import { title } from 'process';



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


const contentsMenu = [
  { title: ' Services', id: 'services' },
  { title: 'Business', id: 'business' },
  { title: 'Consulting', id: 'consulting' },
  { title: 'Why Fox Solution', id: 'Why-Fox-Solution' },
  { title: 'Hiring Process', id: 'HowWeHire' },
  { title: 'Tech-Stack', id: 'Tech-Stack' },
  { title: 'Case Studies', id: 'recent-work' },
  { title: 'Why ROR', id: 'why-ror' },
  { title: 'Pricing models', id: 'Pricing' },
  { title: 'Process', id: 'Process' },
  { title: 'FAQ', id: 'faq' }
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);


const techCategories = [
  {
    id: 'Web frameworks',
    title: 'Web frameworks',
    desc: "These are ready-made development tools that provide the necessary capabilities to streamline both the frontend and backend development process, and cut development time and costs.",
    items: ['Ruby on Rails',
      'NodeJS',
      'ReactJS',
      'VueJS',
      'Gatsby',
      'Ember',
      'Electron']
  },
  {
    id: ' Databases and libraries',
    title: 'Databases and libraries',
    desc: "Databases and complementary libraries allow us to store, retrieve and manipulate data. We use technologies that enable fast, reliable data handling, improve data access performance, and simplify querying and migrations. ",
    items: ['PostgreSQL',
      'Redis',
      'Elasticsearch',
      'MySQL',
      'MongoDB',
      'ActiveRecord']
  },
  {
    id: 'Testing and development tools',
    title: 'Testing and development tools',
    desc: "These tools serve one purpose – to increase code quality and streamline deployment and development. They allow Ruby on Rails developers to verify application functionality and performance, ensure code integrity, rescue errors in production, and catch bugs early. ",
    items: ['RSpec',
      'Capybara',
      'Cucumber',
      'Cypress',
      'Apache JMeter',
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'CircleCI',
      'Docker',
      'Docker Compose',
      'Webpack']
  },
  {
    id: 'Additional libraries and tools',
    title: 'Additional libraries and tools',
    desc: 'Different complementary tools which proved to be valuable over time and became a part of our development process. ',
    items: ['Sidekiq',
      'ActionCable',
      'jQuery',
      'React',
      'Vue.js',
      'AWS ',
      'Heroku ',
      'DigitalOcean',
      'Golang',
      '   React Native']
  }

];

const HowWeHire = [
  {
    number: "1",
    title: "CV studying",

    description: " Our HR department thoroughly reviews the CVs to understand their experience, skills, education, and background. We have our internal standards that candidates must meet."

  },
  {
    number: "2",
    title: "Pre-screen call",
    description: "Those who pass the initial screening are invited to participate in the pre-screen call, where we evaluate their background, motivation, and goals.",
  },
  {
    number: "3",
    title: "Technical interview",
    description: "The technical interview follows. Here, we assess the candidates’ hard skills, including technology knowledge, problem-solving abilities, awareness of best coding practices, and more.",

  },
  {
    number: "4",
    title: "Business interview",
    description: "Rigorous testing and validation of AI models to measure their performance, accuracy, and reliability. Our AI developers split the datasets into two parts: one is used for training and the other for validation. Our experts  fine-tune the model’s parameters to minimize discrepancies between predicted and actual outputs. ",
  },
  {
    number: "5",
    title: "Final evaluation",
    description: "This is our internal evaluation step, during which all participants in the hiring process discuss and evaluate the candidate’s performance, skills, and cultural fit. We ensure that only the best candidates are selected.",

  },
  {
    number: "6",
    title: "Probation period",
    description: "A new team member undergoes a probation period during which we evaluate the candidate’s ability to work in a real work environment with our team. Only after the successful pass of this period, we are ready to hire a RoR developer. ",
  },
  {
    number: "7",
    title: "Member of FoxsolutionTeam",
    description: "Upon successfully completing the probation period, we officially hire the Ruby on Rails developer and they join our team and contribute to our and the Client’s success. Our Clients can interview our developers to ensure they meet your expectations.",
  },
];





const RubyOnRailsDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef([]);
  const [activeModel, setActiveModel] = useState('softwareDevelopment');
  const toggleAccordion = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('MVPs-for-startup');

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

  const mvpFaqs = [

    {
      question: "What makes Ruby on Rails (RoR) ideal for web development at Foxsolution?",
      answer: "RoR is favored for its rapid development capabilities, robust framework, and strong community support. At Foxsolution, we leverage RoR’s conventions to build scalable, maintainable, and efficient web applications quickly."
    },
    {
      question: "How does Foxsolution handle scalability challenges in Ruby on Rails applications?",
      answer: "We design RoR applications with scalability in mind, using best practices in database design, caching, and cloud services to ensure that the applications can grow alongside your business needs."
    },
    {
      question: "Can Foxsolution develop large-scale enterprise solutions using Ruby on Rails?",
      answer: "For frontend development, we work with frameworks like ReactJS, VueJS, and Gatsby. On the backend, we use NodeJS, PostgreSQL, Redis, and Elasticsearch. We also integrate testing tools like RSpec and Docker, along with additional tools like AWS, React Native, and Golang for comprehensive solutions."
    },
    {
      question: "What other technologies do you use in addition to Ruby on Rails?",
      answer: "Outsourcing offers cost savings, access to skilled developers, faster time to market, and high team flexibility. It eliminates hiring and infrastructure expenses while ensuring access to top developers globally."
    },
    {
      question: "How much do you charge?",
      answer: "Our pricing varies depending on the project’s scope, complexity, and timeline. As a top ruby on rails development company USA, our average hourly rate is 55$, but the exact cost of the whole software development is calculated after examining the details of your project."
    }
  ];


  const modelContent = {
    softwareDevelopment: {
      title: "Software development outsourcing",
      description: "Outsourcing implies entrusting the entire software development process to our ruby on rails development team. We assemble a group of specialists, including business analysts, designers, Ruby on Rails developers, and QA experts. This team moves through the development process from business requirements elicitation, UI/UX design, software development, quality assurance, and deployment, while you provide input, set goals, and monitor the progress."
    },
    staffAugmentation: {
      title: "Staff augmentation",
      description: "This option involves our Ruby on Rails specialists joining your workforce, bringing the skills required for your project. This model is ideal for companies with existing teams that need additional expertise or resources for short-term projects, allowing you to fill skill gaps without the commitment of permanent hires."
    },
    dedicatedTeam: {
      title: "Dedicated team",
      description: "A dedicated team of Ruby on Rails developers that is fully managed by your project manager. Unlike staff augmentation, where specialists are brought in for specific tasks, a dedicated team manages the entire development process—from business analysis to quality assurance—while you retain control of overall management. This model is best suited for long-term projects that extend beyond a year."
    }
  };



  const [activeService, setActiveService] = useState('Requirements-clarification');

  const services = [
    { id: 'Requirements-clarification', name: 'Requirements clarification', active: true },
    { id: 'Prototyping-Design', name: 'Prototyping & UX/UI Design', active: false },
    { id: 'Architecture-design-development', name: 'Architecture design & development', active: false },
    { id: 'Quality-security-checks', name: 'Quality & security checks', active: false },
    { id: 'Deployment-scaling', name: 'Deployment & scaling', active: false },
    { id: 'Ongoing-support-maintenance', name: 'Ongoing support & maintenance', active: false }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  const renderContent = () => {
    switch (activeService) {
      case 'Requirements-clarification':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">Requirements clarification</h2>
            <p className="text-lg text-gray-800 mb-8">
              We start by analyzing the existing information and understanding the business landscape and project vision. This includes:
            </p>
            <div className="flex mb-2">
              <CheckIcon />
              <p>online calls where we elicit requirements and define the project vision;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>we document functional and non-functional requirements;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>conducting a technical feasibility analysis to determine the appropriate tech stack;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>drawing a development plan with accurate time and budget estimates.</p>
            </div>


          </>
        );
      case 'Prototyping-Design':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">Prototyping & UX/UI Design</h2>
            <p className="text-lg text-gray-800 mb-8">
              We design interfaces with several ideas in mind: they must be helpful and intuitive, the design should be visually appealing, and the application should look better than competitors’. To ensure this, we:
            </p>
            <div className="flex mb-2">
              <CheckIcon />
              <p>make prototypes and clickable wireframes to visualize user flows;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>conduct user testing;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>design several versions of the interfaces to choose from;
              </p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>communicate with you to select the best design option.</p>
            </div>

          </>
        );
      case 'Architecture-design-development':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">Architecture design & development</h2>
            <p className="text-lg text-gray-800 mb-8">
              In this phase, we build a robust, scalable backend using Ruby on Rails and develop the frontend using other modern frameworks and technologies.
            </p>
            <div className="flex mb-2">
              <CheckIcon />
              <p>defining system architecture;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>selecting the optimal database and developing APIs;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>developing interactive user interfaces.</p>
            </div>
          </>
        );
      case 'Quality-security-checks':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">Quality & security checks            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Testing is integral to our process to ensure quality, performance, and security. We follow best industry practices, including automated and shift-right testing, while incorporating CI/CD pipelines.
            </p>
            <div className="flex mb-2">
              <CheckIcon />
              <p>automated and manual testing;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>performance and load testing;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>security audits to prevent vulnerabilities.</p>
            </div>
          </>
        );
      case 'Deployment-scaling':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">Deployment & scaling
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              We handle deployment, app growth, and scaling as part of our Ruby on Rails development services
            </p>
            <div className="flex mb-2">
              <CheckIcon />
              <p>cloud-based deployment on AWS, Google Cloud, or Azure;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>containerization and orchestration using Docker and Kubernetes;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>developing scaling strategies to handle future growth</p>
            </div>
          </>
        );
      case 'Ongoing-support-maintenance':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">Ongoing support & maintenance       </h2>
            <p className="text-lg text-gray-800 mb-8">
              Post-launch, we provide long-term support to ensure your application remains stable, secure, and up-to-date.
            </p>
            <div className="flex mb-2">
              <CheckIcon />
              <p>bug fixes and performance monitoring;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>new feature implementation;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon />
              <p>regular updates and security patches to maintain reliability.</p>
            </div>
          </>
        );

      default:
        return null;
    }
  };


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
    <div className="min-h-screen flex flex-col bg-white sm:px-6 md:px-1">
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
              <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Ruby On Rails Development </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8 min-h-screen flex items-center">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500"> Ruby on Rails </span>
              consulting and development company
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              With a decade of excellence, tens of completed courses, hundreds of developed projects, countless professional articles read, and thousands of hours worked, we’re your go-to team for custom Ruby on Rails software development and Ruby on Rails consulting. Reach out to us to get started.            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
              <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit mi-12">
                Hire Ruby Developers
              </button>

              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
                <span className="text-gray-200">Clients rate our services 5.0</span>
              </div>
            </div>
          </div>
        </section>



        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {/* Main content container with proper layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main content area - takes full width on mobile, 3/4 on desktop */}
              <div className="w-full lg:w-3/4">
                {/* Enterprise Software Section */}
                <section id="services" ref={(el) => addToRefs(el, 0)} className="mb-16 ">
                  <RevealOnScroll>
                    <div className="bg-gray-50 py-3 px-4 md:px-8 mt-12">
                      <h1 className="text-5xl font-bold mb-6 text-center">
                        Our top-tier <span className="text-blue-500"> Ruby on Rails</span> Development Services
                      </h1>
                      <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center mb-8">
                        From supporting and modernizing legacy systems to custom development from scratch, within tough budgets and short timeframes, or in the long run with multiple iterations and continuous improvements, we deliver expert Ruby on Rails services to all businesses, helping them thrive in the digital world.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Custom Web Development */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Layer_1-9.svg" className='mb-8' />
                          <h2 className="text-2xl font-bold mb-4">Custom Node.js web development</h2>
                          <p className="text-gray-700">
                            We develop custom web applications for startups and enterprises, leveraging the power of Node.js. Our team ensures high performance, security, and a great user experience with our custom web applications that use Node.js for the backend and API and modern frameworks like React, Next.js, and Vue.js for the frontend.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Layer_1-3-1.svg" className='mb-8' />
                          <h2 className="text-2xl font-bold mb-4">Vendor transition</h2>
                          <p className="text-gray-700">
                            Seamlessly transition from your current vendor to our expert ROR team. We ensure a smooth handover of your project with minimal disruptions in operations, keeping your business up and running during the transition period.          </p>
                        </div>


                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Frame-3-1.svg" className='mb-8' />
                          <h2 className="text-2xl font-bold mb-4">Legacy app modernization</h2>
                          <p className="text-gray-700">
                            Ruby on Rails brings multiple benefits, and it’s worth considering moving your system to this technology. We help establish KPIs after modernization and upgrade your legacy applications with Ruby on Rails.
                          </p>
                        </div>

                        {/* API Development */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Layer_1-6-1.svg" className='mb-8' />
                          <h2 className="text-2xl font-bold mb-4">Code review & security assessment</h2>
                          <p className="text-gray-700">
                            Have doubts about whether your application is secure? Our expert team conducts thorough code reviews, identifies vulnerabilities, optimizes performance, and ensures it is clean, secure, and free of unnecessary redundancies.
                          </p>

                        </div>


                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Dedicated-SaaS-developers.svg" className='mb-8' />
                          <h2 className="text-2xl font-bold mb-4">Dedicated developers</h2>
                          <p className="text-gray-700">
                            Get access to a dedicated team of ROR developers who work as an extension of your in-house team. We provide ongoing support, development, and Ruby on Rails consulting services tailored to your project’s needs.</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Layer_1-7-1.svg" className='mb-8' />

                          <h2 className="text-2xl font-bold mb-4">AI Integration</h2>
                          <p className="text-gray-700">
                            Plan to implement the power of AI? It’s easier with an expert team at your disposal! We help integrate OpenAI’s latest models into existing or new applications, develop new AI-backed functionality, improve user experience, and much more.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg">

                          <img src="./Ruby_on_Rails_images/Layer_1-11.svg" className='mb-8' />
                          <h2 className="text-2xl font-bold mb-4">Support & Maintenance</h2>
                          <p className="text-gray-700">
                            We help to keep your ROR application running smoothly with our proactive support and maintenance services. We handle everything from bug fixes to updates and security patches, ensuring your application stays up-to-date and secure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Transform Your Ideas into Reality
                      </h2>
                      <p className="text-xl text-left">
                        Let our RoR specialists bring your vision to life. Click here to begin!                  </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>


                <section id="business">
                  <div className="flex-1 bg-gray-900 text-white p-8 mt-8">
                    <div className="max-w-6xl mx-auto">
                      <div className="flex flex-col mt-16 mb-16">
                        {/* Main content */}
                        <div className="flex flex-1">
                          {/* Content area */}
                          <div className="flex-1 p-8">
                            <header className="mb-12 text-center">
                              <h1 className="text-4xl font-bold mb-2">
                                <span className="text-white">Ruby on Rails development for businesses of any  </span>
                                <span className="text-blue-500">scale</span>

                              </h1>
                            </header>

                            {/* Pricing Tabs */}
                            <div className="flex justify-center mb-12">
                              <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
                                <button
                                  className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'MVPs-for-startup' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                                  onClick={() => handleTabClick('MVPs-for-startup')}
                                >
                                  <div className="w-12 h-12 flex items-center justify-center  mb-2">
                                    <img src="./Ruby_on_Rails_images/MVPs-for-startups.svg" />
                                  </div>
                                  <span className="text-lg">MVP For StartUps</span>
                                </button>

                                <button
                                  className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'SMBs' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                                  onClick={() => handleTabClick('SMBs')}
                                >
                                  <div className="w-12 h-12 flex items-center justify-center  mb-2">
                                    <img src="./Ruby_on_Rails_images/Startups-1.svg" />
                                  </div>
                                  <span className="text-lg">SMBs</span>
                                </button>

                                <button
                                  className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'Enterprise' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                                  onClick={() => handleTabClick('Enterprise')}
                                >
                                  <div className="w-12 h-12 flex items-center justify-center  mb-2">
                                    <img src="./Ruby_on_Rails_images/Enterprise-web-apps-2.svg" />
                                  </div>
                                  <span className="text-lg">Enterprise</span>
                                </button>
                              </div>
                            </div>

                            {/* Content for selected tab */}
                            <div className="max-w-4xl mx-auto">
                              {activeTab === 'MVPs-for-startup' && (
                                <div className="flex">
                                  <div className="w-1/2 p-4">
                                    <h2 className="text-3xl font-bold mb-6 text-white">MVP development for startups </h2>
                                    <p className="text-lg  mb-8 text-white">
                                      Ruby on Rails is a great choice for startups because it offers rapid development, scalability, and cost-effectiveness. Its convention-over-configuration philosophy speeds up the development process, allowing startups to quickly bring their ideas to life while keeping the codebase clean and maintainable. Our Ruby on Rails expertise ensures your project stays on track, on budget, and ready for growth. In our experience, an MVP can be built for 6-8 weeks.
                                    </p>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>Rapid Growth</p>
                                    </div>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>lower development costs.</p>
                                    </div>
                                  </div>
                                  <div className="w-1/2 p-4">
                                    <img src="./Ruby_on_Rails_images/per-loov-oXqn2CXC_9Q-unsplash-2048x1538.webp" />
                                  </div>
                                </div>
                              )}

                              {activeTab === 'SMBs' && (
                                <div className="flex">
                                  <div className="w-1/2 p-4">
                                    <h2 className="text-3xl font-bold mb-6 text-white">RoR Development for SMBs </h2>
                                    <p className="text-lg  mb-8 text-white">
                                      We help SMBs build high-quality, custom web applications that grow with their business. SMBs can benefit from Ruby on Rails thanks to its secure, high-performance nature and a robust ecosystem of tools and libraries that can meet any business need. Whether you’re just starting or looking to expand, we’re here to support your business at every stage.
                                    </p>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>secure architecture;</p>
                                    </div>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>scalable infrastructure;</p>
                                    </div>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>a robust ecosystem of tools and libraries.</p>
                                    </div>
                                  </div>
                                  <div className="w-1/2 p-4">
                                    <img src="./Ruby_on_Rails_images/maxwell-nelson-taiuG8CPKAQ-unsplash-2048x1365.webp" />
                                  </div>
                                </div>
                              )}

                              {activeTab === 'Enterprise' && (
                                <div className="flex">
                                  <div className="w-1/2 p-4">
                                    <h2 className="text-3xl font-bold mb-6 text-white">Enterprise software</h2>
                                    <p className="text-lg  mb-8 text-white">
                                      For large-scale enterprises, Ruby on Rails delivers high performance and security. It efficiently handles high-volume traffic, integrates seamlessly with existing infrastructure, and supports demanding business logic with ease. As a top Ruby on Rails web development company, we specialize in enterprise-level Ruby on Rails development, helping companies optimize workflows, enhance customer engagement, modernize legacy systems, and add new modules to existing applications. Our goal is to ensure that enterprises stay ahead in a competitive market.              </p>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>secure architecture;</p>
                                    </div>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>effective process of high-volume traffic;</p>
                                    </div>
                                    <div className="flex  mb-4 text-white">
                                      <CheckIcon />
                                      <p>seamless integration with existing infrastructure.</p>
                                    </div>
                                  </div>
                                  <div className="w-1/2 p-4">
                                    <img src="./Ruby_on_Rails_images/5db80258fce786833a9b702d_rates-1.webp" />
                                  </div>
                                </div>
                              )}
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="consulting">

                  <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
                    {/* Header Section */}
                    <div className="mb-12 text-center">
                      <h1 className="text-5xl font-bold mb-6">
                        Ruby on Rails <span className="text-blue-500">consulting  </span>services
                      </h1>
                      <p className="text-lg max-w-4xl mx-auto text-gray-700 mt-8 text-center">
                        Our Ruby on Rails consulting services guide you through every step of project development, whether you’re building an app from scratch or optimizing an ongoing project. We provide expert advice on architecture, tech stack, performance issues, cloud and on-premise infrastructure, security measures, and more. As a ruby on rails consulting company, we help you avoid common pitfalls, apply proven methods and techniques, and achieve long-term success. Our Ruby on Rails consulting services will help in the following cases:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-12 mt-12">
                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/App-from-scratch-2.svg" className='mb-8 mx-auto' />
                          <h2 className="text-3xl font-bold mb-4">App from scratch</h2>
                          <p className="text-gray-700 mb-4">
                            If you’re starting from the ground up, we offer comprehensive Ruby on Rails consulting to help you plan, design, and develop your application. We ensure your app’s foundation is solid, scalable, and ready for future growth.
                          </p>

                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                          <img src="./Ruby_on_Rails_images/Ongoing-project-2.svg" className='mb-8 mx-auto' />
                          <h2 className="text-3xl font-bold mb-4">Ongoing project</h2>
                          <p className="text-gray-700 mb-4">
                            For existing projects, our experts help optimize your Ruby on Rails app’s performance, enhance security, and integrate new features. Whether you need to refactor code, scale your infrastructure, or improve user experience, our Ruby on Rails consulting services ensure your project stays on track and delivers results.Vv
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Maximize Your ROI with RoR

                      </h2>
                      <p className="text-xl text-left">
                        Find out how Ruby on Rails can reduce costs and increase efficiency. Request more information!
                      </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>


                <section id="About-Foxsolution">
                  <section className="bg-gray-50 py-16 px-4 md:px-6 mt-12">
                    <RevealOnScroll>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            <span className="text-blue-600">About   </span>Fox Solution
                          </h2>
                          <ul className="mt-6 space-y-4">
                            {[

                              "We, at Foxsolution, have become a trusted Ruby on Rails development company with over 13+ years of experience in delivering high-quality custom software solutions. Ruby on Rails development services are our core competence, as this technology provides the necessary tools and meets our internal requirements, allowing us to deliver solutions that drive business results at a competitive price.",
                              "We are committed to providing exceptional results thanks to our well-established development processes, talented Ruby on Rails developers, corporate values, deep technical knowledge of modern technologies, and extensive experience in delivering simple and complex solutions for more than 12 industries."
                            ].map((point, index) => (
                              <RevealOnScroll key={index} delay={index * 0.1}>
                                <li className="flex items-start text-gray-700">
                                  <FaCheck className="text-blue-500 mt-1 mr-3" />
                                  <span className="text-lg">{point}</span>
                                </li>
                              </RevealOnScroll>
                            ))}
                          </ul>
                        </div>
                        <RevealOnScroll delay={0.3}>
                          <img
                            src="./Ruby_on_Rails_images/careers-photo-6.webp"
                            alt="Company Work Environment"
                            loading="lazy"
                            className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </RevealOnScroll>
                      </div>
                    </RevealOnScroll>
                  </section>
                </section>


                <section id="past-success">
                  <div className="flex flex-col lg:flex-row mt-16 mb-16">
                    {/* Main content area */}
                    <div className="w-full lg:w-3/4 p-12">
                      <div className="max-w-6xl mx-auto">
                        {/* Statistics section */}
                        <div className="flex flex-col lg:flex-row py-12">
                          {/* Left side - Main heading */}
                          <div className="lg:w-1/2 pr-8 mb-8 lg:mb-0">
                            <h2 className="text-5xl font-bold leading-tight text-gray-900">
                              For 13+ years now we have been responsible for your projects and we are proud of it!
                            </h2>
                          </div>

                          {/* Right side - Statistics grid */}
                          <div className="lg:w-1/2 pl-32">
                            <div className="grid grid-cols-2 gap-8">
                              {/* First row */}
                              <div className="mb-8">
                                <div className="text-5xl font-bold text-gray-900 mb-2">250+</div>
                                <div className="text-gray-700">Developed custom solutions</div>
                              </div>

                              <div className="mb-8">
                                <div className="text-5xl font-bold text-gray-900 mb-2">25+</div>
                                <div className="text-gray-700">Countries, including the USA</div>
                              </div>

                              {/* Second row */}
                              <div>
                                <div className="text-5xl font-bold text-gray-900 mb-2">70%</div>
                                <div className="text-gray-700">Senior engineers</div>
                              </div>

                              <div>
                                <div className="text-5xl font-bold text-gray-900 mb-2">98%</div>
                                <div className="text-gray-700">Satisfaction rate</div>
                              </div>

                              {/* Third row */}
                              <div className="col-span-1">
                                <div className="text-5xl font-bold text-gray-900 mb-2">3+</div>
                                <div className="text-gray-700">Years' Client engagement</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>



                <section id="Why-Fox-Solution">
                  <div className="max-w-7xl mx-auto px-4 py-8 mt-8">
                    {/* Header Section */}
                    <div className="mb-12 text-center">
                      <h1 className="text-5xl font-bold mb-6">
                        <span className="text-blue-500 ">Why </span>  Clients choose to work with Fox Solution
                      </h1>

                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 mb-12">

                    <div className="flex flex-col items-start">
                      <div className="text-blue-500 mb-4">
                        <img src="./Ruby_on_Rails_images/Trusted-by-Top-companies-2.svg" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Trusted by top companies</h2>
                      <p className="text-gray-700">
                        Fox Solution has built a solid reputation by delivering exceptional software solutions to top companies across various industries. Our Clients include international giants such as Toyota, Biersdev, and World Bank Group.
                      </p>
                    </div>

                    {/* IoT Solution */}
                    <div className="flex flex-col items-start">
                      <div className="text-blue-500 mb-4">
                        <img src="./Ruby_on_Rails_images/Highly-reliable-1.svg" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Highly reliable</h2>
                      <p className="text-gray-700">
                        As a top RoR company, we have established development processes that ensure high-quality software delivery on time and within budget, guaranteeing you the expected results.
                      </p>
                    </div>

                    {/* Collaboration Tools Solution */}
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
                      <h2 className="text-2xl font-bold mb-4">Long-term-oriented</h2>
                      <p className="text-gray-700">
                        We focus on long-term cooperation. 70% of our Clients come back to us with another project. Our solutions are designed to scale and grow with business, while maintenance services allow us to adjust the software to the evolving business needs.
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
                      <h2 className="text-2xl font-bold mb-4">Diverse range of talent</h2>
                      <p className="text-gray-700">
                        70% of our team is made up of senior-level specialists who ensure the app complies with domain best practices and our inner quality assurance guidelines. From business analysts and project managers to expert Ruby on Rails developers and UI/UX designers, we have the right skill set to meet any project’s needs
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
                      <h2 className="text-2xl font-bold mb-4">Expertise in Ruby on Rails</h2>
                      <p className="text-gray-700">
                        Ruby on Rails is one of our core areas of expertise. Over a decade, we have developed software solutions for more than 12 industries, accumulating knowledge and best practices that can’t be found elsewhere.
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-blue-500 mb-4">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="40" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M16 32v12M8 44h16M36 22v6h12" stroke="currentColor" strokeWidth="2" />
                          <rect x="32" y="28" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M40 36h4M38 40h8" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Business goals focus</h2>
                      <p className="text-gray-700">
                        At Foxsolution, we prioritize your business goals. We take the time to understand your objectives and align our solutions to drive tangible business outcomes. Every requirement that goes to development is passed through a validation and verification step where we double-check that it will bring real value to the business.
                      </p>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-blue-500 mb-4">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 16h36c2 0 4 2 4 4v16c0 2-2 4-4 4H34l-6 8-6-8H10c-2 0-4-2-4-4V20c0-2 2-4 4-4z" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="22" cy="28" r="2" fill="currentColor" />
                          <circle cx="28" cy="28" r="2" fill="currentColor" />
                          <circle cx="34" cy="28" r="2" fill="currentColor" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Cutting-edge technologies</h2>
                      <p className="text-gray-700">
                        We stay ahead of the curve by integrating cutting-edge technologies into our solutions. Whether it’s AI, blockchain, Big Data, or IoT, we continuously explore and adopt the latest technologies to ensure that your software remains competitive, efficient, and innovative.
                      </p>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-blue-500 mb-4">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                          <rect x="20" y="16" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                          <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                          <path d="M20 40h24M20 48h16" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Transparent communication</h2>
                      <p className="text-gray-700">
                        Clear, open communication is at the heart of our project management process. We provide regular updates, show demos of the work done, send detailed reports, involve you in key decisions, provide our recommendations, and maintain full transparency throughout the development cycle.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="Co-operation-options">


                  <div className="flex-grow mt-32 mb-16">
                    <h1 className="text-5xl font-bold mb-16 text-center">
                      Cooperation <span className="text-blue-500">options</span>  we offer
                    </h1>

                    <div className="flex mt-16">

                      <div className="w-1/2">
                        <div className="flex flex-col">
                          <button
                            className={`py-6 px-8 text-left text-lg font-medium ${activeModel === 'softwareDevelopment' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
                            onClick={() => setActiveModel('softwareDevelopment')}
                          >
                            Software development outsourcing
                          </button>

                          <button
                            className={`py-6 px-8 text-left text-lg font-medium ${activeModel === 'staffAugmentation' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
                            onClick={() => setActiveModel('staffAugmentation')}
                          >
                            Staff augmentation
                          </button>

                          <button
                            className={`py-6 px-8 text-left text-lg font-medium ${activeModel === 'dedicatedTeam' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
                            onClick={() => setActiveModel('dedicatedTeam')}
                          >
                            Dedicated team
                          </button>
                        </div>
                      </div>
                      <div className="w-1/2 pl-12">
                        <h2 className="text-3xl font-bold mb-6">{modelContent[activeModel].title}</h2>
                        <p className="text-lg">
                          {modelContent[activeModel].description}
                        </p>
                      </div>

                    </div>
                  </div>
                </section>

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Build Better, Faster
                      </h2>
                      <p className="text-xl text-left">
                        Experience rapid development with Ruby on Rails. Contact us for a free project estimate!              </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>


                <section id="About-Foxsolution">
                  <section className="bg-gray-50 py-16 px-4 md:px-6 mt-12">
                    <RevealOnScroll>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>

                          <ul className="mt-6 space-y-4">
                            {[

                              "Hire our expert Ruby on Rails developers to take your software to the next level. Whether you need us to develop a Ruby on Rails application from scratch or provide consulting on how to best apply RoR technology to your business challenges, we’ve got you covered.",
                              "We deliver Ruby on Rails services that help businesses achieve their goals faster and more efficiently. Our Ruby on Rails development team uses the latest technologies and methodologies, follows best practices, understands industry-specific nuances, and is passionate about developing applications that deliver true business value. Contact us today and hire RoR developers to see this awesome technology’s benefits."
                            ].map((point, index) => (
                              <RevealOnScroll key={index} delay={index * 0.1}>
                                <li className="flex items-start text-gray-700">
                                  <FaCheck className="text-blue-500 mt-1 mr-3" />
                                  <span className="text-lg">{point}</span>
                                </li>
                              </RevealOnScroll>
                            ))}
                          </ul>
                        </div>
                        <RevealOnScroll delay={0.3}>
                          <img
                            src="./Ruby_on_Rails_images/File_5-scaled.webp"
                            alt="Company Work Environment"
                            loading="lazy"
                            className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </RevealOnScroll>
                      </div>
                    </RevealOnScroll>
                  </section>
                </section>

                <section id="HowWeHire" ref={(el) => addToRefs(el, 1)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="max-w-4xl mx-auto mt-12 mb-8">
                      <h1 className='text-center text-4xl font-bold '>How we  <span className='text-blue-500'>Hire </span> RoR developers</h1>
                      <p className='text-center mt-8 text-xl'>Our hiring process is a carefully elaborate framework that allows us to find and hire the top 10% of the most skilled and qualified Ruby on Rails developers.</p>
                      <div className="space-y-12 mt-24">
                        {HowWeHire.map((step, index) => (
                          <RevealOnScroll key={index} delay={index * 0.2}>
                            <div className="relative flex items-start">
                              <div className="absolute left-0 transform -translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                {step.number}
                              </div>

                              {index !== 6 && (
                                <div className="absolute left-0 top-12 w-1 h-full bg-gray-300 ml-5"></div>
                              )}

                              <div className="ml-16">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                  {step.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                              </div>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>



                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Enhance Your Web Applications
                      </h2>
                      <p className="text-xl text-left">
                        Optimize your site with our high-performance Ruby on Rails services. Get a quote now!
                      </p>                </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>


                <section id="Tech-Stack" className="bg-white py-12 px-4 md:px-6">
                  <div className="max-w-6xl mx-auto">
                    <RevealOnScroll>
                      <h2 className="text-4xl font-bold md:text-4xl text-black text-center mb-8 mt-8">
                        <span className="text-blue-500 font-semibold"> Tech </span> expertise behind Ruby on Rails services

                      </h2>
                      <p className="text-center text-xl">
                        Ruby on Rails is primarily a backend web application development framework. It handles server-side logic, database interactions, and backend architecture. So, we use it in conjunction with other modern technologies like React, PostgreSQL, Redix, and other to develop applications for various needs and goals.
                      </p>
                      <div className="flex flex-col md:flex-row p-4 bg-gray-50 mt-8">
                        <div className="flex-grow md:w-3/4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {techCategories.map(category => (
                              <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                                <h4 className="text-xl font-light mb-4">{category.desc}</h4>

                                <ul className="space-y-2">
                                  {category.items.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                      <CheckIcon />
                                      {item}
                                    </li>
                                  ))}

                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>


                    </RevealOnScroll>
                  </div>
                </section>

                <section id="advance-tech" className="mb-16">
                  <div className="flex flex-col lg:flex-row min-h-screen">
                    {/* Main content area */}
                    <div className="w-full lg:w-3/4 p-8">
                      <div className="max-w-6xl mx-auto">
                        {/* Heading section */}
                        <div className="py-8">
                          <h2 className="text-5xl font-bold">
                            Our <span className="text-blue-500">advanced tech</span> expertise
                          </h2>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mx-auto">
                          <div className="p-6 rounded-lg bg-gradient-to-r from-red-50 to-white mx-auto" onClick={() => navigate('/AIDevelopment')}>
                            <div className="mb-4">
                              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 40 40" fill="none">
                                <rect x="10" y="10" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                                <path d="M15 15h10M15 20h10M15 25h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M7 7l5 5M7 33l5-5M33 7l-5 5M33 33l-5-5" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">AI development</h3>
                            <p className="text-gray-700 mb-4">
                              We design custom AI models, implement machine learning algorithms, and develop predictive analytics, natural language processing tools, and computer vision systems that empower businesses with modern technological capabilities.
                            </p>
                            <a href="#" className="text-red-500 font-medium flex items-center">
                              AI development
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          </div>

                          {/* Blockchain Development Card */}
                          <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-white" onClick={() => navigate('/Blockchain_Development')}>
                            <div className="mb-4">
                              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 40 40" fill="none">
                                <path d="M20 10l-10 7 10 7 10-7-10-7zM10 24l10 7 10-7-10-7-10 7z" stroke="currentColor" strokeWidth="2" />
                                <path d="M20 17v7" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Blockchain development</h3>
                            <p className="text-gray-700 mb-4">
                              We build secure blockchain applications, develop smart contracts, and integrate decentralized systems, addressing multiple business challenges such as data integrity and security.
                            </p>
                            <a href="#" className="text-red-500 font-medium flex items-center">
                              Blockchain development
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          </div>
                        </div>

                        {/* Tech cards - second row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          {/* Big Data Development Card */}
                          <div className="p-6 rounded-lg bg-white" onClick={() => navigate('/Blockchain_Development')}>
                            <div className="mb-4">
                              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 40 40" fill="none">
                                <rect x="5" y="15" width="30" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                                <path d="M10 20h5M10 25h15M20 20h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M15 10v5M25 10v5" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Big Data development</h3>
                            <p className="text-gray-700 mb-4">
                              Our Big Data services enable businesses to harness the power of data through scalable pipelines, advanced analytics, real-time processing, and predictive modeling to unlock insights, optimize operations, and forecast future trends.
                            </p>
                            <a href="#" className="text-red-500 font-medium flex items-center">
                              Big Data Services
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          </div>

                          {/* IoT Solutions Card */}
                          <div className="p-6 rounded-lg bg-white" onClick={() => navigate('/IoTProcess')}>
                            <div className="mb-4">
                              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 40 40" fill="none">
                                <rect x="15" y="5" width="10" height="15" rx="1" stroke="currentColor" strokeWidth="2" />
                                <rect x="5" y="25" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
                                <rect x="25" y="25" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
                                <path d="M20 17v-5M20 23v2M17 20h-5M23 20h7" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">IoT solutions</h3>
                            <p className="text-gray-700 mb-4">
                              We create custom IoT solutions for seamless device integration, real-time monitoring, predictive maintenance, and business process automation, helping companies streamline workflows and enhance operational efficiency.
                            </p>
                            <a href="#" className="text-red-500 font-medium flex items-center">
                              Internet of Things development
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Let’s Talk RoR
                      </h2>
                      <p className="text-xl text-left">
                        Discuss your project with our Ruby on Rails experts. Schedule your free consultation today!
                      </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>





                <section id="Advence-tech">
                  <div className="flex flex-col min-h-screen">
                    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
                      <header className="mb-12">
                        <h1 className="text-4xl font-bold text-center mb-8">
                          How can  <span className="text-blue-500"> Ruby on Rails </span> collaborate with iOS, Android, and JavaScript Libraries?
                        </h1>
                      </header>
                      <p className="text-xl text-center mb-16">Ruby on Rails is a great choice for the backend of applications, while other technologies handle the frontend. We use it alongside native technologies to develop applications for iOS and Android, as well as with other JavaScript libraries to build multiplatform applications. In our Ruby on Rails consulting services, we describe the technology implementation for a specific business case. But in general, see 4 examples below:</p>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* NLP Section */}
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Example 1: Ruby on Rails with iOS</h2>
                            <p className="text-gray-700">
                              RoR can be integrated with iOS applications for backend services. Using Ruby on Rails as an API backend, iOS apps can handle tasks like user authentication, data storage, and business logic.
                            </p>
                          </div>
                          <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
                            <img src="./Ruby_on_Rails_images/one.png" alt="NLP visualization" className="max-h-full" />
                          </div>
                        </div>

                        {/* Machine Learning Section */}
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Example 2: Ruby on Rails with Android</h2>
                            <p className="text-gray-700">
                              Similar to iOS, Android applications can use Ruby on Rails for their backend infrastructure. Ruby on Rails can manage database interactions, user sessions, and other server-side functionalities for Android apps. The Android app and the RoR backend communication is typically done via APIs.
                            </p>
                          </div>
                          <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
                            <img src="./Ruby_on_Rails_images/two.png" alt="Machine Learning visualization" className="max-h-full" />
                          </div>
                        </div>

                        {/* Computer Vision Section */}
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Example 3: Ruby on Rails with React</h2>
                            <p className="text-gray-700">
                              React, a popular JavaScript library for building user interfaces, is often used with RoR for creating dynamic and responsive front-ends. Ruby on Rails can serve as the backend, managing data and business logic, while React handles the frontend, creating a seamless and interactive user experience. This combination is particularly powerful for single-page applications (SPAs).
                            </p>
                          </div>
                          <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
                            <img src="./AI technologies_Images/Computer-vision.png" alt="Computer Vision visualization" className="max-h-full" />
                          </div>
                        </div>

                        {/* Predictive Analytics Section */}
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Example 4: Ruby on Rails with Flutter</h2>
                            <p className="text-gray-700">
                              Flutter is an open-source UI software development kit created by Google. It is used to build natively compiled applications for mobile, web, and desktop from a single codebase. When combined with Ruby on Rails, Flutter can serve as the front end for both iOS and Android apps, while Rails provides a robust backend
                            </p>
                          </div>
                          <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
                            <img src="./AI technologies_Images/Predictive-analytics.png" alt="Predictive Analytics visualization" className="max-h-full" />
                          </div>
                        </div>

                      </div>
                    </main>
                  </div>

                </section>
                <section id="recent-work">
                  <div className="flex-1 bg-white text-gray-900">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        Check <span className="text-blue-500">RoR products</span>   we have successfully launched
                      </h1>

                      <div className="space-y-12">
                        {/* First Project */}
                        <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                              <img
                                src="./Blockchain_Development_Images/Frame-1787-1.webp"
                                alt="Cost management platform"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                              <h2 className="text-3xl font-bold mb-4">Dexai Robotics: graphical user interface for robot operation</h2>
                              <p className="text-lg mb-6">Meet Alfred, an automated robotic arm and your personal sous chef! Alfred was born at Dexai Robotics, while Foxsolution developed a graphic user interface (GUI) that helps to communicate with the robot!</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-500 from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                              <img
                                src="./Blockchain_Development_Images/Frame-tartle-dashboard-screenshotr.webp"
                                alt="Cost management platform"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                              <h2 className="text-3xl font-bold mb-4">Tartle – big data trading platform</h2>
                              <p className="text-lg mb-6">Tartle is a comprehensive web and mobile platform for trading big data, designed for people and organizations that prefer to stay anonymous. This blockchain-based solution enables companies and individuals to buy and sell big data sets securely through a private digital identity, without any intermediates, and pay with Bitcoin.</p>
                            </div>
                          </div>
                        </div>


                        {/* Second Project */}
                        <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">

                              <h2 className="text-3xl font-bold mb-4">Smart Integration: hotel management system.</h2>
                              <p className="text-lg">Hotel management system that simplifies the interaction between hotel visitors and staff with simple and intuitive control. The management system helps to improve the quality of service and be closer to their customers</p>
                            </div>


                            <div className="md:w-2/3">
                              <img
                                src="./Blockchain_Development_Images/Umergence-perspr-1.webp"
                                alt="Robot interface"
                                className="w-full h-full object-cover"
                              />
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

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Join Our Success Stories

                      </h2>
                      <p className="text-xl text-left">
                        Trust in our proven track record. Start your Ruby on Rails project with us now!            </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>

                <section id="why-ror">
                  <div className="flex flex-col lg:flex-row min-h-screen">
                    {/* Main content area */}
                    <div className="w-full lg:w-3/4 mx-auto">
                      <div className="max-w-6xl mx-auto">
                        {/* Heading section */}
                        <div className="py-8 text-center mt-16 mb-8">
                          <h2 className="text-5xl font-bold mb-6">
                            Why businesses <span className="text-blue-500">choose</span> Ruby on Rails
                          </h2>
                          <p className="text-xl text-center max-w-4xl mx-auto">
                            Ruby on Rails offers a powerful combination of features that allows any Ruby development company to build high-performance applications.
                          </p>
                        </div>

                        {/* Features grid - first row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                          {/* Speed Card */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                <circle cx="20" cy="20" r="15" strokeWidth="1.5" />
                                <path d="M20 12v8l6 4" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M20 28v3M20 9v3" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Speed</h3>
                            <p className="text-gray-700">
                              Ruby on Rails app development takes less time (up to 40% faster) than development with other frameworks.
                            </p>
                          </div>

                          {/* Scalability Card */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                <rect x="8" y="18" width="24" height="14" rx="1" strokeWidth="1.5" />
                                <rect x="12" y="8" width="16" height="10" rx="1" strokeWidth="1.5" />
                                <path d="M16 28a2 2 0 100 4 2 2 0 000-4zM24 28a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Scalability</h3>
                            <p className="text-gray-700">
                              Easily scalable systems thanks to its modular architecture. RoR applications can handle increased traffic and data thanks to caching techniques, database optimization, and background job processing.
                            </p>
                          </div>

                          {/* Security Card */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                <path d="M20 7l-12 5v8c0 5.52 5.12 10.72 12 13 6.88-2.28 12-7.48 12-13v-8l-12-5z" strokeWidth="1.5" />
                                <path d="M16 19l3 3 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Security</h3>
                            <p className="text-gray-700">
                              Ruby on Rails offers built-in security features like protection against SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). It enforces strong parameter sanitization and safe defaults.
                            </p>
                          </div>
                        </div>

                        {/* Features grid - second row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {/* Performance Card */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                <path d="M10 30h5V20h-5v10zM17.5 30h5V15h-5v15zM25 30h5V10h-5v20z" strokeWidth="1.5" />
                                <path d="M8 10l4-4 4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Performance</h3>
                            <p className="text-gray-700">
                              Rails is optimized for performance through efficient query building, caching mechanisms, and pre-configured tools for optimization.
                            </p>
                          </div>

                          {/* Flexibility Card */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                <rect x="8" y="8" width="24" height="24" rx="2" strokeWidth="1.5" />
                                <path d="M12 14h16M12 20h16M12 26h10" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="28" cy="26" r="2" fill="currentColor" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Flexibility</h3>
                            <p className="text-gray-700">
                              Ease integration with third-party services and support of RESTful architecture allows Ruby on Rails development companies to build versatile applications.
                            </p>
                          </div>

                          {/* Cost Savings Card */}
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                                <path d="M20 8v24M10 20h20" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="20" cy="20" r="15" strokeWidth="1.5" />
                                <path d="M14 14l12 12M14 26l12-12" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Cost savings</h3>
                            <p className="text-gray-700">
                              Lower development costs with open-source tools and libraries.
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <img src="./Ruby_on_Rails_images/efficiency-and-productivity.svg" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Efficiency</h3>
                            <p className="text-gray-700">
                              Pre-built solutions and plugins, rapid prototyping, convention over configuration, and other RoR aspects allow Ruby on Rails companies to build applications faster, reducing development time and costs.
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <img src="./Ruby_on_Rails_images/Expertise-in-Ruby-on-Rails-1.svg" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Gems ecosystem</h3>
                            <p className="text-gray-700">
                              Access to a wide range of pre-built libraries and gems developed and supported by the community.
                            </p>
                          </div>


                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                              <img src="./Ruby_on_Rails_images/Ecosystem-and-Community-Support-1.svg" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Community support</h3>
                            <p className="text-gray-700">
                              A large, active community that offers constant support develops new libraries and tools relevant to the business landscape and improves the RoR ecosystem to make Ruby on Rails development even more effective.
                            </p>
                          </div>





                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="Pricing">
                  <div className="flex-1 p-8 mt-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">

                      <span className="text-blue-500">Pricing models</span> we follow
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Fixed Price */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 flex items-center justify-center text-blue-500">
                            <DollarSign size={36} className="text-blue-500" />
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Fixed price</h2>
                        <p className="text-gray-700">
                          The Fixed Price model involves a predefined contract sum, paid in installments. The benefit of this model is high predictability, as developers commit to delivering a specific scope within a fixed budget. However, this model is inflexible since both the scope and budget are fixed.
                        </p>
                      </div>

                      {/* Time & Material */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 flex items-center justify-center text-blue-500">
                            <Clock size={36} className="text-blue-500" />
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Time & Material</h2>
                        <p className="text-gray-700">
                          The Time & Material model is a flexible approach to cooperation where the billing is based on actual development efforts (person-hours worked). It's ideal for projects with unclear scores, evolving requirements, or a huge system with many uncertainties. This model is ideal for long-term projects.
                        </p>
                      </div>

                      {/* Dedicated Team */}
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 flex items-center justify-center text-blue-500">
                            <Users size={36} className="text-blue-500" />
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Dedicated Team</h2>
                        <p className="text-gray-700">
                          Our RoR developer specialists, adept at addressing US business requirements, integrate seamlessly into your team. Billing is based on hourly rates, reflecting the value we bring to North American businesses with our dedicated team model.
                        </p>
                      </div>
                    </div>
                  </div>

                </section>


                <section id="Process">

                  <div className="flex mt-12  mb-16">
                    {/* Main content */}
                    <div className="flex-1 p-8">
                      <header className="mb-12">
                        <h1 className="text-4xl font-bold text-center ">
                          <span className="text-black">Our Ruby on Rails  </span>
                          <span className="text-blue-500"> Development</span>
                          <span className="text-black"> Process  </span>
                        </h1>
                        <p className="text-xl text-center mt-8">
                          We are proud of our well-established development processes, which we have refined for over a decade. These processes allow us to optimize resources, enhance development efficiency, cut development time, and ensure overall project success.
                        </p>
                      </header>

                      <div className="flex mt-32">

                        <div className="w-1/2 ">
                          {renderContent()}
                        </div>


                        <div className="w-1/2 pl-8">
                          <div className="bg-blue-50 rounded-l">
                            {services.map((service) => (
                              <button
                                key={service.id}
                                className={`w-full text-left px-8 py-6 transition-colors ${activeService === service.id ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
                                  }`}
                                onClick={() => handleServiceClick(service.id)}
                              >
                                {service.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="developmet_image" className="mb-16">
                  <img src="./Ruby_on_Rails_images/Development_process.png"></img>
                </section>

                <section id="contactsection">
                  <Contact />
                </section>
                <section id="faq" className="px-4 mb-16 mt-16">
                  <FAQ faqs={mvpFaqs} />
                  <p className="text-xl text-red-500 pl-16">Find More</p>
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

export default RubyOnRailsDevelopment;