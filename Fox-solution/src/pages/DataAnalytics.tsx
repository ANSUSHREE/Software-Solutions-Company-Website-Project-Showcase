import { useState, useCallback, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CertificationsSection } from '@/components/ui/Certification';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '../components/ui/reviewCarousel';
import { motion, AnimatePresence } from 'framer-motion';


const HeroSection = () => {
  return (
    <>
      {/* Hero Section with integrated breadcrumb - taking full viewport height */}
      <section id="hero" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-24">
          {/* Breadcrumb Navigation */}
          <div className="max-w-4xl">
            <div className="flex items-center text-sm mb-8">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
              <span className="mx-2">›</span>
              <a href="/services" className="text-gray-300 hover:text-white">Services</a>
              <span className="mx-2">›</span>
              <span className="text-blue-300">Data Analytics Services</span>
            </div>

            {/* Hero Content */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Your top choice for custom-made <span className="text-blue-400">data analytics</span> software
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-3xl">
              With 12+ years in software development and 200+ custom solutions developed, SumatoSoft is the partner you can trust to create a Data Analytics solution tailored to your needs. Let’s discuss ways to improve your KPIs using Big Data.              </p>


          </div>
        </div>
      </section>
    </>
  );
};

//logos
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
//----------------------------------------How does data analytics help in increasing effectiveness?-----------------------------------------------------------------
const DataAnalyticsIncEffectiveness = () => {
  return (
    <RevealOnScroll>
      {/* How does IoT contribute to Big Data?*/}
      <section id="a" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2">
          How does {' '}
          <span className="text-blue-500 font-normal">  data analytics </span>
          help in increasing effectiveness?

        </h1>

        <p className="text-lg mt-8 mb-16 max-w-4xl mx-auto text-gray-700">
          Data analytics works like a detective solving a puzzle. For instance, a hospital collects data on patient symptoms, treatment outcomes, and medication usage. Then, utilizing specialized software, the hospital analyzes this data to identify patterns, such as which treatments are most effective for a certain illness or what time of day sees the most emergency visits. This assists the hospital in making decisions, like prioritizing certain medical supplies or increasing staff during peak hours, to enhance patient care and health outcomes.          </p>

        {/* Stats Section */}
        <div className="bg-[#f7faff] px-6 py-12 rounded-lg flex flex-col md:flex-row items-center justify-center gap-8 text-left max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-black min-w-max">Numbers speak louder than words:</h2>
          <p className="text-lg italic text-gray-800 max-w-3xl">
            "In 2021, the global data analytics market was valued at USD 31.8 billion. It’s expected to reach a market size of USD 329.8 billion by 2030, expanding at a compound annual growth rate (CAGR) of 29.9% from 2022 to 2030.” Report by Grand View Research, Inc.
          </p>
        </div>

      </section>
    </RevealOnScroll>
  );
};


//----------------------------------------Examples of Data Analytics------------------
const ExamplesDataAnalytics = () => {
  return (
    <RevealOnScroll>


      <section id="b" className="bg-gray-50 py-16 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light font-mono mb-4">5 real-world examples of
              <span className="text-blue-500 font-normal"> Data Analytics</span> usage everyone should know
            </h2>
          </div>

          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 mb-16">
              Discover the most popular examples of Data Analytics in use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/*CARD 1*/}
            <div className="bg-white p-8 rounded-lg flex items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Example #1: Retail Sales Analysis</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Retail companies analyze customer data to understand buying patterns, preferences, and trends. This helps in inventory management, targeted marketing, and enhancing customer experience.

                  For instance, a supermarket might use data analysis to decide which products to stock more of and when to run promotional campaigns.                     </p>
              </div>
              <img src="../bigdataanalyticsandiotdevelopment/image-1.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
            </div>
            {/*CARD 2*/}
            <div className="bg-white p-8 rounded-lg flex items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Example #2: Healthcare and Medical Research</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Data analysis in healthcare can involve analyzing patient records to improve treatment plans, manage hospital resources, or predict disease outbreaks.

                  In medical research, data analysis is used for drug discovery, understanding disease patterns, and epidemiological studies.                     </p>
              </div>
              <img src="../bigdataanalyticsandiotdevelopment/image-2.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
            </div>
            {/*CARD 3*/}
            <div className="bg-white p-8 rounded-lg flex items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Example #3: Finance and Banking</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Banks and financial institutions leverage data analysis for risk assessment, fraud detection, customer segmentation, and personalized financial advice.

                  For example, credit card companies analyze transaction data to identify unusual patterns that may indicate fraud.                        </p>
              </div>
              <img src="../bigdataanalyticsandiotdevelopment/image-3.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
            </div>
            {/*CARD 4*/}
            <div className="bg-white p-8 rounded-lg flex items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Example #4: Sports Analytics</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Teams and coaches use data analysis to improve player performance, develop game strategies, and optimize training. By analyzing data like player stats, game tactics, and opponent strategies, teams can gain a competitive edge.                    </p>
              </div>
              <img src="../bigdataanalyticsandiotdevelopment/image-4.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
            </div>
            {/*CARD 5*/}
            <div className="bg-white p-8 rounded-lg flex items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Example #5: Marketing and Customer Insights</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Companies analyze customer data to optimize marketing campaigns, understand customer behavior, and improve product development.

                  For example, an e-commerce platform might analyze browsing and purchase history to recommend products to customers, or a social media company might analyze user engagement data to tailor content feeds.                           </p>
              </div>
              <img src="../bigdataanalyticsandiotdevelopment/image-5.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
            </div>


          </div>
        </div>
        {/* Stats Section */}
        <div className="bg-[#f7faff] px-6 py-12 rounded-lg flex flex-col md:flex-row items-center justify-center gap-8 text-left max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-black min-w-max">Numbers speak louder than words:</h2>
          <p className="text-lg italic text-gray-800 max-w-3xl">
            "Recent statistics indicate that every day, around the globe, 2.5 quintillion bytes of data are produced. Furthermore, it’s currently estimated that the world holds more than 44 zetabytes of data.”  Acumen Research and Consulting            </p>
        </div>
        <div className="container mx-auto px-6">
          <img
            src="../dataanalytics/typesofdataanalytics.png"
            alt="Healthcare IoT"
            className="rounded-lg   mx-auto"
          />
        </div>
      </section>
    </RevealOnScroll>
  );
};

