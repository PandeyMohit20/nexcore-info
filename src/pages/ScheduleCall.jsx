import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Phone, Mail, User, MessageCircle, Zap, Video } from 'lucide-react';

const ScheduleCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Call scheduled! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', preferredTime: '', message: '' });
  };

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  return (
    <>
      <Helmet>
        <title>Schedule Call - Nexcore Info</title>
        <meta name="description" content="Schedule a free consultation call with Nexcore Info experts. Discuss your IT project requirements." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Free Consultation</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Schedule Your Call
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              30-minute free consultation to discuss your project requirements and get expert advice.
            </p>
          </div>
        </section>

        {/* Schedule Form */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl backdrop-blur-xl border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Available Times</h3>
                    <p className="text-slate-400">Mon-Fri, 9AM - 6PM IST</p>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>30-minute video call</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Project requirement discussion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Technology roadmap</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Timeline & pricing quote</span>
                  </li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl backdrop-blur-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Phone className="w-8 h-8 text-neon-glow" />
                  Call Us Now
                </h3>
                <a href="tel:+917764991332" className="text-3xl font-bold text-neon-glow hover:text-purple-400 transition-colors block mb-4">
                  +91 7764991332
                </a>
                <p className="text-slate-400">Immediate assistance available</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="glass p-12 rounded-3xl backdrop-blur-xl border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Book Your Slot
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-3 flex items-center space-x-2">
                      <User className="w-5 h-5 text-neon-glow" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl glass backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:ring-2 focus:ring-neon-glow/50 bg-white/5 text-white placeholder-slate-400 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 font-medium mb-3 flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-neon-glow" />
                        <span>Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl glass backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:ring-2 focus:ring-neon-glow/50 bg-white/5 text-white placeholder-slate-400 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-3 flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-neon-glow" />
                        <span>Phone</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl glass backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:ring-2 focus:ring-neon-glow/50 bg-white/5 text-white placeholder-slate-400 transition-all"
                        placeholder="+91 7764991332"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-3 flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-neon-glow" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl glass backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:ring-2 focus:ring-neon-glow/50 bg-white/5 text-white transition-all"
                    >
                      <option value="">Choose a time slot</option>
                      {timeSlots.map((slot, i) => (
                        <option key={i} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-3 flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-neon-glow" />
                      <span>Project Details (Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl glass backdrop-blur-sm border border-white/20 focus:border-neon-glow focus:ring-2 focus:ring-neon-glow/50 bg-white/5 text-white placeholder-slate-400 resize-vertical transition-all"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-glow to-neon-purple hover:from-purple-500 hover:to-neon-glow text-black font-bold py-5 px-8 rounded-2xl shadow-2xl shadow-neon-glow/50 hover:shadow-neon-glow/75 transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-3 group"
                  >
                    <Video className="w-6 h-6 group-hover:animate-spin" />
                    <span>Schedule Free Call</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCall;
