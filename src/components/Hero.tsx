import React from 'react';
import { ProgramIcon } from './ProgramIcon';
import { motion } from 'motion/react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onQuickSearch: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery, onQuickSearch }) => {
  const popularTags = ['VS Code', 'Celeste', 'OBS Studio', 'Termux', 'Blender', 'Rufus'];

  return (
    <div id="hero-section" className="relative pt-24 pb-14 overflow-hidden">
      {/* Dynamic Futuristic Grid Background & Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />
      
      {/* Light glow balls */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        {/* Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10.5px] font-mono tracking-wider text-slate-300 uppercase">
            Servidores Activos • Descargas 100% Directas y Seguras
          </span>
        </motion.div>

        {/* Heading */}
        <div className="space-y-4">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tight text-white leading-tight"
          >
            Tu Portal Tecnológico de
            <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(6,182,212,0.15)]">
              Descarga Segura y Directa
            </span>
          </motion.h1>

          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Bienvenido a <span className="text-white font-semibold">Nodo Digital Tech</span>. El nexo definitivo para tus programas, juegos y aplicaciones. Olvídate de los anuncios invasivos, falsos botones e infinitos acortadores. Solo software limpio a velocidad máxima.
          </motion.p>
        </div>

        {/* Central Search Box */}
        <motion.div
          id="hero-search-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-1.5 rounded-2xl glass transition-all duration-300 focus-within:border-cyan-500/50 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <div className="flex items-center">
              <div className="pl-4 text-slate-500">
                <ProgramIcon name="Search" size={18} />
              </div>
              <input
                id="hero-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca por nombre, categoría, requisitos o tags (ej: Windows, DevOps)..."
                className="w-full bg-transparent border-0 outline-none focus:ring-0 text-slate-200 placeholder-slate-500 text-sm px-3.5 py-2.5 font-sans"
              />
              {searchQuery ? (
                <button
                  id="hero-clear-search"
                  onClick={() => setSearchQuery('')}
                  className="p-2 mr-1 text-slate-400 hover:text-white transition-colors"
                >
                  <ProgramIcon name="X" size={16} />
                </button>
              ) : null}
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-[10.5px] font-semibold text-slate-500 font-mono uppercase mr-1">Búsquedas Populares:</span>
            {popularTags.map((tag) => (
              <button
                id={`quick-tag-${tag.replace(/\s+/g, '-')}`}
                key={tag}
                onClick={() => onQuickSearch(tag)}
                className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-950/10 transition-all cursor-pointer font-sans"
              >
                #{tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feature Row */}
        <motion.div
          id="hero-stats-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto"
        >
          {/* Stat 1 */}
          <div className="p-4 rounded-xl glass glass-hover flex items-center space-x-3.5 text-left transition-all duration-300">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ProgramIcon name="Shield" size={18} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">100% Libre de Virus</h4>
              <p className="text-[10.5px] text-slate-400">Archivos escaneados e indexados con firmas seguras.</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-4 rounded-xl glass glass-hover flex items-center space-x-3.5 text-left transition-all duration-300">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <ProgramIcon name="CheckCircle" size={18} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">Sin Publicidad Molesta</h4>
              <p className="text-[10.5px] text-slate-400">Cero anuncios emergentes, redirecciones o estafas.</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-4 rounded-xl glass glass-hover flex items-center space-x-3.5 text-left transition-all duration-300">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ProgramIcon name="Activity" size={18} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">Velocidad Máxima</h4>
              <p className="text-[10.5px] text-slate-400">Servidores de alta capacidad con descargas simultáneas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
