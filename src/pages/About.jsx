import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Code, Zap, Users2 } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Mohit & Chandan',
      role: 'Founders',
      description: 'Visionaries behind Nexcore Info, driving innovation in IT solutions and digital transformation.',
      icon: Users2,
      color: 'from-neon-glow to-neon-purple'
    },
    {
      name: 'Santosh Mishra',
      role: 'Sales Manager',
      description: 'Leading sales strategy, client relationships, and business growth initiatives.',
      icon: Users,
      color: 'from-emerald-400 to-green-500'
    },
    {
      name: 'Hunan Khan',
      role: 'Business Development Manager',
      description: 'Expanding market reach, forging strategic partnerships, and driving new opportunities.',
      icon: Zap,
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Mamta Kumari',
      role: 'Operations Head',
      description: 'Overseeing smooth operations, team coordination, and delivery excellence.',
      icon: Code,
      color: 'from-purple-400 to-violet-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Nexcore Info</title>
        <meta name="description" content="Meet the team behind Nexcore Info - experienced professionals delivering premium IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl">
                <span className="w-3 h-3 bg-neon-glow rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Meet Our Team</span>
              </div>
            </div>
<h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight [text-reveal=letter]">
              The People
              <span className="block text-3xl md:text-4xl font-light text-white/80 mt-4">Behind Nexcore Info</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate professionals dedicated to delivering exceptional IT solutions and digital innovation.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {team.map(({ name, role, description, icon: Icon, color }, index) => (
              <div key={role} className={`group hover:scale-[1.02] transition-all duration-500 ${index % 2 === 0 ? 'md:mt-12' : ''}`}>
                <div className="glass p-10 rounded-3xl h-full border border-white/10 hover:border-neon-glow hover:shadow-2xl hover:shadow-neon-glow/50 backdrop-blur-xl group-hover:bg-white/5">
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl shadow-2xl shadow-${color.split('-')[1] || 'neon'}/50 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-neon-glow transition-colors">
                    {name}
                  </h3>
                  <h4 className="text-xl font-semibold text-neon-glow mb-6 text-center">
                    {role}
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-center">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
