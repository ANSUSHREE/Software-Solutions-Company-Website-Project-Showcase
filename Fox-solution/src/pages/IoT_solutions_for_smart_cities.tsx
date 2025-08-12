import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import AnimatedButton from "../components/ui/AnimatedButton";
import Contact from "@/components/home/Contact";
import TestimonialCarousel from "@/components/ui/Testimonial";
import { TableOfContents } from '@/components/ui/TableOfContents';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import BlogHomepage from "@/components/ui/bloghome";
import { CertificationsSection } from "@/components/ui/Certification";
import { CheckCircle } from "lucide-react";



const IoT_solutions_for_smart_cities = () => {
    const sections = [

        { id: 'our-excellence-in-IoT', title: 'Our excellence in IoT for smart cities' },
        { id: 'IoT-based-solution', title: 'IoT-based solutions' },
        { id: 'Technologies-we-use', title: 'Technologies we use' },
        { id: 'How-Foxsolution-can-assist', title: 'How Foxsolution can assist' },
        { id: 'Our-Iot-software', title: 'Our IoT Software ' },
        { id: 'Quick-facts', title: 'Quick facts' },
        { id: 'awards-Recognitions', title: 'Awards & Recognitions' },
        { id: 'Awesome-stories', title: 'Awesome stories' }
    ];

    function InfiniteImageCarousel({
        images = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            alt: `Image ${i + 1}`
        })),
        speed = 0.5, // Reduced speed
        imageWidth = 240,
        imageHeight = 160,
        gap = 8,
        className = ""
    }) {
        const carouselRef = useRef(null);
        const [duplicateCount, setDuplicateCount] = useState(3); // Number of times to duplicate the images

        useEffect(() => {
            const scrollContainer = carouselRef.current;
            if (!scrollContainer) return;

            // Set initial scroll position to start after the first set of images
            // This allows us to create an infinite loop effect
            const resetScrollPosition = () => {
                const singleSetWidth = (imageWidth + gap) * images.length;
                scrollContainer.scrollLeft = singleSetWidth;
            };

            resetScrollPosition();

            // Function to handle the animation
            const animateScroll = () => {
                scrollContainer.scrollLeft += speed;

                // Check if we need to reset position to create infinite loop effect
                const itemWidth = imageWidth + gap;
                const totalWidth = itemWidth * images.length;

                // If we've scrolled past a full set of images
                if (scrollContainer.scrollLeft >= totalWidth * 2) {
                    scrollContainer.scrollLeft -= totalWidth;
                }

                // If we've scrolled backwards (this can happen with some browser behaviors)
                if (scrollContainer.scrollLeft <= 0) {
                    scrollContainer.scrollLeft += totalWidth;
                }

                // Continue the animation
                requestAnimationFrame(animateScroll);
            };

            // Start the animation
            const animationId = requestAnimationFrame(animateScroll);

            // Clean up on unmount
            return () => cancelAnimationFrame(animationId);
        }, [speed, images.length, imageWidth, gap]);

        // Custom style to hide scrollbars across browsers
        const scrollbarHideStyles: React.CSSProperties = {
            scrollbarWidth: 'none' as 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
        };

        // Style to hide scrollbar in webkit browsers
        const scrollbarHideClass = `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `;

        // Create the duplicated array for seamless looping
        const loopingImages = [];
        for (let i = 0; i < duplicateCount; i++) {
            loopingImages.push(...images.map((img, index) => ({
                ...img,
                loopId: `${img.id}-${i}`
            })));
        }

        return (
            <div className={`w-full overflow-hidden ${className}`}>
                <style dangerouslySetInnerHTML={{ __html: scrollbarHideClass }} />

                <div
                    ref={carouselRef}
                    className="flex overflow-x-scroll scrollbar-hide"
                    style={{
                        ...scrollbarHideStyles,
                        scrollBehavior: 'auto'
                    }}
                >
                    {loopingImages.map((image, index) => (
                        <div
                            key={`${image.loopId}-${index}`}
                            className="flex-shrink-0"
                            style={{
                                marginLeft: `${gap / 2}px`,
                                marginRight: `${gap / 2}px`
                            }}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="object-cover rounded"
                                style={{
                                    width: `${imageWidth}px`,
                                    height: `${imageHeight}px`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const myImages = [
        { id: 1, url: "/careers-photo-1.jpg", alt: "Description 1" },
        { id: 2, url: "/careers-photo-2.jpg", alt: "Description 2" },
        { id: 3, url: "/careers-photo-3.jpg", alt: "Description 3" },
        { id: 4, url: "/careers-photo-4.jpg", alt: "Description 4" },
        { id: 5, url: "/careers-photo-5.jpg", alt: "Description 5" },
        { id: 6, url: "/careers-photo-6.jpg", alt: "Description 6" },
        { id: 7, url: "/careers-photo-7.jpg", alt: "Description 7" },
        { id: 8, url: "/careers-photo-8.jpg", alt: "Description 8" },
        { id: 9, url: "/careers-photo-9.jpg", alt: "Description 9" },
    ];


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const HeroSection = () => {
        return (
            <>
                <RevealOnScroll>
                    <div className="p-8 mr-0 bg-gradient-to-r from-white to-gray-100">
                        <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className='text-gray-700 hover:text-blue-400 transition-colors duration-200'>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/services/iot-solutions-for-smart-cities" className='text-gray-700 hover:text-blue-400 transition-colors duration-200'>Services</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-gray-700 hover:text-blue-400 transition-colors duration-200'>Iot solutions for smart cities</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <section id="hero" className="bg-gradient-to-r from-white to-pink-50 text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
                        <div className="max-w-5xl mx-auto text-center md:text-left ml-0 md:ml-8">
                            <h1 className="text-4xl md:text-5xl font-normal leading-tight text-blue-600">
                                Internet of Things solutions for <span className="text-black">smart cities</span>
                            </h1>
                            <p className="text-lg mt-6 text-gray-800 max-w-3xl">
                                Cities around the globe embrace the modern technologies and opportunities they bring. We, at SumatoSoft, stand at the forefront, building an interconnected network of devices for real-time monitoring, management, and optimization of city services.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-8 text-gray-100">
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">improved public services like waste collection and water management</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">enhanced public safety
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">traffic and transportation management
                                        </span>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">efficient energy management</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✔</span>
                                        <span className="text-gray-800">environmental monitoring</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-6">
                                <button className="bg-blue-600 text-white px-5 py-2 font-normal transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
                                    Get in Touch
                                </button>
                                <div className="text-sm text-gray-800 ml-24 mt-4 sm:mt-0">
                                    <div>Clients rate our services</div>
                                    <div className="text-yellow-600 text-xl font-bold mt-1">★★★★★ 5.0</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>
            </>
        );
    };

    const ExcellenceinIot = () => {
        const [activeService, setActiveService] = useState('End-to-End IoT solutions');
        const services = [
            {
                name: 'End-to-End IoT solutions',
                icon: (
                    <img className='w-12 h-12 brightness-0 invert'
                        src="https://cdn-icons-png.flaticon.com/128/8532/8532194.png"
                    />
                ),
                description: 'Foxsolution provides a complete suite of IoT solutions, from sensor integration and data collection to advanced analytics and visualization. We handle every step, ensuring seamless implementation and maximum efficiency.',

                linkText: 'End-to-End-IoT-solutions >',
                image: '../End-to-End-IoT-solutions.jpg'
            },
            {
                name: 'Customizable IoT framework',
                icon: (
                    <img className='w-12 h-12 brightness-0 invert'
                        src="https://cdn-icons-png.flaticon.com/128/16126/16126511.png"
                    />
                ),
                description: `Foxsolution's excellence in IoT for smart cities End-to-end IoT solutions iconEnd-to-end IoT solutions Customizable IoT framework icon Customizable IoT framework Sustainable and green solutions icon Sustainable and green solutions Secure and scalable infrastructure icon Secure and scalable infrastructure Dedicated support and training icon Dedicated support and training Customizable IoT framework Our proprietary IoT framework is adaptable to any city’s unique needs and challenges. Whether you’re a bustling metropolis or a growing town, our solutions mold to fit your urban landscape.`,

                linkText: 'Customizable IoT framework >',
                image: '../Customizable-IoT-framework.jpg'
            },
            {
                name: 'Sustainable and green solutions',
                icon: (
                    <img className='w-12 h-12 brightness-0 invert'
                        src="https://cdn-icons-png.flaticon.com/128/18725/18725435.png"
                    />
                ),
                description: 'Our IoT solutions are not just smart; they’re green. We prioritize sustainability, ensuring that our technologies reduce carbon footprints, optimize resource usage, and support eco-friendly urban development.',

                linkText: 'Sustainable and green solutions >',
                image: '../Sustainable-and-green-solutions.jpg'
            },
            {
                name: 'Secure and scalable infrastructure',
                icon: (
                    <img className='w-12 h-12 brightness-0 invert'
                        src="https://cdn-icons-png.flaticon.com/128/1797/1797588.png"
                    />

                ),
                description: 'Foxsolution IoT infrastructure is built with security at its core. As your city grows, our solutions scale effortlessly, ensuring consistent performance and unparalleled security.',

                linkText: 'Secure and scalable infrastructure >',
                image: '../Secure-and-scalable-infrastructure.webp'
            },
            {
                name: 'Dedicated support and training',
                icon: (
                    <img className='w-12 h-12 brightness-0 invert'
                        src="https://cdn-icons-png.flaticon.com/128/5030/5030330.png"
                    />
                ),
                description: 'Our commitment doesn’t end with implementation. Foxsolution offers dedicated support, maintenance, and training services, ensuring your city’s stakeholders are well-equipped to harness the full potential of our IoT solutions.',

                linkText: 'Dedicated support and training >',
                image: '../Dedicated-support-and-training.webp'
            }
        ];

        const handleServiceClick = (serviceName) => {
            setActiveService(serviceName);
        };

        const activeServiceData = services.find(service => service.name === activeService);

        return (
            <div className=" text-white p-8 container px-12 mx-auto bg-blue-950 rounded-lg">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl font-light text-center mt-8 mb-16">
                        FoxSolution's excellence <span className="text-blue-500">in IoT for smart cities</span>
                    </h1>

                    {/* Services Icons */}
                    <div className="flex justify-center gap-16 mb-4">
                        {services.map((service) => (
                            <div
                                key={service.name}
                                className="relative flex flex-col items-center cursor-pointer"
                                onClick={() => handleServiceClick(service.name)}
                            >
                                <div className={`mb-2 transition-colors duration-300 ${activeService === service.name ? 'text-blue-500' : 'text-gray-400'}`}>
                                    {service.icon}
                                </div>
                                <div className={`text-center text-sm transition-colors duration-300 ${activeService === service.name ? 'text-blue-500' : 'text-gray-400'}`}>
                                    {service.name}
                                </div>

                                {/* Indicator Bar */}
                                <div
                                    className={`absolute -bottom-4 w-full h-0.5 transition-all duration-300 ${activeService === service.name ? 'bg-blue-500 opacity-100' : 'bg-transparent opacity-0'
                                        }`}
                                >
                                    <div className="flex-grow bg-gray-500 bg-opacity-30 h-full"></div>
                                </div>

                            </div>

                        ))}
                    </div>



                    {/* Active Service Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="col-span-2">
                            <h2 className="text-3xl mb-6">{activeServiceData.name}</h2>
                            <p className="text-gray-300 mb-6">{activeServiceData.description}</p>

                            <div className="mt-8">
                                <a href="#" className="text-red-500 hover:underline">{activeServiceData.linkText}</a>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <img
                                src={activeServiceData.image}
                                alt={`${activeServiceData.name} service`}
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    const IotTechnologiesweuse = () => {
        const iotservices = [
            {
                title: 'Communication protocols',
                description: 'We use Wi-SUN for robust urban connectivity, Bluetooth Low Energy (BLE) for power-efficient short-range communications, and LoRaWAN for huge IoT networks, we ensure every device talks and every signal is heard.',

            },
            {
                title: 'Cloud platforms & integration services',
                description: 'The cloud is where data meets action. Through platforms like Azure IoT Hub, AWS IoT Core, Google Cloud IoT, we harness the power of the cloud to gather, process, and act on real-time data.',

            },
            {
                title: 'Data analytics & AI',
                description: 'Leveraging Big Data platforms like Hadoop and Spark and advanced Machine Learning Frameworks such as TensorFlow and PyTorch, we dive deep into urban data, extracting meaningful patterns and predictions.',

            },
            {
                title: 'Cybersecurity & encryption',
                description: 'We employ leading industrial security standards, leverage AES and RSA data security protocols, IoT security protocols, and follow best practices in device management.',

            },
            {
                title: 'User interfaces & experience (UI/UX)',
                description: 'From intuitive web dashboards to immersive mobile applications and AR experiences, we design interactions that resonate, ensuring every user feels connected & empowered.',


            },
            {
                title: 'Integration of middleware & APIs',
                description: 'Through tools like RESTful APIs and MQTT protocols, we weave together diverse systems and platforms, ensuring seamless communication, efficient data transfer, and harmonized operations across the board.',

            },

        ];



        return (
            <div className="container px-4 mx-auto py-10">
                <div className="max-w-5xl mx-auto">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-normal mb-4 text-gray-800">
                                Technologies <span className="text-blue-500">we use for smart cities software projects</span>
                            </h2>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {iotservices.map((benefit, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="flex flex-col items-start p-6 bg-white rounded-lg h-full">
                                    <div className="mb-4 p-3  rounded-full">

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

    const Howweassist = () => {
        const benefits = [
            {
                title: 'Needs analysis, problem definition & market research',
                description: 'To kickstart a successful IoT implementation, you\'ll need to examine the current city infrastructure. Identify its challenges, pinpoint areas for improvement, and study global best practices and technological advancements. This step lays the groundwork to ensure your solution aligns with the city\'s vision and goals.',
                about: 'We can hold a consultation session where we present opportunities IoT offers for smart cities so you could find ways to implement it in your city.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/10164/10164299.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Stakeholder engagement',
                description: 'Collaborating with city officials, municipal departments, and residents is crucial to the final success. Their insights shape your solution to fit real-world needs. Open communication from the start ensures smoother implementation later on.',
                about: 'We act as a technology consultant that calculates the implementation ROI and prepares necessary document to prove the technical project feasibility.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/1283/1283342.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Technical blueprint & design',
                description: 'Crafting a robust technical blueprint is the backbone of your IoT initiative. You\'ll need to outline the specific hardware and software components, ensuring adaptability and scalability for the city\'s evolving needs. It\'s essential to detail how each element interacts and integrates, laying out a clear roadmap for development.',
                about: 'With our expertise in IoT solutions, SumatoSoft assists in designing comprehensive blueprints tailored to your vision.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/12118/12118967.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Pilot project & prototyping',
                description: 'Before diving into a full-scale rollout, launching a pilot project is a smart move. This allows you to test the waters, gauging the solution\'s feasibility and effectiveness in a real-world environment. Prototyping offers a hands-on approach to identify potential challenges, gather feedback, and make necessary adjustments.',
                about: 'Foxsolution excels in launching pilot projects, expertly balancing essential functions and elements with add-ons to quickly craft a successful working pilot project.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/3852/3852711.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Regulatory compliance & approval',
                description: 'For an IoT project, adhering to local regulations is essential. Obtain necessary permissions and licenses to align with city standards and build trust with stakeholders.',
                about: 'We can easily adjust the pilot project in terms of data privacy standards, device communication norms, other regulations to comply with local requirements.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/4460/4460533.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Funding & Investment',
                description: 'Whether through investors, partnerships, grants, or other avenues, you\'ll need to present a compelling case backed by a well-structured business plan, technical blueprints, and pilot project results to attract the necessary capital.',
                about: 'Foxsolution rich portfolio and proven track record enhance the credibility of your project, making it more appealing to potential investors.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/1431/1431096.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Development & production',
                description: 'Once the groundwork is laid, the next step involves the actual creation of the solution. This phase encompasses software development, hardware component production, and rigorous testing to ensure the solution\'s functionality, reliability, and security.',
                about: 'We ensure timely development and have a partnership with a trusted manufacturer, who can facilitate the required volume of device production.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/2010/2010990.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Deployment & Integration',
                description: 'After development, it\'s time to roll out your IoT solution in the designated areas of the city. This involves not just physical installations but also ensuring that the new system integrates seamlessly with existing city infrastructure, databases, and other relevant platforms.',
                about: 'We handle the integration entirely, conducting thorough software and IoT network testing, ensuring everything functions seamlessly upon deployment.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/8099/8099401.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            },
            {
                title: 'Training & support',
                description: 'After deployment, it\'s essential that city staff and stakeholders are equipped to use the IoT solution efficiently.',
                about: 'Foxsolution provides tailored training sessions for all user levels and offers continuous support to address any issues or queries promptly.',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/128/12278/12278436.png" className="w-16 h-16 opacity-90"
                        style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(99%) saturate(2067%) hue-rotate(187deg) brightness(97%) contrast(101%)' }} />
                )
            }
        ];


        return (
            <div className='container px-4 mx-auto bg-blue-950 rounded-lg py-10 mt-10'>
                <div className='max-w-6xl mx-auto px-4'>
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold mb-4 mt-8 text-white">
                                How Foxsolution can assist <span className="text-blue-400">you every step on the way of IoT implementation</span>
                            </h2>
                        </div>
                    </RevealOnScroll>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {benefits.map((benefit, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className=" p-4 rounded-lg  transition-colors duration-300 h-full flex flex-col  items-start pr-8">
                                    <div className="mr-4 items-center">
                                        <div className='items-center justify-center ml-16 mb-6 '>
                                            {benefit.icon}
                                        </div>
                                        <h3 className='text-lg font-semibold text-white mb-3'>{benefit.title}
                                        </h3>
                                    </div>
                                    <div className="flex-grow">
                                        <p className='text-white mb-4 items-center justify-center'>{benefit.description}</p>
                                        <div className=" p-4 rounded -ml-4">
                                            <p className="text-white font-medium items-center justify-center">How we help:</p>
                                            <p className="text-white items-center justify-center">{benefit.about}</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    interface FactCardProps {
        value: string;
        description: string;
    }

    const FactCard: React.FC<FactCardProps> = ({ value, description }) => {
        return (
            <div className="border border-gray-200 p-6 flex flex-col items-center justify-center">
                <span className="text-blue-500 text-4xl font-bold">{value}</span>
                <span className="text-gray-800 text-sm mt-1">{description}</span>
            </div>
        );
    };

    const FoxsolutionFacts = () => {
        const facts = [
            { value: "98%", description: "User satisfaction rate" },
            { value: "50+", description: "Successful projects" },
            { value: "25+", description: "States" },
            { value: "70%", description: "Senior engineers" },
            { value: "3+", description: "Years of Clients' engagement" },
            { value: "12+", description: "Years on the market" }
        ];

        return (
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Quick <span className="text-blue-500">facts</span> about Foxsolution
                </h1>

                <div className="grid grid-cols-3 gap-4">
                    {facts.map((fact, index) => (
                        <FactCard
                            key={index}
                            value={fact.value}
                            description={fact.description}
                        />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <>
            <HeroSection />
            <Navbar />

            <div className="flex flex-col lg:flex-row relative">
                {/* Main content - takes full width on mobile, 3/4 on desktop */}
                <div className="w-full lg:w-3/4">
                    <section className="bg-gray-50 py-16 px-4">
                        <div className="max-w-6xl mx-auto flex justify-center">
                            <img
                                src="../IoT-Powered-Smart-Cities.jpg"
                                alt="IoT-Powered-Smart-Cities"
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                    </section>
                    <section id="our-excellence-in-IoT">
                        <ExcellenceinIot />
                    </section>

                    {/*---------------------------------------------IoT-Consulting we build-------------------------------------------*/}

                    <section id="IoT-based-solution" className="bg-gray-50 py-16 px-4 mb-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl text-blue-500 font-light mb-4">IoT-based
                                    <span className="text-black font-normal"> solutions </span>
                                    for smart cities
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/*CARD 1*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Smart traffic and transportation management
                                        </h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            Our IoT solutions for streamlining urban movement are particularly effective for US cities. They optimize public transport routes, reduce congestion with real-time traffic data, and include smart parking systems and EV charging solutions tailored for North American urban dynamics.</p>
                                    </div>
                                    <img src="../smart-transport.png" alt="Healthcare" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 2*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">E-governance and city administration platforms</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            Efficient governance is a cornerstone of successful urban management. With transparent e-governance solutions, efficient administrative tools, and real-time data access, we’re simplifying the complexities of urban governance. SumatoSoft champions a transparent and efficient approach to city administration.</p>
                                    </div>
                                    <img src="../ecity.png" alt="Biometric" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 3*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Energy and utility management</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            Our IoT solutions for energy and utility management are designed with the United States infrastructure in mind. Enhancing building energy management systems and implementing smart street lighting aligns with the sustainability goals of North American cities. SumatoSoft paves the way for greener cities, balancing modern demands with sustainability.</p>
                                    </div>
                                    <div></div>
                                    <img src="../energy-utility.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 4*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Waste management and sanitation</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            Innovations powered by IoT to elevate urban cleanliness and waste efficiency. By integrating real-time waste monitoring, optimizing collection routes, and promoting recycling initiatives, we’re transforming the waste management landscape. Experience cleaner streets and a reduced environmental footprint.</p>
                                    </div>
                                    <img src="../waste-management.png" alt="Transport" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 5*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental monitoring and pollution control
                                        </h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            IoT-driven solutions focused on safeguarding urban ecosystems. Through real-time air and water quality monitoring, pollution detection, and actionable insights, we’re championing a cleaner, greener urban future. Foxsolution's empowers cities to take proactive measures, ensuring a healthier tomorrow.</p>
                                    </div>
                                    <img src="../environmental.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                                {/*CARD 6*/}
                                <div className="bg-white p-8 rounded-lg flex items-start">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Smart building and infrastructure monitoring</h3>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            Modern urban landscapes require vigilant oversight and proactive care. Through real-time monitoring of building health and advanced predictions of infrastructure needs, we ensure the longevity and safety of city assets.</p>
                                    </div>
                                    <img src="../smartbuilding.png" alt="Remote Health Monitoring" className="w-28 h-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Technologies-we-use">
                        <IotTechnologiesweuse />
                    </section>

                    <section id="How-Foxsolution-can-assist">
                        <Howweassist />
                    </section>

                    <section id="reviews">
                        <TestimonialCarousel />
                    </section>

                    {/*--------------------------------------------------------------------- IoT software devloped---------------------------------------*/}
                    <section id="Our-Iot-software" className="py-16 px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold">
                                Our <span className="text-blue-500">IoT</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-12">

                            {/* Card 1 */}
                            <div className="bg-[#a00b22] rounded-lg flex flex-col md:flex-row items-center p-8 md:p-16 gap-8">
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src="/public/cover-img-1.png"
                                        alt="Healthcare App"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">
                                        Adaptive health monitoring mobile app for personalized wellness programs
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        A mobile application designed to determine suitable workouts based on real-time pulse and pressure levels,
                                        all measured through a smart cuff. The app features GDPR-compliant security measures and seamless device integration.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#061138] rounded-lg flex flex-col md:flex-row items-center p-8 md:p-16 gap-8">

                                <div className="w-full md:w-1/2 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">
                                        Real-time blood glucose monitoring app for a healthcare technology firm
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        A mobile application that provides real-time blood glucose data through graphical representation, alerts for timely insulin administration, and seamless user onboarding, elevating the Client’s sensor product for a more significant market impact.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src="/public/cover-img-2.png"
                                        alt="Healthcare App"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#652D90] rounded-lg flex flex-col md:flex-row items-center p-8 md:p-16 gap-8">
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src="/public/cover-img-3.png"
                                        alt="Healthcare App"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 text-white">
                                    <h3 className="text-3xl font-semibold mb-6">
                                        IoT application with sensors for industrial fridge monitoring
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        An IoT solution for HoReCa venues with the option to monitor the work of industrial (commercial) refrigerators online, get instant alerts on urgent issues and manage historical data.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="whyFoxsolution">
                        <div className="bg-gray-50 p-8 flex flex-col items-center">
                            <div className="max-w-4xl w-11/12">
                                <h1 className="text-4xl font-semibold mb-12 text-center">
                                    <span className="text-blue-500">Why</span> Foxsolution
                                </h1>

                                <div className="flex flex-row gap-8">
                                    <div className="w-3/5">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">Expertise in IoT</span> – With 12 years on the market and
                                                    successfully released IoT projects, we at SumatoSoft
                                                    apply this expertise to build scalable and effective
                                                    solutions for smart cities.
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">Long-term cooperation</span> – 70% of our Clients come
                                                    back to us with another project.
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">Professional team</span> – 70% of our team is senior-level
                                                    developers and QA engineers who ensure the app
                                                    complies with domain best practices and our inner
                                                    quality assurance guidelines.
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">Honesty and transparency</span> – We communicate
                                                    weekly, run demos of the work done, provide several
                                                    contact points, send timesheet reports every month
                                                    even if you don't request them, explain potential risks
                                                    and help to handle them, advise on the decisions, and
                                                    help to avoid unnecessary costs.
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">IoT device integration</span> – We work with multiple
                                                    devices from wearables like fitness trackers and
                                                    smartwatches to medical-grade equipment such as
                                                    glucose monitors, ECG machines, and smart inhalers.
                                                    We ensure seamless data flow and interconnectivity.
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">Security focus</span> – Besides strict adherence to security
                                                    standards across the industry, we run security tests,
                                                    use robust monitoring and logging, regularly update
                                                    software to protect the system from new threats, and
                                                    advance our skills in cybersecurity.
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                                <p className="text-gray-800">
                                                    <span className="font-semibold">Reasonable costs</span> – We offer fair prices for both
                                                    parties: you get a well-tested application with easily
                                                    maintainable code, we get enough resources to grow
                                                    as professionals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-4/5 mt-32">
                                        <img
                                            src="../team-meeting.webp"
                                            alt="Professional team meeting"
                                            className="rounded-md w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="Quick-facts" className="mt-8">
                        <FoxsolutionFacts />
                        <div className="container mx-auto px-4 mt-12 mb-12">
                            <InfiniteImageCarousel
                                images={myImages}
                                speed={1}
                                imageWidth={300}
                                imageHeight={200}
                                gap={16}
                                className="my-custom-class"
                            />
                        </div>
                    </section>



                    <section id="awards-Recognitions">
                        <CertificationsSection />

                    </section>

                    <section id="Contact">
                        <Contact />
                    </section>

                    <section id="Awesome-stories">
                        <BlogHomepage />
                    </section>
                </div>

                {/* Table of Contents - hidden on mobile, fixed on desktop */}
                {!isMobile && (
                    <div className="hidden lg:block lg:w-[23%]">
                        <div className="sticky top-24 ml-2 pr-1 max-h-[calc(100vh-100px)] overflow-y-auto pt-2">
                            <TableOfContents sections={sections} />
                        </div>
                    </div>
                )}
            </div>

            <Footer />

        </>

    )


}
export default IoT_solutions_for_smart_cities