import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { TableOfContents } from '@/components/ui/TableOfContents'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TbClockUp, TbHandClick, TbPresentationAnalytics } from "react-icons/tb";
import { MdSmartphone } from "react-icons/md";
import { FaGraduationCap, FaLaptopFile } from 'react-icons/fa6'
import { BiSolidJoystick } from 'react-icons/bi'
import { CiDesktopMouse1 } from 'react-icons/ci'
import { GrDocumentConfig, GrDocumentVerified, GrSystem } from 'react-icons/gr'
import { FaBookReader, FaLaptopCode } from 'react-icons/fa'
import { GiJigsawPiece, GiMightySpanner, GiPencilRuler } from 'react-icons/gi'
import { SiGoogleclassroom } from 'react-icons/si'
import FAQ from '@/components/ui/faq'
import { IoMdDocument } from 'react-icons/io'
import { LuFileSpreadsheet } from 'react-icons/lu'
import TestimonialCarousel from '@/components/ui/Testimonial'
import { CertificationsSection } from '@/components/ui/Certification'
import Contact from '@/components/home/Contact'
import { Link } from 'react-router-dom'


const HeroSection = ()=>{
    return( 
        <RevealOnScroll>   
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
                          Solutions
                      </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                      <BreadcrumbPage className="hover:text-red-600 transition-colors duration-200">
                          
                      EdTech software development services
                      </BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
      </div>
        <div className="container mt-20 mx-auto px-4 py-15">
            <div className="max-w-3xl">
                <h1 className=" text-4xl md:text-5xl font-light mb-4">
                eLearning software development
                    <span className="text-blue-500"> company</span> 
                </h1>

                <p className="text-xl mb-8">
                The world of eLearning software brings innovation to every aspect of the educational process 
                allowing teachers around the world to make it flexible, engaging and efficient.

                Our custom eLearning solutions are particularly effective in the United States, where students and 
                professionals alike seek remote, timely, and effective training to stay ahead in an ever-evolving 
                educational landscape.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8'>
                    <ul>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span>online courses software;</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> learning management systems (LMS);</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span>  learning gamification solutions;</span>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> management and administration software;</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> educational portals;</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> assessment and evaluation software.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4 mt-10">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded">
                        Free quote
                    </button>
                    
                </div>
            </div>
        </div>
    </section>
    </RevealOnScroll>

    )
}


