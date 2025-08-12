import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { TableOfContents } from '@/components/ui/TableOfContents'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CertificationsSection } from '@/components/ui/Certification';
import { BiShapeSquare } from "react-icons/bi";
import { AiOutlineRobot } from 'react-icons/ai';
import { FaHandHoldingUsd, FaRegCreditCard } from 'react-icons/fa';
import { FaHandsHolding } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { title } from 'process';
import TestimonialCarousel from '@/components/ui/reviewCarousel';



const HeroSection = ()=>{
    return( 
        <RevealOnScroll>   
    <section
        id="hero"
        className="relative  py-20 mb-12  bg-blue-950"
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
                      <BreadcrumbPage className="hover:text-white transition-colors duration-200">
                          
                          Financial software development
                      </BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
      </div>
        <div className="container mt-20 mx-auto px-4">
            <div className="max-w-3xl text-white ">
                <h1 className=" text-4xl md:text-5xl mb-4 font-light whitespace-nowrap">
                    <span className="text-blue-500"> Financial software</span> development company
                </h1>

                <p className="text-xl mb-8">
                At the intersection of innovation and expertise, SumatoSoft is redefining the financial technology landscape. 
                We provide bespoke software solutions that empower banks, fintech startups, and financial institutions to navigate 
                the digital age with confidence. 
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8'>
                    <ul>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> custom fintech software development;</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> fintech consultation services;</span>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> cybersecurity enhancement;</span>
                        </li>
                        <li className='flex items-start gap-2'>
                            <span className='text-blue-500 mt-1'>✔</span>
                            <span> advanced financial analytics solutions.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4 mt-10">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded">
                        Free quote
                    </button>
                    <div className="text-yellow-400 text-xl font-bold">
                        <p className='text-white   '>Clients rate our service</p>★★★★★ 5.0</div>
                </div>
            </div>
        </div>
    </section>
    </RevealOnScroll>

    )
}

const Imagesection =()=>{
    return(
        <RevealOnScroll>
        <section className=" p-8 mb-12">
    <div className="grid md:grid-cols-6 ">

    <img className="opacity-50 hover:opacity-100" src="/toyota.svg" />

    <img className="opacity-50 hover:opacity-100" src="/LPS.svg" />

    <img className="opacity-50 hover:opacity-100" src="/dai.svg" />

    <img className="opacity-50 hover:opacity-100" src="/dexai.svg" />

    <img className="opacity-50 hover:opacity-100" src="/Beie.svg" />

    <img className="opacity-50 hover:opacity-100" src="/mym.svg" />

    <div className="col-span-full flex justify-center">
      <img className="opacity-50 hover:opacity-100" src="/boxfor.svg" />
    </div>
</div>
</section>
</RevealOnScroll>

    )
}


const Measurables = ()=>{

    return(
        <RevealOnScroll>
        <section id='Measurable' className='bg-gray-100 py-16 px-6 md:px-12'>
            <div className='flex flex-row'>
                <div>
                    <h1 className='text-5xl font-light py-2 '> <span className='text-blue-600'>Measurable gains </span>from financial tech solutions:</h1>
                </div>

                <div className='m-4'>
                    <p className='m-1 text-lg py-2 text-gray-700'>Financial software delivers measurable results, including significant efficiency gains of 50-70%
                     in transaction processing time, a 20-30% reduction in operational costs, and 30-50% fewer human 
                     errors in financial transactions. Enhanced data security minimizes data breaches and cyber threats 
                     while businesses notice 20-30% improvement in data processing efficiency and revenue growth of 10-15%.
                    </p>
                    </div>
            </div>
        </section>
        </RevealOnScroll>
        
    )
}


