import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Code, Puzzle, MessageSquare } from "lucide-react";
import { DollarSign, BarChart2, Layers, Rocket, FileText } from 'lucide-react';
import { useState } from 'react';
import { TableOfContents } from "@/components/ui/TableOfContents";
import TestimonialCarousel from "@/components/ui/Testimonial";
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/ui/faq";
import { Link } from "react-router-dom";
const Herosection = () => {
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
                                        Advance-tech
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="container mx-auto mt-20 px-4">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-light mb-4">
                                <span className="text-blue-600">AdTech software</span> development services
                            </h1>

                            <p className="mt-6 text-gray-800 text-lg">
                                Businesses use AdTech solutions to acquire new users, enhance the engagement of
                                existing users, and improve the ROI of marketing and sales efforts. With 3+ years
                                in AdTech and 4+ years in custom software development, Foxsolution delivers
                                solutions that offer new interaction opportunities to your customers.
                            </p>

                            {/* ✔ Tick Points */}
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-900 font-medium">
                                <p>✓ CRM Software;</p>
                                <p>✓ marketing automation;</p>
                                <p>✓ email marketing;</p>
                                <p>✓ sales & marketing analytics.</p>
                            </div>

                            {/* 🎯 Call to Action & Rating */}
                            <div className="mt-8 flex items-center gap-6">
                                <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold px-5 py-2  transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                                    Free quote
                                </button>
                                <div className="flex items-center text-yellow-900 text-lg font-semibold">
                                    <span className="mr-1">⭐⭐⭐⭐⭐</span>
                                    <span>5,0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        </>
    );
};

