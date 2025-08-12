import { useState, useEffect, lazy } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { ChevronDown, Menu, X, ChevronRight, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactPopup from '../ui/contactpopup';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);


  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeAboutCategory, setActiveAboutCategory] = useState(null);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {

    if (isMobileMenuOpen) {

      if (isMobileMenuOpen || isInsightsOpen) {

        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isMobileMenuOpen, isInsightsOpen]);

  const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string, sectionId?: string) => {
      if (path.includes('#team-section')) {

        if (window.location.pathname === '/about') {
          const element = document.getElementById('team-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {

          navigate('/about', { state: { scrollTo: 'team-section' } });
        }
      } else {
        navigate(path);
      }
    };

    return (
      <div>
        {aboutus[0].items.map((item) => (
          <div
            key={item.name}
            onClick={() => handleNavigation(item.path, item.sectionId)}
            className="cursor-pointer hover:text-blue-600"
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  const navItems = [
    { name: 'Services', path: '/services', hasSubmenu: true },
    { name: 'Case Studies', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About US', path: '/', hasSubmenu: true },
    { name: 'Insights', path: '/InsightsPage' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  const services = [
    {
      title: "SERVICES",
      items: [
        { name: "Software Product Development", path: "/services#software" },
        { name: "Internet of Things Development", path: "/services/iot-development" },
        { name: "Web Development", path: "/services/web" },
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "IT Staff Augmentation", path: "/it-staff-augmentation" },
      ],
    },
    {
      items: [
        { name: "Business Analysis", path: "/services/BusinessAnalysis" },
        { name: "UI/UX Services", path: "/services/user-interface" },
        { name: "Frontend Development", path: "/services/frontend-development" },
        { name: "Backend Development", path: "/services/backend-development" },
        { name: "QA & Testing Services", path: "/services/qa-and-testing" },

      ],
    },
    {
      title: "SOLUTIONS",
      items: [
        { name: "Enterprise Software Development", path: "/solutions/enterprise-development" },
        { name: "MVP Development", path: "/solutions/mvp-development" },
        { name: "SaaS Development", path: "/solutions/saas-development" },
        { name: "OpenAI Development", path: "/solutions/openai-development" },

      ],
    },
    {
      title: "TECHNOLOGIES",
      items: [
        { name: "Java Development", path: "/services/java-development" },
        { name: "Node.js Development", path: "/services/nodejs-development" },
        { name: "Ruby on Rails Development", path: "/services/ruby-on-rails-development" },
        { name: "AI Development Services", path: "/services/ai-development" },
        { name: "Blockchain Development", path: "/services/blockchain-development" },

      ],
    },
    {
      title: "INDUSTRY SPECIFIC SOLUTIONS",
      items: [
        { name: "Healthcare IoT Development", path: "/services/healthcare-iot-development" },
        { name: "IoT Big Data Analytics", path: "/services/iot-big-data-analytics" },
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "IoT for Smart Cities", path: "/services/iot-solutions-for-smart-cities" },
        { name: "IoT Consulting", path: "/services/iot-consulting" },

      ],
    },
    {
      title: "OTHER INDUSTRIES WE HELP",
      items: [

        { name: "Healthcare Software", path: "/industries/healthcare-software" },
        { name: "Logistics Software", path: "/industries/logistics-software" },
        { name: "FinTech Software", path: "/industries/financial-software" },
        { name: "AdTech Software", path: "/industries/advance-tech" },
        { name: "EdTech Software", path: "/industries/edtech-software" },



      ],
    },
  ];

  const aboutus = [
    {
      title: "ABOUT US",
      items: [
        {
          name: "Team", path: "/about#team-section", sectionId: "team-section",
        },
        { name: "Testimonials", path: "/reviews" },
        { name: "Engagement models", path: "/engagement-models" },
        { name: "Development Life Cycle", path: "/development-lifecycle" },
        { name: "Pricing", path: "/pricing" },
        { name: "Careers", path: "/Careers" },
        { name: "Contact Us", path: "/contactpage" },
      ],
    },
    {
      title: "FOX SOLUTIONS IN NUMBERS",
      items: [
        { name: "200+", description: "Developed custom solutions" },
        { name: "98%", description: "Customer satisfaction rate" },
        { name: "3+", description: "Years' Сlient engagement" },
      ],
    },
    {
      items: [
        { name: "25+", description: "States" },
        { name: "13+ Years", description: "On the market" },
        { name: "70%", description: "Senior engineers" },
      ],
    },
  ];

  return (

    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ',

        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'

      )}
    >
      <div className="container px-4 mx-auto flex items-center">
        <Link to="/" className="flex items-center group relative z-50">
          <motion.span
            className="font-bold text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-vofox-darkBlue to-vofox-blue group-hover:to-blue-400 transition-all duration-300">fox</span>
            <span className="text-vofox-blue group-hover:text-blue-400 transition-colors duration-300">Solutions</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-grow">
          <div className="flex items-center justify-center space-x-3">
            {navItems.map((item) => (
              item.hasSubmenu ? (
                <NavigationMenu key={item.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger

                        className="bg-transparent text-base font-medium data-[state=open]:bg-transparent hover:bg-blue-100/70 hover:text-vofox-blue transition-all duration-300 rounded-lg data-[state=open]:text-vofox-blue"
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white backdrop-blur-sm p-3 rounded-lg shadow-lg min-w-[900px] max-w-[900px] border border-gray-100">

                        {item.name === "About US" ? (
                          <>
                            <div className="grid justify-center grid-cols-3 gap-3 p-2 pb-4">
                              {aboutus.map((category, index) => (
                                <div key={index} className={`space-y-3 ${index !== aboutus.length - 1 ? 'border-r border-gray-100 pr-4' : ''}`}>
                                  {category.title && (


                                    <h3 className="text-sm font-semibold text-vofox-blue uppercase mb-2">
                                      {category.title}
                                    </h3>
                                  )}
                                  <ul className="space-y-1">
                                    {category.items.map((aboutItem, i) => (
                                      <li key={i} className="flex flex-col">
                                        {aboutItem.description ? (
                                          <div className="block py-1.5 px-2">
                                            <div className="text-vofox-blue font-semibold">{aboutItem.name}</div>

                                            <div className="text-gray-700 text-sm">{aboutItem.description}</div>

                                          </div>

                                        ) : (
                                          <NavigationMenuLink asChild>
                                            <Link
                                              to={aboutItem.path}
                                              onClick={() => setIsMobileMenuOpen(false)}

                                              className="block text-gray-900 font-medium hover:text-vofox-blue hover:bg-blue-100/70 transition-all duration-200 py-1.5 px-2 rounded-md text-sm"

                                            >
                                              {aboutItem.name}
                                            </Link>
                                          </NavigationMenuLink>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="text-left mt-4 px-4">
                              <Link
                                to="/about"
                                className="text-vofox-blue font-medium hover:text-blue-700 inline-flex items-center gap-1 group"
                              >
                                About Fox Solutions
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                              </Link>
                            </div>
                          </>
                        ) : (
                          <>
                            <ul className="grid grid-cols-3 gap-3 p-2 pb-4">
                              {services.map((category, index) => (
                                <div key={index} className="space-y-3">
                                  {category.title && (

                                    <h3 className="text-sm font-semibold text-vofox-blue uppercase mb-2">

                                      {category.title}
                                    </h3>
                                  )}
                                  <ul className="space-y-1">
                                    {category.items.map((service, i) => (
                                      <li key={i} className={cn(
                                        'flex flex-col',
                                        index !== services.length - 1 ? 'border-r border-gray-100 pr-4' : ''
                                      )}>
                                        <NavigationMenuLink asChild>
                                          <Link
                                            to={service.path}
                                            onClick={() => setIsMobileMenuOpen(false)}

                                            className="block text-gray-900 font-medium hover:text-vofox-blue hover:bg-blue-100/70 transition-all duration-200 py-1.5 px-2 rounded-md text-sm"

                                          >
                                            {service.name}
                                          </Link>
                                        </NavigationMenuLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </ul>
                            <div className="text-left mt-4 px-4">
                              <Link
                                to="/all-services"
                                className="text-vofox-blue font-medium hover:text-blue-700 inline-flex items-center gap-1 group"
                              >
                                All Services
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                              </Link>
                            </div>
                          </>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-900 text-base font-medium hover:text-vofox-blue transition-all duration-300 p-3 hover:bg-blue-100/70 rounded-lg"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </nav>

        {/* Get in Touch Button */}
        < div className="ml-auto pr-9" >
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:translate-y-[1px] group"
          >
            <span className="inline-block header_button_desk relative">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/0 group-hover:bg-white/30 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100" />
            </span>
            <Mail className="ml-2" size={20} />
          </button>
        </div>


        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-vofox-darkBlue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="relative w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto"
            >
              <div className="p-6 min-h-screen flex flex-col">
                <div className="space-y-4 flex-1">
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      {item.hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => {
                              if (item.name === "Services") {
                                setIsServicesOpen(!isServicesOpen);
                                if (isAboutUsOpen) setIsAboutUsOpen(false);
                              } else if (item.name === "About US") {
                                setIsAboutUsOpen(!isAboutUsOpen);
                                if (isServicesOpen) setIsServicesOpen(false);
                              }
                            }}
                            className="w-full flex items-center justify-between py-3 text-left group"
                          >
                            <motion.span

                              className="text-gray-900 text-base font-medium group-hover:text-vofox-blue transition-colors"

                              whileTap={{ scale: 0.98 }}
                            >
                              {item.name}
                            </motion.span>
                            <motion.div
                              animate={{
                                rotate: (item.name === "Services" && isServicesOpen) ||
                                  (item.name === "About US" && isAboutUsOpen) ? 180 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-vofox-blue transition-colors" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {item.name === "Services" && isServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-2 pb-4">
                                  {services.map((category, idx) => (
                                    <div key={idx} className="mb-4">
                                      {category.title && (
                                        <motion.button
                                          className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                          onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
                                          whileTap={{ scale: 0.98 }}
                                        >
                                          <span className="text-sm font-semibold text-gray-800">
                                            {category.title}
                                          </span>
                                          <motion.div
                                            animate={{ rotate: activeCategory === idx ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <ChevronRight className="h-4 w-4 text-gray-500" />
                                          </motion.div>
                                        </motion.button>
                                      )}
                                      <AnimatePresence>
                                        {(activeCategory === idx || !category.title) && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                          >
                                            <div className="pl-4 space-y-2 py-2">
                                              {category.items.map((service, i) => (
                                                <motion.div
                                                  key={i}
                                                  initial={{ x: -10, opacity: 0 }}
                                                  animate={{ x: 0, opacity: 1 }}
                                                  transition={{ delay: i * 0.05 }}
                                                >
                                                  <Link
                                                    to={service.path}
                                                    onClick={() => {
                                                      setIsMobileMenuOpen(false);
                                                      setIsServicesOpen(false);
                                                    }}
                                                    className="block py-2 px-4 text-gray-800 font-medium hover:text-vofox-blue hover:bg-blue-100/70 rounded-lg transition-all duration-200"
                                                  >
                                                    {service.name}
                                                  </Link>
                                                </motion.div>
                                              ))}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ))}
                                  {/* All Services link for mobile */}
                                  <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="pl-4 py-2"
                                  >
                                    <Link
                                      to="/all-services"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsServicesOpen(false);
                                      }}

                                      className=" py-2 px-4 text-vofox-blue font-medium hover:bg-blue-100/70 rounded-lg transition-all duration-200 inline-flex items-center gap-1 group"

                                    >
                                      All Services
                                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </Link>
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}

                            {item.name === "About US" && isAboutUsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-2 pb-4">
                                  {aboutus.map((category, idx) => (
                                    <div key={idx} className="mb-4">
                                      {category.title && (
                                        <motion.button
                                          className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                          onClick={() => setActiveAboutCategory(activeAboutCategory === idx ? null : idx)}
                                          whileTap={{ scale: 0.98 }}
                                        >
                                          <span className="text-sm font-semibold text-gray-800">

                                            {category.title}
                                          </span>
                                          <motion.div
                                            animate={{ rotate: activeAboutCategory === idx ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <ChevronRight className="h-4 w-4 text-gray-500" />
                                          </motion.div>
                                        </motion.button>
                                      )}
                                      <AnimatePresence>
                                        {(activeAboutCategory === idx || !category.title) && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                          >
                                            <div className="pl-4 space-y-2 py-2">
                                              {category.items.map((aboutItem, i) => (
                                                <motion.div
                                                  key={i}
                                                  initial={{ x: -10, opacity: 0 }}
                                                  animate={{ x: 0, opacity: 1 }}
                                                  transition={{ delay: i * 0.05 }}
                                                >
                                                  {aboutItem.description ? (
                                                    <div className="py-2 px-4">
                                                      <div className="text-vofox-blue font-semibold">{aboutItem.name}</div>

                                                      <div className="text-gray-600 text-sm">{aboutItem.description}</div>

                                                      <div className="text-gray-700 text-sm">{aboutItem.description}</div>

                                                    </div>
                                                  ) : (
                                                    <Link
                                                      to={aboutItem.path}
                                                      onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setIsAboutUsOpen(false);
                                                      }}
                                                      className="block py-2 px-4 text-gray-800 font-medium hover:text-vofox-blue hover:bg-blue-100/70 rounded-lg transition-all duration-200"

                                                    >
                                                      {aboutItem.name}
                                                    </Link>
                                                  )}
                                                </motion.div>
                                              ))}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ))}
                                  {/* About Fox Solutions link for mobile */}
                                  <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="pl-4 py-2"
                                  >
                                    <Link
                                      to="/about"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsAboutUsOpen(false);
                                      }}

                                      className=" py-2 px-4 text-vofox-blue font-medium hover:bg-blue-100/70 rounded-lg transition-all duration-200 inline-flex items-center gap-1 group"

                                    >
                                      About Fox Solutions
                                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </Link>
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 text-base font-medium text-gray-900 hover:text-vofox-blue transition-colors"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Get in Touch Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 mt-6 border-t"
                >
                  <button
                    className="lg:hidden w-full inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[1px]"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsContactPopupOpen(true);
                    }}
                  >
                    Get in Touch
                    <Mail className="ml-2" size={20} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </header>

  );
};

export default Navbar;