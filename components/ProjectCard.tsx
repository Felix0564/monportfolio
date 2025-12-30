
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mono">
            {project.category}
          </span>
          <div className="flex space-x-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <a 
          href={project.link} 
          className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors"
        >
          Voir l'étude de cas
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