//---------------------------------------------------Indicators of the quality of our services--------------------------------------------------
const IndicatorsQualityServices = () => {
  return (
    <RevealOnScroll>
      <section id="c" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl mb-12">
            6 compelling indicators showcasing the quality of our services
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
              <p className="text-4xl md:text-5xl text-blue-500 mb-2">10+</p>
              <p className="text-lg">Years on the market</p>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

//---------------------------------------------------Benefits of Data Analytics systems for Business------------------------------
const SevenKeyC = () => {
  return (
    <RevealOnScroll>
      <section id="d" className="py-20  text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            7 key c, drawn from our experience
          </h2>
          <p className="text-lg text-center text-gray-700 mb-16">
            Explore the advantages of SumatoSoft’s custom data analytics solutions.


          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

            {/* Feature 1 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Improved-decision-making.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Improved decision-making</h3>
              <p className="text-sm text-gray-600">
                Data analytics software enables owners to make more informed decisions by providing real-time insights and accurate data analysis.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Enhanced-efficiency.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced efficiency</h3>
              <p className="text-sm text-gray-600">
                Automated data processing and analysis streamline operations, saving time and reducing manual effort.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Better-customer-insights.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Better customer insights</h3>
              <p className="text-sm text-gray-600">
                Continuous access to customer data analytics helps in understanding customer preferences and behaviors, leading to improved customer service and targeted marketing strategies.               </p>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Increased-revenue.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Increased revenue</h3>
              <p className="text-sm text-gray-600">
                By identifying trends and opportunities through data, businesses can capitalize on them, potentially increasing their revenue.              </p>
            </div>



            {/* Feature 5 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Risk-management.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk management</h3>
              <p className="text-sm text-gray-600">
                Constant monitoring and analysis of data help in identifying potential risks and taking proactive measures to mitigate them.
              </p>
            </div>

            {/* Feature 6 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Competitive-advantage.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive advantage</h3>
              <p className="text-sm text-gray-600">
                Having real-time data analytics gives businesses an edge over competitors who may not have access to such immediate insights.                  </p>
            </div>

            {/* Feature 7 */}
            <div>
              <div className="mb-4">
                <img src="../dataanalytics/Personalization-and-innovation.svg" alt="" className="mx-auto h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalization and innovation</h3>
              <p className="text-sm text-gray-600">
                Continuous data analysis facilitates the personalization of services and products to meet customer needs and encourages innovation based on data-driven insights.              </p>
            </div>

          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

//-----------------------------------------------------------Our Profile--------------------------------------------------
const OurProfile = () => {
  return (
    <RevealOnScroll>
      <section id="e" className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-3xl font-semibold mb-4">
              We develop custom data analytics solutions for any business challenges.
            </h2>
            <p className="text-white-300">Get proof of our successfully completed IoT projects in the profile.</p>
          </div>


        </div>
      </section>
    </RevealOnScroll>
  );
};

//----------------------------------------------------------Data analytics solutions-------------------------------------

const DataAnalyticsSoln = () => {
  const serviceItems = [
    {
      id: 1,
      title: 'Custom data analytics solutions',
      description: (
        <>
          <p><strong>What will You get with custom data analytics solutions?</strong></p>
          <p>
            Tailored analytics capabilities that precisely fit your unique business requirements, data types,
            and specific analytical challenges. These solutions often provide a competitive edge by leveraging
            specialized algorithms, custom interfaces, and integrations with other business systems.
          </p>
          <br />
          <p><strong>How can You use these solutions?</strong></p>
          <p>
            Use these solutions to address specific business challenges that standard analytics tools can’t solve.
            They can be customized for niche markets, complex data sets, or unique operational workflows.
            Businesses often turn to custom solutions when they need to integrate disparate data sources or when
            they require specialized reporting and analysis that general tools do not offer.
          </p>
        </>
      ),

      image: '../dataanalytics/Custom-data-analytics-solutions.webp',
    },
    {
      id: 2,
      title: 'Big Data Analytics Solutions',
      description: (
        <>
          <p><strong>What will You get with Big Data Analytics Solutions?</strong></p>
          <p>
            The ability to process and analyze vast amounts of complex data, including unstructured data like text, images,
            and videos. These solutions often come with advanced data processing capabilities, such as predictive analytics,
            data mining, and machine learning.
          </p>
          <br />
          <p><strong>How can You use these solutions?</strong></p>
          <p>
            Employ these solutions to gain insights from large datasets that are too cumbersome for traditional analytics tools.
            They are ideal for businesses that generate or collect large volumes of data, such as social media platforms,
            e-commerce sites, or IoT devices. Use them for market trend analysis, customer behavior analytics, or predictive maintenance.
          </p>
        </>
      ),
      image: '../dataanalytics/Big-Data-Analytics-Solutions.webp',
    },
    {
      id: 3,
      title: 'Real-Time Analytics Solutions',
      description: (
        <>
          <p><strong>What will You get with Real-time analytics solutions?</strong></p>
          <p>
            The capability to analyze data as it is generated or received allows for immediate insights and decision-making.
            This is crucial for scenarios where data is constantly changing or needs to be acted upon quickly.
          </p>
          <br />
          <p><strong>How can You use these solutions?</strong></p>
          <p>
            Utilize these solutions in environments where timely decisions are critical, such as in financial trading,
            fraud detection, or dynamic pricing models. They are also valuable in monitoring systems or processes,
            like network performance or supply chain operations, where immediate response to changes or anomalies is essential.
          </p>
        </>
      ),
      image: '../dataanalytics/Time-series-analytics-solutions.webp',
    },
    {
      id: 4,
      title: 'Cognitive Analytics Solutions',
      description: (
        <>
          <p><strong>What will You get with cognitive analytics solutions?</strong></p>
          <p>
            Advanced analytics that mimics human thought processes, capable of handling and interpreting complex,
            unstructured data like natural language, images, and voice. These solutions leverage AI and machine learning
            for deep, contextual data analysis.
          </p>
          <br />
          <p><strong>How can You use these solutions?</strong></p>
          <p>
            Implement cognitive analytics for tasks that require an understanding of context, such as customer service bots,
            market research, and sentiment analysis. They are also useful in areas like healthcare for diagnostic assistance
            or in retail for personalized customer experiences.
          </p>
        </>
      ),
      image: '../dataanalytics/Cognitive-Analytics-Solutions.webp',
    },
    {
      id: 5,
      title: 'Time series analytics solutions',
      description: (
        <>
          <p><strong>What will You get with time series analytics solutions?</strong></p>
          <p>
            The ability to analyze sequences of data points collected over time. This includes identifying trends, forecasting future events, and detecting seasonal variations or anomalies.
          </p>
          <br />
          <p><strong>How can You use these solutions?</strong></p>
          <p>
            Use time series analytics in financial market analysis, weather forecasting, or inventory management. They are particularly valuable for businesses that need to predict future trends based on historical data, such as in stock market trading or in planning production schedules.
          </p>
        </>
      ),
      image: '../dataanalytics/Spatial-Analytics-Solutions.webp',
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
    <section id="f" className="pt-20 pb-20">
      <div className="container px-6 mx-auto bg-white-950 rounded-lg py-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl text-black font-light font-mono mb-4 leading-tight">
              <span className="text-blue-500 font-normal">Data analytics solutions</span>  that may enhance your enterprise

              <br />

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
                      <p className="text-sm text-blue-200">{service.description}...</p>
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
                        : 'text-[#91A2B3] hover:text-blue-300'
                      }`}
                  >
                    <h3 className="font-semibold  text-base">{service.title}</h3>
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
                      <h3 className="text-3xl font-semibold text-black-900">{service.title}</h3>
                      <p className="text-black-700 mt-4">{service.description}</p>


                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-80 h-auto  shadow-lg object-cover"
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


//-----------------------------------------------------------Our Clients success stories--------------------------------------------------
const OurClientsSuccessStories = () => {
  const recentWorks = [
    {
      title: "Quality assurance services for complex CRM",
      description:
        "A big CRM system written on .Net had numerous bugs and faced user churn. This is the story of how we found 5,000 bugs, automated the testing process, and reduced system maintenance costs.",
      image: "../dataanalytics/crm.png",
      bgColor: "bg-[#a4152a]",
    },
    {
      title: "Real-time blood glucose monitoring app for a healthcare technology firm",
      description: "A mobile application that provides real-time blood glucose data through graphical representation, alerts for timely insulin administration, and seamless user onboarding, elevating the Client’s sensor product for a more significant market impact.",
      image: "../dataanalytics/erp.png",
      bgColor: "bg-[#061138]",
    },

    {
      title: " IoT application with sensors for industrial fridge monitoring",
      description:
        "An IoT solution for HoReCa venues with the option to monitor the work of industrial (commercial) refrigerators online, get instant alerts on urgent issues and manage historical data.",
      image: "../dataanalytics/cover-1.jpg",
      bgColor: "bg-[#652D90]",
    },
  ];

  return (
    <section id="g" className="p-8 mb-12">
      <h1 className="text-4xl md:text-5xl mb-8 text-center font-medium">
        Find inspiration from our Clients’ success stories
      </h1>

      <div className="space-y-6 ">
        {recentWorks.map((work, index) => (
          <RevealOnScroll key={index} delay={index * 0.2}>
            <div
              className={` overflow-hidden shadow-lg hover:bg-gradient-to-r from-[#652D90] from-[0%] via-[#a4152a] via-[49%]  to-blue-900 to-[100%] grid md:grid-cols-2  ${work.bgColor} text-white`}
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

//----------------------------------------Awards & Recognitions Section------------------------------------------------------------------
const AwardsAndRecognitions = () => {
  return (
    <RevealOnScroll>
      <section id="h" >
        <CertificationsSection />
      </section>
    </RevealOnScroll>
  );
};

//----------------------------------------Technologies Section------------------------------------------------------------------
const Technologies = () => {
  return (
    <RevealOnScroll>
      <section id="i" className="py-16 px-4 bg-white">
        <img
          src="../bigdataanalyticsandiotdevelopment/technologiess.png"
          alt="Technologies we work with "
          className="w-full h-auto rounded-lg shadow-md"
          loading="lazy" />
      </section>
    </RevealOnScroll>
  );
};

//----------------------------------------Testimonials Section------------------------------------------------------------------
const Testimonials = () => {
  return (
    <RevealOnScroll>
      <section id="j" className="py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-500">Clients</span> talk about us
          </h2>
        </div>
        <div className="container mx-auto px-4">

          <ReviewCarousel />
        </div>
      </section>
    </RevealOnScroll>
  );
};


//----------------------------------------Get in touch Section------------------------------------------------------------------
const GetInTouch = () => {
  return (
    <RevealOnScroll>
      <section id="nill" className="py-16 px-4 bg-[#f6f8fc]">
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

//----------------------------------------FAQ Section------------------------------------------------------------------
const FAQSections = () => {
  const DataAnalyticsFaqs = [
    {
      question: "Is it hard to create a Custom Data Analytics System?",
      answer: (
        <p>
          Creating a custom data analytics system can be complex, requiring expertise in data processing, analytics algorithms, and user interface design. It involves skilled developers, data scientists, and a well-planned strategy. We have 10+ years of experience and will guide you through the process. Book a call.
        </p>
      )
    },
    {
      question: "Should we build our own Data Analytics System?",
      answer: (
        <p>
          Deciding to build your data analytics system depends on your unique needs, available resources, and technical capabilities. Consider factors such as complexity, time investment, cost, and the need for specific custom features before making a decision. Our seasoned developers can help you make these decisions. Book a free consultation
        </p>
      )
    },
    {
      question: "What do you need to build a Custom Data Analytics System?",
      answer: (
        <p>
          To build a custom data analytics system, you’ll need a team consisting of data scientists, software developers, UI/UX designers, and database experts. Additionally, access to robust computing infrastructure, a comprehensive project roadmap, and resources for ongoing maintenance and updates are essential. We have 10+ years of experience and can support you on this journey.
        </p>
      )
    },
    {
      question: "Does Data Analytics have a future?",
      answer: (
        <p>
          The global data analytics market is expected to grow from USD 31.8 billion in 2022 to USD 329.8 billion by 2030, at a CAGR of 29.9%. Stay at the forefront of innovation with us. Start estimating your idea today
        </p>
      )
    },
    {
      question: "How can our Custom Data Analytics Services benefit your USA-based business?",
      answer: (
        <p>
          Our Custom Data Analytics Services are designed to empower your USA-based business with data-driven insights, enhancing decision-making and operational efficiency, and giving you a competitive edge in the marketplace. We have launched 200+ projects and possess top-notch processes that will guide you to success.
        </p>
      )
    },
    {
      question: "What makes our Custom Data Analytics Services stand out for USA businesses?",
      answer: (
        <p>
          Our services stand out for businesses due to our commitment to delivering personalized solutions that meet your specific needs. We ensure that you derive maximum value from our expertise in data analytics. Don’t put off until tomorrow what you can do today. Book a free consultation now
        </p>
      )
    },
    {
      question: "Can we integrate Custom Data Analytics Solutions with your existing systems?",
      answer: (
        <p>
          Yes, we specialize in seamlessly integrating custom data analytics solutions with your current systems. This integration ensures smooth data flow and enhanced efficiency. Describe your project to our team and get our vision for your project’s future. Let’s talk
        </p>
      )
    },
    {
      question: "What kind of support can you expect from us during and after the Custom Data Analytics development process?",
      answer: (
        <p>
          Expect comprehensive support throughout your journey with our custom data analytics development. We offer daily progress reporting, expert guidance, report training, and continuous support to ensure the success and effectiveness of your data analytics system. Inquire about collaboration details
        </p>
      )
    }
  ];

  return (
    <section id="k" className="px-4 mb-16">
      <FAQ faqs={DataAnalyticsFaqs} />
    </section>
  )
};


// ----------------------------------------------------------------Main Component----------------------------------------------------
const DataAnalyticsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const contentsMenu = [
    { title: 'How does data analytics help in increasing effectiveness?', id: 'a' },
    { title: 'Examples of Data Analytics', id: 'b' },
    { title: 'Indicators of the quality of our services', id: 'c' },
    { title: 'Benefits of Data Analytics systems for Business', id: 'd' },
    { title: 'Our Profile', id: 'e' },
    { title: 'Data analytics solutions', id: 'f' },
    { title: 'Our Clients success stories', id: 'g' },
    { title: 'Our recognitions', id: 'h' },
    { title: 'Technologies we work with', id: 'i' },
    { title: 'Our Clients talk about us', id: 'j' },
    { title: 'FAQ', id: 'k' }
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
      <Logos />
      {/* Start the flex container for main content and TOC */}
      <div className="container mx-auto flex flex-col lg:flex-row ">
        {/* Main content column - takes 3/4 width on desktop */}
        <div className="w-full lg:w-[200%] px-2">

          <DataAnalyticsIncEffectiveness />
          <ExamplesDataAnalytics />
          <IndicatorsQualityServices />
          <SevenKeyC />
          <OurProfile />
          <DataAnalyticsSoln />
          <OurClientsSuccessStories />
          <AwardsAndRecognitions />
          <Technologies />
          <Testimonials />
          <GetInTouch />
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

export default DataAnalyticsPage;