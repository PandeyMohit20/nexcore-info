import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, Server, Shield, Cloud, BarChart3, Key } from 'lucide-react';

const DatabaseDesign = () => {
  return (
    <>
      <Helmet>
        <title>Database Design & Management - Nexcore Info</title>
        <meta name="description" content="Database design, optimization, migration, MySQL, PostgreSQL, MongoDB, NoSQL and cloud database solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto animate-float">
              <Database className="w-5 h-5 mr-2" />
              <span className="text-neon-glow font-medium">Database Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-emerald-400 bg-clip-text text-transparent mb-8 leading-tight">
              Robust Database Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Scalable, secure and optimized database design for high-performance applications.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="container mx-auto px-4 max-w-7xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">SQL Databases</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• MySQL / PostgreSQL</li>
                <li>• Schema Design</li>
                <li>• Query Optimization</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Server className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">NoSQL Solutions</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• MongoDB</li>
                <li>• Redis / Cassandra</li>
                <li>• Document Stores</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Security</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Data Encryption</li>
                <li>• Access Control</li>
                <li>• Backup Strategy</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Key className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Performance</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Indexing Strategy</li>
                <li>• Query Optimization</li>
                <li>• Caching Layers</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Cloud className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Cloud Databases</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• RDS / DynamoDB</li>
                <li>• MongoDB Atlas</li>
                <li>• Firebase Firestore</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Analytics</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Data Warehousing</li>
                <li>• BI Integration</li>
                <li>• Real-time Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="glass p-12 rounded-4xl border border-white/20 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-200/80 bg-clip-text text-transparent mb-6">
              Need Scalable Database?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get optimized database design that scales with your business growth.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <a href="/schedule-call" className="group bg-gradient-to-r from-neon-glow to-emerald-500 hover:from-emerald-500 hover:to-teal-600 text-black font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl shadow-neon-glow/50 hover:shadow-emerald-500/75 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 w-full lg:w-auto">
                <Database className="w-6 h-6" />
                <span>Database Consultation</span>
              </a>
              <a href="/portfolio" className="glass backdrop-blur-xl border border-white/20 hover:border-white/40 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition-all w-full lg:w-auto">
                Database Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseDesign;
