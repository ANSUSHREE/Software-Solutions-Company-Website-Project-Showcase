import { useState, useCallback, useEffect, useRef } from 'react';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '../components/ui/reviewCarousel';
import CostEstimator from '@/components/ui/checkoboxform';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-purple-900 text-white relative"
      style={{ height: '100vh', minHeight: '100vh' }}>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center text-sm mb-8">
          <a href="/" className="text-white hover:text-blue-300">Home</a>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Staff augmentation services</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">IT </span>
            <span className="text-blue-400">staff</span>
            <span className="text-white"> augmentation company</span>
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Ready-to-go and a custom-hired team of software developers, Scrum Masters,
            Designers, and QA talent just for your project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>mobile developers;</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>designers;</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>web developers;</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <span>QA and testing engineers.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded transition duration-300">
              Free quote
            </button>

            <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex items-center">
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
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ logoSrc, title, description, learnMoreLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={learnMoreLink}
      className={`block bg-white p-6 rounded-lg transition-colors duration-300 ${isHovered ? 'bg-pink-50' : ''} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <img src={logoSrc} alt={`${title} icon`} width="40" height="40" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <span className="text-red-500 text-sm font-medium">
        Learn more ›
      </span>
    </a>
  );
};

const ServicesSection = () => {
  return (
    <RevealOnScroll>
      <section id='services' className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-3">
            IT staff augmentation <span className="text-blue-500">services</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our deep talent pool, proficient in a wide range of tech stacks, is ideally suited to meet the specific needs of United States businesses, whether you need one key professional or a complete software development team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              logoSrc="/Frontend-Backend-Development.svg"
              title="Web developers"
              description="IT team augmentation with developers that have solid experience building web apps using modern frameworks, high-level programming languages, and other tools. Our talent pool is perfectly able to complete your software development team."
              learnMoreLink="#web-developers"
            />

            <ServiceCard
              logoSrc="/App-Design-1.svg"
              title="Designers"
              description="Professional middle-senior level UI/UX designers can make either a completed solution or a single UI element for your software project. They stick to a strong work ethic and deliver required graphics for your software always on time!"
              learnMoreLink="#designers"
            />

            <ServiceCard
              logoSrc="/Secure-and-quality.svg"
              title="Mobile developers"
              description="Developers that work with iOS, Android, PWA, and Hybrid apps. They have expertise in all stages of mobile app development, from choosing the right technological stack to deploying to stores. Our passionate software developers are ready to kickstart your mobile development project right when they join your development team!"
              learnMoreLink="#mobile-developers"
            />

            <ServiceCard
              logoSrc="/QA-Testing.svg"
              title="QA and testing engineers"
              description="Top-talent QAs that provide functional testing (security, integration, acceptance), non-functional testing (performance, usability, etc.), and regression testing for software development. Our top-talent QAs can notice even the tiniest minor errors and tiniest problems. After their work, you will be 100% sure that your app works seamlessly and the software project is bug-free."
              learnMoreLink="#qa-engineers"
            />
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Facts and Figures Section Component
const FactsAndFiguresSection = () => {
  return (
    <RevealOnScroll>
      <section id='facts' className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-12">
            IT staff augmentation with FoxSolution in{' '}
            <span className="text-blue-500">facts</span> and figures
          </h2>

          <div className="flex flex-col lg:flex-row items-center">
            {/* Facts Column */}
            <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    <span className="font-medium">We focus on long-term cooperation.</span>{' '}
                    <span className="font-medium">70%</span> of our clients come back to us with another project.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    Our clients' satisfaction rate is <span className="font-medium">98%</span>, thanks to our firm commitment to deadlines and clients' needs.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    <span className="font-medium">10+ years</span> on the market of software development and team augmentation services.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    Your project data stay safe. We guarantee the <span className="font-medium">security</span> of all data which relates to your software project.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    <span className="font-medium">150 successful</span> projects and counting.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    No communication barrier since <span className="font-medium">all specialists speak English</span> well.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-700">
                    We work honestly and openly. We have a <span className="font-medium">transparent hiring process</span> and offer fair IT team augmentation rates.
                  </p>
                </li>
              </ul>
            </div>

            {/* Image Column */}
            <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
              <img
                src="/image-4.webp"
                alt="Developer working on a laptop"
                className="rounded-lg w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Cost Estimator Section Component
const CostEstimatorSection = () => {
  return (
    <div id="cost-estimator" className="bg-gray-100 p-4">
      <CostEstimator />
    </div>
  );
};

// Augmentation Terms Section Component
const AugmentationTermsSection = () => {
  return (
    <RevealOnScroll>
      <section id='terms' className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-3">
            IT staff augmentation <span className="text-blue-500">terms</span>
          </h2>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            The software development length and budget are two criteria that affect the choice of the engagement model.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {/* Short-term period card */}
            <div className="flex flex-col items-center max-w-sm">
              <div className="mb-6">
                <img
                  src="/Sort-term-launch.svg"
                  alt="Short-term period icon"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Short-term period (1 mth+)
              </h3>
              <p className="text-center text-gray-600">
                Web developers for a limited scope of work that should be done urgently. Classic rapid team augmentation.
              </p>
            </div>

            {/* Long-term period card */}
            <div className="flex flex-col items-center max-w-sm">
              <div className="mb-6">
                <img
                  src="/Enterprise-1.svg"
                  alt="Long-term period icon"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Long-term period
              </h3>
              <p className="text-center text-gray-600">
                It implies long-lasting cooperation during the software development lifecycle of your project. We usually gather a dedicated team when working in the long-term period.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// What You Get Section Component
const WhatYouGetSection = () => {
  return (
    <RevealOnScroll>
      <section id='what-you-get' className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-16">
            <span className="text-blue-500">What</span> you will get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Expertise of the best professionals */}
            <div className="flex">
              <div className="mr-6 flex-shrink-0">
                <img
                  src="/Results.svg"
                  alt="Expertise icon"
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Expertise of the best professionals
                </h3>
                <p className="text-gray-600">
                  You get access to a distinct set of skills that will be helpful to your
                  software project. 70% of our experts are top-talent senior developers.
                </p>
              </div>
            </div>

            {/* On-demand scaling */}
            <div className="flex">
              <div className="mr-6 flex-shrink-0">
                <img
                  src="/Enterprise-1.svg"
                  alt="Scaling icon"
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  On-demand scaling
                </h3>
                <p className="text-gray-600">
                  Our IT staff augmentation services scale up and down the number
                  of developers during the cooperation on your demand.
                </p>
              </div>
            </div>

            {/* Attention to details */}
            <div className="flex">
              <div className="mr-6 flex-shrink-0">
                <img
                  src="/Data-visualization-1.svg"
                  alt="Details icon"
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Attention to details
                </h3>
                <p className="text-gray-600">
                  Whether your project development is open-ended or has strict
                  deadlines, we can build the perfect team for you depending on
                  your needs.
                </p>
              </div>
            </div>

            {/* It's like having an in-house team */}
            <div className="flex">
              <div className="mr-6 flex-shrink-0">
                <img
                  src="/Producr-integrity-1.svg"
                  alt="Team icon"
                  className="h-12 w-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  It's like having an in-house team
                </h3>
                <p className="text-gray-600">
                  Our talent experts are ready to establish software development
                  processes for your development team or adhere to the existing
                  ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Hiring Web Developers Section Component
const HiringWebDevelopers = () => {
  return (
    <section id='hiring' className="bg-[#091636] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">Hiring</span> web developers is easier than ever!
          </h1>
        </div>

        {/* Steps Section */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="flex">
            <div className="mr-6 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center border border-gray-600">
                <span className="text-xl font-semibold">1</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Requirements gathering</h2>
              <p className="text-sm text-gray-300">
                Describe a set of skills you need for a project or a task to be done. Maybe you
                have a role description so we can pick the right developers. If you do not, we
                identify what experts you need.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex">
            <div className="mr-6 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center border border-gray-600">
                <span className="text-xl font-semibold">2</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Look through a list of suitable candidates</h2>
              <p className="text-sm text-gray-300">
                Taking into account your requirements, we provide a suitable candidate for your
                software project or a list of them in case you want to carry out the first
                interview by yourself. After settling the terms and conditions of IT team
                augmentation services and signing contracts and NDAs, the expert is ready
                to join your software development team when you accept our candidate.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex">
            <div className="mr-6 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center border border-gray-600">
                <span className="text-xl font-semibold">3</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Onboarding remote developers</h2>
              <p className="text-sm text-gray-300">
                Plunge developers into the working environment, introduce them to your
                development team, give access to project management tools you use, and let
                them get acquainted with a project concept. Extended team members adjust
                to your internal schedule and fully integrate into your development team, even
                though they stay remote.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex">
            <div className="mr-6 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center border border-gray-600">
                <span className="text-xl font-semibold">4</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Get the software done!</h2>
              <p className="text-sm text-gray-300">
                Whether you need several developers with a specific technical skill set or want
                to hire a development team, now you've empowered your team with
                FoxSolution's IT staff augmentation services and experts. You can be sure that
                your projects are well-organized and delivered in the right way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reliable IT Staff Augmentation Section Component
const ReliableITStaffAugmentation = () => {
  return (
    <RevealOnScroll>
      <section id='reliable' className="max-w-6xl mx-auto py-12 px-4">
        {/* Heading Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8">
            How to distinguish a <span className="text-blue-500">reliable</span> <br />
            IT staff augmentation company <br />
            from an unprofessional firm
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Feature 1 */}
          <div>
            <h2 className="text-lg font-bold mb-3">Relevant expertise to your industry</h2>
            <p className="text-sm text-gray-700">
              IT staff augmentation services are convenient thanks to providing
              access to expertise in any industry — it's the primary criterion for
              choice. However, if the staffing company states that it has
              expertise in every industry with ten in-house experts, they likely
              mislead you — it's better to find another company.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h2 className="text-lg font-bold mb-3">Well-established processes</h2>
            <p className="text-sm text-gray-700">
              You can distinguish them immediately: how well-organized the
              intro call is, how an account manager keeps to deadlines, and
              whether the process of signing a contract goes smoothly. These
              initial signs help to see if the company's processes are well-
              established and if the development team is well-organized.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h2 className="text-lg font-bold mb-3">NDA and data privacy</h2>
            <p className="text-sm text-gray-700">
              Signing NDA and ensuring your data privacy must be an integral
              part of any software development and IT staff augmentation
              services.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <h2 className="text-lg font-bold mb-3">Wide talent pool</h2>
            <p className="text-sm text-gray-700">
              If the staffing company has an in-house team of developers or is
              specialized in hiring custom teams for projects — these are the two
              best options. Anyway, you need to understand the sources of the
              talent pool and its quality. We'd recommend finding another
              company if the information about the source of the development
              team and experts is vague and unclear.
            </p>
          </div>

          {/* Feature 5 */}
          <div>
            <h2 className="text-lg font-bold mb-3">Convenient working hours overlap</h2>
            <p className="text-sm text-gray-700">
              It's likely that the time zones will differ for you and the augmented
              team of developers. The team from an IT staff augmentation
              services vendor should provide the number of hours of overlap
              necessary for you.
            </p>
          </div>

          {/* Feature 6 */}
          <div>
            <h2 className="text-lg font-bold mb-3">High English proficiency</h2>
            <p className="text-sm text-gray-700">
              Sales managers and account managers usually demonstrate high
              English proficiency. The experts you hire (not sales) must also be
              proficient. Ask them to talk with experts, show you experts'
              certificates or name their activities aimed at improving the team's
              English level.
            </p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

// Case studies Component
const Casestudies = () => {
  const caseStudies = [
    {
      title: "Intelligent marketing tracking tool modernization",
      description: "The Client's in-house team made the initial product. Sumatosoft optimized performance, reduced server load and costs, and developed a new analytics system for competitor analysis.",
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

// Stories Section Component
const StoriesSection = () => {
  const articles = [
    {
      title: "Top 10 ChatGpt Alternatives for Business Use in2025",
      time: "52 mins",
      date: "March 24, 2025",
      image: "https://thimpress.com/wp-content/uploads/2025/03/best-character-ai-alternatives.webp",
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

// FAQ Section Component
const FAQSection = () => {
  const ITstaffAugmentationFAQ = [
    {
      question: "What is staff augmentation?",
      answer: "Staff augmentation or team augmentation is a popular term in the business world. It describes the idea of when an organization hires top-talent experts on a temporary basis. They perform work in which the customer company does not specialize. A customer company might hire temporary developers for a specific project, a specific division, or other reasons. This is an alternative to hiring full-time employees."
    },
    {
      question: "How does staff augmentation work?",
      answer: (
        <>
          <p>Staff augmentation starts with drawing a profile of an ideal candidate and identifying the company's business needs for a project. To draw an ideal candidate, ask yourself four questions:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>What expertise do you look for? Do you need a senior specialist to guide your team, or is a middle one enough?</li>
            <li>What technologies do you need the candidate to be an expert at?</li>
            <li>What is the location of a candidate? (Affects hourly rates - e.g., USA developers cost more than Poland)</li>
            <li>What proficiency in English do you expect?</li>
          </ol>
          <p className="mt-2">After answering these, find a staffing company that matches your requirements. They'll provide candidates for you to interview, or you can trust their selection. Onboarding typically takes 1-2 days before work begins.</p>
        </>
      )
    },
    {
      question: "Can staff augmentation be a long-term solution for companies?",
      answer: (
        <>
          <p>Yes, but it needs to be done correctly. Companies should focus on the <strong>"why"</strong> (purpose) rather than just the <strong>"what"</strong> (skills). Key points:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Normally ends when projects complete (no paying idle developers)</li>
            <li>Can become long-term if augmented talent joins as full-time employees</li>
            <li>Example: Developer leaves staffing company to join your permanent team</li>
          </ul>
        </>
      )
    },
    {
      question: "Why is staff augmentation important?",
      answer: (
        <>
          <p>An effective method for business expansion used by top companies (Google, Facebook, Amazon). Benefits include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Quick workforce scaling</li>
            <li>Cost-effective temporary talent solution</li>
            <li>Bridges skill gaps (temporary or permanent)</li>
            <li>Allows focus on core competencies</li>
            <li>Provides staffing flexibility</li>
          </ul>
        </>
      )
    },
    {
      question: "What is the difference between staff augmentation and outsourcing?",
      answer: (
        <>
          <p>Staff augmentation is one of three outsourcing strategies (along with project outsourcing and dedicated teams). Key differences:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Duration:</strong> Staff augmentation = short-term (months), Outsourcing = long-term (6+ months)</li>
            <li><strong>Structure:</strong> Staff aug supplements your team, outsourcing replaces in-house work</li>
            <li><strong>Cost:</strong> Staff aug is cheaper (no management fees)</li>
          </ul>
        </>
      )
    },
    {
      question: "What is your staff augmentation pricing model?",
      answer: (
        <>
          <p>We use a <strong>fixed-price engagement model</strong>:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Agreed costs per specialist/team in contract</li>
            <li>No hidden fees or extra charges</li>
          </ul>
        </>
      )
    },
    {
      question: "Why choose FoxSolution?",
      answer: (
        <>
          <p>Our advantages:</p>
          <ul className="list-none pl-0 mt-2 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">✓</span>
              <span>Full-range outsourcing services (staff aug, project outsourcing, dedicated teams)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">✓</span>
              <span>Ready-to-go teams across all tech roles (developers, Scrum Masters, BAs, Designers, QA)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">✓</span>
              <span>150+ successful projects across 27 countries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">✓</span>
              <span>Transparent communication (weekly updates, demos, English fluency)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">✓</span>
              <span>Fast onboarding (can start within a week)</span>
            </li>
          </ul>
        </>
      )
    }
  ];

  return (
    <RevealOnScroll>
      <section id="faq" className="px-4 mb-16">
        <FAQ faqs={ITstaffAugmentationFAQ} />
      </section>
    </RevealOnScroll>
  );
};

// Main IT Staff Augmentation
const ITStaffAugmentation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'IT staff augmentation services', id: 'services' },
    { title: 'Estimate your project cost', id: 'cost-estimator' },
    { title: 'Facts', id: 'facts' },
    { title: 'IT staff augmentation terms', id: 'terms' },
    { title: 'What you will get', id: 'what-you-get' },
    { title: 'Hiring process', id: 'hiring' },
    { title: 'Reliable IT staff augmentation company', id: 'reliable' },
    { title: 'Case studies', id: 'case' },
    { title: 'Awesome stories', id: 'stories' },
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

      {/* Start the flex container for main content and TOC */}
      <div className="container mx-auto flex flex-col lg:flex-row ">
        {/* Main content column - takes 3/4 width on desktop */}
        <div className="w-full lg:w-[200%] px-2">

          <ServicesSection />
          <CostEstimatorSection />
          <FactsAndFiguresSection />
          <AugmentationTermsSection />
          <WhatYouGetSection />
          <HiringWebDevelopers />
          <ReliableITStaffAugmentation />

          {/* Client Reviews Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our <span className="text-blue-600">Clients Say</span>
              </h2>
              <ReviewCarousel />
            </div>
          </section>

          <Casestudies />
          <StoriesSection />
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

export default ITStaffAugmentation;