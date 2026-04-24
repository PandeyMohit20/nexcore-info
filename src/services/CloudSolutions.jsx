import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Code, Settings } from 'lucide-react';

const CloudSolutions = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Nexcore Info</title>
        <meta name="description" content="Scalable cloud solutions, server setup, DevOps, AWS/Azure/Google Cloud deployment and management." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto animate-float">
              <Cloud className="w-5 h-5 mr-2" />
              <span className="text-neon-glow font-medium">Cloud Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-indigo-400 bg-clip-text text-transparent mb-8 leading-tight">
              Scalable Cloud Infrastructure
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Reliable cloud deployment, server management and DevOps services for your business growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="container mx-auto px-4 max-w-7xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Server className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Cloud Providers</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• AWS Setup & Management</li>
                <li>• Google Cloud Platform</li>
                <li>• Microsoft Azure</li>
                <li>• DigitalOcean / Linode</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Database Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Managed Databases</li>
                <li>• RDS / MongoDB Atlas</li>
                <li>• Backup & Recovery</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Security & Backup</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Cloud Firewalls</li>
                <li>• DDoS Protection</li>
                <li>• Automated Backups</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">DevOps & CI/CD</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Docker Deployment</li>
                <li>• GitHub Actions</li>
                <li>• Auto-scaling</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Monitoring</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Server Monitoring</li>
                <li>• Uptime Alerts</li>
                <li>• Performance Tracking</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Code className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Serverless</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• AWS Lambda</li>
                <li>• Vercel / Netlify</li>
                <li>• Edge Functions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="glass p-12 rounded-4xl border border-white/20 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-200/80 bg-clip-text text-transparent mb-6">
              Ready for Cloud Migration?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Move to the cloud with zero downtime and 99.9% uptime guarantee.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <a href="/schedule-call" className="group bg-gradient-to-r from-neon-glow to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-black font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl shadow-neon-glow/50 hover:shadow-blue-500/75 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 w-full lg:w-auto">
                <Cloud className="w-6 h-6" />
                <span>Deploy Now</span>
              </a>
              <a href="/portfolio" className="glass backdrop-blur-xl border border-white/20 hover:border-white/40 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition-all w-full lg:w-auto">
                View Deployments
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSolutions;
