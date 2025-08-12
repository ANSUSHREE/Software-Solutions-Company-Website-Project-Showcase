import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileAlt, FaUsersCog, FaHandshake, FaProjectDiagram, FaMoneyCheckAlt, FaShippingFast, FaIndustry, FaMobileAlt, FaCheck } from 'react-icons/fa';
import { ShieldCheck, CloudCog, BarChart3, Users2, Lock, RefreshCcw, ChevronRight, } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import FAQ from '@/components/ui/faq';
import { TableOfContents } from '../components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import { CertificationsSection } from '@/components/ui/Certification';
import TestimonialCarousel from '@/components/ui/Testimonial';

const faqs = [
  { question: "What is enterprise software development?", answer: "Enterprise software development is the process of creating large-scale applications tailored for business needs. These applications help organizations manage operations, automate workflows, and improve efficiency. They often include ERP, CRM, HRM, and data management systems. Security, scalability, and integration with existing systems are key aspects." },
  { question: "What are the benefits of enterprise software?", answer: "Enterprise software enhances efficiency by automating business processes and reducing manual tasks. It improves data management by centralizing information for better decision-making. The software ensures scalability, allowing businesses to grow without major system changes. It enhances collaboration by integrating different departments and streamlining workflows. Additionally, enterprise software strengthens security, protecting sensitive business data from cyber threats.." },
  { question: "How to choose between custom and off-the-shelf solutions?", answer: "Choosing between custom and off-the-shelf enterprise solutions depends on business needs, budget, and scalability. Custom software is tailored to specific requirements, offering flexibility but requiring higher costs and longer development time. Off-the-shelf solutions are cost-effective and quickly deployable but may lack customization and scalability. Businesses with unique workflows or industry-specific needs benefit from custom solutions, while smaller companies with standard requirements may prefer ready-made software. Evaluating long-term goals, integration needs, and support options helps in making the right decision." },
  { question: "How to choose off-the-shelf enterprise solutions?", answer: "To choose the right off-the-shelf enterprise solution, first assess your business needs and ensure the software aligns with your goals. Check for scalability and integration, ensuring it works seamlessly with existing systems. Evaluate vendor reputation, support, and security features to ensure reliability and data protection. Compare pricing models, licensing fees, and hidden costs to fit your budget. Finally, opt for software with user-friendly interfaces and customization options to enhance productivity and adaptability." },
  { question: "What is an Enterprise App Development Company?", answer: "An Enterprise App Development Company specializes in building custom software solutions for businesses. These companies create scalable, secure, and efficient applications like ERP, CRM, and automation tools. They use technologies such as Java, Spring, MySQL, and cloud platforms to develop enterprise-grade apps. Their focus is on enhancing business productivity, streamlining operations, and ensuring seamless integration with existing systems. These companies also provide ongoing support, updates, and security enhancements to maintain software performance.." }
];

const contentsMenu = [
  { title: 'Enterprise software develop', id: 'enterprise-software' },
  { title: 'Development process', id: 'development-process' },
  { title: 'Benefits', id: 'benefits' },
  { title: 'Recent works', id: 'recent-works' },
  { title: 'Awesome stories', id: 'awesome-stories' },
  { title: 'FAQ', id: 'footer' }
];

const solutions = [
  { icon: <FaFileAlt className="text-blue-500 text-4xl" />, title: "Enterprise information portals", description: "Gain a secure and streamlined portal for all your critical data and processes, ensuring compliance with stringent US data protection standards." },
  { icon: <FaHandshake className="text-blue-500 text-4xl" />, title: "Customer relationship management", description: "Build corporate systems for data, document, and knowledge management to organize, use, and store corporate content efficiently." },
  { icon: <FaFileAlt className="text-blue-500 text-4xl" />, title: "Document management systems", description: "Build corporate systems for data, document, and knowledge management to organize, use, and store corporate content efficiently." },
  { icon: <FaUsersCog className="text-blue-500 text-4xl" />, title: "Human resource management", description: "Automate recruiting processes and track employee resumes, abilities and skills, salary, and accomplishments with custom HRM software." },
  { icon: <FaProjectDiagram className="text-blue-500 text-4xl" />, title: "Workflow management systems", description: "Automate business processes by drawing a complete picture of the internal and external workflow processes." },
  { icon: <FaMoneyCheckAlt className="text-blue-500 text-4xl" />, title: "Financial & accounting management", description: "Streamline your financial operations with our solutions, ensuring crystal clear transparency and strategic fiscal management." },
  { icon: <FaShippingFast className="text-blue-500 text-4xl mb-4" />, title: "Order tracking & processing systems", description: "Automate the entire order process, from order entry to shipping and tracking sales commissioning." },
  { icon: <FaIndustry className="text-blue-500 text-4xl mb-4" />, title: "Manufacturing and supply chain management", description: "Drive business efficiency and keep profitability up by tracking data in real time and streamlining processes." },
  { icon: <FaMobileAlt className="text-blue-500 text-4xl mb-4" />, title: "Enterprise mobile app development", description: "Stay connected with business, get up-to-date information from any location and device with enterprise mobile apps." },
];

