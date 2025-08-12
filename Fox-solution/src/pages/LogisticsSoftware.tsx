import React, { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { FaArrowsDownToPeople, FaClockRotateLeft, FaPeopleGroup, FaTruckFast } from "react-icons/fa6";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CiSettings } from "react-icons/ci";
import { GiJigsawPiece, GiArcheryTarget, GiCargoShip, GiCrane, GiNestedHexagons } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosTimer, IoMdTimer } from "react-icons/io";

import { GrUserWorker } from "react-icons/gr";
import TestimonialCarousel from "@/components/ui/Testimonial";
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/ui/faq";
import { SlDocs } from "react-icons/sl";
import { LuCircleArrowOutUpLeft, LuFileSearch } from "react-icons/lu";
import { SiGoogledocs } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { AiFillCodepenCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            

            <section
                id="hero"
                className="relative py-24  bg-gradient-to-br from-pink-50 from-10% via-sky-100 via-30%  to-violet-300 to-90% ..."
            >
                <div className="p-8 mr-0  absolute top-2 left-0 z-10 ">
                  
                  <Breadcrumb className="mt-20  lg:ml-16">
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
                                  Logistics software development
                              </BreadcrumbPage>
                          </BreadcrumbItem>
                      </BreadcrumbList>
                  </Breadcrumb>
              </div>
                <div className="container mt-20 mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className=" text-4xl md:text-5xl font-light mb-4">
                            <span className="text-blue-500"> Logistics software</span> development services
                        </h1>

                        <p className="text-xl mb-8">
                            Streamline your supply chain, optimize routes, and enhance tracking with powerful logistics
                            software tailored to your business needs. Our custom logistics solutions improve efficiency,
                            reduce costs, and provide real-time data visibility, empowering you to stay ahead of the
                            competition.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded">
                                Get in Touch
                            </button>
                            <div className="text-yellow-400 text-xl font-bold">★★★★★ 5.0</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Service section
const ServicesSection = () => {
    const services = [
        {
            icon: <FaTruckFast className="text-blue-500" size={24} />,
            title: "Frontend development",
            description:
                "Craft compelling, user-friendly, and visually striking interfaces that serve user needs, crafting comprehensive frontend solutions. Leveraging cutting-edge technologies like React, Angular, and Vue.js, we guarantee smooth user navigation across desktop, tablet, mobile devices, and progressive web applications.",
        },
        {
            icon: <CiSettings className="text-blue-500" size={24} />,
            title: "Software Reengineering",
            description:
                "We analyze the website and app quality, fix bugs, do code refactoring, and change the process flow for existing logistics solutions. ",
        },
        {
            icon: <GiJigsawPiece className="text-blue-500" size={24} />,
            title: "Integration with third-party software",
            description:
                "We create effective ecosystems for the supply chain. We build integration of logistics management systems with 3PL companies and existing logistics solutions on the market. ",
        },

        {
            icon: <GiArcheryTarget className="text-blue-500" size={24} />,
            title: "Automation and Optimization",
            description:
                "We help to digitalize logistics businesses by implementing technologies to them. Our senior-level business analysts help to automate and optimize processes and increase the efficiency and effectiveness of the logistics business.",
        },
    ];

    return (
        <>
            <RevealOnScroll>
                <section
                    id="services"
                    className="bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white mt-10  p-10 py-20 mb-12 min-h-[500px]"
                >
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-semibold mb-12 text-center">
                            IT<span className="text-blue-500"> Services </span> we Offer
                        </h2>

                        <div className="grid md:grid-cols-2  gap-6 text-white">
                            {services.map((service, index) => (
                                <div key={index} className=" p-6 rounded-lg   flex flex-col h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 bg-blue-50 rounded-md mr-3">{service.icon}</div>
                                        <h3 className="text-lg font-semibold text-white-800">{service.title}</h3>
                                    </div>

                                    <p className="text-sm text-white-600 mb-4 flex-grow">{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className=" w-1/2 overflow-hidden shadow-lg hover:bg-gradient-to-r from-blue-900 to blue-950 m-5">
                            <h1 className="mt-1 p-2">Clutch</h1>
                            <div className="text-red-400 text-xl font-bold">★★★★★ 4.8</div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        </>
    );
};
// Custom software we develop
const Customlogistics = () => {
    const items = [
        { icon: <GiPodiumWinner size={32} />, title: "Freight management software" },
        { icon: <FaTruckFast size={32} />, title: "Transportation management software" },
        { icon: <CiSettings size={32} />, title: "Complex logistics management software" },
        { icon: <GiCargoShip size={32} />, title: "Fleet management software" },
        { icon: <IoShieldCheckmarkOutline size={32} />, title: "Supply chain management and security" },
        { icon: <IoMdTimer size={32} />, title: "Transit time optimization and management" },
        { icon: <GiJigsawPiece size={32} />, title: "Product integrity and damage control" },
        { icon: <IoIosTimer size={32} />, title: "Product integrity and damage control" },
        { icon: <GiCrane size={32} />, title: "Fuel price volatility" },
        { icon: <GrUserWorker size={32} />, title: "Driver activity monitoring" },
    ];
    return (
        <section id="custom-logistics" className=" py-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl mb-4 font-light whitespace-nowrap">
                    Custom logistics <span className="text-blue-500">software </span> we make
                </h1>
                <p className=" text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                    Logistics & Transportation companies have many branches and subdivisions with their peculiar process and
                    zones of responsibility. Whether you’re a US-based freight forwarding business, managing a warehouse, or
                    seeking fleet management software, our logistics software development services can optimize your
                    operations and elevate your business in the competitive North American market.
                </p>
                <div className="grid md:grid-cols-4 gap-6 mt-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6  flex flex-col items-center justify-center min-h-[180px] min-w-[200px] text-center"
                        >
                            <div className="mb-4 text-blue-600">{item.icon}</div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Advance your logistics software
const Advancelogistic = () => {
    const advancelogitic = [
        {
            icon: <CiSettings className="text-blue-500" size={24} />,
            title: "Internet of Things",
            description:
                "In the US, the use of IoT technology is revolutionizing transportation and logistics software. IoT applications are especially beneficial for American logistics businesses in fleet management, vehicle tracking, route optimization, inventory management, and strategic planning.",
        },
        {
            icon: <AiFillCodepenCircle  className="text-blue-500" size={24} />,
            title: "Artificial Intelligence",
            description:
                "Use the power of artificial intelligence to create applications that predict demand, modify orders, and re-route in-transit goods to warehouses where needed. With AI-powered applications, warehousing, predictive analytics, smart reporting and intelligent forecasting will evolve to the next level.",
        },
        {
            icon: <GiNestedHexagons  className="text-blue-500" size={24} />,
            title: "Big Data & Machine Learning",
            description:
                "Machine Learning technologies are becoming an integral part of logistics software development services. They provide a comprehensive overview of the supply chain and impact processes such as purchasing, delivery, inventory management, maintenance, scheduling optimization, and accident prediction.",
        },
    ];

    return (
        <section id="advance"  className=" py-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl mb-4 font-light whitespace-nowrap">
                    <span className="text-blue-500">Advance </span> your logistics software
                </h1>
                <div className="grid md:grid-cols-3 gap-6 mt-6  items-stretch" >
                    {advancelogitic.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6  flex flex-col items-center justify-center min-h-[180px] min-w-[200px] text-center"
                        >
                            <div className="mb-4 text-3xl text-blue-600">{item.icon}</div>
                            <h2 className="text-left text-lg font-semibold">{item.title}</h2>
                            <p className="text-left text-sm mb-4 flex-grow">{item.description} </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Wedevelop = () => {
    const devlop = [
        {
            number: 1,
            title: "Business analysis",
            description:
                "One of the most important parts of the your logistics project development process. Our business and tech experts analyze your project requirements, plans, and current challenges, and come up with the vision of the future software solution.",
        },
        {
            number: 2,
            title: "Design",
            description:
                "We design software (interfaces and applications) based on the end-user experience and with a view to its value for the Client’s business.",
        },
        {
            number: 3,
            title: "Development",
            description:
                "Our software development team creates logistics software solutions rigorously following the approved concept and your business requirements.",
        },
        {
            number: 4,
            title: "Testing and quality assurance",
            description:
                "Our development team performs a complete test cycle to ensure that all processes go along with the quality standards defined for the logistics software.",
        },
        {
            number: 5,
            title: "Integrations",
            description:
                "We coordinate the work of the new software with other company’s systems to ensure that all tools work as a single cooperating organism.",
        },
        {
            number: 6,
            title: "Support and maintenance",
            description:
                "Our dev team members tune out the software, upgrade it and support its work as long as you need our technical help or advice.",
        },
    ];
    return (
        <RevealOnScroll>
            <section id="wedevlop" className="mb-16">
                <div className="bg-vofox-darkBlue text-white p-8 min-h-screen flex flex-col items-center">
                    <div className="max-w-4xl w-full">
                        <h1 className="text-4xl font-bold mb-10 text-center">
                            The <span className="text-blue-400">way </span> we develop healthcare software
                        </h1>

                        <div className="relative">
                            {devlop.map((step, index) => (
                                <div key={index} className="flex mb-12 relative">
                                    {index < devlop.length - 1 && (
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

const Transportationlogistics = () => {
    const trasport = [
        {
            description: "Complete orders efficiently, on time, and at the lowest cost with modern logistics software.",
        },
        {
            description: "Increase profits and margins.",
        },
        {
            description: "Take more orders and increase throughput with the same human resources.",
        },
        {
            description: "Automate your processes and reduce paperwork",
        },
        {
            description: "Make the business more predictable.",
        },
        {
            description: "Evaluate the performance of people, processes, contractors.",
        },
        {
            description: "Predict future demand using predictive analysis features.",
        },
        {
            description: "Make timely decisions thanks to real-time data.",
        },
    ];
    return (
        <section className=" py-12 px-4 md:px-16">
            <h1 className="text-4xl font-bold mb-10 text-center">
                Transportation and logistics software <span className="text-blue-400">benefits </span>for business
            </h1>
            <p>
                Modern software has changed lots of businesses around the world, and the process keeps going. Don’t miss a
                chance to bring your logistics company on the edge of technological progress and beat your competitors.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-6 items-start">
                <div className="w-full md:w-1/2 space-y-4">
                    {trasport.map((item, index) => (
                        <ul key={index}>
                            <li className="flex items-start">
                                <span className="text-blue-600 mt-1">✓ </span> 
                                 {item.description}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/transport.JPG"
                        alt="Logistics Illustration"
                        className="w-full max-w-md rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

const SoftwateWedevelop = () => {
    const wedevelop = [
        {
            title: "Transportation management system",
            description:
                "A comprehensive solution for companies operating in the logistics industry,covering all the major aspects of transport and cargo management",
            image: "/lap1.webp",
            bgColor: "bg-red-600",
        },
        {
            title: "Custom ERP system for Toyota car dealer",
            description:
                "The custom ERP system Scalex was implemented in 20 centers across the globe.It automates key business processes for car dealers: sales of cars,inventory,the car's service maintenance",
            image: "/lap2.webp",
            bgColor: "bg-blue-900",
        },

        {
            title: "Freight forwarding logistics web service",
            description:
                "Web service that provides customers with a US mailing address and order processing services.They include receving, packing, and shipment of orders to the destination address.",
            image: "/lap3.webp",
            bgColor: "bg-indigo-900",
        },
    ];

    return (
        <section id="softwarewe" className="p-8 mb-12">
            <h1 className="text-4xl md:text-5xl mb-8 text-center font-medium">
                <span className="text-blue-600 font-semibold">mHealth software </span>we developed
            </h1>

            <div className="space-y-6 ">
                {wedevelop.map((work, index) => (
                    <RevealOnScroll key={index} delay={index * 0.2}>
                        <div
                            className={` overflow-hidden shadow-lg hover:bg-gradient-to-r from-blue-900 from-[0%] via-pink-500 via-[49%] via-pink-500 via-[51%] to-blue-900 to-[100%] grid md:grid-cols-2  ${work.bgColor} text-white`}
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

const Whyfoxsolution = () => {
    const experience = [
        {
            icon: <SlDocs />,
            description: "Using the best software development practices",
        },
        {
            icon: <GiPodiumWinner />,
            description: "Experienced after 36K+ hours of custom logistics software development",
        },
        {
            icon: <FaPeopleGroup />,
            description: "Open to sharing knowledge and experience",
        },
    ];

    const speed = [
        {
            icon: <LuCircleArrowOutUpLeft />,
            description: "Agile (Scrum, Kanban) methodology",
        },
        {
            icon: <LuFileSearch />,
            description: "100% transparency of the process",
        },
        {
            icon: <FaArrowsDownToPeople />,
            description: "Dedicated Technical PO / PM / BA",
        },
    ];

    const control = [
        {
            icon: <FaClockRotateLeft />,
            description: "Clear and detailed time & cost estimates",
        },
        {
            icon: <SiGoogledocs />,
            description: "Sprint / monthly reports, custom reports",
        },
        {
            icon: <RiComputerLine />,
            description: "Regular communications: calls, emails, chats, personal meetings",
        },
    ];

    return (
        <section id="whyfox" className="bg-gray-100 py-16 px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl mb-12 text-center font-semibold">
                {" "}
                <span className="text-blue-600 ">Why</span> SumatoSoft logistics software development services
            </h1>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
                <div className="flex-1 ">
                    <h1 className="text-xl font-semibold mb-4 ">Experience</h1>
                    {experience.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 mt-1 mb-3">
                            <div className="text-blue-600 text-3xl">{item.icon}</div>
                            <p className="text-xl font">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-semibold mb-4 ">Speed</h1>
                    {speed.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 mt-1 mb-3">
                            <div className="text-blue-600 text-3xl">{item.icon}</div>
                            <p className="text-xl font">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-semibold mb-4 ">Control</h1>
                    {control.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 mt-1 mb-3">
                            <div className="text-blue-600 text-3xl">{item.icon}</div>
                            <p className="text-xl font">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Certifications = () => {
    return (
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





const FAQSection = () => {
    const mvpFaqs = [
        {
            question: "When do you need custom transportation app software development?",
            answer: (
                <>
                    <p>
                        The most simple wat to answer this question is to look at your business and ask yourself two
                        questions:{" "}
                    </p>
                    <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                            <span className=" mt-1">1.</span>
                            <span>Do I see options on how to improve my business? </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className=" mt-1">2.</span>
                            <span>
                                Do I see bottlenecks that are impossible to solve purely with the processes changes?{" "}
                            </span>
                        </li>

                        <p>
                            If the answer at lest on one of this question is yes, your business definitely needs an app or
                            website.
                        </p>
                    </ul>
                </>
            ),
        },
        {
            question:
                "Do you work with existing transportation and logistics software or only develop solutions from scratch?",
            answer: (
                <>
                    <p>
                        We work both with existing transportation and logistics software and develop new custom logistics
                        software.
                    </p>
                    <p>
                        Regarding the improvement of existing software, we can reengineer the solution, run performance,
                        security, and usability tests to understand the quality of the app. We also can examine the code,
                        develop new models, or integrate the existing solution with other software.{" "}
                    </p>
                </>
            ),
        },

        {
            question: "What is your pricing model for logistics software development services?",
            answer: (
                <>
                <div className="space-y-6 leading-relaxed text-base">
                    <p>
                        We at foxsolution, work with 3 pricing models when building logistics projects: fixed price, time &
                        material, and dedicated team. The choice of the model depends on your project budget, business
                        goals, timelines, and other factors. You make the final choice of the model, we only advise on the
                        most suitable model for the specific logistics project. From our experience, 90% of our customers
                        prefer to cooperate using the price & material engagement model. Let’s discuss them
                    </p>

                    <h1>Fixed price</h1>
                    <p>
                        When the project scope is defined, we use a fixed price cost estimation model. Payments are made on
                        pre-defined milestones. 3 features characterize this pricing model: we work with a clearly defined
                        and unchangeable specification, the client and we approve the budget of the logistics software
                        development at the beginning of the project, and we agree upon deadlines. The fixed price model is
                        extremely rigid regarding any project scope, budget, or timeline changes.
                    </p>

                    <h1>Time & Material</h1>
                    <p>
                        Time & Material engagement model means billing is based on actual time worked by each team member.
                        This model is flexible to requirements change requests during the project development. 90% of our
                        clients find this model the most suitable for their logistics software development projects. This
                        model is tolerant to requirements, budget, and timeline changes. This model also guarantees that the
                        final application or website will meet your business requirements.
                    </p>

                    <h1>Dedicated team</h1>
                    <p>
                        Our software developers become a part of your team, which is being managed by your colleagues.
                        Billing is based on the hourly rates of the developers included in the dedicated team on a monthly
                        basis. This model is useful when you have well-established in-house management andthe project is
                        planned to be a long-lasting one
                    </p>
                    </div>
                </>
            ),
        },
        {
            question: "What is the major technology stack and cost towards logistics app development?",
            answer: (
                <>
                <div className="space-y-6 leading-relaxed text-base">
                    <p className="mt-1">
                        The <span className="font-semibold ">technology stack</span> for logistics software development can
                        include PHP, Python, JavaScript, SQL, Angular, Google Maps, Laravel, and here comes the list of
                        almost all other technologies for website and mobile app development. Instead of describing all
                        possible combinations of tech stack, we describe several aspects of logistics software development
                        and technologies we use for them.
                    </p>
                    <p className="mt-1">
                        Start with the most evident part of any software development project: every application or a website
                        needs front-end and back-end.<span className="font-semibold "> We prefer Ruby on Rails as a full stack development framework </span>
                        both for front- and backend. Rails is cheap, fast, and quality framework – so we picked it as our core
                        competence.
                    </p>
                    <p className="mt-1">
                        Sometimes we <span className="font-semibold ">  refer to other frameworks like AngularJS, ReactJS, React, Bootstrap.</span> We also use
                        languages for native iOS and Android development, but it’s no an often case.{" "}
                    </p>

                    <p className="mt-1">
                        One more thing to mention here is<span className="font-semibold "> mapping technologies. </span>The evident market leader is Google Map.
                        However, we also like a solution Maptitude.{" "}
                    </p>

                    <p className="mt-1">
                    <span className="font-semibold ">Regarding databases</span>, we prefer PostgreSQL, Redis, MySQL. And speaking about web server software: we
                        are experts at two most popular solutions, Apache and Nginx. Sometimes we also use Phusion Passenger
                        that easily integrates with the mentioned solutions.
                    </p>

                    <p className="mt-1">
                        To continue, we <span className="font-semibold ">use Amazon Web Servers as a main cloud solution </span>to run logistics app.{" "}
                    </p>

                    <p className="mt-1">
                        Finally, we can empower the website with artificial intelligence, machine learning, and big data
                        technologies.
                    </p>

                    <p className="mt-1">
                        This is the core tech stack. <span className="font-semibold ">It allows to build almost any logistics solution that requires such
                        things like:</span>
                    </p>
                    <ul className="mt-1">
                        <li className="mt-1">
                          
                            <span className="text-blue-600 mt-1">✓</span> <span> real-time location tracking using geotags;</span>
                        </li>
                        <li className="mt-1">
                            
                            <span className="text-blue-600 mt-1">✓</span><span> route visualization;</span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> freights cost calculations;</span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> processing and storing of large data sets;</span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> interactive dashboards;</span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> traffic and route optimization;</span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span>;<span> fuel tracking</span> 
                        </li>
                        <li className="mt-1">
                         
                            <span className="text-blue-600 mt-1">✓</span><span> M2M communication;</span> 
                        </li>
                        <li className="mt-1">
                            
                            <span className="text-blue-600 mt-1">✓</span> <span> and more.</span> 
                        </li>
                    </ul>
                    <p className="mt-1 ">
                       
                        The final cost of custom logistics software and app development services depends on 5 key factors:
                        target platform and devices, feature scope, UX/UI, team size, and location. The average price range
                        for a full-fledged application will be between $100.000 and $300.000, while MVP development (the
                        initial version of a mobile app) will require $10.000 – $50.000.
                    </p>
                    </div>
                </>
            ),
        },
    ];

    return (
        <section id="faq" className="px-4 mb-16">
            <FAQ faqs={mvpFaqs} />
        </section>
    );
};

const LogisticsSoftware = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const contentsMenu = [
        { title: "IT services we offer", id: "services" },
        { title: "Custom logistics software we make", id: "custom-logistics" },
        { title: "Advance your logistics software", id: "advance" },
        { title: "The way we develop software", id: "wedevlop" },
        { title: "Software we developed", id: "softwarewe" },
        { title: "Why SumatoSoft", id: "whyfox" },
        { title: "Awards & Recognitions", id: "Awards" },
        { title: "Awesome stories", id: "stories" },
        { title: "FAQ", id: "faq" },
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
                                className={`text-lg p-3 rounded-lg transition-colors cursor-pointer ${
                                    activeSection === item.id
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
                    <Customlogistics />
                    <Advancelogistic />
                    <Wedevelop />
                    <Transportationlogistics />
                    <SoftwateWedevelop />
                    <ReviewsSection />
                    <Whyfoxsolution />
                    <Certifications />
                    <Contact />
                    <StoriesSection/>
                    <FAQSection />
                </div>

                {/* Table of Contents - improved sticky behavior */}
                <div className="hidden lg:block lg:w-[23%]">
                    <div className="sticky top-24 ml-2 pr-1 pt-2">
                        <TableOfContents sections={contentsMenu} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default LogisticsSoftware;