const ServicsSection = () => {
    return (
        <RevealOnScroll>
            <section id="advance-martech" className="w-full mt-6 relative py-28 px-6 md:px-20 text-white overflow-hidden bg-gradient-to-b from-[#060C22] to-[#0A1E4A]">
                {/* Dark overlay for shading at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d1b2a] to-transparent z-10" />

                <div className="relative z-20 max-w-7xl mb-12 pt-6 mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                        AdTech and MarTech development <span className="text-blue-500">services</span><br />
                        you may need
                    </h1>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {/* Card 1: Product Development */}
                        <div className="flex flex-col items-start space-y-4">
                            <Code size={36} className="text-white" />
                            <h3 className="text-xl font-bold">Product development</h3>
                            <p className="text-sm text-gray-300">
                                We offer a full range of custom marketing software development, with a special
                                emphasis on solutions that cater to the unique demands and regulatory
                                requirements of the US advertising industry.
                            </p>
                        </div>

                        {/* Card 2: 3rd Party Integration */}
                        <div className="flex flex-col items-start space-y-4">
                            <Puzzle size={36} className="text-white" />
                            <h3 className="text-xl font-bold">3rd party integration</h3>
                            <p className="text-sm text-gray-300">
                                Google Analytics, Clarity, Salesforce, other platforms you use. Our expertise
                                extends to integrating third-party services with existing or building new
                                software with integrations, focusing on platforms commonly used in the US market.
                            </p>
                        </div>

                        {/* Card 3: Consulting */}
                        <div className="flex flex-col items-start space-y-4">
                            <MessageSquare size={36} className="text-white" />
                            <h3 className="text-xl font-bold">Consulting</h3>
                            <p className="text-sm text-gray-300">
                                We study your marketing processes and business goals, then tell what advertising
                                technologies you should use. We then integrate and customize the marketing
                                platform so you can better use your advertising campaigns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}
const AdTechTabs = () => {
    const [activeTab, setActiveTab] = useState<'startups' | 'business'>('startups');

    return (
        <RevealOnScroll>
            <section id="software-develop">

                <div id="adtech-section" className="flex flex-col lg:flex-row bg-gray-50 my-8 rounded-lg shadow-sm overflow-hidden">
                    {/* Left column - Full width on mobile, half on desktop */}
                    <div className="w-full lg:w-1/2 p-6 lg:p-16">
                        <div className="max-w-md mx-auto lg:mx-0">
                            <h4 className="text-2xl sm:text-4xl lg:text-6xl font-normal -mt-4">
                                <span className="text-black">AdTech</span><br />
                                <span className="text-blue-500">software</span><br />
                                <span className="text-black">we develop</span>
                            </h4>

                            <p className="mt-6 text-gray-700 text-base lg:text-lg">
                                Let's unite our marketing and custom software development expertise and
                                your business idea to build a state-of-the-art AdTech or MarTech
                                platform! Together we'll find the most suitable application type for
                                your business idea and build it. Here is how we do it.
                            </p>
                        </div>
                    </div>

                    {/* Right column - Full width on mobile, half on desktop */}
                    <div className="w-full lg:w-1/2 p-6 lg:p-16">
                        {/* Tabs - More touch-friendly on mobile */}
                        <div className="flex border-b mb-6 lg:mb-8">
                            <button
                                className={`pb-3 lg:pb-4 px-4 lg:px-8 text-sm lg:text-base font-medium transition-colors duration-200 ${activeTab === 'startups'
                                    ? 'text-blue-600 border-b-2 border-blue-500'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => setActiveTab('startups')}
                                aria-selected={activeTab === 'startups'}
                                role="tab"
                            >
                                FOR STARTUPS
                            </button>
                            <button
                                className={`pb-3 lg:pb-4 px-4 lg:px-8 text-sm lg:text-base font-medium transition-colors duration-200 ${activeTab === 'business'
                                    ? 'text-blue-600 border-b-2 border-blue-500'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => setActiveTab('business')}
                                aria-selected={activeTab === 'business'}
                                role="tab"
                            >
                                FOR BUSINESS
                            </button>
                        </div>

                        {/* Content for Startups Tab */}
                        {activeTab === 'startups' && (
                            <div className="text-gray-700 animate-fadeIn">
                                <p className="mb-6">
                                    We help startups and marketing agencies to launch their own
                                    AdTech solutions to the market, including but not limited to the
                                    following types of applications:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>research & analysis software;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>real-time bidding (RTB);</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>programmatic direct;</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>email marketing software;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>sales automation;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>workflow automation software;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Big Data analysis.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Content for Business Tab */}
                        {activeTab === 'business' && (
                            <div className="text-gray-700 animate-fadeIn">
                                <p className="mb-6">
                                    There are thousands of ready-made AdTech solutions online.
                                    However, sometimes a custom AdTech solution may bring much
                                    more value. Our experts can build AdTech and MarTech custom
                                    solutions of any complexity.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>market & competitors research solutions;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>customer relationship management;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>demand side platform;</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>workflow automation software;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>revenue management software;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>loyalty software;</span>
                                        </div>

                                        <div className="flex items-start mb-4">
                                            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>data analysis solutions.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};

const Recentworks = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const solutions = [
        {
            id: 1,
            name: "MEDIATRON",
            description: "Online advertising management platform",
            longDescription: "A professional web service for digital marketers who want to optimize and reduce PPC budgets by 25-40% and automate the daily routine of PPC campaign management.",
            image: "https://sumatosoft.com/wp-content/uploads/2023/02/Image-Mediatron.png",
            bgColor: "bg-red-800",
            hoverBgColor: "bg-red-700"
        },
        {
            id: 2,
            name: "Rivalfox",
            description: "Intelligent marketing tracking tool modernization",
            longDescription: "The Client's in-house marketing product automation: SummaRank optimized performance, reduced server load and costs, and developed a new analytics system for competitor analysis.",
            image: "https://sumatosoft.com/wp-content/uploads/2023/02/RivalFox-Main-image.png",
            bgColor: "bg-blue-900",
            hoverBgColor: "bg-blue-800"
        },
        {
            id: 3,
            name: "fuelz",
            description: "Web aggregator of local heating oil prices",
            longDescription: "An independent web aggregator where both organizations and people would be able to find heating oil from local suppliers in various amounts at the best price and order delivery.",
            image: "https://sumatosoft.com/wp-content/uploads/2023/01/fuelz-main-screen-image-perspr.png",
            bgColor: "bg-purple-700",
            hoverBgColor: "bg-purple-600"
        }
    ];
    return (
        <RevealOnScroll>
            <section id="adtech-made" className="mb-6">
                <div className="flex flex-col max-w-6xl mx-auto mt-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold">
                            Latest AdTech <span className="text-blue-500">solutions</span> we made
                        </h1>
                    </div>

                    <div className="flex flex-col gap-4">
                        {solutions.map((solution, index) => (
                            <div
                                key={solution.id}
                                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${hoveredCard === index ? solution.hoverBgColor : solution.bgColor}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                                    {/* Text Section */}
                                    <div className="md:w-1/2 px-4 py-4 text-white">
                                        <h2 className="text-xl md:text-2xl font-bold mb-2">{solution.name}</h2>
                                        <h3 className="text-base md:text-lg mb-3">{solution.description}</h3>
                                        <p className="text-sm md:text-base">{solution.longDescription}</p>
                                    </div>

                                    {/* Image Section with no padding */}
                                    <div className="md:w-1/2 m-0 flex justify-start md:justify-start">
                                        <div className={`transition-transform duration-300 w-screen md:w-full ${hoveredCard === index ? 'scale-95' : 'scale-100'}`}>
                                            <img
                                                src={solution.image}
                                                alt={solution.name}
                                                className="w-full h-[300px] object-cover m-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );

}

const AdTechSolutions = () => {
    return (
        <RevealOnScroll>
            <section id="adtech-solution">
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-2 md:p-10">
                    <div className="max-w-7xl mx-auto"> {/* increased from 6xl to 7xl */}
                        {/* Header */}
                        <div className="text-center mb-12 pt-10">
                            <h3 className="text-lg md:text-4xl font-bold mb-4"> {/* decreased from text-1xl/text-6xl */}
                                Reach your <span className="text-blue-400">goals</span> with AdTech solutions
                            </h3>
                            <p className="text-base md:text-lg max-w-4xl mx-auto">
                                The opportunities that custom AdTech software opens to businesses are endless. As one of the top AdTech
                                software companies, Foxsolution services help companies to optimize their sales and marketing strategy, set and
                                reach new business goals.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                            {/* Feature Items */}
                            {[
                                {
                                    Icon: DollarSign,
                                    title: "Reduce costs",
                                    desc: "Pay no commission to any third-party vendor taking your marketing and advertising processes in-house.",
                                },
                                {
                                    Icon: BarChart2,
                                    title: "Analyze data",
                                    desc: "Turn unprocessed information into valuable insights with Big Data analysis and machine learning.",
                                },
                                {
                                    Icon: Layers,
                                    title: "Coordinate work",
                                    desc: "Synchronize your sales and advertising campaigns with the tools reflecting your processes.",
                                },
                                {
                                    Icon: Rocket,
                                    title: "Boost strategy",
                                    desc: "Improve the success rate of your online and offline advertising activities with up-to-date tools.",
                                },
                                {
                                    Icon: FileText,
                                    title: "Control budget",
                                    desc: "Gain total control over your data and costs associated with the whole marketing expenses.",
                                },
                            ].map(({ Icon, title, desc }, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="mb-4 bg-blue-900 bg-opacity-50 p-4 rounded-full"> {/* reduced padding */}
                                        <Icon size={36} className="text-white" /> {/* reduced from 48 to 36 */}
                                    </div>
                                    <h2 className="text-xl font-bold mb-2">{title}</h2> {/* slightly reduced from 2xl */}
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};

const FAQSection = () => {
    const AdTechFaq = [
        {
            question: "What is AdTech software?",
            answer: "AdTech (Advertising Technology) software consists of tools and platforms that facilitate digital advertising, including ad targeting, bidding, and campaign management."
        },


        {
            question: "What is an example of AdTech?",
            answer: "An example of AdTech is a Demand Side Platform (DSP), which allows advertisers to buy ad inventory programmatically across various ad exchanges."
        },
        {
            question: "What is AI and machine learning services?",
            answer: "AI and machine learning services provide solutions that leverage AI and ML techniques to develop intelligent systems for various applications like data analysis, prediction, and automation."
        },
        {
            question: "Is AdTech part of MarTech?",
            answer: "Yes, AdTech is a subset of MarTech (Marketing Technology) as it focuses specifically on digital advertising and its associated technologies."
        },
        {
            question: "What are AdTech software examples?",
            answer: "Examples include Google Ads, The Trade Desk, MediaMath, and AppNexus, providing various advertising solutions, such as DSPs, SSPs, and ad exchanges."
        },
        {
            question: "Is AdTech a SaaS?",
            answer: "Many AdTech platforms are offered as Software-as-a-Service (SaaS), providing cloud-based access to advertising tools and resources for users.",
        },

    ];

    return (
        <section id="faq" className="px-4 mb-16">
            <FAQ faqs={AdTechFaq} />
        </section>
    )
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

const AdvaceTech = () => {
    const contentsMenu = [
        { title: 'AdTech and MarTech development', id: 'advance-martech' },
        { title: 'AdTech software we develop', id: 'software-develop' },
        { title: 'AdTech solutions we made', id: 'adtech-made' },
        { title: 'AdTech solutions', id: 'adtech-solution' },
        { title: 'Awards & Recognitions', id: 'awards' },
        { title: 'Awsome stories', id: 'stories' },
        { title: 'FAQ', id: 'faq' },
    ];



    return (
        <>
            <Navbar />
            <Herosection />
            <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 md:px-8">
                {/* Main content column */}
                <div className="w-full lg:w-[78%] px-2"> {/* Increased main content width */}
                    <ServicsSection />
                    <AdTechTabs />
                    <Recentworks />
                    <AdTechSolutions />

                    <section id="reviews" className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4 mt-2">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                What Our <span className="text-blue-600">Clients Say</span>
                            </h2>
                            <TestimonialCarousel />
                        </div>
                    </section>

                    <section id="awards">
                        <div className='mb-6 w-auto'>
                            <CertificationsSection
                                heading={<> <span className="text-blue-500">Awards</span> & recognitions </>}
                                description="Foxsolutions has been recognized by the leading analytics agencies..."
                                imageSize="w-16 md:w-24"
                            />
                        </div>
                    </section>

                    <Contact />
                    <StoriesSection />
                    <FAQSection />
                </div>

                {/* Table of Contents column */}
                <div className="hidden lg:block lg:w-[22%] px-6"> {/* Shift ToC right with padding and reduced width */}
                    <div className="sticky top-24 overflow-y-auto pt-2">
                        <TableOfContents sections={contentsMenu} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdvaceTech;