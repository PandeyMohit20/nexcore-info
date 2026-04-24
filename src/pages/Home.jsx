import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Nexcore Info</title>
        <meta name="description" content="Welcome to Nexcore Info - Premium IT solutions for modern businesses. Web development, AI, cloud, and digital innovation." />
      </Helmet>
      
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-glow/20 via-transparent to-neon-purple/20 animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-glow/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float delay-1000" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <div className="animate-float">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping" />
              <span className="text-neon-glow font-medium">🚀 Live - Cutting Edge Technology Stack</span>
            </div>
          </div>

<h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight [text-reveal=letter] animate-glow">
            Premium IT Solutions
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-white/80 mt-4">for Modern Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your digital presence with our cutting-edge stack: 
            <span className="font-mono text-neon-glow">React 19</span> +{' '}
            <span className="font-mono text-neon-purple">@react-three/fiber</span> +{' '}
            <span className="font-mono text-green-400">TailwindCSS</span> +{' '}
            <span className="font-mono text-orange-400">Firebase</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <a href="/schedule-call" className="group bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold px-12 py-6 rounded-2xl text-lg shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 flex items-center space-x-3">
              <Zap className="w-6 h-6 group-hover:animate-spin" />
              <span>Schedule Call</span>
            </a>
            <a href="/portfolio" className="glass backdrop-blur-xl border border-white/20 hover:border-white/40 px-12 py-6 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </a>
          </div>

          {/* Tech Stack Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'React 19', color: 'from-pink-400 to-rose-400' },
              { name: 'Three.js', color: 'from-cyan-400 to-blue-400' },
              { name: 'Tailwind', color: 'from-emerald-400 to-teal-400' },
              { name: 'Framer Motion', color: 'from-purple-400 to-violet-400' },
            ].map(({ name, color }) => (
              <div key={name} className={`glass p-6 rounded-2xl group hover:bg-gradient-to-r ${color} hover:text-black hover:font-bold transition-all duration-500 hover:scale-105 backdrop-blur-xl border border-white/20`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Full-stack development with immersive experiences and scalable architecture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: 'Immersive 3D Web Experiences',
                desc: 'React Three Fiber + GSAP animations for stunning interactive 3D websites',
                icon: '🌐',
                color: 'from-cyan-400 to-blue-500'
              },
              {
                title: 'Production React 19 Apps',
                desc: 'Modern React patterns with TypeScript, server components, and advanced state management',
                icon: '⚛️',
                color: 'from-pink-400 to-rose-500'
              },
              {
                title: 'Firebase-Powered Backend',
                desc: 'Real-time databases, authentication, serverless functions, and analytics',
                icon: '🔥',
                color: 'from-orange-400 to-red-500'
              },
              {
                title: 'Performance-First Design',
                desc: 'TailwindCSS + Framer Motion with 100 Lighthouse scores and instant interactions',
                icon: '⚡',
                color: 'from-emerald-400 to-teal-500'
              },
              {
                title: 'AI & ML Integration',
                desc: 'Embed cutting-edge AI features with seamless API integrations',
                icon: '🧠',
                color: 'from-purple-400 to-violet-500'
              },
              {
                title: 'Cloud-Native Architecture',
                desc: 'Scalable, secure, and cost-optimized cloud solutions',
                icon: '☁️',
                color: 'from-indigo-400 to-purple-500'
              }
            ].map((service, idx) => (
              <div key={service.title} className="group hover:scale-[1.02] transition-all duration-500">
                <div className="glass p-10 rounded-3xl h-full border border-white/10 hover:border-neon-glow hover:shadow-2xl hover:shadow-neon-glow/50 backdrop-blur-xl group-hover:bg-white/5">
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl shadow-2xl shadow-${service.color.split(' ')[0]}/50 group-hover:scale-110 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-neon-glow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="glass p-12 rounded-3xl backdrop-blur-xl border border-white/20 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30 animate-bounce">
              🚀
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Let's create the future of your digital presence together. 
              From concept to launch, we're with you every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/schedule-call" className="bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold px-12 py-6 rounded-2xl text-lg shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto">
                Start Your Project
              </a>
              <button className="glass border border-white/20 hover:border-white/40 backdrop-blur-xl px-12 py-6 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
