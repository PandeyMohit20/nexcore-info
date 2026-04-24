import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users2, GitCommit, X,
  Mail, Phone,
  Code, Cloud, Database, Zap,
  Home, Image, FileText
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-24 py-16 bg-gradient-to-b from-slate-900/50 to-black/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-glow to-neon-purple rounded-2xl flex items-center justify-center neon-glow animate-glow">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent">
                  Nexcore Info
                </h3>
                <p className="text-slate-400 text-sm mt-1">Premium IT Solutions & Digital Innovation</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Transforming businesses through cutting-edge technology. 
              Specializing in modern web development, immersive 3D experiences, 
              AI integration, and scalable cloud solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/nexcore-info" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                <Users2 className="w-5 h-5 group-hover:text-neon-glow" />
              </a>
              <a href="https://twitter.com/nexcoreinfo" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                <X className="w-5 h-5 group-hover:text-neon-glow" />
              </a>
              <a href="https://github.com/nexcore-info" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group">
                <GitCommit className="w-5 h-5 group-hover:text-neon-glow" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-400 hover:text-neon-glow transition-colors flex items-center space-x-2 group">
                <Home className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                <span>Home</span>
              </a></li>
              <li><a href="/services" className="text-slate-400 hover:text-neon-glow transition-colors flex items-center space-x-2 group">
                <Code className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                <span>Services</span>
              </a></li>
              <li><a href="/portfolio" className="text-slate-400 hover:text-neon-glow transition-colors flex items-center space-x-2 group">
                <Image className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                <span>Portfolio</span>
              </a></li>
              <li><a href="/blog" className="text-slate-400 hover:text-neon-glow transition-colors flex items-center space-x-2 group">
                <FileText className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                <span>Blog</span>
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/web-development" className="flex items-center space-x-3 text-slate-400 hover:text-neon-glow group">
                <Code className="w-5 h-5 flex-shrink-0" />
                <span>Web Development</span>
              </Link></li>
              <li><Link to="/services/cloud-solutions" className="flex items-center space-x-3 text-slate-400 hover:text-neon-glow group">
                <Cloud className="w-5 h-5 flex-shrink-0" />
                <span>Cloud Solutions</span>
              </Link></li>
              <li><Link to="/services/ai-integration" className="flex items-center space-x-3 text-slate-400 hover:text-neon-glow group">
                <Zap className="w-5 h-5 flex-shrink-0" />
                <span>AI Integration</span>
              </Link></li>
              <li><Link to="/services/database-design" className="flex items-center space-x-3 text-slate-400 hover:text-neon-glow group">
                <Database className="w-5 h-5 flex-shrink-0" />
                <span>Database Design</span>
              </Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 hover:text-neon-glow group">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@nexcoreinfo.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-neon-glow group">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 7764991332</span>
              </div>
            
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <span>&copy; 2024 Nexcore Info. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-neon-glow transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-neon-glow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
