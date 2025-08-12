import { useState, useCallback, useEffect } from 'react';
import { Code, Monitor, Smartphone, Cpu, BarChart2, Layers, Brain, TestTube, Database, AlignCenter, Cloud, Box } from 'lucide-react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CertificationsSection } from '@/components/ui/Certification';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import TestimonialCarousel from '@/components/ui/Testimonial';
import CostEstimator from '@/components/ui/checkoboxform';
import FAQ from '@/components/ui/faq';
import AnimatedButton from '../components/ui/AnimatedButton';
import { Link } from "react-router-dom";

// Hero Section Component
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
                                <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Mvp-development</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
            <section id="hero" className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-12 sm:py-16 md:py-20 px-4 md:px-16 lg:px-20 -mt-4 sm:-mt-6 md:-mt-8">
    <div className="max-w-5xl mx-auto text-center md:text-left md:ml-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Software development for <span className="text-blue-500">startups</span> that scales with you
        </h1>
        <p className="text-base sm:text-lg mt-4 sm:mt-6 text-gray-300 max-w-3xl mx-auto md:mx-0">
            Get your US-based startup business idea off the ground with our expertise in software development, accelerate time to market and optimize MVP development costs. Start fast, scale strong, become profitable.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-base sm:text-lg mt-6 sm:mt-8 text-gray-100">
            <ul className="space-y-2">
                <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                    <span>build a startup MVP;</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                    <span>create a product prototype;</span>
                </li>
            </ul>
            <ul className="space-y-2 mt-2 md:mt-0">
                <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                    <span>startup rescue mission;</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✔</span>
                    <span>startup product development.</span>
                </li>
            </ul>
        </div>
        
        {/* Mobile-optimized buttons and rating section */}
        <div className="mt-8 sm:mt-10 flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:items-center sm:gap-6">
            <button className="bg-pink-600 text-white px-5 py-3 sm:py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 flex items-center justify-center w-full sm:w-auto rounded-sm">
                Free quote
            </button>
            
            <div className="text-sm text-gray-300 flex flex-row sm:flex-col items-center sm:items-start justify-center gap-3 sm:gap-0">
                <div>Clients rate our services</div>
                <div className="text-yellow-400 text-xl font-bold sm:mt-1">★★★★★ 5.0</div>
            </div>
        </div>
    </div>
</section>
            </RevealOnScroll>
        </>
    );
};

