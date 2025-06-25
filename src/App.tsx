import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;