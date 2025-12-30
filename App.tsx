import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';
import SkillVisualizer from './components/SkillVisualizer';
import { PROJECTS, EXPERIENCES, SKILLS, EDUCATION } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 mono">
            AI • Data Science • BI • Mobile • Web
          </div>

          <div className="mb-6">
            <img 
              src="/images/.png2.png" 
              alt="Logo Felix" 
              className="w-17 h-40 rounded-full object-cover mx-auto border-4 border-white/10 shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight mb-8 max-w-5xl">
            Concevoir l'avenir avec <span className="gradient-text">intelligent systems</span> et des interfaces élégantes.
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
            FELIX KOUAME est un ingénieur pluridisciplinaire spécialisé dans la création d'applications propulsées par l'IA, rapprochant les données complexes et des expériences utilisateur intuitives.
          </p>
          
          <div className="flex space-x-4">
            <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
              Voir mes réalisations
            </a>
            <a href="#contact" className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contactez-moi
            </a>
          </div>
        </div>
      </section>

      {/* About & Stats */}
      <section id="about" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Faire le lien entre les mondes</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Mon parcours commence à l'intersection de la théorie mathématique et de l'ingénierie logicielle pratique. Je ne me contente pas de créer des applications ; je conçois des systèmes qui apprennent, s'adaptent et résolvent des problèmes réels.
              </p>
              <p>
                Qu'il s'agisse de déployer un réseau de neurones convolutionnel pour la vision par ordinateur ou d'optimiser une plateforme, j'apporte une approche axée sur les données à chaque ligne de code.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">1+ An</div>
                  <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Projets réalisés</div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass p-8 rounded-3xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full" />
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Matrice des compétences</h3>
            <SkillVisualizer skills={SKILLS} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Projets sélectionnés</h2>
              <p className="text-gray-400 max-w-md">Une sélection de projets allant de la recherche en apprentissage profond aux applications web prêtes pour la production.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'AI', 'Data Science', 'Mobile', 'Web'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === cat ? 'bg-blue-600 text-white' : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">EXPERIENCES PROFESSIONNELLES</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l border-white/10 group">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                <div className="mb-2 flex justify-between items-center flex-wrap gap-4">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <span className="text-blue-400 mono text-sm">{exp.period}</span>
                </div>
                <div className="text-gray-300 font-semibold mb-4">{exp.company}</div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-blue-500 mr-2">/</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education School */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">FORMATION ACADÉMIQUE</h2>
          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-12 border-l border-white/10 group">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[6.5px] rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                <div className="mb-2 flex justify-between items-center flex-wrap gap-4">
                  <h3 className="text-2xl font-bold">{edu.role}</h3>
                  <span className="text-blue-400 mono text-sm">{edu.period}</span>
                </div>
                <div className="text-gray-300 font-semibold mb-4">{edu.ecole}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />
          <h2 className="text-5xl font-bold mb-8">Prêt à construire quelque chose <span className="gradient-text">d'extraordinaire?</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Je suis toujours ouvert à discuter de projets à fort impact ou d'implémentations révolutionnaires de l'IA. Faisons-le ensemble.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:felixkouame6403@gmail.com" className="w-full md:w-auto bg-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-500 transition-all">
              felixkouame6403@gmail.com 
            </a>
            <div className="flex space-x-6 pt-4 md:pt-0">
              <a href="https://www.linkedin.com/in/kouame-kouakou-felix-9146a9242" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/Felix0564" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <span>05 64 03 94 10 / 01 71 79 44 82</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2024 Felixkouame.</p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;