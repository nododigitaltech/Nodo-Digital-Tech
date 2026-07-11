import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ProgramIcon } from './ProgramIcon';
import { motion, AnimatePresence } from 'motion/react';
import { mockPrograms } from '../data/programs';

interface NavbarProps {
  activeCategory: string;
  setActiveCategory: (category: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onLogoClick: () => void;
  onSelectProgram: (id: string) => void;
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
  onSelectProgram,
  downloadHistory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (desktopSearchRef.current && !desktopSearchRef.current.contains(event.target as Node)) &&
        (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node))
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const matchingPrograms = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return mockPrograms.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.subcategory.toLowerCase().includes(query) ||
      p.developer.toLowerCase().includes(query)
    ).slice(0, 6);
  }, [searchQuery]);

  const showDropdown = isDropdownOpen && searchQuery.trim() !== '';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Go back to main list to show search results
      onLogoClick();
      setIsDropdownOpen(false);
      (e.target as HTMLInputElement).blur();
    }
  };

  const categories = [
    { id: 'All', label: 'Inicio' },
    { id: 'Software', label: 'Software' },
    { id: 'Juegos', label: 'Juegos' },
    { id: 'Utilidades', label: 'Utilidades' },
    { id: 'Apps Móviles', label: 'Apps Móviles' },
  ];

  const activeDownloads = downloadHistory.filter((d) => d.status === 'downloading');

  const renderSearchDropdown = () => {
    if (!showDropdown) return null;
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-[#09090b]/95 backdrop-blur-2xl border border-cyan-500/20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.9)] z-50 divide-y divide-white/[0.06] max-h-80 overflow-y-auto"
        >
          {matchingPrograms.length > 0 ? (
            <>
              <div className="px-3 py-1.5 bg-cyan-950/20 text-[10px] font-bold text-cyan-400 tracking-wider uppercase font-sans">
                Resultados coincidentes
              </div>
              {matchingPrograms.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => {
                    onSelectProgram(prog.id);
                    setSearchQuery('');
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center space-x-3 p-3 hover:bg-cyan-500/10 cursor-pointer transition-all duration-200 text-left"
                >
                  <img
                    src={prog.icon}
                    alt={prog.name}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-lg object-cover bg-slate-900 border border-white/10 shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <h4 className="text-xs font-semibold text-white truncate font-sans">{prog.name}</h4>
                    <p className="text-[10px] text-slate-400 truncate font-sans">{prog.category} • {prog.subcategory}</p>
                  </div>
                  <ProgramIcon name="ArrowLeft" size={12} className="text-cyan-500/60 rotate-180 shrink-0" />
                </div>
              ))}
              <div
                onClick={() => {
                  onLogoClick();
                  setIsDropdownOpen(false);
                }}
                className="p-2.5 text-center text-[11px] font-semibold text-cyan-400 hover:text-white hover:bg-cyan-500/10 cursor-pointer transition-all duration-200 flex items-center justify-center space-x-1.5"
              >
                <ProgramIcon name="Search" size={11} />
                <span>Ver todos los resultados (Presiona Enter)</span>
              </div>
            </>
          ) : (
            <div className="p-4 text-center">
              <p className="text-xs text-slate-400 font-sans">
                Sin coincidencias exactas para "<span className="text-cyan-400 font-medium">{searchQuery}</span>"
              </p>
              <button
                onClick={() => {
                  onLogoClick();
                  setIsDropdownOpen(false);
                }}
                className="mt-2 w-full py-1.5 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-semibold text-cyan-400 hover:text-white transition-all duration-200 flex items-center justify-center space-x-1"
              >
                <ProgramIcon name="RefreshCw" size={11} />
                <span>Buscar programas similares</span>
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

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
            <div className="hidden sm:block relative w-48 lg:w-64" ref={desktopSearchRef}>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <ProgramIcon name="Search" className="text-slate-500" size={15} />
              </span>
              <input
                id="navbar-search-input"
                type="text"
                placeholder="Buscar programa..."
                value={searchQuery}
                onFocus={() => setIsDropdownOpen(true)}
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs rounded-lg pl-9 pr-8 py-1.5 outline-none focus:ring-1 focus:ring-cyan-500/30 placeholder-slate-500 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  id="navbar-clear-search"
                  onClick={() => {
                    setSearchQuery('');
                    setIsDropdownOpen(false);
                  }}
                  className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400 hover:text-white"
                >
                  <ProgramIcon name="X" size={13} />
                </button>
              )}
              {renderSearchDropdown()}
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
            <div className="relative" ref={mobileSearchRef}>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <ProgramIcon name="Search" className="text-slate-500" size={15} />
              </span>
              <input
                id="navbar-search-mobile"
                type="text"
                placeholder="Buscar programa..."
                value={searchQuery}
                onFocus={() => setIsDropdownOpen(true)}
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 text-slate-200 text-xs rounded-lg pl-9 pr-8 py-2 outline-none"
              />
              {searchQuery && (
                <button
                  id="navbar-clear-search-mobile"
                  onClick={() => {
                    setSearchQuery('');
                    setIsDropdownOpen(false);
                  }}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400"
                >
                  <ProgramIcon name="X" size={14} />
                </button>
              )}
              {renderSearchDropdown()}
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
