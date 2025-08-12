import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import AnimatedButton from "../components/ui/AnimatedButton";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { CertificationsSection } from "@/components/ui/Certification";
import TestimonialCarousel from '../components/ui/Testimonial';
import FAQ from '../components/ui/faq';
import BlogHomepage from '../components/ui/bloghome';
import Contact from "@/components/home/Contact";
import CostEstimator from "@/components/ui/CostEstimator";
import { FaCheck } from "react-icons/fa";
import { CheckCircle, FileText } from "lucide-react";
import { styleText } from "util";
const AllServices = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Hero section component
    const HeroSection = () => {
        return (
            <>
                {/* Hero Section */}
                <section
                    id="hero"
                    className="min-h-full w-full flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 text-white relative py-16"
                >
                    <div className="container mx-auto px-4 md:px-8">
                        {/* Breadcrumb Navigation */}
                        <div className="mb-8">
                            <div className="flex items-center text-sm">
                                <a href="/" className="text-white hover:text-blue-300">Home</a>
                                <span className="mx-2">›</span>
                                <span className="text-gray-500">Software Development Services</span>
                            </div>
                        </div>

                        {/* Hero Content */}
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-blue-400">Software development</span> services
                        </h1>

                        <p className="text-lg mb-12 max-w-4xl">
                            At Foxsolution, we provide end-to-end software development backed by industry-specific expertise,
                            advisory support, and system maintenance, including maintenance of complex legacy solutions.
                            Our software engineering services encompass both the classic outsourcing model and staff augmentation.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded transition duration-300">
                                Get in Touch
                            </button>

                            <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-medium px-8 py-3 rounded transition duration-300">
                                Book Free Consultation
                            </button>

                            <div className="ml-0 md:ml-4 mt-6 md:mt-0 flex items-center">
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

                    {/* Optional: Add background elements or patterns */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 opacity-30 pointer-events-none"></div>
                </section>
            </>
        );
    };

    // Logos Section Component
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
            {
                name: 'Nika Group',
                svg: (
                    <img src="https://sumatosoft.com/wp-content/uploads/2025/01/TL-Nika.svg" alt="NikeGroup logo"
                        className="w-24 h-20 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

                )
            },
        ]
        return (
            <section className='mb-0 -mt-24 '>
                <div className=' bg-white py-24 px-24 -mt-2'>
                    <div className='mx-auto max-w-7xl px-4 mt-0'>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center'>

                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-2 transition-all duration-300 hover:bg-white rounded-lg"
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
        );
    };

    // Services Section Component
    const ServicesSection = () => {
        // Define services data
        const services = [
            {
                id: 1,
                title: "Custom software development",
                description: "We develop and deliver custom solutions of varying complexity for both startup and enterprise clients. Our custom approach means we delve deeply into the Client's needs and business goals, shaping the concept or vision of the software solution and bringing it to life. We cover every stage of software development solutions, from ideation to deployment, with extensive expertise in business analysis, coding, system integration, cloud-based solutions, integrating advanced technologies, and more.",
                icon: "https://cdn-icons-png.flaticon.com/128/14687/14687159.png",
                link: "Custom software development ›"
            },
            {
                id: 2,
                title: "IoT development",
                description: "We develop IoT systems of any scale, from fields of a few devices to hundreds. IoT development is our specialization, so we have enough expertise to provide consulting services along with development services. Our services include calculating ROI, identifying IoT implementation opportunities for specific businesses, visualizing data through informative dashboards, designing effective device management systems, securing vulnerable components, optimizing data transfer and network usage, and much more. We offer over 10 years of experience in delivering successful IoT projects.",
                icon: "https://cdn-icons-png.flaticon.com/128/10731/10731229.png",
                link: "IoT development services ›"
            },
            {
                id: 3,
                title: "Web development",
                description: "We develop scalable, high-performance, and secure web applications. While different web solutions may seem similar at first glance, we approach each one uniquely, leveraging our expertise to ensure the application meets user expectations, drives business growth, delivers value, and remains competitive over time.",
                icon: "https://cdn-icons-png.flaticon.com/128/9750/9750216.png",
                link: "Web development services ›"
            },
            {
                id: 4,
                title: "Mobile app development",
                description: "Our team of skilled mobile developers and creative designers build excellent iOS, Android, and cross-platform applications, crafting simple and intuitive interfaces and shaping excellent user experiences. We know how to engage and retain users, and happy users mean a business will thrive.",
                icon: "https://cdn-icons-png.flaticon.com/128/5738/5738077.png",
                link: "Mobile app development ›"
            }
        ];

        return (
            <RevealOnScroll>
                <section className="bg-gray-50 py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our <span className="text-blue-500">services</span>
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                For over a decade, we have been accumulating knowledge and expertise in several services that became our specialization.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    iconSrc={service.icon

                                    }
                                    linkText={service.link}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        );
    };

    // Service Card Component with hover effect
    const ServiceCard = ({ title, description, iconSrc, linkText }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <button
                className={`text-left p-6 rounded-lg transition-all duration-300 ${isHovered ? 'bg-pink-100' : 'bg-white'
                    } hover:bg-pink-100 shadow-sm flex flex-col items-start border border-gray-100`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-blue-50">
                    <img
                        src={iconSrc}
                        alt={`${title} icon`}
                        className="w-10 h-10 transition-all duration-300 filter invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)"
                    />
                </div>

                <h3 className="text-xl font-bold mb-3">{title}</h3>

                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>

                <span className="text-blue-500 font-medium text-sm mt-auto flex items-center">
                    {linkText}
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
        );
    };

    // Contact Expert Section
    const ContactExpertSection = () => {
        return (
            <RevealOnScroll>
                <div className="w-full bg-gradient-to-r from-[#0a1733] via-[#11274d] to-[#321e44] text-white p-8">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-3">Contact an Expert</h2>
                            <p className="text-lg text-gray-200">Talk to us about your specific web development needs.</p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <button className="bg-[#ff4361] hover:bg-[#ff2d4e] transition-colors duration-300 text-white font-medium py-3 px-10 rounded">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        );
    };

    // Development Section Component
    const DevelopmentSection = () => {
        const [activeTab, setActiveTab] = useState('enterprise');

        // Tab content data
        const tabData = {
            enterprise: {
                title: "Enterprise software development",
                content: "We develop custom enterprise software solutions distinguished by three key attributes: a strong focus on business goals, adherence to best coding practices, and the ability to manage complex workflows, large data volumes, and extensive parallel processing. Our expertise spans the development of complex solutions for industries such as manufacturing, procurement, sales, finance, HR management, and more.",
                link: "Enterprise development"
            },
            mvp: {
                title: "MVP development",
                content: "Over a decade, we helped multiple startups with our software application development services, offering fast, flexible, and reliable solutions. Our services include MVP creation, startup rescue missions, prototyping, and software product development services. With a partnership approach, we provide expert guidance in growing ideas, delivering high-quality code, maintaining transparent cooperation, and ensuring rapid development.",
                link: "MVP development"
            },
            saas: {
                title: "SaaS development",
                content: "We offer end-to-end SaaS development services, covering conceptualization, strategy, UI design, prototyping, development, and QA, focusing on creating scalable, efficient solutions with a committed and transparent approach.",
                link: "SaaS development"
            },
            product: {
                title: "Product development",
                content: "We provide comprehensive software product development services, guiding you through every stage – from ideation and design to development and launch. Leveraging our industry expertise and experience in building custom systems, we deliver scalable, high-performing, and secure solutions.",
                link: "Product development"
            }
        };

        // Handle tab click
        const handleTabClick = (tabId) => {
            setActiveTab(tabId);
        };

        return (
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            From MVPs to enterprise solutions: tailored development <span className="text-blue-500">services</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We excel in developing software solutions for various business types and stages, combining product expertise with a commitment to scalability, reliability, and success.
                        </p>
                    </div>

                    {/* Tabs Container */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Tabs Navigation */}
                        <div className="w-full md:w-1/3">
                            <div className="flex flex-col">
                                {Object.entries(tabData).map(([id, tab]) => (
                                    <button
                                        key={id}
                                        className={`py-4 px-6 text-left transition-colors duration-300 ${activeTab === id
                                            ? 'bg-blue-500 text-white font-medium'
                                            : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
                                            }`}
                                        onClick={() => handleTabClick(id)}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="w-full md:w-2/3">
                            <div className="bg-white p-6">
                                <h3 className="text-2xl font-bold mb-4">
                                    {tabData[activeTab].title}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {tabData[activeTab].content}
                                </p>
                                <div className="inline-block">
                                    <a
                                        href="#"
                                        className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2 inline-block transition-colors duration-300"
                                    >
                                        {tabData[activeTab].link}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // AdvancedTech Section Component
    const AdvancedTechSection = () => {
        const [activeTab, setActiveTab] = useState('ai');

        // Tab content data
        const tabsData = [
            {
                id: 'ai',
                title: 'AI development',
                icon: '../artificial-intelligence.png',
                content: 'From predictive analytics to AI-powered healthcare diagnostics, our Artificial Intelligence services span every industry. Our expertise lies in custom AI model development, predictive analytics, machine learning implementation, natural language processing, computer vision, and AI tools for predictive maintenance.',
                link: 'AI development ›'
            },
            {
                id: 'blockchain',
                title: 'Blockchain development',
                icon: '../blockchain.png',
                content: 'Unlock the potential of blockchain technology with our secure software solutions, offering smart contract development, custom blockchain applications, system integration, decentralized app (dApp) creation, tokenization, and both private and public blockchain networks.',
                link: 'Blockchain development ›'
            },
            {
                id: 'chatgpt',
                title: 'ChatGPT development',
                icon: '../chatgpt.png',
                content: 'By incorporating ChatGPT, applications can provide 24/7 availability, efficient customer support, and data-driven insights. We provide consultation, customization, and integration of ChatGPT capabilities into web and mobile applications, enabling dynamic conversations, cost savings, enhanced user retention, and increased user engagement.',
                link: 'ChatGPT development ›'
            },
            {
                id: 'data',
                title: 'Data analytics services',
                icon: '../database.png',
                content: 'We provide end-to-end data analytics services, beginning with establishing robust data governance. Our team aggregates, cleans, and normalizes data, then builds simple yet insightful dashboards and advanced visualizations using leading market tools like Tableau and Power BI. We also recommend implementing AI-powered agents to interpret data and provide actionable recommendations.',
                link: 'Data analytics services ›'
            },
            {
                id: 'bigdata',
                title: 'Big Data',
                icon: '../big-data.png',
                content: 'Our Big Data services empower businesses to make data-driven decisions, offering data engineering, analytics, management, and visualization. We offer our expertise, quality control, transparency in collaboration, and an Agile approach to organize volumes of unstructured data into organized pathways, turning chaotic data into a well-structured foundation for your business growth.',
                link: 'Big Data development ›'
            }
        ];

        return (
            <section className="py-16 px-4 sm:px-6 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header - Now properly centered */}
                    <div className="text-center mb-12 mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-blue-500">Advanced tech</span> services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                            We are savvy in advanced technologies and incorporate them into our software engineering services when they can bring value to our Clients.
                        </p>
                    </div>

                    {/* Icon Tabs - Improved centering and spacing */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mb-12">
                        {tabsData.map((tab) => (
                            <button
                                key={tab.id}
                                className={`flex flex-col items-center group transition-all duration-300 ${activeTab === tab.id ? 'cursor-default' : 'cursor-pointer'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div className={`w-16 h-16 mb-3 flex items-center justify-center rounded-lg ${activeTab === tab.id ? 'bg-blue-50' : 'bg-gray-50'}`}>
                                    <img
                                        src={tab.icon}
                                        alt={`${tab.title} icon`}
                                        className={`w-10 h-10 transition-all duration-300 ${activeTab === tab.id ?
                                            'filter brightness-0 saturate-100 invert-[39%] sepia-[90%] saturate-[1352%] hue-rotate-[188deg] brightness-[97%] contrast-[105%]' :
                                            'filter grayscale opacity-80'}`}
                                    />
                                </div>
                                <span className={`text-center font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-600'}`}>
                                    {tab.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Divider line - Centered with max-width */}
                    <div className="mx-auto max-w-4xl h-px bg-gray-200 mb-12"></div>

                    {/* Content Area - Centered with proper padding */}
                    <div className="mx-auto max-w-4xl">
                        {tabsData.map((tab) => (
                            <div
                                key={tab.id}
                                className={`transition-all duration-300 ${activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'}`}
                            >
                                <h3 className="text-2xl font-bold mb-6">{tab.title}</h3>
                                <p className="text-gray-600 mb-6">
                                    {tab.content}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300 font-medium"
                                >
                                    {tab.link}
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    const Logo = () => {
        const logos = [
            {
                name: 'logo 1',
                svg: (
                    <img
                        src="../logo1.svg"
                        alt=" Logo 1"
                        className="w-16 h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                    />
                )
            },
            {
                name: 'logo 2',
                svg: (
                    <img src="../logo2.svg" alt="logo 2"
                        className="w-16 h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

                )
            },
            {
                name: 'logo 3',
                svg: (
                    <img src="../logo3.svg" alt="logo 3"
                        className="w-16 h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

                )
            },
            {
                name: 'Logo 4',
                svg: (
                    <img src="../logo4.svg" alt="logo 4"
                        className="w-16 h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />


                )
            },
            {
                name: 'Logo 5',
                svg: (
                    <img src="../logo5.svg" alt="logo 5"
                        className="w-16 h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />

                )
            },
            {
                name: 'Logo 6',
                svg: (
                    <img src="../logo6.svg" alt="logo 6"
                        className="w-16 h-16 object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110" />


                )
            },
        ]
        return (
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 w-full max-w-6xl">
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-3 transition-all duration-300 hover:bg-gray-50 rounded-lg"
                                >
                                    <div className="relative group w-full flex justify-center">
                                        {logo.svg}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    //Industries Section Component
    const IndustriesSection = () => {
        // Industry data
        const industries = [
            {
                title: "Healthcare",
                description: "Patient management systems, telemedicine platforms, IoT-powered applications, AI-powered diagnostics, data analytics and visualization – these are several solution types we are experts at developing. All solutions are HIPPA compliant, GDPR+ HITECH, FDA, and other requirements compliant.",
                link: "Healthcare software development ›"
            },
            {
                title: "Media & Entertainment",
                description: "Streaming platforms, personalized recommendation engines, social media management tools, event systems, and more. We know how to engage users, personalize their experience and develop systems with minimal downtime periods, even during high-traffic times.",
                link: "Media software development ›"
            },
            {
                title: "Logistics",
                description: "We bring real-time tracking, route optimization, inventory management, process automation, and easy fleet management to any logistics business. We go every mile and then some to keep goods and business moving.",
                link: "Logistics software development ›"
            },
            {
                title: "Finances",
                description: "Wealth management software, compliance and reporting tools, payment processing solutions, insurance management systems, budgeting and financial planning tools – every software we develop for the finance industry features security, scalability, and compliance with industry regulations.",
                link: "FinTech software development ›"
            },
            {
                title: "Education",
                description: "We bring innovation and engagement to the whole education process with custom EdTech solutions. From student information portals to online course management systems – we develop user-friendly and easy-to-use e-learning portals.",
                link: "Education software development ›"
            },
            {
                title: "Real Estate",
                description: "Manage customers, monitor deal progress, and optimize offerings with custom real estate solutions. Our expertise includes property management software, virtual tour applications, real-time listing platforms, and more.",
                link: "Real Estate software development ›"
            },
            {
                title: "eCommerce",
                description: "We build stronger connections with customers through web and mobile applications with superior shopping experience and 24/7 availability.",
                link: "eCommerce development ›"
            },
            {
                title: "Marketing",
                description: "We build marketing automation tools that help optimize marketing strategies, gather insights, and achieve brave goals with customers.",
                link: "MarTech software development ›"
            }
        ];

        return (
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Development services across multiple <span className="text-blue-500">industries</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                            We've built expert knowledge in a range of industries.
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded"
                            >
                                <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {industry.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                                >
                                    {industry.link}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    //Development Process Section Component  
    const DevelopmentProcess = () => {
        const [expandedSection, setExpandedSection] = useState(null);

        const processSteps = [
            {
                id: 1,
                title: 'Project kickoff and requirements elicitation',
                description: 'The kickoff meeting takes just one day, while requirements elicitation may last up to 5-8 weeks depending on the project scale.',
                tasks: [
                    'conduct a kickoff meeting to introduce the team, discuss expectations, and align on business goals;',
                    'establish communication processes, tools, and reporting frequency;',
                    'prepare the project workspace in tools like Jira and Confluence;',
                    'brief the team on project goals, scope, and initial risk assessments;',
                    'collaborate with the Client on vision and user requirements through regular calls;',
                    'hold workshops to gather and refine requirements;',
                    'evaluate risks, assess business impact, and prepare a risk mitigation plan;',
                    'create a project roadmap and define major milestones.'
                ]
            },
            {
                id: 2,
                title: 'UI/UX services',
                description: 'The design team typically works in parallel with business analysts, and the phase takes 3-6 weeks alongside requirements elicitation.',
                tasks: [
                    'prepare prototypes, mood boards, and design concepts;',
                    'define a unique selling proposition for the product;',
                    'conduct competitor analysis and user behavior research;',
                    'develop wireframes, interactive prototypes, and detailed UI designs;',
                    'refine designs based on client feedback through iterative revisions;',
                    'document design specifications and prepare assets for development;',
                    'create a branded UI kit with reusable components such as icons, buttons, colors, and fonts.'
                ]
            },
            {
                id: 3,
                title: 'Development',
                description: 'The development process occurs in iterations, with each sprint lasting two weeks.',
                tasks: [
                    'write and review code for features defined in the sprint plan;',
                    'monitor development progress and address blockers promptly;',
                    'conduct daily stand-ups to align tasks and priorities;',
                    'the tech lead monitors the team and ensures code quality;',
                    'we implement robust version control to maintain a high standard of code quality;',
                    'the Client participates in progress reviews and provides feedback on completed features.'
                ]
            },
            {
                id: 4,
                title: 'Testing',
                description: 'Testing is conducted throughout the sprint, beginning mid-sprint and culminating in a demo meeting.',
                tasks: [
                    'QA specialists perform manual testing as the first step;',
                    'prepare test cases for automated testing using tools like Selenium and TestNG;',
                    'conduct usability, performance, security, and other types of testing;',
                    'use CI/CD pipelines to ensure seamless integration of new features;',
                    'document test results and collaborate with developers to resolve issues;',
                    'showcase new features in a demo meeting at the end of the sprint.'
                ]
            },
            {
                id: 5,
                title: 'Support & Maintenance',
                description: 'This phase is optional and ongoing – we continue to cooperate after the successful project launch.',
                tasks: [
                    'deliver a final report and request Client confirmation for project closure;',
                    'perform knowledge transfer and provide training to ensure smooth handover;',
                    'monitor system performance and proactively resolve technical issues;',
                    'implement technology updates to maintain compatibility and security;',
                    'develop and roll out new features based on evolving Client needs;',
                    'provide ongoing reports on maintenance activities and product performance.'
                ]
            }
        ];

        // Toggle section expansion
        const toggleSection = (id) => {
            setExpandedSection(expandedSection === id ? null : id);
        };

        return (
            <div className="max-w-4xl mx-auto p-6 bg-white">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        Foxsolution's development <span className="text-blue-500">process</span>
                    </h1>
                    <p className="text-gray-700">
                        The development process starts when we sign a contract with the Client. Our business software development
                        process is a carefully elaborated and polished set of activities that allows us to deliver high-quality software within
                        short timeframes.
                    </p>
                </div>

                <div className="space-y-8">
                    {processSteps.map((step) => (
                        <div key={step.id} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 font-semibold">
                                    {step.id}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                                <p className="text-gray-600 mb-4">{step.description}</p>

                                <div className="space-y-2">
                                    {step.tasks.map((task, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{task}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    const AgileFrameworks = () => {
        const [activeTab, setActiveTab] = useState('SCRUM');

        const tabData = {
            'SCRUM': {
                title: 'Scrum is a highly structured Agile methodology designed to deliver complex projects in manageable increments. By breaking development into fixed-length sprints, Scrum ensures regular delivery of functional product components, keeping progress visible and allowing for continuous feedback and improvement.',
                benefits: [
                    'complex projects with dynamic requirements; ',
                    'evolving projects that require incremental delivery to shape the product.'
                ],
                image: '../Scurm.png'
            },
            'KANBAN': {
                title: 'Kanban is an Agile methodology that utilizes a visual board to manage tasks and their statuses. The Kanban board complements Scrum by organizing work across different types of specialists. It also provides a clear, convenient way to track operational progress during iterative development.',
                benefits: [
                    'streamlining collaboration between various specialist roles;',
                    'managing maintenance activities.'
                ],
                image: '../kanban.png'
            }
        };

        function setIsMobileMenuOpen(arg0: boolean) {
            throw new Error("Function not implemented.");
        }

        function setIsServicesOpen(arg0: boolean) {
            throw new Error("Function not implemented.");
        }

        return (
            <div className="flex  w-lvw container mx-auto h-full mt-24 mb-24">
                {/* Left Section */}
                <div className="w-2/5 px-12  flex flex-col bg-gray-100">
                    <h1 className="text-4xl font-bold ml-16 mb-6 mt-28 leading-tight">
                        <span className='text-blue-500'>Agile</span><br />
                        frameworks<br />
                        we follow
                    </h1>

                </div>

                {/* Right Section */}
                <div className="w-3/5 px-12 py-16">
                    {/* Tabs */}
                    <div className="flex mb-10 border-b border-white">
                        {Object.keys(tabData).map((tab) => (
                            <div key={tab} className="relative mr-12">
                                <button
                                    className={`pb-3 font-medium text-xl transition-colors duration-200 ${activeTab === tab ? 'text-blue-500' : 'text-gray-400 hover:text-gray-500'}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-200"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="transition-opacity duration-200">
                        <p className="text-lg mb-8 max-w-xl leading-relaxed">
                            {tabData[activeTab].title}
                        </p>

                        <div className="space-y-4 mb-10">
                            <p className="font-bold text-lg">Best for:</p>
                            {tabData[activeTab].benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center">

                                    <div className="text-blue-500 mr-2 text-lg">✓</div>
                                    <div className="text-gray-800 ">{benefit}</div>

                                </div>

                            ))}

                        </div>

                        {/* Custom diagram that matches the reference image */}
                        {tabData[activeTab].diagram}

                        <div className="mt-6 relative">
                            <img
                                key={activeTab} // Adding key ensures the image refreshes when tab changes
                                src={tabData[activeTab].image}
                                alt={`${activeTab} workflow diagram`}
                                className="w-full transition-opacity duration-300"
                            />
                        </div>
                        <Link
                            to="/all-services"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                            }}

                            className=" py-2 px-4 text-vofox-blue font-medium hover:transition-all duration-200 inline-flex items-center gap-1 group"

                        >
                            Software development lifecycle
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }

    const GuaranteeSuccess = () => {
        const benefits = [
            {
                title: 'Accurate and realistic cost estimation',
                description: 'We prioritize accurate and realistic cost estimation through detailed analysis of your business goals, user needs, and project requirements, that allow us to provide precise budget and timeline assessments.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/9918/9918832.png" alt="Cost estimation" className="w-12 h-12" />
                )
            },
            {
                title: 'Competence-based selection of a project team',
                description: 'We assign only those specialists to each role who best fit the project needs in terms of their skills, interests, and expertise.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/14687/14687665.png" alt="Risk management" className="w-12 h-12" />
                )
            },
            {
                title: 'Comprehensive risk management',
                description: 'As an essential part of every project, we identify risks and develop a comprehensive mitigation plan. Our project manager continuously monitors risks to ensure they are addressed proactively and effectively.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/12708/12708155.png" alt="Resource planning" className="w-12 h-12" />
                )
            },
            {
                title: 'Agile delivery',
                description: 'We work in iterations, enabling us to deliver new software components quickly while maintaining the flexibility to adapt to changing requirements.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/3875/3875860.png" alt="Budget control" className="w-12 h-12" />
                )
            },
            {
                title: 'Budget control',
                description: 'Our project manager monitors the budget execution on every iteration, ensuring the development goes according to a plan and avoiding unexpected budget overruns.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/17551/17551447.png" alt="Regular reporting" className="w-12 h-12" />
                )
            },
            {
                title: 'Responsible approach to deadlines',
                description: 'With structured processes and effective change management, we consistently meet deadlines without compromising quality or project outcomes.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/1549/1549429.png" alt="Team selection" className="w-12 h-12" />
                )
            },
            {
                title: 'Regular reporting',
                description: 'Regular weekly calls, biweekly demos, time and project progress reports, identified and fixed bugs tables – we keep the Client informed at every stage.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/3534/3534046.png" color='blue' alt="Agile delivery" className="w-12 h-12" />
                )
            },


        ];

        return (
            <div className="container px-4 mx-auto py-10 bg-gray-50 rounded-lg">
                <div className="max-w-5xl mx-auto">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-normal mb-4 text-gray-800">
                                Quality control <span className="text-blue-500">practices</span>
                            </h2>
                            <p className="text-gray-800">We have established and implemented internal guidelines that set the standards for the quality of our work that guide us in all our software engineering services.</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                        {benefits.map((benefit, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg h-full">
                                    <div className="mb-4 p-3 bg-blue-50 rounded-full">
                                        <div className="text-blue-500">

                                            <img
                                                src={benefit.icon.props.src}
                                                alt={benefit.icon.props.alt}
                                                className="w-8 h-8"
                                                style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }}
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    function setIsContactPopupOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

    const TechStack = () => {
        const technologies = [
            {
                id: "java",
                name: "Java",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto">
                        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 .001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639" fill="#4E7896" />
                    </svg>
                ),
                description: "A powerful and reliable programming language for building secure, enterprise-level applications. Its platform independence and robust libraries enable the development of custom software capable of handling any task and aligning with specific business processes.",
                link: "Java development ›"
            },
            {
                id: "dotnet",
                name: ".NET",
                icon: (
                    <div className="bg-blue-900 w-12 h-12 flex items-center justify-center mx-auto">
                        <span className="text-white font-bold text-xs">.NET</span>
                    </div>
                ),
                description: ".NET is a versatile and powerful framework developed by Microsoft, designed for building a wide range of applications, including web, desktop, mobile, and cloud-based solutions. We leverage its comprehensive class libraries and support for multiple programming languages to create scalable, high-performance applications.",
                link: null
            },
            {
                id: "ruby",
                name: "Ruby (RoR)",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto">
                        <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h-.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.026zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" fill="#D30001" />
                    </svg>
                ),
                description: "Ruby on Rails (RoR) is a robust web application framework known for its simplicity and efficiency. A proven framework for rapid development of robust web applications with high scalability and maintainability.",
                link: "Ruby on Rails development ›"
            },
            {
                id: "nodejs",
                name: "Node.js",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#539E43" />
                    </svg>
                ),
                description: "Node.js is an open-source, high-performance tool for building fast, scalable applications. Its asynchronous, event-driven architecture enables handling multiple concurrent connections efficiently, making Node.js a go-to solution for applications with real-time features such as messaging, live streaming, and collaborative tools.",
                link: "Node.js development ›"
            },
            {
                id: "react",
                name: "React.js",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto">
                        <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046.299-1.021.7-2.031 1.169-3.046-.47-1.015-.87-2.025-1.169-3.046zm14.675.517l.472.12C23.982 10.475 26 11.984 26 13.725s-2.018 3.25-5.536 4.139l-.472.12-.134-.468a23.427 23.427 0 00-1.362-3.579l-.101-.213.101-.213a23.204 23.204 0 001.362-3.578l.134-.468zM20.683 13.726c2.674-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046-.299 1.02-.7 2.03-1.169 3.046.47 1.015.87 2.025 1.169 3.046zm-.491-10.897l-.134.468c-.299 1.018-.7 2.028-1.362 3.578l-.101.213.101.213a23.552 23.552 0 001.362 3.578l.134.468-.472.119c-3.517.889-5.535 2.398-5.535 4.139s2.018 3.25 5.535 4.139l.472.12.134-.469c.299-1.018.7-2.028 1.362-3.579l.101-.213-.101-.213c-.663-1.55-1.063-2.56-1.362-3.578l-.134-.468.472-.12c3.517-.888 5.535-2.398 5.535-4.139s-2.018-3.25-5.535-4.139l-.472-.119zm-1.544 14.708a23.22 23.22 0 00-1.168-3.046c.468-1.016.869-2.026 1.168-3.046 2.674.752 4.315 1.901 4.315 3.046 0 1.145-1.641 2.294-4.315 3.046zm-9.296 0c-2.674-.752-4.315-1.901-4.315-3.046 0-1.146 1.641-2.294 4.315-3.046.299 1.02.7 2.03 1.168 3.046-.468 1.015-.869 2.025-1.168 3.046zm1.088-9.127l.134-.467c.299-1.018.7-2.028 1.362-3.578l.101-.213-.101-.213a23.296 23.296 0 00-1.362-3.578l-.134-.468.472-.12c3.517-.888 5.535-2.398 5.535-4.139 0-1.741-2.018-3.25-5.535-4.139l-.472-.12-.134.469a23.442 23.442 0 00-1.362 3.578L10.862 4l.101.213a23.293 23.293 0 001.362 3.578l.134.468-.472.119C8.47 9.267 6.452 10.776 6.452 12.517c0 1.74 2.018 3.25 5.535 4.139l.472.12.134-.469a23.302 23.302 0 001.362-3.578l.101-.213-.101-.213c-.663-1.55-1.063-2.56-1.362-3.579l-.134-.468.472-.119c3.517-.889 5.535-2.398 5.535-4.139 0-1.741-2.018-3.25-5.535-4.14l-.472-.119-.134.468c-.299 1.018-.7 2.028-1.362 3.578l-.101.213.101.213a23.553 23.553 0 001.362 3.578l.134.468-.472.12c-3.517.888-5.535 2.398-5.535 4.139s2.018 3.25 5.535 4.139l.472.119zm1.595-11.39c.7 1.016 1.162 2.026 1.356 3.046-2.674-.752-4.315-1.901-4.315-3.046 0-1.146 1.641-2.294 4.315-3.046.194 1.02.656 2.03 1.356 3.046zm-1.356 15.48c-.7-1.015-1.162-2.025-1.356-3.046 2.674.752 4.315 1.901 4.315 3.046 0 1.145-1.641 2.294-4.315 3.046a14.344 14.344 0 01-1.356-3.046z" fill="#61DAFB" />
                    </svg>
                ),
                description: "A powerful JavaScript library for building dynamic and responsive user interfaces. React.js is particularly well-suited for developing single-page applications and complex dynamic front-end interfaces with multiple user interaction points.",
                link: "React.js development ›"
            }
        ];

        const [hoveredTech, setHoveredTech] = useState(null);

        return (
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-center text-4xl mb-6">
                    <span className="text-blue-500">Technologies</span>
                    <span className="text-gray-900"> we master</span>
                </h2>

                <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto">
                    We leverage a versatile and robust tech stack mastered by our highly skilled specialists, carefully selected through a
                    rigorous hiring process. Our team's expertise is continually enriched through a knowledge-sharing process, ensuring
                    the latest technologies, practices, and tools are effectively applied to new projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {technologies.map((tech) => (
                        <div
                            key={tech.id}
                            className="flex flex-col items-center"
                            onMouseEnter={() => setHoveredTech(tech.id)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            <div className="mb-4">
                                {tech.icon}
                            </div>

                            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${hoveredTech === tech.id ? 'text-blue-500' : 'text-gray-900'}`}>
                                {tech.name}
                            </h3>

                            <p className="text-gray-600 mb-4 text-center">
                                {tech.description}
                            </p>

                            {tech.link && (
                                <a
                                    href="#"
                                    className={`text-sm transition-colors duration-300 ${hoveredTech === tech.id ? 'text-blue-500' : 'text-red-500'}`}
                                >
                                    {tech.link}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    //----------------------------------------Flexible practices collaboration options for your project----------------------------------------------------------------
    const Collaboration = () => {
        return (
            <RevealOnScroll>
                <section id="d" className="py-20  text-gray-900">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
                            Flexible <span className="text-blue-500 font-medium">practices collaboration options</span> for your project
                        </h2>
                        <p className="text-lg text-center text-gray-700 mb-16">
                            Depending on your business state, project needs, and required software services, we offer 3 different cooperation modes that we’ve successfully implemented across 12+ industries over the past 13 years
                        </p>
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

                            {/* Feature 1 */}
                            <div>
                                <div className="mb-4">
                                    <img src="../bigdataanalyticsandiotdevelopment/IoT-as-the-Data-Source.svg" alt="" className="mx-auto h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Software development outsourcing</h3>
                                <p className="text-sm text-gray-600">
                                    A classic approach to software development where we assemble a highly skilled team of designers, developers, and QA specialists to manage the entire project lifecycle. We take 100% responsibility for execution and management while you act as a stakeholder, providing input, setting goals, and reviewing progress to ensure alignment with your vision.</p>
                            </div>

                            {/* Feature 2 */}
                            <div>
                                <div className="mb-4">
                                    <img src="../bigdataanalyticsandiotdevelopment/Big-Data-as-the-Analytical-Engine.svg" alt="" className="mx-auto h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Staff augmentation</h3>
                                <p className="text-sm text-gray-600">
                                    We source the best-fit candidates to complement your team with the skills you need. You gain access to top-tier software developers, Scrum Masters, designers, QA specialists, software architects, and more. Our experts integrate into your in-house team, becoming full-fledged members from day one.</p>
                            </div>

                            {/* Feature 3 */}
                            <div>
                                <div className="mb-4">
                                    <img src="../bigdataanalyticsandiotdevelopment/Cloud-Computing-as-the-Storage-Hub.svg" alt="" className="mx-auto h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Dedicated team</h3>
                                <p className="text-sm text-gray-600">
                                    A fully dedicated team tailored to your specific requirements and is focused exclusively on the tasks you need to complete. They take full responsibility for execution while you retain control over management and team oversight. </p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* Stats Section */}
                <div className="bg-[#f7faff] px-6 py-12 rounded-lg flex flex-col md:flex-row items-center justify-center gap-8 text-left max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold text-black min-w-max">Stats:</h2>
                    <p className="text-lg italic text-gray-800 max-w-3xl">

                        “The latest IoT Analytics “State of IoT—Spring 2023” report shows that the number of global IoT connections grew by 18% in 2022 to 14.3 billion active IoT endpoints. In 2023, IoT Analytics expects the global number of connected IoT devices to grow another 16%, to 16.7 billion active endpoints.” *IoT Analytics
                    </p>
                </div>
            </RevealOnScroll>
        );
    };
    //-----------------------------------------------------Why Clients choose Foxsolution-------------------------------------------------
    const WhyClientsCooperateWithUs = () => {
        return (
            <section id="why-iomt" className="relative py-20 bg-[#f8f9fb] text-black">
                <div className="container mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-normal">
                            <span className="text-blue-500">Why</span> Clients choose SumatoSoft
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* Text Content */}
                        <div className="space-y-8 text-lg text-gray-700">
                            {/* Point 1 */}
                            <div className="flex items-start">
                                <span className="text-blue-500 mr-3 mt-1">✓</span>
                                <div>
                                    <p>We strive for quality and security, and ISO 27001 and ISO 9001 certificates can prove it.</p>
                                </div>
                            </div>

                            {/* Point 2 */}
                            <div className="flex items-start">
                                <span className="text-blue-500 mr-3 mt-1">✓</span>
                                <div>
                                    <p>We focus on long-term cooperation. 70% of our Clients come back to us with another project. </p>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div className="flex items-start">
                                <span className="text-blue-500 mr-3 mt-1">✓</span>
                                <div>
                                    <p>We have over 250 successful projects in various industries, such as eCommerce software, Elearning development, Finance, Real Estate, Logistics software, Travel, and more.</p>
                                </div>
                            </div>

                            {/* Point 4 */}
                            <div className="flex items-start">
                                <span className="text-blue-500 mr-3 mt-1">✓</span>
                                <div>
                                    <p>We offer fair prices for both parties: you get our 13 years of expertise, and we get enough resources to grow as professionals.</p>
                                </div>
                            </div>

                            {/* Point 5 */}
                            <div className="flex items-start">
                                <span className="text-blue-500 mr-3 mt-1">✓</span>
                                <div>
                                    <p>We don’t just follow instructions; we actively provide suggestions and advice, even challenging the Client’s thinking when necessary, which Clients find extremely valuable</p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center ">
                            <img
                                src="../cooperatewithusinIoMT.webp"
                                alt="Clients cooperating"
                                className="w-3/4 md:w-2/3 object-contain rounded-lg shadow-md"
                            />
                        </div>

                    </div>
                </div>
            </section>
        );
    }

    //----------------------------------------FAQ Section------------------------------------------------------------------

    const FAQSection = () => {
        const IotBigDataAnalyticsFaqs = [

            {
                question: "How to choose a software development services company?",
                answer: (

                    <p>
                        Use rating platforms like Clutch or Techreviewer to find suitable vendors. Focus on their expertise, strong portfolio, client reviews, and industry experience. Compile a list of 5-10 companies that fit your needs, shortlist them to 5, and request quotes from each.
                    </p>

                )
            },
            {
                question: "What are the biggest benefits of outsourcing a software development services firm?",
                answer: (

                    <p>TOutsourcing offers access to expert talent, cost efficiency, faster development, and the ability to focus on core business activities while professionals handle the technical aspects.</p>

                )
            },
            {
                question: "How to reduce software development services costs?",
                answer: (

                    <p>Define clear requirements, ask for development using low-code/no-code platforms, ask for testing automation, opt for design templates rather than investing in a custom one, define the scope and prioritize features, identify the core features of your solution and opt for MVP development.</p>

                )
            },
            {
                question: "How much would my development project cost? Can I get a tailored estimate?",
                answer: (

                    <p>Project costs depend on scope, complexity, and timeline. Yes, we provide tailored estimates based on a detailed analysis of your requirements and goals.</p>

                )
            },
            {
                question: "Can I trust my information’s confidentiality with your team?",
                answer: (

                    <p>Yes, we prioritize confidentiality and sign NDAs to protect your sensitive information and project ideas.</p>

                )
            },
            {
                question: "Who owns the code?",
                answer: (

                    <p>You own the code. Once the project is complete and payments are settled, we will transfer full ownership rights to you.</p>

                )
            },
            {
                question: "How long does it take for SumatoSoft to process my initial request and start cooperation?",
                answer: (

                    <p>Typically, we process requests within one business day and begin cooperation after defining the scope, signing a contract, and agreeing on the timeline.</p>

                )
            },
            {
                question: "What is the ISO Certification? And is SumatoSoft ISO certified?",
                answer: (

                    <p>ISO certification ensures quality management standards. Yes, SumatoSoft is an ISO 27001 and ISO 9001-certified company, demonstrating our commitment to quality, efficiency, and Client satisfaction.</p>

                )
            }
        ];

        return (
            <section id="j" className="px-4 mb-16">
                <FAQ faqs={IotBigDataAnalyticsFaqs} />
            </section>
        )
    };



    return (
        <>
            <HeroSection />

            <Navbar />
            <Logos />
            <ServicesSection />
            <ContactExpertSection />
            <DevelopmentSection />
            <AdvancedTechSection />
            <Logo />
            <RevealOnScroll>
                <div className="flex justify-center mt-16 items-center  bg-gray-100 p-4">
                    <div className="w-full max-w-6xl bg-gradient-to-r from-blue-900 to-blue-950 p-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold text-white">
                                            Transform your business with custom  <span className="text-blue-400">software?</span></h2>
                                        <p className="text-white/90 text-3xl">Start Now!</p>
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-0">
                                    <button onClick={() => setIsContactPopupOpen(true)}
                                        className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded">
                                        <FileText size={20} />
                                        <span>Get in touch</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            <IndustriesSection />
            <DevelopmentProcess />
            <RevealOnScroll>
                <div className="bg-gray-50 mt-12 mb-12 p-12 flex justify-between max-w-5xl mx-auto rounded-lg shadow-sm">
                    <div className="font-sans">
                        <h2 className="text-3xl font-light text-gray-800 max-w-md leading-tight tracking-tight">
                            Check this out if you want
                            <br />
                            to understand us better
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                        <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                            Our slide deck <span className="bg-red-500 text-white text-xs py-1 px-2 rounded ml-2 font-bold">PDF</span>
                        </a>
                        <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                            About us <span className="ml-1 text-lg">›</span>
                        </a>
                        <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                            Testimonials <span className="ml-1 text-lg">›</span>
                        </a>
                        <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                            Case Studies <span className="ml-1 text-lg">›</span>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

            <TechStack />
            <GuaranteeSuccess />

            <RevealOnScroll>
                <div className="flex-1 bg-white text-gray-900">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <h1 className="text-4xl md:text-5xl font-normal mb-16 text-center">
                            Our recent<span className="text-blue-500">works</span>
                        </h1>
                        <div className="space-y-12">
                            <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden ">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2 lg:max-w-full">
                                        <img
                                            src="./Blockchain_Development_Images/Frame-tartle-dashboard-screenshotr.webp"
                                            alt="Cost management platform"
                                            className="w-full h-full object-cover hover:scale-x-110 hover:scale-y-110 transition-all duration-300"
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
                                                className="w-full h-full object-cover hover:scale-x-110 hover:scale-y-110 transition-all duration-300"
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
                                                className="w-full h-full object-cover hover:scale-x-110 hover:scale-y-110 transition-all duration-300"
                                            />
                                        </div>
                                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                            <h2 className="text-3xl font-bold mb-4">Dexai Robotics: graphical user interface for robot operation</h2>
                                            <p className="text-lg mb-6">Meet Alfred, an automated robotic arm and your personal sous chef! Alfred was born at Dexai Robotics, while Foxsolution developed a graphic user interface (GUI) that helps to communicate with the robot!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            <TestimonialCarousel />
            <RevealOnScroll>
                <div className="flex justify-center mt-16 items-center p-4">
                    <div className="w-full max-w-6xl bg-gradient-to-r from-blue-900 to-blue-950 p-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold text-white">Need custom  <span className="text-blue-400">software?</span></h2>
                                        <p className="text-white/90">Just drop us a line and get a free consultation from top experts in custom software development!</p>
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-0 lg:w-10/12 max-w-xs mx-auto rounded-lg">
                                    <button
                                        onClick={() => setIsContactPopupOpen(true)}
                                        className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded w-full"
                                    >
                                        <FileText size={20} />
                                        <span>Get in touch</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            <CertificationsSection />
            <AgileFrameworks />
            <Collaboration />
            <WhyClientsCooperateWithUs />

            <Contact />
            <BlogHomepage />
            <FAQSection />
            <Footer />
        </>
    )

}
export default AllServices;