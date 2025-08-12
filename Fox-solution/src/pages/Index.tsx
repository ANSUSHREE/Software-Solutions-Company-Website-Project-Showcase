
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import CaseStudies from '@/components/home/CaseStudies';
import Contact from '@/components/home/Contact';
import AnimatedButton from '@/components/ui/AnimatedButton';
import RevealOnScroll from '@/components/ui/RevealOnScroll';


import FAQ from '@/components/ui/faq';



const Index = () => {
  const stats = [
    { value: '03+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '26+', label: 'Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ];
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () { });
      });
    };
  }, []);



  const FAQSection = () => {
    const faqs = [
      {
        question: 'I want to develop software. How much will it cost?',
        answer: <>
          <p>Software development costs vary depending on several factors, such as:</p>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>the scale of your application idea (e.g., a simple two-page website or enterprise-level software solutions);</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>required innovations (whether it needs extra research, inventions, or uses a well-known tech stack);</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>the software development company’s experience in tech and project management;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>software outsourcing rates.</span>
            </li>
            <li>
              <span>Every idea is unique, and various factors affect its cost. That’s why we recommend contacting us for initial consulting and free analysis and estimation.</span>
            </li>
          </ul>
        </>,
      }, {
        question: 'How much time will it take for you to make my app?',
        answer: `3 key parameters influence the software development timeline:
      application complexity and scope;
      quality requirements; 
      interdependencies between features; 
      These factors are thoroughly considered when providing estimates for custom product development projects.`
      }, {
        question: 'How do you guarantee product quality?',
        answer: 'Fox Solutions uses best practices in project management and software development, from initial consulting to technical tools and QA processes. Our professional QA engineers ensure quality. Additionally, Foxsolutions guarantees the solutions developed and tested by our specialists.',
      },
      {
        question: 'What methodologies do you use in your work?',
        answer: 'We primarily use Agile methodologies—Scrum and Kanban—proven effective in managing software projects. These approaches allow our Clients to stay actively involved in product development, remain updated on progress, and provide feedback at any stage.',
      }, {
        question: 'What happens after you finish my app?',
        answer: 'After the application is released, we offer support and maintenance services. The specific terms and conditions are outlined in an additional Statement of Work. We also provide training and knowledge transfer for internal teams. Foxsolutions focuses on building long-term relationships by offering ongoing consulting and management services.',
      }, {
        question: 'Will you be able to increase the number of people in the team if necessary?',
        answer: 'Fox Solutions is able and has the necessary experience in scaling and managing software development teams. We have the processes required to grow the teams rapidly, including hiring, onboarding, knowledge transfer, resource management, and more.',
      }
    ];
    return (
      <section id="faq" className="px-4 mb-16">
        <FAQ faqs={faqs} />
      </section>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
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

      {/* <About /> */}


      <CaseStudies />
      <Contact />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
