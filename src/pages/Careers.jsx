import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: 'Senior React Developer',
      type: 'Full-time • Remote',
      description: 'Lead development of cutting-edge React applications using React 19, TailwindCSS, and modern tooling.',
      requirements: ['5+ years React', 'TypeScript expert', 'TailwindCSS / Headless UI', 'State management (Zustand/Redux)']
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time • Remote',
      description: 'Build and maintain cloud infrastructure on AWS/Azure with Docker, Kubernetes, and CI/CD pipelines.',
      requirements: ['AWS/Azure certified', 'Docker/Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform/CloudFormation']
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time • Remote',
      description: 'Design modern glassmorphism interfaces for web and mobile apps with Figma and Framer.',
      requirements: ['Figma expert', 'Modern design systems', 'Motion design', 'Responsive design']
    },
    {
      title: 'Backend Developer (Node.js/Python)',
      type: 'Full-time • Remote',
      description: 'Build scalable APIs and microservices with Node.js, Python, and cloud-native architecture.',
      requirements: ['Node.js / Python', 'PostgreSQL/MongoDB', 'REST/GraphQL APIs', 'AWS Lambda']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Nexcore Info</title>
        <meta name="description" content="Join Nexcore Info - React developers, DevOps engineers, UI/UX designers, backend developers wanted." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Join Our Team</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Careers at Nexcore
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Work with cutting-edge technologies on exciting projects with a passionate team.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {positions.map((position, index) => (
              <div key={position.title} className="group hover:scale-[1.02] transition-all duration-500">
                <div className="glass p-10 rounded-3xl border border-white/10 hover:border-neon-glow hover:shadow-2xl hover:shadow-neon-glow/50 backdrop-blur-xl group-hover:bg-white/5 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-neon-glow to-neon-purple shadow-lg shadow-neon-glow/50 animate-pulse`}></div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-neon-glow transition-colors">
                        {position.title}
                      </h3>
                    </div>
                    <div className="text-sm bg-white/10 px-3 py-1 rounded-full font-medium text-slate-300">
                      {position.type}
                    </div>
                  </div>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {position.description}
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-slate-400">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center space-x-2 group-hover:text-slate-300 transition-colors">
                        <div className="w-2 h-2 bg-neon-glow rounded-full flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold py-4 px-6 rounded-2xl shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 group-hover:animate-none">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Careers Form */}
          <div className="max-w-2xl mx-auto">
            <div className="glass p-12 rounded-3xl backdrop-blur-xl border border-white/20 text-center">
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-neon-glow to-purple-400 bg-clip-text text-transparent">
                No Open Positions Match?
              </h3>
              <p className="text-xl text-slate-400 mb-12 max-w-md mx-auto">
                Send us your resume anyway. We always welcome talented individuals.
              </p>
              <form className="space-y-6 max-w-md mx-auto">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full px-6 py-4 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow bg-white/5 text-white placeholder-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-6 py-4 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow bg-white/5 text-white placeholder-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="file" 
                    className="w-full px-6 py-4 glass rounded-2xl backdrop-blur-sm border border-white/20 bg-white/5 text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-neon-glow file:text-black hover:file:bg-purple-400 cursor-pointer"
                  />
                </div>
                <div className="space-y-2">
                  <textarea 
                    rows="4"
                    placeholder="Tell us about yourself and why you want to join Nexcore Info..."
                    className="w-full px-6 py-4 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow bg-white/5 text-white placeholder-slate-400 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold py-5 px-8 rounded-2xl shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-3"
                >
                  <Users className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
