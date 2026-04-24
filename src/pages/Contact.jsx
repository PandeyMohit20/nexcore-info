import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Nexcore Info</title>
        <meta name="description" content="Get in touch with Nexcore Info. Phone: +91 7764991332 | Email: info@nexcoreinfo.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Let's Talk Business</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to transform your business with cutting-edge IT solutions? 
              We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <Phone className="w-8 h-8 text-neon-glow" />
                  <span>Phone</span>
                </h3>
                <a href="tel:+917764991332" className="text-2xl font-bold text-neon-glow hover:text-purple-400 transition-colors">
                  +91 7764991332
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <Mail className="w-8 h-8 text-neon-glow" />
                  <span>Email</span>
                </h3>
                <a href="mailto:info@nexcoreinfo.com" className="text-xl font-semibold text-slate-300 hover:text-neon-glow transition-colors">
                  info@nexcoreinfo.com
                </a>
              </div>

              <div>
                
                  
        
                
                

                                
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                                    <MapPin className="w-8 h-8 text-neon-glow" />
                                  <span className="text-slate-400 block">Andheri, Mumbai<br/>Maharashtra 400093</span>
                                  </h3>
                                  <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.614681279558!2d72.83444821526895!3d19.11232368680858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6653a8a4b1d%3A0xf8dacff6def626fd!2sAndheri%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1724086400000!5m2!1sen!2sin"
                                    width="100%" 
                                    height="120" 
                                    style={{border:0, borderRadius:'2.75rem', marginTop:'0.5rem'}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Nexcore Info Location - Andheri, Mumbai"
                                    className="w-full rounded-xl"
                                  />
                                </div>
                              
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-12 rounded-3xl backdrop-blur-xl border border-white/20 max-w-md mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Send Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:outline-none focus:ring-2 focus:ring-neon-glow/50 transition-all bg-white/5 text-white placeholder-slate-400" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:outline-none focus:ring-2 focus:ring-neon-glow/50 transition-all bg-white/5 text-white placeholder-slate-400" 
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:outline-none focus:ring-2 focus:ring-neon-glow/50 transition-all bg-white/5 text-white placeholder-slate-400 resize-vertical" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold py-4 px-6 rounded-2xl shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
