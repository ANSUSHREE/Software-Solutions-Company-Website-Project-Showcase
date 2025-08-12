
import { Link,useNavigate  } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import { TableOfContents } from '../components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import TestimonialCarousel from '@/components/ui/Testimonial';


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
  { title: ' Application', id: 'application' },
  { title: 'Backend development services', id: 'business' },
  { title: 'Expert pool', id: 'expert-pool' },
  { title: 'Development Process', id: 'development-process' },
  { title: 'Recent Software we Make', id: 'recent-work' },
  
  { title: 'FAQ', id: 'faq' }
];

const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );


  const statistics = [
    {
      value: '98%',
      label: 'User satisfaction rate'
    },
    {
      value: '200+',
      label: 'Successful projects'
    },
    {
      value: '25+',
      label: 'Countries'
    },
    {
      value: '70%',
      label: 'Senior engineers'
    },
    {
      value: '3+',
      label: 'Years of Clients\' engagement'
    },
    {
      value: '13+',
      label: 'Years on the market'
    }
  ];

  const HowWeHire = [
    {
      number: "1",
      title: "Requirements elicitation and analysis ",

   description:" We identify your business requirements and functionalities needed for the backend system development. Then our team determines the scope and objectives of the project and aligns it with you. The result of this stage affects the rest of the development process."

    },
    {
      number: "2",
      title: "Database design and modeling" ,
      description: "The second milestone is the database scheme. Our developers model the data relationships and structure and define entities, attributes, and relationships between them.",
    },
    {
      number: "3",
      title: "Architecture and technology selection",
      description: "The system administrator and DevOps design the system architecture and identify the most suitable programming languages, web servers, and cloud providers. The choice complies with the requirements of your project.",
      
    },
    {
        number: "4",
        title: "Implementation of the logic and integration with the front end",
        description: "The step where the coding starts. Backend developers write the server-side code and implement the logic and functionality of the system. They also develop APIs and integrate the backend system with the front end. ",
      },
      {
        number: "5",
        title: "Testing and bug fixing",
        description: "In this step, our QA specialists test the application to ensure that it functions as expected and that the integration of the front and backend went successfully.",
        
      },
      {
        number: "6",
        title: "Deployment and ongoing maintenance ",
        description: "The backend system is deployed to the production environment and becomes available to users. Our backend developers provide ongoing maintenance and support, including fixing issues, updating the system, and monitoring. ",
      },
      {
        number: "7",
        title: "System administration",
        description: "Upon successfully completing the probation period, we officially hire the Ruby on Rails developer and they join our team and contribute to our and the Client’s success. Our Clients can interview our developers to ensure they meet your expectations.",
      },
  ];





