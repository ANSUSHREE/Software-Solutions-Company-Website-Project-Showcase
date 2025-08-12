import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { Link } from 'react-router-dom';
import { TableOfContents } from '@/components/ui/TableOfContents';
import React, { JSX } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { FaRegLightbulb, FaCogs } from 'react-icons/fa';
import CostEstimator from '@/components/ui/CostEstimatorProps';
import Contact from '@/components/home/Contact';
import { useRef, useEffect } from 'react';
import { CertificationsSection } from '@/components/ui/Certification';
import FAQ from '@/components/ui/faq';


// Breadcrumb component
const Breadcrumb = () => {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 py-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors no-underline">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors no-underline">
            Services
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary font-medium">IoT Development</span>
        </div>
      </div>
    </nav>
  );
};

// Logo component for service sections
const ServiceLogo = ({ icon }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

// Text Decoration 
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

//Pricing Model Section
const PricingModelSection = () => {
  const [activeTab, setActiveTab] = useState('startups');

  return (
    <RevealOnScroll>
      <section id="pricing" className="flex flex-col md:flex-row bg-gray-50 p-6 md:p-16 gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-light">
            Pricing <span className="text-blue-600 font-medium">Model</span>
            <br /> for Iot <br /> and startup <br /> development projects
          </h2>
          <p className="text-lg text-gray-700 mt-6">
            We offer two pricing models for IoT app development services that fit different project and business needs. The time and material model is known for its flexibility, while the fixed-price model enables businesses to get working software within a strict budget.
          </p>
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
              FIXED PRICE
            </button>
            <button
              onClick={() => setActiveTab('TIME & MATERIALS')}
              className={`pb-2 ${activeTab === 'TIME & MATERIALS'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-400'
                }`}
            >
              TIME & MATERIALS
            </button>
          </div>

          {activeTab === 'FIXED PRICE' ? (
            <div className="space-y-3 text-gray-800 text-lg">
              <p>
                The Fixed Price model supposes that billing is based on a predefined sum that is specified in the contract. It’s most suitable for
              </p>
              <ul className="mt-4 space-y-3 pl-2">
                <TickItem text="project with well-defined and clear requirements;" />
                <TickItem text="MVP development with a limited budget;" />
                <TickItem text="small and short-term projects with limited complexity;" />
                <TickItem text="prototypes and PoCs;" />
              </ul>
            </div>
          ) : (
            <div className="space-y-3 text-gray-800 text-lg">
              <p>
                The Time & Material engagement model implies monthly billings that contain only real development efforts in the previous month (person-hours actually worked). It’s most suitable for:
              </p>
              <ul className="mt-4 space-y-3 pl-2">
                <TickItem text="unclear scope or uncertain project requirements at the start;" />
                <TickItem text="projects that require ongoing adjustments and iterations;" />
                <TickItem text="long-term IoT projects;" />
                <TickItem text="advisory and experimental features." />
              </ul>
            </div>
          )}
        </div>
      </section>
    </RevealOnScroll>
  );
};

//IOT Process
const IoTProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Analysis",
      description: "We examine and document all dimensions of the project that embrace Client and business requirements, existing infrastructure components, network, technical environment, market analysis and cost assessment. We aim to develop the future IoT solution with these factors in mind and our results."
    },
    {
      number: 2,
      title: "Architecture",
      description: "The next step includes outlining the software and hardware components, their interactions, the data flow and the structure of the IoT network. We select the appropriate protocols for communication, ensure the security measures, consider necessary methods for data processing and analysis, and more. The result of this step is a comprehensive system architecture document that serves as a technical blueprint for future solutions."
    },
    {
      number: 3,
      title: "System development",
      description: "We meticulously develop and test the software part and its communication with hardware in this phase. This phase includes the best practices in software development, such as version control, CI/CD, automated testing, and regular code reviews, and adheres to code quality standards."
    },
    {
      number: 4,
      title: "Deploy",
      description: "Depending on the project industry, the number of IoT devices inside the system, and other factors, we deploy the system into the working environment. This may involve cloud infrastructure setup, integration with other systems at several locations, partial deployment to different device versions, and more."
    },
    {
      number: 5,
      title: "Support",
      description: "Our work doesn't end here. We provide continuous support by updating technologies, deploying new security patches, and monitoring performance and the overall health of the IoT ecosystem."
    }
  ];

  return (
    <RevealOnScroll>
      <section id="strategy" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Our IoT development <span className="text-blue-500">process</span></h2>
          <p className="text-sm text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            As a starting point of IoT solution development, we offer our Client a detailed hardware-software integration roadmap. It's the interconnection of hardware and software that differentiates IoT development from standard development. Hardware usually evolves alongside software development.
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}

