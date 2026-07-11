import React, { useState } from 'react';
import { ProgramIcon } from './ProgramIcon';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeCategory: string;
  setActiveCategory: (category: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onLogoClick: () => void;
  downloadHistory: {
    id: string;
    programName: string;
    version: string;
    status: 'completed' | 'downloading';
    progress: number;
    speed?: string;
    size: string;
  }[];
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  onLogoClick,
  downloadHistory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);

  const categories = [
    { id: 'All', label: 'Inicio' },
    { id: 'Software', label: 'Software' },
    { id: 'Juegos', label: 'Juegos' },
    { id: 'Utilidades', label: 'Utilidades' },
    { id: 'Apps Móviles', label: 'Apps Móviles' },
  ];

  const activeDownloads = downloadHistory.filter((d) => d.status === 'downloading');

  return (
    <nav id="navbar-main" className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              id="navbar-logo-btn"
              onClick={() => {
                onLogoClick();
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="flex items-center space-x-2.5 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1.5px] transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center">
                  <ProgramIcon name="Activity" className="text-cyan-400 group-hover:text-emerald-400 transition-colors" size={18} />
                </div>
                {/* Glowing Aura */}
                <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-sm group-hover:bg-emerald-400/30 transition-all -z-10" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent group-hover:text-white transition-colors">
                Nodo <span className="text-cyan-400">Digital</span> <span className="text-emerald-400 font-medium text-xs tracking-widest uppercase ml-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Tech</span>
              </span>
            </button>
          </div>

          {/* Desktop Categories */}
          <div className="hidden md:flex space-x-1">
            {categories.map((cat) => (
              <button
                id={`cat-btn-${cat.id.replace(/\s+/g, '-')}`}
                key={cat.id}
                onClick={() => {
                  onLogoClick(); // Go back to main list
                  setActiveCategory(cat.id);
                }}
                className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? 'text-cyan-400 bg-cyan-950/20 border border-cyan-500/30 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar, Download center & Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Nav Search Box (Hidden on small mobile) */}
            <div className="hidden sm:block relative w-48 lg:w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <ProgramIcon name="Search" className="text-slate-500" size={15} />
              </span>
              <input
                id="navbar-search-input"
                type="text"
                placeholder="Buscar programa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs rounded-lg pl-9 pr-3 py-1.5 outline-none focus:ring-1 focus:ring-cyan-500/30 placeholder-slate-500 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  id="navbar-clear-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400 hover:text-white"
                >
                  <ProgramIcon name="X" size={13} />
                </button>
              )}
            </div>

            {/* Download Center Trigger */}
            <div className="relative">
              <button
                id="navbar-download-trigger"
                onClick={() => setShowHistoryDropdown(!showHistoryDropdown)}
                className={`relative p-2 rounded-lg border text-slate-400 hover:text-white transition-all cursor-pointer ${
                  activeDownloads.length > 0
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/30'
                }`}
                title="Historial de descargas seguras"
              >
                <ProgramIcon name="Download" size={18} />
                {downloadHistory.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-slate-950 ring-2 ring-[#050505]">
                    {downloadHistory.length}
                  </span>
                )}
              </button>

              {/* Download Center Dropdown */}
              <AnimatePresence>
                {showHistoryDropdown && (
                  <>
                    <div
                      id="navbar-dropdown-backdrop"
                      className="fixed inset-0 z-40"
                      onClick={() => setShowHistoryDropdown(false)}
                    />
                    <motion.div
                      id="navbar-download-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2.5 w-80 rounded-xl bg-[#050505]/95 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/80 z-50 overflow-hidden glass"
                    >
                      <div className="p-3.5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                        <h3 className="font-semibold text-sm text-slate-200 flex items-center space-x-2">
                          <ProgramIcon name="Shield" className="text-cyan-400" size={16} />
                          <span>Centro de Descargas</span>
                        </h3>
                        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                          100% Seguro
                        </span>
                      </div>

                      <div className="max-h-72 overflow-y-auto p-2 space-y-2">
                        {downloadHistory.length === 0 ? (
                          <div className="text-center py-8 text-slate-500">
                            <ProgramIcon name="Download" className="mx-auto mb-2 opacity-30" size={24} />
                            <p className="text-xs">No hay descargas activas</p>
                            <p className="text-[10px] mt-1 text-slate-600">¡Selecciona un programa y descarga libre de anuncios!</p>
                          </div>
                        ) : (
                          downloadHistory.map((item) => (
                            <div key={item.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 flex flex-col space-y-1.5">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-xs text-slate-200 line-clamp-1">{item.programName}</h4>
                                  <p className="text-[10px] text-slate-500">{item.version} • {item.size}</p>
                                </div>
                                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                  item.status === 'completed'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                }`}>
                                  {item.status === 'completed' ? 'Verificado' : 'Descargando'}
                                </span>
                              </div>

                              {item.status === 'downloading' ? (
                                <div className="space-y-1">
                                  <div className="flex justify-between text-[9px] text-slate-400">
                                    <span>Velocidad: {item.speed}</span>
                                    <span>{item.progress}%</span>
                                  </div>
                                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                    <div
                                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full transition-all duration-300"
                                      style={{ width: `${item.progress}%` }}
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-1.5 text-[9px] text-emerald-400/90">
                                  <ProgramIcon name="CheckCircle" size={10} />
                                  <span>Listo • Hash SHA-256 verificado en la nube</span>
                                </div>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu trigger */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10"
            >
              <ProgramIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="navbar-mobile-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10 px-4 pt-2 pb-4 space-y-3"
          >
            {/* Mobile Search Box */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <ProgramIcon name="Search" className="text-slate-500" size={15} />
              </span>
              <input
                id="navbar-search-mobile"
                type="text"
                placeholder="Buscar programa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs rounded-lg pl-9 pr-8 py-2 outline-none"
              />
              {searchQuery && (
                <button
                  id="navbar-clear-search-mobile"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400"
                >
                  <ProgramIcon name="X" size={14} />
                </button>
              )}
            </div>

            {/* Mobile Categories list */}
            <div className="flex flex-col space-y-1">
              <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase px-2 pb-1">Categorías</p>
              {categories.map((cat) => (
                <button
                  id={`cat-btn-mobile-${cat.id.replace(/\s+/g, '-')}`}
                  key={cat.id}
                  onClick={() => {
                    onLogoClick();
                    setActiveCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'text-cyan-400 bg-cyan-950/20 border-l-2 border-cyan-400 pl-4'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
