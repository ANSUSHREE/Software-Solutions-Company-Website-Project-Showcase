import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Our Team', href: '#team' },
        { name: 'Contact Us', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#web-development' },
        { name: 'Mobile Apps', href: '#mobile-apps' },
        { name: 'UI/UX Design', href: '#design' },
        { name: 'Digital Marketing', href: '#marketing' },
        { name: 'Business analysis', href: '#business-analysis' },
        { name: 'Testing & QA services', href: '#testing-qa-services' },
        { name: 'Enterprise software', href: '#enterprise-software' },
        { name: 'MVP development', href: '#mvp-development' },
        { name: 'SaaS development', href: '#saas-development' },
        { name: 'IT staff augmentation', href: '#it-staff-augmentation' },
      ],
    },
    {
      title: 'Technologies',
      links: [
        { name: 'AI development', href: '#ai-development' },
        { name: 'Java', href: '#java' },
        { name: 'Node.js', href: '#nodejs' },
        { name: 'Ruby on Rails', href: '#ruby-on-rails' },
        { name: 'React.js', href: '#reactjs' },
        { name: 'OpenAI', href: '#openai' },
        { name: 'Big Data', href: '#big-data' },
        { name: 'Blockchain', href: '#blockchain' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'IoT development', href: '#iot-development' },
        { name: 'IoT & Big Data development', href: '#iot-big-data-development' },
        { name: 'IoT consulting', href: '#iot-consulting' },
        { name: 'AdTech', href: '#adtech' },
        { name: 'Healthcare', href: '#healthcare' },
        { name: 'Finance', href: '#finance' },
        { name: 'Education', href: '#education' },
        { name: 'E-commerce', href: '#ecommerce' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '/linked-in.svg', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '/twitter.png', url: 'https://twitter.com' },
    { name: 'Facebook', icon: '/facebook.svg', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '/instagram.svg', url: 'https://instagram.com' }
  ];

  return (
    <>
      <footer className="bg-vofox-darkBlue text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <span className="font-bold text-2xl text-white">
                  Fox<span className="text-vofox-lightBlue">Solutions</span>
                </span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                We provide innovative digital solutions that help businesses transform, grow and succeed in today's competitive market.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="w-5 h-5 filter brightness-auto"
                    />
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} foxSolutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;