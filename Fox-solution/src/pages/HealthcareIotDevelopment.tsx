import { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { TableOfContents } from '@/components/ui/TableOfContents';
import ReviewCarousel from '../components/ui/reviewCarousel';
import { CertificationsSection } from '@/components/ui/Certification';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";


const HeroSection = () => {
  return (
    <>
      {/* Hero Section with integrated breadcrumb - taking full viewport height */}
      <section id="hero" className="relative py-20 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center text-sm mb-6">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
              <span className="mx-2">›</span>
              <a href="/" className="text-gray-300 hover:text-white">Services</a>
              <span className="mx-2">›</span>
              <span className="text-blue-300">HealthcareIoT development</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <span className="text-blue-400">Healthcare</span> Iot software development company
            </h1>

            <p className="text-lg mb-8">
              Transforming American Healthcare with Intelligent IoT software. We connect medical devices, streamline workflows, and optimize patient care with real-time data analytics. Trust us to drive innovation in your healthcare setting, from remote monitoring to smart diagnostics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>real-time patient monitoring;</span>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>data-driven decision-making;</span>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>integrated medical devices;</span>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>scalable solutions;</span>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>workflow efficiency;</span>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>security & compliance;</span>
              </div>

              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✓</span>
                <span>smart diagnostics;</span>
              </div>

              <div></div>

              <div className="flex items-center mt-10">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-4 mr-16 whitespace-nowrap">
                  Advance Health Tech
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
        </div>
      </section>
    </>
  );
};

//----------------------------------------------------IOT Solutions for Healthcare--------------------------------------------------
const IotSolutionsforHealthcare = () => {
  return (
    <section id="ab" className="container mx-auto px-1 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div>
          <img
            src="../iotsolutionforhealthcare.png"
            alt="Healthcare IoT"
            className="rounded-lg shadow-lg w-full max-w-6xl"
          />
        </div>
      </div>
    </section>
  );
};


//--------------------------------IoT-powered healthcare solutions--------------------------------------------------
const IotHealthcareSolutions = () => {
  return (
    <section id="a" className="bg-gray-50 py-16 px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light font-mono mb-4">IoT-powered healthcare
            <span className="text-blue-500 font-normal"> solutions we build</span>
          </h2>
        </div>

        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 mb-16">
            At the core of any <a href="#" className="text-red-400 underline hover:text-red-500 mx-1">IoT healthcare software</a> is a simple approach:
            the connection of healthcare devices to software where data is processed and presented in various actionable formats.
            While this remains consistent across different IoT-based healthcare platforms, the distinction arises from the types of devices
            connected and the specific application of each system. Here are the solutions we offer:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/*CARD 1*/}
          <div className="bg-white p-8 rounded-lg flex items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multipurpose remote health monitoring systems</h3>
              <p className="text-gray-600 mb-6 text-sm">
                These encompass a broad range of applications, from generic remote patient monitoring to specialized systems for post-operative care and elderly assistance. By capturing and transmitting patients’ health data to healthcare providers from non-clinical settings, we ensure continuous patient oversight without necessitating their presence in a healthcare facility.
              </p>
            </div>
            <img src="../remotehealthmonitoring.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
          </div>
          {/*CARD 2*/}
          <div className="bg-white p-8 rounded-lg flex items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal health monitoring apps</h3>
              <p className="text-gray-600 mb-6 text-sm">
                A convergence of technology and personal health, these solutions include applications tailored for fitness trackers, smart bracelets, watches, and sleep monitors. We delve into specific health metrics, building apps that can measure heart rate, sleep cycles, blood oxygen levels, and more. We can design applications that train users for a marathon, assist in yoga, cater to swimmers, or monitor daily activities. Our apps are tailored to cater to a wide spectrum of physical endeavors, ensuring users always have insights into their health.
              </p>
            </div>
            <img src="../Personalhealthmonitoring.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
          </div>
          {/*CARD 3*/}
          <div className="bg-white p-8 rounded-lg flex items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telemedicine platforms</h3>
              <p className="text-gray-600 mb-6 text-sm">
                In essence, telemedicine replicates the physical clinic experience in a digital space. Patients can book appointments, consult with doctors through video calls, get prescriptions, and even have follow-up sessions. Beyond patient-doctor interactions, these platforms also serve as a hub for doctors to collaborate, share patient histories, and derive second opinions.
              </p>
            </div>
            <img src="../Telemedicineplatforms.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
          </div>
          {/*CARD 4*/}
          <div className="bg-white p-8 rounded-lg flex items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chronic disease management platforms</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Dealing with long-term conditions like diabetes or hypertension requires analysis of huge amounts of historical data since it’s a long-lasting disease. We develop platforms that offer real-time tracking as well as comprehensive and informative historical data representation. With analytical tools, patients and healthcare providers can view trends, derive insights from past data, and strategize treatments more effectively.                    </p>
            </div>
            <img src="../Chronicdisease.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
          </div>
          {/*CARD 5*/}
          <div className="bg-white p-8 rounded-lg flex items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medication adherence software</h3>
              <p className="text-gray-600 mb-6 text-sm">
                This solution type includes smart pill dispensers, smart insulin pens, and other devices that ensure patients never miss a dose. With features like automated reminders and real-time adherence tracking patients and healthcare providers stay informed and proactive. Patients get automated notifications to take medications in time while doctors remotely track the intake and can check the medication efficiency and adjust treatments or dosage.                    </p>
            </div>
            <img src="../Medicationadherence.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
          </div>
          {/*CARD 6*/}
          <div className="bg-white p-8 rounded-lg flex items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home health automation systems</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Think of a ‘smart home’, but with an emphasis on health. This is the most advanced solution that comprises multiple subsystems like telecommunication, patient billing, home visit scheduling, care planning, claim management, and interfaces for doctors, home care providers, and patients. Home health automation systems serve two purposes: optimizing healthcare staff workflow and ensuring meticulous remote patient monitoring.                     </p>
            </div>
            <img src="../Homehealth.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
          </div>


        </div>
      </div>
    </section>

  );
};