const BackendDevelopment = () => {
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
        question: "What is back-end development services?",
        answer: "Backend development services refer to the development of server-side applications and databases that power websites and web applications. This includes creating APIs, developing databases, writing server-side code, and integrating third-party services. Backend developers are responsible for ensuring that the website’s functions work properly and that the website has good performance metrics. Backend developers have to work closely with frontend developers to ensure that user experience is seamless. "
    },
    {
        question: "What jobs do back-end developers do?",
        answer:"Backend developers work with programming languages like Python, Ruby, PHP, Java, Kotlin, and must be familiar with server-side technologies like Apache, Nginx, Unicorn, Puma, etc. In general, the pool of responsibilities of the backend developers are as follows: "
     },
     {
        question: "Why chose SumatoSoft for backend development?",
        answer:("Excellence –  70% of our team are senior-level backend engineers who constantly boost their skills through workshops, seminars, and courses.Well-established development processes – we put a lot of effort into establishing effective management and development processes. We guarantee a solid commitment to deadlines, budget, and the quality of our work.Transparent cooperation – we provide professional project management with project status, budget reports, and regular communication. You have all the information and less stress. Our clients choose us as a long-running technological partner.  ")
     }
   
   
];


  

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
              <CheckIcon/>
              <p>online calls where we elicit requirements and define the project vision;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
              <p>we document functional and non-functional requirements;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
              <p>conducting a technical feasibility analysis to determine the appropriate tech stack;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
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
              <CheckIcon/>
              <p>make prototypes and clickable wireframes to visualize user flows;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
              <p>conduct user testing;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
              <p>design several versions of the interfaces to choose from;
              </p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
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
              <CheckIcon/>
              <p>defining system architecture;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
              <p>selecting the optimal database and developing APIs;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
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
              <CheckIcon/>
              <p>automated and manual testing;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
              <p>performance and load testing;</p>
            </div>
            <div className="flex mb-2">
              <CheckIcon/>
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
                <CheckIcon/>
                <p>cloud-based deployment on AWS, Google Cloud, or Azure;</p>
              </div>
              <div className="flex mb-2">
                <CheckIcon/>
                <p>containerization and orchestration using Docker and Kubernetes;</p>
              </div>
              <div className="flex mb-2">
                <CheckIcon/>
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
                  <CheckIcon/>
                  <p>bug fixes and performance monitoring;</p>
                </div>
                <div className="flex mb-2">
                  <CheckIcon/>
                  <p>new feature implementation;</p>
                </div>
                <div className="flex mb-2">
                  <CheckIcon/>
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
        <div className="min-h-screen flex flex-col bg-white ">
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
              <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Backend development </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
           
            <span className="text-blue-500">Backend  </span> 
            development services
            
            </h1>
            <p className="mt-6 text-lg text-gray-300 mt-8 mb-8">
            We deliver scalable, robust, secure backends specifically tailored for US enterprises, startups, and small to mid-size businesses, ensuring compliance with American industry standards and data security laws.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8 text-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>easily scalable architecture;</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>easily readable code with comments;</span>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>100 percent tested;</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>low maintenance costs.</span>
                                </li>
                            </ul>
                        </div>
  
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
              <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
               Hire Backend Developers
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
                <section id="application" ref={(el) => addToRefs(el, 0)} className="mb-16 ">
                  <RevealOnScroll>
                    <div className="bg-gray-50 py-3 px-4 md:px-8 mt-12">
                    <h1 className="text-5xl font-bold mb-6 text-center">
                    Backend for multiple <span className="text-blue-500"> application </span> types
        </h1>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center mb-8">
        12+ years of expertise in building high-performance, complex backends.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Custom Web Development */}
        <div className="bg-gray-50 p-8 rounded-lg">
        <img src="./Ruby_on_Rails_images/Layer_1-9.svg"  className='mb-8'/>
          <h2 className="text-2xl font-bold mb-4">Progressive web apps</h2>
          <p className="text-gray-700">
          Progressive web apps are designed to deliver a fast, engaging and app-like experience to users on the web. Our expert developers specialize in building progressive web apps that can drive your business forward.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
        <img src="./Ruby_on_Rails_images/Layer_1-3-1.svg" className='mb-8'/>
          <h2 className="text-2xl font-bold mb-4">Single-page apps</h2>
          <p className="text-gray-700">
          Single-page apps provide a smooth and seamless user experience with a single page and dynamic content update. Our backend development team focuses on speed and performance, while our SEO experts handle the biggest challenge for this application type: search engine optimization.</p>
        </div>


        <div className="bg-gray-50 p-8 rounded-lg">
        <img src="./Ruby_on_Rails_images/Frame-3-1.svg" className='mb-8'/>
          <h2 className="text-2xl font-bold mb-4">SaaS solutions</h2>
          <p className="text-gray-700">
          We help to overcome all technical challenges related to SaaS development. Our SaaS solutions feature scalability, stable high performance, integration with other systems and tools, protection of sensitive user data, minimal downtime, and low maintenance costs.          </p>
        </div>

        {/* API Development */}
        <div className="bg-gray-50 p-8 rounded-lg">
        <img src="./Ruby_on_Rails_images/Layer_1-6-1.svg" className='mb-8'/>
          <h2 className="text-2xl font-bold mb-4">Cross-platform and hybrid apps</h2>
          <p className="text-gray-700">
          Cross-platform and hybrid apps can provide an engaging user experience across multiple devices with various screen resolutions. Our team can help you build an app that will work seamlessly on smartphones, tablets, wearable devices and desktops.
          </p>

        </div>


        <div className="bg-gray-50 p-8 rounded-lg">
        <img src="./Ruby_on_Rails_images/Dedicated-SaaS-developers.svg" className='mb-8'/>
          <h2 className="text-2xl font-bold mb-4">Custom web apps</h2>
          <p className="text-gray-700">
          We build custom web applications for any specific business domain or organization. Based on your specific needs and business model, we can develop backends for project management tools, healthcare systems, eLearning platforms, supply chain management systems, and more.
         </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
        <img src="./Ruby_on_Rails_images/Layer_1-7-1.svg" className='mb-8'/>
        
          <h2 className="text-2xl font-bold mb-4">ERP systems</h2>
          <p className="text-gray-700">
          ERP systems are to help your accounting, procurement, risk management, and other processes more effectively. Our backend developers ensure that your ERP system has the necessary features: efficient data management, security, permission control system, integration with CRM/HR/accounting systems or any third-party software provider, and more.
</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
        
        <img src="./Ruby_on_Rails_images/Layer_1-11.svg" className='mb-8'/>
          <h2 className="text-2xl font-bold mb-4">The Internet of Things </h2>
          <p className="text-gray-700">
          The Internet of Things (IoT) can bring valuable insights to your business if appropriately configured. Our experts develop and fine-tune IoT systems to provide efficient communication between devices and the cloud, minimize power consumption, and store large volumes of data. We also apply big data and machine learning technologies for data processing.
