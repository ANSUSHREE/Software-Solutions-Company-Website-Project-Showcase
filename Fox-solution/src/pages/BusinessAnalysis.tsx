import { useState, useCallback, useEffect } from 'react';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CertificationsSection } from '@/components/ui/Certification';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import ReviewCarousel from '@/components/ui/Testimonial';
import FAQ from '@/components/ui/faq';
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

// Hero Section Component
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero" 
        className="min-h-screen w-full flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-purple-900 text-white relative py-16"
      >
        <div className="container mx-auto px-8 md:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <div className="flex items-center text-sm">
              <a href="/" className="text-white hover:text-blue-300">Home</a>
              <span className="mx-2">›</span>
              <a href="/services" className="text-white hover:text-blue-300">Services</a>
              <span className="mx-2">›</span>
              <span className="text-gray-300">Business analysis services</span>
            </div>
          </div>
          
          {/* Hero Content */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-blue-400">Business</span> analysis services
          </h1>
          
          <p className="text-lg mb-12 max-w-3xl">
            We use the best Business Analysis practices for software development to bridge a gap 
            between the business needs and the IT teams for our US clients, ensuring alignment with 
            American market trends and business standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>solution vision</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>requirements description</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>release planning</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>precise project estimation</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded transition duration-300">
              Get in touch
            </button>
            
            <div className="flex items-center mt-6 md:mt-0">
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

// Services Section Component
const BusinessAnalysisServices = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  
  const tabs = [
    {
      id: 'requirements',
      title: 'Requirements definition',
      icon: '/RD-Analysis-2.svg',
      fullTitle: 'Requirements definition and clarification',
      description: 'Capturing the right requirements at the Discovery Phase builds a solid foundation for its future success:',
      image: '/Requirements-definition.webp',
      bulletPoints: [
        { text: 'industry & competitor analysis;' },
        { text: 'functional / non-functional requirements analysis;' },
        { text: 'technical research;' },
        { text: 'risks analysis and management.' }
      ]
    },
    {
      id: 'interface',
      title: 'User interface design',
      icon: '/App-Design-1.svg',
      fullTitle: 'User interface design at the highest level',
      description: 'Working out the most efficient user flow patterns to ensure the target actions are completed easily by each type of user:',
      image: '/1-1.webp',
      bulletPoints: [
        { text: 'information architecture (IA);' },
        { text: 'wireframes of major pages;' },
        { text: 'reports.' }
      ]
    },
    {
      id: 'prototyping',
      title: 'Prototyping',
      icon: '/Prototyping.svg',
      fullTitle: 'Prototyping and proof-of-concept work',
      description: 'Business analysts help to evaluate the potential and value of the future application to satisfy business needs and meet all business requirements:',
      image: '/pexels-andrea.webp',
      bulletPoints: [
        { text: 'UI prototype;' },
        { text: 'system prototype;' },
        { text: 'detailed mockups.' }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation',
      icon: '/Documentation.svg',
      fullTitle: 'Documentation & estimation',
      description: 'All results of the Business Analysis Services will be recorded in one document —Requirements Specification (SRS) which includes:',
      image: '/joanna-kosinska.webp',
      bulletPoints: [
        { text: 'software requirements analysis;' },
        { text: 'implementation budget and deadline;' },
        { text: 'project risk assessment;' },
        { text: 'feature list and mockups.' }
      ]
    }
  ];

  return (
    <section id='services' className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 mt-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our business analysis <span className="text-blue-400">services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            Our Business Analysis Stage, tailored for the US market, forms the groundwork for every software development 
            project. We focus on revealing the project's potential within the North American context, estimating risks and 
            assumptions relevant to US business environments.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-16 mb-20">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <img 
                  src={tab.icon} 
                  alt={tab.title} 
                  className={`w-16 h-16 ${activeTab === tab.id ? 'text-blue-400 filter brightness-0 invert-0' : 'filter brightness-0 invert'}`}
                  style={{ filter: activeTab === tab.id ? 'invert(60%) sepia(75%) saturate(1000%) hue-rotate(170deg) brightness(100%)' : 'brightness(0) invert(1)' }}
                />
              </div>
              <span className={`text-sm text-center ${activeTab === tab.id ? 'text-blue-400' : 'text-white'}`}>
                {tab.title}
              </span>
            </div>
          ))}
        </div>

        {/* Active Tab Content */}
        {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {/* Left Column: Text Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{tab.fullTitle}</h3>
              <p className="mb-6">{tab.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tab.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">✓</span>
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column: Image */}
            {activeTab === tab.id && (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={tab.image} 
                  alt={tab.title} 
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Process Section Component
const BusinessAnalysisProcess = () => {
  const steps = [
    { number: 1, title: "Plan business analysis process" },
    { number: 2, title: "Define scope" },
    { number: 3, title: "Elicit requirements" },
    { number: 4, title: "Validate requirements" },
    { number: 5, title: "Analyze requirements" },
    { number: 6, title: "Document requirements" },
  ];

  return (
    <section id="process" className="py-12 max-w-5xl mx-auto">
      <h2 className="text-center text-3xl font-medium mb-10">
        <span className="text-blue-500">Process</span> of business analysis
      </h2>
      
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200"></div>
        
        {/* Steps */}
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center w-28">
              {/* Circle with number */}
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 mb-5 relative z-10">
                <span className="text-blue-500 font-medium text-lg">{step.number}</span>
              </div>
              
              {/* Step text */}
              <p className="text-center text-sm text-gray-800 leading-tight">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Discovery Phase Elements Section Component
const DiscoveryPhaseElements = () => {
  const elements = [
    {
      title: "Industry analysis",
      icon: "/Industry-analysis.svg",
      description: "In developing products for the US market, we meticulously consider the unique features of American industries, ensuring our solutions are highly relevant and compliant with local regulations and market dynamics."
    },
    {
      title: "Competitor analysis",
      icon: "/Full-transparency-3.svg",
      description: "One of the parts of business analysis services is the research of your competitors, weak spots in their products, and improvements that can be implemented in your product to get a competitive advantage."
    },
    {
      title: "Technical research",
      icon: "/Technical-research.svg",
      description: "There are no two identical projects, and each product includes certain business and technical requirements that must be taken into account at the very early stages of development. The result of the Discovery Phase of the project will be a list of recommended technologies and frameworks to use."
    },
    {
      title: "Technical documentation",
      icon: "/Document.svg",
      description: "Tech specification is a crucial part of a project. The success and on-time completion of the project as well as its future development highly depends on how thoroughly the project is clarified and described, how correctly it is reflected in the technical specification."
    }
  ];

  return (
    <section id="structure" className="max-w-6xl mx-auto py-12">
      <h2 className="text-center text-3xl font-medium mb-14">
        Must-have elements of <span className="text-blue-500">Discovery</span> phase
        <br />of projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
        {elements.map((element, index) => (
          <div key={index} className="flex">
            <div className="mr-6">
              <img src={element.icon} alt={element.title} className="w-16 h-16 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">{element.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{element.description}</p>
              {element.title === "Technical research" && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="text-blue-500">Discovery Phase</span> of the project will be a list of recommended technologies and frameworks to use.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// FoxSolution Profile Section Component
  const FoxSolutionProfile = () => {
    return (
      <RevealOnScroll>
        <section id= "profile" className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                  <div className="text-white mb-8 md:mb-0 max-w-2xl">
                    <h2 className="text-3xl font-semibold mb-4">
                    We develop custom front-end solutions for any business challenges
                    </h2>
                    <p className="text-white-300">Get proof of our successfully completed projects in the profile</p>
                  </div>
                  <button className="flex items-center bg-[#FF4155] text-white px-6 py-3 border border-[#FF4155] hover:bg-transparent hover:text-[#FF4155] transition">
                    <FaDownload className="mr-2" />
                    Download
                  </button>

                </div>
              </section>
      </RevealOnScroll>
    );
  };

// Certifications Section Component
const CertificationsWrapper = () => {
    return (
        <section id="awards" className='mb-6 w-auto'>
            <CertificationsSection
                heading={<>
                    <span className="text-blue-500">Awards</span> & recognitions
                </>}
                description="Foxsolutions has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
                imageSize="w-16 md:w-24"
            />
        </section>
    );
};

// Case studies Component
  const Casestudies = () => {
      const caseStudies = [
          {
              title: "Intelligent marketing tracking tool modernization",
              description: "The Client's in-house team made the initial product. FoxSolution optimized performance, reduced server load and costs, and developed a new analytics system for competitor analysis.",
              image: "/RivalFox-Main-image.webp",
              bgColor: "bg-red-600",
              companyName: "Rivalfox"
          },
          {
              title: "Smart hotel management system",
              description: "The hotel management system for simple room management. Integrated with SMS and email providers. The system features an offline mode, supports English and Arabic, and more.",
              image: "/Smart-Int-Perspl.webp",
              bgColor: "bg-blue-900",
              companyName: ""
          },
          {
              title: "Custom ERP system for Toyota car dealer",
              description: "The custom ERP system Scalex was implemented in 20 centers across Thailand. It automates key business processes for car dealers: sales of cars, inventory, the car's service maintenance.",
              image: "/inbound_transportation_kanban_board011@2x.webp",
              bgColor: "bg-purple-900",
              companyName: ""
          },
      ];
      return (
          <section id="case" className="mb-12 w-full">
              <div className="space-y-6">
                  {caseStudies.map((caseStudy, index) => (
                      <RevealOnScroll key={index} delay={index * 0.2}>
                          <div
                              className={`${caseStudy.bgColor} text-white overflow-hidden shadow-lg hover:bg-gradient-to-r from-blue-900 from-[0%] via-pink-500 via-[49%] via-pink-500 via-[51%] to-blue-900 to-[100%] w-full`}
                          >
                              <div className="grid md:grid-cols-2">
                                  <div className="order-2 md:order-1">
                                      <img
                                          src={caseStudy.image}
                                          alt={caseStudy.title}
                                          loading="lazy"
                                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                  </div>
                                  <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                                      {caseStudy.companyName && (
                                          <h2 className="text-2xl mb-2">
                                              {caseStudy.companyName}
                                          </h2>
                                      )}
                                      <h3 className="text-2xl font-medium mb-4">
                                          {caseStudy.title}
                                      </h3>
                                      <p className="text-sm md:text-base">
                                          {caseStudy.description}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </RevealOnScroll>
                  ))}
              </div>
          </section>
      );
  };


// Business Analysis on Service Section Component
const BusinessAnalysisOnService = () => {
  const serviceResults = [
    "document describing the project and its project boundaries;",
    "project requirements specification;",
    "business analysis models;",
    "technical specification and requirements;",
    "use case model;",
    "user stories;",
    "user interface prototypes;",
    "project estimation and timeline."
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">
          Business analysis services <span className="text-blue-500">results</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <ul className="space-y-3">
              {serviceResults.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 text-gray-700">
              <p>
                If you want to be sure that all the wishes for the future software product are taken into account and structured competently, you need <span className="text-blue-500">business analysis services</span> and we can do this for you. Our IT Business Analysts take you through a <span className="text-blue-500">business analysis stage</span>, after which you can already turn to product development without the risk of remaining incomprehensible or breaking deadlines!
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="/image-4.webp" 
              alt="Business analyst working at desk" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Stories Section Component
const StoriesSection = () => {
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

    return (
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
    );
};

// FAQ Section Component
const FAQSection = () => {
    const BusinessAnalysisFAQ = [
        {
    question: "When should I use Business Analysis Services?",
    answer: "The best time to go through the Discovery Phase is at the start of any major project or building any complex system, especially when there is not enough information gathered about the market or users. We also recommend keeping the business analyst as a part of the internal IT team to keep the requirements and the software up-to-date and aligned with your business's needs."
  },
  {
    question: "Why is the pre-development Discovery Phase necessary?",
    answer: "The pre-development Discovery Phase is necessary to understand project requirements thoroughly, identify potential challenges, and establish a clear roadmap before committing significant resources to development. This reduces risks, ensures alignment with business goals, and typically results in more efficient development cycles."
  },
  {
    question: "How does ongoing Business Analysis differ from the initial Business Analysis (Discovery Phase)?",
    answer: "The initial Business Analysis (Discovery Phase) focuses on defining scope, gathering requirements, and creating project roadmaps. Ongoing Business Analysis involves continuous monitoring, adapting to changing requirements, providing user feedback integration, and ensuring the solution remains aligned with evolving business needs throughout the development lifecycle."
  },
  {
    question: "What is covered in a Business Analysis session?",
    answer: "A Business Analysis session typically covers requirement gathering, stakeholder interviews, process mapping, gap analysis, solution recommendations, prioritization of features, and documentation of findings. These sessions aim to align technical solutions with business objectives and user needs."
  },
  {
    question: "What experience does Foxsolution have in business analysis?",
    answer: "Foxsolution has extensive experience in business analysis across various industries including fintech, healthcare, logistics, and e-commerce. Our team has successfully analyzed and implemented solutions for startups to enterprise-level clients, with particular expertise in complex workflow optimization and digital transformation projects."
  },
    {
        question: "Are business analysis services and website analysis services the same?",
        answer: "No. Business analysis in web development is the process when business analysts define the potential and value of the future app, describe its business and technical requirements, make market and competitive analysis.On the other hand, website analysis implies page speed analysis and optimization, SEO audit, content reviews, UX analysis, testing, and more. It includes types of work focused on improving the performance of an existing web app."
    }
    ];

    return (
        <section id="faq" className="px-4 mb-16">
            <FAQ faqs={BusinessAnalysisFAQ} />
        </section>
    )
};

// Main BusinessAnalysis Component
const BusinessAnalysis = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const contentsMenu = [
        { title: 'Services', id: 'services' },
        { title: 'Process', id: 'process' },
        { title: 'Structure', id: 'structure' },
        { title: 'PDF Guide', id: 'profile' },
        { title: 'FAQ', id: 'faq' },
        { title: 'Case studies and reviews', id: 'case' },
        { title: 'Awards & Recognitions', id: 'awards' },
        { title: 'Blog', id: 'stories' }
        
    ];

    // Track active section for mobile menu highlighting
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
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Mobile Menu Toggle Button */}
            <button
                className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Contents Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm p-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
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
                    <ul className="space-y-3">
                        {contentsMenu.map((item, index) => (
                            <li
                                key={index}
                                className={`text-lg p-3 rounded-lg transition-colors cursor-pointer ${activeSection === item.id
                                    ? 'bg-blue-100 text-blue-600 font-medium'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    {/* Close button at bottom for easier access */}
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                        >
                            Close Menu
                        </button>
                    </div>
                </div>
            )}

            <HeroSection />

            {/* Start the flex container for main content and TOC */}
            <div className="container mx-auto flex flex-col lg:flex-row ">
                {/* Main content column - takes 3/4 width on desktop */}
                <div className="w-full lg:w-[200%] px-2">
                    <BusinessAnalysisServices />
                    <BusinessAnalysisProcess />
                    <DiscoveryPhaseElements />
                    <FoxSolutionProfile />
                    <BusinessAnalysisOnService />
                    <FAQSection />
                    <Casestudies />
                    {/* Client Reviews Section */}
                                <section className="py-16 bg-gray-50">
                                  <div className="container mx-auto px-4">
                                    <h2 className="text-3xl font-bold text-center mb-12">
                                      What Our <span className="text-blue-600">Clients Say</span>
                                    </h2>
                                    <ReviewCarousel />
                                  </div>
                                </section>
                    <CertificationsWrapper />
                    <Contact />
                    <StoriesSection />
                </div>

                {/* Table of Contents - improved sticky behavior */}
                <div className="hidden lg:block lg:w-[23%]">
                    <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
                        <TableOfContents
                            sections={contentsMenu}

                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BusinessAnalysis;