// Custom Software   Component
const CustomSoftware = () => {
    const cutomsoftware = [
        {
            title: "Banking software",
            description:
                "We develop comprehensive banking software tailored for core banking functions, online and mobile banking. Our solutions ensure seamless, secure, and efficient banking experiences for both banks and their customers. ",
            image: "/banking.JPG",
        },
        {
            title: "Payment processing systems",
            description:
                "Our payment processing systems can handle electronic transactions with ease. This includes credit/debit card processing and mobile payment solutions, providing secure and efficient transaction processing capabilities.",
            image: "/paymentprocess.JPG",
        },
        {
            title: "Financial management and accounting",
            description:
                "We offer sophisticated solutions for financial management and accounting. Our software supports functions like accounting, budgeting, financial reporting, and audit management, helping businesses maintain accuracy and compliance.",
            image: "/financialmanagement.JPG",
        },
        {
            title: "Trading and investment platforms",
            description:
                "We develop intuitive trading and investment platforms for stock trading, portfolio management, and financial analytics. These platforms are designed to provide real-time insights and tools for effective investment decision-making.",
            image: "/Trading.JPG",
        },
        {
            title: "Risk management systems",
            description:
                "Our risk management systems are engineered to provide comprehensive risk assessment, compliance management, and fraud detection tools. These systems help financial institutions to maintain integrity and regulatory compliance.",
            image: "/riskmanagement.JPG",
        },
          {
            title: "Insurance software",
            description:
                "We create insurance software that streamlines policy management, underwriting, claims processing, and customer relationship management. Our solutions are designed to enhance the efficiency and effectiveness of insurance operations.",
            image: "/insurance.JPG",
        },
          {
            title: "Regulatory and compliance software",
            description:"We provide regulatory and compliance software solutions that help financial institutions adhere to financial regulations and standards like KYC and AML. Our software ensures that compliance is integrated seamlessly into business processes.",
            image: "/Regulatory.JPG",
        }
     ];

    return (
        <RevealOnScroll>
        <section id="Cutting-edge" className="mx-2 my-10">
            <h1 className="text-4xl  font-normal mb-1 whitespace-nowrap p-8 text-center">
                 <span className="text-blue-500">Cutting-edge solutions</span> for different financial domains 
            </h1>
            <p className='text-2xl text-gray-700 mb-10'>At Foxsolution, we are dedicated to crafting a wide range of specialized software solutions that cater to various aspects of financial domains and operations.</p>

            <div className="grid md:grid-cols-2 gap-4   ">
                {cutomsoftware.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row bg-gray-100 overflow-hidden ">
                        <div className="p-2 flex-1">
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


const Ourresponse=()=>{
    const ourresponse = [
        {
            icon:<BiShapeSquare className="text-blue-500 text-4xl" />,
            title:"Blockchain technology",
            description: "Blockchain is rapidly gaining prominence for its ability to provide unparalleled security and transparency in financial transactions. At SumatoSoft, we’re harnessing blockchain’s potential to revolutionize financial transactions, enhancing security, transparency, and efficiency in payments, remittances, and smart contracts.",

        },
             {
            icon:<AiOutlineRobot  className="text-blue-500 text-4xl"/>,
            title:"Artificial intelligence and machine learning",
            description: "AI and ML are transforming all economic sectors. We leverage AI and ML at SumatoSoft to offer personalized financial services, including advanced fraud detection, risk management, and customer service enhancements like intuitive chatbots.",

        },
             {
            icon:<FaHandHoldingUsd  className="text-blue-500 text-4xl" />,
            title:"Lending automation",
            description: "Automation in lending is reshaping the loan industry, making processes faster and more efficient. SumatoSoft’s lending automation streamlines the entire lending process, enhancing speed, accuracy, and compliance, and is particularly relevant in the growing online lending market.",

        },
             {
            icon:<FaHandsHolding className="text-blue-500 text-4xl" />,
            title:"Regulatory technology",
            description: "The increasing complexity of financial regulations has spurred the growth of RegTech for better compliance management. Our RegTech solutions at SumatoSoft simplify compliance, providing tools to manage regulatory complexities in a cost-effective manner.",

        },
             {
            icon:<FaRegCreditCard  className="text-blue-500 text-4xl"/>,
            title:"Digital payments and mobile wallets",
            description: "The global shift towards digital and mobile payment solutions is redefining how transactions are conducted. We offer advanced digital payment and mobile wallet solutions, aligning with the trend towards cashless transactions, including contactless and cryptocurrency payments.",

        },
             {
            icon:<GiReceiveMoney className="text-blue-500 text-4xl" />,
            title:"Sustainable and socially responsible investing (SRI) platforms",
            description: "There's a growing investor interest in aligning financial goals with personal values, leading to the rise of SRI platforms. SumatoSoft creates platforms focused on sustainable, ethical, and socially responsible investing, catering to this increasing demand for impact investing.",

        },
    ];

    return(
        <RevealOnScroll>
        <section id='Our-response' className="mx-2 my-10">
            <h1 className="text-4xl font-normal mb-1 whitespace-nowrap p-8 text-center">
                <span className='text-blue-500'>Tomorrow’s finance: </span> our response to emerging trends

            </h1>
            <p className='text-center text-gray-700 mb-1'>We closely monitor and analyze emerging trends, integrating cutting-edge technologies into our solutions, and continually developing new offerings to meet the evolving demands of the financial industry. Here is what we offer: </p>

            <div className='grid md:grid-cols-2 gap-6  '>
                {ourresponse.map((item,index) => (
                    <div key={index} className='mb-16'>
                        <div className='text-blue-600 text-3xl'>{item.icon}</div>
                        <h1 className= 'text-2xl font-normal mb-2'>{item.title}</h1>
                        <p className='leading-relaxed text-gray-700'>{item.description}</p>
                        </div>

                ))}

            </div>
        </section>
        </RevealOnScroll>
    )


};


const WhyFox =()=>{
    const fox=[
        {
            description:( <p><span className='font-medium'>Robust security measuresWe </span> adhere to industry-leading cybersecurity standards and hold the ISO 27001 certification. Our approach is in full compliance with financial industry regulations, including GDPR, HIPAA, and PCI DSS, ensuring that your data meets the strictest security standards.We employ end-to-end encryption protocols to protect data in transit and at rest, and our regular security assessments and vulnerability testing guarantee continuous protection against emerging threats.
            </p>
            )
        },
        {
            description: (<p>
                <span className='font-medium'>Excellence in development</span>70% of our team are senior-level backend engineers who constantly boost their skills through workshops, seminars, and courses. Moreover, we put a lot of effort into establishing effective management and development processes and hold the ISO/IEC 27001 certification. We guarantee a solid commitment to deadlines, budget, and the quality of our work.
            </p>) 
        },
        {
            description:(<p>
                <span className='font-medium'>Embracing modern technologies </span>Embracing modern technologiesAt SumatoSoft, we integrate cutting-edge technologies like IoT, Big Data, AI/ML, AR/VR, and blockchain into financial software development. Our focus is on building future-proof solutions that enhance customer experiences, ensure data security, and provide real-time insights. With SumatoSoft, your financial software is powered by the latest advancements in technology, setting you on a path to success in the ever-evolving financial landscape.
            </p>)
        },
    ]

    return(
        <RevealOnScroll>
        <section  className="mx-2 my-10 bg-gray-100">
            <h1 className="text-4xl  font-bold mb-1 whitespace-nowrap p-8 text-center">
            <span className='text-blue-500'>Why</span> Foxsolution?
            </h1>
            <div className="flex flex-col md:flex-row gap-6 mt-6 items-start">
            <div className="w-full md:w-1/2 space-y-4">
            {fox.map((item,index)=>(
                <ul key={index}>
                    <li className='flex items-start text-lg text-gray-700  leading-relaxed'>
                    <span className="text-blue-600 text-lg  mt-1 mr-2">  ✓  </span>
                        {item.description}
                    </li>
                </ul>

            ))}
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/whyfoxsolutions.png"
                        alt="Logistics Illustration"
                        className="w-full max-w-md rounded-lg shadow-md"
                    />
                </div>
            </div>

        </section>
        </RevealOnScroll>
    )
}

const Reliablepartner =()=>{

    return(
        <RevealOnScroll>
        <section id='partner' className='mx-2 my-10'>
            <h1 className='text-3xl md:text-4xl font-normal mb-1 whitespace-nowrap p-8 text-center'>
            <span className='text-blue-500'>Your reliable</span> financial software <span className='text-blue-500'>development partner </span>

            </h1>
            <div>
            <p className=' leading-relaxed  text-center text-gray-700'>After more than 12 years on the market, we have become a reliable technical partner to our Clients. They value us as a financial software development company because of our properly set and transparent processes, commitment to predictable delivery, and trustworthy and open communication.</p>
            <p className='leading-relaxed  text-center text-gray-700'>We are evangelists of modern technologies that help companies to apply the best IT innovations to gain competitive benefits, improve their business efficiency and quality of services and products.</p>
            </div>
        </section>
        </RevealOnScroll>
    )
}

const FoxProfile = () => {
    return (
      <RevealOnScroll>
        <section id= "completed-projects" className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                  <div className="text-white mb-8 md:mb-0 max-w-2xl">
                    <h2 className="text-3xl font-semibold mb-4">
                    We at Foxsolution develop custom financial solutions for any challenges.
                    </h2>
                    <p className=" text-white-300">Get proof of our successfully completed projects in the profile.</p>
                  </div>
                </div>
              </section>
      </RevealOnScroll>
    );
  };



  const Whychoose =()=>{
    const whychoose =[
          { title: "98%", description: "User satisfaction rate" },
          { title: "200+", description: "Completed projects" },
          { title: "25+", description: "Countries" },
          { title: "70%", description: "Senior engineers" },
          { title: "3+", description: "Years of Clients' engagement" },
          { title: "10+", description: "Years on the market" }
    ];
    return( 
        <RevealOnScroll>
        <section id='whyfox'  className='px-4 mx-auto max-w-screen-xl' >
            <h1 className='text-3xl md:text-4xl font-normal mb-1 mt-4 p-8 text-center'>
            Why companies choose <span className='text-blue-500'> Foxsolution </span> for their financial projects.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {whychoose.map((item,index)=>(
                <div key={index}className="bg-white border border-gray-200 p-6  text-center">
                    <h1 className="text-blue-500 text-5xl font-normal mb-2">{item.title}</h1>
                    <h2 className=" text-base">{item.description}</h2>
                    </div>
               ))} 

               
                </div>
        </section>
        </RevealOnScroll>
    )
  };


  
  const SuccessStories =()=>{
    const wedevelop = [
        {
            title: "Custom ERP system for Toyota car dealer",
            description:
                "The custom ERP system Scalex was implemented in 20 centers across the globe.It automates key business processes for car dealers: sales of cars,inventory,the car's service maintenance",
            image: "/lap2.webp",
            bgColor: "bg-red-600",
        },
      
        {
            title: "Graphical user interface for robot operation",
            description:
            "Foxsolution developed a graphic user interface(GUI) that helps to communicate with the robot Alfred, an automated robotic arm",
            image: "/lap4.webp",
            bgColor: "bg-blue-900",
        },

        {
            title: "Enhancing medical transportation platform that operates in 26 states of the USA",
            description:
            "Two years of collaboration to enhance the platform of a leading medical transportation service provider in the USA and United Knigdom",
            image: "/lap5.png",
            bgColor: "bg-indigo-900",
        },
    ];

    return (
        <RevealOnScroll>
        <section id="stories" className="p-8 mb-12">
            <h1 className="text-4xl md:text-5xl mb-8 text-center font-medium">
            Success stories of our<span className="text-blue-600 font-semibold"> Clients </span>
            </h1>

            <div className="space-y-6 ">
                {wedevelop.map((work, index) => (
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
                <div className="text-center">
                <a href="#" className=' text-red-500 text-center' >View all Products </a>
                </div>
               
            </div>
        </section>
        </RevealOnScroll>
    );

  }







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

const GetInTouch = () => {
    return (
      <RevealOnScroll>
        <section id="your-project" className="py-16 px-4 bg-[#f6f8fc]">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Form */}
            <div>
              <h2 className="text-4xl font-light mb-10">Your project starts here.</h2>
  
              {/* Info Icons */}
              <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="flex items-start gap-2">
                  <img src="../bigdataanalyticsandiotdevelopment/nda.svg" alt="NDA Icon" className="h-6 mt-1" />
                  <p className="text-sm">We’re ready to sign NDA</p>
                </div>
                <div className="flex items-start gap-2">
                  <img src="../bigdataanalyticsandiotdevelopment/rfp.svg" alt="RFP Icon" className="h-6 mt-1" />
                  <p className="text-sm">RFP analysis is absolutely free</p>
                </div>
                <div className="flex items-start gap-2">
                  {/* <img src="../bigdataanalyticsandiotdevelopment/24hrs.svg" alt="24 Hours Icon" className="h-6 mt-1" /> */}
                  <p className="text-sm">We will respond to you within 24 hours</p>
                </div>
              </div>
  
              {/* Form */}
              <form className="space-y-6">
                <div>
                  <label className="block mb-1 text-sm font-medium">My Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Email Address*</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Message*</label>
                  <textarea
                    required
                    placeholder="Tell us about your projects"
                    className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
                  />
                </div>
  
                {/* Checkbox and Submit Button Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" required className="accent-red-500" />
                    <label className="text-sm">
                      Agree with <span className="text-red-500 cursor-pointer">Privacy policy</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FF4155] hover:bg-red-600 text-white font-semibold px-8 py-3"
                  >
                    Get in Touch
                  </button>
                </div>
              </form>
  
              {/* Manager Info */}
              <div className="mt-10 border-t pt-6">
                <div className="flex items-center gap-3">
                  <img src="../bigdataanalyticsandiotdevelopment/dummyperson.webp" alt="Manager" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-medium">Elizabeth Khrushchynskaya</p>
                    <p className="text-sm text-gray-500">Account Manager</p>
                  </div>
                </div>
                {/* Book Button below */}
                <button className="mt-6 border border-red-500 text-red-500 px-4 py-2 text-sm flex items-center gap-2">
                  <span className="material-icons"></span> Book a consultation
                </button>
              </div>
            </div>
  
            {/* Right Side - Image & Address */}
            <div className="flex flex-col items-center">
              <img src="../bigdataanalyticsandiotdevelopment/buildings.png" alt="Office Building" className="w-full mb-6" />
              
            </div>
          </div>
        </section>
      </RevealOnScroll>
    );
  };



const FinantialSoftware = () => {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const contentsMenu = [
        { title: "Measurable gains", id: "Measurable" },
        { title: "Cutting-edge solutions", id: "Cutting-edge" },
        { title: "Our response to emerging trends", id: "Our-response" },
        { title: "Your reliable partner ", id: "partner" },
        { title: "Get proof of our successfully completed projects", id: "completed-projects" },
        { title: "Why companies choose Foxsolution", id: "whyfox" },
        { title: "Success stories of our Clients", id: "stories" },
        { title: "Our Awards & Recognitions", id: "Awards" },
        { title: "Our Clients talk about us", id: "about-us" },
        { title: "Your project starts here", id: "your-project" },
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
                    <Imagesection/>

                    <Measurables/>

                    <CustomSoftware/>

                    <Ourresponse/>
                    
                    <WhyFox/>

                    <Reliablepartner/>

                    <FoxProfile/>

                    <Whychoose/>

                    <SuccessStories/>

                    <Certifications/>

                    <ReviewsSection/>

                    <GetInTouch/>

                    

                    
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

export default FinantialSoftware