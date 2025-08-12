
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileAlt, FaUsersCog, FaHandshake, FaProjectDiagram, FaMoneyCheckAlt, FaShippingFast, FaIndustry, FaMobileAlt, FaCheck } from 'react-icons/fa';
import { ShieldCheck, CloudCog, BarChart3, Users2, Lock, RefreshCcw, ChevronRight, Touchpad, SquareM, Shuffle, MessageSquare, CheckSquare, Shield, FileCode, Bot, SpellCheck, Clock, DollarSign, PieChart } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import FAQ from '@/components/ui/faq';
import { TableOfContents } from '../components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import { CertificationsSection } from '@/components/ui/Certification';
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




const portfolioItems = [
    {
        id: 1,
        title: "Cost management platform development",
        description: "A cost management system for equipment in the construction industry",
        image: "/api/placeholder/600/400",
        link: "https://sumatosoft.com/portfolio/cost-management-platform-development"
    },
    {
        id: 2,
        title: "Graphical user interface for robot operation",
        description: "SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot Alfred",
        image: "/api/placeholder/600/400",
        logo: "/api/placeholder/150/50"
    }
];




const contentsMenu = [
    { title: 'Node Js development services', id: 'Java-development-services' },
    { title: 'Nodejs Solutions', id: 'NodeJs-Solutions' },
    { title: 'Nodejs In Industry', id: 'Nodejs_solutions-in-Industry' },
    { title: 'Why Nodejs', id: 'why-Nodejs' },
    { title: 'Cooperation models', id: 'Co-operation-models' },
    { title: 'Recent works', id: 'recent-work' },
    { title: 'Awesome stories', id: 'reviews' },
    { title: 'Tech-Stack', id: 'Tech-Stack' },
    { title: 'Pricing', id: 'pricing' },
    { title: 'Why Fox-solution', id: 'Why-Fox-solution' },
    { title: 'Certification', id: 'Certification' },
    { title: 'FAQ', id: 'faq' },
    { title: 'BLOG', id: 'stroiesSection' },
];


const benefitSections = [
    {
        title: "Non-blocking I/O model",
        description: "Node.js operates on an event-driven, asynchronous architecture. Such an approach means it doesn't block operations while waiting for I/O tasks like database queries or API calls to complete. The result is simple and straightforward: faster response times and better resource utilization."
    },
    {
        title: "Dynamic NPM",
        description: "NPM is Node Package Manager – it's a well-developed tool for downloading and managing open-source libraries and modules. Easy access to thousands of libraries and modules speeds up development and eliminates repetitive code in the application."
    },
    {
        title: "Efficient in solving database queries",
        description: "Node.js efficiently handles multiple database requests simultaneously thanks to their asynchronous processing."
    },
    {
        title: "Good with sync issues",
        description: "Unlike traditional multi-threaded applications that can run into synchronization issues, Node.js' single-threaded event loop prevents data inconsistencies and deadlocks."
    },
    {
        title: "Quick code execution",
        description: "Node.js is built on top of Google's V8 JavaScript engine, which compiles JavaScript into machine code. It makes script execution significantly faster compared to interpreted languages."
    },
    {
        title: "Scalability",
        description: "Node.js supports horizontal and vertical scaling, which gives it enough flexibility to handle increased traffic and manage concurrent connections without straining resources."
    },
    {
        title: "MVP development",
        description: "Development with Node.js is characterized by a quick development cycle and efficient resource utilization. Its lightweight architecture, reusable modules, and non-blocking I/O allow startups to rapidly build, test, and iterate products with minimal costs."
    },
    {
        title: "Full-stack development",
        description: "With Node.js, developers can use JavaScript for both frontend and backend, eliminating the need for different programming languages."
    },
    {
        title: "Vast community",
        description: "Node.js has a large, active developer community, extensive support, and constant sharing of knowledge and best practices."
    },
    {
        title: "Flexibility",
        description: "Node.js supports different architecture types: microservices, monolithic, and serverless computing. Such flexibility allows to building a wide range of applications, from small-scale tools to enterprise-grade platforms."
    },
    {
        title: "Quick data processing",
        description: "With its non-blocking event loop, Node.js efficiently processes real-time data streams. Multiple applications benefit from it, such as live streaming, messaging apps, and real-time analytics."
    },
    {
        title: "Cross-platform compatibility",
        description: "Node.js supports development for web, mobile, and desktop platforms."
    },
    {
        title: "Cost savings",
        description: "Using JavaScript for both the front end and the back end reduces the need for multiple development teams, lowering hiring and operational costs. Node.js' efficient resource usage also helps optimize server costs."
    },
    {
        title: "Single language usage",
        description: "With Node.js, developers can use JavaScript throughout the entire tech stack. This results in faster development cycles and better maintainability."
    },
    {
        title: "Security",
        description: "Security highly depends on the best practice usage and developer expertise. However, Node.js also contributes to application security by supporting various security modules, including JWT authentication."
    }
];





