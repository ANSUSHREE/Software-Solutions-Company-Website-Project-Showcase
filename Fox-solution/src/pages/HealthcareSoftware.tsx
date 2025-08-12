import RevealOnScroll from "@/components/ui/RevealOnScroll";
import React, { useCallback, useEffect, useState } from "react";
import { RiFileSettingsFill } from "react-icons/ri";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { LiaLaptopMedicalSolid } from "react-icons/lia";
import { PiHeartbeatLight } from "react-icons/pi";
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import { FaDatabase } from "react-icons/fa";
import { GiArcheryTarget, GiArtificialIntelligence, GiJigsawPiece, GiWifiRouter } from "react-icons/gi";
import TestimonialCarousel from "@/components/ui/Testimonial";
import FAQ from "@/components/ui/faq";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

// Hero Section Component
const HeroSection = () => {
    return (
        <>
            <RevealOnScroll>
                <section
                    id="hero"
                    className="relative py-24  bg-gradient-to-br from-pink-50 from-10% via-sky-100 via-30%  to-violet-300 to-90% ..."
                >
                    {/* Breadcrumb Section */}
                    <div className="absolute top-2 left-0 z-10  ">

                        <Breadcrumb className="mt-20   lg:ml-16">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className=" hover:text-red-500 transition-colors duration-200">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/services"
                                        className=" hover:text-red-500 transition-colors duration-200"
                                    >
                                        Industries
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="hover:text-red-600 transition-colors duration-200">
                                        {" "}
                                        Healthcare software development company
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="container mx-auto mt-20 px-4">
                        <div className="max-w-3xl">
                            <h1 className=" text-4xl md:text-5xl font-light mb-4">
                                <span className="text-blue-500"> Healthcare Software</span> development company
                            </h1>

                            <p className="text-xl mb-8">
                                Enhance health outcomes with our specialized healthcare software development services.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                                <div className="flex items-center">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    <span>mHealth</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    <span>Internet of Medical Things (IoMT)</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    <span>patient engagement</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    <span>healthcare AI solutions</span>
                                </div>
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded ">Get in Touch</button>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        </>
    );
};

// Logo component for service sections
const ServiceLogo = ({ icon }) => {
    return (
        <div className="flex jjustify-start mb-4">
            <div className="bg-blue-900/30 p-4  w-16 h-16 flex items-left justify-center">{icon}</div>
        </div>
    );
};


// Services Section Component
const ServicesSection = () => {
    return (
        <>
            <RevealOnScroll>
                <section className=" p-8 mb-12">
                    <div className="grid md:grid-cols-6 ">
                        <img className="opacity-50 hover:opacity-100" src="/pci.svg" />

                        <img className="opacity-50 hover:opacity-100" src="/owasp.svg" />

                        <img className="opacity-50 hover:opacity-100" src="/iso.svg" />

                        <img className="opacity-50 hover:opacity-100" src="/hipaa.svg" />

                        <img className="opacity-50 hover:opacity-100" src="/gdpr.svg" />

                        <img className="opacity-50 hover:opacity-100" src="/fisma.svg" />
                    </div>
                </section>

                <section
                    id="services"
                    className="bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white  p-10 py-20 mb-12 min-h-[500px]"
                >

                    <h1 className=" text-4xl md:text-5xl mb-4 font-light whitespace-nowrap ">
                        <span className="text-blue-500">Healthcare software </span>development services
                    </h1>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <ServiceLogo icon={<RiFileSettingsFill className="text-blue-500 w-8 h-8" />} />

                            <h3 className="text-2xl font-semibold text-left">Full-cycle project development</h3>
                            <p className="text-gray-300 ">
                                We provide end-to-end medical software development services from a{" "}
                                <span className="text-red-500">Discovery phase</span> to maintenance and support, adhering
                                to healthcare standards and regulations in the U.S.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <ServiceLogo icon={<GiJigsawPiece className="text-blue-500 w-8 h-8" />} />
                            <h3 className="text-2xl font-semibold text-left">Third-party software integration</h3>
                            <p className="text-gray-300">
                                We can easily integrate the software with any third- party solution, be it electronic health
                                record systems, patient management software, billing modules, telemedicine, etc
                            </p>
                        </div>

                        <div className="space-y-4">
                            <ServiceLogo icon={<GiArcheryTarget className="text-blue-500 w-8 h-8" />} />
                            <h3 className="text-2xl font-semibold text-left">Consulting & RnD</h3>
                            <p className="text-gray-300">
                                Get expert guidance regarding various aspects of healthcare software development and
                                implementations. We help to analyze needs, develop strategy and system architecture, and
                                advice on regulatory requirements like HIPAA, FDA, GDPR.
                            </p>
                        </div>
                    </div>

                </section>
            </RevealOnScroll>
        </>
    );
};


