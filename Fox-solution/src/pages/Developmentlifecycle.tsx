import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import TestimonialCarousel from "@/components/ui/Testimonial";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BlogHomepage from "@/components/ui/bloghome";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useState } from "react";
import AgileFrameworks from "../components/ui/Agilewefollow";

const Engagementmodels = () => {

    const SDLCDiagram = () => {
        const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);

        const phases = [
            { id: 1, name: 'Analysis', position: 'top-right' },
            { id: 2, name: 'Design', position: 'right' },
            { id: 3, name: 'Implementation', position: 'bottom-right' },
            { id: 4, name: 'Testing', position: 'bottom-left' },
            { id: 5, name: 'Release', position: 'left' },
            { id: 6, name: 'Maintenance', position: 'top-left' }
        ];

        // Calculate positions for phase bubbles
        const getPosition = (position: string) => {
            switch (position) {
                case 'top-right':
                    return 'absolute top-0 right-0 translate-x-16 -translate-y-2';
                case 'right':
                    return 'absolute top-1/3 right-0 translate-x-32';
                case 'bottom-right':
                    return 'absolute bottom-0 -right-10 translate-x-16 translate-y-2 ';
                case 'bottom-left':
                    return 'absolute bottom-0 left-0 -translate-x-16 translate-y-2';
                case 'left':
                    return 'absolute top-1/3 left-0 -translate-x-32';
                case 'top-left':
                    return 'absolute top-0 -left-8 -translate-x-16 -translate-y-2';
                default:
                    return '';
            }
        };

        return (
            <div className="w-full h-full flex items-center justify-center mt-20">
                <div className="relative w-96 h-96">
                    {/* Center circle with title */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full bg-blue-50 flex flex-col items-center justify-center text-center">
                            <span className="text-blue-500 font-medium text-xl">Software</span>
                            <span className="text-blue-500 font-medium text-xl">development</span>
                            <span className="text-blue-500 font-medium text-xl">life-cycle</span>
                        </div>
                    </div>

                    {/* Circle path */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                        <circle
                            cx="200"
                            cy="200"
                            r="150"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="10,5"
                        />

                        {/* Arrows */}
                        <path d="M130,90 A150,150 0 0,1 270,90" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <path d="M310,130 A150,150 0 0,1 310,270" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <path d="M270,310 A150,150 0 0,1 130,310" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <path d="M90,270 A150,150 0 0,1 90,130" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Arrow marker definition */}
                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="7"
                                refX="9"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                            </marker>
                        </defs>
                    </svg>

                    {/* Phase bubbles */}
                    {phases.map((phase) => (
                        <div
                            key={phase.id}
                            className={`${getPosition(phase.position)} flex items-center`}
                            onMouseEnter={() => setHoveredPhase(phase.name)}
                            onMouseLeave={() => setHoveredPhase(null)}
                        >
                            <div className="bg-white border border-gray-200 rounded-full py-2 px-6 shadow-sm flex items-center space-x-2 mt-8 mb-8">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${hoveredPhase === phase.name ? 'bg-blue-600' : 'bg-blue-500'}`}>
                                    {phase.id}
                                </span>
                                <span className="text-gray-800 font-medium">{phase.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    const steps = [
        {
            number: 1,
            title: 'Application requirement analysis',
            description: 'In the requirement collection (Discovery) phase, the first stage of the software development lifecycle, our team  collaborates with US industry’s business stakeholders and domain experts, ensuring a deep understanding of the North American market.',
            details: {
                activities: [
                    'scope definition of the entire project (product backlog);',
                    'planning for the quality assurance requirements;',
                    'definition of anticipated issues, opportunities;',
                    'recognition of the risks involved;',
                    'timeline definition.'
                ]
            }
        },
        {
            number: 2,
            title: 'Feasibility study',
            description: 'When the requirement analysis phase is done, the next step is to define and document software needs in the ‘Software Requirement Specification’ (‘SRS’) document. It has everything that should be structured and created during the application development life cycle.',
            details: {
                activities: [
                    'economic;',
                    'legal;',
                    'operation;',
                    'technical;',
                    'schedule.'

                ]
            }
        },
        {
            number: 3,
            title: 'Design HLD',
            description: 'Based on the SRS document, the team prepares the system and software design to define the IT system architecture. This design phase will be a base for the next coding phase.',
            details: {
                heading: '1. high-level design (HLD):',
                activities: [
                    'brief description of each module and its functionality;',
                    'dependencies between modules;',
                    'database tables & their main elements;',
                    'architecture diagrams;',
                    'technology details.'

                ],


            }
        },
        {
            number: 4,
            title: 'Design LLD',
            description: 'Based on the SRS document, the team prepares the system and software design to define the IT system architecture. This design phase will be a base for the next coding phase.',
            details: {
                heading: '2. low-level design (LLD):',
                activities: [
                    'functional modules logic;',
                    'detailed database tables;',
                    'complete interface detail;',
                    'complete modules input and outputs.'
                ],


            },


        },
        {
            number: 5,
            title: 'Coding',
            description: 'The next phase is coding itself — the most prolonged phase of the software development life cycle.',
            details: {

                activities: [
                    'Developers should follow some predefined coding guidelines.',
                    'The whole development is divided into tasks for specific modules development.'
                ]
            }
        },
        {
            number: 6,
            title: 'Testing',
            description: 'Once some part of the software coding is complete, it is sent for testing, and the QA team starts testing the functionality to verify that the application works following the requirements.',
            details: {

                activities: [
                    'QA team finds some issues;',
                    'QA team sends them to the dev team;',
                    'dev team fixes the issues;',
                    'QA team rechecks the functionality.'
                ]
            }

        },
        {
            number: 7,
            title: 'Deployment',
            description: 'Once the software is developed and fully tested, the final deployment process is launched.',
            details: {

                activities: [
                    'QA team checks the software in the production environment.'
                ]
            }

        }, {
            number: 8,
            title: 'Maintenance',
            description: 'Post-release, the software undergoes continuous enhancement to suit the evolving US market needs, including:',
            details: {

                activities: [
                    'bug fixing;',
                    'software upgrade;',
                    'enhancement with new features.'
                ]
            }

        },

    ];
    return (
        <>
            <Navbar />

            <RevealOnScroll>
                <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
                    <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white hover:text-blue-800 transition-colors duration-200'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/Developmentlifecycle" className='text-white hover:text-blue-800 transition-colors duration-200'>Development Lifecycle</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
                    <div className="max-w-5xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-4xl font-normal leading-tight text-center">
                            Software development <span className="text-blue-500">process</span>
                        </h1>
                        <p className="mt-6 text-sm text-gray-300 text-center">
                            Fox-solution will take you through every stage of the software development life cycle (SDLC) – from a business analysis stage through UX/UI and application development to deployment and ongoing support.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>
            <SDLCDiagram />

            <RevealOnScroll>
                <section className='container px-6 mx-auto bg-[#0a1529] rounded-lg py-10 mt-8'>
                    <div className="bg-[#0a1529] text-white container px-6 mx-auto min-h-screen flex flex-col items-center " style={{ backgroundColor: '#0a1529' }}>
                        <div className="max-w-4xl w-full">
                            <h1 className="text-4xl font-bold mb-10 text-center">
                                <span className="text-blue-400">Software development life
                                </span> cycle explained
                            </h1>

                            <div className="relative">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex mb-12 relative">
                                        {index < steps.length - 1 && (
                                            <div className="absolute left-7 top-14 w-0.5 h-full bg-gray-600 z-0"></div>
                                        )}

                                        <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-semibold z-10 flex-shrink-0">
                                            {step.number}
                                        </div>

                                        <div className="ml-6 flex-1">
                                            <h3 className="text-2xl font-bold mb-3 text-blue-400">{step.title}</h3>
                                            <p className="text-gray-300 mb-4">{step.description}</p>


                                            {/* Added detailed information section */}
                                            <div className="bg-gray-800 p-5 rounded-lg mb-4">
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <p className="text-base font-bold text-blue-400">{step.details.heading}</p>
                                                </div>

                                                <p className="text-gray-300 mb-3">This cost covers different activities including:</p>
                                                <ul className="space-y-2">
                                                    {step.details.activities.map((activity, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-green-400 mr-2 mt-1">✓</span>
                                                            <span className="text-gray-300">{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            <AgileFrameworks />



            <RevealOnScroll>
                <CertificationsSection />
            </RevealOnScroll>

            <RevealOnScroll>
                <TestimonialCarousel />
            </RevealOnScroll>
            <Contact />
            <RevealOnScroll>
                <BlogHomepage />
            </RevealOnScroll>

            <Footer />
        </>
    );
};

export default Engagementmodels;