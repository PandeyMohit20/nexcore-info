import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ScheduleCall from './pages/ScheduleCall';
import Portfolio from './pages/Portfolio';
import WebDevelopment from './services/WebDevelopment';
import CloudSolutions from './services/CloudSolutions';
import AIIntegration from './services/AIIntegration';
import DatabaseDesign from './services/DatabaseDesign';

function Layout({ children }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/services" element={
            <Layout>
              <Services />
            </Layout>
          } />
          <Route path="/portfolio" element={
            <Layout>
              <Portfolio />
            </Layout>
          } />
          <Route path="/schedule-call" element={
            <Layout>
              <ScheduleCall />
            </Layout>
          } />
          <Route path="/blog" element={
            <Layout>
              <Blog />
            </Layout>
          } />
          <Route path="/careers" element={
            <Layout>
              <Careers />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="/services/web-development" element={
            <Layout>
              <WebDevelopment />
            </Layout>
          } />
          <Route path="/services/cloud-solutions" element={
            <Layout>
              <CloudSolutions />
            </Layout>
          } />
          <Route path="/services/ai-integration" element={
            <Layout>
              <AIIntegration />
            </Layout>
          } />
          <Route path="/services/database-design" element={
            <Layout>
              <DatabaseDesign />
            </Layout>
          } />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
