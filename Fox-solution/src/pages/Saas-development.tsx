import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import AnimatedButton from '@/components/ui/AnimatedButton';
import TestimonialCarousel from '@/components/ui/Testimonial';
import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { CertificationsSection } from '@/components/ui/Certification';
import { Check } from 'lucide-react';
import { ShieldCheck, BarChart4, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from '@/components/home/Contact';
import { Link } from "react-router-dom";
import FAQ from '@/components/ui/faq';

import { Users, DollarSign, Eye, Cpu, FileText, Shield, Repeat, CheckCircle } from 'lucide-react';
import { Code2, Brush, Briefcase, UploadCloud, Plug, Cloud, RefreshCw, LifeBuoy } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <RevealOnScroll>
        <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
          <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='text-white hover:text-pink-400 transition-colors duration-200'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services" className='text-white hover:text-pink-400 transition-colors duration-200'>Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>Saas-development</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="hero" className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
          <div className="max-w-5xl mx-auto text-center md:text-left ml-0 md:ml-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500"> Saas</span> development Company
            </h1>
            <p className="text-lg mt-6 text-gray-300 max-w-3xl">
              We provide top-notch SaaS development services, develop custom SaaS solutions, and improve existing products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8 text-gray-100">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>Conceptualization & strategy design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>UI/UX design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>Rapid prototyping</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>Development & QA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>AI & ML Integration</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex flex-row items-center gap-6">
              <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold px-5 py-2  transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                Get in touch
              </button>
              <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold px-5 py-2  transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                Our saas Projects
              </button>
              <div className="text-sm text-gray-300">
                <div>Clients rate our services</div>
                <div className="text-yellow-400 text-xl font-bold mt-1">★★★★★ 5.0</div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
};

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
    <section className='mb-0 -mt-24 '>
      <div className=' bg-white py-24 px-24 -mt-2'>
        <div className='mx-auto max-w-7xl px-4 mt-0'>
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
    </section>
  )
}
const StatsSection = () => {
  return (
    <section>
      <div className="w-full bg-white py-8 px-4 md:px-8 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left side with heading */}
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl  text-black">
              For <span className="text-blue-500">3+ years</span>, we have been responsible for
              Saas Development and we are proud of it!
            </h2>
          </div>

          {/* Right side with stats */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold text-gray-800">10+</span>
              <span className="text-sm md:text-base text-gray-600">Developed custom solutions</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold text-gray-800">25+</span>
              <span className="text-sm md:text-base text-gray-600">States, including Maharashtra</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold text-gray-800">70%</span>
              <span className="text-sm md:text-base text-gray-600">Senior engineers</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold text-gray-800">98%</span>
              <span className="text-sm md:text-base text-gray-600">Satisfaction rate</span>
            </div>

            {/* Stat 5 */}
            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="text-3xl md:text-5xl font-bold text-gray-800">3+</span>
              <span className="text-sm md:text-base text-gray-600">Years' Client engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-white" />,
    title: "SaaS development",
    description:
      "Our expertise as a top SaaS product development company includes multi-tenant architecture development, service-oriented architecture (SOA) development, modular and scalable design, cloud computing deployments, and API development and integration."
  },
  {
    icon: <Brush className="w-10 h-10 text-white" />,
    title: "SaaS UX UI design and development",
    description:
      "Deliver a seamless and intuitive user experience with our SaaS application development services and UX/UI design services. We prototype SaaS layouts and craft user-friendly, visually appealing, and convenient interfaces, with a strong focus on improving user engagement and enhancing user retention. More engaged users mean more successful business."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-white" />,
    title: "SaaS development consulting",
    description:
      "Transform your vision into a successful SaaS product with expert consulting. We analyze your business needs, help to conceptualize the solution, provide technical consultancy, define the right architecture, design development strategy, and create a strategic roadmap for development. We can also assist you through the roadmap progression or even handle the SaaS development ourselves."
  },
  {
    icon: <UploadCloud className="w-10 h-10 text-white" />,
    title: "Migration to SaaS",
    description:
      "Seamless transition of your existing software to a cloud-based SaaS model, applying best practices and our internal guidelines to ensure scalability and security. We handle every step, from architecture redesign to data migration and user adaptation, minimizing downtime and guiding users and employees on every step for a smooth transformation."
  },
  {
    icon: <Plug className="w-10 h-10 text-white" />,
    title: "API development and integration",
    description:
      "Enhance your software ecosystem with robust APIs and expand the SaaS solution functionality. We develop new API endpoints, integrate third-party services via existing API, and go the extra mile to ensure your SaaS solution keeps delivering top value to its users."
  },
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    title: "Cloud-based apps",
    description:
      "We design and deploy scalable, high-performance cloud applications that drive efficiency and innovation. Leveraging AWS, Azure, and Google Cloud, our solutions maximize cost-effectiveness, security, and flexibility, ensuring seamless scalability and long-term business growth."
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-white" />,
    title: "SaaS evolution/upgrade",
    description:
      "We keep your SaaS platform ahead of the curve with continuous improvements and feature upgrades. We refine architectures, enhance performance, and future-proof your platform."
  },
  {
    icon: <LifeBuoy className="w-10 h-10 text-white" />,
    title: "Support & Maintenance",
    description:
      "When SaaS application development finishes, we ensure team continuity so that the same development team works on the new features, support, and long-term maintenance."
  }
];
const SaasServices = () => {
  return (
    <section id='services'>
      <div className="bg-gradient-to-b from-[#060C22] to-[#0A1E4A] text-white py-16 px-4 md:px-12 lg:px-24">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          SaaS application design <span className="text-blue-400">services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              <div>{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ConsultationSection = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-white via-blue-100 to-pink-100 py-16 px-6 mt-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Request a Free Consultation
          </h2>
          <p className="text-gray-700 text-lg">
            Let’s discuss your SaaS goals and how we can help you achieve them.
          </p>
        </div>
        <div>
          <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold py-3 px-8 rounded-none transition-all duration-300 hover:bg-opacity-0 hover:text-[#F63D53] hover:shadow-md transform hover:-translate-y-0.5 border border-[#F63D53] inline-flex items-center justify-center w-fit">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
const applications = [
  {
    title: "Enterprise resource planning (ERP)",
    description:
      "Corporate finance, procurement, supply chain, HR management, production planning.",
  },
  {
    title: "Productivity and collaboration tools, project management",
    description:
      "Task management tools, meeting and online communication tools, time tracking and reporting, team dashboards.",
  },
  {
    title: "Content management systems (CMS) and web hosting",
    description:
      "Web development, blogs, online stores, domain hosting, media management tools.",
  },
  {
    title: "Human capital management (HCM)",
    description:
      "Recruitment, performance tracking, payroll processing, employee benefits administration, time and attendance tracking.",
  },
  {
    title: "Financial services and fintech",
    description:
      "Financial analytics, mobile banking, investment platforms, automated invoicing, automatic fraud detection systems, loan management.",
  },
  {
    title: "Social networking and communication",
    description:
      "Messengers, social media platforms, dating, video conferencing, forums, streaming.",
  },
  {
    title: "Travel apps",
    description:
      "Flight and hotel booking, data aggregation systems, travel assistants, rental car services, local guides.",
  },
  {
    title: "Health and wellness services",
    description:
      "Telehealth, mental wellness, fitness tracking, integration with IoT devices, remote patient monitoring, sleep tracking, pill-taking monitoring systems.",
  },
  {
    title: "Entertainment apps",
    description:
      "Music streaming, video streaming, gaming platforms, podcast apps, audiobook services, digital art platforms.",
  },
  {
    title: "CRM development",
    description:
      "Sales pipeline tracking, customer support, marketing automation, lead management, contact databases, campaign analytics, AI powered chatbots.",
  },
  {
    title: "ERP development",
    description:
      "Custom complex enterprise systems, finance management solutions, procurement management platforms, multi-location support, business intelligence.",
  },
  {
    title: "LMS development",
    description:
      "Online course platforms, employee training systems, gamification, AI powered chatbots, interactive learning.",
  },
  {
    title: "EHR development",
    description:
      "Electronic health records, telemedicine integration, medical billing, prescription tracking, clinical workflow automation.",
  },
  {
    title: "Accounting software",
    description:
      "Invoicing, payroll, financial reporting, tax management, automated reconciliation, budgeting, multi-currency support.",
  },
  {
    title: "Data analytics",
    description:
      "Business intelligence, AI powered analytics, predictive analytics, big data processing, visualization tools, data warehousing.",
  },
  {
    title: "HRM development",
    description:
      "Employee records, payroll automation, performance tracking, recruitment management, employee engagement.",
  },
  {
    title: "Customer service apps",
    description:
      "Chatbots, ticketing systems, helpdesk automation, AI-powered customer support, live chat.",
  },
  {
    title: "Document management",
    description:
      "File storage, version control, collaboration tools, digital signing, multiple access permission groups, records retention management.",
  },
  {
    title: "Fleet management",
    description:
      "Vehicle tracking, route optimization, fuel monitoring, preventive maintenance scheduling, driver performance analysis, compliance tracking, asset utilization. "
  },
  {
    title: "ITSM development",
    description:
      "Incident management, service request tracking, asset management, change management, self-service portals. "
  },

  {
    title: "Supply chain optimization",
    description:
      "Inventory analysis and forecasting, demand planning, logistics automation, supplier relationship management, warehouse management, order tracking, risk assessment."
  },
  {
    title: "Fleet managementVehicle tracking and telematics",
    description:
      "GPS tracking, driver behavior monitoring, fleet analytics, route optimization, geofencing, maintenance alerts, fuel efficiency monitoring."
  },

];

const SaaSApplications = () => {
  return (
    <section id='solutions' className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">
          Types of <span className="text-blue-500">SaaS applications</span> we develop
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition text-left h-32"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
            <p className="text-gray-700 text-sm">{app.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
const SaasIndustryApplications = () => {
  return (
    <section id='industries'>
      <div className="bg-white py-12 px-4">
        {/* First section - Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            SaaS application development for your{' '}
            <span className="text-blue-500">industry</span>
          </h1>
          <p className="text-gray-700 mt-4">
            Having solid SaaS product design experience, SumatoSoft provides a wide range of SaaS development services for
            global Clients from various industries.
          </p>
        </div>

        {/* First Row of Industries */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Media & Entertainment SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <rect x="6" y="8" width="12" height="8" rx="1" />
                <line x1="10" y1="16" x2="14" y2="16" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Media & Entertainment SaaS</h2>
            <p className="text-gray-600 text-sm">
              We develop SaaS platforms for streaming, content distribution, and digital asset management. If you plan to launch a video-on-demand service, live broadcasting platform, or any other web or mobile application, we offer custom SaaS development services where we build state-of-the-art solutions that engage users and drive monetization.
            </p>
          </div>

          {/* Enterprise SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="7" r="2" />
                <circle cx="15" cy="7" r="2" />
                <circle cx="12" cy="7" r="2" />
                <path d="M5 22v-5c0-3 2-4 4-4h6c2 0 4 1 4 4v5" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Enterprise SaaS</h2>
            <p className="text-gray-600 text-sm">
              We bring the SaaS power to enterprises: from subscription-based financial tools to AI-powered enterprise automation platforms, we help you build software that streamlines operations and creates new market opportunities.
            </p>
          </div>

          {/* Logistics SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path d="M3 9l2-4h14l2 4" />
                <line x1="8" y1="16" x2="8" y2="16.01" />
                <line x1="16" y1="16" x2="16" y2="16.01" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Logistics SaaS</h2>
            <p className="text-gray-600 text-sm">
              We develop logistics SaaS platforms that optimize supply chains, improve fleet management, and enhance cargo tracking. We make the advantages of custom logistics software to be accessible through a subscription.
            </p>
          </div>
        </div>

        {/* Second Row of Industries */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Food Tech SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 10h10" />
                <path d="M7 14h10" />
                <path d="M12 20V4" />
                <path d="M17 7l-5-3-5 3" />
                <path d="M17 17l-5 3-5-3" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Food Tech SaaS</h2>
            <p className="text-gray-600 text-sm">
              SaaS solutions that transform food service operations, from restaurant management platforms to AI-powered inventory tracking and automated order systems. Whether you plan to develop a cloud-based POS, meal planning software, or a delivery management system, we help you create scalable SaaS products.
            </p>
          </div>

          {/* Education SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4l10 6-10 6-10-6 10-6z" />
                <path d="M12 16v4" />
                <path d="M4 10v6l8 4 8-4v-6" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Education SaaS</h2>
            <p className="text-gray-600 text-sm">
              Education is one of the industries that most benefit from the SaaS model. Interactive LMS platforms, virtual classrooms, AI-driven tutoring systems, online course platforms, e-learning marketplaces, and student performance analytics tools - the opportunities here are unlimited.
            </p>
          </div>

          {/* Real Estate SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Real Estate SaaS</h2>
            <p className="text-gray-600 text-sm">
              We create SaaS platforms that simplify property management, real estate transactions, and investment analytics. We transform complex real estate operations into cloud-based solutions available through flexible subscription models.
            </p>
          </div>
        </div>

        {/* Third Row of Industries (From first image) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Marketing SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="10" y1="6" x2="16" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
                <line x1="10" y1="18" x2="16" y2="18" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Marketing SaaS</h2>
            <p className="text-gray-600 text-sm">
              Whether it's an AI-powered content marketing tool, a personalized email automation system, or a data-driven advertising platform, we create powerful marketing SaaS solutions.
            </p>
          </div>

          {/* Manufacturing SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8h1a4 4 0 014 4v1M2 11v1a4 4 0 004 4h1M14 20l2-2m-8-8l-2 2" />
                <rect x="8" y="8" width="8" height="8" rx="1" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Manufacturing SaaS</h2>
            <p className="text-gray-600 text-sm">
              We build SaaS platforms that improve production efficiency, predictive maintenance, and supply chain visibility. If you plan to develop a factory automation system, perform real-time equipment monitoring, or perform AI-driven demand forecasting, we can handle it with ease and expertise.
            </p>
          </div>

          {/* eCommerce SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="20.5" r="1" />
                <circle cx="18" cy="20.5" r="1" />
                <path d="M2.5 2.5h3l2.7 12.4a2 2 0 002 1.6h7.7a2 2 0 002-1.6l1.6-8.4H7.1" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">eCommerce SaaS</h2>
            <p className="text-gray-600 text-sm">
              We create SaaS solutions like marketplaces, online store builders, payment processing and checkout optimization tools, inventory and order management platforms, headless eCommerce solutions, and platforms that drive customer loyalty.
            </p>
          </div>
        </div>

        {/* Fourth Row of Industries (From second image) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FinTech SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">FinTech SaaS</h2>
            <p className="text-gray-600 text-sm">
              We apply the SaaS model to financial tools that simplify transactions, risk assessment, and compliance. We can build the next Stripe or Paypal, Xero or eToro, or next-generation AI-powered fraud prevention systems.
            </p>
          </div>

          {/* Healthcare SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Healthcare SaaS</h2>
            <p className="text-gray-600 text-sm">
              With deep respect for healthcare's role in modern society, we contribute to this industry by developing SaaS solutions such as electronic health records management systems, telemedicine, medical billing, AI-powered diagnostic tools, and more.
            </p>
          </div>

          {/* Insurance SaaS */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18V5l12-2v13" />
                <path d="M6 15H4a2 2 0 00-2 2v3a2 2 0 002 2h16a2 2 0 002-2v-3a2 2 0 00-2-2h-2" />
                <circle cx="9" cy="19" r="1" />
                <circle cx="21" cy="19" r="1" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Insurance SaaS</h2>
            <p className="text-gray-600 text-sm">
              We develop cloud-based insurance SaaS platforms that streamline policy management, claims automation, risk assessment, and customer management. Whether you're building an AI-powered underwriting tool, a digital insurance marketplace, or a self-service claims portal, we help you create scalable, secure, and compliant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-purple-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left-aligned text content */}
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-white mb-3">
            Unlock Your SaaS Potential
          </h1>
          <p className="text-lg text-white">
            Book a demo to see how we can optimize your product for growth.
          </p>
        </div>

        {/* Right-aligned button */}
        <div className="md:w-1/3 flex justify-end">
          <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold py-3 px-8 rounded-none transition-all duration-300 hover:bg-opacity-0 hover:text-[#F63D53] hover:shadow-md transform hover:-translate-y-0.5 border border-[#F63D53] inline-flex items-center justify-center w-fit">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
const RecentWorksSection = () => {
  const recentWorks = [
    {
      title: 'Custom ERP system for Toyota car dealer',
      description: 'The custom ERP system helps implementation for 20 dealers to manage their supply chain, inventory, sales of cars.',
      image: 'https://assets.techreviewer.co/uploads/portfolio_item/image/47/webp_95e8c487-5aec-4f69-995d-e528cda52bfa.jpg.webp',
      bgColor: 'bg-red-600'
    },
    {
      title: 'Custom AI-powered HRM system',
      description: 'An AI-backed HRM system that boosted OpenAI\'s overall employee management capabilities.',
      image: 'https://img.freepik.com/free-photo/person-surrounded-by-ai-robots-coworkers_23-2151015281.jpg?semt=ais_hybrid',
      bgColor: 'bg-blue-900'
    },
    {
      title: 'Transportation management system',
      description: 'A comprehensive solution for companies operating in the logistics industry.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBwCR4syd5POLiM0-PWIx_mPOUUCJ5uB04Mku2JlNx52gbR0U3HFNGoYTxgRjSgFpK_c&usqp=CAU',
      bgColor: 'bg-purple-700'
    }
  ];

  return (
    <section id="casestudies" className="bg-white py-16 px-4 md:px-6">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Recent Works
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-6">
        {recentWorks.map((work, index) => (
          <RevealOnScroll key={index} delay={index * 0.2}>
            <div className={`rounded-lg overflow-hidden shadow-lg ${work.bgColor} text-white`}>
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                <p className="mb-4">{work.description}</p>
                <AnimatedButton>
                  <a href="#" className="flex items-center hover:underline">
                    Learn More
                  </a>
                </AnimatedButton>
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
const SaaSDevelopmentProcess = () => {
  const sections = [
    {
      title: "Discovery phase",
      description:
        "During Discovery phase, our business analysis team helps to analyze, define and write down the value proposition of your SaaS application and its functional core:",
      points: [
        "Domain and competitors analysis;",
        "Detailed product vision;",
        "Requirements description & prioritization;",
        "Tech stack selection and advice;",
        "Exact project estimation;",
        "Release planning.",
      ],
    },
    {
      title: "IA and UI/UX design",
      description:
        "Clean UI and UX is the shortest way to customers' loyalty. From our experience, we know how users interact with SaaS solutions and use the best practices to create efficient user flows.",
      points: [
        "Research and analyze;",
        "Information architecture;",
        "User experience design;",
        "User interface design.",
      ],
    },
    {
      title: "Architecture design and programming",
      description:
        "When designing SaaS product architecture, our priority is to ensure high load and easy scalability of the system for the future. We make apps that seamlessly adapt to business growth and expansion:",
      points: [
        "Single-tenancy and multi-tenancy architectures;",
        "Cloud platforms (AWS, Azure, Google Cloud, etc.) deployment;",
        "Performance optimization;",
        "Data backups & migration;",
        "Service-oriented architecture (SOA) development;",
        "API development and integration;",
        "Cloud computing deployments.",
      ],
    },
    {
      title: "Testing and QA",
      description:
        "We follow the comprehensive quality assurance (QA) approach in SaaS development services that includes",
      points: [
        "code reviews;",
        "unit tests;;",
        "performance testing;",
        "load testing;",
        "security testing;",
        "HIPAA/HITECH & GDPR tests."
      ],
    },
    {
      title: "Release",
      description:
        "We ensure a smooth and efficient release, delivering a fully functional SaaS solution with all necessary configurations:",
      points: [
        "final performance checks;",
        "cloud deployment setup;",
        "CI/CD pipeline implementation;",
        "user acceptance testing (UAT);",
        "launch online and in mobile stores."
      ],
    },
    {
      title: "Support & Maintenance",
      description:
        "Post-launch, we provide ongoing support where we support the solution in the issues regarding the technological stack update, security, performance, and user-friendliness:  ",
      points: [
        "performance monitoring & optimization;",
        "security updates & patches;",
        "feature enhancements & upgrades;",
        "bug fixes & troubleshooting;",
        "user support & documentation updates.",
      ],
    },
  ];

  return (
    <section id='process'>
      <div className="bg-vofox-darkBlue text-white p-8 min-h-screen flex flex-col items-center">
        <div className="max-w-5xl w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">Our SaaS Products Development Process</h1>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 left-8 w-1 bg-blue-500 h-full"></div>

            {/* Sections */}
            {sections.map((section, index) => (
              <div key={index} className="mb-16 relative pl-20">
                {/* Numbered Circle */}
                <div className="absolute left-4 top-0 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white font-bold z-10">
                  {index + 1}
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

                {/* Description */}
                <p className="text-white mb-6">{section.description}</p>

                {/* Points */}
                <ul className="space-y-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-blue-400 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const ArchitecturePatterns = () => {
  return (
    <section id='architecture'>
      <div className="bg-vofox-darkBlue py-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Architecture patterns we apply
          </h1>

          {/* Introductory Paragraph */}
          <p className="text-white text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            The right way to develop architecture is to adjust it to the functional and non-functional requirements of the SaaS solution. We shape the architecture based on these requirements with the help of the following backend and frontend patterns.
          </p>

          {/* Two columns: Backend and Frontend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Backend Patterns Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Backend patterns
              </h2>
              <ul className="space-y-4">
                {[
                  "Multi-tenancy architecture – multiple users share the same database and infrastructure but with data isolation between them.",
                  "Single-tenancy architecture – every user has a dedicated instance of the application with complete data isolation.",
                  "Serverless architecture – the application runs on cloud platforms and enables automatic scaling and resource allocation.",
                  "Microservices architecture – breaks applications into independent, modular services that are convenient for maintenance.",
                  "Command and query responsibility segregation (CQRS) – separates read and write operations for optimized performance.",
                  "Event-driven architecture – uses event triggers to improve responsiveness and real-time processing.",
                  "Domain-driven design (DDD) – structures software based on real-world business domains rather than technical components.",
                  "Decoupled/headless architecture – enables independent development of the front-end and back-end for flexibility and multi-platform support."
                ].map((item, index) => (
                  <li key={`backend-${index}`} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✔️</span>
                    <span className="text-white">
                      <span className="font-semibold">{item.split(' – ')[0]}</span>
                      {item.includes(' – ') ? ' – ' + item.split(' – ')[1] : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend Patterns Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Front-end architectures
              </h2>
              <ul className="space-y-4">
                {[
                  "Model-View-Controller (MVC) – separates applications into three layers: logic, UI, and data handling.",
                  "Single-page application (SPA) – loads a single HTML page and dynamically updates the content via APIs.",
                  "Model-View-ViewModel (MVVM) – enhances code organization with a ViewModel layer that synchronizes data between logic and UI.",
                  "Progressive Web App (PWA) – enables web apps to work offline and deliver a native app-like experience.",
                  "Reactive architecture – ensures real-time responsiveness by dynamically updating UI as events occur.",
                  "Micro-frontend architecture – breaks a web app into independently developed and deployed front-end modules."
                ].map((item, index) => (
                  <li key={`frontend-${index}`} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✔️</span>
                    <span className="text-white">
                      <span className="font-semibold">{item.split(' – ')[0]}</span>
                      {item.includes(' – ') ? ' – ' + item.split(' – ')[1] : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const SecurityCommitment = () => {
  return (
    <section id='security'>
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">
            Our commitment to <span className="text-blue-500">security</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="text-gray-800 mb-8">
              As ISO 27001-certified developers, we put a lot of effort into securing the data at every stage of SaaS development.
              Our SaaS solutions adhere to all industry-leading standards such as GDPR, HIPAA, SOC 2, and others. Our approach
              safeguards sensitive data, prevents breaches, and ensures regulatory compliance for industries like healthcare,
              finance, eCommerce, and other high-security industries.
            </p>

            <div className="space-y-6">
              {[
                "We implement end-to-end encryption (AES-256, TLS 1.2+) to secure data in transit and at rest.",
                "Our processes align with GDPR, HIPAA, SOC 2, PCI DSS.",
                "Role-based access control (RBAC), multi-factor authentication (MFA), and strict identity management prevent unauthorized access.",
                "We deploy SaaS applications on AWS, Azure, and Google Cloud that allow us to ensure high availability, DDoS protection, and secure cloud storage.",
                "We run regular security audits to reinforce system defenses.",
                "We establish automated backups, failover mechanisms, and incident response plans."
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="text-blue-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-800">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-r from-pink-300 to-blue-300 rounded-lg p-6 relative overflow-hidden">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-blue-900">Our Commitment to Security</h2>
              </div>

              <div className="flex justify-center relative hover:scale-105 transition-transform duration-300">
                <div className="relative w-full flex flex-col items-center">
                  <div className="bg-purple-400 bg-opacity-50 w-32 h-32 rounded-full absolute top-0 transform -translate-y-1/2 "></div>

                  {/* Updated Image Size */}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69Se4SmQW9HvKm2NSmhgJgNI7Ljk-os30ng&s"
                    alt="Person working on security"
                    className="rounded-lg z-10 w-[250px] h-[150px] object-cover"
                  />

                  <div className="absolute bottom-4 right-4 bg-orange-500 p-3 rounded-lg z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                <div className="bg-gray-200 w-8 h-1 rounded"></div>
                <div className="bg-gray-200 w-8 h-1 rounded"></div>
                <div className="bg-gray-200 w-8 h-1 rounded"></div>
              </div>

              {/* FoxSolutions Brand */}
              <div className="flex justify-end items-center mt-6">
                <div className="flex items-center text-blue-900 font-bold">
                  FoxSolutions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const CTABanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-purple-900 py-12 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Start Your Project Today</h2>
          <p className="text-lg">Get in touch with our experts to turn your SaaS ideas into a scalable solution.</p>
        </div>
        <div className="ml-4">
          <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold py-3 px-8 rounded-none transition-all duration-300 hover:bg-opacity-0 hover:text-[#F63D53] hover:shadow-md transform hover:-translate-y-0.5 border border-[#F63D53] inline-flex items-center justify-center w-fit">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
};

const AdvancedTechSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 'big-data',
      title: 'Big Data',
      description: 'We help businesses leverage the power of big data by integrating data processing, analysis, and visualization capabilities into SaaS solutions.',
      link: 'Big Data Services',
      path: '#',
      icon: (
        <svg className="w-16 h-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence (AI)',
      description: 'We incorporate AI-driven algorithms and machine learning models to enhance SaaS platforms, enabling automation, predictive analytics, and intelligent decision-making.',
      link: 'Artificial Intelligence Services',
      path: '#',
      icon: (
        <svg className="w-16 h-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Our data science expertise allows businesses to extract meaningful insights from complex unstructured datasets.',
      link: 'Data Analytics Services',
      path: '#',
      icon: (
        <svg className="w-16 h-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12h-3l-3 8-6-16-3 8H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'iot',
      title: 'Internet of Things (IoT)',
      description: 'We integrate IoT devices and sensors into SaaS platforms, enabling real-time data collection, remote monitoring, and automated workflows.',
      link: 'Internet of Things development',
      path: '#',
      icon: (
        <svg className="w-16 h-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="4" y="14" width="4" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="14" width="4" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 10v4M14 10v4M10 16h4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'bi',
      title: 'Business Intelligence (BI)',
      description: 'We incorporate powerful BI tools into our SaaS solutions, enabling businesses to analyze data easily and make informed decisions.',
      link: '',
      path: '#',
      icon: (
        <svg className="w-16 h-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14v3M12 12v5M16 9v8M8 10L12 7l4 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'ml',
      title: 'Machine Learning (ML)',
      description: 'Our expertise allows us to develop ML-focused SaaS solutions or integrate self-learning algorithms into existing SaaS platforms.',
      link: 'Machine Learning Services',
      path: '#',
      icon: (
        <svg className="w-16 h-16 mx-auto text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 12h2M3 12h2M12 3v2M12 19v2M16.95 7.05l1.41 1.41M5.64 18.36l1.41 1.41M16.95 16.95l1.41-1.41M5.64 5.64l1.41-1.41" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    }
  ];
  const handleClick = (path: string) => {
    if (path !== '#') {
      navigate(path);
    }
  };
  return (
    <section id='advanced-tech'>
      <div className="w-full py-16 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Advanced tech</h2>
          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
            Our team consists of senior-level specialists well-versed in modern technologies. We integrate these technologies into SaaS solutions, making them accessible through a subscription model.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg transition-all hover:bg-gradient-to-r hover:from-white hover:via-blue-100 hover:to-pink-100 py-16 px-6"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                {service.link && (
                  <button
                    onClick={() => handleClick(service.path)}
                    className="text-red-500 hover:text-red-700 inline-flex items-center font-semibold"
                  >
                    {service.link} <span className="ml-1">›</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OutsourceReasonsSection = () => {
  return (
    <section id='outsource'>
      <div className="w-full bg-vofox-darkBlue  py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Reasons to <span className="text-blue-400">outsource</span> SaaS development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {/* Reason 1 */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Fully managed process</h3>
              <p>
                We tackle everything from planning to deployment, avoiding pitfalls and applying
                best practices that took us years to perfect.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Cost efficiency</h3>
              <p>
                Outsourcing eliminates the cost of hiring, training, and maintaining an in-house team
                while getting high-quality SaaS development services. SaaS software
                development company tackles everything.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Focus on core business</h3>
              <p>
                Outsourcing allows you to delegate the task of developing software solutions to
                professionals, allowing you to focus on the business rather than the technical aspect of
                the solution.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Access to advanced tools</h3>
              <p>
                We monitor and use the latest technologies, best development methodologies, and
                advanced tech opportunities in our projects. SaaS application development company
                provides easy access to all advanced tools.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Reduced risk</h3>
              <p>
                From the beginning of our cooperation, we have established risk management practices,
                monitoring and addressing operational, external, security, and other types of risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const EngagementModelsSection = () => {
  return (
    <section id='engagement-models'>
      <div className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Engagement <span className="text-blue-500">models</span> in SaaS development
          </h2>

          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16">
            We offer flexible engagement models tailored to your business needs and project requirements. Whether you need a dedicated development team or a time-and-materials approach, we offer these models for our SaaS development services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Model 1: SaaS development outsourcing */}
            <div>
              <div className="mb-4">
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="8" r="4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">SaaS development outsourcing</h3>
              <p className="text-gray-700">
                We deliver business value by providing end-to-end outsourcing services. Our expert team consists of all necessary specialists for full-edge software development: developers, business analysts, designers, and quality assurance specialists. Our development approach is based on deep industry expertise, transparent collaboration, and a collaborative approach that ensures a faster time-to-market and cost optimization.
              </p>
            </div>

            {/* Model 2: Dedicated SaaS developers */}
            <div>
              <div className="mb-4">
                <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Dedicated SaaS developers</h3>
              <p className="text-gray-700">
                We provide skilled SaaS developers who seamlessly integrate into your team, working alongside your existing processes and objectives. Our specialists augment your in-house capabilities with the necessary expertise, bringing technical excellence, scalability, and efficiency to your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SaasLaunchCTA = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white via-blue-50 to-pink-100 py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Launch Your SaaS Success
          </h2>
          <p className="text-gray-800 text-lg">
            Start building with us today and see your business thrive in the digital space.
          </p>
        </div>
        <div>
          <button className="bg-[#F63D53] hover:bg-[#e73348] text-white font-semibold py-3 px-8 rounded-none transition-all duration-300 hover:bg-opacity-0 hover:text-[#F63D53] hover:shadow-md transform hover:-translate-y-0.5 border border-[#F63D53] inline-flex items-center justify-center w-fit">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
const WhyUsSection = () => {
  const benefits = [
    {
      id: 'team',
      title: 'Professional team',
      description: [
        'We are ISO 27001 certified software developers that strictly adhere to industry regulations, including GDPR, HIPAA, and PCI DSS.',
        'Our team consists of senior-level developers specialists with vast experience in SaaS development. We carefully select the right experts for each project, ensuring a perfect match between skills, interests, and business needs.'
      ],
      icon: <Users className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'costs',
      title: 'Reduced development costs',
      description: [
        'We offer fair prices for both parties: you get a well-tested application with easily maintainable code, and we get enough resources to grow as professionals.'
      ],
      icon: <DollarSign className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'collaboration',
      title: 'Smooth and transparent collaboration',
      description: [
        'Transparency is at the core of our work. We provide detailed time and budget estimations, regular progress reports, and real-time project tracking through our management tools. Clients always have full visibility into project progress.'
      ],
      icon: <Eye className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'technologies',
      title: 'Access to advanced technologies',
      description: [
        'We implement cutting-edge solutions like AI, IoT, machine learning, blockchain, and business intelligence. We bring the power of modern technologies to SaaS solutions, making them accessible through a subscription model.'
      ],
      icon: <Cpu className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'documentation',
      title: 'Diligent project documentation',
      description: [
        'We maintain detailed project documentation, which includes technical specifications, change logs, quality assurance reports, progress reports, and more.'
      ],
      icon: <FileText className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'security',
      title: 'Preventive cybersecurity approach',
      description: [
        'As an ISO 27001-certified SaaS development company, we adhere to the highest security standards, implementing strict data protection measures, HIPAA/GDPR compliance, and proactive risk mitigation strategies to safeguard SaaS platforms.'
      ],
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'releases',
      title: 'Quick releases every 2–3 weeks',
      description: [
        'We follow Agile methodologies and CI/CD pipelines to deliver new software every second week. At the end of every iteration, we run demos to showcase the work result and get early feedback.'
      ],
      icon: <Repeat className="w-12 h-12 text-blue-500" />
    },
    {
      id: 'quality',
      title: 'Quality management controls',
      description: [
        'We only release software once it meets a percentage of acceptance criteria, which we agreed upon with you in the quality assurance strategy at the beginning of the project. Our rigorous QA process guarantees high-quality SaaS solutions.'
      ],
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />
    }
  ];

  return (
    <section id='why-foxsolution'>
      <div className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-500">Why</span> Fox-solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex">
                <div className="mr-4 flex-shrink-0 pt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  {benefit.description.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const SaasCostPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">
          <span className="text-blue-500">Cost</span> of developing SaaS solutions
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-gray-800 mb-6">
              The cost of developing a SaaS solution starts at $50K
              and varies depending mostly on three factors: <strong>required
                functionality, architecture and infrastructure, and
                security and compliance requirements</strong>. We provide a free
              quote for project cost estimation from the start, carefully
              considering solution options and offering the best fit in
              terms of cost, quality, and alignment with your goals.
            </p>

            <p className="text-gray-800 mb-6">
              To provide an estimation, we examine project
              requirements, explore different solution options, design a
              high-level architecture, define the scope of work, and
              finally, our developers and other specialists estimate the
              development effort.
            </p>

            <p className="font-semibold text-gray-800 mb-4">Core cost factors are:</p>

            <div className="space-y-6">
              <div className="flex">
                <div className="mr-2 mt-1 text-blue-500">
                  <Check size={20} />
                </div>
                <p className="text-gray-800">
                  <strong>Feature set & complexity</strong> – advanced functionalities,
                  AI-driven analytics, and integrations increase
                  development time and cost.
                </p>
              </div>

              <div className="flex">
                <div className="mr-2 mt-1 text-blue-500">
                  <Check size={20} />
                </div>
                <p className="text-gray-800">
                  <strong>Architecture & infrastructure</strong> – cloud hosting, multi-
                  tenancy, and data processing requirements require
                  more development efforts.
                </p>
              </div>

              <div className="flex">
                <div className="mr-2 mt-1 text-blue-500">
                  <Check size={20} />
                </div>
                <p className="text-gray-800">
                  <strong>Compliance & security</strong> – compliance with industry
                  regulations like GDPR, HIPAA, and SOC 2 add to the
                  development scope.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 pt-32">
            <img
              src="https://media.istockphoto.com/id/1397678880/photo/closeup-of-a-black-businesswoman-typing-on-a-laptop-keyboard-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=Qj9WWpAoKB0W7k-c68Y-8neN6c1mCExnEO9UKG-eoXY="
              alt="Developer working on SaaS solution"
              className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const tabs = [
  {
    title: "Scalable architecture development",
    icon: <Expand size={36} />,
    content:
      "We design scalable architectures that can handle increased user demand. We achieve this with the help of cloud-native infrastructure (AWS, Azure), a microservices approach, the use of automated scaling mechanisms like load balancing and database sharding, and the choice of the right tenant model.",
  },
  {
    title: "Security and compliance are our priorities",
    icon: <ShieldCheck size={36} />,
    content:
      "We  apply end-to-end encryption, use role-based access control, run regular security audits and penetration testing, and apply our expertise as IOS 27001:2022-certified providers, ensuring compliance with GDPR, HIPAA, SOC2, PCI DSS, and other regulatory requirements.",
  },
  {
    title: "User experience (UX) focus",
    icon: <Users size={36} />,
    content:
      "Greate UX keeps users engaged, and we know how to achieve that. We create user-centered designs based on extensive research, including user analysis, persona development, customer journey mapping, app user flow creation, and competitor analysis, ensuring your SaaS solution stands out.",
  },
  {
    title: "Agile development approach",
    icon: <Repeat size={36} />,
    content:
      "The Agile approach offers a fast, adaptive development process with continuous improvement. We leverage its advantages, including iterative releases, continuous feedback loops, test-driven development, and CI/CD pipelines.",
  },
  {
    title: "Performance monitoring",
    icon: <BarChart4 size={36} />,
    content:
      "SaaS applications must operate flawlessly 24/7. We use proactive monitoring and optimization techniques to detect bottlenecks before they impact users and automate incident response to prevent downtime. We also conduct load and stress testing to ensure the system can handle peak usage and utilize tools like New Relic, Prometheus, and AWS CloudWatch to monitor application health.",
  },
];
const SaaSBestPractices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id='practices'>
      <div className="bg-[#0C1733] bg-gradient-to-br from-[#0C1733] via-[#11224A] to-[#431C5D] text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
          Best <span className="text-blue-500">practices</span> we use for SaaS development
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Core challenges for any SaaS solution are scalability, security, user retention, and performance. We addressed these challenges using proven best practices.
        </p>

        <div className="flex justify-center gap-8 md:gap-14 border-b border-gray-700 pb-6 mb-10 flex-wrap md:flex-nowrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center text-sm md:text-base transition-colors ${activeIndex === index ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
                }`}
            >
              <div className="mb-2">{tab.icon}</div>
              <span className="text-center">
                {tab.title.split(" ")[0]} <br /> {tab.title.split(" ").slice(1).join(" ")}
              </span>
              {activeIndex === index && (
                <div className="h-1 w-16 bg-blue-400 mt-2 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="text-left max-w-xl ml-0 md:ml-10 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {tabs[activeIndex].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {tabs[activeIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    number: 1,
    title: "Reach out to us",
    description: "VIA CONTACT FORM, EMAIL, PHONE CALL OR BOOK ONLINE MEETING"
  },
  {
    number: 2,
    title: "Get a free consultation",
    description: "DISCUSS AND ASSESS YOUR IDEA WITH OUR TEAM"
  },
  {
    number: 3,
    title: "Get a free cost estate",
    description: "GET A DETAILED PROJECT PROPOSAL WITH BUDGET AND TIMELINE"
  },
  {
    number: 4,
    title: "Project kickoff",
    description: "SIGN A CONTRACT AND START YOU PROJECT DEVELOPMENT"
  }
];
const GetStarted = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Get started</h2>

      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200"></div>

        <div className="flex flex-wrap justify-between relative z-10">
          {steps.map((step) => (
            <div key={step.number} className="w-full sm:w-1/2 md:w-1/4 px-4 flex flex-col items-center mb-8">
              {/* Circle with number */}
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-4 border border-gray-200">
                <span className="text-3xl font-bold text-blue-500">{step.number}</span>
              </div>

              {/* Description */}
              <div className="text-center">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">
                  {step.description}
                </p>
                <h3 className="font-medium text-lg">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const StoriesSection = () => {
  const articles = [
    {
      title: "FoxSolution Ranked Among Top Mobile App Development Companies in the USA by AppFirmsReview",
      time: "52 mins",
      date: "March 24, 2025",
      image: "https://sumatosoft.com/wp-content/uploads/2025/04/USA-2048x1622.png",
      path: "/articles/chatgpt-alternatives"
    },
    {
      title: "Top 10 ChatGPT Alternatives for Business Use in 2025",
      time: "52 mins",
      date: "February 24, 2025",
      path: "/articles/iot-oil-gas"
    },
    {
      title: "Top 25 MVP Development Companies",
      time: "12 mins",
      date: "February 20, 2025",
      path: "/articles/iot-logistics"
    },
    {
      title: "IoT Apps for Oil & Gas Industry – What’s in It?",
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
            className="rounded-xl mb-4 w-[800px] h-[240px] hover:scale-105 transition-transform duration-300"
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
  const SaasFaq = [
    {
      question: "How long does it take to develop a custom SaaS product?",
      answer: "The development time mostly depends on the project’s complexity. A Minimum Viable Product (MVP) typically takes 3–6 months, while a full-scale SaaS solution may take 6–12 months or more."
    },


    {
      question: "Do you build software in compliance with the GDPR, HIPAA, and other international standards?",
      answer: "Yes. We develop SaaS solutions that comply with GDPR, HIPAA, SOC 2, ISO 27001, PCI DSS, and other regulations."
    },
    {
      question: "Will we sign an NDA before starting cooperation?",
      answer: "Yes, we sign an NDA (Non-Disclosure Agreement) before discussing any project details. Your data is protected from day one."
    },
    {
      question: "How much does it cost to hire a developer for our project? What kind of pricing do you offer?",
      answer: "When you tested and proved your business idea with the MVP, the next step is fully-functional product development. Based on the feedback from the users, you and the app development team will be able to define what features your application should have and their priorities."
    },
    {
      question: "How much does it cost to develop Software as a Service (SaaS)?",
      answer: "SaaS development starts at $50K, with costs varying based on features, architecture, security, developers location, and integrations. We provide a detailed free cost estimate after the intro call. Contact us!"
    },
    {
      question: "How to choose a SaaS development vendor?",
      answer: "Look for a vendor with proven experience, strong security and compliance expertise, transparent pricing, and an Agile development approach. Case studies, client reviews, and certifications like ISO 27001 help validate expertise.",
    },
    {
      question: "Why should I hire a SaaS startup development company instead of freelancers?",
      answer: "A SaaS development company provides a structured approach, diverse expertise, security compliance, and scalability, while freelancer developers may lack reliability, quality control, and long-term support.",
    },
    {
      question: "What should I do before hiring an agency to develop my SaaS product?",
      answer: "Before referring to a SaaS development provider, define business goals, shape the solution vision and concept, and identify desired budgets and timelines.",
    },
    {
      question: "What’s your post-launch policy?",
      answer: "We offer ongoing support, maintenance, bug fixes, security updates, and feature enhancements for an agreed-upon period after launch. Long-term support plans are also available.",
    },
  ];

  return (
    <section id="faq" className="px-4 mb-16">
      <FAQ faqs={SaasFaq} />
    </section>
  )
};

const SaasDevelopment = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'Services', id: 'services' },
    { title: 'Solutions', id: 'solutions' },
    { title: 'Industries', id: 'industries' },
    { title: 'Case studies & reviews', id: 'casestudies' },
    { title: 'Process', id: 'process' },
    { title: 'Architecture', id: 'architecture' },
    { title: 'Security', id: 'security' },
    { title: 'Advanced tech', id: 'advanced-tech' },
    { title: 'Why outsource', id: 'outsource' },
    { title: 'Engaement models', id: 'engagement-models' },
    { title: 'Why Foxsolution', id: 'why-foxsolution' },
    { title: 'Best practices', id: 'practices' },
    { title: 'FAQ', id: 'faq' }
  ];
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
      <Logos />

      {/* Container for main content and TOC */}
      <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 md:px-8">
        {/* Main content column */}
        <div className="w-full lg:w-[200%] px-2">
          <StatsSection />
          <SaasServices />
          <ConsultationSection />
          <SaaSApplications />
          <SaasIndustryApplications />
          <CtaSection />
          <RecentWorksSection />
          <ReviewsSection />
          <SaaSDevelopmentProcess />
          <section id='stack' className='mt-10 mb-10'>
            <img
              src="/Technologies.png"
              alt="Technologies we work with including AWS IoT, Azure IoT, and Google Cloud services"
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy" />
          </section>
          {/* Certifications */}
          <section className="px-4 sm:px-6 md:px-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              {[
                'iso',
                'pci',
                'owasp',
                'hipaa',
                'gdpr',
                'fisma',
              ].map((cert) => (
                <img
                  key={cert}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-200 w-full h-16 mx-auto"
                  src={`https://sumatosoft.com/wp-content/uploads/2024/05/${cert}.svg`}
                  alt={cert}
                />
              ))}
            </div>
          </section>
          <ArchitecturePatterns />
          <SecurityCommitment />
          <CTABanner />
          < AdvancedTechSection />
          <OutsourceReasonsSection />
          <EngagementModelsSection />
          <SaasLaunchCTA />
          <WhyUsSection />

          <div className='mb-6 w-auto'>
            <CertificationsSection
              heading={<>
                <span className="text-blue-500">Awards</span> & recognitions
              </>}
              description="Foxsolutions has been recognized by the leading analytics agencies working with the best software development companies from all over the world. Our values and partners help us to provide the best software development services for startups in the field."
              imageSize="w-16 md:w-24"
            />
          </div>
          <SaasCostPage />
          <SaaSBestPractices />
          <GetStarted />
          <Contact />
          <StoriesSection />
          <FAQSection />
        </div>

        {/* Table of Contents column - only visible on desktop */}
        <div className="hidden lg:block lg:w-1/4 px-4">
          <div className="sticky top-24  overflow-y-auto pt-2">
            <TableOfContents sections={contentsMenu} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default SaasDevelopment;