const ElerningServices = () => {
    const [activeTab,setActiveTab] = useState("rd");

    const elerningServices =[
        {
            id:"rd",
            title:"R&D & Analysis",
            icon :<IoMdDocument className="text-blue-500 text-6xl" />,
            content:{
                title:"R&D & Analysis ",
                description: "Custom eLearning software development from scratch",
                items:[
                    "full cycle eLearning software development using an Agile methodology;",
                    "eLearning development for asynchronous / synchronous learning processes;",
                    "business needs analysis;",
                    "analysis of your content type to build the most relevant eLearning system;",
                    "storyboard development thinking through all points of interaction with learners;",
                    "prototypes development of a eLearning product;",
                    "coding and testing;",
                    "launch and post-release support."
                ],
                image:"/RD-Analysis.webp"
            }

        },

         {
            id:"eng",
            title:"Reengineering",
            icon :<GiPencilRuler  className="text-blue-500 text-6xl" />,
            content:{
                title:"Reengineering of the existing eLearning solutions",
                description: "",
                items:[
                    "eLearning process reengineering and optimization;",
                    "redesign and UX improvements of a eLearning solution;",
                    "refactoring legacy code;",
                    "cloud migration services;",
                    "quality audit and bug fix;",
                    "implementation of new eLearning functionality."
                ],
                image:"/App-Design.webp"
            }

        },

           {
            id:"fun",
            title:"Expand & functionality",
            icon :<GrDocumentConfig  className="text-blue-500 text-6xl" />,
            content:{
                title:"Expand the functionality of the current eLearning application",
                description: "",
                items:[
                    "transform the learning process with the innovative technologies (AI, VR, AR, big data);",
                    "work with both asynchronous and synchronous eLearning solutions;",
                    "develop, test, and deploy new eLearning features without affecting the learning process of current learners;",
                    "train admins and content makers on how to work with new features;",
                    "train admins and content makers on how to work with new features;"
                ],
                image:"/Web-Development.webp"
            }

        },
        
           {
            id:"cus",
            title:"Customization",
            icon :<GiMightySpanner  className="text-blue-500 text-6xl" />,
            content:{
                title:"Customization of the Off-The-Shelf eLearning solutions",
                description: "",
                items:[
                    "Elucidate the requirements for a eLearning solution;",
                    "help to find the optimal eLearning software template;",
                    "customize the educational templates to your learning user flow;",
                    "train admins and content makers on how to manage the eLearning software;",
                    "user onboarding;",
                    "launch and post-release support."
                ],
                image:"/QA-Testing.webp"
            }

        },
    ]

    const activeService = elerningServices.find(elerningServices => elerningServices.id === activeTab);

    return(
        <section id='Services' className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-8">
            <div>
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-2'><span className='text-blue-500'>Services</span> Foxsolution provides</h1>
                <div className='flex flex-wrap justify-center gap-4 md:gap-16 mb-16'>
                    {elerningServices.map((serv)=>(
                        <div key={serv.id}
                        className='flex flex-col items-center cursor-pointer group'
                        onClick={()=> setActiveTab(serv.id)}>
                            <div className={`w-24 h-24 flex items-center justify-center mb-2  ${activeTab === serv.id ? 'border-blue-500' : 'border-gray-700'} p-2 group-hover:bg-blue-900/30 transition-all duration-300`}>
                               
                                <div className={activeTab === serv.id ? 'text-blue-500' : 'text-gray-300 group-hover:text-blue-500'}>
                                {serv.icon}
                                </div>
                            </div>
                            {/* Service title */}
                            <p className={`text-sm font-medium text-center ${activeTab === serv.id ? 'text-blue-500' : 'text-gray-300 group-hover:text-blue-400'}`}>
                                {serv.title}
                            </p>
                        
                        </div>
                    ))}

                </div>
                        
                    {activeService &&(
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                             <div className="md:w-1/2">
                             <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeService.content.title}</h3>
                                <p className="mb-6 text-gray-300">{activeService.content.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-6">
                                    {activeService.content.items.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="text-blue-500 mr-2">✓</div>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                    ))}
                                </div>
                             
                             </div>
                              <div className="md:w-1/2">
                            <img
                                src={activeService.content.image}
                                alt={activeService.content.title}
                                className="rounded-lg shadow-lg w-full"
                            />
                            </div>
                        </div>
                    )}

            </div>
        </section>
    )
}