// Services Section Component
const ServicesSection = () => {
    const services = [
        {
            icon: <Code className="text-blue-500" size={24} />,
            title: "Frontend development",
            description: "Craft compelling, user-friendly, and visually striking interfaces that serve user needs, crafting comprehensive frontend solutions. Leveraging cutting-edge technologies like React, Angular, and Vue.js, we guarantee smooth user navigation across desktop, tablet, mobile devices, and progressive web applications.",
            link: "Front-end development services →"
        },
        {
            icon: <Monitor className="text-blue-500" size={24} />,
            title: "Backend development",
            description: "Success-full delivers innovative and secure backend solutions designed to meet the specific needs of your business. From robust APIs to enterprise-level solutions for server-side programming, database management, and business logic implementation, we focus on ensuring a seamless and scalable system architecture for your business success.",
            link: "Backend development services →"
        },
        {
            icon: <Smartphone className="text-blue-500" size={24} />,
            title: "Mobile app development",
            description: "Success-FULL specializes in custom mobile app development solutions tailored to the unique needs of your business. With our focus on iOS and Android platforms, we design user-friendly, robust, highly functional mobile applications that align with your specific business objectives.",
            link: "Mobile application development →"
        },
        {
            icon: <Cpu className="text-blue-500" size={24} />,
            title: "IoT development",
            description: "Our Internet of Things services connect a world of devices. Our expertise spans across smart hardware specifications, embedded software development, cloud implementations, and automation. We meticulously craft dedicated software integration to create seamless experiences, all while providing user-friendliness for devices.",
            link: "Internet of Things →"
        },
        {
            icon: <BarChart2 className="text-blue-500" size={24} />,
            title: "Business analysis services",
            description: "We provide detailed with comprehensive business analysis services to address changing business requirements with IT teams seamlessly. Our efficient business analysts conduct user & stakeholder interviews, technical research, precise technical documentations, requirement validation, UI mockups, functional & administrative documentation & estimation, facilitating effective software development progress.",
            link: "Business Analysis Services →"
        },
        {
            icon: <Layers className="text-blue-500" size={24} />,
            title: "UI / UX design",
            description: "Creating delightful engaging top-tier UI and UX designs that captivate users across all platforms. Our expertise spans countless design systems, wireframes, mockups, with a special focus on user research, helping strike the perfect balance between aesthetics and functionality to not only boost user engagement, but also build long-term trust in your startup's products.",
            link: "Design services →"
        },
        {
            icon: <Brain className="text-blue-500" size={24} />,
            title: "Machine Learning services",
            description: "Our Machine Learning services are designed to accelerate insight-driven decision-making, structured data acquisition, real-time data analysis & visualization, modeling for neural networks, and computer vision. While providing actionable predictions for customers, personalize user experience, and automate processes effectively.",
            link: "Machine Learning Services →"
        },
        {
            icon: <TestTube className="text-blue-500" size={24} />,
            title: "QA & Testing services",
            description: "We deliver professional software quality assurance and testing services tailored to the needs of startups. Our approach encompasses functionality, usability, and security requirements examination. Our tested code optimization includes performance and functional testing, as well as manual testing, system & integration. We leverage automation, continuous delivery, and agile development framework to ensure the stability and excellence of your startups.",
            link: "QA & Testing →"
        },
        {
            icon: <Database className="text-blue-500" size={24} />,
            title: "Big Data services",
            description: "Our Big Data services are formed to optimize effective data-driven business decisions. Our offerings encompass data engineering, architecture design, processing, analytics modeling consultation, and warehouse integration for high-quality outcomes. These elements combine to facilitate informed business and data analysis approaches to business challenges, providing you to harness the full potential of your data-informed decision making.",
            link: "Big Data Services →"
        },
        {
            icon: <AlignCenter className="text-blue-500" size={24} />,
            title: "Artificial Intelligence Services",
            description: "Our AI services are tailored to assist startups in maximizing the potential of this revolutionary technological advancement. This includes conversation tools, recommendation engines, image and text recognition for visual identification of images and text analysis, along with deep learning for diverse industry applications. Through our services we facilitate addressing numerous problems across a wide range of industries, including e-commerce, banking, retail, healthcare and manufacturing.",
            link: "Artificial Intelligence Services →"
        },
        {
            icon: <Cloud className="text-blue-500" size={24} />,
            title: "SaaS development",
            description: "We provide detailed with comprehensive end-to-end SaaS development services. Our offerings include market research, platform specification and strategy, UI UX design, prototyping, development, and testing services. We are devoted to building creating intuitive and efficient solutions for your business.",
            link: "SaaS application development services →"
        },
        {
            icon: <Box className="text-blue-500" size={24} />,
            title: "Blockchain development",
            description: "We innovate blockchain development-comprehensive solutions, decentralized applications development, and use of various technologies to improve all facets of blockchain, involving finance, retail, healthcare, logistics, among others. Our teams design and create scalable, transparent, and sustainable digital solutions for supply chain assets. With our blockchain expertise, you stay on the bleeding edge of transformative technology, digital transactions, setting the way for unprecedented success.",
            link: "Blockchain development →"
        }
    ];

    return (
        <RevealOnScroll>
            <section id="services" className="py-16 bg-gray-50 mt-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        <span className="text-blue-500">Services</span> we can help startups with
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-95 transform border border-gray-100 hover:border-blue-200 flex flex-col h-full"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 bg-blue-50 rounded-md mr-3">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                                </div>

                                <p className="text-sm text-gray-600 mb-4 flex-grow">
                                    {service.description}
                                </p>

                                <a
                                    href="#"
                                    className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200 inline-flex items-center mt-2"
                                >
                                    {service.link}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};

// Cost Estimator Section Component
const CostEstimatorSection = () => {
    return (
        <div id="cost-estimator" className="bg-gray-100 p-4">
            <CostEstimator />
        </div>
    );
};

// Why Us Section Component
const WhyUsSection = () => {
    return (
        <RevealOnScroll>
            <section id="why-us" className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        <span className="text-blue-600">Why</span> entrust app development to us
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        After 3 years on the market we know software development for startups inside out.
                        We are eager to provide everything needed to develop your MVP application,
                        from building a Lean Canvas to the release of a fully functioning MVP.
                        We help entrepreneurs to test and validate their business model by using
                        Customer Development techniques and an Agile Development approach.
                    </p>

                    <ul className="text-gray-800 space-y-2 text-base list-none">
                        {[
                            'individual approach;',
                            'result-oriented;',
                            'experience and tech expertise;',
                            'partnership approach;',
                            'lean approach;',
                            'user interface prototypes;',
                            'project estimation and timeline.',
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold text-xl">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img
                        src="https://media.istockphoto.com/id/1397678880/photo/closeup-of-a-black-businesswoman-typing-on-a-laptop-keyboard-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=Qj9WWpAoKB0W7k-c68Y-8neN6c1mCExnEO9UKG-eoXY="
                        alt="Developer Working"
                        className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-11/12 h-96 mt-2 hover:scale-105 transition-transform duration-300 object-cover"
                    />
                </div>
            </section>
        </RevealOnScroll>
    );
};

// TickItem Component for startup-accelerators section
const TickItem = ({ text }) => (
    <li className="flex items-start gap-2 text-gray-900">
        <span className="text-blue-600 mt-1">
            {/* Rounded custom checkmark with SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                    d="M9 12.75L5.75 9.5L4.5 10.75L9 15.25L19.5 4.75L18.25 3.5L9 12.75Z"
                    fill="currentColor"
                />
            </svg>
        </span>
        <span>{text}</span>
    </li>
);

// Startup Accelerators Section Component
const StartupAcceleratorsSection = () => {
    const [activeTab, setActiveTab] = useState('startups');

    return (
        <RevealOnScroll>
            <section id="startup-accelators" className="flex flex-col md:flex-row bg-gray-50 p-6 md:p-16 gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-light">
                        Tech <span className="text-blue-600 font-medium">partner</span>
                        <br /> for startups <br /> and startup <br /> accelerators
                    </h2>
                    <p className="text-lg text-gray-700 mt-6">
                        Try new way of software development for startups. Fast. Flexible. Reliable.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <div className="flex gap-6 text-xl font-medium border-b border-gray-300 mb-6">
                        <button
                            onClick={() => setActiveTab('startups')}
                            className={`pb-2 ${activeTab === 'startups'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-400'
                                }`}
                        >
                            STARTUPS
                        </button>
                        <button
                            onClick={() => setActiveTab('accelerators')}
                            className={`pb-2 ${activeTab === 'accelerators'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-400'
                                }`}
                        >
                            ACCELERATORS
                        </button>
                    </div>

                    {activeTab === 'startups' ? (
                        <div className="space-y-3 text-gray-800 text-lg">
                            <p>
                                By «technical partner» we literally mean that we become a partner. We can consult,
                                plan, assist you or code the software by ourselves in cooperation with you. Our
                                expertise allows us to cover any technical issue you face. If we don't, we'll take one
                                step forward and find a way to resolve it. We enjoy working with startups,
                                particularly in the United States, so we built a referral program where our
                                recommendation brings 3 months discount for our services. We are the best at:
                            </p>
                            <ul className="mt-4 space-y-3 pl-2">
                                <TickItem text="growing ideas and proof of concept;" />
                                <TickItem text="MVP development — we define and build it;" />
                                <TickItem text="making high-quality code;" />
                                <TickItem text="transparent cooperation;" />
                                <TickItem text="fast development." />
                            </ul>
                        </div>
                    ) : (
                        <div className="space-y-3 text-gray-800 text-lg">
                            <p>
                                After 3 years of custom development and technological consultation of 100 startups,
                                we can offer our expertise, mentoring and guidance, connections, specialists, help in
                                preparation to a demo day, or help in the organization of conferences, meetups, and
                                other activities. Our expertise includes building MVPs that impress investors and help
                                to get funded. We would like to share this knowledge with other startups. Our offer is
                                the following:
                            </p>
                            <ul className="mt-4 space-y-3 pl-2">
                                <TickItem text="sharing of expertise;" />
                                <TickItem text="help in organization & promotion;" />
                                <TickItem text="on-hand technical consultation." />
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </RevealOnScroll>
    );
};

// Process Section Component
const ProcessSection = () => {
    return (
        <RevealOnScroll>
            <section id="process" className="bg-white py-16 px-6 md:px-20 text-center">
                <h2 className="text-4xl md:text-5xl font-light">
                    Software development for startups{' '}
                    <span className="text-blue-600 font-medium">process</span> explained
                </h2>

                <p className="text-lg text-slate-700 mt-4">
                    We not only develop Minimum Viable Products for startups, but we also make them Minimum Valuable Solutions.
                </p>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div>
                        <div className="mb-4 text-blue-600">
                            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 4v16h18V4H3zm16 14H5V6h14v12zM7 8h2v2H7V8zm0 4h2v2H7v-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Product planning & assessment</h3>
                        <ul className="space-y-2 text-gray-700 text-base">
                            <li>
                                <span className="text-red-500">Discovery phase</span> & business analysis;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> requirements engineering;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> architecture design;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> development time & cost estimation.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 text-blue-600">
                            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h6v2H7v-2zm0 4h8v2H7v-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Software development</h3>
                        <ul className="space-y-2 text-gray-700 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> user experience design;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> user interface design;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> backend & frontend development.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> testing & stabilization;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> infrastructure management.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 text-blue-600">
                            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h-6l3-7zm0 4.3l-.86 2.14h1.72L12 6.3zM4 13h16v2H4v-2zm0 4h16v2H4v-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">MVP delivery & maintenance</h3>
                        <ul className="space-y-2 text-gray-700 text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> product updates;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> new feature development;
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span> software maintenance.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};

// Recent Works Section Component
const RecentWorksSection = () => {
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

    return (
        <section id="recent-works" className="bg-white py-16 px-4 md:px-6">
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
                                        Learn More
                                    </a>
                                </AnimatedButton>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
};

// Reviews Section Component
const ReviewsSection = () => {
    return (
        <section id="reviews" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 mt-2">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <TestimonialCarousel />
            </div>
        </section>
    );
};

// Stats Section Component
const StatsSection = () => {
    return (
        <RevealOnScroll>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="text-1xl md:text-5xl font-light text-gray-900 leading-snug">
                            <span className="text-blue-600 font-semibold">Since 2023</span>,  <br />we have
                            successfully assisted <br />
                            <span className="font-semibold"> startups</span> in <br />
                            turning their ideas into <br />
                            reality.
                        </p>
                    </div>


                    {/* Right Stats Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 text-center lg:text-left">
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900">70+</p>
                            <p className="text-sm text-gray-700 mt-1">developed custom <br /> solutions</p>
                        </div>

                        <div>
                            <p className="text-2xl md:text-0xl font-bold text-gray-900"></p>
                            <p className="text-sm text-gray-700 mt-1">We develop all our solutions  <br /> in India, <br /> serving clients globally.</p>
                        </div>

                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900">70+</p>
                            <p className="text-sm text-gray-700 mt-1">specialists for <br /> your service</p>
                        </div>

                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900">2-6</p>
                            <p className="text-sm text-gray-700 mt-1">months to develop <br /> a product prepared <br /> for market validation</p>
                        </div>

                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900">99%</p>
                            <p className="text-sm text-gray-700 mt-1">guarantee of <br /> security against issues</p>
                        </div>

                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900">98%</p>
                            <p className="text-sm text-gray-700 mt-1">Satisfaction rate</p>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};

// Certifications Section Component
const CertificationsWrapper = () => {
    return (
        <div className='mb-6 w-auto'>
            <CertificationsSection
                heading={<>
                    <span className="text-blue-500">Awards</span> & recognitions
                </>}
                description="Foxsolutions has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
                imageSize="w-16 md:w-24"
            />
        </div>
    )
}
// How It's Done Section Component
const HowItsDoneSection = () => {
    const steps = [
        {
            number: 1,
            title: 'Request',
            description: 'We receive and process your request. To protect your business idea and materials, we suggest signing an NDA.'
        },
        {
            number: 2,
            title: 'Project discuss',
            description: 'You discuss your MVP idea with our Business Development Manager, Business Analyst, and Software Architect to clarify requirements.'
        },
        {
            number: 3,
            title: 'Business proposal',
            description: 'Once the idea is discussed, we present our business proposal to you, defining the suggested approach, functionality, architecture, time and cost, and team.'
        },
        {
            number: 4,
            title: 'Sign the agreement',
            description: 'When all the details are clear, we sign the agreement and kickoff the project. Software development for startups begins.'
        },
        {
            number: 5,
            title: 'Project kick-off',
            description: 'Project Manager works on the project scope breakdown into phases to ensure on-time delivery.'
        },
        {
            number: 6,
            title: 'Development phase',
            description: 'You work with the Project Manager and Account Manager, review deliverables, and get tangible results with each project phase.'
        },
        {
            number: 7,
            title: 'Warranty',
            description: 'When software development for startups finishes, all IP rights, the source code, and other deliverables belong to you only.'
        }
    ];

    return (
        <RevealOnScroll>
            <section id="done" className="mb-16">
                <div className="bg-vofox-darkBlue text-white p-8 min-h-screen flex flex-col items-center">
                    <div className="max-w-4xl w-full">
                        <h2 className="text-4xl font-bold mb-10 text-center">
                            <span className="text-blue-400">How</span> is it all done?
                        </h2>

                        <div className="relative">
                            {steps.map((step, index) => (
                                <div key={index} className="flex mb-12 relative">
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-7 top-14 w-0.5 h-24 bg-gray-600 z-0"></div>
                                    )}

                                    <div className="bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-semibold z-10 flex-shrink-0">
                                        {step.number}
                                    </div>

                                    <div className="ml-6">
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-300">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
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
    const mvpFaqs = [
        {
            question: "What does Minimum Viable Product mean?",
            answer: "A Minimum Viable Product (MVP) is a software application that has enough basic features to put on the market, attract users – early adopters – and validate product ideas early in the product development cycle. MVP is an extremely popular concept in software development for startups."
        },
        {
            question: "How do you develop an MVP?",
            answer: (
                <>
                    <p>When it comes to startup MVP app development, we usually advise following Lean methodology (Find, Execute, and Validate framework). Alternative steps for software development for startups are:</p>
                    <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>research the market and people and define the potential audience needs;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>define the way your idea addresses these challenges;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>list only features which help users to solve their core needs;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>define the MVP form and build it;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>promote the product and get users' feedback;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>analyze and repeat;</span>
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "How long should an MVP take to build?",
            answer: "MVP software development for startups may take from 1-2 weeks to 2-3 months depending on the type of the MVP (e.g if it is just a landing page), the scope, complexity, and innovation of the business idea."
        },
        {
            question: "How much does an MVP development cost?",
            answer: (
                <>
                    <p>The average cost of an <span className="text-red-500">MVP software</span> development for startups may be between $10K and $50K; as we mentioned above, pricing, as well as the time, depends entirely on the complexity of the MVP concept and other factors such as platform (web, mobile, IoT), technologies used, innovations required.</p>
                </>
            )
        },
        {
            question: "What comes after an MVP?",
            answer: "When you tested and proved your business idea with the MVP, the next step is fully-functional product development. Based on the feedback from the users, you and the app development team will be able to define what features your application should have and their priorities."
        }
    ];

    return (
        <section id="faq" className="px-4 mb-16">
            <FAQ faqs={mvpFaqs} />
        </section>
    )
};

// Main MVPDevelopment Component
const MVPDevelopment = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const contentsMenu = [
        { title: 'Services', id: 'services' },
        { title: 'Startup & Accelerators', id: 'startup-accelators' },
        { title: 'Process', id: 'process' },
        { title: 'Recent works', id: 'recent-works' },
        { title: 'How it\'s done', id: 'done' },
        { title: 'FAQ', id: 'faq' }
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
                    <ServicesSection />
                    <CostEstimatorSection />
                    <WhyUsSection />
                    <StartupAcceleratorsSection />
                    <ProcessSection />
                    <RecentWorksSection />
                    <ReviewsSection />
                    <StatsSection />
                    <CertificationsWrapper />
                    <HowItsDoneSection />
                    <Contact />
                    <FAQSection />
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

export default MVPDevelopment;