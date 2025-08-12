import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileAlt, FaUsersCog, FaHandshake, FaProjectDiagram, FaMoneyCheckAlt, FaShippingFast, FaIndustry, FaMobileAlt, FaCheck } from 'react-icons/fa';
import { ShieldCheck, CloudCog, BarChart3, Users2, Lock, RefreshCcw, ChevronRight, Touchpad, SquareM, Shuffle, MessageSquare, CheckSquare, Shield, FileCode, Bot, SpellCheck, Users, UserPlus, Settings } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';

//import FAQ from '@/components/ui/Faq';

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
  { title: 'Java development services', id: 'Java-development-services' },
  { title: 'Java Solutions', id: 'Java-Solutions' },
  { title: 'Flexible cooperation models', id: 'Flexible-cooperation-models' },
  { title: 'Development process', id: 'development-process' },
  { title: 'Tech Stack', id: 'Tech-Stack' },
  { title: 'Recent Stories', id: 'recent-works' },
  { title: 'Awesome stories', id: 'reviews' },
  { title: 'FAQ', id: 'faq' }
];

const solutions = [
  { icon: <FaFileAlt className="text-blue-500 text-4xl" />, title: "Business analysis and Java project planning", description: "We dive deep into your business needs, translating them into a clear project roadmap. Our experts analyze requirements, define scope, and create a strategic plan for successful Java development." },
  { icon: <FaHandshake className="text-blue-500 text-4xl" />, title: "Java app architecture and tech stack planning", description: "Build a solid foundation with our expert architectural guidance. We design scalable, maintainable, and efficient Java application architectures, selecting the optimal tech stack for your specific project." },
  { icon: <FaFileAlt className="text-blue-500 text-4xl" />, title: "Java software testing", description: "With our comprehensive Java software testing services, we ensure flawless performance and overall app reliability. We employ rigorous testing methodologies to identify and resolve current issues and prevent the appearance of potential issues. High-quality and secure products are our priority." },
  { icon: <FaUsersCog className="text-blue-500 text-4xl" />, title: "Custom Java software development", description: "Tailored Java solutions crafted for a specific purpose in a particular industry. We provide full-fledged Java development outsourcing services and build custom software solutions that feature high scalability, security, and performance from the ground up." },
  { icon: <FaProjectDiagram className="text-blue-500 text-4xl" />, title: "Java API development", description: " We seamlessly connect your systems and enhance functionality with robust Java-based APIs. We design and develop secure and efficient APIs that act as digital bridges, enabling communication and data exchange between different system or application layers." },
  { icon: <FaMoneyCheckAlt className="text-blue-500 text-4xl" />, title: "Java application modernization", description: "Are you looking for an opportunity to modernize your existing Java application? It’s a great idea! Breathe new life into your legacy systems with our Java modernization services. We upgrade your applications to improve their performance, scalability, and maintainability.." },
  { icon: <FaShippingFast className="text-blue-500 text-4xl mb-4" />, title: "Java software support and evolution", description: "For existing software solutions, we provide continuous maintenance, updates, and enhancements. Ensure your Java applications remain up-to-date and perform optimally with our ongoing support and evolution services." },
  { icon: <FaIndustry className="text-blue-500 text-4xl mb-4" />, title: "Team augmentation with Java experts", description: "It’s hard to find a skillful Java expert – that’s why we offer team augmentation with our talented Java specialists. We provide experienced developers that seamlessly integrate with your in-house team and accelerate your project delivery." },
  { icon: <FaMobileAlt className="text-blue-500 text-4xl mb-4" />, title: "Migrations to Java", description: "Are you considering migrating to Java technology with your existing solution? We can tackle this with our expert migration services! We offer a smooth transition to a new system, even for the most complex migration, without data loss or process disruption." },
  { icon: <FaProjectDiagram className="text-blue-500 text-4xl" />, title: "Audit & rescue mission", description: "Revitalize struggling Java projects with our expert audit and rescue services. We identify and resolve critical issues, ensuring your project gets back on track." }
];


