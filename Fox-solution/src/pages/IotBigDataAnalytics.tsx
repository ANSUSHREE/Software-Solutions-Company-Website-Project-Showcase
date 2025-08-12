import { useState, useCallback, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQ from '@/components/ui/faq';
import ReviewCarousel from '@/components/ui/reviewCarousel';
import { FaDownload } from 'react-icons/fa';

const SECTION_IDS = [
  { title: 'Introduction', id: 'hero' },
  { title: 'Why Choose Us', id: 'overview' },
  { title: 'Key Highlights', id: 'features' },
  { title: 'Available Languages', id: 'languages' },
  { title: 'What Kids Gain', id: 'benefits' },
  { title: 'Parent Reviews', id: 'testimonials' },
  { title: 'Course Certificate', id: 'certifications' },
  { title: 'FAQs', id: 'faq' },
  { title: 'Contact Us', id: 'contact' }
];

const KidsLanguageCoursesPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of SECTION_IDS) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
      const offset = window.innerWidth < 1024 ? 80 : 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

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
            {SECTION_IDS.map((item, index) => (
              <li
                key={index}
                className={`text-lg p-3 rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
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

      <RevealOnScroll>
            <section className="relative h-screen w-full">
  {/* Background Image */}
  <img
    src="/" // Replace with your image path
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Content Box */}
  <div className="absolute right-16 bottom-20 max-w-md bg-blue-500 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4 leading-tight">
      Empowering your kids <br /> for the new world
    </h2>
    <p className="mb-4 text-sm">
      Prepare your kids are the most sought-after skills in the modern world. With impeccable
      communication skills and language proficiency, your kids will be able to win the world over.
    </p>
    <button className="bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-md text-white font-semibold">
      GET STARTED NOW
    </button>
  </div>
</section>


     </RevealOnScroll>

 <RevealOnScroll>
        <section className="relative w-full bg-white text-white py-16 px-6">
  <div className="absolute inset-0 bg-gray-900 w-1/2 h-full z-0" />
  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src=""
        alt="Kid with cardboard helmet and star"
        className="rounded-lg shadow-lg md:-ml-20"
      />
    </div>
    <div className="w-full md:w-1/2 text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">English communication programmes for growing minds</h2>
      <p className="text-lg text-gray-600">
        National Institute of Language offers various programmes for the development of communication skills in kids
        along with personality development training. We focus on the overall development while imparting the essential skill set.
      </p>
    </div>
  </div>
</section>

      </RevealOnScroll>


      

      

      <Footer />
    </div>
  );
};

export default KidsLanguageCoursesPage;
