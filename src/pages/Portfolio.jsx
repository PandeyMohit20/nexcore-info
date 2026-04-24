import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Server, Award, Star, Link2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Dashboard',
    subtitle: 'Analytics Platform',
    description: 'Real-time data visualization dashboard with AI insights, built with React 19, D3.js, and machine learning APIs.',
    tech: ['React 19', 'D3.js', 'TailwindCSS', 'Chart.js', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1664465440396-6a7f80a91f26?w=800&h=500&fit=crop',
    live: 'https://dashboard.nexcoreinfo.com',
    github: 'https://github.com/nexcoreinfo/ai-dashboard',
    stats: { clients: '50+', revenue: '$250K+' }
  },
  {
    id: 2,
    title: 'E-commerce Server Platform',
    subtitle: 'Full-stack Marketplace',
    description: 'Scalable e-commerce backend with inventory management, payment processing, and admin dashboard. 10K+ daily orders.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS Lambda'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    live: 'https://marketplace.nexcoreinfo.com',
    github: 'https://github.com/nexcoreinfo/ecommerce-server',
    stats: { orders: '10K+', uptime: '99.9%' }
  },
  {
    id: 3,
    title: '3D Interactive Portfolio',
    subtitle: 'WebGL Experience',
    description: 'Immersive 3D portfolio using React Three Fiber with realistic shaders, animations, and particle systems.',
    tech: ['React Three Fiber', 'Three.js', 'GSAP', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop',
    live: 'https://3d-portfolio.nexcoreinfo.com',
    github: 'https://github.com/nexcoreinfo/3d-portfolio',
    stats: { views: '25K+', score: '100 Lighthouse' }
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    subtitle: 'Financial Services',
    description: 'Cross-platform banking app with biometric auth, real-time transactions, and push notifications.',
    tech: ['Flutter', 'Firebase', 'Node.js', 'Payment Gateway'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    live: 'https://banking.nexcoreinfo.com',
    github: 'https://github.com/nexcoreinfo/mobile-banking',
    stats: { users: '100K+', transactions: '500K+' }
  },
  {
    id: 5,
    title: 'Cloud ERP System',
    subtitle: 'Enterprise Solution',
    description: 'Complete ERP system for inventory, HR, accounting with multi-tenant architecture and mobile access.',
    tech: ['Next.js 14', 'Prisma', 'PostgreSQL', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    live: 'https://erp.nexcoreinfo.com',
    github: 'https://github.com/nexcoreinfo/cloud-erp',
    stats: { companies: '200+', modules: '50+' }
  },
  {
    id: 6,
    title: 'Real-time Chat Server',
    subtitle: 'Communication Platform',
    description: 'Production-ready chat server with Socket.io, end-to-end encryption, file sharing, and group messaging.',
    tech: ['Socket.io', 'Node.js', 'MongoDB', 'Redis', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1611896397578-13d340b9cd9d?w=800&h=500&fit=crop',
    live: 'https://chat.nexcoreinfo.com',
    github: 'https://github.com/nexcoreinfo/chat-server',
    stats: { messages: '1M+', users: '50K+' }
  }
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Nexcore Info</title>
        <meta name="description" content="Production projects showcasing Nexcore Info expertise in software development, AI, cloud servers, mobile apps, and enterprise solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto">
                <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Production Projects</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Real production projects delivered to clients worldwide. Scalable servers, cutting-edge frontend, and enterprise-grade solutions.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group hover:scale-[1.02] transition-all duration-500 overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/70 border border-white/10 hover:border-neon-glow/50">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 rounded-t-3xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-3">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-xl backdrop-blur-sm hover:bg-emerald-500/80 hover:text-black transition-all group/link">
                        <Eye className="w-5 h-5" />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-xl backdrop-blur-sm hover:bg-slate-700 hover:text-white transition-all group/link">
                        <Link2 className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-glow transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-lg font-medium text-slate-300 mb-2 opacity-90">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:bg-neon-glow/20 hover:text-neon-glow hover:border-neon-glow/50 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="flex items-center space-x-4 text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{project.stats.clients || project.stats.orders || project.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stats.score || project.stats.revenue}</span>
                      </div>
                    </div>
                    <div className="glass px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-600/50 text-xs font-medium text-slate-300 hover:bg-neon-glow/20 hover:text-neon-glow transition-all">
                      View Case Study →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <div className="glass p-12 rounded-4xl backdrop-blur-xl max-w-4xl mx-auto border border-white/20 mb-12">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-slate-200/80 bg-clip-text text-transparent mb-6">
              Ready to Build Your Next Big Project?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our team has delivered 50+ production projects with 99.9% uptime. Let's discuss your vision.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <a href="/schedule-call" className="group bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 flex items-center space-x-3 w-full lg:w-auto">
                <Server className="w-6 h-6 group-hover:animate-spin" />
                <span>Start Project</span>
              </a>
              <a href="/contact" className="glass backdrop-blur-xl border border-white/20 hover:border-white/40 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 w-full lg:w-auto">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
