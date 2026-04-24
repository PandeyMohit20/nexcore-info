import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of React 19 & Next-Gen Web Development',
    excerpt: 'Exploring React 19 features, server components, and how they revolutionize web development.',
    date: 'Dec 15, 2024',
    author: 'Mohit',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&fit=crop',
    category: 'React'
  },
  {
    title: 'Cloud Migration: AWS vs Azure vs Google Cloud',
    excerpt: 'Comprehensive comparison of cloud providers and migration strategies for modern businesses.',
    date: 'Dec 10, 2024',
    author: 'Chandan',
    image: 'https://images.unsplash.com/photo-1461059767213-db59857a6b6f?w=800&fit=crop',
    category: 'Cloud'
  },
  {
    title: 'AI Integration in Production Apps - Best Practices',
    excerpt: 'How to integrate AI/ML models into your React applications without compromising performance.',
    date: 'Dec 5, 2024',
    author: 'Hunan Khan',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&fit=crop',
    category: 'AI'
  },
  {
    title: 'TailwindCSS v3 + React: Ultimate Developer Setup',
    excerpt: 'Complete guide to setting up TailwindCSS v3 with React 19, PostCSS, and modern tooling.',
    date: 'Nov 28, 2024',
    author: 'Santosh Mishra',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&fit=crop',
    category: 'Development'
  },
  {
    title: 'Cyber Security Essentials for Modern Web Apps',
    excerpt: 'Essential security practices every React developer must implement in 2025.',
    date: 'Nov 22, 2024',
    author: 'Mamta Kumari',
    image: 'https://images.unsplash.com/photo-1613460253366-e21ba8c4831e?w=800&fit=crop',
    category: 'Security'
  },
  {
    title: 'Headless CMS vs Traditional CMS: Complete Comparison',
    excerpt: 'Why headless CMS is dominating modern web development and when to use each.',
    date: 'Nov 18, 2024',
    author: 'Team Nexcore',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop',
    category: 'CMS'
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Nexcore Info</title>
        <meta name="description" content="Latest insights on web development, React, cloud, AI, security, and digital transformation from Nexcore Info experts." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="animate-float">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl max-w-max mx-auto">
                <span className="w-3 h-3 bg-neon-glow rounded-full mr-3 animate-ping" />
                <span className="text-neon-glow font-medium">Tech Insights</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Technology Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay ahead with latest insights on web development, AI, cloud computing, cyber security, and digital transformation.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={post.title} className="group hover:scale-[1.02] transition-all duration-500">
                <div className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-neon-glow hover:shadow-2xl hover:shadow-neon-glow/50 backdrop-blur-xl group-hover:bg-white/5 h-full">
                  <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-neon-glow/20">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 text-sm text-neon-glow font-medium mb-3 uppercase tracking-wide">
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-neon-glow transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-3">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass inline-block p-12 rounded-3xl backdrop-blur-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-neon-glow to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-xl text-slate-400 mb-8">
                Subscribe for latest tech insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 glass rounded-2xl backdrop-blur-sm border border-white/20 focus:border-neon-glow bg-white/5 text-white placeholder-slate-400"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-neon-glow to-neon-purple text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-neon-glow/75 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