const benefits = [
  { icon: BarChart3, title: 'Mobile & web applications', description: 'We use the robust Java backend to build dynamic and responsive web applications and Android mobile applications. Our Java experts develop top-notch solutions that deliver unmatched business value and an exceptional user experience across all devices.' },
  { icon: CloudCog, title: 'Java for IoT', description: 'We harness the power of Java for IoT initiatives, creating solutions for IoT device management, intelligent systems, and data analytics. With deep technical expertise in developing multiple IoT solutions for supply chain management, retail, banking, smart cities, and more, we deliver modern systems that drive efficiency and innovation.' },
  { icon: RefreshCcw, title: ' Cloud-based platforms', description: 'We use Java and its vast ecosystem to build applications and services that run on cloud computing infrastructure from providers like AWS, Google Cloud Platform, and Microsoft Azure. Java’s platform independence, scalability, and robustness allow us to create backend services, APIs, microservices, and more.' },
  { icon: Lock, title: 'Enterprise Java applications', description: 'Java is an excellent choice for enterprise-level software development for a wide range of reasons. Its robust nature and mature ecosystem ensure stable and predictable development. This technology is optimized for large-scale applications, boasts strong built-in security features, is platform-independent, and benefits from a large and active development community.' },
  { icon: Users2, title: 'Java-based SaaS application development', description: 'We create easily scalable SaaS applications that can handle a growing number of users and data. Java’s mature nature allows us to build APIs for integrating SaaS applications with other services and platforms, while frameworks like Spring Boot and Jakarta EE simplify Java SaaS development.' },
  { icon: ShieldCheck, title: 'Java microservices development', description: 'Java supports microservice architecture, which involves building applications as a collection of small, independent services. The technology boasts a rich ecosystem of frameworks and tools specifically designed for microservice development, such as Spring Boot, Micronaut, and Quarkus. By utilizing technologies like Docker and Kubernetes, we can easily deploy and orchestrate containerized microservices.' },
  { icon: Touchpad, title: 'Java CMS development', description: 'We build powerful and flexible content management systems (CMS) with Java, giving you complete control over your digital content. We simplify content management with user-friendly interfaces, automate content-related tasks, optimize database interaction and large data volume handling, and ensure our Java solutions serve as reliable tools for online content management.' },
  { icon: Shuffle, title: 'Java product development', description: 'Are you planning to develop a Java product from scratch? Our Java developers are ready to bring your product ideas to life with expert Java development outsourcing services! We guide you through every step of the software development lifecycle, ensuring every decision and piece of functionality meets top industry standards.' },
  { icon: SquareM, title: 'Java MVP development', description: 'We offer rapid MVP development with our Java MVP development outsourcing services. We’ve refined our development process for over 10 years, ensuring fast, cost-effective, and efficient MVP development.' }

];


