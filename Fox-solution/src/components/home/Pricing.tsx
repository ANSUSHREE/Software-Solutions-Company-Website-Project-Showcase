import { useState } from 'react';
import Navbar from '../layout/Navbar';
import RevealOnScroll from '../ui/RevealOnScroll';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb';
import Contact from './Contact';
import BlogHomepage from '../ui/bloghome';
import Footer from '../layout/Footer';
import { CertificationsSection } from '../ui/Certification';
import TestimonialCarousel from '../ui/Testimonial';
import CostEstimator from '../ui/checkoboxform';
import FAQ from '../ui/faq';

const CostEstimationPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedServiceType, setSelectedServiceType] = useState<string | null>(null);
    const [selectedDevelopmentStage, setSelectedDevelopmentStage] = useState<string | null>(null);
    const [selectedMarket, setSelectedMarket] = useState<string | null>(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [otherMarket, setOtherMarket] = useState('');
    const [productIdea, setProductIdea] = useState('');
    const totalSteps = 9;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [deadline, setDeadline] = useState('');
    const [budgetRange, setBudgetRange] = useState('');
    const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
    const [otherPriority, setOtherPriority] = useState('');
    const [teamAugmentationStep, setTeamAugmentationStep] = useState(1);
    const [selectedExperts, setSelectedExperts] = useState<string[]>([]);
    const [otherExpertInput, setOtherExpertInput] = useState('');
    const totalTeamAugmentationSteps = 8;
    const [activeTab, setActiveTab] = useState<'Time & Material' | 'FixedBudget' | 'FixedPrice' | 'DedicatedTeam'>('Time & Material');
    const sections = [
        { id: 'footer', title: 'FAQ' },
    ]

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
            <div className=' bg-white py-24 px-24'>
                <div className='mx-auto max-w-7xl px-4'>
                    <h2 className='text-center font-normal text-4xl mb-10'>Our<span className='text-blue-900'> Clients</span></h2>
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
    const FAQSection = () => {
        const faqs = [
            {
                question: 'How much does it cost to develop a software?',
                answer: 'The cost of software development varies based on project complexity, required features, and the development team’s location. Project costs can range from $10,000 for simple applications to $500,000+ for enterprise-grade solutions.',
            }, {
                question: 'How much does it cost to pay a software developer?',
                answer: `Developer compensation varies by region and expertise. In North America, hourly rates range from $71 to $95, while in Eastern Europe, rates are between $27 and $51 per hour. These variations depend on factors like experience, specialization, and local market rates. `
            }, {
                question: 'How do you calculate custom software development costs?',
                answer: 'We calculate costs through a structured process: the Client completes a survey, followed by a call with our team and a free discovery session. After discussing project details with the discovery team, we shape the solution and provide a detailed estimation with all necessary artifacts, ensuring transparency and accuracy.',
            },
            {
                question: 'What factors influence software development cost?',
                answer: 'Key factors include the project’s complexity, the number and intricacy of features, the development team’s location and expertise, the technology stack used, and the timeline for delivery. External integrations, compliance requirements, and post-launch support also play significant roles in determining the final cost.',
            }, {
                question: 'What is a minimum viable product (MVP) in software development?',
                answer: 'An MVP is a basic version of software that includes only the most necessary features. Its goal is to quickly launch the product and see whether it is viable on the market and find users willing to use it. ',

            }, {
                question: 'How much does it cost to hire a developer for our project? What kind of pricing do you offer?',
                answer: 'The cost depends on the specialist, with an average rate of $50/hour. We offer flexible pricing models: Time & Material (monthly billing based on actual hours worked), Fixed Budget (defined budget with flexible scope), Fixed Price (predefined cost for a fixed scope), and Dedicated Team (monthly salaries for full-time specialists).',
            }
        ];
        return (
            <section id="faq" className="px-4 mb-16">
                <FAQ faqs={faqs} />
            </section>
        )
    }
    const steps = [
        {
            number: 1,
            title: 'Requirements elicitation and project planning',
            description: 'This cost covers different activities of the development team, including: ',
            details: {
                budgetShare: '15%',
                weight: '40%',
                activities: [
                    'stakeholder interviews and workshops to elicit and document requirements',
                    'identification of business goals, technical needs, and potential risks',
                    'creating project roadmaps and timelines and calculating exact development budgets',
                    'setting up communication channels and project management tools'
                ]
            }
        },
        {
            number: 2,
            title: 'Architecture and UI/UX design',
            description: 'We work on creating a technical structure and user-friendly designs:',
            details: {
                budgetShare: '10%',
                weight: '25%',
                activities: [
                    'our experts design the system architecture and choose the appropriate technologies;',
                    'we craft mockups, wireframes, and interactive prototypes;',
                    'we analyze competitors and user behavior to ensure the product stands out;',
                    'we refine designs based on the Client’s feedback every step of the way.'
                ]
            }
        },
        {
            number: 3,
            title: 'Coding',
            description: 'Coding represents the most significant share of the total cost, as it requires the majority of effort and time. Activities in this phase include: ',
            details: {
                budgetShare: '55%',
                weight: '15%',
                activities: [
                    'transforming requirements and designs into functional software;',
                    'the Tech Lead ensures code quality and monitor the team; ',
                    'The project manager tracks progress, handles risks, and keeps the Client informed on the project’s health; ',
                    'regular biweekly demos.'
                ]
            }
        },
        {
            number: 4,
            title: 'Quality Assurance',
            description: 'The level of quality assurance is agreed upon at the beginning of the project and may include various testing methods and techniques to ensure product quality. Paid activities in this component include: ',
            details: {
                budgetShare: '15%',
                weight: '15%',
                activities: [
                    'verifying functionality, performance, usability, and identifying edge cases;',
                    'running regression, performance, and security tests with scripts for consistency and efficiency;',
                    'conducting accessibility, compatibility, load, and security tests;',
                    'ensuring features align with requirements and acceptance criteria.'
                ]
            }
        },
        {
            number: 5,
            title: 'Support and maintenance',
            description: 'Support and maintenance costs go beyond the standard software development lifecycle, and these efforts focus on ensuring the product’s long-term stability and growth. Activities here include: ',
            details: {
                budgetShare: '~15% of the project development cost yearly',
                weight: '5%',
                activities: [
                    'monitoring product performance and addressing bugs.',
                    'new feature development.',
                    'updating libraries and technologies.',
                ]
            }
        },
    ];
    const TickItem: React.FC<{ text: string }> = ({ text }) => (
        <li className="flex items-start gap-2 text-gray-900">
            <span className="text-blue-600 mt-1">
                {/* Rounded custom checkmark with SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9 12.75L5.75 9.5L4.5 10.75L9 15.25L19.5 4.75L18.25 3.5L9 12.75Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
            <span>{text}</span>
        </li>
    );

    // Render the appropriate step content based on currentStep

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
                                    <BreadcrumbLink href="/services" className='text-white hover:text-blue-800 transition-colors duration-200'>Pricing</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </RevealOnScroll>

                {/* Hero Section */}
                <section className="relative py-16 bg-gradient-to-br from-blue-950 to-blue-950 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-9xl mx-auto text-center">
                            <h1 className="text-5xl font-normal mb-10">
                                How much will your software<span className="text-blue-800"> cost?</span>
                            </h1>
                            <p className="text-lg">
                                Fill in the form below with details about your project and get a free cost and timeline estimation! Our business analysts, developers, and designers accurately analyze the provided information and make a detailed estimation of projects costs along with the production vision.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='-mt-60'>
                <CostEstimator />
            </div>
            <RevealOnScroll>
                <div className="w-full max-w-6xl mx-auto mb-20 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
                    <h2 className="text-center text-4xl font-semibold mb-6 text-gray-800">
                        Pricing <span className='text-blue-950'>Models</span> We Offer
                    </h2>

                    <div className="flex gap-6 text-lg justify-center font-medium border-b border-gray-200 mb-8 overflow-x-auto pb-2">
                        <button
                            onClick={() => setActiveTab('Time & Material')}
                            className={`pb-3 px-1 whitespace-nowrap ${activeTab === 'Time & Material'
                                ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Time & Material
                        </button>
                        <button
                            onClick={() => setActiveTab('FixedBudget')}
                            className={`pb-3 px-1 whitespace-nowrap ${activeTab === 'FixedBudget'
                                ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Fixed Budget
                        </button>
                        <button
                            onClick={() => setActiveTab('FixedPrice')}
                            className={`pb-3 px-1 whitespace-nowrap ${activeTab === 'FixedPrice'
                                ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Fixed Price
                        </button>
                        <button
                            onClick={() => setActiveTab('DedicatedTeam')}
                            className={`pb-3 px-1 whitespace-nowrap ${activeTab === 'DedicatedTeam'
                                ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Dedicated Team
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        {activeTab === 'Time & Material' ? (
                            <div className="space-y-4">
                                <h1 className='text-2xl font-bold text-gray-800'>Time & Material</h1>
                                <p className='text-gray-600'>
                                    The Time & Material engagement model involves monthly billing based on actual development efforts. The contract includes:
                                </p>
                                <ul className="mt-4 space-y-2.5">
                                    <TickItem text="Unfixed budget with only the hourly rate specified" />
                                    <TickItem text="Flexible scope that adapts to project needs" />
                                    <TickItem text="Monthly billing based on actual hours worked" />
                                    <TickItem text="Ideal for evolving or long-term projects" />
                                </ul>
                            </div>
                        ) : activeTab === 'FixedBudget' ? (
                            <div className="space-y-4">
                                <h1 className='text-2xl font-bold text-gray-800'>Fixed Budget</h1>
                                <p className='text-gray-600'>
                                    The Fixed Budget model delivers a complete solution within an agreed budget while maintaining flexibility.
                                </p>
                                <ul className="mt-4 space-y-2.5">
                                    <TickItem text="Predetermined total budget with hourly rates" />
                                    <TickItem text="Flexible scope within budget constraints" />
                                    <TickItem text="Regular progress updates and adjustments" />
                                    <TickItem text="Best for projects with clear objectives but evolving details" />
                                </ul>
                            </div>
                        ) : activeTab === 'FixedPrice' ? (
                            <div className="space-y-4">
                                <h1 className='text-2xl font-bold text-gray-800'>Fixed Price</h1>
                                <p className='text-gray-600'>
                                    The Fixed Price model offers predictable costs for well-defined projects with fixed requirements.
                                </p>
                                <ul className="mt-4 space-y-2.5">
                                    <TickItem text="Complete project cost agreed upfront" />
                                    <TickItem text="Detailed scope documented in contract" />
                                    <TickItem text="Milestone-based payments" />
                                    <TickItem text="Ideal for projects with clear, unchanging requirements" />
                                </ul>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <h1 className='text-2xl font-bold text-gray-800'>Dedicated Team</h1>
                                <p className='text-gray-600'>
                                    The Dedicated Team model provides exclusive resources that become an extension of your organization.
                                </p>
                                <ul className="mt-4 space-y-2.5">
                                    <TickItem text="Team members dedicated solely to your project" />
                                    <TickItem text="Monthly billing based on team composition" />
                                    <TickItem text="Full control over task assignment and priorities" />
                                    <TickItem text="Perfect for long-term projects needing dedicated resources" />
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <section className='mb-16'>
                    <div className="bg-[#0a1529] text-white p-8 min-h-screen flex flex-col items-center" style={{ backgroundColor: '#0a1529' }}>
                        <div className="max-w-4xl w-full">
                            <h1 className="text-4xl font-bold mb-10 text-center">
                                <span className="text-blue-400">Key cost
                                </span> components of software development
                            </h1>

                            <div className="relative">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex mb-12 relative">
                                        {index < steps.length - 1 && (
                                            <div className="absolute left-7 top-14 w-0.5 h-full bg-gray-600 z-0"></div>
                                        )}

                                        <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-semibold z-10 flex-shrink-0">
                                            {step.number}
                                        </div>

                                        <div className="ml-6 flex-1">
                                            <h3 className="text-2xl font-bold mb-3 text-blue-400">{step.title}</h3>
                                            <p className="text-gray-300 mb-4">{step.description}</p>

                                            {/* Added detailed information section */}
                                            <div className="bg-gray-800 p-5 rounded-lg mb-4">
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <p className="text-gray-400 text-sm">Budget share</p>
                                                        <p className="text-xl font-bold text-blue-400">{step.details.budgetShare}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-sm">Weight in goals</p>
                                                        <p className="text-xl font-bold text-blue-400">{step.details.weight}</p>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 mb-3">This cost covers different activities including:</p>
                                                <ul className="space-y-2">
                                                    {step.details.activities.map((activity, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-green-400 mr-2 mt-1">✓</span>
                                                            <span className="text-gray-300">{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="container mx-auto px-4">
                    <div className="w-4/5 mx-auto bg-gradient-to-r from-blue-900 to-blue-950 p-6">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-3xl font-semibold text-white">
                                Software Estimation in 24H?
                                <span className="text-blue-400">Truths you</span>
                                <br /><span className="text-blue-400">need to know.</span>
                                <span className="ml-2">Expert Advice Inside</span>
                            </h1>
                            <div className="mt-6 flex justify-between items-start">
                                <p className="text-white text-lg max-w-sm">
                                    The myth: can software projects be accurately estimated in 24 hours?
                                </p>

                                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-medium">
                                    Find out the truth
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            <Logos />
            <TestimonialCarousel />
            <RevealOnScroll>
                <section className='py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='max-w-6xl mx-auto text-center'>
                        <h3 className='text-3xl md:text-4xl font-semibold text-gray-800 mb-8'><span className='text-red-400'>Estimation</span> process at Foxsolutions </h3>
                        <div className='relative w-full rounded-lg overflow-hidden shadow-lg'>
                            <img src='..\Steps-in-estimation-process.jpg' className='max-w-full h-full object-cover object-center' />
                        </div>
                        <p className=" font-Oswald mt-6 text-gray-600 text-sm md:text-base">
                            Our proven estimation process ensures accurate project planning and budgeting.
                        </p>

                    </div>
                </section>
            </RevealOnScroll>
            <RevealOnScroll>
                <section className='py-16 px-24 mt-24 relative'>
                    <div className="max-w-6xl mx-auto px-4 py-8">
                        {/* Header Section */}
                        <h1 className="text-5xl font-normal text-center mb-12">
                            <span className="text-black">What to expect </span>
                            <span className="text-blue-900">after submitting the survey</span>
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
            <CertificationsSection />
            <div className="bg-gray-50 mt-12 mb-12 p-12 flex justify-between max-w-5xl mx-auto rounded-lg shadow-sm">
                <div className="font-sans">
                    <h2 className="text-3xl font-light text-gray-800 max-w-md leading-tight tracking-tight">
                        Check this out if you want
                        <br />
                        to understand us better
                    </h2>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                    <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                        Our slide deck <span className="bg-red-500 text-white text-xs py-1 px-2 rounded ml-2 font-bold">PDF</span>
                    </a>
                    <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                        A closer look at who we are <span className="ml-1 text-lg">›</span>
                    </a>
                    <a href="#" className="text-red-500 font-medium text-base hover:underline flex items-center transition duration-200 ease-in-out hover:translate-x-1">
                        Customer reviews on Clutch <span className="ml-1 text-lg">›</span>
                    </a>
                </div>
            </div>

            <RevealOnScroll>

                <Contact />
                <FAQSection />
            </RevealOnScroll>

            <BlogHomepage />

            <section id='footer'>
                <Footer />
            </section>
        </>

    );
};

export default CostEstimationPage;