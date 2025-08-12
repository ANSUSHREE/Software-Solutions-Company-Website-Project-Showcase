import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./breadcrumb";
import RevealOnScroll from "./RevealOnScroll";
import Contact from "../home/Contact";
const AllReviews = () => {

    const testimonials = [
        {
            id: 1,
            quote: "The system has produced a significant competitive advantage in the industry thanks to Foxsolutions well-thought opinions.",
            review: "They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.",
            author: "Benjamin Dorsinvil",
            position: "Founder, SellBig"
        },
        {
            id: 2,
            quote: "Foxsolution is the firm to work with if you want to keep up to high standards. The professional workflows they stick to result in exceptional quality.",
            review: "Important, they help you think with the business logic of your application and they don’t blindly follow what you are saying. Which is super important. Overall, great skills, good communication, and happy with the results so far.",
            author: "Sarah Johnson",
            position: "CTO, TechInnovate"
        },
        {
            id: 3,
            quote: "foxsolution's succeeded in building a more manageable solution that is much easier to maintain.",
            review: "Although they are a small team, their project management reflects the excellence of a larger company. Their team delivers high-quality results, attentive service, and reasonable pricing",
            author: "Michael Chen",
            position: "Operations Director, GlobalLogic"
        },
        {
            id: 4,
            quote: "The Rivalfox had the pleasure to work with Foxsolution in building out core portions of our product, and the results really couldn’t have been better.",
            review: "Foxsolution supercharged our productivity by providing us with three team members whose technological expertise was surpassed only by their enthusiasm. Many times they found better solutions than were given to them, and with that alongside their excellent ability to communication, they made our product better, faster, which resulted in customers becoming happier sooner. Foxsolution provided us with engineering expertise, enthusiasm and great people that were focused on creating quality features quickly.",
            author: "Elena Rodriguez",
            position: "Product Manager, InnovateNow"
        },
        {
            id: 5,
            quote: "We tried another company that one of our partners had used but they didn’t work out. I feel that Foxsolution does a better investigation of what we’re asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us",
            author: "----------",
            position: "Product Manager, InnovateNow"
        },
        {
            id: 6,
            quote: "I was impressed by Foxsolution's prices, especially for the project I wanted to do and in comparison to the quotes I received from a lot of other companies.",
            review: "Also, their communication skills were great; it never felt like a long-distance project. It felt like Foxsolutions was working next door because their project manager was always keeping me updated. Initially, I was afraid of going with an overseas company because they don’t have to abide by US law, but I had a good project manager who made it seem like they weren’t an overseas company.",
            author: "-------------",
            position: "Product Manager, InnovateNow"
        },
        {
            id: 7,
            quote: "Foxsolution developed a new version of the MyMediAds service. When we turned to the Foxsolution experts, we had already been using an MVP version, which we would like to improve.",
            review: "Together with the team, we have turned the MVP version of the service into a modern full-featured platform for online marketers. We are very satisfied with the work the Foxsolution team has performed, and we would like to highlight the high level of technical expertise, coherence and efficiency of communication and flexibility in work.",
            author: "-------",
            position: "-----------"
        },
        {
            id: 8,
            quote: "We are absolutely convinced that cooperation between companies is only successful when based on effective teamwork (and Captain Obvious is on our side!). But the teams may vary on the degree of their cohesion.",
            review: "With Foxsolution LLC, we feel like a bobsled team — together in the same cockpit, aimed at the same targets. And this feeling is off the chart.We are sure that by aligning our efforts we will set new records and grab new medals.",
            author: "-------",
            position: "-----------"
        },
        {
            id: 9,
            quote: "They are very sharp and have a high-quality team. I expect quality from people, and they have the kind of team I can work with. They were upfront about everything that needed to be done.",
            review: "I appreciated that the cost of the project turned out to be smaller than what we expected because they made some very good suggestions. They are very pleasant to work with.",
            author: "-------",
            position: "-----------"
        },
        {
            id: 10,
            quote: "Foxsolution is great in every regard including costs, professionalism, transparency, and willingness to guide. I think they were great advisors early on when we weren’t ready with a fully fleshed idea that could go to market. They know the business and startup scene as well globally.",
            review: "They did a great job hitting cost estimates and are a bargain for quality. They also helped our business concept greatly. We are confident in our plan and future in the hands of Foxsolution",
            author: "-------",
            position: "-----------"
        },

    ];



    return (

        <><div className="flex flex-col min-h-screen">
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
                                <BreadcrumbLink href="/Testimonials" className='text-white hover:text-blue-800 transition-colors duration-200'>Testimonials</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </RevealOnScroll>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-9xl mx-auto text-center">
                        <h3 className="text-5xl font-normal mb-10">
                            You shouldn’t believe our words
                            See what our<span className="text-blue-800"> Clients</span> say
                        </h3>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-white mt-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-9xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-24">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 text-gray-800">


                                    <h6 className="flex flex-col items-start">
                                        <img
                                            className="w-10 h-10 mr-2 mb-4 "
                                            src="../quote.png"
                                            alt="Quote icon"
                                        />
                                        <p className="text-2xl text-center font-medium mb-2">{testimonial.quote}</p>
                                    </h6>
                                    <p className="text-2xl text-center font-light mt-2">{testimonial.review}</p>
                                    <div className="flex items-center mt-8 justify-end">
                                        <div>
                                            <p className="font-semibold">{testimonial.author}</p>

                                            <p className="text-gray-600">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <Contact />
            <div className="mt-16">
                <Footer />
            </div>
        </>
    );

}


export default AllReviews;