// Client we work with Component
const Client = () => {
    return (
        <RevealOnScroll>
            <section id="clients" className="   p-10 mb-12">
                <h1 className="text-4xl md:text-5xl font-light mb-4 text-center">
                    Custom healthcare software development for <span className="text-blue-500">business</span>
                </h1>
                <p className="text-gray-800 p-8 mb-12">
                    As a custom healthcare software development firm, we at SumatoSoft deliver comprehensive solutions to
                    healthcare proviers, digital health startups, and medical device manufacturers. We prioritize data security
                    and adhere to UI/UX design best practices and regulatory compliance and standards like HIPPA, GDPR, FDA,
                    HITECH, SSAE, FHIR.
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <ServiceLogo icon={<LiaLaptopMedicalSolid className="text-blue-500 text-4xl" />} />
                        <h3 className="text-2xl font-semibold text-left">Healthcare Providers</h3>
                        <p className="text-left text-gray-800">
                            We develop and implement EMR/EHR, practice management, lab management, asset tracking, remote
                            patient monitoring, and population health management solutions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <ServiceLogo icon={<PiHeartbeatLight className="text-blue-500 text-4xl" />} />
                        <h3 className="text-2xl font-semibold text-left">Digital Health Startups</h3>
                        <p className="text-left text-gray-800">
                            We provide comprehensive support and expertise to develop innovative software like telehealth
                            systems, wellness tech solutions, and software for diagnostic and monitoring devices.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <ServiceLogo icon={<PiHeartbeatLight className="text-blue-500 text-4xl" />} />
                        <h3 className="text-2xl font-semibold text-left">Medical Device Manufacturers</h3>
                        <p className="text-left text-gray-800">
                            We empower hospital-grade and consumer devices with robust device management solutions across web
                            and mobile platforms and AI-powered analytics tools.
                        </p>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};


// Custom Software   Component
const CustomSoftware = () => {
    const cutomsoftware = [
        {
            title: "Electronic health records (EHR)",
            description:
                "EHR consolidates patient health information in one place, making it easier for hospitals, clinics, and physician offices to treat and care about people.We ensure the confidentiality of any personal health databy adhering to the ISO 27001 standard for information security management systems. ",
            image: "/EHR.JPG",
        },
        {
            title: "Electronic medical records (EMR)",
            description:
                "We help healthcare organizations digitalize their paper-based medical records and all related processes. We build EMR systems that securely store clinical documentation, health and treatment information, and automate healthcare workflows like visit booking",
            image: "/EMR.JPG",
        },
        {
            title: "Health information exchange (HIE) solutions",
            description:
                "We develop HEI solutions that enable the secure exchange of information within one network of clinics, between different healthcare organizations, and with government agencies.",
            image: "/HIE.JPG",
        },
        {
            title: "Telehealth and telemedicine platforms",
            description:
                "We leverage modern technologies like the Internet of Things to enable virtual healthcare services like video consultations with healthcare professionals, e-prescriptions, remote patient monitoring, etc., making healthcare accessible from the comfort of the patient’s home. ",
            image: "/telehealth.JPG",
        },
        {
            title: "Healthcare organization management software",
            description:
                "All-in-one complex software systems within one facility that integrate administrative and clinical workflows, medical billing, patient record systems, and more. We develop and integrate complex systems into healthcare organization without disturbing any business processes.",
            image: "/Healthcareorg.JPG",
        },
        {
            title: "Care management software",
            description:
                "AWe develop multipurpose software for at-home caregivers. It includes administrator tools and panels, standalone care management platforms, patient engagement platforms, remote patient monitoring software, or mobile healthcare applications for family members. ",
            image: "/caremanagement.JPG",
        },
        {
            title: "Healthcare analytics and reporting tools",
            description:
                "Our analytics and reporting solutions leverage the power of artificial intelligence, machine learning, computer vision, and big data algorithms to analyze and interpret clinical, operational, and financial data within healthcare organizations. ",
            image: "/healthcareanalytics.JPG",
        },
        {
            title: "End-customer software",
            description:
                "We help to reshape user engagement by developing intuitive and user-friendly end-customer solutions. We engage users with mobile and web applications that promote physical and mental health, facilitate remote care and manage health conditions. Our end-customer healthcare solutions are accessible, engaging, and user-centric. ",
            image: "/ECS.JPG",
        },
    ];

    return (
        <RevealOnScroll>
            <section id="software" className="mx-2 my-10">
                <h1 className="text-4xl md:text-5xl font-light mb-4 whitespace-nowrap p-8 text-center">
                    Custom healthcare <span className="text-blue-500">software</span> we develop
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {cutomsoftware.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-white overflow-hidden">
                            <div className="p-6 flex-1">
                                <h3 className="text-2xl font-semibold text-left">{item.title}</h3>
                                <p className="text-left text-gray-800">{item.description}</p>
                            </div>
                            <div className="bg-gray-100 w-32 flex items-center justify-center">
                                <img src={item.image} alt={item.title} className="max-h-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </RevealOnScroll>
    );
};
//  FAQ video  Component
const FAQVideoSection = () => {
    return (
        <RevealOnScroll>
            <section id="faq" className="p-8 mb-12">
                <h1 className="text-4xl md:text-5xl mb-4 text-center font-medium">
                    <span className="text-blue-600 font-semibold">FAQ</span> about foxSolutions services
                </h1>

                <div className="w-full aspect-video bg-gray-100 rounded shadow-lg overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dummyurl"
                        title="Foxsolution's Exceptional Pre-Sale Process - Unlocking the Path to Successful Software Solutions"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </RevealOnScroll>
    );
};
//  Tech Stack  Component
const TechStack = () => {
    return (
        <RevealOnScroll>
            <section id="Techstack" className=" p-8 mb-12">
                <img
                    src="/techh.JPG"
                    alt="Technologies we work with including AWS IoT, Azure IoT, and Google Cloud services"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </section>
        </RevealOnScroll>
    );
};
// Advanced Tech Services  Component
const TechServices = () => {
    const techservices = [
        {
            icon: <GiWifiRouter className="text-blue-500 w-8 h-8" />,
            title: "Internet of Things",
            description:
                "We deliver IoT-powered medical software solutions that stand healthcare companies on top of advanced technological opportunities, which include chronic devices, virtual care, tracking of medical supplies and pharmaceuticals, and more.",
            link: "Internet of Things development",
        },
        {
            icon: <GiArtificialIntelligence className="text-blue-500 w-8 h-8" />,
            title: "Artificial Intelligence",
            description:
                "We implement AI to transform healthcare with its broad range of technologies that include machine learning, computer vision, natural language processing (NLP), and robotics. We build virtual health assistants, applications for communication with robots, and medical imaging systems for X-rays, CR scans, and MRI scans.",
            link: "Artificial Intelligence services",
        },
        {
            icon: <FaDatabase className="text-blue-500 w-8 h-8" />,
            title: "Big Data & ML",
            description:
                "We apply these technologies to tasks such as predictive analytics, risk stratification, drug discovery, anomaly identification, data analytics for clinical decision support, and much more.",
            link: "Big Data & ML services",
        },
    ];

    return (
        <RevealOnScroll>
            <section id="adtech" className="bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white  p-8 mb-12 ">
                <h1 className="text-4xl md:text-5xl mb-4 font-light text-center">
                    <span className="text-blue-500">Advance</span> your mHealth software
                </h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {techservices.map((service, index) => (
                        <div
                            key={index}
                            className="p-6  hover:bg-gradient-to-tl hover:from-pink-500 hover:to-blue-900  bg-blue-950"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-blue-900 rounded-md mr-3">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                            </div>

                            <p className="text-sm text-blue-100 mb-4">{service.description}</p>

                            <a href="#" className="text-blue-400 hover:text-white text-sm font-medium inline-flex items-center">
                                {service.link}
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </RevealOnScroll>
    );
};

// Custom vs platform Component
const CustomHealthcare = () => {
    return (
        <>
            <RevealOnScroll>
                <section id="custom-platform" className=" p-8 mb-12">
                    <h1 className="text-4xl md:text-5xl mb-4 text-center font-medium">
                        <span className="text-blue-500">Custom vs platform-based </span> healthcare software
                    </h1>
                    <p>
                        The choice between custom and platform-based healthcare software development depends on three core
                        factors: needs, budget, and long-term strategy. Both approaches have their pros and cons.
                    </p>
                </section>

                <section className=" p-8 mb-12">
                    <h1 className="text-4xl md:text-5xl mb-4 text-center font-medium">
                        <span className="text-blue-600 font-semibold">Custom</span> healthcare software
                    </h1>

                    <div className="grid grid-cols-2 ">
                        {/* pros */}
                        <div className="row-span-1 p-4 bg-lime-50 rounded-lg flex items-center justify-center">
                            <h1 className="text-5xl font-light ">Pros:</h1>
                        </div>
                        <div className=" bg-lime-50 row-span-1 text-lg p-4">
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        it's tailored - custom software is designed to match operational processes and meet the
                                        exact business needs.
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It's proprietary - the patient healthcare data and the software are stored on healthcare
                                        organization servers
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It has high ROI in the long run – while requiring a higher initial investment, custom
                                        software offers a high return on investment over time.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* cons */}

                        <div className="row-span-1 p-4 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                            <h2 className="text-5xl font-light ">Cons:</h2>
                        </div>
                        <div className=" bg-gray-200 row-span-1 text-lg p-4">
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">It requires significant initial investments.</p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It takes longer to develop custom software than to deploy the pre-built one
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It requires periodic updates and maintenance from the healthcare organization.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className=" p-8 mb-12">
                    <h1 className="text-4xl md:text-5xl mb-4 text-center font-medium">
                        <span className="text-blue-600 font-semibold">Platform-based</span> healthcare software
                    </h1>

                    <div className="grid grid-cols-2 ">
                        {/* pros */}
                        <div className="row-span-1 p-4 bg-lime-50 rounded-lg flex items-center justify-center">
                            <h1 className="text-5xl font-light">Pros:</h1>
                        </div>
                        <div className=" bg-lime-50 row-span-1 text-lg p-4">
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It requires lower initial investments – such software is usually distributed on a
                                        subscription basis, which is much lower than custom development.
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It can be quickly deployed – ready-made software can often be deployed within weeks or
                                        even days after purchase, especially if little customization is needed.
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        Its maintenance is on the vendor’s size – the vendor typically handles updates,
                                        maintenance, and security, reducing the burden on the healthcare company..
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* cons */}

                        <div className="row-span-1 p-4 bg-gray-200 rounded-lg flex items-center justify-center">
                            <h2 className="text-5xl font-light ">Cons:</h2>
                        </div>
                        <div className=" bg-gray-200 row-span-1 text-lg p-4">
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        it offers limited customization – the software vendor provides the most requested
                                        features on the market that might not be enough in a specific case.
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It becomes more expensive in the long run- customization and scaling always require
                                        additional costs which could significantly increase yearly investments in the platform.
                                    </p>
                                </li>

                                <li className="flex items-start">
                                    <span className="text-blue-600 text-xl mr-3">✓</span>
                                    <p className="text-gray-700">
                                        It implies vendor lock-in – organizations become dependent on the vendor in terms of
                                        updates, security, data safety features, and support without an opportunity to migrate
                                        the date to another platform easily.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        </>
    );
};

// Process description  Component
const Processdescription = () => {
    const steps = [
        {
            number: 1,
            title: "Discovery",
            description:
                "The healthcare software development process starts with a comprehensive analysis where we examine business goals, specific clinical workflows, regulatory and data privacy requirements, and patient care goals, run proof of concept if necessary, and develop documents that will lay the foundation for further project development. ",
        },
        {
            number: 2,
            title: "Design & Architecture",
            description:
                "During the next step in our healthcare development services, we design user Interfaces and determine the architecture of the healthcare software solution based on scalability, security, data exchange, and integration needs. ",
        },
        {
            number: 3,
            title: "Development",
            description:
                "Based on the artifacts defined and described in the previous steps, our team develops the software using agile methodology, best practices, and coding standards. ",
        },
        {
            number: 4,
            title: "Testing and QA",
            description:
                "Based on the artifacts defined and described in the previous steps, our team develops the software using agile methodology, best practices, and coding standards. ",
        },

        {
            number: 5,
            title: "Integrations",
            description: "We seamlessly integrate the software with third-party healthcare systems like EHRs and HIEs.",
        },
        {
            number: 6,
            title: "Support and maintenance",
            description:
                "Our development team continually fine-tunes the mHealth software, provides upgrades, and offers technical support for as long as you require our expertise and guidance. ",
        },
    ];

    return (
        <>
            <RevealOnScroll>
                <section id="process-description" className="mb-16">
                    <div className="bg-vofox-darkBlue text-white p-8 min-h-screen flex flex-col items-center">
                        <div className="max-w-4xl w-full">
                            <h1 className="text-4xl font-bold mb-10 text-center">
                                The <span className="text-blue-400">way </span> we develop healthcare software
                            </h1>

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
        </>
    );
};
// Case studies Component
const Casestudies = () => {
    const recentWorks = [
        {
            title: "Adaptive health monitoring mobile app for personalized wellness program",
            description:
                "The mobile application that uses a smart cuff to offer real-time pulse and pressure metrics. It assists users in understanding whether a selected wellness program is appropriate for their specific health indicators, all while adhering to robust GDPR compliance standards.",
            image: "/phone.webp",
            bgColor: "bg-red-600",
        },
        {
            title: "The Integration of the Internet of Things into the mobile application",
            description: "The integration of a smart lightbulb into the Heart Rate Variability tracking application.",
            image: "/phone2.webp",
            bgColor: "bg-blue-900",
        },

        {
            title: " Real-time blood glucose monitoring app for a healthcare technology firm",
            description:
                "A mobile application that provides real-time blood glucose data through graphical representation, alerts for timely insulin administration, and seamless user onboarding, elevating the Client's sensor product for a more significant market impact.",
            image: "/phone 3.webp",
            bgColor: "bg-indigo-900",
        },
    ];

    return (
        <section id="Casestudies" className="p-8 mb-12">
            <h1 className="text-4xl md:text-5xl mb-8 text-center font-medium">
                <span className="text-blue-600 font-semibold">mHealth software </span>we developed
            </h1>

            <div className="space-y-6 ">
                {recentWorks.map((work, index) => (
                    <RevealOnScroll key={index} delay={index * 0.2}>
                        <div
                            className={` overflow-hidden shadow-lg hover:bg-gradient-to-r from-blue-900 from-[0%] via-pink-500 via-[49%]  to-blue-900 to-[100%] grid md:grid-cols-2  ${work.bgColor} text-white`}
                        >
                            <img
                                src={work.image}
                                alt={work.title}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-6 h-full flex flex-col justify-center">
                                <h3 className="text-3xl font-light mb-3">{work.title}</h3>
                                <p className="mb-4">{work.description}</p>
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
// Why foxsolutions Component
const WhyfoxSolution = () => {
    return (
        <RevealOnScroll>
            <section>
                <div className="gap-8 items-center px-10 mb-10 ">
                    <h2 className="text-4xl md:text-5xl mb-4 text-center font-medium">
                        <span className="text-blue-600 font-semibold">Why foxsolutions </span> healthcare software development
                        services
                    </h2>
                    <div className="grid md:grid-cols-2">
                        <div className=" gap-8 items-center">
                            <ul className="mt-6 space-y-4 text-gray-700">
                                <li>
                                    ✔ <strong>Regulatory and standards mastery</strong> <br />
                                    Compliance is non-negotiable in the healthcare realm, SumatoSoft ensures adherence to global
                                    regulations and standards like HIPAA compliance, HL7, FHIR, GDPR, and more, guaranteeing the
                                    security of patient data.
                                </li>
                                <li>
                                    ✔ <strong>Rapid and transparent development</strong> We leverage the speed and efficiency of
                                    Agile methodologies such as Scrum and Kanban for healthcare software product development and
                                    commit to 100% process transparency and proactive approach during the development.{" "}
                                </li>
                                <li>
                                    ✔ <strong>Close cooperation during the whole project development</strong>
                                    We offer clear timelines and cost estimation, regularly send sprint/monthly reports of the
                                    project status and provide multiple contact points through emails, chats, messengers, calls,
                                    and personal meetings. We also run demos of the work done on a regular basis and keep our
                                    Clients updated
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src="/whyfoxsolutions.png" alt="Development Team" className=" shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};

// Awards & recognitions Component
const CertificationsWrapper = () => {
    return (
        <RevealOnScroll>
            <section id="Awards">
                <div className="mb-6 w-auto">
                    <CertificationsSection
                        heading={
                            <>
                                <span className="text-blue-500">Awards</span> & recognitions
                            </>
                        }
                        description="Foxsolutions has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
                        imageSize="w-16 md:w-24"
                    />
                </div>
            </section>
        </RevealOnScroll>
    );
};



const StoriesSection = () => {
    const articles = [
        {
            title: "Top 10 ChatGpt Alternatives for Business Use in2025",
            time: "52 mins",
            date: "March 24, 2025",
            image: "https://sumatosoft.com/wp-content/uploads/2025/04/USA-2048x1622.png",
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
            question: "What is the average cost of healthcare app development?",
            answer: (
                <>
                    <p>The cost of healthcare app development depends on three core factors:</p>
                    <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>app’s complexity;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>required functionalities; </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>security and compliance requirements; </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>the expertise level of the healthcare software developers; </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>promote the product and get users' feedback;</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>the physical location of the development team. </span>
                        </li>
                        <li>
                            <p>Simple healthcare apps can cost up to $50,000. </p>
                        </li>
                        <li>
                            <p>Mid-level complexity apps are up to $150,000</p>
                        </li>
                        <li>
                            <p>The cost of complex healthcare systems could reach a million dollars.</p>
                        </li>
                        <li>
                            <p>
                                To get a precise estimation, refer to a provider of custom healthcare software development
                                services.
                            </p>
                        </li>
                    </ul>
                </>
            ),
        },
        {
            question: "How long does it typically take to develop a custom medical application?",
            answer: "The development timeline for a medical app ranges from a few months to over a year. Standalone applications with fewer features might be developed and launched within 3-6 months. Systems with multiple functions integrated advanced technologies like image recognition, and interdependencies with other systems usually take over two years. ",
        },

        {
            question: "How do you ensure the security and compliance of medical software?",
            answer: (
                <>
                    <p>
                        The security and compliance are closely connected with some healthcare standards and regulations
                        which are HIPAA, HITECH, GDPT, and IEC 62443.{" "}
                    </p>
                    <p>
                        We have dealt with these standards and adhere them during the development process as well as
                        implementing reliable encryption methods, secure data storage, and by leveraging secure
                        communication protocols.{" "}
                    </p>
                    <p>
                        Additionally, we are ISO 27001-certified developers who maintain a high level of information
                        security management.{" "}
                    </p>
                </>
            ),
        },
        {
            question: "Are your healthcare software solutions interoperable with existing systems?",
            answer: (
                <>
                    <p>
                        Yes, we develop custom healthcare software with respect to seamless integration with existing EHR
                        systems, medical devices, and third-party applications.
                    </p>
                    <p>
                        We apply HL7 standard for secure exchange of healthcare information electronically, FHIR for
                        interoperability, and DICOM when dealing with medical images or related information.{" "}
                    </p>
                </>
            ),
        },
    ];

    return (
        <RevealOnScroll>
            <section id="FAQ" className="px-4 mb-16">
                <FAQ faqs={mvpFaqs} />
            </section>
        </RevealOnScroll>
    );
};

const HealthcareSoftware = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const contentsMenu = [
        { id: "hero", title: "Overview" },
        { id: "services", title: "Services" },
        { id: "clients", title: "Client we work with " },
        { id: "software", title: "Software we develop" },
        { id: "faq", title: "FAQ Video" },
        { id: "Techstack", title: "Tech stack" },
        { id: "adtech", title: " Advanced tech integration" },
        { id: "custom-platform", title: " Custom platform-based development" },
        { id: "process-description", title: "Process description" },
        { id: "Casestudies", title: "Case studies & reviews" },
        { id: "Awards", title: "Awards & recognitions" },
        { id: "stories", title: "Blog" },
        { id: "FAQ", title: "FAQ" },
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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                behavior: "smooth",
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="space-y-3">
                        {contentsMenu.map((item, index) => (
                            <li
                                key={index}
                                className={`text-lg p-3 rounded-lg transition-colors cursor-pointer ${activeSection === item.id
                                        ? "bg-blue-100 text-blue-600 font-medium"
                                        : "text-gray-700 hover:bg-gray-100"
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
                    <Client />

                    <CustomSoftware />

                    <FAQVideoSection />

                    <TechStack />

                    <TechServices />

                    <CustomHealthcare />

                    <Processdescription />
                    <Casestudies />

                    <ReviewsSection />

                    <WhyfoxSolution />

                    <CertificationsWrapper />

                    <Contact />

                    <StoriesSection/>

                    <FAQSection />
                </div>

                {/* Table of Contents - improved sticky behavior */}
                <div className="hidden lg:block lg:w-[23%]">
                    <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)]  pt-2">
                        <TableOfContents sections={contentsMenu} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default HealthcareSoftware;
