import React from 'react';
import { Skill } from '../types';

interface Props {
  skills: Skill[];
}

const SkillVisualizer: React.FC<Props> = ({ skills }) => {
  if (!skills || skills.length === 0) return <div className="text-gray-400">Aucune compétence disponible.</div>;

  return (
    <div className="space-y-4">
      {skills.map((s) => (
        <div key={s.name}>
          <div className="flex justify-between mb-1">
            <span className="font-semibold text-sm">{s.name}</span>
            <span className="text-xs text-gray-400">{s.level}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${s.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillVisualizer;
