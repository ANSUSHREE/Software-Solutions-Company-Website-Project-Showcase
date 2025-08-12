import { useState, useCallback, useEffect, useRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { TableOfContents } from '@/components/ui/TableOfContents';
import Contact from '@/components/home/Contact';
import { CertificationsSection } from '@/components/ui/Certification';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '../components/ui/reviewCarousel';


const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen w-full flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-purple-900 text-white relative"
        style={{ height: '100vh', minHeight: '100vh' }}
      >
        <div className="container mx-auto px-8 md:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <div className="flex items-center text-sm">
              <a href="/" className="text-white hover:text-blue-300">Home</a>
              <span className="mx-2">›</span>
              <a href="/services" className="text-white hover:text-blue-300">Services</a>
              <span className="mx-2">›</span>
              <span className="text-gray-300">Front-end development services</span>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-blue-400">Front-end development services</span>
          </h1>

          <h2 className="text-5xl font-bold mb-8">
            that craft digital <span className="text-blue-400">Gems.</span>
          </h2>

          <p className="text-lg mb-12 max-w-3xl">
            We deliver functional, clear, and beautiful interfaces that engage users. Let's create
            something remarkable together.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded transition duration-300">
              Hire front-end developers
            </button>

            <div className="ml-0 md:ml-12 mt-6 md:mt-0 flex items-center">
              <span className="mr-2 text-sm">Clients rate our services</span>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="ml-2 font-semibold">5,0</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Logos Section Component
const Logos = () => {
  const logos = [
    {
      name: 'Toyota',
      svg: (
        <img
          src="https://soft.com/wp-content/uploads/2022/12/5c98e3297e3bc92bd580af14_toyota_l-1.svg"
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
};

// Expertise Section Component
const ExpertiseSection = () => {
  return (
    <section id='expertise' className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Why <span className="text-blue-500">front-end development</span> is our core expertise?
        </h2>

        {/* Description */}
        <div className="mb-16">
          <p className="text-gray-800 text-lg text-center leading-relaxed max-w-4xl mx-auto">
            At FoxSolutions, front-end development services is our core expertise because it's like shaping a diamond. We
            carefully design and polish websites for US-based businesses to make them as brilliant and flawless as precious
            stones, ensuring they are beautiful, user-friendly, and stand out in the digital world, just like a dazzling diamond.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-10 px-8 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-gray-800">Stats:</h3>
            </div>
            <div className="max-w-2xl">
              <blockquote className="text-gray-700 text-lg italic">
                "Better UI could increase your website's conversion rate by 200%,
                and better UX design could increase conversion rates by up to
                400%." <span className="not-italic">*Userguiding</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  return (
    <section id='services' className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Explore the <span className="text-blue-500">front-end development<br />services</span> We provide
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Service 1: HTML & CSS */}
          <div className="flex flex-row">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold mb-3">HTML & CSS responsive<br />web design</h3>
              <p className="text-gray-700">
                This is like using building blocks (HTML) and paint (CSS) to make websites that can change size and look good on both big screens like a computer and small screens like your phone.
              </p>
            </div>
            <div className="w-36">
              <img
                src="/HTML-CSS-Responsive-Web-Design.webp"
                alt="HTML & CSS responsive design"
                className="rounded-lg bg-gradient-to-br from-pink-300 to-blue-300"
              />
            </div>
          </div>

          {/* Service 2: Front-end development with frameworks */}
          <div className="flex flex-row">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold mb-3">Front-end development<br />with React, Vue, Angular</h3>
              <p className="text-gray-700">
                This is like using special magic wands (React, Vue, Angular) to make websites really interactive and fun, like a game where things move and change without needing to reload the page.
              </p>
            </div>
            <div className="w-36">
              <img
                src="/Front-End-Development-with-React-Vue-Angular.webp"
                alt="Front-end development with frameworks"
                className="rounded-lg bg-gradient-to-br from-purple-300 to-blue-300"
              />
            </div>
          </div>

          {/* Service 3: Single-Page Applications */}
          <div className="flex flex-row mt-8">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold mb-3">Single-Page<br />Applications(SPA)</h3>
              <p className="text-gray-700">
                These are like magic books where you stay on the same page, but the stories and pictures change when you click on things, so you don't have to flip through different pages.
              </p>
            </div>
            <div className="w-36">
              <img
                src="/Single-Page-Applications.webp"
                alt="Single-Page Applications"
                className="rounded-lg bg-gradient-to-br from-blue-300 to-purple-400"
              />
            </div>
          </div>

          {/* Service 4: Progressive Web Applications */}
          <div className="flex flex-row mt-8">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold mb-3">Progressive Web<br />Applications(PWA)</h3>
              <p className="text-gray-700">
                This is like creating super websites that work really well on your phone or computer, even if you don't have good internet. They can remember things and let you use them just like an app on your phone.
              </p>
            </div>
            <div className="w-36">
              <img
                src="/Progressive-Web-Applications.webp"
                alt="Progressive Web Applications"
                className="rounded-lg bg-gradient-to-br from-blue-300 to-purple-400"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// FoxSolution Profile Section Component
const FoxSolutionProfile = () => {
  return (
    <RevealOnScroll>
      <section id="profile" className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4">
              We develop custom front-end solutions for any business challenges
            </h2>
            <p className="text-white-300">Get proof of our successfully completed projects in the profile</p>
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

// Benefits Section Component
const BenefitsSection = () => {
  return (
    <section id='advantages' className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          What You'll get with optimized <span className="text-blue-500">front-end</span>
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-700 mb-12">
          Discover the advantages of FoxSolution front-end development services
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">

          {/* Benefit 1: Faster website performance */}
          <div>
            <h3 className="text-xl font-bold mb-3">Faster website performance</h3>
            <p className="text-gray-700">
              You will get faster website performance, meaning your pages will
              load quickly and run smoothly, providing a better experience for
              your users.
            </p>
          </div>

          {/* Benefit 2: Visually appealing design */}
          <div>
            <h3 className="text-xl font-bold mb-3">Visually appealing design</h3>
            <p className="text-gray-700">
              You will get a visually appealing design that looks great on all
              devices, from desktops to smartphones, ensuring a consistent and
              attractive appearance.
            </p>
          </div>

          {/* Benefit 3: Improved search engine rankings */}
          <div>
            <h3 className="text-xl font-bold mb-3">Improved search engine rankings</h3>
            <p className="text-gray-700">
              You will get improved search engine rankings, as optimized front-
              end development is favored by search engines, helping your site to
              be found more easily.
            </p>
          </div>

          {/* Benefit 4: Enhanced user engagement */}
          <div>
            <h3 className="text-xl font-bold mb-3">Enhanced user engagement</h3>
            <p className="text-gray-700">
              You will get enhanced user engagement, with interactive and
              responsive elements that make your site more enjoyable and
              easier to use.
            </p>
          </div>

          {/* Benefit 5: Increased accessibility */}
          <div>
            <h3 className="text-xl font-bold mb-3">Increased accessibility</h3>
            <p className="text-gray-700">
              You will get increased accessibility, ensuring that everyone,
              including those with disabilities, can navigate and interact with
              your website effectively.
            </p>
          </div>

          {/* Benefit 6: Secure website */}
          <div>
            <h3 className="text-xl font-bold mb-3">Secure website</h3>
            <p className="text-gray-700">
              You will get a more secure website, as modern front-end
              technologies include features that help protect against common
              online threats.
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex text-red-500">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span className="ml-2 font-bold">4.8</span>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-10 px-8 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-gray-800">Stats:</h3>
            </div>
            <div className="max-w-2xl">
              <blockquote className="text-gray-700 text-lg italic">
                "48% of visitors say that a website's design is the most crucial factor
                in deciding the brand's credibility." <span className="not-italic">*Userguiding</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Frontend Services Section Component
const FrontendServices = () => {
  const services = [
    {
      title: 'Front-end developers',
      description: 'Senior-level engineers with 7+ years of experience behind. Web, native, cross-platform, progressive web applications.',
      icon: '/Technology-expertise-1.svg'
    },
    {
      title: 'UX/UI designers and an art-director',
      description: 'Designers that can build responsive, animated UIs and interactive mockups. An Art Director with 15+ years of experience in front-end development services who coordinates our design team.',
      icon: '/App-Design-1.svg'
    },
    {
      title: 'Managers',
      description: 'We have project managers, product owners, and team leads who possess knowledge and 8+ years of expertise in the Agile approach and its frameworks.',
      icon: '/Mobile20Applications.svg'
    },
    {
      title: 'QA specialists',
      description: 'They check that the interfaces comply with the latest inner and external quality and user experience guidelines. Our QA specialists also can run accessibility testing following modern standards like WCAG.',
      icon: '/QA-Testing.svg'
    }
  ];

  return (
    <section id='frontend' className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-1">
        Explore our <span className="text-blue-500">expert</span> pool for front-end
      </h1>
      <h2 className="text-3xl font-bold text-center mb-12">
        development services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                <img src={service.icon} alt="" className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Numbers Section Component
const NumbersStats = () => {
  const statsRef = useRef(null);

  const stats = [
    { value: 98, suffix: '%', label: 'User satisfaction rate' },
    { value: 200, suffix: '+', label: 'Successful projects' },
    { value: 25, suffix: '', label: 'Countries served' },
    { value: 3, suffix: '+', label: 'Years\' Client engagement' },
    { value: 70, suffix: '%', label: 'Senior specialists' },
    { value: 13, suffix: '+', label: 'Years on the market' }
  ];

  // Create a ref for each stat item to track its counting state
  const statCounters = useRef(stats.map(() => ({ current: 0, animating: false })));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations when element comes into view
            startAllCounters();
            // Unobserve after animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const startAllCounters = () => {
    stats.forEach((stat, index) => {
      if (!statCounters.current[index].animating) {
        animateCounter(index, stat.value);
      }
    });
  };

  const animateCounter = (index, targetValue) => {
    const counter = statCounters.current[index];
    counter.animating = true;

    // Determine animation duration based on value magnitude
    // Larger numbers take longer to count up
    const duration = Math.min(2000, Math.max(1000, targetValue * 20));
    const startTime = performance.now();

    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutQuad easing function for smoother animation
      const easeProgress = 1 - (1 - progress) * (1 - progress);

      counter.current = Math.floor(easeProgress * targetValue);

      // Force re-render
      setForceUpdate(prev => prev + 1);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.current = targetValue;
        counter.animating = false;
        // Force final update
        setForceUpdate(prev => prev + 1);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // State to force re-renders during animation
  const [forceUpdate, setForceUpdate] = useState(0);

  return (
    <section id='numbers' className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        Numbers speak louder than words
      </h1>
      <h2 className="text-base text-center mb-12 text-gray-600">
        Why choose SumstoSoft for front-end development?
      </h2>

      <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="border border-gray-200 p-6 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {statCounters.current[index].current}{stat.suffix}
            </div>
            <div className="text-sm text-gray-600 text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
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
  );
};

// Case studies Component
const Casestudies = () => {
  const caseStudies = [
    {
      title: "Intelligent marketing tracking tool modernization",
      description: "The Client's in-house team made the initial product. FoxSolution optimized performance, reduced server load and costs, and developed a new analytics system for competitor analysis.",
      image: "/RivalFox-Main-image.webp",
      bgColor: "bg-red-600",
      companyName: "Rivalfox"
    },
    {
      title: "Smart hotel management system",
      description: "The hotel management system for simple room management. Integrated with SMS and email providers. The system features an offline mode, supports English and Arabic, and more.",
      image: "/Smart-Int-Perspl.webp",
      bgColor: "bg-blue-900",
      companyName: ""
    },
    {
      title: "Custom ERP system for Toyota car dealer",
      description: "The custom ERP system Scalex was implemented in 20 centers across Thailand. It automates key business processes for car dealers: sales of cars, inventory, the car's service maintenance.",
      image: "/inbound_transportation_kanban_board011@2x.webp",
      bgColor: "bg-purple-900",
      companyName: ""
    },
  ];
  return (
    <section id="case" className="mb-12 w-full">
      <div className="space-y-6">
        {caseStudies.map((caseStudy, index) => (
          <RevealOnScroll key={index} delay={index * 0.2}>
            <div
              className={`${caseStudy.bgColor} text-white overflow-hidden shadow-lg hover:bg-gradient-to-r from-blue-900 from-[0%] via-pink-500 via-[49%] via-pink-500 via-[51%] to-blue-900 to-[100%] w-full`}
            >
              <div className="grid md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                  {caseStudy.companyName && (
                    <h2 className="text-2xl mb-2">
                      {caseStudy.companyName}
                    </h2>
                  )}
                  <h3 className="text-2xl font-medium mb-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm md:text-base">
                    {caseStudy.description}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

// How Do We Work Section Component
const HowDoWeWork = () => {
  const steps = [
    {
      number: '1',
      title: 'Step 1: fill out the form below and provide a brief description of your project.',
      description: 'Begin by filling out the form with your project details, outlining your goals, requirements, and any specific needs you have in mind.'
    },
    {
      number: '2',
      title: 'Step 2: consultation with our specialist',
      description: 'Within 24 hours, one of our specialists will contact you to discuss the finer details of your project. This conversation ensures that we fully understand your objectives and expectations.'
    },
    {
      number: '3',
      title: 'Step 3: receive our proposal in a few days',
      description: 'In a remarkably short time, you will receive a comprehensive proposal from us, detailing our understanding of your project, the scope of work, and our proposed solutions.'
    },
    {
      number: '4',
      title: 'Step 4: contract finalization',
      description: 'After reviewing the proposal and ensuring it aligns with your vision, we\'ll proceed to contract finalization. This formal agreement solidifies our commitment to your project.'
    }
  ];

  return (
    <section id='how' className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          How do we work?
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-500 font-bold text-xl">
                  {step.number}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const FrontendFAQ = [
    {
      question: "What are front-end development services?",
      answer: "Front-end development services at FoxSolution involve creating the part of your website that users see and interact with. We focus on making this experience visually appealing and user-friendly."
    },
    {
      question: "How do front-end development services improve my website?",
      answer: "Our front-end development services enhance your website's design, usability, and performance, ensuring it's attractive, fast, and easy to navigate for your US clients."
    },
    {
      question: "Can front-end development services at FoxSolution make my website mobile-friendly?",
      answer: "Absolutely! Our front-end development services include responsive design, ensuring your website looks great and functions well on all devices, including smartphones and tablets."
    },
    {
      question: "How do front-end development services impact the loading time of my website?",
      answer: "Our front-end development services optimize your website's code and structure, significantly improving loading times and overall performance."
    },
    {
      question: "Do your front-end development services include redesigning existing websites?",
      answer: "Yes, we offer front-end development services to redesign existing websites, giving them a fresh, modern look while improving functionality."
    },
    {
      question: "Can your front-end development services integrate with my existing backend systems?",
      answer: "Yes, our front-end development services are designed to seamlessly integrate with your existing backend systems, ensuring a cohesive and efficient website."
    },
    {
      question: "How long does it typically take to deliver front-end development services at FoxSolution?",
      answer: "The timeframe for our front-end development services varies depending on the project's complexity and requirements. We work efficiently to meet your timeline without compromising quality."
    },
    {
      question: "Are your front-end development services SEO-friendly?",
      answer: "Yes, our front-end development services are structured to be SEO-friendly, helping your website rank higher in search engine results and attract more organic traffic."
    }
  ];

  return (
    <RevealOnScroll>
      <section id="faq" className="px-4 mb-16">
        <FAQ faqs={FrontendFAQ} />
      </section>
    </RevealOnScroll>
  );
};


// Main MobileAppDevelopment Component
const FrontendDevelopemnt = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'Our expertise', id: 'expertise' },
    { title: 'Front-end development services', id: 'services' },
    { title: 'Our profile', id: 'profile' },
    { title: 'Advantages of our services', id: 'advantages' },
    { title: 'Front-end development services', id: 'frontend' },
    { title: 'FoxSolutions in numbers', id: 'numbers' },
    { title: 'Case studies', id: 'case' },
    { title: 'How do we work?', id: 'how' },
    { title: 'FAQ', id: 'faq' }
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
              aria-label="Close menu">
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

      {/* Start the flex container for main content and TOC */}
      <div className="container mx-auto flex flex-col lg:flex-row ">
        {/* Main content column - takes 3/4 width on desktop */}
        <div className="w-full lg:w-[200%] px-2">

          <ExpertiseSection />
          <ServicesSection />
          <FoxSolutionProfile />
          <BenefitsSection />
          <FrontendServices />
          <NumbersStats />
          <Casestudies />
          <CertificationsWrapper />

          {/* Client Reviews Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our <span className="text-blue-600">Clients Say</span>
              </h2>
              <ReviewCarousel />
            </div>
          </section>
          <HowDoWeWork />
          <Contact />
          <FAQSection />

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

export default FrontendDevelopemnt;