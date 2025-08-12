import { useState, useCallback, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CertificationsSection } from '@/components/ui/Certification';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '../components/ui/reviewCarousel';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPaperclip } from 'react-icons/fi';
import { BsCalendar3 } from 'react-icons/bs';
import { FaRegClock } from "react-icons/fa"; 
const HeroSection = () => {
    return (
      <>
        {/* Hero Section with integrated breadcrumb - taking full viewport height */}
        <section id="hero" className="min-h-screen mb-20 flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
          <div className="container mx-auto px-6 py-24">
            {/* Breadcrumb Navigation */}
            <div className="max-w-4xl">
              <div className="flex items-center text-sm mb-8">
                <a href="/" className="text-gray-300 hover:text-white">Home</a>
                <span className="mx-2">›</span>
                <a href="/services" className="text-gray-300 hover:text-white">Services</a>
                <span className="mx-2">›</span>
                <span className="text-blue-300">QA services</span>
              </div>
  
              {/* Hero Content */}
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Software quality assurance and <span className="text-blue-400">testing</span> services 
              </h1>
  
              <p className="text-lg md:text-xl mb-12 max-w-3xl">
              We stand for a professional and holistic approach to Quality Assurance Services and the number of bugs reduced to zero before release.              </p>
  
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-10 py-4 rounded transition duration-300">
                  Free Quote
                </button>
  
                <div className="flex flex-col">
                    <span className="text-sm text-white mb-1">Clients rate our services</span>
                    <div className="flex items-center">
                        <div className="flex text-[#f5a623] text-base">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    <span className="ml-2 font-semibold text-[#f5a623] text-base">5,0</span>
                    </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
//--------------------------------------------------------Your benefits----------------------------------------------------------------------
const Benefits = () => {
    return (
      <RevealOnScroll>
        <section id="a" className="py-20  text-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
              <span className="text-blue-500 font-medium">Benefits</span> of quality assurance services with SumatoSoft
            </h2>
  
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
              
              {/* Feature 1 */}
              <div>
                <div className="mb-4">
                  <img src="../QAandTesting/Analyze-data-1.svg" alt="" className=" h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality proven with numbers</h3>
                <p className="text-sm text-gray-600">
                  We only release the software if it meets the specified percentage of acceptance criteria. The percentage is agreed upon with you in the quality assurance strategy.
                </p>
              </div>
  
              {/* Feature 2 */}
              <div>
                <div className="mb-4">
                  <img src="../QAandTesting/Transparent-work.svg"  alt="" className="h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">We work transparently</h3>
                <p className="text-sm text-gray-600">
                  We communicate weekly, run demos of the work done, provide several contact points, send timesheet reports every month even if you don’t request them, explain potential risks and help to handle them, advise on the decisions, and help to avoid unnecessary costs.
                </p>
              </div>
  
              {/* Feature 3 */}
              <div>
                <div className="mb-4">
                  <img src="../QAandTesting/Reduced-future-risks.svg" alt="" className="h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reduced future risks</h3>
                <p className="text-sm text-gray-600">
                  Tested software comes without critical bugs and blockers that can negatively affect further software development and use.
                </p>
              </div>
              
              {/* Feature 4 */} 
              <div>
                <div className="mb-4">
                  <img src="../QAandTesting/Award.svg"  alt="" className="h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">98% Client satisfaction rate</h3>
                <p className="text-sm text-gray-600">
                  This is the percent of our Clients that are satisfied with the quality assurance services we provide.
                </p>
              </div>
  
              {/* Feature 5 */} 
              <div>
                <div className="mb-4">
                  <img src="../QAandTesting/Senior-specialists.svg"  alt="" className="h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">70% of senior specialists</h3>
                <p className="text-sm text-gray-600">
                  SumatoSoft senior-level QA engineers ensure the app complies with domain best practices and our inner quality assurance guidelines. Better quality means happier users.
                </p>
              </div>
  
            </div>
          </div>
        </section>
      </RevealOnScroll>
    );
  };
  
 
//-------------------------------------------------QA & testing strategies----------------------------------------------------
const Testing = () => {
    const [activeTab, setActiveTab] = useState('startups');
  
    return (
        <RevealOnScroll>
            <section id="b" className="flex flex-col md:flex-row bg-gray-50 p-6 md:p-16 gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-light">
                    Quality <br /> assurance <br />
                    <span className="text-blue-600 font-medium">services</span> &
                        <br /> testing
                    </h2>
                    <p className="text-lg text-gray-700 mt-6">
                    Our QA strategy is not only comprehensive but also tailored to comply with the stringent regulatory standards prevalent in the US, ensuring a seamless and compliant end-user experience.                    </p>
                </div>
  
                <div className="md:w-1/2">
                    <div className="flex gap-6 text-xl font-medium border-b border-gray-300 mb-6">
                        <button
                            onClick={() => setActiveTab('FIXED PRICE')}
                            className={`pb-2 ${activeTab === 'FIXED PRICE'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-400'
                                }`}
                        >
                            MANUAL
                        </button>
                        <button
                            onClick={() => setActiveTab('TIME & MATERIALS')}
                            className={`pb-2 ${activeTab === 'TIME & MATERIALS'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-400'
                                }`}
                        >
                            AUTOMATED
                        </button>
                    </div>
  
                    {activeTab === 'FIXED PRICE' ? (
                        <div className="space-y-3 text-gray-800 text-lg">
                            <p>
                            QA specialists conduct tests and prepare error reports without the use of automation tools.                            </p>
                            <ul className="mt-4 space-y-3 pl-2">
                            <li><span className="text-blue-400 mr-2">✓</span>Every project inevitably goes through manual testing. If there are no testers on the project, other specialists run manual tests. But testers do it better.</li>
                            <li><span className="text-blue-400 mr-2">✓</span>Mobile app stores only submit applications that work correctly.</li>
                            <li><span className="text-blue-400 mr-2">✓</span>Testers identify non-functional defects that negatively affect user experience and help fix them.</li>
                            <li><span className="text-blue-400 mr-2">✓</span>Testers check complex scenarios that can’t be tested automatically.</li>
                            </ul>

                        </div>
                    ) : (
                        <div className="space-y-3 text-gray-800 text-lg">
                            <p>
                            QA specialists write scripts that automate test execution. Automation reduces the efforts and, therefore, the cost of testing.                            </p>
                            <ul className="mt-4 space-y-3 pl-2">
                            <li><span className="text-blue-400 mr-2">✓</span>The key objective of automation is project cost reduction. If the return on investments is negative, automation brings few benefits;</li>
                            <li><span className="text-blue-400 mr-2">✓</span>If a project needs regression tests and releases happen 2+ times a month;</li>
                            <li><span className="text-blue-400 mr-2">✓</span>Tests feature hundreds of routine actions, like creating a hundred new users.</li>

                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </RevealOnScroll>
    );
  }; 

//-------------------------------------------------QA solutions------------------------------------------------------------------
const Solutions = () => {
    return (
      <RevealOnScroll>
       <section id="c" className="py-20 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
      Different solutions need different quality assurance <span className="text-blue-400 font-medium">services</span>
    </h2>
    <p className="text-center text-lg mb-16">Our specialists have solid experience in each type of Quality Assurance services.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
      
      {/* Functional testing */}
      <div>
        <img src="../QAandTesting/Technology-expertise.svg"  alt="Functional testing" className="h-12 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Functional testing</h3>
        <p className="text-sm text-gray-300 mb-4">Put your app functionality under test to know if everything works right.</p>
        <ul className="space-y-2 text-sm text-gray-300 pl-1">
          <li><span className="text-blue-400 mr-2">✓</span>integration testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>acceptance testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>compatibility testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>access control testing.</li>
        </ul>
      </div>

      {/* Non-functional testing */}
      <div>
        <img src="../QAandTesting/Non-functional-testing.svg"  alt="Non-functional testing" className="h-12 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Non-functional testing</h3>
        <p className="text-sm text-gray-300 mb-4">Find out how well your application works in various environments.</p>
        <ul className="space-y-2 text-sm text-gray-300 pl-1">
          <li><span className="text-blue-400 mr-2">✓</span>performance and load testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>usability testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>security testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>cross-platform testing.</li>
        </ul>
      </div>

      {/* Changes testing */}
      <div>
        <img src="../QAandTesting/Technical-research-white.svg"  alt="Changes testing" className="h-12 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Changes testing</h3>
        <p className="text-sm text-gray-300 mb-4">Be sure the improvements won’t affect the work of the previous version.</p>
        <ul className="space-y-2 text-sm text-gray-300 pl-1">
          <li><span className="text-blue-400 mr-2">✓</span>regression testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>build verification testing;</li>
          <li><span className="text-blue-400 mr-2">✓</span>sanity testing.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      </RevealOnScroll>
    );
  }

  //------------------------------------------------Expertise in business domains--------------------------------------------------
  const Expertise = () => {
    return (
      <RevealOnScroll>
        <section id="d" className="py-20 bg-white text-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
              Expertise in business <span className="text-blue-500 font-medium">domains</span>
            </h2>
            <p className="text-center text-lg text-gray-700 mb-16 max-w-4xl mx-auto">
              With a decade of global experience, including significant work in key US industries,
              our team brings in-depth knowledge and tailored solutions to meet the unique challenges
              of the American market.
            </p>
  
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center text-sm">
              <div>
                <img src="../QAandTesting/Marketing.svg" alt="AdTech & Marketing" className="mx-auto h-12 mb-3" />
                <p className="font-medium">AdTech &<br />Marketing</p>
              </div>
              <div>
                <img src="../QAandTesting/Banking-Finance.svg" alt="FinTech" className="mx-auto h-12 mb-3" />
                <p className="font-medium">FinTech</p>
              </div>
              <div>
                <img src="../QAandTesting/Logistics.svg" alt="Logistics" className="mx-auto h-12 mb-3" />
                <p className="font-medium">Logistics</p>
              </div>
              <div>
                <img src="../QAandTesting/Healthcare.svg" alt="Healthcare" className="mx-auto h-12 mb-3" />
                <p className="font-medium">Healthcare</p>
              </div>
              <div>
                <img src="../QAandTesting/Media-Entertainment.svg" alt="Media & Entertainment" className="mx-auto h-12 mb-3" />
                <p className="font-medium">Media &<br />Entertainment</p>
              </div>
              <div>
                <img src="../QAandTesting/Automotive.svg" alt="Automotive" className="mx-auto h-12 mb-3" />
                <p className="font-medium">Automotive</p>
              </div>
              <div>
                <img src="../QAandTesting/Ecommerce.svg" alt="eCommerce & Retail" className="mx-auto h-12 mb-3" />
                <p className="font-medium">eCommerce &<br />Retail</p>
              </div>
              <div>
                <img src="../QAandTesting/Travel-Hospitality.svg" alt="Travel & Hospitality" className="mx-auto h-12 mb-3" />
                <p className="font-medium">Travel &<br />Hospitality</p>
              </div>
              <div>
                <img src="../QAandTesting/Education.svg" alt="EdTech" className="mx-auto h-12 mb-3" />
                <p className="font-medium">EdTech</p>
              </div>
              <div>
                <img src="../QAandTesting/Real-Estate.svg" alt="Real Estate" className="mx-auto h-12 mb-3" />
                <p className="font-medium">Real Estate</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    );
  };
  


//---------------------------------------------------Our agile development--------------------------------------------------
const AgileDevelopment = () => {
    return (
      <RevealOnScroll>
        <section id="e" className="py-20 bg-white text-gray-900">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
      Quality assurance as part of <span className="text-blue-500 font-medium">agile</span> <br />development
    </h2>
    <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
      Quality Assurance and Testing are an integral part of agile software development, along with coding.
      QA specialists help developers to specify executable requirements for the ongoing sprint that guides coding.
      We do testing and coding incrementally and iteratively, building up each feature until it provides enough value to be released.
    </p>
    <div className="flex justify-center">
      <img src="../QAandTesting/Quality-assurance-as-part-of-agile-development.svg"  alt="Agile QA Process" className="max-w-full h-auto" />
    </div>
  </div>
</section>

      </RevealOnScroll>
    );
  }

//--------------------------------------------------Principles of QA approach--------------------------------------------------
const Principles = () => {
    return (
      <RevealOnScroll>
        <section id="f" className="py-20 bg-gray-50 text-gray-900">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
      <span className="text-blue-500 font-medium">Principles</span> of our quality assurance approach
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      <div>
        <img src="../QAandTesting/Award (1).svg"  alt="Best practices use" className="mx-auto mb-4 h-12" />
        <h3 className="text-lg font-semibold mb-2">Best practices use</h3>
        <p className="text-gray-700">To apply the best testing practices in a way to meet customer requirements.</p>
      </div>

      <div>
        <img src="../QAandTesting/Processes.svg"  alt="Improved internal processes" className="mx-auto mb-4 h-12" />
        <h3 className="text-lg font-semibold mb-2">Improved internal processes</h3>
        <p className="text-gray-700">To ensure that we provide the best possible development services.</p>
      </div>

      <div>
        <img src="../QAandTesting/Senior-specialists (1).svg"  alt="User-oriented approach" className="mx-auto mb-4 h-12" />
        <h3 className="text-lg font-semibold mb-2">User-oriented approach</h3>
        <p className="text-gray-700">To see and build the solution from the user’s point of view.</p>
      </div>

      <div>
        <img src="../QAandTesting/QA-processes.svg"  alt="Excel QA processes" className="mx-auto mb-4 h-12" />
        <h3 className="text-lg font-semibold mb-2">Excel QA processes</h3>
        <p className="text-gray-700">To control and constantly improve Quality Assurance and testing processes.</p>
      </div>
    </div>
  </div>
</section>


      </RevealOnScroll>
    );
  }

  //---------------------------------------------------Our Agile Development--------------------------------------------------
  const Approach = () => {
    return (
      <RevealOnScroll>
        <section id="ff" className="py-20 bg-white text-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-6">
              <span className="text-blue-500 font-medium">Tools</span> & Techniques we use
            </h2>
            <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
              SumatoSoft quality assurance specialists mastered 4 automation tools and 18 manual testing tools for different jobs.
              We also implement formal standards, proven informal best practices and our inner guidelines on quality assurance services.
            </p>
  
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between mb-16">
              <ul className="text-left space-y-3 text-gray-800 text-base list-disc list-inside flex-1">
                <li>well-established bugs management;</li>
                <li>continuous integration;</li>
                <li>security testing matters;</li>
                <li>shift-left testing;</li>
                <li>quality assurance strategy;</li>
                <li>cost optimization — no unnecessary tests.</li>
              </ul>
              <div className="flex-1">
                <img
                  src="../QAandTesting/Tools-Techniques-we-use.webp" 
                  alt="Tablet testing screen"
                  className="rounded-lg w-full max-w-md mx-auto"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-center">Manual testing tools</h3>
                <img
                  src="../QAandTesting/Screenshot 2025-05-10 205250.png" 
                  alt="Manual testing tools"
                  className="mx-auto"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-center">Automation testing tools</h3>
                <img
                  src="../QAandTesting/Screenshot 2025-05-10 205340.png"  
                  alt="Automation testing tools"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    );
  };

  //----------------------------------------Awards & Recognitions Section------------------------------------------------------------------
const AwardsAndRecognitions = () => {
    return (
      <RevealOnScroll>
        <section id= "g" >
        <CertificationsSection />
        </section>
      </RevealOnScroll>
    );
  };

             
//----------------------------------------Our Recent works----------------------------------------------------------------

const Casestudies = () => {
    const recentWorks = [
        {
            title: "Quality assurance services for complex CRM",
            description:
                "A big CRM system written on .Net had numerous bugs and faced user churn. This is the story of how we found 5,000 bugs, automated the testing process, and reduced system maintenance costs.",
            image: "../QAandTesting/Screenshot 2025-05-10 205529.png" ,
            bgColor: "bg-[#a4152a]",
        },
        {
            title: "Transportation management system",
            description: "A comprehensive solution for companies operating in the logistics industry, covering all the major aspects of transport and cargo management.",
            image: "../QAandTesting/Screenshot 2025-05-10 211838.png" ,
            bgColor: "bg-[#061138]",
        },
  
        {
            title: "Graphical user interface for robot operation",
            description:
                "SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot Alfred, an automated robotic arm.",
            image: "../QAandTesting/Screenshot 2025-05-10 211923.png" ,
            bgColor: "bg-[#652D90]",
        },
    ];
  
    return (
        <section id="h" className="p-8 mb-12">
            <h1 className="text-4xl md:text-5xl mb-8 text-center font-medium">
                Check<span className="text-blue-600 font-semibold">IoT projects </span>we successfully launched
            </h1>
  
            <div className="space-y-6 ">
                {recentWorks.map((work, index) => (
                    <RevealOnScroll key={index} delay={index * 0.2}>
                        <div
                            className={` overflow-hidden shadow-lg hover:bg-gradient-to-r from-[#652D90] from-[0%] via-[#a4152a] via-[49%] via-pink-500 via-[51%] to-blue-900 to-[100%] grid md:grid-cols-2  ${work.bgColor} text-white`}
                        >
                       <div className="flex items-end h-full">
                        <img
                          src={work.image}
                          alt={work.title}
                          loading="lazy"
                          className="w-full max-h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
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
//----------------------------------------Testimonials Section------------------------------------------------------------------
const Testimonials = () => {
    return (
      <RevealOnScroll>
        <section id= "hh" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
  
                  <ReviewCarousel />
        </div>
        </section>
      </RevealOnScroll>
    );
  };
 //--------------------------------------------------Lets Start---------------------------------------
 
 const ContactStart = () => {
    return (
      <RevealOnScroll>
        <section id="g" className="py-20 bg-gradient-to-b from-[#0B1F33] to-[#0F1626] text-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
  
            {/* Left Side: Image Instead of Steps */}
            <div>
            <h2 className="text-4xl font-light mb-10">
                Let’s <span className="text-blue-500 font-medium">start</span>
            </h2>

            <img
                src="../QAandTesting/Screenshot 2025-05-10 212104.png"
                alt="Process steps"
                className="w-full max-w-md sm:max-w-sm md:max-w-md"
            />

            <p className="mt-12 text-base">
                If you have any questions, email us <br />
                <a href="mailto:info@sumatosoft.com" className="text-red-400">info@sumatosoft.com</a>
            </p>
            </div>
  
            {/* Right Side: Form */}
            <div>
              <form className="space-y-6">
                {/* Form Fields Side by Side */}
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                    <label className="w-32 text-sm mb-2 sm:mb-0">My Name*</label>
                    <input type="text" placeholder="John Smith" className="flex-1 px-4 py-2 bg-transparent border-b border-gray-300 focus:outline-none" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                    <label className="w-32 text-sm mb-2 sm:mb-0">Email Address*</label>
                    <input type="email" placeholder="name@company.com" className="flex-1 px-4 py-2 bg-transparent border-b border-gray-300 focus:outline-none" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
                    <label className="w-32 text-sm mb-2 sm:mb-0">Message*</label>
                    <textarea placeholder="Describe your idea" className="flex-1 px-4 py-2 bg-transparent border-b border-gray-300 focus:outline-none"></textarea>
                  </div>
                </div>
  
                {/* Disclaimer */}
                <p className="text-xs text-gray-400 leading-5 mt-4">
                  Please be informed that when you click the Send button SumatoSoft will process your personal data in accordance with our 
                  <a href="#" className="text-red-400"> Privacy notice</a> for the purpose of providing you with appropriate information. This site is protected by reCAPTCHA and the Google 
                  <a href="#" className="text-red-400"> Privacy Policy</a> and <a href="#" className="text-red-400">Terms of Service</a> apply.
                </p>
  
                {/* Attach File + Send Button Side by Side */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-6 mt-6">
                  <div className="flex items-center space-x-2 text-sm text-white cursor-pointer">
                    <FiPaperclip className="text-lg" />
                    <span>Attach file</span>
                  </div>
  
                  <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 mt-4 sm:mt-0 rounded-md w-full sm:w-auto">
                    Send
                  </button>
                </div>
              </form>
  
              {/* Manager Info + Book CTA */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-10 pt-6 border-t border-gray-600 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <img src="../QAandTesting/photo_5188466995358721628_y.webp" alt="Elizabeth" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-medium">Elizabeth Khrushchynskaya</p>
                    <p className="text-sm text-gray-400">Account Manager</p>
                  </div>
                </div>
                <a href="#" className="border border-red-500 text-red-500 hover:bg-red-600 hover:text-white px-6 py-2 rounded-md text-sm flex items-center space-x-2">
                  <BsCalendar3 className="text-sm" />
                  <span>Book a consultation</span>
                </a>
              </div>
            </div>
  
          </div>
        </section>
      </RevealOnScroll>
    );
  };
  
    //"../QAandTesting/" 
   //-----------------------------------------------------Awesome stories--------------------------------------------------
  
   
  const AwesomeStories = () => {
    return (
      <section id="i" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
            We have awesome <span className="text-blue-500">stories</span> to tell you
          </h2>
  
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="flex flex-col">
              <img
                src="../AwesomeStories.jpg"
                alt="Top Rated Badge"
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold leading-snug">
                SumatoSoft Ranked Among Top Mobile App Development Companies in the USA by AppFirmsReview
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <FaRegClock className="w-4 h-4" />
                1 mins | April 25, 2025
              </p>
            </div>
  
            {/* Right Articles List */}
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Top 10 ChatGPT Alternatives for Business Use in 2025",
                  time: "36 mins",
                  date: "April 15, 2025"
                },
                {
                  title: "Top 25 MVP Development Companies",
                  time: "52 mins",
                  date: "March 24, 2025"
                },
                {
                  title: "IoT Apps for Oil & Gas Industry – What’s in It?",
                  time: "12 mins",
                  date: "February 24, 2025"
                }
              ].map((article, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-medium text-black">{article.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <FaRegClock className="w-4 h-4" />
                    {article.time} | {article.date}
                  </p>
                </div>
              ))}
              <div className="text-red-500 text-sm font-medium cursor-pointer hover:underline mt-2">
                All articles &rsaquo;
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  //----------------------------------------FAQ Section------------------------------------------------------------------

const FAQSections = () => {
    const IotBigDataAnalyticsFaqs = [
      
      {
        question: "What is quality assurance?",
        answer: (
          
            <p>Quality Assurance in software is a set of activities that focuses on preventing quality failure at every stage of software development. Quality control, in turn, is a part of quality assurance services. Its purpose is to check if the software quality meets pre-agreed quality requirements.</p>
           
        )
      },
      {
        question: "What type of QA do I need?",
        answer: (
          
            <p>The primary quality assurance services we recommend for every project are QA strategy development, acceptance testing, graphical user interface testing, and functional testing. Since there are more than 15 types of quality assurance and control activities, the exact choice of the types depends on the project requirements.</p>
           
        )
      },
      {
        question: "What are quality assurance standards?",
        answer: (
          
            <p>Quality assurance standards are sets of formal and informal guidelines to ensure the software product meets its purposes and has few bugs. Companies that offer quality assurance services apply these guidelines in all development stages, from discovery to store release. An example of an official standard is ISO 9000.</p>
          
        )
      },
      {
        question: "Why is SumatoSoft a top-quality provider of quality assurance services?",
        answer: (
        
            <p>SumatoSoft has earned its reputation as a premier provider of quality assurance services, not through self-promotion, but through recognition from esteemed analytic agencies like Clutch and GoodFirms. Our commitment to excellence is further reflected in the glowing testimonials from our satisfied clients, including many from the US, who have given us a 4.8 rating on Clutch and a perfect 5 on GoodFirms. Our tailored approach ensures that we meet the specific needs and standards expected by American businesses, solidifying our position as a trusted partner in the US market.</p>
          
        )
      }
    ];
  
    return (
      <section id="j" className="px-4 mb-16">
        <FAQ faqs={IotBigDataAnalyticsFaqs} />
      </section>
    )
  };
  
// ----------------------------------------------------------------Main Component----------------------------------------------------
const QAandTestingPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [activeSection, setActiveSection] = useState(null);
  
      const contentsMenu = [
          { title: 'Your benefits', id: 'a' },
          { title: 'QA & testing strategies', id: 'b' },
          { title: 'QA solutions', id: 'c' },
          { title: 'Expertise in business domains', id: 'd' },
          { title: 'Our agile development', id: 'e' },
          { title: 'Principles of QA approach', id: 'f' },
          { title: 'Rewards & Recognitions', id: 'g' },
          { title: 'Our recent works', id: 'h' },
          { title: 'Awesome stories', id: 'i' },
          { title: 'FAQ', id: 'j' }
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
    });
  
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

          <Benefits />
          <Testing />
          <Solutions />
          <Expertise />
          <AgileDevelopment />
          <Principles />
          <Approach />
          <AwardsAndRecognitions />
          <Casestudies />
          <Testimonials />
          <ContactStart />
          <AwesomeStories />
          <FAQSections />

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
  
  export default QAandTestingPage;