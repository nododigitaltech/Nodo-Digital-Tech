import React from 'react';
import { Program } from '../types';
import { ProgramIcon } from './ProgramIcon';
import { motion } from 'motion/react';

interface ProgramCardProps {
  program: Program;
  onSelect: (id: string) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onSelect }) => {
  return (
    <motion.div
      id={`program-card-${program.id}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => onSelect(program.id)}
      className="group relative flex flex-col justify-between h-[340px] rounded-2xl glass glass-hover p-5 cursor-pointer overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
    >
      {/* Background glow hover effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl group-hover:from-cyan-500/20 transition-all duration-300 pointer-events-none" />

      {/* Top Meta info */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-mono tracking-wider font-bold text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full uppercase">
          {program.subcategory}
        </span>
        <div className="flex items-center space-x-1 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
          <ProgramIcon name="Star" className="text-amber-400 fill-amber-400" size={11} />
          <span className="text-xs font-semibold text-slate-300 font-sans">{program.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Program Identifier & Brand */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-[#050505] border border-white/10 group-hover:border-cyan-500/40 transition-colors p-2.5 shadow-inner">
          <ProgramIcon name={program.icon} className="text-cyan-400 group-hover:text-emerald-400 transition-all duration-300" size={28} />
          {/* Subtle inside shadow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-xl" />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="font-sans font-bold text-base text-slate-150 group-hover:text-white transition-colors line-clamp-1">
            {program.name}
          </h3>
          <p className="text-[10.5px] text-slate-500 font-medium">Por {program.developer}</p>
        </div>
      </div>

      {/* Slogan / Brief description */}
      <p className="text-slate-400 text-xs leading-relaxed font-sans line-clamp-3 mb-4">
        {program.subtitle}
      </p>

      {/* Middle Divider */}
      <div className="border-t border-white/10 my-2" />

      {/* Footer Metrics & Actions */}
      <div className="flex items-center justify-between mt-auto">
        {/* Compatibility and Specs */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-1">
            {program.compatibility.slice(0, 3).map((os) => (
              <span
                key={os}
                className="p-1 rounded bg-[#050505]/50 border border-white/10 text-slate-400"
                title={`Compatible con ${os}`}
              >
                <ProgramIcon name={os} size={11} />
              </span>
            ))}
            {program.compatibility.length > 3 && (
              <span className="text-[9px] text-slate-500 font-mono px-1">+{program.compatibility.length - 3}</span>
            )}
          </div>
          <span className="text-[10px] text-slate-500 font-sans">
            {program.size} • {program.downloads.toLocaleString()} descargas
          </span>
        </div>

        {/* View Detail Trigger */}
        <button
          id={`view-detail-btn-${program.id}`}
          className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-400 text-xs font-semibold group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-300 font-sans shadow-xs"
        >
          <span>Instalar</span>
          <ProgramIcon name="ArrowLeft" className="transform rotate-180 transition-transform group-hover:translate-x-0.5" size={12} />
        </button>
      </div>
    </motion.div>
  );
};
