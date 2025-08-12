import { useEffect, useRef, useState } from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import RevealOnScroll from '../ui/RevealOnScroll';
import ContactPopup from '../ui/contactpopup';
const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const el = parallaxRef.current;
      if (!el) return;

      requestAnimationFrame(() => {
        const { left, top, width, height } = parallaxRef.current!.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const moveX = (x - width / 2) / 50;
        const moveY = (y - height / 2) / 50;
        parallaxRef.current!.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
      })
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden animate-gradientMove">
      <div className="container px-4 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <RevealOnScroll delay={100}>
              <span className="inline-block px-3 py-1 rounded-full bg-vofox-blue/10 text-vofox-blue font-medium text-sm mb-4">
                Modern IT Solutions Provider
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vofox-darkBlue mb-4 leading-tight">
                Transforming Ideas into <span className="text-vofox-blue">Digital Reality</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="text-lg text-vofox-darkGray mb-8 max-w-xl">
                We empower businesses with innovative technology solutions to navigate the digital landscape and achieve sustainable growth.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="flex flex-wrap gap-4">
                <AnimatedButton size="lg" onClick={() => setIsContactPopupOpen(true)}>Book Consultation</AnimatedButton>
                <AnimatedButton variant="outline" size="lg">
                  Our Services
                </AnimatedButton>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={500}>
              <div className="flex items-center mt-12">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium text-vofox-darkBlue">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="block text-sm text-vofox-darkGray">Trusted by</span>
                  <span className="font-medium text-vofox-darkBlue">50+ Companies</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-vofox-blue/20 to-vofox-lightBlue/20 rounded-full blur-3xl opacity-50 animate-pulse-light"></div>
              <div ref={parallaxRef} className="relative z-10 transition-transform duration-200 ease-out">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Digital Transformation"
                  className="w-full max-w-lg rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-vofox-blue flex items-center justify-center text-white font-bold">
                      99%
                    </div>
                    <div>
                      <p className="text-sm text-vofox-darkGray">Client Satisfaction</p>
                      <p className="font-semibold text-vofox-darkBlue">Across Projects</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass rounded-lg p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-vofox-darkBlue flex items-center justify-center text-white font-bold">
                      03+
                    </div>
                    <div>
                      <p className="text-sm text-vofox-darkGray">Years</p>
                      <p className="font-semibold text-vofox-darkBlue">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-vofox-blue/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vofox-lightBlue/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)} />
    </section>
  );
};

export default Hero;