const articles = [
  {
    title: "Top 25 MVP Development Companies",
    time: "52 mins",
    date: "March 24, 2025",
    image: "https://via.placeholder.com/600x300",
  },
  {
    title: "IoT Apps for Oil & Gas Industry – What's in It?",
    time: "12 mins",
    date: "February 24, 2025",
  },
  {
    title: "Internet of Things in Logistics Development",
    time: "11 mins",
    date: "February 20, 2025",
  },
  {
    title: "IoT Solutions for Education: Overview & Best Practices",
    time: "6 mins",
    date: "February 18, 2025",
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);


const techCategories = [
  {
    id: 'frameworks',
    title: 'Frameworks',
    items: ['Spring Framework', 'Eclipse Vert.x']
  },
  {
    id: 'platforms',
    title: 'Platforms',
    items: ['Jakarta EE', 'Java EE']
  },
  {
    id: 'clouds',
    title: 'Clouds',
    items: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'DigitalOcean', 'Rackspace Technology']
  },
  {
    id: 'sql',
    title: 'SQL',
    items: ['Microsoft SQL Server', 'Microsoft Fabric', 'MySQL', 'Azure SQL Database']
  },
  {
    id: 'nosql',
    title: 'NoSQL',
    items: ['Apache Cassandra', 'Apache Hive', 'Apache HBase']
  },
  {
    id: 'aws',
    title: 'AWS',
    items: ['Amazon S3', 'Amazon Redshift'],
    footer: 'and more'
  }
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
    title: "Analysis and estimation",
    points: [
      "idea feasibility validation",
      "business analysis and market research (Optional);",
      "free scoping session",
      "estimation preparation",
      "contract preparation.",
    ],
  },
  {
    number: "2",
    title: "Architecture & development",
    points: [
      "architecture design",
      "requirements elicitation for development iterations",
      "development",
      "quality assurance and testing",
      "regular reporting;",
    ],
  },
  {
    number: "3",
    title: "Product delivery",
    points: [
      "Product delivery",
      "user acceptance testing",
      "deployment on the web",
      "deployment on the app stores",
    ],
  },
  {
    number: "4",
    title: "Support and further development",
    points: [
      "performance monitoring",
      "technology version update",
      "server management and resource optimization",

    ],
  },

];

const JavaDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef([]);
  const [activeModel, setActiveModel] = useState('softwareDevelopment');
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

    // Copy refs to a variable for cleanup
    const refsForCleanup = [...sectionRefs.current];

    return () => {
      refsForCleanup.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  // Assign refs to sections
  const addToRefs = useCallback((el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  }, []);

  const [selectedModel, setSelectedModel] = useState('consulting');

  const modelContents = {
    softwareDevelopment: {
      title: "Software development outsourcing",
      description: "Outsourcing involves delegating the entire software development process to our development team. We compose a team of different specialists: business analysts, designers, Node.js developers, and QA specialists, led by a project manager. The team covers everything from business analysis to deployment while you act as a stakeholder, providing input, setting goals, and reviewing progress to ensure alignment with your vision."
    },
    staffAugmentation: {
      title: "Staff augmentation",
      description: "Staff augmentation allows you to temporarily extend your team with our skilled professionals. This model is ideal when you have an existing development team but need additional expertise or capacity. Our specialists integrate with your team, working under your management while bringing their technical knowledge and experience to accelerate your project development."
    },
    dedicatedTeam: {
      title: "Dedicated team",
      description: "With a dedicated team model, you get access to a consistent team of professionals who work exclusively on your project. This creates a stable, long-term relationship where the team deeply understands your business, technology stack, and goals. You maintain control over the team's priorities and direction, while we handle team management, professional development, and technical expertise."
    }
  };
  const modelContent = {
    fullCycle: {
      title: "Full-cycle project outsourcing",
      description: "We handle your entire project from conception to delivery. Our team takes responsibility for all development phases including requirements analysis, design, implementation, testing, deployment, and maintenance. This model provides you with a complete solution while you focus on your core business.",
      icon: <Settings size={32} className="text-gray-500" />
    },
    dedicated: {
      title: "Dedicated Java team",
      description: "Get access to a team of skilled Java developers who work exclusively on your project. Our dedicated team model provides you with consistent resources who understand your business domain and technology stack. You maintain full control over priorities and project direction while we handle team management and technical expertise.",
      icon: <Users size={32} className="text-gray-500" />
    },
    staffAugmentation: {
      title: "Staff augmentation",
      description: "Extend your in-house capabilities with our expert Java developers. Our staff augmentation model lets you quickly scale your team up or down based on project demands. Our developers integrate into your existing team structure, following your processes while bringing additional technical expertise to your projects.",
      icon: <UserPlus size={32} className="text-gray-500" />
    },
    consulting: {
      title: "Consulting & audit",
      description: "We provide expert guidance on technology selection, architecture design, and development best practices. We analyze your business requirements, project needs, business goals, and existing processes and identify areas for implementing new solutions or improving the existing workflows. Whether you need a security audit, code review, or performance improvements of the existing Java ecosystem, we can offer our consulting services.",
      icon: <MessageSquare size={32} className="text-gray-500" />
    }
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };


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
              <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Java Development</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8  flex items-center">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500">Java </span>
              development Company
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Partner with SumatoSoft for high-quality Java development. We provide end-to-end development, from concept to deployment and beyond. Our expert team of developers and a decade of experience ensure your projects are delivered on time and within budget.

            </p>


            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
              <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                Hire Java Developers
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
                <section id="Java-development-services" ref={(el) => addToRefs(el, 0)} className="mb-16">
                  <RevealOnScroll>
                    <div className="bg-gray-50 py-3 px-4 md:px-8">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 m-2">
                        <span className="text-black-600">Our Java development services</span>
                      </h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                          <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition h-full">
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

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Begin Your Custom Java Journey

                      </h2>
                      <p className="text-xl text-left">
                        Schedule a Free Consultation Now!
                      </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>

                {/* Reliable Company Section */}
                <section className="bg-gray-50 py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                          <span className="text-blue-600">Fox Solution </span> is your reliable Java development company
                        </h2>
                        <ul className="mt-6 space-y-4">
                          {[

                            "With a track record of 250+ successful projects and over a decade of experience, we stand out as a leading Java development outsourcing company! We leverage our deep industry knowledge and technical proficiency to deliver scalable, secure, and high-performance applications that drive tangible business outcomes",


                            "At Fox Solution, we believe open and honest communication throughout every stage of your Java development project is key to successful project delivery. We provide top-tier Java development outsourcing services, and our high ratings 4.8 on Clutch and 5.0 on Goodfirms prove it. We are ready to become your reliable Java development outsourcing provider"

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



                <section id="Java-Solutions" ref={(el) => addToRefs(el, 2)} className="max-w-7xl mx-auto px-4 py-12">
                  <RevealOnScroll>
                    <div className="text-center mb-12">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        <span className="text-blue-600">JAVA</span> solutions we deliver
                      </h1>

                    </div>
                  </RevealOnScroll>
                  <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                      <RevealOnScroll key={index} delay={index * 0.1}>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition h-full text-center">
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

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Begin Your Custom Java Journey

                      </h2>
                      <p className="text-xl text-left">
                        Schedule a Free Consultation Now!
                      </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>





                <section id="Flexible-cooperation-models">

                  {/* Header Section */}

                  <div className="w-3/4">
                    <h1 className="text-4xl font-bold mb-6 mt-16">
                      Flexible cooperation <span className="text-blue-500">models</span> tailored to your project
                    </h1>
                    <p className="text-lg mb-12">
                      We understand that every project comes with different goals, requirements, and limitations. That's why we offer a variety of cooperation models, allowing you to choose the best fit for your specific project.
                    </p>
                  </div>
                  {/* Cooperation Models */}
                  <div className="grid grid-cols-4 gap-8 mb-12">
                    <div
                      className={`flex flex-col items-center text-center p-4 cursor-pointer ${selectedModel === 'fullCycle' ? 'border-b-2 border-blue-500' : ''}`}
                      onClick={() => handleModelSelect('fullCycle')}
                    >
                      <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <Settings size={32} className={selectedModel === 'fullCycle' ? 'text-blue-500' : 'text-gray-500'} />
                      </div>
                      <h3 className={`text-xl mb-2 ${selectedModel === 'fullCycle' ? 'text-blue-500' : 'text-gray-500'}`}>Full-cycle project outsourcing</h3>
                    </div>

                    <div
                      className={`flex flex-col items-center text-center p-4 cursor-pointer ${selectedModel === 'dedicated' ? 'border-b-2 border-blue-500' : ''}`}
                      onClick={() => handleModelSelect('dedicated')}
                    >
                      <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <Users size={32} className={selectedModel === 'dedicated' ? 'text-blue-500' : 'text-gray-500'} />
                      </div>
                      <h3 className={`text-xl mb-2 ${selectedModel === 'dedicated' ? 'text-blue-500' : 'text-gray-500'}`}>Dedicated Java team</h3>
                    </div>

                    <div
                      className={`flex flex-col items-center text-center p-4 cursor-pointer ${selectedModel === 'staffAugmentation' ? 'border-b-2 border-blue-500' : ''}`}
                      onClick={() => handleModelSelect('staffAugmentation')}
                    >
                      <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <UserPlus size={32} className={selectedModel === 'staffAugmentation' ? 'text-blue-500' : 'text-gray-500'} />
                      </div>
                      <h3 className={`text-xl mb-2 ${selectedModel === 'staffAugmentation' ? 'text-blue-500' : 'text-gray-500'}`}>Staff augmentation</h3>
                    </div>

                    <div
                      className={`flex flex-col items-center text-center p-4 cursor-pointer ${selectedModel === 'consulting' ? 'border-b-2 border-blue-500' : ''}`}
                      onClick={() => handleModelSelect('consulting')}
                    >
                      <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <MessageSquare size={32} className={selectedModel === 'consulting' ? 'text-blue-500' : 'text-gray-500'} />
                      </div>
                      <h3 className={`text-xl mb-2 ${selectedModel === 'consulting' ? 'text-blue-500' : 'text-gray-500'}`}>Consulting & audit</h3>
                    </div>
                  </div>

                  {/* Selected Model Details */}
                  <div className="flex mb-12">
                    <div className="w-2/3 pr-8">
                      <h2 className="text-3xl font-bold mb-6">{modelContent[selectedModel].title}</h2>
                      <p className="text-lg">
                        {modelContent[selectedModel].description}
                      </p>
                    </div>

                  </div>

                </section>

                <section id="pricing">



                  {/* Main Content */}
                  <div className="flex-grow mt-64 mb-24">
                    <h1 className="text-5xl font-bold mb-16">
                      Transparent <span className="text-blue-500">pricing</span>options
                    </h1>
                    <p>We offer three pricing models that fit different projects. Every model shares the same set of characteristics. Every model is transparent – we don’t have any hidden or undiscussed costs. Our estimations are accurate and calculated specifically for your project – we don’t double them unexpectedly. Every model is based on fair prices – we believe in providing exceptional value and building long-term partnerships with our Clients.</p>
                    <div className="flex mt-16">
                      {/* Left Content */}
                      <div className="w-1/2 pr-12">
                        <h2 className="text-3xl font-bold mb-6">{modelContents[activeModel].title}</h2>
                        <p className="text-lg">
                          {modelContents[activeModel].description}
                        </p>
                      </div>

                      {/* Right Menu */}
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

                    </div>
                  </div>






                </section>

                {/* Development Process Section */}
                <section id="development-process" ref={(el) => addToRefs(el, 1)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Our streamlined Java development{" "}
                        <span className="text-blue-600">process</span>
                      </h2>
                      <p>
                        We act as a dedicated technical partner, covering all aspects of software development from initial idea feasibility validation to ongoing support and enhancement of the developed solution. We guide our Clients through every stage, offering expert consultation on optimal solutions, proactively informing them of potential risks, and providing comprehensive advice on any aspect of their project where our expertise can add value.
                      </p>
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


                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md:w-2/3">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Empower Your Business with Java

                      </h2>
                      <p className="text-xl text-left">
                        Start Your Custom Project Today!
                      </p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </section>
                {/* Tools & Technologies Section */}
                <section id="Tech-Stack" className="bg-white py-12 px-4 md:px-6">
                  <div className="max-w-6xl mx-auto">
                    <RevealOnScroll>
                      <h2 className="text-3xl md:text-4xl font-light text-black">
                        Our <span className="text-blue-500 font-semibold"> tech stack </span> for Java solutions

                      </h2>
                      <p>
                        We leverage a diverse technology stack to build cutting-edge applications for any industry and business size. Our tech stack includes industry-leading frameworks, cloud platforms, databases, performance monitoring and DevOps tools, which allows us to develop scalable, secure, and high-performance solutions to any needs.
                      </p>

                      <div className="flex flex-col md:flex-row p-4 bg-gray-50">
                        <div className="flex-grow md:w-3/4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Map through tech categories */}
                            {techCategories.map(category => (
                              <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                                <ul className="space-y-2">
                                  {category.items.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                      <CheckIcon />
                                      {item}
                                    </li>
                                  ))}
                                  {category.footer && (
                                    <li className="text-gray-600 ml-7">{category.footer}</li>
                                  )}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

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

                <div className="w-full bg-white font-sans px-6 mb-12 ml-20">
                  <div className="container mx-auto px-6 py-">
                    <div className="flex flex-wrap">
                      {/* Main Content */}
                      <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
                        <header className="mb-8 text-center">
                          <h1 className="text-4xl font-bold mb-4">
                            What makes <span className="text-blue-500">Fox - Solution </span> a favorable Java app developer
                          </h1>
                          <p className="text-lg text-gray-700">
                            Since 2012, we have helped companies to gain competitive benefits by applying the best IT innovations. We provide
                            exceptional Java development outsourcing services, combining deep expertise, rigorous quality standards, and a
                            client-centric approach. Thanks to our values and work approach, we have managed to become a reliable Java
                            development company for more than 250 Clients all over the world.
                          </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                          {/* Feature 1 */}
                          <div className="text-center">
                            <div className="flex justify-center mb-4">
                              <MessageSquare className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">Full transparency during cooperation</h2>
                            <p className="text-gray-700">
                              We establish a clear roadmap, KPIs, and reporting approach and ensure complete visibility throughout the project.
                            </p>
                          </div>

                          {/* Feature 2 */}
                          <div className="text-center">
                            <div className="flex justify-center mb-4">
                              <CheckSquare className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">Unwavering quality</h2>
                            <p className="text-gray-700">
                              Our mature quality management system, backed by ISO 9001 certification, guarantees the highest standards of code
                              quality and project execution.
                            </p>
                          </div>

                          {/* Feature 3 */}
                          <div className="text-center">
                            <div className="flex justify-center mb-4">
                              <Shield className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">Robust security</h2>
                            <p className="text-gray-700">
                              We prioritize data security with ISO 27001-certified security management.
                            </p>
                          </div>
                          {/* Feature 3 */}
                          <div className="text-center">
                            <div className="flex justify-center mb-4">
                              <FileCode className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">Mature DevOps approach</h2>
                            <p className="text-gray-700">
                              We rely on a mature DevOps culture to streamline development, enhance collaboration, and accelerate time-to-market
                            </p>
                          </div>
                          {/* Feature 3 */}
                          <div className="text-center">
                            <div className="flex justify-center mb-4">
                              <Bot className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">Advanced tech proficiency</h2>
                            <p className="text-gray-700">
                              We possess extensive experience in cutting-edge technologies like IoT, Big Data, Machine Learning, and Blockchain, enabling us to build innovative solutions.
                            </p>
                          </div>
                          {/* Feature 3 */}
                          <div className="text-center">
                            <div className="flex justify-center mb-4">
                              <SpellCheck className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-xl font-bold mb-4">AI architecture design</h2>
                            <p className="text-gray-700">
                              We design custom AI architecture that includes the general solution structure, components, workflows, and data management.
                            </p>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <section id="reviews" className="py-16 bg-gray-50">
                  <div className="container mx-auto px-4 mt-2">
                    <h2 className="text-3xl font-bold text-center mb-12">
                      What Our <span className="text-blue-600">Clients Say</span>
                    </h2>
                    <TestimonialCarousel />
                  </div>
                </section>



                {/* Awesome story section */}
                <CertificationsSection />
                {/* FAQ Section */}

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


      <Contact />
      <Footer />
    </div>
  );
};

export default JavaDevelopment;