import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CertificationsSection } from "@/components/ui/Certification";
import Contact from "@/components/home/Contact";
import TestimonialCarousel from "@/components/ui/Testimonial";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BlogHomepage from "@/components/ui/bloghome";
import AnimatedButton from "@/components/ui/AnimatedButton";

const Engagementmodels = () => {
    const TimeAndMaterialModel = () => {
        return (
            <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto mt-16">
                <div className=" py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-normal text-center mb-10">
                        <span className="text-blue-500">Time</span> & Material model
                    </h1>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-gray-700 text-base">
                            Time & Material engagement model presupposes billing based on actual time invested into the development (man-hours actually worked) and the actual cost of materials and equipment usage. This way, you, as a client, will be billed solely for actual hours, based on negotiated hourly rates. All tasks should be registered and reported to you on a weekly basis during calls or Skype meetings. This model is flexible to the client's changing needs for time and resources.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-10 mt-16">
                        {/* Column 1: How does it work? */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1716/1716838.png"
                                    alt="Cost estimation"
                                    className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">How does it work?</h2>
                            <p className="text-gray-700">
                                This type of contract works best for standard technologies and resources (like PHP, .NET, Ruby On Rails, etc), especially if there's a need to scale your team up for some period of time (in most cases, up to three months). No detailed specification is needed to start the project. The team can be changed depending on the project requirements revealed during work.
                            </p>
                        </div>

                        {/* Column 2: When is it best used? */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/128/3176/3176276.png" alt="Risk management" className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">When is it best used?</h2>
                            <ul className="text-gray-700 space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>There is no detailed project documentation, or it has an insufficient level of detail.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Project specifications and requirements are constantly evolving and changing.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>A long-term cooperation with the Service provider is planned.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>The deadline is not clearly defined.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Business benefits */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/128/3281/3281172.png" alt="Resource planning" className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }} />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">Business benefits</h2>
                            <ul className="text-gray-700 space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Lower cost — time and material contract costs may be less than in a fixed bid.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>The agility of workflow — it is easy to change the priorities of specific features and add new ones within the same budget.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Schedule flexibility — deadline can be easily changed if needed.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Reduce the risk of unmet expectations — the whole process is transparent and clear, and payment occurs when the specific functionality is developed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const DedicatedTimeModel = () => {
        return (
            <div className="bg-white py-12 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto mt-0">
                <div className=" py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-normal text-center mb-10">
                        <span className="text-blue-500">Dedicated</span> Time model
                    </h1>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-gray-700 text-base">
                            Our specialists become a part of your team, working exclusively on your project. Billing is based on the developers’ hourly rates included in the dedicated team.</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-10 mt-16">
                        {/* Column 1: How does it work? */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1716/1716838.png"
                                    alt="Cost estimation"
                                    className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">How does it work?</h2>
                            <p className="text-gray-700">
                                Business owners provide a general list of project requirements, and we gather a team of professionals who can do this job best. The Client is fully responsible for team management and control. The developers will report directly to the Client. On our part, we will monitor the quality of the services provided and get involved if necessary.</p>
                        </div>

                        {/* Column 2: When is it best used? */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/128/3176/3176276.png" alt="Risk management" className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">When is it best used?</h2>
                            <ul className="text-gray-700 space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>The project idea is well thought out and defined, all project requirements are available, and the development is about to start.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>You have in-house specialists who can manage the software development process.</span>
                                </li>

                            </ul>
                        </div>

                        {/* Column 3: Business benefits */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/128/3281/3281172.png" alt="Resource planning" className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }} />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">Business benefits</h2>
                            <ul className="text-gray-700 space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Full control over the project progress and budget scheme.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>There is no need to employ qualified specialists and spend time and resources on hiring and management processes.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const FixedPriceModel = () => {
        return (
            <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto mt-16">
                <div className=" py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-normal text-center mb-10">
                        <span className="text-blue-500">Fixed</span> Price model
                    </h1>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-gray-700 text-base">
                            The development process is built according to the cost and time estimates based on the project details provided by the client. All payments within this model are made on pre-defined milestones. The project specifications are frozen, the budget is fixed, and deadlines are set. If you do not have a project specification, we suggest starting Phase 0 (Discovery phase) – a preliminary period (usually from one to three weeks), during which time vendor managers will work with your product manager to create a specification, and, eventually, provide you with a fixed bid.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-10 mt-16">
                        {/* Column 1: How does it work? */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1716/1716838.png"
                                    alt="Cost estimation"
                                    className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">How does it work?</h2>
                            <p className="text-gray-700">
                                Having received detailed project specifications, a vendor’s team studies them and makes time & cost estimations. They may work by e-mail, phone, Skype, and IM, depending on what fits best the client’s situation. When the estimation is worked out and the contract is signed, no additional functionality can be added to the scope of work without cost re-estimation. The number of people developing the solution might be altered depending on the project’s needs.
                            </p>
                        </div>

                        {/* Column 2: When is it best used? */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/128/3176/3176276.png" alt="Risk management" className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">When is it best used?</h2>
                            <ul className="text-gray-700 space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Project specifications are clearly defined and will not be altered before the release.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Technical documentation is properly planned and available.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>There are clear deadlines and limited budget.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Business benefits */}
                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/128/3281/3281172.png" alt="Resource planning" className="w-12 h-12 filter-blue"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }} />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center">Business benefits</h2>
                            <ul className="text-gray-700 space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Minimized risks- The web solution is built exactly according to the specifications provided.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>No extra expenses –
                                        The price couldn’t be changed if the specifications stay the same.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const ProjectOrganization = () => {
        return (
            <div className="bg-blue-950 py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto mt-16 mb-16">
                <div className=" py-16 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-normal text-center mb-10 text-white"> Effective project
                        <span className="text-blue-500"> organization</span>
                    </h1>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-white text-base font-sans text-center font-thin">
                            We guarantee an effective and productive development process that resonates with the American work ethic of excellence and innovation, ensuring your project’s success from start to finish.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-10 mt-16">

                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/2594/2594058.png"
                                    alt="Communication"
                                    className="w-12 h-12 brightness-0 invert"

                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center text-white">Communication</h2>
                            <p className="text-white text-center text-sm font-sans font-thin">
                                A qualified project manager becomes a liaison between the business and the development team. They are responsible for project planning, management, work coordination, and progress tracking. Communication happens through various channels: email, messengers, phone, and personal meetings.
                            </p>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/16761/16761073.png" alt="Competence transfer" className="w-12 h-12 brightness-0 invert"

                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center text-white">Competence transfer</h2>
                            <p className="text-white text-center text-sm font-sans font-thin" >Knowledge transfer is a comprehensive business process ensuring all information about the project is shared among the team, Technical Manager and Scrum Master. We gather our experience in a special formalized knowledge base (Atlassian Confluence) under tech leaders’ supervision.</p>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className="text-blue-500 mb-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/2098/2098313.png" alt="Planning and reporting" className="w-12 h-12 brightness-0 invert"
                                />
                            </div>
                            <h2 className="text-2xl font-normal mb-4 text-center text-white">Planning and reporting</h2>
                            <p className="text-white text-center text-sm font-sans font-thin">Foxsolution undertakes a commitment to regular reporting on the project. The reports depend on the chosen engagement model: real-time 24/7 reporting via Jira Atlassian, monthly, weekly reports, etc. Regular reporting ensures transparency of the development process and provides a clear understanding of the costs at every stage of development.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <Navbar />
            <RevealOnScroll>
                <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
                    <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white hover:text-blue-800 transition-colors duration-200'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/Engagementmodels" className='text-white hover:text-blue-800 transition-colors duration-200'>Engagement model</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
                    <div className="max-w-5xl mx-auto text-center md:text-left">
                        <h1 className="text-4xl md:text-4xl font-normal leading-tight text-center">
                            Flexible and client-oriented engagement models <span className="text-blue-500">engagement models</span>
                        </h1>
                        <p className="mt-6 text-sm text-gray-300 text-center">
                            Our engagement models are tailored to fit the diverse and dynamic needs of American businesses, offering flexibility, transparency, and efficiency, whether you’re looking for a Fixed Price, Time & Material, or a Dedicated Team approach.
                        </p>
                    </div>
                </section>
            </RevealOnScroll>
            <div className="grid grid-cols-3 md:grid-cols-3 mt-24 gap-2 px-4">
                {/* Column 1: Fixed Price */}
                <div className="flex flex-col items-center px-2 -mr-64">
                    <div className="text-blue-500 mb-3">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/18467/18467565.png"
                            alt="Fixed Price"
                            className="w-12 h-12"
                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                        />
                    </div>
                    <h2 className="text-lg font-normal mb-1 text-center">Fixed Price</h2>
                </div>

                {/* Column 2: Time & Material */}
                <div className="flex flex-col items-center px-2">
                    <div className="text-blue-500 mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/9905/9905587.png" alt="Time & Material" className="w-12 h-12"
                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }}
                        />
                    </div>
                    <h2 className="text-lg font-normal mb-1 text-center">Time & Material</h2>
                </div>

                {/* Column 3: Dedicated Team */}
                <div className="flex flex-col items-center px-2 -ml-64">
                    <div className="text-blue-500 mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/14488/14488747.png" alt="Dedicated Team" className="w-12 h-12"
                            style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(1954%) hue-rotate(199deg) brightness(97%) contrast(101%)' }} />
                    </div>
                    <h2 className="text-lg font-normal mb-1 text-center">Dedicated Team</h2>
                </div>
            </div>
            <TimeAndMaterialModel />
            <DedicatedTimeModel />
            <FixedPriceModel />
            <div className="flex justify-center mt-20 mb-20">
                <img
                    src="../Featuresorlimitations.png" alt="Features or limitations" />
            </div>
            <ProjectOrganization />
            <CertificationsSection />
            <Contact />
            <TestimonialCarousel />
            <BlogHomepage />
            <Footer />
        </>
    );
};

export default Engagementmodels;