const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);


const techCategories = [
    {
        id: 'Frontend frameworks',
        title: 'Frontend frameworks',
        items: ['ReactJS', 'Vue.js', 'AngularJS', 'EmberJS', 'BackboneJS', 'Bootstrap', 'Sencha (ExtJS)']
    },
    {
        id: 'Databases',
        title: 'Databases',
        items: ['JMySQL',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Memcached',
            'MSSQL',
            'Neo4j Graph',
            'Elasticsearch',
            'ClickHouse',
            'AWS DynamoDB',
            'AWS Redshif',
            'Microsoft SQL Server']
    },
    {
        id: 'Testing and development tools',
        title: 'Testing and development tools',
        items: ['JasperReports',
            'JasperServer',
            'BIRT',
            'Pentaho',
            'Talend Web Services']
    },
    {
        id: 'Additional libraries and tools',
        title: 'Additional libraries and tools',
        items: ['New Relic',
            'Zabbix',
            'Datadog',
            'Errbit',
            'Rollbar',
            'Nginx',
            'Payment Gateways',
            'Google Apps',
            'Ads Platforms',
            'Social Media APIs',
            'Microsoft Fabric']
    }

];





const NodeJsDevelopment = () => {
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


    const mvpFaqs = [
        {
            question: "Is Node.js good for web development??",
            answer: "Yes, Node.js is excellent for web development thanks to its high performance and scalability. Node.js is ideal for APIs, SPAs, streaming apps, and enterprise applications, enabling fast, efficient, and cross-platform development."
        },
        {
            question: "How much does Node.js app development cost?",
            answer: (
                <>
                    <p>The cost varies depending on the project’s complexity, features, and team location</p>
                    <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>A simple Node.js app may start at $10,000, while enterprise applications can cost $50,000+. </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>When providing Node.js development and consulting services, we help optimize the costs of project development. </span>
                        </li>


                    </ul>
                </>
            )
        },
        {
            question: "Do you provide post-launch software maintenance?",
            answer: "Yes, we offer post-launch support, which includes bug fixes, application updates, security patches, and performance optimization based on constant feedback from users and core stakeholders."
        },
        {
            question: "Is Node.js development faster than the other frameworks?",
            answer: (
                <>
                    Yes, Node.js is faster than many traditional frameworks due to its non-blocking, event-driven architecture and V8 engine. Node.js development is ideal for high-performance applications with real-time data processing.            </>
            )
        },
        {
            question: "What are the benefits of outsourcing Node.js development?",
            answer: "Outsourcing offers cost savings, access to skilled developers, faster time to market, and high team flexibility. It eliminates hiring and infrastructure expenses while ensuring access to top developers globally."
        }
    ];


    const modelContent = {
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

    const [activeService, setActiveService] = useState('iot');

    const services = [
        { id: 'iot', name: 'IoT development', active: true },
        { id: 'ai', name: 'AI development', active: false },
        { id: 'blockchain', name: 'Blockchain development', active: false },
        { id: 'bigdata', name: 'Big data development', active: false }
    ];

    const handleServiceClick = (serviceId) => {
        setActiveService(serviceId);
    };

    const renderContent = () => {
        switch (activeService) {
            case 'iot':
                return (
                    <>
                        <h2 className="text-4xl font-bold mb-6">IoT development</h2>
                        <p className="text-lg text-gray-800 mb-8">
                            Node.js is ideal for real-time data processing, device connectivity, and
                            efficient resource management in IoT ecosystems. We develop IoT
                            applications for smart cities, industrial automation, healthcare monitoring,
                            fleet management, and predictive maintenance.
                        </p>
                        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded transition-colors duration-200">
                            Internet of Things development
                        </button>
                    </>
                );
            case 'ai':
                return (
                    <>
                        <h2 className="text-4xl font-bold mb-6">AI development</h2>
                        <p className="text-lg text-gray-800 mb-8">
                            We leverage Node.js to integrate machine learning models and process large datasets. Its ability to handle asynchronous operations and API integrations makes it a great choice for AI-powered chatbots, recommendation engines, and data analysis tools. We leverage our Node.js expertise to deliver exceptional appss for healthcare, finance, and e-commerce.
                        </p>
                        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded transition-colors duration-200">
                            AI development
                        </button>
                    </>
                );
            case 'blockchain':
                return (
                    <>
                        <h2 className="text-4xl font-bold mb-6">Blockchain development</h2>
                        <p className="text-lg text-gray-800 mb-8">
                            Node.js facilitates secure, decentralized applications and smart contract integrations for blockchain networks. Node.js is a go-to choice in blockchain development due to its asynchronous and event-driven architecture.
                        </p>
                        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded transition-colors duration-200">
                            Blockchain development
                        </button>
                    </>
                );
            case 'bigdata':
                return (
                    <>
                        <h2 className="text-4xl font-bold mb-6">Big data development</h2>
                        <p className="text-lg text-gray-800 mb-8">
                            Big data involves dealing with large-scale data streams, and Node.js helps greatly due to its high-performance nature. Our services include data engineering, analytics, visualization, and building intuitive and informative dashboards with charts and graphs.
                        </p>
                        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded transition-colors duration-200">
                            Big data development
                        </button>
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
                            <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Node Js Development</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8  flex items-center">
                    <div className="max-w-5xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-blue-500">Node.js </span>
                            development services
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            We offer expert services to build fast, secure, real-time applications using node.js technology. From custom solutions to scalable applications, we help your business succeed in the digital world.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8 text-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>high performance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>cost-effective development</span>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>cross-platform compatibility</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <span>microservices architecture</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
                            <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                                Contact Us
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
                                            <h1 className="text-5xl font-bold mb-6">
                                                Our expert<span className="text-blue-500"> Node.js development </span>services
                                            </h1>
                                            <p className="text-lg max-w-4xl mx-auto text-gray-700">
                                                Our expert node.js developers build fast, scalable, and secure web and mobile applications and APIs that drive business growth.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                                {/* Custom Web Development */}
                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Custom Node.js web development</h2>
                                                    <p className="text-gray-700">
                                                        We develop custom web applications for startups and enterprises, leveraging the power of Node.js. Our team ensures high performance, security, and a great user experience with our custom web applications that use Node.js for the backend and API and modern frameworks like React, Next.js, and Vue.js for the frontend.
                                                    </p>
                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Node.js mobile app development</h2>
                                                    <p className="text-gray-700">
                                                        We create lightweight, real-time apps for iOS and Android, using Node.js as a robust backend. We develop secure, high-performing APIs that enable real-time data processing, authentication, and seamless interaction between mobile apps and the database.
                                                    </p>
                                                </div>


                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">IoT app development with Node.js</h2>
                                                    <p className="text-gray-700">
                                                        Node.js works great for IoT backend systems since it effectively handles real-time data processing, low-latency communication, and IoT device management and connection. Our IoT applications feature smooth device-to-cloud communication and seamless integration with data analytics.
                                                    </p>
                                                </div>

                                                {/* API Development */}
                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Node.js API development & integration</h2>
                                                    <p className="text-gray-700">
                                                        We design and build scalable, secure, and high-performing APIs using RESTful or GraphQL architecture. When providing Node.js development services, we integrate third-party services, databases, and microservices, ensuring seamless communication.
                                                    </p>

                                                </div>


                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Super app development</h2>
                                                    <p className="text-gray-700">
                                                        Super apps eliminate the need for multiple standalone applications by providing an all-in-one platform that integrates various services for day-to-day activities, such as e-commerce, banking, communication, transportation, and more. Super apps require high-performing backend services to handle massive traffic, support diverse functionality, and enable seamless integrations—and Node.js is an excellent choice, efficiently managing concurrent requests, ensuring scalability, and delivering real-time performance.          </p>

                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Enterprise software development</h2>
                                                    <p className="text-gray-700">
                                                        We develop enterprise-grade backends with Node.js for solutions that are designed for complex workflows and extensive data exchange between departments. Our development ensures efficiency, integration with existing systems, and compliance with industry standards.          </p>

                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Node.js microservices development</h2>
                                                    <p className="text-gray-700">
                                                        We develop a microservices-based architecture that simplifies the app maintainability and further improvements. Our Node.js microservice development services feature independent, lightweight Node.js services that enhance flexibility, speed, and fault tolerance for complex applications.          </p>

                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Node.js plugin development</h2>
                                                    <p className="text-gray-700">
                                                        We build specialized Node.js plugins, connect applications with external APIs, databases, and tools, and optimize speed, security, and resource efficiency. Our services help businesses enhance their Node.js applications without modifying core logic.

                                                    </p> </div>


                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Node.js maintenance & support</h2>
                                                    <p className="text-gray-700">
                                                        Our talented developer team keeps your backend secure, optimized, and up-to-date with our Node.js maintenance services. We handle bug fixes, security updates, performance monitoring, and system enhancements.
                                                    </p> </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-2xl font-bold mb-4">Node.js consulting</h2>
                                                    <p className="text-gray-700">
                                                        Get expert guidance on Node.js architecture, scalability, performance optimization, and best practices. Our consultants help you make the right technology choices, optimize infrastructure, and enhance development efficiency.       </p> </div>





                                            </div>





                                        </div>
                                    </RevealOnScroll>
                                </section>

                                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                                        <div className="md:w-2/3">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                                                Explore Node.js Solutions

                                            </h2>
                                            <p className="text-xl text-left">
                                                Discover how our Node.js development services can streamline your operations. Schedule a free consultation!
                                            </p>
                                        </div>
                                        <div className="md:w-1/3 flex justify-end">
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                                                Get in touch
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                <section id="NodeJs-Solutions">
                                    <div className="max-w-7xl mx-auto px-4 py-8">
                                        {/* Header Section */}
                                        <div className="mb-12 text-center">
                                            <h1 className="text-5xl font-bold mb-6">
                                                Powerful Node.js <span className="text-blue-500">solutions</span> we develop
                                            </h1>
                                            <p className="text-lg max-w-4xl mx-auto text-gray-700">
                                                Node.js is the powerful backbone of any application that requires fast, scalable, high-performing architecture.
                                                Node.js is an excellent solution for complex single-page applications, chat systems, microservices-based ERPs and
                                                CRMs, and other solutions.
                                            </p>
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
                                            <h2 className="text-2xl font-bold mb-4">Complex single-page applications (SPAs)</h2>
                                            <p className="text-gray-700">
                                                Single-page applications dynamically update content without reloading the page.
                                                Node.js comes here just in handy, enabling high-speed data handling and quick
                                                response time to user actions. We provide Node.js development services for building
                                                complex single-page applications.
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
                                            <h2 className="text-2xl font-bold mb-4">Internet of Things (IoT) apps</h2>
                                            <p className="text-gray-700">
                                                IoT applications require real-time data processing and the simultaneous connection
                                                of multiple devices. Node.js efficiently handles concurrent connections, processing
                                                sensor data, and integrating cloud services.
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
                                            <h2 className="text-2xl font-bold mb-4">Real-time collaboration tools</h2>
                                            <p className="text-gray-700">
                                                Collaboration platforms like document editors, task managers, and workflow
                                                automation tools rely on instant updates. Node.js, combined with WebSockets,
                                                ensures seamless real-time synchronization across multiple users and devices.
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
                                            <h2 className="text-2xl font-bold mb-4">Microservices architecture</h2>
                                            <p className="text-gray-700">
                                                Microservices break applications into smaller, independently deployable services.
                                                Node.js enables lightweight, high-performance microservices that enhance
                                                scalability, fault tolerance, and system maintainability.
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
                                            <h2 className="text-2xl font-bold mb-4">ERP software</h2>
                                            <p className="text-gray-700">
                                                Enterprise Resource Planning (ERP) systems feature integration with multiple systems:
                                                HR, finance, supply chain, and internal systems from other departments. We use
                                                Node.js to develop fast, scalable, and modular ERP capable of processing and
                                                transferring data between systems with ease.
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
                                            <h2 className="text-2xl font-bold mb-4">Social media apps</h2>
                                            <p className="text-gray-700">
                                                Social media platforms require real-time interactions, notifications, and content
                                                updates. Node.js supports high concurrency, instant data processing, and seamless API
                                                integrations, ensuring smooth social networking experiences.
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
                                            <h2 className="text-2xl font-bold mb-4">Real-time chats</h2>
                                            <p className="text-gray-700">
                                                Messaging apps or messengers rely on encrypted real-time communication using
                                                multimedia sharing options, group chats and channels, push notifications, synchronization
                                                of chat history across multiple devices, voice & video calls, and much more. Node.js with
                                                WebSockets and event-driven architecture ensures fast, scalable, and low-latency chat
                                                experiences.
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
                                            <h2 className="text-2xl font-bold mb-4">Streaming apps</h2>
                                            <p className="text-gray-700">
                                                Video, audio, and content streaming applications require low-latency data
                                                transmission. We use Node.js, with its event-driven architecture and ability to
                                                efficiently handle streaming workloads, to build excellent streaming apps for different
                                                purposes.
                                            </p>
                                        </div>

                                        {/* And More */}
                                        <div className="flex flex-col items-start">
                                            <div className="text-blue-500 mb-4">
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                                    <circle cx="44" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                                    <circle cx="20" cy="44" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                                    <circle cx="44" cy="44" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                                    <path d="M44 44l-4-4M32 32l-4-4" stroke="currentColor" strokeWidth="2" />
                                                </svg>
                                            </div>
                                            <h2 className="text-2xl font-bold mb-4">And more...</h2>
                                            <p className="text-gray-700">
                                                From e-commerce platforms to AI-driven applications, Node.js powers diverse
                                                solutions with high performance, scalability, and flexibility. Our Node.js development
                                                services allow us to build solutions for multiple industries and business goals.
                                            </p>
                                        </div>

                                    </div>



                                </section>

                                <section id="Nodejs_solutions-in-Industry">

                                    <div className="max-w-7xl mx-auto px-4 py-8">
                                        {/* Header Section */}
                                        <div className="mb-12 text-center">
                                            <h1 className="text-5xl font-bold mb-6">
                                                Node.js solutions for multiple <span className="text-blue-500">industries</span>
                                            </h1>
                                            <p className="text-lg max-w-4xl mx-auto text-gray-700 mt-8">
                                                Real-time healthcare systems, advanced logistics platforms, scalable, interactive EdTech solutions, smart factory
                                                solutions, and more – Node.js can handle different challenges that different industries face.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-6 mb-12 mt-12">
                                                {/* Healthcare */}
                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Healthcare</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        Enhanced patient care, streamlined hospital workflows,
                                                        improved data security, and HIPAA compliance are the power
                                                        Node.js brings. Using modern technologies, we build
                                                        multipurpose healthcare solutions.
                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">telemedicine platforms;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">EHR & EMR systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">healthcare IoT solutions;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">appointment scheduling & patient portals.</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* Education */}
                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Education</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        We transform learning experiences by building scalable,
                                                        interactive EdTech solutions powered by Node.js backend.
                                                        Our solutions include:
                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">e-learning platforms;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">virtual classrooms & video conferencing tools;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">AI-driven learning systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">student management & grading systems.</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Logistics</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        We use our knowledge and expertise to optimize supply chains, simplify fleet management, and enable real-time tracking by building next-generation Node. js-powered logistics platforms. We develop:


                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">freight management & tracking systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">warehouse & inventory management software;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">route optimization & delivery scheduling</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">automated supply chain solutions. </span>
                                                        </li>
                                                    </ul>
                                                </div>


                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Manufacturing</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        We enhance industrial processes with smart factory solutions powered by Node.js. We build:
                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">IoT-based predictive maintenance systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">manufacturing execution systems (MES);</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">real-time production monitoring tools;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">supply chain and vendor management software.</span>
                                                        </li>
                                                    </ul>
                                                </div>


                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Management</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        Our Node.js-powered platforms streamline business processes. When providing Node.js development services, we can build various solutions for the management of workflows, resources, assets, operations, projects, employees, and more.
                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">telemedicine platforms;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">EHR & EMR systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">healthcare IoT solutions;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">appointment scheduling & patient portals.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Real estate</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        We improve property management, client interactions, and sales with Node.js-powered real estate solutions. Our real estate solutions range includes:
                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">real estate marketplace platforms;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">property management & leasing software;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">virtual tour & AR-based property viewing apps;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">automated lead generation & CRM integration</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Finance </h2>
                                                    <p className="text-gray-700 mb-4">
                                                        Contact us to develop fast, secure, and scalable fintech applications with Node.js backend architecture. Our solutions include:          </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">online banking & digital wallets;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">fraud detection & risk assessment tools;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">automated investment platforms;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">blockchain-based financial transactions.</span>
                                                        </li>
                                                    </ul>
                                                </div>



                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Food & beverages</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        Node.js enables the development of fast, scalable solutions for the food and beverage industry.           </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">online food ordering & delivery apps;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">restaurant POS & inventory management systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">supply chain & vendor management software;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">AI-powered customer engagement tools.</span>
                                                        </li>
                                                    </ul>
                                                </div>



                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Travel</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        We design high-performance Node.js backend architecture to deliver seamless booking experiences and real-time travel management through exceptional applications. We develop:          </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">online booking & ticketing systems;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">travel itinerary planning tools;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">navigation & transportation management;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">Loyalty programs & personalized travel recommendations.</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-50 p-8 rounded-lg">
                                                    <h2 className="text-3xl font-bold mb-4">Advertising</h2>
                                                    <p className="text-gray-700 mb-4">
                                                        Digital marketing can benefit from Node.js thanks to its quick data processing capabilities. We use Node.js to develop:

                                                    </p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">automated ad management platforms;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">AI-driven customer analytics & targeting;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">personalized content delivery solutions;</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">campaign performance tracking tools.</span>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                                        <div className="md:w-2/3">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                                                Boost Your Application

                                            </h2>
                                            <p className="text-xl text-left">
                                                Need a scalable solution for your growing business? Learn more about our Node.js development services.                  </p>
                                        </div>
                                        <div className="md:w-1/3 flex justify-end">
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                                                Get in touch
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                <section id="Co-operation-models">


                                    {/* Main Content */}
                                    <div className="flex-grow mt-16 mb-16">
                                        <h1 className="text-5xl font-bold mb-16">
                                            Cooperation <span className="text-blue-500">models</span>
                                        </h1>

                                        <div className="flex mt-16">
                                            {/* Left Content */}
                                            <div className="w-1/2 pr-12">
                                                <h2 className="text-3xl font-bold mb-6">{modelContent[activeModel].title}</h2>
                                                <p className="text-lg">
                                                    {modelContent[activeModel].description}
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




                                <section id="why-Nodejs">
                                    <div className="flex-1 bg-gray-900 text-white p-8 mt-8">
                                        <div className="max-w-6xl mx-auto">
                                            <h1 className="text-4xl md:text-5xl font-bold mb-8">
                                                <span className="text-blue-400">Why</span> choose node.js for your next project?
                                            </h1>

                                            <p className="text-xl mb-16 text-center max-w-4xl mx-auto">
                                                Node.js offers a high-performance, scalable, and efficient backend. Its non-blocking architecture, flexibility, and
                                                strong community support make it a top choice for startups and enterprises alike. Node.js technology offers multiple advantages.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {benefitSections.map((benefit, index) => (
                                                    <div key={index} className="mb-10">
                                                        <h2 className="text-2xl font-bold mb-4">{benefit.title}</h2>
                                                        <p className="text-gray-300">{benefit.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="recent-work">
                                    <div className="flex-1 bg-white text-gray-900">
                                        <div className="max-w-6xl mx-auto px-6 py-12">
                                            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                                                Recent <span className="text-blue-500">software</span> we developed
                                            </h1>

                                            <div className="space-y-12">
                                                {/* First Project */}
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
                                                            <h2 className="text-3xl font-bold mb-4">Cost management platform development</h2>
                                                            <p className="text-lg mb-6">A cost management system for equipment in the construction industry</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Second Project */}
                                                <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
                                                    <div className="flex flex-col md:flex-row">
                                                        <div className="md:w-1/3 p-8 flex flex-col justify-center">

                                                            <h2 className="text-3xl font-bold mb-4">Graphical user interface for robot operation</h2>
                                                            <p className="text-lg">SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot Alfred</p>
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

                                <section id="Tech-Stack" className="bg-white py-12 px-4 md:px-6">
                                    <div className="max-w-6xl mx-auto">
                                        <RevealOnScroll>
                                            <h2 className="text-3xl md:text-4xl font-light text-black">
                                                <span className="text-blue-500 font-semibold"> Tech stack </span>  we use for Node.js development services

                                            </h2>
                                            <p>
                                                Node.js is primarily used for backend development, handling server-side logic, communication with the database, and API requests. The full power of Node.js is revealed when it’s used with other modern technologies and frameworks.                        </p>

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

                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>


                                        </RevealOnScroll>
                                    </div>
                                </section>

                                <section id="advanced tech">
                                    <div className="flex mt-16 mb-16">
                                        {/* Main content */}
                                        <div className="flex-1 p-8">
                                            <header className="mb-12">
                                                <h1 className="text-4xl font-bold text-center mb-2">
                                                    <span className="text-black">Node.js development services with </span>
                                                    <span className="text-blue-500">advanced tech</span>
                                                </h1>
                                            </header>

                                            <div className="flex max-w-6xl mx-auto mt-32">
                                                {/* Sidebar navigation for services */}
                                                <div className="w-1/3">
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

                                                {/* Content for selected service */}
                                                <div className="w-2/3 px-8">
                                                    {renderContent()}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </section>

                                <section id="pricing">
                                    <div className="flex flex-col mt-16 mb-16">
                                        {/* Main content */}
                                        <div className="flex flex-1">
                                            {/* Content area */}
                                            <div className="flex-1 p-8">
                                                <header className="mb-12 text-center">
                                                    <h1 className="text-4xl font-bold mb-2">
                                                        <span className="text-black">Flexible </span>
                                                        <span className="text-blue-500">engagement models</span>
                                                        <span className="text-black"> for Node.js development services</span>
                                                    </h1>
                                                </header>

                                                {/* Pricing Tabs */}
                                                <div className="flex justify-center mb-12">
                                                    <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
                                                        <button
                                                            className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'time-material' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                                                            onClick={() => handleTabClick('time-material')}
                                                        >
                                                            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 mb-2">
                                                                <Clock size={24} className="text-blue-500" />
                                                            </div>
                                                            <span className="text-lg">Time & Material</span>
                                                        </button>

                                                        <button
                                                            className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'fixed-price' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                                                            onClick={() => handleTabClick('fixed-price')}
                                                        >
                                                            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 mb-2">
                                                                <DollarSign size={24} className="text-gray-500" />
                                                            </div>
                                                            <span className="text-lg">Fixed price</span>
                                                        </button>

                                                        <button
                                                            className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'fixed-budget' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                                                            onClick={() => handleTabClick('fixed-budget')}
                                                        >
                                                            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 mb-2">
                                                                <PieChart size={24} className="text-gray-500" />
                                                            </div>
                                                            <span className="text-lg">Fixed budget</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Content for selected tab */}
                                                <div className="max-w-4xl mx-auto">
                                                    {activeTab === 'time-material' && (
                                                        <div>
                                                            <h2 className="text-3xl font-bold mb-6">Time & Material</h2>
                                                            <p className="text-lg text-gray-700 mb-8">
                                                                The Time & Material model is the second most popular and flexible engagement
                                                                model after Fixed budget, where billing is based on actual development efforts
                                                                (person-hours worked). This model is ideal for projects with an unclear scope and
                                                                evolving requirements, allowing the software solution to take shape throughout
                                                                development.
                                                            </p>
                                                        </div>
                                                    )}

                                                    {activeTab === 'fixed-price' && (
                                                        <div>
                                                            <h2 className="text-3xl font-bold mb-6">Fixed price</h2>
                                                            <p className="text-lg text-gray-700 mb-8">
                                                                The Fixed Price model operates on a predefined sum specified in the contract, paid in parts as agreed. This model offers high predictability as the developers commit to delivering a specific scope within a specific budget. However, it is also the least flexible, as the scope cannot be altered once development begins.
                                                            </p>
                                                        </div>
                                                    )}

                                                    {activeTab === 'fixed-budget' && (
                                                        <div>
                                                            <h2 className="text-3xl font-bold mb-6">Fixed budget</h2>
                                                            <p className="text-lg text-gray-700 mb-8">
                                                                Fixed budget is the most popular engagement model that is built upon the time & material model, with the only difference being our commitment to delivering a complete and logically structured apps within a specific budget
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Call to action */}
                                                <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 flex justify-between items-center">
                                                    <div>
                                                        <h3 className="text-xl font-semibold">Let's develop your next Node.js software together!</h3>
                                                    </div>
                                                    <button className="bg-white text-red-500 border border-red-500 px-6 py-3 rounded-md hover:bg-red-50 transition">
                                                        Start Project
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                                        <div className="md:w-2/3">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                                                Explore Node.js Solutions

                                            </h2>
                                            <p className="text-xl text-left">
                                                Discover how our Node.js development services can streamline your operations. Schedule a free consultation!                  </p>
                                        </div>
                                        <div className="md:w-1/3 flex justify-end">
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                                                Get in touch
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section id="relible-company">
                                    <section className="bg-gray-50 py-16 px-4 md:px-6 mt-12">
                                        <RevealOnScroll>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                                        <span className="text-blue-600">Node.js  </span> development service provider
                                                    </h2>
                                                    <ul className="mt-6 space-y-4">
                                                        {[

                                                            "SumatoSoft is a trusted Node.js development company with over 13 years of experience delivering high-performance, scalable, and secure applications.",
                                                            "At SumatoSoft, when providing Node.js development services, we prioritize transparent communication, and usage of cutting-edge technologies and focus on delivering real business value rather than just software. ",
                                                            "Let’s build your next Node.js project together!"

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
                                </section>

                                <section id="Why-Fox-solution">
                                    <div className="flex mb-8">
                                        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
                                            {/* Main Content */}
                                            <div className="flex-1 p-6 lg:p-12">
                                                <header className="mb-12">
                                                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                                                        <span className="text-blue-500">Why</span> SumatoSoft is the right company to work on your Node.js project
                                                    </h1>

                                                    <p className="text-lg text-gray-700 mt-8">
                                                        Since 2012, we have helped companies to gain competitive benefits by applying the best IT innovations. Over the years,
                                                        we have gained rich experience in software development and summarized some mandatory requirements for
                                                        high-quality software development.
                                                    </p>
                                                </header>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                                                    {/* Feature 1 */}
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className="w-20 h-20 mb-4 text-blue-500">
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h2 className="text-2xl font-bold mb-4">Guarantee provided</h2>
                                                        <p className="text-gray-700">
                                                            We provide a long-term guarantee on software we develop.
                                                        </p>
                                                    </div>

                                                    {/* Feature 2 */}
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className="w-20 h-20 mb-4 text-blue-500">
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                                <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h2 className="text-2xl font-bold mb-4">Security is priority</h2>
                                                        <p className="text-gray-700">
                                                            SumatoSoft considers security as an integral part of any application development.
                                                        </p>
                                                    </div>

                                                    {/* Feature 3 */}
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className="w-20 h-20 mb-4 text-blue-500">
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                                <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h2 className="text-2xl font-bold mb-4">Focus on usability</h2>
                                                        <p className="text-gray-700">
                                                            We make applications that are easy and convenient to work with.
                                                        </p>
                                                    </div>

                                                    {/* Feature 4 */}
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className="w-20 h-20 mb-4 text-blue-500">
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h2 className="text-2xl font-bold mb-4">Scalability</h2>
                                                        <p className="text-gray-700">
                                                            We make our software scalable for future changes – new features, users, workload.
                                                        </p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <section id="statistics">

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

                                <section id="Certification" className="mt-32 mb-32">

                                    <CertificationsSection />

                                </section>
                                <section id="contactsection">
                                    <Contact />
                                </section>
                                <section id="faq" className="px-4 mb-16 mt-16">
                                    <FAQ faqs={mvpFaqs} />
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

export default NodeJsDevelopment;