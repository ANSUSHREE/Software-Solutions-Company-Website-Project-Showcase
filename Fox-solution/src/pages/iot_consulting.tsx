import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Contact from "@/components/home/Contact";
import TestimonialCarousel from "@/components/ui/Testimonial";
import { TableOfContents } from '@/components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import BlogHomepage from "@/components/ui/bloghome";
import { CertificationsSection } from "@/components/ui/Certification";



const IoTConsulting = () => {
    const sections = [

        { id: 'our-iot-services', title: 'Our IoT Services' },
        { id: 'IoT-Solutions', title: 'IoT Solutions' },
        { id: 'IoT-consulting', title: 'IoT Consulting Services' },
        { id: 'when-to-engage', title: 'When to Engage' },
        { id: 'IoT-software-developed', title: 'IoT Software Developed' },
        { id: 'reviews', title: 'What People say about us' },
        { id: 'whyFoxsolution', title: 'Why Fox-Solution' },
        { id: 'awards', title: 'Awards & Recognitions' },
        { id: 'stories', title: 'Awesome stories' }
    ];


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const HeroSection = () => {
        return (
            <>
                <RevealOnScroll>
                    <div className="p-8 mr-0 bg-gradient-to-r from-white to-gray-100">
                        <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className='text-gray-700 hover:text-blue-400 transition-colors duration-200'>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/services/healthcare-iot-development" className='text-gray-700 hover:text-blue-400 transition-colors duration-200'>Services</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-gray-700 hover:text-blue-400 transition-colors duration-200'>Iot-Consulting</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <section id="hero" className="bg-gradient-to-r from-white to-pink-50 text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
                        <div className="max-w-5xl mx-auto text-center md:text-left ml-0 md:ml-8">
                            <h1 className="text-4xl md:text-5xl font-normal leading-tight text-blue-600">
                                IoT consulting services <span className="text-black">for businesses</span>
                            </h1>
                            <p className="text-lg mt-6 text-gray-800 max-w-3xl">
                                Whether you have a device that requires the software or considering IoT implementation, we offer expert advice on the selection, integration, and management of IoT devices and platforms. We help to:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8 text-gray-100">
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">select the most suitable IoT devices;</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">migrate operations from a legacy system;
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">reach high ROI;
                                        </span>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">plan a system architecture;</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">ensure the network and device security.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-6">
                                <button className="bg-blue-600 text-white px-5 py-2 font-normal transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                                    Get in Touch
                                </button>
                            </div>

                        </div>
                    </section>
                </RevealOnScroll>
            </>
        );
    };
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
            <div className=' bg-white py-6 -mt-20'>
                <div className='mx-auto max-w-7xl px-4'>
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
        )
    }
    const IotServices = () => {
        const iotservices = [
            {
                title: 'Discovery of implementation opportunities ',
                description: 'We thoroughly evaluate your business operations to identify opportunities where IoT can help to streamline operations, minimize costs, reduce waste, or enable data-driven decision-making. ',

            },
            {
                title: 'IoT product roadmap development',
                description: 'Our IoT development teams analyze your business goals and available resources and draw a detailed product roadmap with clear budget, timelines, milestones that serves as a strategic plan of a full-scale development.',

            },
            {
                title: 'Security and compliance consulting and audit',
                description: 'We offer a decade of expertise in risk assessment, secure IoT architecture and design, compliance management, incident response planning, and security audit. ',

            },
            {
                title: 'IoT network architecture development',
                description: 'Based on the environment conditions, goals, and desired functionalities, we develop a network architecture. We choose the appropriate devices, select communication protocols, draw a network topology design, consider fog computing implementation, and other aspects to ensure the final system is scalable, flexible, secure, and resilient. ',

            },
            {
                title: 'Proof of concept',
                description: 'We examine the market and your IoT vision to build a proof-of-concept model. It helps to evaluate the potential benefits and ROI before committing to full-scale development.',


            },
            {
                title: 'Custom IoT app development',
                description: 'Our skilled developers create custom web and mobile applications to seamlessly interact with your IoT devices, delivering a unified and user-friendly interface for data processing and device management.',

            },
            {
                title: 'Advanced analytics implementation',
                description: 'We help to extract useful information, trends, and insights and uncover hidden patterns from the data in the IoT network by implementing advanced analytics tools like Machine learning, Big Data techniques, and Artificial intelligence.',

            },
            {
                title: 'Cloud integration services',
                description: 'We help to integrate SaaS solutions, on-premise systems, CRMs, ERPs, HCRM and other applications into one system through the cloud.',

            },
        ];

        return (
            <div className="container px-12 max-w-7xl bg-gradient-to-r from-blue-950 to-vofox-darkBlue rounded-lg py-10 mt-10">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-normal mb-3 mt-12">
                                <span className="text-3xl  mb-4 text-white">Our</span>{' '}
                                <span className="text-3xl  mb-4 text-blue-500">IoT consulting services</span>
                            </h2>
                        </div>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24 ">
                        {iotservices.map((industry, index) => (
                            <RevealOnScroll
                            >
                                <div className="p-4">
                                    <div className='flex items-center mb-3'>
                                        <h3 className="text-xl font-semibold text-white mb-4">
                                            {industry.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300">
                                        {industry.description}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div >
            </div >
        );
    };

    const Iotconsulting = () => {
        const iotservices = [
            {
                title: 'Consumer IoT (CIoT)',
                description: 'Foxsolution, we specialize in consulting for CIoT solutions such as smart home systems, wearable health devices, smart appliances, connected cars, and more.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/17212/17212153.png" alt="" className="w-12 h-12" />
                )
            },
            {
                title: 'Industrial IoT (IIoT)',
                description: 'Our team offers expert consulting for IIoT in planning and developing solutions for predictive maintenance, advanced analytics, and real-time monitoring. We help to maximize ROI and enhance operational efficiency.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/3806/3806228.png" alt="" className="w-12 h-12" />
                )
            },
            {
                title: 'Agricultural IoT',
                description: 'We provide agriculture IoT consulting to assist farmers in adapting advanced solutions like precision farming, livestock monitoring, and smart irrigation systems.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/17212/17212215.png" alt="" className="w-12 h-12" />
                )
            },
            {
                title: 'Infrastructure IoT',
                description: 'We at Foxsolution consult on IoT solutions for smart cities, smart buildings, and environmental monitoring. We cooperate with urban developers and city planners in integrating technologies like smart traffic management, waste management systems, and automated public utilities, driving the realization of truly smart cities',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/17323/17323204.png" alt="" className="w-12 h-12" />
                )
            },
            {
                title: 'Healthcare IoT',
                description: 'We at Foxsolution consult on IoT solutions for smart cities, smart buildings, and environmental monitoring. We cooperate with urban developers and city planners in integrating technologies like smart traffic management, waste management systems, and automated public utilities, driving the realization of truly smart cities',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/11470/11470284.png" alt="" className="w-12 h-12" />
                )

            },
            {
                title: 'Transportation and mobility IoT',
                description: 'Foxsolution provides in-depth consulting for IoT applications in transportation, guiding businesses and municipalities in implementing smart fleet management, real-time public transit tracking, and automated toll collection systems.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/5816/5816856.png" alt="" className="w-12 h-12" />
                )
            },
            {
                title: 'Retail and commerce',
                description: 'From offering strategies for smart retail applications that encompass inventory management and customer behavior analysis to streamlining supply chain processes with advanced inventory management systems, we ensure that businesses leverage IoT for optimal operational efficiency and enhanced customer experience.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/5670/5670649.png" alt="" className="w-12 h-12" />
                )
            },
            {
                title: 'Education and institution',
                description: 'We provide our expertise for connected campuses that want to implement enhanced student tracking, resource utilization, IoT-powered security, and smart labs equipped with the latest IoT devices for advanced research and development.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/9830/9830495.png" alt="" className="w-12 h-12" />
                )
            },
        ];



        return (
            <div className="container px-4 mx-auto py-10">
                <div className="max-w-5xl mx-auto">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-normal mb-4 text-gray-800">
                                Our <span className="text-blue-500">IoT consulting services</span>
                            </h2>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {iotservices.map((benefit, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="flex flex-col items-start p-6 bg-white rounded-lg h-full">
                                    <div className="mb-4 p-3  rounded-full">
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
                    <img src="../public/iot-environment-architecture.jpg" alt="iot-enviroment-architecture" className="mt-28" />
                </div>
            </div>
        );
    };
    return (
        <>

            <HeroSection />
            <Navbar />

            <div className="flex flex-col lg:flex-row relative">
                {/* Main content - takes full width on mobile, 3/4 on desktop */}
                <div className="w-full lg:w-3/4">
                    <section className="bg-gray-50 py-16 px-4">
                        <Logos />
                    </section>
                    <section id="our-iot-services">
                        <IotServices />
                    </section>

                    {/*---------------------------------------------IoT-Consulting we build-------------------------------------------*/}
                    <section id="IoT-Solutions" className="bg-gray-50 py-16 px-4 mb-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl text-blue-500 font-light mb-4">IoT solutions
                                    <span className="text-black font-normal"> across diverse </span>
                                    sectors
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/*CARD 1*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare
                                        </h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT technologies enable real-time health monitoring and remote consultations, providing crucial data to healthcare providers. This leads to more accurate diagnoses, personalized treatment plans, and better patient outcomes. It also streamlines hospital operations by automating routine tasks, thus reducing costs and increasing efficiency.</p>
                                    </div>
                                    <img src="../Healthcare.png" alt="Healthcare" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 2*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT solutions offer real-time tracking and analytics that open the way to IoT implementations like predictive maintenance of equipment, process automation, advanced performance, health, and utilization monitoring.</p>
                                    </div>
                                    <img src="../manufacture.png" alt="Biometric" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 3*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Agriculture</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT implementation in agriculture increases crop yields and reduces resource usage. We help deploy IoT sensors that monitor real-time parameters like soil moisture, temperature, and humidity. We develop interactive dashboards that aggregate this information simply and conveniently.</p>
                                    </div>
                                    <div></div>
                                    <img src="../Agriculture.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 4*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            Transportation systems can benefit from real-time vehicle and package tracking, data analytics, improved route optimization, fuel efficiency, and precise vehicle health monitoring for timely maintenance. All these result in reduced risks of unexpected vehicle breakdowns and allow businesses to react to accidents on the roads proactively.</p>
                                    </div>
                                    <img src="../Transport.png" alt="Transport" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 5*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Smart cities
                                        </h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT provides the technological foundation for smart city initiatives, integrating various data sources for better urban planning. Optimized traffic management, bike-sharing programs, electric vehicle charging infrastructure, smart grids, smart lighting, and many other initiatives that IoT makes real.</p>
                                    </div>
                                    <img src="../smart_cities.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 6*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Supply chain</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT solutions offer real-time tracking of goods throughout the supply chain from manufacturing to delivery. Environmental monitoring ensures that products are stored and transported under optimal conditions, reducing waste and enabling precise cold-chain monitoring.</p>
                                    </div>
                                    <img src="../supply_chain.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 7*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitality</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT can elevate hospitality in multiple aspects: automation of front office operations like check-in/out procedures, housekeeping and maintenance, customer service, inventory and room management. We help to build modern IoT-powered solutions for hotels, restaurants, resorts, and event venues.</p>
                                    </div>
                                    <img src="../Hospitality.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 8*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            The core contribution of IoT to the education process is enhanced student engagement. Interactive whiteboards, smart projectors, IoT-enabled education tools in classrooms, education games, augmented reality, virtual reality, and multiple other great opportunities.</p>
                                    </div>
                                    <img src="../Education.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>


                            </div>
                        </div>
                    </section>

                    <section id="IoT-consulting">
                        <Iotconsulting />
                    </section>

                    <section id="when-to-engage" className="container mx-auto bg-white py-8 px-4 mb-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-5xl text-blue-500 font-light mb-4">When to engage Foxsolution's
                                    <br /> <span className="text-black font-light pt-4"> IoT consulting services</span>
                                </h2>
                            </div>
                        </div>

                        <div className="flex items-center bg-white py-8 px-8">
                            <div className="max-w-7xl mx-auto w-full">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            Pre-implementation planning and strategy development
                                        </h2>
                                        <p className="text-xl text-gray-800 leading-relaxed">
                                            When you hear about IoT and are considering implementing it but are
                                            unsure where to start, we help you translate vague expectations into a
                                            specific written roadmap.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <div className="w-full max-w-lg">
                                            <img
                                                src="../iot_illution.webp"
                                                alt="IoT Planning Illustration"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white py-8 px-8">
                            <div className="max-w-7xl mx-auto w-full">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                                        <div className="w-full max-w-lg">
                                            <img
                                                src="../feasibility_analysis.webp"
                                                alt="IoT Implementation Illustration"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 order-1 md:order-2">
                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            Feasibility analysis
                                        </h2>
                                        <p className="text-xl text-gray-800 leading-relaxed">
                                            When you have an innovative idea IoT solution but are still determining its feasibility on the market and the demand presence for such a product, we can run a session to identify the future product feasibility and understand if your investments will pay off.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white py-8 px-8">
                            <div className="max-w-7xl mx-auto w-full">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            Risk assessment
                                        </h2>
                                        <p className="text-xl text-gray-800 leading-relaxed">
                                            Digital transformation with advanced technologies implies its own risks, such as potential data breaches, poor update management, system failures, and more. We have expertise in dealing with all risks regarding implementing IoT solutions and can provide expert guidance on the ways how to mitigate them.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <div className="w-full max-w-lg">
                                            <img
                                                src="../Risk_assesment.webp"
                                                alt="Data Analytics Illustration"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white py-8 px-8">
                            <div className="max-w-7xl mx-auto w-full">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                                        <div className="w-full max-w-lg">
                                            <img
                                                src="../fully_cycle_iot.webp"
                                                alt="Security Solutions Illustration"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 order-1 md:order-2">
                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            Full cycle IoT development
                                        </h2>
                                        <p className="text-xl text-gray-800 leading-relaxed">
                                            When you recognize the need for a specialized IoT solution but lack the in-house expertise or resources to develop it, we can become your technological partner and cover the whole development from product vision to deployment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center bg-white py-8 px-8">
                            <div className="max-w-7xl mx-auto w-full">
                                <div className="flex flex-col md:flex-row items-start">
                                    <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            Post-implementation staff training
                                        </h2>
                                        <p className="text-xl text-gray-800 leading-relaxed">
                                            When your IoT system is up and running, but your staff lacks the knowledge or experience to utilize its full potential, we provide training for your staff on leveraging the power of the Internet of Things.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <div className="w-full max-w-lg">
                                            <img
                                                src="../post_implementation.webp"
                                                alt="Support and Maintenance Illustration"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*--------------------------------------------------------------------- IoT software devloped---------------------------------------*/}
                    <section id="IoT-software-developed" className="py-16 px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold">
                                IoT software <span className="text-blue-500">we developed</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-12">

                            {/* Card 1 */}
                            <div className="bg-[#a00b22] rounded-lg flex flex-col md:flex-row items-center p-8 md:p-16 gap-8">
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src="/public/cover-img-1.png"
                                        alt="Healthcare App"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">
                                        Adaptive health monitoring mobile app for personalized wellness programs
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        A mobile application designed to determine suitable workouts based on real-time pulse and pressure levels,
                                        all measured through a smart cuff. The app features GDPR-compliant security measures and seamless device integration.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#061138] rounded-lg flex flex-col md:flex-row items-center p-8 md:p-16 gap-8">

                                <div className="w-full md:w-1/2 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">
                                        Real-time blood glucose monitoring app for a healthcare technology firm
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        A mobile application that provides real-time blood glucose data through graphical representation, alerts for timely insulin administration, and seamless user onboarding, elevating the Client’s sensor product for a more significant market impact.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src="/public/cover-img-2.png"
                                        alt="Healthcare App"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#652D90] rounded-lg flex flex-col md:flex-row items-center p-8 md:p-16 gap-8">
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src="/public/cover-img-3.png"
                                        alt="Healthcare App"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">
                                        IoT application with sensors for industrial fridge monitoring
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        An IoT solution for HoReCa venues with the option to monitor the work of industrial (commercial) refrigerators online, get instant alerts on urgent issues and manage historical data.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="reviews">
                        <TestimonialCarousel />
                    </section>


                    <section id="whyFoxsolution">
                        <div className={`bg-gray-50 py-16 px-4 mt-6 mb-6`}>
                            <div className="max-w-6xl mx-auto">
                                <h1 className="text-4xl font-normal text-center mb-16">
                                    <span className="text-blue-500">Why</span>{" "}
                                    <span className="text-black">Foxsolution for Health software </span><br />
                                    <span className="gap-2">development services</span>
                                </h1>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Experience Column */}
                                    <div>
                                        <h2 className="text-3xl font-normal mb-8">Experience</h2>

                                        <div className="space-y-12">
                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">

                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/128/8107/8107602.png"
                                                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Using the best software development practices
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <div className="w-12 h-12 text-blue-500">

                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/128/18794/18794248.png"
                                                                style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Experienced after 20K+ hours of custom healthcare software development
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <div className="w-12 h-12 text-blue-500">

                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/128/12669/12669092.png"
                                                                style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Open to sharing knowledge and experience
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Speed Column */}
                                    <div>
                                        <h2 className="text-3xl font-normal mb-8">Speed</h2>

                                        <div className="space-y-12">
                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <div className="w-12 h-12 text-blue-500">
                                                            <div className="w-12 h-12 text-blue-500">

                                                                <img
                                                                    src="https://cdn-icons-png.flaticon.com/128/7570/7570389.png"
                                                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Agile (Scrum, Kanban) methodology
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <div className="w-12 h-12 text-blue-500">

                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/128/12735/12735671.png"
                                                                style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        100% processes transparency
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/128/14488/14488747.png"
                                                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Dedicated technical team
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Control Column */}
                                    <div>
                                        <h2 className="text-3xl font-normal mb-8">Control</h2>

                                        <div className="space-y-12">
                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/128/16978/16978706.png"
                                                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Clear timelines & cost estimates
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/128/15364/15364813.png"
                                                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Sprint / monthly reports, custom reports
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="mr-4 mt-1">
                                                    {/* Replace with your own icon */}
                                                    <div className="w-12 h-12 text-blue-500">
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/128/3050/3050431.png"
                                                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-gray-800">
                                                        Regular communications: calls, emails, chats, personal meetings
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id="awards">
                        <CertificationsSection />
                    </section>

                    <section id="Contact">
                        <Contact />
                    </section>

                    <section id="stories">
                        <BlogHomepage />
                    </section>
                </div>

                {/* Table of Contents - hidden on mobile, fixed on desktop */}
                {!isMobile && (
                    <div className="hidden lg:block lg:w-[23%]">
                        <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
                            <TableOfContents sections={sections} />
                        </div>
                    </div>
                )}
            </div>

            <Footer />

        </>

    )


}
export default IoTConsulting