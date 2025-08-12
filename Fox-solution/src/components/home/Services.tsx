
import { useState, useEffect } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedButton from '../ui/AnimatedButton';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
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

const Industries = () => {
  const industries = [
    {
      title: 'Healthcare',
      description: 'We develop services, tools, and systems to provide patients and staff with up-to-date software.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Manufacturing',
      description: 'Comprehensive software solutions for supply chain management, inventory management, warehouses, production monitoring, process automation, and more.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Logistics & Transportation',
      description: 'Software for freight reservation, transportation management, and',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: 'Education',
      description: 'E-learning solutions that make education flexible, engaging, and highly efficient.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Professional Services',
      description: 'We develop CRM, management tools, billing products, document management systems, and more. Our solutions are built for professionals by professionals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )

    },
    {
      title: 'Engineering & Construction',
      description: 'From advanced BIM solutions and cost automation tools to IoT infrastructure, use low',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Retail',
      description: 'We build stronger connections with customers through web and mobile applications with superior shopping experience and 24/7 availability.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Telecoms',
      description: 'We enhance global communication by building solutions for network management, customer experience, IoT, security, automation, and analytics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Marketing & Advertising',
      description: 'We build effective Client relationships with marketing as innovation tools that help.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
  ];



  return (
    <div className="container px-12 mx-auto bg-blue-950 rounded-lg py-10 mt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-3xl  mb-4 text-white">Industries</span>{' '}
              <span className="text-3xl  mb-4 text-white">We Help</span>
            </h2>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {industries.map((industry, index) => (
            <RevealOnScroll key={index} delay={index * 50} className={`
              bg-gradient-to-br from-[#1a1e4a] to-[#0e1133] 
              rounded-lg p-8 transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl hover:bg-blue-600
              relative overflow-hidden flex flex-col
              min-h-[200px]
            `}
            >
              <div className="p-4">
                <div className='flex items-center mb-3'>
                  <div className="bg-transparent p-2">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
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

const serviceItems = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom web applications and websites built with cutting-edge technologies for maximum performance and scalability. These solutions are tailored to meet the unique needs of each business, ensuring seamless user experiences, intuitive interfaces, and robust backend systems. Leveraging modern frameworks and development best practices, our web development process emphasizes security, responsiveness, and cross-platform compatibility. From concept to deployment, we work closely with clients to deliver feature-rich, SEO-optimized, and mobile-friendly websites that drive engagement and support long-term growth. Whether youre launching a new digital presence or enhancing an existing platform, our team ensures your website aligns with your brand identity and business objectives.',
    features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration', 'Enterprise-grade API development',
      'Cloud-native architecture',
      'Headless CMS implementation',
      'Web security audits & penetration testing',
      'Microservices architecture',
      'Continuous integration/delivery pipelines'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices. Our mobile solutions are designed to be fast, reliable, and scalable, ensuring optimal performance whether on iOS, Android, or both. By utilizing technologies such as Kotlin, React Native, and Flutter, we create apps that combine sleek user interfaces with powerful functionality. From initial strategy and UI/UX design to development, testing, and deployment, we provide end-to-end mobile development services tailored to your business goals. Our focus on intuitive navigation, seamless integration with backend systems, and offline capabilities ensures your app not only meets user expectations but also drives engagement and retention.',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization', 'Biometric authentication integration',
      'AR/VR mobile experiences',
      'Offline-first functionality',
      'Cross-platform React Native/Flutter apps',
      'Mobile backend-as-a-service (BaaS)',
      'IoT device connectivity'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive, engaging, and delightful experiences for your users. Our design approach is rooted in deep user research and industry best practices to ensure that every interaction on your website is meaningful and seamless. We focus on creating clean, modern interfaces that reflect your brand identity while enhancing usability across all devices. From wireframes and prototypes to high-fidelity designs, we craft user journeys that are not only visually appealing but also strategically aligned with your business objectives. By prioritizing accessibility, responsiveness, and consistency, we help you deliver a digital experience that keeps visitors engaged and encourages conversion.',
    features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing', 'Design system creation',
      'Accessibility (WCAG 2.1 compliance)',
      'Motion design & micro-interactions',
      'User journey mapping',
      'Design thinking workshops',
      'Brand identity integration'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions that increase your visibility, drive traffic, and convert visitors into customers. Our data-driven approach combines SEO, content marketing, social media strategies, and paid advertising to ensure your brand reaches the right audience at the right time. We optimize your website for search engines, craft compelling content that resonates with your target market, and leverage platforms like Google Ads, Facebook, and LinkedIn to maximize ROI. Through continuous performance monitoring and analytics, we refine campaigns for better engagement and conversion rates. Whether you are looking to build brand awareness, generate leads, or boost sales, our digital marketing services are tailored to help you achieve measurable business growth.',
    features: ['SEO & SEM', 'Content Marketing', 'Social Media', 'Email Campaigns', 'Conversion rate optimization (CRO)',
      'Marketing automation workflows',
      'Influencer marketing strategies',
      'Omnichannel campaign management',
      'Data-driven audience segmentation',
      'Retargeting pixel implementation'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: 'AI-Development',
    title: 'AI Development Services',
    description: 'Cutting-edge AI development services that empower businesses with intelligent automation, data-driven insights, and scalable solutions to enhance efficiency and innovation. We specialize in building custom AI solutions—from machine learning models and natural language processing to predictive analytics and computer vision—that integrate seamlessly with your existing systems. Our AI-driven applications are designed to streamline operations, personalize customer experiences, and uncover actionable insights from complex data sets. Whether you are looking to implement chatbots, recommendation engines, or advanced analytics platforms, our team delivers robust, future-ready solutions that give your business a competitive edge in the digital landscape.',
    features: ['Custom AI Model Development', 'Machine Learning & Deep Learning Solutions', 'Computer Vision & Image Recognition', 'Predictive Analytics & Data Automation', 'Natural Language Processing (NLP)',
      'AI-powered recommendation engines',
      'Generative AI solutions',
      'Predictive maintenance systems',
      'AI model training pipelines',
      'Explainable AI (XAI) frameworks'],
    icon: (

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-3-3m0 0l-3 3m3-3v6" />
      </svg>
    ),
  },
  {
    id: 'Block-Chain-Development',
    title: 'Block Chain Development Services',
    description: 'Cutting-edge blockchain development services delivering secure, transparent solutions that transform operations, enhance data integrity, and drive business growth through custom implementations tailored to your industry needs. Our expertise spans across private, public, and hybrid blockchain architectures, enabling us to build decentralized applications (dApps), smart contracts, and enterprise-grade blockchain systems that ensure trust, traceability, and automation. We work with leading platforms such as Ethereum, Hyperledger, and Binance Smart Chain to develop scalable solutions for finance, supply chain, healthcare, and more. From initial consultation and architecture design to deployment and maintenance, we provide end-to-end blockchain development that empowers your business with next-generation digital trust and operational efficiency.',
    features: ['Custom Blockchain Architecture & Development', 'Smart Contract Development & Automation', 'Decentralized Application (DApp) Engineering', 'Tokenization & Digital Asset Management', 'DeFi platform development',
      'NFT marketplace creation',
      'Blockchain interoperability solutions',
      'Cryptocurrency wallet development',
      'Smart contract auditing',
      'DAO architecture design'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">

        <rect x="5" y="8" width="4" height="4" rx="0.8" />
        <rect x="10" y="5" width="4" height="4" rx="0.8" />
        <rect x="15" y="8" width="4" height="4" rx="0.8" />
        <rect x="10" y="15" width="4" height="4" rx="0.8" />
        <rect x="5" y="15" width="4" height="4" rx="0.8" />
        <rect x="15" y="15" width="4" height="4" rx="0.8" />

        <line x1="9" y1="10" x2="10" y2="9" />
        <line x1="14" y1="7" x2="15" y2="8" />
        <line x1="14" y1="9" x2="15" y2="10" />
        <line x1="7" y1="12" x2="7" y2="15" />
        <line x1="17" y1="12" x2="17" y2="15" />
        <line x1="9" y1="17" x2="10" y2="17" />
        <line x1="14" y1="17" x2="15" y2="17" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>

    ),
  },
  {
    id: 'Healthcare-Development',
    title: 'Health IoT Development Services',
    description: 'Transforming healthcare with innovative IoT solutions that enable real-time monitoring, smart diagnostics, and seamless connectivity to enhance patient outcomes and operational efficiency. Our Health IoT development services focus on creating secure, interoperable systems that connect medical devices, wearables, and healthcare platforms to deliver actionable insights and improve decision-making. From remote patient monitoring and telemedicine integrations to automated alerts and predictive analytics, we design and develop customized IoT ecosystems that support proactive care and streamline clinical workflows. Prioritizing data security, HIPAA compliance, and user-centric design, our solutions empower healthcare providers to deliver more personalized, efficient, and connected care experiences.',
    features: ['Remote Patient Monitoring (RPM)', 'AI-Driven Predictive Analytics', 'Smart Wearable & Sensor Integration', 'Secure Data Management & Cloud Connectivity', 'HIPAA-compliant data architecture',
      'Telemedicine platform integration',
      'Medical device interoperability',
      'AI-powered diagnostic support',
      'Emergency response systems',
      'Clinical trial data management'],
    icon: (

      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 3.5L4 6v5c0 4.5 8 8.5 8 8.5s8-4 8-8.5V6l-8-2.5z" />
        <rect x="8" y="9" width="6" height="5" rx="1" />
        <path d="M6 15l2-3 2 2 2-4 2 3 2-2 2 4" strokeLinecap="round" />
        <circle cx="5" cy="12" r="0.8" />
        <circle cx="19" cy="12" r="0.8" />
        <circle cx="12" cy="19" r="0.8" />
      </svg>
    ),
  },
  // Data Analytics Service
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics Solutions',
    description: 'Unlock business potential with predictive modeling, real-time dashboards, and AI-powered insights that transform raw data into actionable strategies. Our advanced data analytics services help organizations harness the full value of their data by identifying trends, uncovering opportunities, and optimizing decision-making processes. We leverage cutting-edge tools and technologies in big data, machine learning, and cloud computing to build scalable analytics frameworks tailored to your business objectives. From data warehousing and ETL processes to interactive visualizations and automated reporting, we deliver end-to-end solutions that empower teams with the intelligence needed to drive growth, improve efficiency, and stay ahead of the competition.',
    features: ['Big Data Processing', 'Machine Learning Integration', 'Interactive Data Visualization', 'KPI Tracking & Reporting', 'Real-time stream processing',
      'Prescriptive analytics engines',
      'Data lake architecture',
      'Anomaly detection systems',
      'Data governance frameworks',
      'AI-powered forecasting models'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 3v18h18" strokeLinecap="round" />
        <path d="M18 14l-4-6-4 4.5-3-3.5" strokeLinecap="round" />
        <circle cx="19" cy="5" r="1.2" />
        <circle cx="12" cy="9" r="1.2" />
        <circle cx="5" cy="14" r="1.2" />
      </svg>
    ),
  },

  // Enterprise Software Development
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Solutions',
    description: 'Build robust, scalable business systems with secure architecture and seamless integration for digital transformation. Our enterprise software solutions are designed to streamline operations, improve productivity, and support long-term growth by aligning technology with your unique business processes. Whether you need ERP systems, CRM platforms, workflow automation tools, or custom enterprise applications, we develop solutions that are scalable, flexible, and easy to integrate with existing infrastructure. With a strong focus on security, performance, and user experience, we ensure that your enterprise systems not only meet current demands but also adapt to future needs. From architecture design to deployment and ongoing support, we deliver comprehensive software solutions that power innovation and operational excellence.',
    features: ['ERP Customization', 'Workflow Automation', 'Legacy System Modernization', 'Cross-Platform Integration', 'Digital twin implementation',
      'Low-code workflow automation',
      'SAP/Oracle system integration',
      'Zero-trust security architecture',
      'Business process re-engineering',
      'Mainframe modernization'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h3m5 0h-3m-5 8h3m5 0h-3M8 12h8" />
      </svg>
    ),
  },

  // SaaS Development
  {
    id: 'saas-development',
    title: 'Cloud SaaS Platforms',
    description: 'Develop scalable subscription-based solutions with multi-tenant architecture and cloud-native performance. Our Cloud SaaS development services focus on building robust, secure, and high-performing platforms that support rapid growth and continuous delivery. Leveraging cloud infrastructure providers like AWS, Azure, and Google Cloud, we architect solutions that offer seamless scalability, high availability, and efficient resource management. From intuitive user interfaces and flexible billing systems to API integrations and real-time analytics, we deliver end-to-end SaaS platforms tailored to meet the demands of your industry. With a focus on DevOps, CI/CD pipelines, and data security compliance, our solutions ensure smooth deployments, easy maintenance, and exceptional user experiences across all devices and regions.',
    features: ['Multi-Tenant Architecture', 'Subscription Management', 'API-First Development', 'Auto-Scaling Infrastructure', 'Usage-based billing systems',
      'Multi-cloud deployment',
      'SOC 2 compliance architecture',
      'Feature flag management',
      'CI/CD for SaaS products',
      'Customer success analytics'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 10h3l-6-9-6 9h3v11h6V10z" />
        <path d="M8 14l-3 3 3 3m8-6l3 3-3 3" />
      </svg>
    ),
  },

  // Logistics Software
  {
    id: 'logistics-software',
    title: 'Smart Logistics Systems',
    description: 'Optimize supply chain operations with AI-driven route planning and real-time inventory management. Our smart logistics solutions leverage advanced technologies such as IoT, machine learning, and predictive analytics to enhance visibility, efficiency, and responsiveness across the entire logistics lifecycle. From automated warehouse management and fleet tracking to demand forecasting and dynamic route optimization, we develop intelligent systems that reduce costs, minimize delays, and improve customer satisfaction. With seamless integration into existing ERP and supply chain platforms, our solutions provide actionable insights, enable proactive decision-making, and ensure end-to-end transparency. Whether you are managing last-mile delivery or global logistics networks, we help you stay agile, data-driven, and competitive in a fast-evolving marketplace.',
    features: ['Fleet Management', 'Warehouse Automation', 'Delivery Tracking', 'IoT Sensor Integration', 'Dynamic route optimization AI',
      'Cold chain monitoring',
      'Autonomous vehicle integration',
      'Blockchain-based tracking',
      'Carbon footprint analytics',
      '3PL management portals'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 16l5-5-5-5M8 8L3 13l5 5" />
        <rect x="7" y="3" width="10" height="6" rx="1" />
        <path d="M12 13v5m0-8V3" />
      </svg>
    ),
  },

  // EdTech Software
  {
    id: 'edtech-solutions',
    title: 'EdTech Platforms',
    description: 'Create engaging learning experiences with virtual classrooms and adaptive learning technologies. Our EdTech solutions are designed to transform traditional education models by integrating interactive content, real-time collaboration tools, and personalized learning paths powered by AI. We build scalable platforms that support live streaming, video conferencing, gamified assessments, and progress tracking to foster deeper student engagement and improved learning outcomes. Whether for K-12, higher education, or corporate training, our platforms ensure accessibility, cross-device compatibility, and secure data management. By combining innovative technology with pedagogical expertise, we deliver smart educational environments that empower educators, inspire learners, and redefine digital learning.',
    features: ['LMS Development', 'Interactive Courseware', 'Progress Analytics', 'Collaboration Tools', 'Adaptive learning algorithms',
      'Proctoring system integration',
      'LTI tool compatibility',
      'Competency-based education models',
      'AR/VR classroom experiences',
      'Learning record store (LRS)'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L3 7l9 5 9-5-9-5zM3 7l9 5 9-5M3 7v10l9 5 9-5V7" />
        <path d="M12 22V12M8 14l4 2 4-2" />
      </svg>
    ),
  },


];
const TechStack = () => {
  const techCategories = [
    {
      name: 'Backend Development',
      technologies: [
        { name: 'Java', image: '/java.svg', height: 'h-16' },
        { name: '.NET', image: '/dotnet-logo.svg', height: 'h-14' },
        { name: 'Ruby on Rails', image: '/rubyrails.svg', height: 'h-14' },
        { name: 'Python', image: '/python.svg', height: 'h-16' },
        { name: 'Node.js', image: '/nodejs.svg', height: 'h-16' },
        { name: 'JavaScript', image: '/javascript.svg', height: 'h-12' },
      ]
    },
    {
      name: 'Frontend Development',
      technologies: [
        { name: 'React', image: '/reactjs.svg', height: 'h-12' },
        { name: 'Angular', image: '/angular.svg', height: 'h-16' },
        { name: 'Next.js', image: '/nextjs.svg', height: 'h-12' },
        { name: 'Vue.js', image: '/vuejs.svg', height: 'h-12' },
        { name: 'Bootstrap', image: '/Bootstrap.png', height: 'h-12' },
        { name: 'jQuery', image: '/jquery.svg', height: 'h-16' },
        { name: 'Django', image: '/django.svg', height: 'h-16' },
      ]
    },
    {
      name: 'Mobile Development',
      technologies: [
        { name: 'React Native', image: '/reactnative.svg', height: 'h-12' },
        { name: 'iOS', image: '/ios.svg', height: 'h-12' },
        { name: 'Android', image: '/android.svg', height: 'h-12' },
      ]
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-blue-500">Core tech stack</span> we work with
        </h2>

        {techCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-60 text-gray-800 font-medium"></div>
              <div className="flex-grow h-px bg-gray-400"></div>
            </div>

            <div className="flex flex-wrap items-start gap-16">
              <h2 className="font-medium w-48">{category.name}</h2>
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className={tech.height}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdvancedTech = () => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // Data structure for the tech cards
  const techCards = [
    {
      id: 'bigData',
      title: 'Big Data',
      description: 'Data is the lifeblood of the modern digital era, and we are on top of it, helping businesses process and transform data for their needs. Whether it\'s optimizing operations, enhancing customer experiences, or identifying market trends, our big data expertise transforms raw data into a strategic asset for the business.',
      services: [
        'data collection and integration from multiple sources',
        'scalable data pipeline development',
        'advanced data analytics and visualization',
        'predictive modeling and forecasting',
        'real-time data processing and analysis',
        'big data infrastructure setup and management',
        'data warehouse and lake design',
        'machine learning integration for enhanced insights',
        'customer behavior and trend analysis',
        'data security and compliance solutions'
      ],
      linkText: 'Big Data services',
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/128/2245/2245170.png" alt="Cost estimation" className="w-8 h-8" />
      )
    },
    {
      id: 'iot',
      title: 'Internet of Things (IoT)',
      description: 'Connect devices, monitor operations, and streamline workflows with our IoT solutions. From smart manufacturing and predictive maintenance to supply chain optimization and remote monitoring, we deliver tailored IoT projects that drive innovation across industries.',
      services: [
        'custom IoT solution development',
        'IoT device integration and connectivity',
        'real-time data collection and analysis',
        'predictive maintenance solutions',
        'smart manufacturing and automation systems',
        'fleet management and tracking applications',
        'IoT consulting',
        'remote monitoring and control systems',
        'IoT data visualization and dashboards',
        'secure IoT infrastructure and compliance'
      ],
      linkText: 'IoT software development',
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/128/15762/15762349.png" alt="Cost estimation" className="w-8 h-8" />
      )
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'From predictive analytics to machine learning, computer vision, chatbot assistants, and AI-powered healthcare diagnostics, AI impacts spans every industry. We design tailored AI models and integrate AI tools into our projects to drive business transformation.',
      services: [
        'custom AI model development',
        'predictive analytics and forecasting solutions',
        'machine learning algorithm implementation',
        'natural language processing (NLP) for chatbots and assistants',
        'computer vision for image and video analysis',
        'AI-powered healthcare diagnostics and decision support',
        'AI tools for predictive maintenance',
        'consulting on implementing AI',
        'sentiment analysis and customer behavior prediction',
        'AI integration with existing software systems'
      ],
      linkText: 'AI development',
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/128/16706/16706320.png" alt="Cost estimation" className="w-8 h-8" />
      )
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      description: 'Unlock the potential of blockchain technology with our services. From smart contracts and digital wallets to supply chain traceability and financial transactions, we develop secure software solutions with tamper-proof records and complete data integrity.',
      services: [
        'smart contract development and auditing',
        'custom blockchain application development',
        'blockchain integration with existing systems',
        'decentralized application (dApp) development',
        'tokenization and digital asset creation',
        'private and public blockchain networks',
        'blockchain-based supply chain solutions',
        'blockchain development consulting',
        'blockchain-powered identity management',
        'secure and tamper-proof data storage solutions'
      ],
      linkText: 'Blockchain development',
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/128/7075/7075326.png" alt="Cost estimation" className="w-8 h-8" />
      )
    }
  ];

  return (
    <div className="container px-12 mx-auto  rounded-lg py-10 mt-10">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-thin mb-16 text-center text-vofox-blue">
            <span className="text-black font-thin">Advanced</span> tech we work with
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techCards.map((card) => (
              <div
                key={card.id}
                className={`
                  bg-gradient-to-br from-white to-white/10 
                  rounded-lg p-8 transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-xl
                  relative overflow-hidden flex flex-col
                  min-h-[500px]
                `}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >

                <div className={`
                absolute inset-0 bg-gradient-to-br from-white to-transparent 
                opacity-0 transition-opacity duration-300
                ${hoveredCard === card.id ? 'opacity-100' : ''}
              `}></div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-5">
                    <div className="text-black">
                      {card.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 text-black">{card.title}</h2>
                  <p className="text-black/80 mb-6 text-sm leading-relaxed">{card.description}</p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {card.services.map((service, index) => (
                      <li key={index} className="flex text-sm text-black/80">
                        <span className="text-blue-500 font-bold mr-2">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>

                  <a href="" className="inline-flex items-center text-white hover:text-blue-400 text-sm font-medium mt-auto transition-colors">
                    {card.linkText} <span className="ml-1 text-lg">›</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

const WhyChooseUS = () => {
  const benefits = [
    {
      title: 'Full transparency',
      description: 'The whole process is as transparent as possible. We immediately establish a roadmap, clear KPIs and conditions for their implementation, type of reporting, daily events, sync-ups, and product testing conditions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Reasonable costs',
      description: 'We offer fair prices for both parties: you get a well-tested application with easily maintainable code, and we get enough resources to grow as professionals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Resource planning',
      description: 'The project\'s success heavily relies on the people. Over the past 13 years, we elaborated techniques to select the most suitable candidates for every role. We ensure that the candidate is a perfect fit in terms of their wishes, interests and skills, avoiding both underqualified and overqualified allocations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Change management',
      description: 'Requirements change is inevitable in software development, it\'s a well-established change management process that ensures the project\'s success without compromising quality or timelines. Our structured change management approach ensures that all change requests are formally recorded, thoroughly assessed for feasibility, and prioritized based on their impact on the project.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'Client involvement',
      description: 'We determine the degree of Client involvement. We can work on a turnkey basis, or we may work with the direct participation of the Client\'s management — our processes are adapted easily.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Scoping',
      description: 'At SumatoSoft, accurate scoping ensures a thorough understanding of your business needs and project requirements. Through detailed analysis and collaboration, we define goals, prioritize features, and establish a clear development roadmap, masterfully navigating challenges like uncontrollable scope creep and incomplete requirements that often lead to budget overruns.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Risk management',
      description: 'Honesty about project risks, proactiveness, and a risk mitigation plan—this is our approach to risk management. We continuously evaluate operational, technology, business, and external risk factors, which allows us to identify potential threats early on. We focus on avoiding risks with the greatest potential damage to project outcomes and maintaining full transparency about the project\'s health.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-vofox-blue" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      )
    }

  ];
  return (
    <div className='container px-12 mx-auto bg-blue-950 rounded-lg py-10 mt-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why companies work with <span className="text-blue-500">FoxSolutions</span>
            </h2>
          </div>
        </RevealOnScroll>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-12'>
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={index} delay={index * 100} >
              <div key={index} className="flex flex-col items-start pr-8">
                <div className='mr-4'>
                  <div className='transition-colors duration-300'>
                    {benefit.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-white mb-3'>{benefit.title}
                  </h3>
                </div>
                <p className='text-gray-300'>{benefit.description}</p>
              </div>

            </RevealOnScroll>
          ))}
          {/* clutch rating section*/}
          <div className='mt-px text-start'>
            <div className='inline-block'>
              <span className='text-white font-medium text-lg mb-1'>Clutch Rating:</span>
              <div className='flex '>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium ml-2">4.9</span>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

const BuildingStrong = () => {
  const Values = [
    {
      title: 'Sustainability Commitment',
      description: 'We are committed to supporting sustainable growth and contributing to a better future. As proud members of the Council for Inclusive Capitalism, we integrate sustainable practices into our projects and operations, prioritizing long-term solutions that positively impact the environment, society, and economy.'
    },
    {
      title: 'Agility and Adaptability',
      description: 'As evangelists of Agile and modern technologies, we embrace change in the technological landscape and adapt quickly. Our agile approach and well-established processes enable us to meet dynamic Client requirements and stay ahead of market trends.',
    },
    {
      title: 'Cultural Sensitivity',
      description: 'We respect and adapt to the cultural nuances of our Clients, employees, and partners. We operate internationally in regions like the USA, EU, Africa, Asia, and Latin America.',
    }, {
      title: 'Client-Centric Approach',
      description: 'Our Clients are at the heart of everything we do. We work tirelessly to understand their needs, exceed their expectations, and deliver solutions that align with their business goals, ensuring long-lasting and mutually beneficial relationships.',
    }, {
      title: 'Security and Confidentiality',
      description: 'As an ISO 9001 and ISO 27001-certified company, we adhere to the highest international standards for information security. From day one, we sign NDAs, implement industry-standard measures like two-factor authentication for internal systems, and enforce strict confidentiality rules among employees. We take every necessary step to ensure the Client’s business data remains secure.',
    }
  ]

  return (
    <div className='container px-12 mx-auto bg-white rounded-lg py-10 mt-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <RevealOnScroll>
          <div className='text-center mb-8'>
            <h2 className='text-4xl font-normal mb-4 text-black'>
              Building on strong<span className='text-blue-500'> Values</span>
            </h2>
          </div>
        </RevealOnScroll>
        <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-2 gap-12 p-12'>
          {Values.map((Value, index) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div key={index} className='flex flex-col items-start pr-8'>
                <h3 className='text-lg font-Nunito SemiBold text-black mb-3'>{Value.title}

                </h3>
              </div>
              <p className='text-black-300 font-Nunito text-sm'>{Value.description}</p>
            </RevealOnScroll>
          ))}

        </div>
      </div>

    </div>
  )
}



const Services = () => {
  const [activeService, setActiveService] = useState('web-dev');
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
    <div>
      <Logos />

      <section id="services" className="pt-12 pb-12">
        <div className="container px-6 mx-auto bg-blue-950 rounded-lg py-10 -mt-8">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-vofox-blue font-medium text-sm mb-4 transform -translate-y-2">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold rounded-full  text-blue-50 mb-8 leading-tight">
                Comprehensive Digital Solutions for Your Business
              </h2>
              <p className="text-white font-normal text-base leading-relaxed tracking-wide opacity-90 max-w-4xl mx-auto text-center ">
                We are foxSolutions, a software development company that leverages technology to create custom software products that address Clients’ challenges, needs, and pain points. Guided by core principles such as transparency, close collaboration, expertise, and well-established management and development processes, we provide exceptional services to our Clients with a strong focus on delivering business value — not just software.
                We offer a wide range of services to help your business thrive in the digital landscape.
              </p>
            </div>
          </RevealOnScroll>
          {isMobile ? (
            /* Mobile View */
            <div className="space-y-4">
              {serviceItems.map((service) => (
                <div key={service.id} className="bg-vofox-gray rounded-xl p-4">
                  <button
                    onClick={() =>
                      setActiveService(activeService === service.id ? null : service.id)
                    }
                    className="w-full flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-vofox-blue/10 text-vofox-blue flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-vofox-darkBlue">
                          {service.title}
                        </h3>
                        <p className="text-sm text-vofox-darkGray">
                          {service.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: activeService === service.id ? 180 : 0 }}
                      className="text-blue-400 transition-transform duration-100"
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
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-16 space-y-4">
                          <p className="text-vofox-darkGray">
                            {service.description}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-vofox-darkBlue">
                              Key Features
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vofox-blue" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-vofox-darkGray">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <AnimatedButton className="w-full">
                            Learn More
                          </AnimatedButton>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <RevealOnScroll className="lg:col-span-1">
                <div className="bg-vofox-gray rounded-xl p-2">
                  <div className="space-y-2">
                    {serviceItems.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4",
                          activeService === service.id
                            ? "bg-white shadow-md"
                            : "hover:bg-white/50"
                        )}
                      >
                        <div className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                          activeService === service.id
                            ? "bg-vofox-blue text-white"
                            : "bg-vofox-gray/80 text-vofox-darkBlue"
                        )}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-vofox-darkBlue">
                            {service.title}
                          </h3>
                          <p className="text-sm text-vofox-darkGray">
                            {service.description.substring(0, 60)}...
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="lg:col-span-2">
                {serviceItems.map((service) => (
                  service.id === activeService && (
                    <div key={service.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-4/6 flex flex-col">
                      <div className="mb-4">
                        <div className="w-16 h-16 rounded-xl bg-vofox-blue/10 flex items-center justify-center text-vofox-blue mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-vofox-darkBlue mb-3">{service.title}</h3>
                        <p className="text-vofox-darkGray mb-8">{service.description}</p>
                      </div>

                      <div className="mb-10 flex-grow">
                        <h4 className="font-semibold text-vofox-darkBlue mb-4">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vofox-blue" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-vofox-darkGray">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pb-6"> {/* Added wrapper with top margin and bottom padding */}
                        <AnimatedButton className='text-sm w-full md:w-auto'>
                          Learn More
                        </AnimatedButton>
                      </div>
                    </div>

                  )
                ))}

              </RevealOnScroll>
            </div>
          )}
        </div>
      </section>




      {/*CEO Quote Section*/}
      <section className=" py-12 px-4 ">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className='rounded-lg p-8  shadow-lg w-full'>
            <RevealOnScroll>
              <p className="text-lg md:text-xl  font-normal text-gray-800 mb-4 leading-relaxed">
                "We don’t just build software — empower businesses to thrive in a digital-first world. By blending cutting-edge technology with transparent collaboration, we create solutions that make a difference."
              </p>
              <div className="mt-6">
                <img
                  src='/Team_members/Yury-Shamrey.webp'
                  className='w-14 h-14' />
                <h4 className="text-lg font-medium text-vofox-darkBlue">Yury Shamrey</h4>
                <p className="text-base text-gray-600 mt-1">CEO & Provider</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        <Industries />
      </section>
      <TechStack />
      <AdvancedTech />
      <WhyChooseUS />
      <BuildingStrong />

    </div>
  );
};

export default Services;