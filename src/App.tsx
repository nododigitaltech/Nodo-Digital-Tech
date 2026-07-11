import React, { useState, useMemo } from 'react';
import { mockPrograms } from './data/programs';
import { Program } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramCard } from './components/ProgramCard';
import { ProgramDetail } from './components/ProgramDetail';
import { DownloadModal } from './components/DownloadModal';
import { ProgramIcon } from './components/ProgramIcon';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Reactive list of programs in state
  const [programs, setPrograms] = useState<Program[]>(mockPrograms);

  // Filter States
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOS, setSelectedOS] = useState<string>('All');

  // Navigation State
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  // Download Simulation Tracker
  const [downloadHistory, setDownloadHistory] = useState<{
    id: string;
    programName: string;
    version: string;
    status: 'completed' | 'downloading';
    progress: number;
    speed?: string;
    size: string;
  }[]>([]);

  // Active Download Modal States
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedProgramForDownload, setSelectedProgramForDownload] = useState<Program | null>(null);
  const [selectedVersionForDownload, setSelectedVersionForDownload] = useState('');
  const [selectedSizeForDownload, setSelectedSizeForDownload] = useState('');

  // Handle Review Submission
  const handleAddReview = (programId: string, username: string, rating: number, comment: string) => {
    setPrograms((prevPrograms) =>
      prevPrograms.map((prog) => {
        if (prog.id !== programId) return prog;

        const newReview = {
          id: `rev-local-${Date.now()}`,
          username,
          rating,
          date: new Date().toISOString().split('T')[0],
          comment,
        };

        const updatedReviews = [newReview, ...prog.reviews];
        // Recalculate average rating
        const totalRating = updatedReviews.reduce((acc, curr) => acc + curr.rating, 0);
        const newAverage = parseFloat((totalRating / updatedReviews.length).toFixed(1));

        return {
          ...prog,
          reviews: updatedReviews,
          rating: newAverage,
        };
      })
    );
  };

  // Download simulation actions
  const handleDownloadStart = (programName: string, version: string, size: string): string => {
    const id = `dl-${Date.now()}`;
    setDownloadHistory((prev) => [
      {
        id,
        programName,
        version,
        status: 'downloading',
        progress: 0,
        speed: 'Conectando...',
        size,
      },
      ...prev,
    ]);

    // Also increment download count on program (simulated)
    if (selectedProgramForDownload) {
      setPrograms(prev => prev.map(p => {
        if (p.id === selectedProgramForDownload.id) {
          return { ...p, downloads: p.downloads + 1 };
        }
        return p;
      }));
    }

    return id;
  };

  const handleDownloadProgress = (id: string, progress: number, status: 'downloading' | 'completed') => {
    setDownloadHistory((prev) =>
      prev.map((dl) => {
        if (dl.id !== id) return dl;
        return {
          ...dl,
          progress,
          status,
          speed: status === 'completed' ? undefined : `${(Math.random() * 20 + 25).toFixed(1)} MB/s`,
        };
      })
    );
  };

  const handleTriggerDownloadModal = (program: Program, version: string, size: string) => {
    setSelectedProgramForDownload(program);
    setSelectedVersionForDownload(version);
    setSelectedSizeForDownload(size);
    setDownloadModalOpen(true);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSelectedOS('All');
  };

  // Quick tag search trigger
  const handleQuickSearch = (tag: string) => {
    setSearchQuery(tag);
    setSelectedProgramId(null); // Go back to Home if in detail view
  };

  // Get currently selected program object
  const selectedProgram = useMemo(() => {
    return programs.find((p) => p.id === selectedProgramId) || null;
  }, [programs, selectedProgramId]);

  // Filtered Programs list
  const filteredPrograms = useMemo(() => {
    return programs.filter((prog) => {
      // Category Filter
      if (activeCategory !== 'All' && prog.category !== activeCategory) {
        return false;
      }

      // OS Compatibility Filter
      if (selectedOS !== 'All' && !prog.compatibility.includes(selectedOS as any)) {
        return false;
      }

      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = prog.name.toLowerCase().includes(query);
        const matchesSubtitle = prog.subtitle.toLowerCase().includes(query);
        const matchesSubcategory = prog.subcategory.toLowerCase().includes(query);
        const matchesDeveloper = prog.developer.toLowerCase().includes(query);
        const matchesDescription = prog.description.toLowerCase().includes(query);

        return matchesName || matchesSubtitle || matchesSubcategory || matchesDeveloper || matchesDescription;
      }

      return true;
    });
  }, [programs, activeCategory, selectedOS, searchQuery]);

  // Featured programs (subset of highest rated ones)
  const featuredPrograms = useMemo(() => {
    return [...programs]
      .sort((a, b) => b.rating - a.rating || b.downloads - a.downloads)
      .slice(0, 3);
  }, [programs]);

  return (
    <div id="root-app-container" className="min-h-screen bg-[#050505] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Translucent Fixed Navbar */}
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onLogoClick={() => setSelectedProgramId(null)}
        downloadHistory={downloadHistory}
      />

      {/* Main Content Body */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          {!selectedProgram ? (
            // HOME VIEW
            <motion.div
              id="home-view-container"
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Jumbotron/Hero */}
              <Hero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onQuickSearch={handleQuickSearch}
              />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
                
                {/* OS Filter & Catalog Title Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-5">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-sans font-bold text-white flex items-center space-x-2.5">
                      <ProgramIcon name="Activity" className="text-cyan-400" size={20} />
                      <span>
                        {activeCategory === 'All' ? 'Catálogo General' : activeCategory}
                      </span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                      {filteredPrograms.length} {filteredPrograms.length === 1 ? 'programa disponible' : 'programas disponibles'} en Nodo Digital
                    </p>
                  </div>

                  {/* Compatibility OS Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase mr-1">Compatibilidad:</span>
                    {['All', 'Windows', 'macOS', 'Linux', 'Android'].map((os) => (
                      <button
                        id={`os-filter-${os}`}
                        key={os}
                        onClick={() => setSelectedOS(os)}
                        className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
                          selectedOS === os
                            ? 'bg-[#22d3ee] text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                            : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {os !== 'All' && <ProgramIcon name={os} size={11} />}
                        <span>{os === 'All' ? 'Todos los OS' : os}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* FEATURED SECTION (Only show on Home first tab without active search) */}
                {activeCategory === 'All' && searchQuery === '' && selectedOS === 'All' && (
                  <section id="section-featured-grid" className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <ProgramIcon name="Star" className="text-amber-400 fill-amber-400" size={18} />
                      <h3 className="text-lg font-sans font-extrabold text-white">Programas Destacados</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {featuredPrograms.map((prog) => (
                        <div key={prog.id} className="relative group">
                          {/* Top Glow bar for featured look */}
                          <div className="absolute inset-x-5 -top-px h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 blur-[0.5px]" />
                          <ProgramCard
                            program={prog}
                            onSelect={setSelectedProgramId}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* PROGRAM CATALOG CATALOG */}
                <section id="section-catalog-grid" className="space-y-6">
                  {activeCategory === 'All' && searchQuery === '' && selectedOS === 'All' && (
                    <div className="flex items-center space-x-2">
                      <ProgramIcon name="Clock" className="text-emerald-400" size={18} />
                      <h3 className="text-lg font-sans font-extrabold text-white">Últimas Actualizaciones</h3>
                    </div>
                  )}

                  {filteredPrograms.length === 0 ? (
                    /* NO RESULTS STATE */
                    <div className="text-center py-16 px-4 glass rounded-3xl backdrop-blur-md max-w-lg mx-auto space-y-4">
                      <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 inline-block">
                        <ProgramIcon name="AlertCircle" size={32} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">No se encontraron resultados</h4>
                        <p className="text-xs text-slate-400 max-w-xs mx-auto">
                          Prueba ajustando los términos de búsqueda, cambiando la categoría o seleccionando otro sistema operativo compatible.
                        </p>
                      </div>
                      <button
                        id="reset-filters-btn"
                        onClick={handleResetFilters}
                        className="px-4 py-2 bg-cyan-950/20 border border-cyan-500/35 text-cyan-400 text-xs font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-950 hover:border-transparent transition-all cursor-pointer font-sans"
                      >
                        Restablecer filtros
                      </button>
                    </div>
                  ) : (
                    /* GRID CATALOG */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPrograms.map((prog) => (
                        <ProgramCard
                          key={prog.id}
                          program={prog}
                          onSelect={setSelectedProgramId}
                        />
                      ))}
                    </div>
                  )}
                </section>

              </div>
            </motion.div>
          ) : (
            // PROGRAM DETAIL VIEW
            <motion.div
              id="detail-view-wrapper"
              key={`detail-${selectedProgram.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProgramDetail
                program={selectedProgram}
                onBack={() => setSelectedProgramId(null)}
                onDownloadTrigger={handleTriggerDownloadModal}
                onAddReview={handleAddReview}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Futuristic Secure Footer */}
      <footer id="footer-main" className="bg-[#050505] border-t border-white/5 py-10 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex justify-center items-center space-x-1.5 text-slate-400 font-semibold font-sans">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Nodo Digital Tech • NodoSafe v4.0 Active Protection</span>
          </div>
          <p className="max-w-md mx-auto leading-relaxed">
            Plataforma dedicada a la recopilación y distribución limpia de utilidades digitales libres de virus, acortadores abusivos o malware de terceros. Todos los derechos reservados © 2026.
          </p>
          <div className="flex justify-center space-x-4 text-[11px] text-slate-600">
            <a href="#" className="hover:text-cyan-400 transition-colors">Términos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Canal de Confianza</a>
          </div>
        </div>
      </footer>

      {/* Global Interactive Secure Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        program={selectedProgramForDownload}
        version={selectedVersionForDownload}
        size={selectedSizeForDownload}
        onDownloadStart={handleDownloadStart}
        onDownloadProgress={handleDownloadProgress}
      />
    </div>
  );
}