// Cost Estimator Section
const CostEstimatorSection = () => {
  return (
    <div id="cost-estimator" className="bg-gray-100 p-4">
      <CostEstimator />
    </div>
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
};

// Infinite Image Carousel Component
function InfiniteImageCarousel({
  images = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    url: `/api/placeholder/${300}/${200}`,
    alt: `Image ${i + 1}`
  })),
  speed = 0.5, // Reduced speed
  imageWidth = 240,
  imageHeight = 160,
  gap = 8,
  className = ""
}) {
  const carouselRef = useRef(null);
  const [duplicateCount, setDuplicateCount] = useState(3); // Number of times to duplicate the images

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to start after the first set of images
    // This allows us to create an infinite loop effect
    const resetScrollPosition = () => {
      const singleSetWidth = (imageWidth + gap) * images.length;
      scrollContainer.scrollLeft = singleSetWidth;
    };

    resetScrollPosition();

    // Function to handle the animation
    const animateScroll = () => {
      scrollContainer.scrollLeft += speed;

      // Check if we need to reset position to create infinite loop effect
      const itemWidth = imageWidth + gap;
      const totalWidth = itemWidth * images.length;

      // If we've scrolled past a full set of images
      if (scrollContainer.scrollLeft >= totalWidth * 2) {
        scrollContainer.scrollLeft -= totalWidth;
      }

      // If we've scrolled backwards (this can happen with some browser behaviors)
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += totalWidth;
      }

      // Continue the animation
      requestAnimationFrame(animateScroll);
    };

    // Start the animation
    const animationId = requestAnimationFrame(animateScroll);

    // Clean up on unmount
    return () => cancelAnimationFrame(animationId);
  }, [speed, images.length, imageWidth, gap]);

  // Custom style to hide scrollbars across browsers
  const scrollbarHideStyles: React.CSSProperties = {
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch'
  };

  // Style to hide scrollbar in webkit browsers
  const scrollbarHideClass = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `;

  // Create the duplicated array for seamless looping
  const loopingImages = [];
  for (let i = 0; i < duplicateCount; i++) {
    loopingImages.push(...images.map((img, index) => ({
      ...img,
      loopId: `${img.id}-${i}`
    })));
  }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideClass }} />

      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide"
        style={{
          ...scrollbarHideStyles,
          scrollBehavior: 'auto'
        }}
      >
        {loopingImages.map((image, index) => (
          <div
            key={`${image.loopId}-${index}`}
            className="flex-shrink-0"
            style={{
              marginLeft: `${gap / 2}px`,
              marginRight: `${gap / 2}px`
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover rounded"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const myImages = [
  { id: 1, url: "/careers-photo-1.jpg", alt: "Description 1" },
  { id: 2, url: "/careers-photo-2.jpg", alt: "Description 2" },
  { id: 3, url: "/careers-photo-3.jpg", alt: "Description 3" },
  { id: 4, url: "/careers-photo-4.jpg", alt: "Description 4" },
  { id: 5, url: "/careers-photo-5.jpg", alt: "Description 5" },
  { id: 6, url: "/careers-photo-6.jpg", alt: "Description 6" },
  { id: 7, url: "/careers-photo-7.jpg", alt: "Description 7" },
  { id: 8, url: "/careers-photo-8.jpg", alt: "Description 8" },
  { id: 9, url: "/careers-photo-9.jpg", alt: "Description 9" },
];

const FAQSection = () => {
  const IoTDevelopmentFaqs = [
    {
      question: "What are IoT services?",
      answer: (
        <>
          <p>IoT services encompass a range of services for designing, implementing, and maintaining IoT solutions. These include consulting, hardware-software integration, IoT network architecture design, data processing, device management, cloud integration, full-fledged IoT app development, and ongoing support. At foxsolutions, we provide all these services as part of our IoT software development services.</p>
        </>
      )
    },
    {
      question: "What is IoT in software development?",
      answer: (
        <>
          <p>IoT stands for the Internet of Things, which is a network of interconnected devices like vehicles, agricultural sensors, home appliances, etc. When we talk about IoT app development services, we usually mean different activities aimed at developing applications and systems that are operated using these interconnected devices.</p>
        </>
      )
    },
    {
      question: "What are the fundamental components of IoT?",
      answer: (
        <>
          <p>The fundamental IoT components are those that form the foundation of the device network:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>sensors/devices that are responsible for data collection;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>connectivity layer that enables data transfer between devices and the cloud;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>data processing layer, which involves filtering and processing of the gathered data;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>user app.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      question: "What protocols are used in IoT?",
      answer: (
        <>
          <p>IoT protocols are categorized into two groups based on the operation range: local and global.</p>
          <p className="mt-2"><strong>local protocols</strong> – for short-range communication within confined areas, such as Bluetooth Low Energy (BLE), ZigBee, and Wi-Fi.</p>
          <p className="mt-2"><strong>global protocols</strong> – for long-range communication, connecting devices to the Internet, like LoRaWAN, NB-IoT, 4G LTE, and 5G networks.</p>
        </>
      )
    },
    {
      question: "What does an IoT developer do?",
      answer: (
        <>
          <p>An IoT developer designs, builds, and manages software that powers IoT devices and ecosystems. Their work includes integrating hardware with software, implementing communication protocols, developing data processing systems, ensuring security, and creating IoT user apps that seamlessly interact with the IoT network.</p>
        </>
      )
    },
    {
      question: "How much does IoT development cost?",
      answer: (
        <>
          <p>The cost includes two main components:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>device costs that vary based on whether it's a ready-made or custom-built device;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>IoT ecosystem development costs that include connectivity, data processing, and user interface development, starting at $20K for an MVP.</span>
            </li>
          </ul>
          <p className="mt-2">Costs also depend on the IoT app development company's location, with lower rates in Eastern Europe compared to the USA.</p>
        </>
      )
    }
  ];

  return (
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={IoTDevelopmentFaqs} />
    </section>
  )
};

const IoTDevelopmentPage = () => {
  const sections = [
    { id: 'hero', title: 'Overview' },
    { id: 'services', title: 'Services' },
    { id: 'industries', title: 'Industries' },
    { id: 'consulting', title: 'Consulting' },
    { id: 'strategy', title: 'Strategy' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'stack', title: 'Teck Stack' },
    { id: 'architecture', title: 'Architecture' },
    { id: 'estimation', title: 'Estimation' },
    { id: 'why-fox-solutions', title: 'Why Fox Solutions' },
    { id: 'contact', title: 'Get in Touch' },
    { id: 'faq', title: 'FAQ' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />


      {/* Hero Section */}
      <section id="hero" className="relative py-36 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center text-sm mb-6">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
              <span className="mx-2">›</span>
              <a href="/solutions" className="text-gray-300 hover:text-white">Solutions</a>
              <span className="mx-2">›</span>
              <span className="text-blue-300">IoT software development</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <span className="text-blue-400">Internet of Things</span> software development services
            </h1>

            <p className="text-lg mb-8">
              Our full-range IoT software development services are aimed at establishing an IoT
              framework that integrates software solutions, hardware components equipped with
              sensors, and cloud-based data centers. We help businesses create high-performing
              solutions.
            </p>

            <div className="flex flex-wrap items-center mt-10">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-4 rounded mr-4">
                Get in Touch
              </button>

              <div className="flex items-center">
                <button className="border border-white hover:bg-white/10 text-white font-medium px-8 py-4 rounded">
                  View our IoT projects
                </button>

                <div className="ml-12 flex items-center">
                  <span className="mr-2 text-sm">Clients rate our services</span>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="ml-2 font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Table of Contents */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Column */}
          <div className="w-full lg:w-[calc(100%-320px)]">
            {/* Services Section */}
            <section id="services" className="bg-[#1a365d] text-white rounded-lg p-8 mb-12">
              <RevealOnScroll>
                <h2 className="text-3xl font-bold mb-8">Our IoT software development services</h2>
                <p className="text-xl text-gray-200 mb-12">
                  We develop access IoT web and mobile applications and help businesses benefit from interconnected devices and
                  commons streams of environmental data. As an IoT app development company, Shareafix® offers the following
                  services:
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Data Retrieval */}
                  <div id="data-retrieval" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">Data retrieval</h3>
                    <p className="text-gray-300">
                      A multi-target-of-IT development broadcast deployment of
                      training software solutions for real attributes from various
                      business names (emails: console, or Internet device). The time
                      used to download, download and securely search the abstract
                      user can be first shared.
                    </p>
                  </div>

                  {/* Data Analysis */}
                  <div id="data-analysis" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">Data analysis</h3>
                    <p className="text-gray-300">
                      The problem of plug-in methods helps us collect systems and
                      assign features of things like: On-LoT and Mobile Applications,
                      another help which potentially of their destination involves
                      Converging, on-line/offers payment backend in highs.
                    </p>
                  </div>

                  {/* Data Processing */}
                  <div id="data-processing" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">Data processing</h3>
                    <p className="text-gray-300">
                      One brings this related role to a process of a Android-to-Biased
                      network and network search via cloud - see the Android
                      Network Model 1.1 - view - set Windows to ensure efficient
                      Protection Communication. We use up to sixkbit cloud applications
                      to aggregate IoT data and generate:
                    </p>
                  </div>

                  {/* IoT Solution Consulting */}
                  <div id="iot-consulting" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">IoT solution consulting</h3>
                    <p className="text-gray-300">
                      We offer apps that use the machine, languages, and
                      communication of all devices and platforms. Our consulting services
                      include developing an IoT product marketing strategy and
                      certification consulting, network architecture, and of services, and
                      RGI models. We help you confidently access our benefits and
                      value IoT right today.
                    </p>
                  </div>

                  {/* IoT Data Visualization Apps */}
                  <div id="data-visualization" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">IoT data visualization apps</h3>
                    <p className="text-gray-300">
                      We create hackles apps and informable databases that
                      transform users for real-time managed actions and alternatives,
                      resulting in the integration and scalability of each. Designing the
                      hackle loops such as if users share, are sufficient mobile offering
                      devices more than one client according to our own
                      requirements. We also perform assessing link-related expenses,
                      more fully creating an automated system interface, our user
                      employee, and its main clients database with confidence.
                    </p>
                  </div>

                  {/* Development of Remote Control Apps */}
                  <div id="remote-control" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">Development of remote control apps</h3>
                    <p className="text-gray-300">
                      We develop applications that use an e-blog-hadoop name and
                      is of choice. Our solution name successfully and actively for
                      commercial use is dedicated to large-scale distributed
                      components. Whether for industrial automation, home automation,
                      or business development, we urge current assurance forecasts,
                      and sustainability ideas anywhere.
                    </p>
                  </div>

                  {/* QA and Testing */}
                  <div id="qa-testing" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">QA and testing</h3>
                    <p className="text-gray-300">
                      We use a presentation for Quality Assurance (QA) services tailored
                      for IoT applications. Our research includes developing a
                      automated QA desktop, controlling desktop-oriented and
                      managing tools, creating smartphones, operating at runtime
                      management strategy, and enable users to ensure that software
                      downs the highest standards before release and hardware
                      accessibility.
                    </p>
                  </div>

                  {/* IoT App Management and Support */}
                  <div id="management-support" className="space-y-4">
                    <ServiceLogo icon={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    } />
                    <h3 className="text-2xl font-semibold text-center">IoT app management and support</h3>
                    <p className="text-gray-300">
                      Our management and support service includes proactive
                      technology, regular updates, accelerators, notifications, and quick
                      home analytics to facilitate distribution, and an IoT development
                      service within the core source that IoT application remains effective,
                      receiving cost-up-to-date.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            {/* Industry-focused */}
            <section id="industries" className="py-12 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="text-blue-500">Industry-focused</span> IoT product development
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                    Companies worldwide are exploring the full potential of Internet of Things (IoT) technologies and the benefits of
                    collecting and analyzing data. The reality is that the solutions we work with vary by industry finding unique ways
                    to leverage IoT software development to enhance their operations, boost profitability, and streamline business
                    processes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Healthcare */}
                  <div className="flex bg-gray-50 rounded-md overflow-hidden shadow-sm mb-6">
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
                      <ul className="space-y-1 mb-4 text-sm">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">remote patient monitoring (RPM)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">medical imaging solutions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">modernized patient assistance</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">and more healthcare IoT solutions</span>
                        </li>
                      </ul>
                      <a href="/healthcare" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center mt-auto">
                        IoT development in healthcare
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="bg-gray-100 w-32 flex items-center justify-center">
                      <img src="/Healthcare.webp" alt="Healthcare IoT" className="max-h-full" />
                    </div>
                  </div>

                  {/* Retail */}
                  <div className="flex bg-gray-50 rounded-md overflow-hidden shadow-sm mb-6">
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Retail</h3>
                      <ul className="space-y-1 mb-4 text-sm">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">smart shelves</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">delivery optimization</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">warehouse automation</span>
                        </li>
                      </ul>
                      <a href="/retail" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center mt-auto">
                        Internet of Things in retail solutions
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="bg-gray-100 w-32 flex items-center justify-center">
                      <img src="/Retail.webp" alt="Retail IoT" className="max-h-full" />
                    </div>
                  </div>

                  {/* Manufacturing */}
                  <div className="flex bg-gray-50 rounded-md overflow-hidden shadow-sm mb-6">
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                      <ul className="space-y-1 mb-4 text-sm">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">robotics</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">remote monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">predictive maintenance</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">and more</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 w-32 flex items-center justify-center">
                      <img src="/Manufacturing.webp" alt="Manufacturing IoT" className="max-h-full" />
                    </div>
                  </div>

                  {/* Smart homes & cities */}
                  <div className="flex bg-gray-50 rounded-md overflow-hidden shadow-sm mb-6">
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Smart homes & cities</h3>
                      <ul className="space-y-1 mb-4 text-sm">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">smart traffic lights</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">waste management systems</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">CCTV surveillance systems</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">and more</span>
                        </li>
                      </ul>
                      <a href="/smart-cities" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center mt-auto">
                        Smart cities IoT development
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="bg-gray-100 w-32 flex items-center justify-center">
                      <img src="/Smart-home-cities.webp" alt="Smart Cities IoT" className="max-h-full" />
                    </div>
                  </div>

                  {/* Automotive */}
                  <div className="flex bg-gray-50 rounded-md overflow-hidden shadow-sm mb-6">
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Automotive</h3>
                      <ul className="space-y-1 mb-4 text-sm">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">fleet management & monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">vehicle tracking</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">driver safety</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">and more</span>
                        </li>
                      </ul>
                      <a href="/automotive" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center mt-auto">
                        Internet of Things in logistics
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="bg-gray-100 w-32 flex items-center justify-center">
                      <img src="/Automotive.webp" alt="Automotive IoT" className="max-h-full" />
                    </div>
                  </div>

                  {/* Your niche */}
                  <div className="flex bg-gray-50 rounded-md overflow-hidden shadow-sm mb-6">
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">Your niche</h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        Can't match what we offer but feel like IoT <br></br>could open up new vistas for your business.
                      </p>
                      <a href="/contact" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center mt-auto">
                        Get in touch
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="bg-gray-100 w-32 flex items-center justify-center">
                      <img src="/Your-niche.webp" alt="Custom IoT Solutions" className="max-h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* IoT consulting */}
            <section id='consulting' className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-center mb-12">
                <span className="text-gray-900">IoT</span>
                <span className="text-blue-500"> consulting</span>
                <span className="text-gray-900"> & software</span>
                <span className="text-blue-500"> development</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* IoT Solution Consulting Column */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-blue-500">
                    <div className="relative">
                      <FaRegLightbulb size={64} className="absolute" />
                      <FaCogs size={64} className="opacity-0" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-6 text-center">IoT solution consulting</h2>
                  <ul className="space-y-4 w-full">
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">discovering implementation opportunities, such as streamlined operations, cost reduction, and waste minimization;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">developing a detailed IoT product roadmap with clear budgets, timelines, and milestones;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">providing security and compliance consulting and audits to meet standards like GDPR and HIPAA;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">selecting the optimal technology stack, including hardware, software, and communication protocols;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">designing scalable, secure, and resilient IoT network architectures;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">running proofs of concept to assess potential benefits and ROI before full-scale development;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">establishing data governance practices to ensure data quality, security, and usability;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">planning integration of IoT systems with existing solutions like CRM and ERP platforms;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">requirements engineering.</span>
                    </li>
                  </ul>
                </div>

                {/* IoT Project Development Column */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-blue-500">
                    <FaCogs size={64} />
                  </div>
                  <h2 className="text-xl font-bold mb-6 text-center">IoT project development</h2>
                  <ul className="space-y-4 w-full">
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">eliciting business and user requirements;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">designing the IoT architecture;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">creating user-friendly UI/UX designs for end-user applications;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">establishing data governance policies for managing, storing, and sharing IoT data;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">connecting and configuring IoT devices;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">building servers, databases, and APIs;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">setting up cloud storage and computational resources;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">implementing edge computing;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">conducting rigorous quality assurance and security testing;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">developing informative dashboards for real-time monitoring and analytics;</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">deploying IoT systems, providing user training, and offering ongoing support and updates.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <IoTProcess />

            < PricingModelSection />

            {/* Contact CTA Section */}
            <section id="get" className="bg-[#1a365d] text-white rounded-lg p-12 mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                    Let's discuss your IoT project!
                  </h2>
                  <p className="text-xl text-left">
                    Drop us a line and discuss your project within 1 business day with our IoT experts.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                    Get in touch
                  </button>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section id='stack'>
              <img
                src="/Tech-stack.png"
                alt="Technologies we work with including AWS IoT, Azure IoT, and Google Cloud services"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy" />
            </section>

            {/* iot-architecture */}
            <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  IoT architecture to streamline any business
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  From sensors and connectivity protocols to edge devices and cloud platforms, we carefully design each layer of the IoT architecture as a part of our IoT software development services. We select the optimal technology stack to maximize benefits for the specific industry, integrate the network with business tools such as CRM and ERP platforms, and tailor the entire IoT ecosystem to align with your business requirements, device capabilities, compatibility needs, budget, and timelines.
                </p>
              </div>
              <div className="my-12 px-4 sm:px-0">
                <img
                  src="/iot-architecture.png"
                  alt="IoT Architecture Layers Diagram showing Physical and Application levels"
                  className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800/50"
                />
              </div>
            </section>

            {/* Cost Estimator */}
            <section id='estimation'>
              <CostEstimator />
            </section>

            {/* Why Fox Solutions */}
            <section id="why-fox-solutions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Fox Solutions is the right IoT company</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Since 2012, we have helped companies to gain competitive benefits by applying the best IT innovations, one of which is IoT. Over the years, we have gained rich experience in the Internet of Things solution development and summarized some mandatory requirements for IoT development. We have become a reliable software development partner for many businesses in 26 countries, including the US.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Guarantee */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M16.59 7.58L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Guarantee</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We guarantee to fix bugs after IoT software development services for a period agreed upon with you before the project begins.
                    </p>
                  </div>
                </div>

                {/* Security mastery */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Security mastery</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      As an ISO 27001-certified company, we adhere to the highest international standards for information security, including compliance with HIPAA and GDPR.
                    </p>
                  </div>
                </div>

                {/* Quick time to market */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick time to market</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We start IoT projects the next day after contracting in 95% of cases, with rapid MVP development within 6 months and biweekly demos showcasing newly developed functionalities.
                    </p>
                  </div>
                </div>

                {/* Scalability */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M16 3h3v3h-3zm4 0h-3v3h3zm-7 0h-3v3h3zm-4 0H6v3h3zm-5 0H3v3h3zm18 4h-3v3h3zm-4 0h-3v3h3zm-4 0h-3v3h3zm-4 0H6v3h3zm-4 0H3v3h3zm18 4h-3v3h3zm-4 0h-3v3h3zm-4 0h-3v3h3zm-4 0H6v3h3zm-4 0H3v3h3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Scalability</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We follow internal standards for building scalable IoT solutions, including microservices architecture, scalable cloud storage and computational resources, load balancers, optimized resource allocation, technologies for handling high volumes of asynchronous data transfer, and more.
                    </p>
                  </div>
                </div>

                {/* Transparency */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Transparency</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transparency is our core value, meaning you receive detailed time and budget estimations, regular progress reports, timely notifications about any changes or issues, and real-time access to our project management tool. We have nothing to hide.
                    </p>
                  </div>
                </div>

                {/* IoT device management */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">IoT device management</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our IoT applications feature simplified processes for securely connecting and configuring new devices, OTA updates, intuitive and informative dashboards for device management, tools for troubleshooting device connections, and more.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Year showcase */}
            <div className="w-full bg-white py-8 px-4 md:px-8">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* Left side with heading */}
                <div className="max-w-md">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    For <span className="text-blue-500">3+ years</span>, we have proudly taken
                    responsibility for your IoT projects!
                  </h1>
                </div>

                {/* Right side with stats */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  {/* Stat 1 */}
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">10+</span>
                    <span className="text-sm md:text-base text-gray-600">Developed custom solutions</span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">25+</span>
                    <span className="text-sm md:text-base text-gray-600">States, including Maharashtra</span>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">70%</span>
                    <span className="text-sm md:text-base text-gray-600">Senior engineers</span>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">98%</span>
                    <span className="text-sm md:text-base text-gray-600">Satisfaction rate</span>
                  </div>

                  {/* Stat 5 */}
                  <div className="flex flex-col col-span-2 md:col-span-1">
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">3+</span>
                    <span className="text-sm md:text-base text-gray-600">Years' Client engagement</span>
                  </div>
                </div>
              </div>
            </div>

            <CertificationsWrapper />

            <InfiniteImageCarousel
              images={myImages}
              speed={1}
              imageWidth={300}
              imageHeight={200}
              gap={16}
              className="my-custom-class"
            />

            <section id='contact' className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
              <Contact />
            </section>

            <FAQSection />

          </div>

          {/* Table of Contents Sidebar - Sticky */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents sections={sections} />
            </div>
          </div>
        </div>
      </div>
      <section id='footer'>
        <Footer />
      </section>
    </div>

  );
};

export default IoTDevelopmentPage;