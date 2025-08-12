
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedButton from '../ui/AnimatedButton';
import Navbar from '../layout/Navbar';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb';
import Contact from './Contact';
import Footer from '../layout/Footer';
import BlogHomepage from '../ui/bloghome';
import { FileText, Link, Mail } from 'lucide-react';
import ContactPopup from '../ui/contactpopup';
import { useState, useEffect, useRef } from 'react';
import TestimonialCarousel from '../ui/Testimonial';
import { CertificationsSection } from '../ui/Certification';
import CustomSoftwareServices from '../ui/Customesoftwaredevelopment';
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const About = () => {
  const teamRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scroll target in state
    if (location.state?.scrollTo === 'team-section' && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Also check for hash in URL (in case someone shares the URL directly)
    else if (window.location.hash === '#team-section' && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  const stats = [
    { value: '03+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '26+', label: 'Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  interface StatItemProps {
    value: string;
    label: string;
  }
  

  const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-white">{value}</span>
        <span className="text-sm text-white mt-1">{label}</span>
      </div>
    );
  };

  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<'Time & Material' | 'FixedBudget' | 'FixedPrice' | 'DedicatedTeam'>('Time & Material');
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
      <div className=' bg-white pt-24 px-24'>
        <div className='mx-auto max-w-7xl px-4 -mt-24'>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center'>

            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 transition-all duration-300 hover:bg-white rounded-lg"
              >
                <div className='relative group'>
                  {logo.svg}
                  {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap
                      before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4
                      before:border-transparent before:border-t-gray-800">
                  </div> */}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    )
  }

  const TeamMember = ({ photo, name, role }) => {
    return (
      <div className="flex flex-col items-center text-center mx-4">
        <div className="w-48 h-48 mb-4 overflow-hidden">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-base font-normal mt-2">{name}</h3>
        <p className="text-gray-700 mt-1 max-w-xs">{role}</p>
      </div>
    );
  };

  const ManagementTeam = () => {
    const sectionId = "team-section";
    const teamMembers = [
      {
        name: "David Logan",
        role: "Managing Partner",
        photo: "/Team_members/David_Logan.webp"
      },
      {
        name: "Yury Shamrey",
        role: "CEO",
        photo: "/Team_members/Yury-Shamrey.webp"
      },
      {
        name: "Elena Safonova",
        role: "Department Manager & Head of QA",
        photo: "/Team_members/Frame-101744.webp"
      },
      {
        name: "Kate Merzlova",
        role: "Head of Sales and Marketing",
        photo: "/Team_members/Kate-Merzlova.webp"
      },
      {
        name: "Irina Baryshnaya",
        role: "Department Manager & Head of PM",
        photo: "/Team_members/Frame-101745.webp"
      }
    ];


    return (
      <div ref={teamRef} id="team-section" className="flex flex-col items-center py-16 px-4 bg-gray-50">
        <h1 className="text-5xl font-normal mb-16">
          <span className="text-black">Management</span>
          <span className="text-blue-500"> team</span>
        </h1>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              photo={member.photo}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    );
  };


  const GuaranteeSuccess = () => {
    const benefits = [
      {
        title: 'Accurate and realistic cost estimation',
        description: 'We prioritize accurate and realistic cost estimation through detailed analysis of your business goals, user needs, and project requirements, that allow us to provide precise budget and timeline assessments.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/9918/9918832.png" alt="Cost estimation" className="w-8 h-8" />
        )
      },
      {
        title: 'Comprehensive risk management',
        description: 'We proactively identify, assess, and mitigate risks to maintain project stability, focusing on transparency and addressing potential threats early on.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/6757/6757112.png" alt="Risk management" className="w-8 h-8" />
        )
      },
      {
        title: 'Resource planning',
        description: 'By accurately scoping and prioritizing features, we ensure efficient resource allocation and prevent unnecessary costs or budget overruns.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/11476/11476545.png" alt="Resource planning" className="w-8 h-8" />
        )
      },
      {
        title: 'Budget control',
        description: 'Requirements change is inevitable in software development, it\'s a well-established change management process that ensures the project\'s success without compromising quality or timelines. Our structured change management approach ensures that all change requests are formally recorded, thoroughly assessed for feasibility, and prioritized based on their impact on the project.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/1570/1570887.png" alt="Budget control" className="w-8 h-8" />
        )
      },
      {
        title: 'Regular reporting',
        description: 'We provide transparent communication with detailed weekly updates, demos, and timesheet reports to keep you informed at every stage.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/6735/6735102.png" alt="Regular reporting" className="w-8 h-8" />
        )
      },
      {
        title: 'Competence-based selection of a project team',
        description: 'Our thorough resource planning process matches the best-suited candidates to each role, ensuring their skills, interests, and expertise align perfectly with project needs.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/7106/7106062.png" alt="Team selection" className="w-8 h-8" />
        )
      },
      {
        title: 'Agile delivery',
        description: 'Our flexible and iterative approach ensures timely delivery, adapts to changing requirements and prioritizes continuous improvement throughout the development process.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/3875/3875860.png" color='blue' alt="Agile delivery" className="w-8 h-8" />
        )
      },
      {
        title: 'Responsible approach to deadlines',
        description: 'Our structured processes and proactive change management ensure deadlines are met without compromising on quality or project goals.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/439/439398.png" alt="Deadlines" className="w-8 h-8" />
        )
      },
      {
        title: 'Knowledge management',
        description: 'We maintain seamless knowledge sharing and documentation to support project continuity and long-term success.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/14245/14245744.png" alt="Knowledge management" className="w-8 h-8" />
        )
      }
    ];

    return (
      <div className="container px-4 mx-auto py-10">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 text-gray-800">
                What we do to guarantee project <span className="text-blue-500">success</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="flex flex-col items-start p-6 bg-white rounded-lg h-full">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    <div className="text-blue-500">

                      <img
                        src={benefit.icon.props.src}
                        alt={benefit.icon.props.alt}
                        className="w-8 h-8"
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
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
      <div className="container px-12 mx-auto rounded-lg py-10 mt-10">
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
  const Waywework = () => {
    const benefits = [
      {
        title: 'Secure and quality',
        description: 'Our senior developers and CTO always participate in the Code Review process regardless of the project size to ensure code quality.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/4157/4157073.png" alt="Cost estimation" className="w-8 h-8" />
        )
      },
      {
        title: 'Full transparency',
        description: 'We use Jira and Confluence as the main project management systems, allowing our Clients to track the development online in real-time, 24/7, without any hidden work and payments.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/4371/4371369.png" alt="Risk management" className="w-8 h-8" />
        )
      },
      {
        title: 'Easy communication and personal assistance',
        description: 'Constant contact with project managers and full transparency help to quickly resolve emerging issues and make decisions.',
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/128/1429/1429487.png" alt="Resource planning" className="w-8 h-8" />
        )
      }
    ];

    return (
      <div className="container px-4 mx-auto py-10">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 text-gray-800">
                The way <span className="text-blue-500">we work</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="flex flex-col items-start p-6 bg-white rounded-lg h-full">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    <div className="text-blue-500">

                      <img
                        src={benefit.icon.props.src}
                        alt={benefit.icon.props.alt}
                        className="w-8 h-8"
                        style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)' }}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const OurValues = () => {
    const values = [
      "Sustainability commitment. SumatoSoft integrates eco-friendly practices into software development, aligning with environmental responsibility.",
      "Client-centric approach. We prioritize long-term partnerships and align our solutions with Clients' business goals.",
      "Collaborative innovation. Our open and teamwork-driven environment encourages innovative solutions through collective intelligence.",
      "Agility and adaptability. SumatoSoft's agile processes ensure swift adaptation to changing Client needs and market demands.",
      "Integrity and transparency. We foster trust through honest communication, ethical practices, and transparent interactions.",
      "Security and confidentiality. Stringent data protection measures safeguard Client information, ensuring security and peace of mind.",
      "Continuous improvement. Our relentless pursuit of excellence and innovation underpins every project, exceeding Client expectations.",
      "Cultural sensitivity. We respect and incorporate the cultural diversity of our clients, ensuring globally applicable and culturally aware solutions."
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 py-12 mt-24 mb-24 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Values list */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-normal text-end text-blue-950 mb-8">Our Values</h2>

            <ul className="space-y-6">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-green-500">
                    <FaCheck className="h-5 w-5" />
                  </div>
                  <p className="text-lg text-gray-700">{value}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/2">
            <img
              src='../ourvalues.jpg'
              alt="Our Values Illustration"
              className="rounded-lg shadow-lg w-full h-max object-cover justify-items-end"
            />
          </div>
        </div>
      </div>
    );
  };

  return (

    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <RevealOnScroll>
          <div className="p-8 mr-0 bg-gradient-to-r from-blue-950 to-blue-950">
            <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className='text-white hover:text-blue-800 transition-colors duration-200'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/about" className='text-white hover:text-blue-800 transition-colors duration-200'>About</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </RevealOnScroll>

        <section className="relative py-20 bg-gradient-to-br from-blue-950 to-blue-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-5xl font-bold mb-12">
                About <span className="text-blue-400">Foxsolutions</span>
              </h1>
              <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 md:gap-8">
                <StatItem value="98%" label="Satisfaction rate" />
                <StatItem value="200+" label="Successful projects" />
                <StatItem value="25+" label="Countries" />
                <StatItem value="70%" label="Senior specialists" />
                <StatItem value="3+" label="Years' Client engagement" />
                <StatItem value="12+" label="Years on the market" />
              </div>
            </div>
          </div>
        </section>
        <div className='flex justify-center mt-10'>
          <Logos />
        </div>

        <RevealOnScroll>
          <section className="py-8 px-4 md:py-24 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Left Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    <span className="text-blue-500">Who</span> we are
                  </h2>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Foxsolutions, a software development company, delivers IT solutions
                    and services to established companies that need custom software for
                    further business growth. With a deep understanding of modern
                    technologies, transparent processes, and strong expertise in
                    business domains, we implement comprehensive projects and
                    deliver high-end <span className="text-red-500">web</span>, <span className="text-red-500">mobile</span>, and <span className="text-blue-500">IoT</span> solutions.
                  </p>

                  <div className="mt-8">
                    <h3 className="font-bold text-gray-800 mb-2">Our cultural code:</h3>
                    <p className="text-gray-700 mb-1">Be transparent;</p>
                    <p className="text-gray-700 mb-1">Focus on the business value delivery;</p>
                    <p className="text-gray-700">Teamwork & cooperation.</p>
                  </div>
                </div>

                {/* Right Content with Image */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative">
                    <img
                      src="../headquarters.jpg"
                      alt="Boston cityscape"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-blue-950 text-white py-4 px-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                      <p className="text-sm mb-0">Noida-Greater Noida Expy,</p>
                      <p className="text-sm mb-0">Paras Tierea, Sector 144, Noida,</p>
                      <p className="text-sm mb-0">Uttar Pradesh 201305.</p>

                      <div className='mt-2'>
                        <h3 className="text-lg font-semibold mb-0">Dev Center</h3>
                        <p className='text-sm'>Sector 144, Noida.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="flex justify-center items-center  bg-gray-100 p-4">
            <div className="w-full max-w-6xl bg-gradient-to-r from-blue-900 to-blue-950 p-16">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-white">Download <span className="text-blue-400">company's profile</span></h2>
                      <p className="text-white/90">All information about the company in one PDF-document:</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-400">✓</div>
                        <p className="text-white">services;</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-400">✓</div>
                        <p className="text-white">how we work;</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-400">✓</div>
                        <p className="text-white">our projects.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-0">
                    <button className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded">
                      <FileText size={20} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <ManagementTeam />

        {/*CEO Quote Section*/}
        <section className=" py-12 px-4 ">
          <div className="max-w-7xl mx-auto px-4 pb-20">
            <div className='rounded-lg p-8  shadow-lg w-full'>
              <RevealOnScroll>
                <p className="text-lg md:text-xl  font-normal text-gray-800 mb-4 leading-relaxed" content="&ldquo;">
                  At Foxsolutions, we don’t just develop software – we craft solutions that drive businesses forward. Every project we take on is a testament to our commitment to quality, innovation, and delivering real value. Our Clients’ success is our ultimate reward.
                </p>
                <div className="mt-6">
                  <img
                    src='/Team_members/Yury-Shamrey.webp'
                    className='w-14 h-14' />
                  <h4 className="text-lg mt-4 font-medium text-vofox-darkBlue">Yury Shamrey</h4>
                  <p className="text-base text-gray-600 mt-1">CEO & Provider</p>
                </div>
              </RevealOnScroll>

              <div className="ml-auto pr-9">
                <button
                  onClick={() => setIsContactPopupOpen(true)}
                  className='text-blue-950 hover:text-blue-950/80 font-semibold flex justify-end items-center mt-4'
                >
                  Book a meeting with my team
                </button>
              </div>
            </div>
          </div>
        </section>
        <RevealOnScroll>
          <GuaranteeSuccess />
        </RevealOnScroll>
        <CustomSoftwareServices />
        <RevealOnScroll>
          <AdvancedTech />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex justify-center mt-16 items-center  bg-gray-100 p-4">
            <div className="w-full max-w-6xl bg-gradient-to-r from-blue-900 to-blue-950 p-16">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-white">Need custom  <span className="text-blue-400">software?</span></h2>
                      <p className="text-white/90">Just drop us a line and get a free consultation from top experts in custom software development!</p>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-0">
                    <button onClick={() => setIsContactPopupOpen(true)}
                      className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded">
                      <FileText size={20} />
                      <span>Get in touch</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <Waywework />
        </RevealOnScroll>
        <TestimonialCarousel />
        <CertificationsSection />

        <RevealOnScroll>
          <OurValues />
        </RevealOnScroll>

        <section id="about" className="section-padding bg-vofox-gray relative overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-vofox-blue/20 to-vofox-lightBlue/20 rounded-2xl blur-3xl opacity-50 transform -rotate-6"></div>
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt="About fox Solutions"
                    className="w-full rounded-2xl shadow-xl relative z-10"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-4 shadow-lg z-20">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-vofox-blue flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-vofox-darkGray">Trusted Partner</p>
                        <p className="font-semibold text-vofox-darkBlue">For Your Business</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <div>
                <RevealOnScroll delay={100}>
                  <span className="inline-block px-3 py-1 rounded-full bg-vofox-blue/10 text-vofox-blue font-medium text-sm mb-4">
                    About Us
                  </span>
                </RevealOnScroll>
                <RevealOnScroll delay={200}>
                  <h2 className="text-3xl md:text-4xl font-bold text-vofox-darkBlue mb-6">
                    We're a Team of Tech Enthusiasts Dedicated to Your Success
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={300}>
                  <p className="text-vofox-darkGray mb-6">
                    At fox Solutions, we believe in harnessing the power of technology to solve complex business challenges. Our passion for innovation drives us to deliver cutting-edge solutions that help our clients stay ahead in today's competitive landscape.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={400}>
                  <p className="text-vofox-darkGray mb-8">
                    Since our inception, we've been committed to excellence, continuous learning, and building long-lasting relationships with our clients. Our diverse team brings together expertise across various domains to provide comprehensive digital solutions tailored to your specific needs.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={500}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <span className="block text-3xl font-bold text-vofox-blue mb-1">{stat.value}</span>
                        <span className="text-sm text-vofox-darkGray">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={600}>
                  <AnimatedButton>Learn More About Us</AnimatedButton>
                </RevealOnScroll>
              </div>
            </div>
          </div>

        </section>
        <RevealOnScroll>
          <section className='py-16 px-24 mt-24 relative'>
            <div className="max-w-6xl mx-auto px-4 py-8">
              {/* Header Section */}
              <h1 className="text-5xl font-normal text-center mb-12">
                <span className="text-black">FAQ </span>
                <span className="text-blue-900">about Foxsolutions</span>
              </h1>

              {/* Video Section */}
              <div className="w-full aspect-video bg-gray-100 rounded shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dummyurl"
                  title="Foxsolution's Exceptional Pre-Sale Process - Unlocking the Path to Successful Software Solutions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </RevealOnScroll >
      </div>
      <Contact />
      <BlogHomepage />
      <Footer />

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>


  );
};

export default About;