const ElearningSoftware = () => {
    const elerningsoftware = [
        { icon: <FaLaptopFile  size={32} />, title: "Learning management systems" },
        { icon: <FaGraduationCap  size={32} />, title: "Digital publishing platforms" },
        { icon: <BiSolidJoystick  size={32} />, title: "Social publishing and eLearning platform" },
        { icon: <CiDesktopMouse1  size={32} />, title: "Management and administration software" },
        { icon: <GrSystem  size={32} />, title: "Assessment and evaluation software" },
        { icon: <FaBookReader  size={32} />, title: "Online communication software" },
        { icon: <GrSystem  size={32} />, title: "Online Schooling" },
        { icon: <FaLaptopCode  size={32} />, title: "Asynchronous / Synchronous eLearning Platforms" },
        { icon: <GiJigsawPiece  size={32} />, title: "Pools and Quizzes" },
        { icon: <SiGoogleclassroom size={32} />, title: "Virtual Classrooms" },
    ];
    return (
        <section id='software-wedevelop'  className=" py-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl mb-4 font-light whitespace-nowrap">
                    eLearning   <span className="text-blue-500">software </span> we develop
                </h1>
               
                <div className="grid md:grid-cols-4 gap-6 mt-6">
                    {elerningsoftware.map((item, index) => (
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







const ElerningFeature = () =>{
    const elerningfeature =[
        {
            icon:<GrDocumentVerified   className="text-blue-500 text-5xl"/>,
            title:"Reliability, scalability & flexibility",
            content:[
                " ready to scale to a growing number of learners;",
                "fault-tolerant architecture designs;",
                "extendable and adjustable course builders."
            ]
        },
           {
           
            icon: <GiJigsawPiece  className="text-blue-500 text-5xl"/>,
            title:"3rd parties integrations",
            content:[
                "other platforms integrations, including eLearning software;",
                "secure data exchange;",
                "PCI DSS-compliant payments."
            ]
        },
           {
            icon:<TbHandClick  className="text-blue-500 text-5xl"/>,
            title:"Improved UX/UI",
            content:[
                "mobile-friendly design;",
                "clear navigation;",
                "streamlined interactions."
            ]
        },

        {
            icon:<LuFileSpreadsheet  className="text-blue-500 text-5xl"/>,
            title:"Regulations compliance",
            content:[
                "major eLearning standards, including SCORM, xAPI, and AICC;",
                "data privacy regulations (GDPR);",
                "accessibility guidelines and best practices (WCAG 2.1)."
            ]

        },
        
        
    ]
    return(
        <section id='develop' className='bg-blue-950 text-white py-16 px-4 md:px-8 mb-40'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-5'>
                Developing feature-rich eLearning <span className='text-blue-600 font-semibold' > software</span> 
            </h1 >
            

            <div className='grid md:grid-cols-2 gap-4 gap-6 text-center'>
                {elerningfeature.map((item,index)=>(
                    <div key={index}>
                        <div >{item.icon}</div>
                        <h1 className='text-2xl py-5 px-5 text-left'>{item.title}</h1>

                         <ul className='text-left pl-4'>
                            {item.content.map((point, pointIndex) => (
                                <li key={pointIndex} className='mb-2 '>
                                    <span className="text-blue-600 mt-1">✓  </span>
                                    
                                    {point}</li>
                            ))}
                        </ul>
                       
                    </div>
                ))}
                </div>    
         </section>
    )
}


const Customelerning = () =>{
    const elerning =[
        {
            icon:<TbPresentationAnalytics  className="text-blue-500 text-5xl"/>,
            title:"Automation & Analytics",
            description:"Teachers can track students’ or the whole class’s progress in real-time and build effective online communication thanks to analytics dashboards and a system of notifications."
        },
           {
           
            icon: <MdSmartphone className="text-blue-500 text-5xl"/>,
            title:"Mobility & Remote",
            description:"Let your students learn wherever they want. Your students have quick access to the educational materials they need. Using laptops, tablets or phones makes a comfortable classroom out of the whole world."
        },
           {
            icon:<TbClockUp className="text-blue-500 text-5xl"/>,
            title:"Time & Cost-efficiency",
            description:"eLearning software saves valuable time, resources and funds on task management and scheduling by providing high-end multi-functional solutions for students and teachers."
        },
    ]
    return(
        <section id='Custom-development' className='bg-blue-950 text-white py-16 px-4 md:px-8 mb-10'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-5'>
                Custom eLearning software development<span className='text-blue-600 font-semibold' > benefits</span> 
            </h1>
            <p className='text-center mb-10'>Whether you represent a private business, an educational or governmental institution, custom education software will significantly improve your organization’s performance. We develop software to automate educational processes and manage, analyze, and visualize data for better student academic performance and educational process management.
                </p>

            <div className='grid md:grid-cols-3 gap-6 text-center mt-20'>
                {elerning.map((item,index)=>(
                    <div key={index}>
                        <div>{item.icon}</div>
                        <h1 className='text-2xl py-5 px-5 text-left'>{item.title}</h1>
                        <p className='text-left'>{item.description}</p>
                    </div>
                ))}
                </div>    
         </section>
    )
}



 const Edtechsolution =()=>{
    const edtechsolution = [
        {
            title: "Language learning app with Ai-based personalization",
            description:
                "A web-based platform with AI features for learning foreign languages online through various types of material: real-time video lessons,text and media materials, online tests and exams.",
            image: "/lap6.webp",
            bgColor: "bg-red-600",
        },
      
        {
            title: "Crowdfunding & Project management platform",
            description:
            "It's a unique crowdfunding and project management platform for commercial and social enterprises.The platform connects people with ideas to people with skills and capital.",
            image: "/lap7.webp",
            bgColor: "bg-blue-900",
        },

        {
            title: "Web networking platform for online marketers",
            description:
            "A web platform for finding online marketing partners with multiple monetization ways,scalable architechture,advanced search & social network",
            image: "/lap8.webp",
            bgColor: "bg-indigo-900",
        },
    ];

    return (
        <RevealOnScroll>
        <section id="EdTech" className="p-8 mb-12">
            <h1 className="text-4xl md:text-5xl mb-8 text-center font-medium">
           EdTech <span className="text-blue-600 font-semibold"> solutions </span> we developed 
            </h1>

            <div className="space-y-6 ">
                {edtechsolution.map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 0.2}>
                        <div
                            className={` overflow-hidden shadow-lg hover:bg-gradient-to-r from-blue-900 from-[0%] via-pink-500 via-[49%]  to-blue-900 to-[100%] grid md:grid-cols-2  ${item.bgColor} text-white`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-6 h-full flex flex-col justify-center">
                                <h3 className="text-3xl font-light mb-3">{item.title}</h3>
                                <p className="mb-4">{item.description}</p>
                            </div>

                            
                        
                        </div>
                    </RevealOnScroll>
                ))}
               
            </div>
        </section>
        </RevealOnScroll>
    );

  }

const DevelopmentProcess = () => {
    const devlop = [
        {
            number: 1,
            title: "Product planning & assessment",
            description:
                "We analyze your eLearning process, business needs, learners’ needs and define project vision and objectives.",
        },
        {
            number: 2,
            title: "Software development",
            description:
                "During this stage, we define the learning process flow and draw user interfaces and a user journey. This step helps to test the eLearning application concept and groom the backlog.",
        },
        {
            number: 3,
            title: "MVP delivery & maintenance",
            description:
                "The design of final user interfaces. The design allows us to feel and touch the way the final eLearning app will look like. Here we define the look of the app.",
        },
        {
            number: 4,
            title: "Agile Development",
            description:
                "The application is developed in iterations so that the stakeholders’ feedback is frequently collected and the team adapts to change.",
        },
        {
            number: 5,
            title: "QA & Testing",
            description:
                "High eLearning app quality is achieved through multiple tests: functional, non-functional, integration, performance, regression, and more.",
        },
        {
            number: 6,
            title: "Support",
            description:
                "Post-release assistance in fixing and solving all kinds of emerging issues.",
        },
    ];
    return (
        <RevealOnScroll>
            <section id="process" className="mb-16">
                <div className="bg-vofox-darkBlue text-white p-8 min-h-screen flex flex-col items-center">
                    <div className="max-w-4xl w-full">
                        <h1 className="text-4xl font-bold mb-10 text-center">
                           EdTech software development  <span className="text-blue-400"> process </span>
                        </h1>
                        <p className='mb-2 mt-2'>We not only develop Minimum Viable Products for startups, but we also make them Minimum Valuable Solutions.</p>

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

const ReviewsSection = () => {
    return (
        <section id="about-us" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 mt-2">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <TestimonialCarousel />
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
            question: "What is an eLearning software?",
            answer: (
                <>
                    <p className='mt-13'>
                        An eLearning software is a software solution that enables learners to access training and educational materials that could be in the form of video, text or interactive training modules.
                    </p>
                    <p>There are many types of eLearning software solutions available.</p>

                    <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>Learning Management Systems (LMS); </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              Learning Content Management Systems (LCMS);
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                               Educational Course Authoring Tools;
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                               Educational Course Management Systems (CMS);
                            </span>
                        </li>

                        <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                               Knowledge management solutions;
                            </span>
                        </li>

                         <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                               Task management solution;
                            </span>
                        </li>

                         <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              Content management software;
                            </span>
                        </li>

                         <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              and more. 
                            </span>
                        </li>

                        <p>
                            Companies are looking to use eLearning software to cut down on the costs of training and learning their employees. It also provides an opportunity for companies to refresh their employees on safety procedures or other important information. An eLearning sphere also boosted the development of the learning process: the educational process became more interactive and engaging.
                        </p>

                        <p className='mt-5'>
                            Other benefits eLearning solutions offer are: 
                        </p>


                         <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                           Flexibility in terms of the learning process. Learners can take self-paced educational courses or start a synchronous educational course with other students to walk through the learning steps together. 
                            </span>
                        </li>
                           <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              Cost-effectiveness thanks to the fact that all activities of the learning process moved online. 
                            </span>
                        </li>
                           <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                             Continuous availability since learning platforms are available at any time from any location 
                            </span>
                        </li>
                           <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              Quick scalability thanks to cloud-based structure. The learning process will continue regarding the number of users on the platform.  
                            </span>
                        </li>
                           <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              Tailored to an individual’s or organization’s needs. The learning user flow can be easily customized to any needs. 
                            </span>
                        </li>
                           <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                              Make the learning process more effective.
                            </span>
                        </li>
                           <li className="flex items-start gap-2">
                            <span className=" mt-1">✔</span>
                            <span>
                             The best way to develop a well-performed Learning software is to refer to eLearning software service provider.  
                            </span>
                        </li>


                    </ul>
                </>
            ),
        },
        {
            question:
                "What is LMS software development?",
            answer: (
                <>
                    <p>
                        LMS means Learning management system. The learning management system development is the process of developing such an eLearning system. 
                    </p><br></br>
                    <p>
                        A Learning management system is software that manages, tracks, and reports on the progress of organizational training, education, and development of employees and other individuals. Learning Management Systems have been designed to help organizations manage the learning process and can include modules such as courseware, enrollment, grading, reporting and tracking. The eLearning development sphere boosted the development of the learning process. 
                    </p>
                    <br></br>
                    <p>
                        Learning management systems, perhaps, one of the most popular type of learning software that software development service providers build. The learning management system concept emerged direct from the eLearning concept.
                    </p>
                    <br></br>

                    <p>Learning management systems allow for analyzing data about training and skills gaps and creating reports to convey this information. Their development implies to identify these gaps in a learner’s skill set. LMSs are focused on delivering online lessons but have a variety of features, including content and features like classroom management. LMSs like Blackboard Learn may offer a range of ways to communicate with students, whether through video conferencing or asynchronous reading assignments. Some development services providers can integrate LMS with intelligent algorithms and make automated course recommendations based on skill levels. They can also support metadata extraction to make the algorithm’s suggestions even more accurate.</p>
                </>
            ),
        },

        {
            question: "How much does it cost to build eLearning software?",
            answer: (
                <>
               <p>The final cost of custom eLearning development services depends on 5 key factors: target platform and devices, feature scope, UX/UI, team size, and location. The average price range for education software development services will be between $100.000 and $300.000, while MVP eLearning development services (the alpha version of an eLearning application) will require $10.000 – $50.000. You can start your eLearning development with SumatoSoft if you contact us. </p>
                </>
            ),
        },
        {
            question: "Why Foxsolution?",
            answer: (
                <>
                <div className="space-y-6 leading-relaxed text-base">
                   
                    <ul className="mt-1">
                        <li className="mt-1">
                          
                            <span className="text-blue-600 mt-1">✓</span> <span> With 60 specialists on board and over 10 years in the market, we’ve honed our expertise by working closely with US businesses and educational institutions, understanding and addressing the unique challenges and opportunities they face.</span>
                        </li>
                        <li className="mt-1">
                            
                            <span className="text-blue-600 mt-1">✓</span><span> 150 successful projects built in 27 countries.</span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> We focus on long-term cooperation. 70% of our clients come back to us with another project. </span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> We build transparent cooperation: we communicate weekly, run demos of the work done, provide several contact points, send timesheet reports every month even if you don’t request them, explain potential risks and help to handle them, advise on the decisions, and help to avoid unnecessary costs. </span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> 70% of our team is senior-level developers and QA engineers who ensure the eLearning app complies with domain best practices and our inner quality assurance guidelines. Better quality means happier users. </span>
                        </li>
                        <li className="mt-1">
                           
                            <span className="text-blue-600 mt-1">✓</span><span> We are evangelists of modern technologies like the Internet of Things, Big Data, AI/ML, AR/VR, blockchain, etc. </span>
                        </li>
                        
                    </ul>
                    <p>Contact us to get a free quote regarding your eLearning development of a new custom solution or to optimize the existing learning application! </p>
                    
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
const EdTechSoftware = () => {
  
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const contentsMenu = [
        { title: "Services we provide", id: "Services" },
        { title: "eLearning software we develop", id: "software-wedevelop" },
        { title: "eLearning software we develop", id: "develop" },
        { title: "Custom development benefits ", id: "Custom-development" },
        { title: "EdTech solutions we developed", id: "EdTech" },
        { title: "EdTech development process", id: "process" },
        { title: "Our Awards & Recognitions", id: "Awards" },
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
                    <ElerningServices/>
                    
                    <ElearningSoftware/>
                    <ElerningFeature/>
                    <Customelerning/>
                    <Edtechsolution/>
                    <DevelopmentProcess/>
                    <ReviewsSection/>
                    <Certifications/>
                     <Contact />
                     <StoriesSection/>
                    <FAQSection/>
                   
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
  )
}

export default EdTechSoftware