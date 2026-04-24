import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Code, Globe, Smartphone, Palette, Cloud, Shield, Settings, BarChart3, Megaphone, Brain, Link2, ShoppingCart, Database, Users, Video, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: '1. Software Development',
    icon: Code,
    color: 'from-blue-400 to-indigo-500',
    items: ['Custom Software Development (ERP, CRM, HRMS)', 'SaaS Product Development', 'API Development & Integration', 'Desktop Applications']
  },
  {
    title: '2. Website Development',
    icon: Globe,
    color: 'from-emerald-400 to-teal-500',
    items: ['Business Website (Static/Dynamic)', 'E-commerce Website', 'Portfolio / Landing Pages', 'CMS Development (WordPress, Headless CMS)', 'Website Redesign'],
    link: '/services/web-development'
  },
  {
    title: '3. Mobile App Development',
    icon: Smartphone,
    color: 'from-purple-400 to-violet-500',
    items: ['Android App Development', 'iOS App Development', 'Cross-platform Apps (Flutter, React Native)', 'App UI/UX Design']
  },
  {
    title: '4. UI/UX Design',
    icon: Palette,
    color: 'from-pink-400 to-rose-500',
    items: ['Website & App Design', 'Wireframing & Prototyping', 'Logo & Branding Design']
  },
  {
    title: '5. Cloud & DevOps Services',
    icon: Cloud,
    color: 'from-indigo-400 to-blue-500',
    items: ['Cloud Setup (AWS, Azure, Google Cloud)', 'Server Setup & Deployment', 'CI/CD Pipeline Setup', 'Docker & Kubernetes', 'Hosting & Domain Management'],
    link: '/services/cloud-solutions'
  },
  {
    title: '6. Cyber Security Services',
    icon: Shield,
    color: 'from-orange-400 to-red-500',
    items: ['Website Security', 'Data Protection & Encryption', 'Penetration Testing', 'Firewall Setup', 'Security Audits']
  },
  {
    title: '7. IT Support & Maintenance',
    icon: Settings,
    color: 'from-yellow-400 to-amber-500',
    items: ['AMC (Annual Maintenance)', 'Bug Fixing & Updates', 'Server Monitoring', 'Technical Support (24/7)']
  },
  {
    title: '8. Data Analytics & AI',
    icon: BarChart3,
    color: 'from-green-400 to-emerald-500',
    items: ['Data Analysis & Reporting', 'Dashboard Development', 'Machine Learning Models', 'AI Chatbot Development'],
    link: '/services/ai-integration'
  },
  {
    title: '9. Digital Marketing Services',
    icon: Megaphone,
    color: 'from-cyan-400 to-sky-500',
    items: ['SEO (Search Engine Optimization)', 'Google Ads & PPC', 'Social Media Marketing', 'Content Marketing', 'Email Marketing']
  },
  {
    title: '10. IT Consulting',
    icon: Brain,
    color: 'from-violet-400 to-purple-500',
    items: ['Technology Consulting', 'Digital Transformation', 'System Architecture Planning', 'Startup Tech Guidance']
  },
  {
    title: '11. Integration Services',
    icon: Link2,
    color: 'from-fuchsia-400 to-pink-500',
    items: ['Payment Gateway Integration', 'Third-party API Integration', 'ERP Integration']
  },
  {
    title: '12. E-commerce Solutions',
    icon: ShoppingCart,
    color: 'from-lime-400 to-green-500',
    items: ['Shopify / WooCommerce Setup', 'Custom Online Store Development', 'Payment & Shipping Integration']
  },
  {
    title: '13. ERP & CRM Solutions',
    icon: Database,
    color: 'from-slate-400 to-gray-500',
    items: ['ERP Implementation (like ERPNext)', 'CRM Setup & Customization', 'Automation Workflows'],
    link: '/services/database-design'
  },
  {
    title: '14. Outsourcing Services',
    icon: Users,
    color: 'from-rose-400 to-red-500',
    items: ['Dedicated Developers', 'Remote IT Team', 'Project-based Hiring']
  },
  {
    title: '15. Additional Services',
    icon: Video,
    color: 'from-amber-400 to-orange-500',
    items: ['Video Editing & Animation', '3D Design & Motion Graphics', 'Branding & Corporate Identity', 'Content Writing']
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Nexcore Info</title>
        <meta name="description" content="Comprehensive IT Services - Software Development, Website Development, Mobile Apps, Cloud, Security, AI, Digital Marketing and more." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Complete IT Solutions</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Complete IT solutions from software development to digital marketing. Everything your business needs to thrive in the digital world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(({ title, icon: Icon, color, items, link }, index) => (
              <div key={title} className="group hover:scale-[1.02] transition-all duration-500">
                <div className="glass p-8 rounded-3xl h-full border border-white/10 hover:border-neon-glow hover:shadow-2xl hover:shadow-neon-glow/50 backdrop-blur-xl group-hover:bg-white/5">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl shadow-2xl shadow-${color.split(' ')[1]?.replace('-', '') || 'blue'}/50 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-neon-glow transition-colors">
                    {title}
                  </h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 group-hover:text-slate-200 transition-colors">
                        <span className="w-2 h-2 bg-neon-glow rounded-full mt-2 flex-shrink-0 opacity-75 group-hover:opacity-100 transition-opacity"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {link && (
                    <Link to={link} className="mt-6 inline-flex items-center text-neon-glow font-medium hover:underline group/link">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