const benefits = [
  { icon: BarChart3, title: 'Forecasting and decision making', description: 'Top-level management support by providing real-time data for decision making.' },
  { icon: CloudCog, title: 'Business processes automation', description: 'Automation of the business operations including payment and manufacturing processes.' },
  { icon: RefreshCcw, title: 'Data centralization & integration', description: 'Integration of the different departments and teams ensures better communication.' },
  { icon: Lock, title: 'Improved data safety & security', description: 'Securing crucial enterprise data thanks to a common control system.' },
  { icon: Users2, title: 'Collaboration management', description: 'Bringing new opportunities for collaboration and interconnection of teams.' },
  { icon: ShieldCheck, title: 'Improved data safety & security', description: 'Ensuring key enterprise data safety thanks to a common control system.' }
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

const recentWorks = [
  {
    title: 'Custom ERP system for Toyota car dealer',
    description: 'The custom ERP system helps implementation for 20 dealers to manage their supply chain, inventory, sales of cars.',
    image: 'https://assets.techreviewer.co/uploads/portfolio_item/image/47/webp_95e8c487-5aec-4f69-995d-e528cda52bfa.jpg.webp',
    bgColor: 'bg-red-600'
  },
  {
    title: 'Custom AI-powered HRM system',
    description: 'An AI-backed HRM system that boosted OpenAI\'s overall employee management capabilities.',
    image: 'https://img.freepik.com/free-photo/person-surrounded-by-ai-robots-coworkers_23-2151015281.jpg?semt=ais_hybrid',
    bgColor: 'bg-blue-900'
  },
  {
    title: 'Transportation management system',
    description: 'A comprehensive solution for companies operating in the logistics industry.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBwCR4syd5POLiM0-PWIx_mPOUUCJ5uB04Mku2JlNx52gbR0U3HFNGoYTxgRjSgFpK_c&usqp=CAU',
    bgColor: 'bg-purple-700'
  }
];

const developmentProcessSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Our team of business analysts, system architects, and project managers during the Discovery phase understand, define, and take down the project vision.",
    points: [
      "Project requirement elicitation",
      "System architecture description",
      "User Interface design at the highest level",
      "Prototyping and proof-of-concept work",
      "Documentation & estimation",
    ],
  },
  {
    number: "2",
    title: "Development",
    description: "Fox-solutions team works on the project implementation using the best technologies and approaches.",
    points: [
      "Mature project management",
      "Modern and convenient design",
      "Agile methodology",
      "Proven QA",
      "Deployment and integration",
    ],
  },
  {
    number: "3",
    title: "Support",
    description: "Our team implements long-term support and maintenance to ensure the stable work of software.",
    points: [
      "1-4 level support services",
      "24/7 support",
      "100% compliance to SLAs",
    ],
  },
];

const EnterpriseDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef([]);

  const toggleAccordion = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

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
              <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Enterprise Software</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Custom <span className="text-blue-500">enterprise</span> software
              development services
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              With deep expertise in full-cycle enterprise software development
              services, our team improves and automates businesses with unmatched
              enterprise applications characterized by 3 specific attributes.
              Our solutions are tailored to meet the unique demands of modern businesses,
              ensuring high efficiency and scalability.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-semibold">✓ Business goals orientation</h3>
                <p className="text-gray-400 mt-2">
                  Any enterprise software is to sustain continuous operation and to
                  be utterly flexible for further scalability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">✓ Complex solutions</h3>
                <p className="text-gray-400 mt-2">
                  Custom Enterprise software handles big data, extensive parallel
                  processing, and network distributed resources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">✓ Best practices</h3>
                <p className="text-gray-400 mt-2">
                  Corporate software should be based on and should apply the most
                  effective ways of building business and software.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
              <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                Contact us
              </button>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
                <span className="text-gray-200">Clients rate our services 5.0</span>
              </div>
            </div>
          </div>
        </section>
        <CertificationsSection />

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {/* Main content container with proper layout */}
            <div className="container mx-auto flex flex-col lg:flex-row ">
              {/* Main content area - takes full width on mobile, 3/4 on desktop */}
              <div className="w-full lg:w-[200%] px-2">
                {/* Enterprise Software Section */}
                <section id="enterprise-software" ref={(el) => addToRefs(el, 0)} className="mb-16">
                  <RevealOnScroll>
                    <div className="bg-gray-50 py-3 px-4 md:px-8">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 m-2">
                        <span className="text-black-600">Custom enterprise software we develop</span>
                      </h1>
                      <p className="text-base mb-8">Our custom enterprise software is crafted with the American business landscape in mind, ensuring a seamless integration with the technological forefront and innovative spirit that drive US companies.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                          <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-95 transform border border-gray-100 hover:border-blue-200 flex flex-col h-full">
                              <div className="mb-4">{solution.icon}</div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                              <p className="text-gray-600">{solution.description}</p>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>

                {/* Reliable Company Section */}
                <section className="bg-gray-50 py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                          What Makes <span className="text-blue-600">Fox-Solution</span> a{" "}
                          <span className="text-blue-600">Reliable Company</span>
                        </h2>
                        <ul className="mt-6 space-y-4">
                          {[
                            "70 specialists onr board, 3+ years on the market.",
                            "70% of our team is senior-level developers.",
                            "150 successful apps built in 27 countries for 11 business domains.",
                            "We focus on long-term cooperation. 70% of our clients come back to us with another project.",
                            "Our client's satisfaction rate with our services is 98%, thanks to our firm commitment to deadlines and their needs.",
                            "We work honestly and transparently. We communicate weekly, run demos of the work done, explain potential risks and help to handle them, advise on the decisions, and help to avoid unnecessary costs.",
                            "We only release the software if it meets the specified percentage of acceptance criteria. The percentage is agreed upon with you in the quality assurance strategy."
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
                          src="https://media.istockphoto.com/id/1397678880/photo/closeup-of-a-black-businesswoman-typing-on-a-laptop-keyboard-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=Qj9WWpAoKB0W7k-c68Y-8neN6c1mCExnEO9UKG-eoXY="
                          alt="Company Work Environment"
                          loading="lazy"
                          className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </RevealOnScroll>
                    </div>
                  </RevealOnScroll>
                </section>

                {/* Development Process Section */}
                <section id="development-process" ref={(el) => addToRefs(el, 1)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Our enterprise software development{" "}
                        <span className="text-blue-600">process</span>
                      </h2>

                      <div className="mt-12 space-y-12">
                        {developmentProcessSteps.map((step, index) => (
                          <RevealOnScroll key={index} delay={index * 0.2}>
                            <div className="relative flex items-start">
                              <div className="absolute left-0 transform -translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                {step.number}
                              </div>

                              {index !== 2 && (
                                <div className="absolute left-0 top-12 w-1 h-full bg-gray-300 ml-5"></div>
                              )}

                              <div className="ml-16">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                  {step.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                                <ul className="mt-4 space-y-2">
                                  {step.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                      <span className="text-blue-500 font-bold mr-2">✔</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>

                {/* Benefits Section */}
                <section id="benefits" ref={(el) => addToRefs(el, 2)} className="max-w-7xl mx-auto px-4 py-12">
                  <RevealOnScroll>
                    <div className="text-center mb-12">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        <span className="text-blue-600">Benefits</span> Custom Enterprise Software Development
                      </h1>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        With the help of custom enterprise application development, we help our clients streamline business processes.
                      </p>
                    </div>
                  </RevealOnScroll>
                  <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                      <RevealOnScroll key={index} delay={index * 0.1}>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-95 transform border border-gray-100 hover:border-blue-200 flex flex-col h-full">
                          <div className="flex justify-center mb-4">
                            <item.icon className="w-12 h-12 text-blue-600 mb-4" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </section>

                {/* Client Reviews Section */}
                <section className="py-16 bg-gray-50 ">
                  <div className="container mx-auto px-4 mt-2">
                    <h2 className="text-3xl font-bold text-center mb-12">
                      What Our <span className="text-blue-600">Clients Say</span>
                    </h2>
                    <TestimonialCarousel />
                  </div>
                </section>

                {/* Tools & Technologies Section */}
                <section className="bg-white py-12 px-4 md:px-6">
                  <div className="max-w-6xl mx-auto">
                    <RevealOnScroll>
                      <h2 className="text-3xl md:text-4xl font-light text-black">
                        <span className="text-blue-500 font-semibold">Tools</span> & Technologies we use
                      </h2>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <p className="text-lg text-gray-600 mt-4 max-w-3xl">
                        Fox-solutions tracks the emergence of new technologies and applies them in high-tech
                        custom enterprise software development. The latest technologies bring numerous benefits,
                        from advanced security with blockchain to reliable automation with AI and ML algorithms.
                      </p>
                    </RevealOnScroll>
                    <ul className="mt-6 space-y-3 text-lg text-gray-800">
                      <RevealOnScroll>
                        <li className="flex items-center">
                          <span className="text-blue-500 mr-2">✔</span> Artificial Intelligence;
                        </li>
                      </RevealOnScroll>
                      <RevealOnScroll>
                        <li className="flex items-center">
                          <span className="text-blue-500 mr-2">✔</span> Big Data and Data Science;
                        </li>
                      </RevealOnScroll>
                      <RevealOnScroll>
                        <li className="flex items-center">
                          <span className="text-blue-500 mr-2">✔</span> Machine Learning;
                        </li>
                      </RevealOnScroll>
                      <RevealOnScroll>
                        <li className="flex items-center">
                          <span className="text-blue-500 mr-2">✔</span> Internet of Things.
                        </li>
                      </RevealOnScroll>
                    </ul>
                    <RevealOnScroll>
                      <div className="mt-8">
                        <img
                          src="https://sumatosoft.com/wp-content/uploads/2023/01/Rectangle-2006-1.png"
                          alt="Technologies"
                          className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </RevealOnScroll>
                  </div>
                </section>

                {/* Recent Works Section */}
                <section id="recent-works" ref={(el) => addToRefs(el, 3)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Recent Works
                      </h2>
                    </div>
                  </RevealOnScroll>

                  <div className="grid md:grid-cols-3 gap-6">
                    {recentWorks.map((work, index) => (
                      <RevealOnScroll key={index} delay={index * 0.2}>
                        <div className={`rounded-lg overflow-hidden shadow-lg ${work.bgColor} text-white`}>
                          <img
                            src={work.image}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                            <p className="mb-4">{work.description}</p>
                            <AnimatedButton>
                              <a href="#" className="flex items-center hover:underline">
                                Learn More <ChevronRight className="ml-2 w-5 h-5" />
                              </a>
                            </AnimatedButton>
                          </div>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </section>

                {/* Awesome story section */}
                <section id="awesome-stories" ref={(el) => addToRefs(el, 4)} className="max-w-4xl mx-auto py-12 px-4">
                  <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
                    We have awesome <span className="text-blue-600">stories</span> to tell you
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-gray-100 p-4 rounded-xl">
                      <img
                        src={articles[0].image}
                        alt={articles[0].title}
                        className="rounded-xl mb-4 w-full h-auto hover:scale-105 transition-transform duration-300"
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

                <Contact />
                {/* FAQ Section */}
                <section id="faq" ref={(el) => addToRefs(el, 5)} className="max-w-4xl mx-auto py-12 px-4">
                  <FAQ faqs={faqs} />
                </section>
              </div>

              {/* Table of Contents - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block lg:w-[23%]">
                <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
                  <TableOfContents
                    sections={contentsMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>



   

  
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
};

export default EnterpriseDevelopment;