//-------------------------------------Services We Provide--------------------------------------------------
const ServicesWeProvide = () => {
  const serviceItems = [
    {
      id: 1,
      title: 'Healthcare devices development',
      description: `End-to-end healthcare device prototyping and development.
      
      At SumatoSoft, we bridge the gap between ideas and tangible healthcare devices. Be it a fresh concept or an existing prototype needing fine-tuning, we’ve got you covered. Our expertise includes but isn’t limited to devices such as blood pressure cuffs, glucometers, heart rate monitor sensors, and pill dispensers.We cover the following aspects:`,
      features: [
        'Idea feasibility',
        'Form factor design',
        'Functionality',
        'Material selection',
        'Scalable production',
        'Packaging',
        'Logistics & distribution',
      ],
      image: '../deviceImage.webp',
    },
    {
      id: 2,
      title: 'Software development and integration',
      description: `Software development and device integration
      
      We provide bespoke software development services that cater to both mobile and web platforms. Our software solutions are designed to flawlessly integrate with your healthcare devices, offering seamless bi-directional data transmission, secure data protocols, and cloud connectivity.`,
      features: [
        'Native and cross-platform development',
        'Bi-directional data transmission',
        'Cloud connectivity',
        'User-focused design',
        'Insightful data analytics and reporting',
        'Robust security measures and compliance adherence',
        'Seamless integration capabilities with existing systems',
        'Over-the-air updates',
        'Offline data storage and sync',
      ],
      image: '../softwareImage.webp',
    },
    {
      id: 3,
      title: 'Securing and testing',
      description: 'Ensuring data security in United States healthcare is critical and mandates adherence to stringent standards across different regions. From HIPAA in the U.S. to GDPR in Europe, our software aligns with key regulations, including FDA, HITRUST, HL7, DICOM, and ISO 13485. We rigorously test both software and devices to ensure the seamless and secure transfer and storage of user data.',
      features: [
        'Robust monitoring & logging',
        'Secure OTA updates',
        'Anonymization',
        'Firmware integrity checks',
        'Code security assessments',
        'Data encryption',
      ],
      image: '../securityImage.webp',
    },
    {
      id: 4,
      title: 'Training and support',
      description: 'Launching your healthcare solution is only the beginning of our journey together. We understand the importance of continuous education and support in this ever-evolving domain.',
      features: [
        'User training sessions',
        'Technical support',
        'Software updates',
        'Device maintenance tips',
        'Feedback loop',
      ],
      image: '../trainingImage.webp',
    },
    {
      id: 5,
      title: 'All-in-one partnership',
      description: 'With SumatoSoft, you don’t have to juggle between different agencies. We provide an integrated approach, ensuring your vision is realized cohesively, on time, and within budget. We position ourselves as your comprehensive partner, covering all stages of healthcare device development and guiding you from ideation to post-launch:',
      features: [
        'Initial conceptualization & prototyping',
        'Efficient device manufacturing',
        'Tailored software development',
        'Strict security & compliance adherence',
        'Ongoing training & support',
      ],
      image: '../partnershipImage.webp',
    }


  ];
  const [activeService, setActiveService] = useState(serviceItems[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="b" className="pt-20 pb-20">
      <div className="container px-6 mx-auto bg-blue-950 rounded-lg py-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl text-white font-light font-mono mb-4 leading-tight">
              Healthcare IoT software development
              <br />
              <span className="text-blue-500 font-normal">services we provide</span>
            </h2>
          </div>
        </RevealOnScroll>


        {isMobile ? (
          // --------- Mobile Layout ---------
          <div className="space-y-4">
            {serviceItems.map((service) => (
              <div key={service.id} className="bg-white/10 rounded-xl p-4">
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center">
                      <img src={service.image} alt={service.title} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-blue-200">{service.description.substring(0, 60)}...</p>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: activeService === service.id ? 180 : 0 }}
                    className="text-blue-300 transition-transform"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-16 pt-4"
                    >
                      <p className="text-blue-200">{service.description}</p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-white mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-blue-100 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          // --------- Desktop Layout ---------
          <div className="flex flex-col gap-12">
            <RevealOnScroll>
              <div className="flex justify-center gap-8">
                {serviceItems.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`transition-all pb-2 ${activeService === service.id
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-white hover:text-blue-300'
                      }`}
                  >
                    <h3 className="font-semibold text-base">{service.title}</h3>
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              {serviceItems.map((service) => (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    className="flex flex-col lg:flex-row items-center lg:items-center gap-12 bg-white rounded-xl p-8 shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-blue-900">{service.title}</h3>
                      <p className="text-blue-700 mt-4">{service.description}</p>
                      <div className="mt-6">

                        <ul className="list-disc list-inside text-blue-700 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-80 h-auto rounded-lg shadow-lg object-cover"
                      />
                    </div>
                  </motion.div>
                )
              ))}
            </RevealOnScroll>
          </div>
        )}
      </div>
    </section>
  );
};

//------------------------------------Benefits from IoT--------------------------------------------------
const BenefitsFromIot = () => {
  return (
    <section id="c" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          How healthcare <span className="text-blue-500 font-medium">benefits</span> from IoT
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

          {/* Feature 1 */}
          <div>
            <div className="mb-4">
              <img src="../remotepatientmonitoring.svg" alt="" className="mx-auto h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Remote patient monitoring</h3>
            <p className="text-sm text-gray-600">
              Enables real-time health tracking, reducing frequent hospital visits and providing medical professionals insights from afar.        </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="mb-4">
              <img src="../Blockchain-based-solutions.svg" alt="" className="mx-auto h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Remote care delivery</h3>
            <p className="text-sm text-gray-600">
              Beyond monitoring, it offers telehealth consultations and therapy, vital during times when in-person visits are challenging.        </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="mb-4">
              <img src="../Chronic-disease-management-platforms.svg" alt="" className="mx-auto h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data-driven patient diagnostics</h3>
            <p className="text-sm text-gray-600">
              Utilizing vast patient data, treatments are tailored for individual needs, paving the way for precision medicine.        </p>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="mb-4">
              <img src="../Multipurpose-remote-health-monitoring-systems.svg" alt="" className="mx-auto h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accurate chronic-disease management</h3>
            <p className="text-sm text-gray-600">
              Continuous data collection from IoT devices allows efficient tracking and adaptable treatments for chronic conditions.
            </p>
          </div>

          {/* empty */}
          <div>


          </div>
          {/* Feature 5 */}
          <div>
            <div className="mb-4">
              <img src="../Medication-adherence-software.svg" alt="" className="mx-auto h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Emergency care</h3>
            <p className="text-sm text-gray-600">
              IoT devices can provide instantaneous alerts to medical teams or family during sudden health crises, ensuring swift responses.
            </p>
          </div>

          {/* Feature 6 */}
          <div>
            <div className="mb-4">
              <img src="../Personal-health-monitoring-apps.svg" alt="" className="mx-auto h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Self-driven health monitoring</h3>
            <p className="text-sm text-gray-600">
              Patients proactively monitor their health using IoT devices, lessening their sole reliance on healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

//---------------------------------------------------Evolution of Healthcare Through IoT--------------------------------------------------
const EvolutionOfHealthcareThroughIot = () => {
  return (
    <RevealOnScroll>
      <section id="d" className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4">
              Evolution of Healthcare Through IoT. Trends 2024
            </h2>
            <p className="text-white-300">In this whitepaper, we delve into the latest trends and innovations within Healthcare IoT that are set to reshape the industry in 2024</p>
          </div>
          <button className="flex items-center bg-[#FF4155] text-white px-6 py-3 border border-[#FF4155] hover:bg-transparent hover:text-[#FF4155] transition">
            <FaDownload className="mr-2" />
            Download
          </button>

        </div>
      </section>
    </RevealOnScroll>
  );
};

//------------------------------------------------------------Client Reviews--------------------------------------------------
const ClientReviews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <ReviewCarousel />
      </div>
    </section>
  );
};

//-------------------------------------------------------------Our IoT healthcare software--------------------------------------------------
const OurIotHealthcareSoftware = () => {
  const recentWorks = [
    {
      title: "   Adaptive health monitoring mobile app for personalized wellness programs",
      description:
        " A mobile application designed to determine suitable workouts based on real-time pulse and pressure levels,all measured through a smart cuff. The app features GDPR-compliant security measures and seamless device integration.",
      image: "../cover-img-1.png",
      bgColor: "bg-[#a4152a]",
    },
    {
      title: "Real-time blood glucose monitoring app for a healthcare technology firm",
      description: "A mobile application that provides real-time blood glucose data through graphical representation, alerts for timely insulin administration, and seamless user onboarding, elevating the Client’s sensor product for a more significant market impact.",
      image: "../bigdataanalyticsandiotdevelopment/bld-glcs.jpg",
      bgColor: "bg-[#061138]",
    },

    {
      title: " IoT application with sensors for industrial fridge monitoring",
      description:
        "An IoT solution for HoReCa venues with the option to monitor the work of industrial (commercial) refrigerators online, get instant alerts on urgent issues and manage historical data.",
      image: "../bigdataanalyticsandiotdevelopment/fridge-sensors.jpg",
      bgColor: "bg-[#652D90]",
    },
  ];

  return (
    <section id="e" className="p-8 mb-12">
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

//-----------------------------------------------------IOMT architecture--------------------------------------------------
const IotArchitecture = () => {
  return (
    <section id="f" className="py-10 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          <span className="text-blue-500 font-medium">IoMT</span> architecture
        </h2>
      </div>

      <div>
        <img
          src="../iomtarchitecture.webp"
          alt="Healthcare IoT"
          className="rounded-lg   mx-auto"
        />
      </div>
    </section>
  );
};


//-----------------------------------------------------IoT software powers smart medical devices--------------------------------------------------
const IotSoftwarePowersSmartMedicalDevices = () => {
  return (
    <section id="g" className="py-10 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Part */}
        <div className="bg-[#f7f9fc] p-8 md:p-12 rounded-lg flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl  leading-tight mb-6">
            <span className="text-blue-500 font-medium">How</span> IoT software for smart medical devices works
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            IoT software for smart medical devices enables real-time data collection and analysis through interconnected sensors. This data is then made accessible to healthcare providers for timely decision-making. The system is engineered for reliability and compliance with healthcare regulations.
          </p>
        </div>

        {/* Right Part */}
        <div className="flex flex-col justify-start p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-400 pb-2 w-fit">
            HOW SMART MEDICAL DEVICES OPERATE USING IOT SOFTWARE
          </h3>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Medical smart devices</span> – gather the patient data and pass it to gateways through Wi-Fi, NFC.
                Equipped with actuators that can execute pre-set actions, such as modifying insulin dosage in insulin pumps.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Gateways</span> – serve as intermediaries that filter, preprocess, and forward data from patient devices to the cloud and pass commands from the cloud to devices.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Cloud gateway</span> – compresses the data from the medical devices, ensuring a secure transfer to the cloud.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Streaming data processing</span> – manage the incoming data
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Data lake</span> – the storage of unstructured health data.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Data warehouse</span> –  the storage of structured and categorized health data.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Data analytics</span> – analysis of the accumulated health data and trends for diagnosis, treatment adjustments, and lifestyle recommendations.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Control application module</span> – sends directives to actuators in the medical devices, prompting them to carry out specific actions.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Healthcare provider interface</span> – allows medical staff, such as doctors and nurses, to view patient health data, receive critical alerts, customize vital thresholds for alerts, tweak medication dosages, and assess patient health based on device data analytics.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Patient portal</span> – offers patients a view of their health metrics (like heart rate or glucose levels) and the status of their linked device via an app. It also alerts them to any concerning health readings.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">Administrator dashboard</span> – displays an overview of all software users, both patients and healthcare staff and grants system access management capabilities
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

//-----------------------------------------------------Why Clients cooperate with us in IoMT--------------------------------------------------
const WhyClientsCooperateWithUs = () => {
  return (
    <section id="why-iomt" className="relative py-20 bg-[#f8f9fb] text-black">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal">
            <span className="text-blue-500">Why</span> Clients cooperate with us in IoMT
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
                <p><span className="font-semibold text-gray-900">Expertise in IoMT</span> – with 12 years on the market and successfully released IoMT projects, we at SumatoSoft apply this expertise to tackle healthcare’s project challenges.</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <div>
                <p><span className="font-semibold text-gray-900">IoT device integration</span> – we work with multiple devices from wearables like fitness trackers and smartwatches to medical-grade equipment such as glucose monitors, ECG machines, and smart inhalers. We ensure seamless data flow and interconnectivity.</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <div>
                <p><span className="font-semibold text-gray-900">Regulatory and standards mastery</span> – compliance is non-negotiable in the healthcare realm. SumatoSoft ensures adherence to global regulations and standards like HIPAA, HL7, FHIR, GDPR, and more, guaranteeing the sanctity and security of patient data</p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <div>
                <p><span className="font-semibold text-gray-900">Security focus</span> – beside strict adherence to security standards across the industry, we run security tests, use robust monitoring and logging, regularly update software to protect the system from new threats, and advance our skills in cybersecurity.</p>
              </div>
            </div>

            {/* Point 5 */}
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">✓</span>
              <div>
                <p><span className="font-semibold text-gray-900">Partnership with manufacturers</span> – SumatoSoft’s collaborations with device manufacturers enrich our solutions, providing our Clients an opportunity to prototype and manufacture their healthcare devices.</p>
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


//-----------------------------------------------------Quick facts about Fox-Solutions--------------------------------------------------
const QuickFactsAboutFoxSolutions = () => {
  return (
    <section id="h" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl mb-12">
          Quick <span className="text-blue-500">facts</span> about SumatoSoft
        </h2>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fact Item */}
          <div className="border p-8 rounded-lg">
            <p className="text-4xl md:text-5xl text-blue-500 mb-2">98%</p>
            <p className="text-lg">User satisfaction rate</p>
          </div>

          <div className="border p-8 rounded-lg">
            <p className="text-4xl md:text-5xl text-blue-500 mb-2">200+</p>
            <p className="text-lg">Successful projects</p>
          </div>

          <div className="border p-8 rounded-lg">
            <p className="text-4xl md:text-5xl text-blue-500 mb-2">25+</p>
            <p className="text-lg">Countries</p>
          </div>

          <div className="border p-8 rounded-lg">
            <p className="text-4xl md:text-5xl text-blue-500 mb-2">70%</p>
            <p className="text-lg">Senior engineers</p>
          </div>

          <div className="border p-8 rounded-lg">
            <p className="text-4xl md:text-5xl text-blue-500 mb-2">3+</p>
            <p className="text-lg">Years of Clients’ engagement</p>
          </div>

          <div className="border p-8 rounded-lg">
            <p className="text-4xl md:text-5xl text-blue-500 mb-2">12+</p>
            <p className="text-lg">Years on the market</p>
          </div>
        </div>
      </div>
    </section>
  );
};

//----------------------------------------Awards & Recognitions Section------------------------------------------------------------------
const AwardsAndRecognitions = () => {
  return (
    <RevealOnScroll>
      <section id="i" >
        <CertificationsSection />
      </section>
    </RevealOnScroll>
  );
};

//-----------------------------------------------------Book a consultation--------------------------------------------------
const BookAConsultation = () => {
  return (
    <RevealOnScroll>
      <section id="jj" className="py-16 px-4 bg-[#f6f8fc]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side - Form */}
          <div>
            <h2 className="text-4xl font-light mb-10">Your IoT project starts here.</h2>

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
                <img src="../bigdataanalyticsandiotdevelopment/24hrs.svg" alt="24 Hours Icon" className="h-6 mt-1" />
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

//-----------------------------------------------------Awesome stories--------------------------------------------------


const AwesomeStories = () => {
  return (
    <section id="j" className="py-16 px-4 bg-white">
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


// ----------------------------------------------------------------Main Component----------------------------------------------------
const HealthcareIotDevelopmentPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { id: 'a', title: 'IoT-powered healthcare solutions' },
    { id: 'b', title: 'Services we provide' },
    { id: 'c', title: 'Benefits from IoT' },
    { id: 'd', title: 'Evolution of Healthcare Through IoT' },
    { id: 'e', title: 'Our IoT healthcare software' },
    { id: 'f', title: 'IoMT architecture' },
    { id: 'g', title: 'IoT software powers smart medical devices' },
    { id: 'h', title: 'Quick facts about Fox-Solutions' },
    { id: 'i', title: 'Awards & Recognitions' },
    { id: 'j', title: 'Awesome stories' }
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
          <IotSolutionsforHealthcare />
          <IotHealthcareSolutions />
          <ServicesWeProvide />
          <BenefitsFromIot />
          <EvolutionOfHealthcareThroughIot />
          <ClientReviews />
          <OurIotHealthcareSoftware />
          <IotArchitecture />
          <IotSoftwarePowersSmartMedicalDevices />
          <WhyClientsCooperateWithUs />
          <QuickFactsAboutFoxSolutions />
          <AwardsAndRecognitions />
          <BookAConsultation />
          <AwesomeStories />
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

export default HealthcareIotDevelopmentPage;