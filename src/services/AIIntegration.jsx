import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Brain, Bot, ChartBar, Code, Database } from 'lucide-react';

const AIIntegration = () => {
  return (
    <>
      <Helmet>
        <title>AI Integration Services - Nexcore Info</title>
        <meta name="description" content="AI/ML integration, chatbots, data analytics, automation and intelligent systems for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto animate-float">
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-neon-glow font-medium">AI Integration</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Intelligent AI Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business with AI-powered automation, chatbots and intelligent analytics.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <div className="container mx-auto px-4 max-w-7xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Bot className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">AI Chatbots</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Customer Support Bots</li>
                <li>• Sales Chatbots</li>
                <li>• WhatsApp Integration</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <ChartBar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Data Analytics</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Business Intelligence</li>
                <li>• Predictive Analytics</li>
                <li>• Custom Dashboards</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Machine Learning</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Custom ML Models</li>
                <li>• Image Recognition</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">Automation</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• RPA (Robotic Process)</li>
                <li>• Workflow Automation</li>
                <li>• API Automation</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Code className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">AI APIs</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• OpenAI Integration</li>
                <li>• Google AI APIs</li>
                <li>• Custom AI Endpoints</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">AI Data Pipeline</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Data Processing</li>
                <li>• Model Training</li>
                <li>• Deployment Pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="glass p-12 rounded-4xl border border-white/20 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-200/80 bg-clip-text text-transparent mb-6">
              Ready to Add AI to Your Business?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's integrate intelligent automation and analytics into your workflow.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <a href="/schedule-call" className="group bg-gradient-to-r from-neon-glow to-purple-500 hover:from-purple-500 hover:to-violet-600 text-black font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl shadow-neon-glow/50 hover:shadow-purple-500/75 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 w-full lg:w-auto">
                <Brain className="w-6 h-6" />
                <span>Start AI Project</span>
              </a>
              <a href="/portfolio" className="glass backdrop-blur-xl border border-white/20 hover:border-white/40 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition-all w-full lg:w-auto">
                AI Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIIntegration;