</p>
        </div>
         </div>
        </div>
        </RevealOnScroll>               
        </section>

                

            <section id="business">
   <div className="flex-1 bg-gray-900 text-white p-8 mt-8">
   
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6">
        SumatoSoft back-end development <span className="text-blue-500 ">services </span>  
         
        </h1>
        <p>We provide both full-cycle software development and back-end development services as a standalone service.   </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
       
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <img src="./Ruby_on_Rails_images/Trusted-by-Top-companies-2.svg"/>
          </div>
          <h2 className="text-2xl font-bold mb-4">Trusted by top companies</h2>
          <p className="text-gray-700">
         Fox Solution has built a solid reputation by delivering exceptional software solutions to top companies across various industries. Our Clients include international giants such as Toyota, Biersdev, and World Bank Group.
          </p>
        </div>

        {/* IoT Solution */}
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <img src="./Ruby_on_Rails_images/Highly-reliable-1.svg"/>
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
          At SumatoSoft, we prioritize your business goals. We take the time to understand your objectives and align our solutions to drive tangible business outcomes. Every requirement that goes to development is passed through a validation and verification step where we double-check that it will bring real value to the business.
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
      </div>
   </section>

   <section id="statistics">
   <div className="mb-12 text-center mt-12">
        <h1 className="text-5xl font-bold mb-6 mt-12">
        SumatoSoft in  <span className="text-blue-500 ">numbers </span>  
         
        </h1>
      </div>
      
<div className="flex-1 p-8">
  <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
    {statistics.map((stat, index) => (
      <div key={index} className="border border-gray-200 p-8 flex flex-col items-center justify-center text-center">
        <div className="text-5xl font-bold text-blue-500 mb-2">
          {stat.value}
        </div>
        <div className="text-lg">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
</div>

      </section>

      <section id="expert-pool">
             <div className="max-w-7xl  mx-auto px-4 py-8 mt-24">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6">
        Our for   <span className="text-blue-500">expert pool </span> backend development services
        </h1>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center">
        With strong expertise in multiple business domains, we strive to provide our Clients with top-tier Artificial Intelligence solutions tailored to their specific business needs.
        </p>
      </div>
      </div>
      <div className="grid  md:grid-cols-2 gap-8 mb-12">
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
          <h2 className="text-2xl font-bold mb-4">Conversational tools</h2>
          <p className="text-gray-700">
          Using the power of AI Technology, Machine Learning and NLP, we create chatbots and other dialogue systems that provide a human-independent, contextually sensitive questioning and answering service.
          </p>
        </div>

        {/* IoT Solution */}
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
          <h2 className="text-2xl font-bold mb-4">Recommendation engines</h2>
          <p className="text-gray-700">
          They make personalized offers based on a client’s earlier choices and reviews. Self-taught systems are now a must-have component of software applied in all industries, from media to healthcare and finances.
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
          <h2 className="text-2xl font-bold mb-4">Expert & classification</h2>
          <p className="text-gray-700">
          We make custom expert and classification systems to solve domain-specific (from healthcare to finances) challenges. Our solutions help business systems to better understand and predict outcomes by identifying source patterns and making valuable suggestions.
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
          <h2 className="text-2xl font-bold mb-4">Video, image & text analytics</h2>
          <p className="text-gray-700">
          We employ Machine Learning and develop custom business-specific video, image and text analytics applications that will help businesses reduce the required employees’s time and efforts on task performance and yield higher profit margins.
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
          <h2 className="text-2xl font-bold mb-4">Image, speech, & face recognition</h2>
          <p className="text-gray-700">
          The neural networks created by our artificial intelligence software development team for image, speech and facial recognition solutions can solve complex signal processing or pattern recognition challenges.
          </p>
        </div>
       
        
       
      
      </div>



             </section>


            
             <section id="development-process" ref={(el) => addToRefs(el, 1)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="max-w-4xl bg-gray-900 mt-12 mb-8">
                        <h1 className='text-center text-4xl font-bold text-blue-500 mt-16'>Backend development services process </h1>
                         <p className='text-center text-white mt-8 text-xl'>Our hiring process is a carefully elaborate framework that allows us to find and hire the top 10% of the most skilled and qualified Ruby on Rails developers.</p>
                      <div className="space-y-12 mt-24">
                        {HowWeHire.map((step, index) => (
                          <RevealOnScroll key={index} delay={index * 0.2}>
                            <div className="relative flex items-start">
                              <div className="absolute left-0 transform -translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold ml-12">
                                {step.number}
                              </div>

                              {index !== 6 && (
                                <div className="absolute left-0 top-12 w-1 h-full bg-blue-500 ml-12"></div>
                              )}

                              <div className="ml-16">
                                <h3 className="text-2xl font-semibold ml-12 text-blue-500">
                                  {step.title}
                                </h3>
                                <p className="text-gray-600 mt-2 ml-12">{step.description}</p>
                              </div>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>

                <section id="recent-work">
  <div className="flex-1 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Recent <span className="text-blue-500">Software</span>   we Make
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
                  <p className="text-lg mb-6">Meet Alfred, an automated robotic arm and your personal sous chef! Alfred was born at Dexai Robotics, while SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot!</p>
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
          <section id="contactsection">
                <Contact/>
                </section>
                <section id="faq" className="px-4 mb-16 mt-16">
                  <FAQ faqs={mvpFaqs}/>
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

export default BackendDevelopment;