import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Code,
  Globe,
  ShoppingCart,
  Palette,
  Layout,
  Shield,
  Zap,
  Server,
} from "lucide-react";

const services = [
  {
    title: "Business Websites",
    icon: Globe,
    gradient: "from-blue-500 to-indigo-600",
    points: ["Static & Dynamic Sites", "Corporate Portals", "Landing Pages"],
  },
  {
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    gradient: "from-emerald-500 to-teal-600",
    points: ["Online Stores", "Payment Integration", "Inventory Management"],
  },
  {
    title: "CMS Development",
    icon: Palette,
    gradient: "from-purple-500 to-violet-600",
    points: ["WordPress Custom", "Headless CMS", "Admin Panels"],
  },
  {
    title: "Responsive Design",
    icon: Layout,
    gradient: "from-indigo-500 to-blue-600",
    points: ["Mobile-First Approach", "Cross-browser Compatible", "PWA Ready"],
  },
  {
    title: "Performance & SEO",
    icon: Shield,
    gradient: "from-orange-500 to-red-600",
    points: ["Lighthouse 95+ Scores", "SEO Optimized", "Fast Loading"],
  },
  {
    title: "Modern Tech Stack",
    icon: Zap,
    gradient: "from-green-500 to-emerald-600",
    points: ["React 19 / Next.js", "TailwindCSS v4", "TypeScript"],
  },
];

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services - Nexcore Info</title>
        <meta
          name="description"
          content="Professional web development services including business websites, e-commerce, CMS, and responsive design."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 py-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 backdrop-blur-xl animate-float">
              <Code className="w-5 h-5 mr-2" />
              <span className="text-neon-glow font-medium">
                Web Development
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-neon-glow to-blue-400 bg-clip-text text-transparent mb-8">
              Professional Web Development
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Modern, responsive websites built with cutting-edge technology.
              From business sites to e-commerce platforms.
            </p>
          </div>
        </section>

        {/* Services */}
        <div className="container mx-auto px-4 max-w-7xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-glow/50 group"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-glow">
                    {service.title}
                  </h3>

                  <ul className="space-y-2 text-slate-400">
                    {service.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="glass p-12 rounded-4xl border border-white/20 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-slate-200/80 bg-clip-text text-transparent mb-6">
              Ready to Build Your Website?
            </h2>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Get a modern, fast, and beautiful website built by our expert
              team.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <a
                href="/schedule-call"
                className="group bg-gradient-to-r from-neon-glow to-neon-purple hover:from-blue-500 hover:to-indigo-500 text-black font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl hover:shadow-blue-500/75 transform hover:-translate-y-1 transition flex items-center justify-center gap-3"
              >
                <Server className="w-6 h-6" />
                <span>Start Web Project</span>
              </a>

              <a
                href="/portfolio"
                className="glass border border-white/20 hover:border-white/40 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;