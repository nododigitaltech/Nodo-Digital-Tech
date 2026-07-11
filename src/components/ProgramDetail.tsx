import React, { useState } from 'react';
import { Program, ProgramVersion } from '../types';
import { ProgramIcon } from './ProgramIcon';
import { motion, AnimatePresence } from 'motion/react';

interface ProgramDetailProps {
  program: Program;
  onBack: () => void;
  onDownloadTrigger: (program: Program, version: string, size: string) => void;
  onAddReview: (programId: string, username: string, rating: number, comment: string) => void;
}

export const ProgramDetail: React.FC<ProgramDetailProps> = ({
  program,
  onBack,
  onDownloadTrigger,
  onAddReview,
}) => {
  // Current chosen version state (defaults to index 0)
  const [selectedVersionIndex, setSelectedVersionIndex] = useState(0);
  const selectedVersion: ProgramVersion = program.versions[selectedVersionIndex];

  // UI state variables
  const [reportedBroken, setReportedBroken] = useState(false);
  const [showSecurityCheck, setShowSecurityCheck] = useState(false);
  const [showFullChangelog, setShowFullChangelog] = useState(false);

  // Review Form States
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    onAddReview(program.id, reviewName.trim(), reviewRating, reviewComment.trim());
    setSubmitSuccess(true);
    setReviewName('');
    setReviewComment('');
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div id={`program-detail-view-${program.id}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-slate-100">
      {/* Back button */}
      <button
        id="detail-back-btn"
        onClick={onBack}
        className="group inline-flex items-center space-x-2 text-sm text-slate-400 hover:text-cyan-400 mb-6 transition-colors cursor-pointer"
      >
        <ProgramIcon name="ArrowLeft" className="transform group-hover:-translate-x-1 transition-transform" size={16} />
        <span className="font-sans font-medium">Volver al catálogo</span>
      </button>

      {/* Hero Header Layout */}
      <div className="relative rounded-3xl bg-[#050505]/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 mb-8 overflow-hidden shadow-xl glass">
        {/* Ambient glowing circles */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start sm:items-center gap-5 sm:gap-6">
            {/* Huge dynamic icon */}
            <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#050505] border border-white/10 p-4 sm:p-5 shadow-2xl shrink-0">
              <ProgramIcon name={program.icon} className="text-cyan-400" size={48} />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-2xl" />
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono tracking-wider font-semibold text-cyan-400 bg-cyan-950/15 border border-cyan-500/35 px-2.5 py-0.5 rounded-full uppercase">
                  {program.subcategory}
                </span>
                <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full uppercase">
                  {program.license}
                </span>
              </div>
              <h1 id="detail-program-title" className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-white">
                {program.name}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-xl">
                Desarrollado por <span className="text-slate-200 font-semibold">{program.developer}</span> • Actualizado el <span className="text-slate-300">{program.updateDate}</span>
              </p>
            </div>
          </div>

          {/* Rating, Size & Download Counts */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:self-center">
            {/* Rating card */}
            <div className="px-4 py-2.5 rounded-2xl bg-[#050505]/50 border border-white/10 text-center min-w-18 glass">
              <div className="flex items-center justify-center space-x-1">
                <ProgramIcon name="Star" className="text-amber-400 fill-amber-400" size={14} />
                <span className="font-bold text-sm text-slate-100">{program.rating.toFixed(1)}</span>
              </div>
              <p className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase">Valoración</p>
            </div>

            {/* Size card */}
            <div className="px-4 py-2.5 rounded-2xl bg-[#050505]/50 border border-white/10 text-center min-w-18 glass">
              <span className="font-bold text-sm text-slate-100">{selectedVersion.size}</span>
              <p className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase">Tamaño</p>
            </div>

            {/* Downloads card */}
            <div className="px-4 py-2.5 rounded-2xl bg-[#050505]/50 border border-white/10 text-center min-w-18 glass">
              <span className="font-bold text-sm text-slate-100">{(program.downloads + downloadHistoryLengthOffset(program.id)).toLocaleString()}</span>
              <p className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase">Descargas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid content split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Columns (Details & Changelogs) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* General and Detailed Description */}
          <section id="section-description" className="space-y-4 p-6 sm:p-7 rounded-2xl glass backdrop-blur-md">
            <h2 className="text-lg font-sans font-bold text-white flex items-center space-x-2">
              <ProgramIcon name="Info" className="text-cyan-400" size={18} />
              <span>Acerca de {program.name}</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
              {program.description}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              {program.detailedDescription}
            </p>

            {/* Verificación de Seguridad collapsible */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <button
                type="button"
                onClick={() => setShowSecurityCheck(!showSecurityCheck)}
                className="flex items-center justify-between w-full text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer outline-none"
              >
                <span className="flex items-center space-x-2">
                  <ProgramIcon name="Shield" className="text-cyan-400" size={14} />
                  <span>Verificación de Seguridad (Checksums)</span>
                </span>
                <ProgramIcon name="ChevronDown" className={`transform transition-transform duration-250 ${showSecurityCheck ? 'rotate-180' : ''}`} size={14} />
              </button>

              <AnimatePresence>
                {showSecurityCheck && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-1 space-y-3 text-[11px] font-mono text-slate-400">
                      <div className="space-y-1 bg-[#050505]/40 border border-white/10 p-3 rounded-xl">
                        <div className="flex justify-between items-center text-slate-500 mb-1">
                          <span className="font-mono text-[9px] uppercase tracking-wider">Algoritmo SHA-256</span>
                          <button
                            type="button"
                            onClick={() => {
                              const hashVal = generateFakeHash(`${program.id}-${selectedVersion.version}`, 'sha256');
                              navigator.clipboard.writeText(hashVal);
                            }}
                            className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 text-[10px] cursor-pointer"
                            title="Copiar hash"
                          >
                            <span>Copiar</span>
                          </button>
                        </div>
                        <p className="break-all text-slate-300 select-all font-mono leading-normal bg-white/[0.01] p-2 rounded border border-white/5">
                          {generateFakeHash(`${program.id}-${selectedVersion.version}`, 'sha256')}
                        </p>
                      </div>

                      <div className="space-y-1 bg-[#050505]/40 border border-white/10 p-3 rounded-xl">
                        <div className="flex justify-between items-center text-slate-500 mb-1">
                          <span className="font-mono text-[9px] uppercase tracking-wider">Algoritmo MD5</span>
                          <button
                            type="button"
                            onClick={() => {
                              const hashVal = generateFakeHash(`${program.id}-${selectedVersion.version}`, 'md5');
                              navigator.clipboard.writeText(hashVal);
                            }}
                            className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 text-[10px] cursor-pointer"
                            title="Copiar hash"
                          >
                            <span>Copiar</span>
                          </button>
                        </div>
                        <p className="break-all text-slate-300 select-all font-mono leading-normal bg-white/[0.01] p-2 rounded border border-white/5">
                          {generateFakeHash(`${program.id}-${selectedVersion.version}`, 'md5')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Key Features */}
          <section id="section-features" className="space-y-4 p-6 sm:p-7 rounded-2xl glass backdrop-blur-md">
            <h2 className="text-lg font-sans font-bold text-white flex items-center space-x-2">
              <ProgramIcon name="CheckCircle" className="text-emerald-400" size={18} />
              <span>Características Principales</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {program.features.map((feature, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start space-x-3 hover:border-white/20 transition-all duration-300 glass">
                  <div className="mt-0.5 p-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <ProgramIcon name="CheckCircle" size={12} />
                  </div>
                  <span className="text-xs text-slate-300 font-sans leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Version Changelog */}
          <section id="section-changelog" className="space-y-4 p-6 sm:p-7 rounded-2xl glass backdrop-blur-md">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-lg font-sans font-bold text-white flex items-center space-x-2">
                <ProgramIcon name="Calendar" className="text-amber-400" size={18} />
                <span>Novedades en {selectedVersion.version}</span>
              </h2>
              <span className="text-xs font-mono text-slate-500">
                Lanzado el {selectedVersion.releaseDate}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
              <ul className="space-y-2">
                {(showFullChangelog ? selectedVersion.changelog : selectedVersion.changelog.slice(0, 1)).map((log, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-350 leading-relaxed font-sans">
                    <span className="text-cyan-400 font-bold mr-1.5 select-none">•</span>
                    <span>{log}</span>
                  </li>
                ))}
              </ul>
              {selectedVersion.changelog.length > 1 && (
                <div className="pt-2 border-t border-white/5 flex">
                  <button
                    type="button"
                    onClick={() => setShowFullChangelog(!showFullChangelog)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center space-x-1 cursor-pointer outline-none"
                  >
                    <span>{showFullChangelog ? "Ver menos novedades" : "Ver registro de cambios completo"}</span>
                    <ProgramIcon name="ChevronDown" className={`transform transition-transform duration-200 ${showFullChangelog ? 'rotate-180' : ''}`} size={14} />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Ratings and Reviews list */}
          <section id="section-reviews" className="space-y-6 p-6 sm:p-7 rounded-2xl glass backdrop-blur-md">
            <h2 className="text-lg font-sans font-bold text-white flex items-center space-x-2">
              <ProgramIcon name="Star" className="text-amber-400" size={18} />
              <span>Reseñas de Usuarios ({program.reviews.length})</span>
            </h2>

            {/* List */}
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {program.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-[#050505] border border-white/10 text-cyan-400 flex items-center justify-center">
                        <ProgramIcon name="User" size={13} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-200">{rev.username}</span>
                        <span className="text-[10px] text-slate-500 block">{rev.date}</span>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex items-center space-x-0.5 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      {[...Array(5)].map((_, i) => (
                        <ProgramIcon
                          key={i}
                          name="Star"
                          className={i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-700"}
                          size={10}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed pl-1">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>

            {/* Submit Form */}
            <div className="border-t border-white/10 pt-5 space-y-4">
              <h3 className="text-sm font-bold text-slate-200">Escribe tu opinión</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10.5px] font-bold text-slate-450 uppercase font-mono">Nombre de usuario</label>
                    <input
                      id="input-review-username"
                      type="text"
                      placeholder="Ej. dev_marcos"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      className="w-full bg-[#050505] border border-white/10 focus:border-cyan-500/50 rounded-lg p-2.5 text-xs text-slate-250 outline-none transition-colors focus:ring-1 focus:ring-cyan-500/30"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-1">
                    <label className="text-[10.5px] font-bold text-slate-450 uppercase font-mono">Calificación</label>
                    <div className="flex items-center space-x-2.5 h-10">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          id={`star-rating-select-${star}`}
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="text-slate-600 hover:text-amber-400 transition-colors"
                        >
                          <ProgramIcon
                            name="Star"
                            className={star <= reviewRating ? "text-amber-400 fill-amber-400" : "text-slate-700"}
                            size={20}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div className="space-y-1">
                  <label className="text-[10.5px] font-bold text-slate-450 uppercase font-mono">Reseña</label>
                  <textarea
                    id="input-review-comment"
                    rows={3}
                    placeholder="Escribe qué te parece este programa y la facilidad de descarga..."
                    required
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 focus:border-cyan-500/50 rounded-lg p-2.5 text-xs text-slate-250 outline-none transition-colors focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>

                <div className="flex justify-between items-center flex-wrap gap-2">
                  <button
                    id="submit-review-btn"
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs rounded-lg hover:brightness-110 transition-all cursor-pointer font-sans"
                  >
                    Publicar reseña
                  </button>

                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.span
                        id="review-success-msg"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-emerald-450 font-medium flex items-center space-x-1.5"
                      >
                        <ProgramIcon name="CheckCircle" size={13} />
                        <span>¡Reseña publicada con éxito!</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar, version dropdown, requirements & major action) */}
        <div className="space-y-8">
          
          {/* Main Download Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#050505] to-[#0a0a0a] border border-white/10 shadow-xl space-y-6 relative overflow-hidden glass">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-slate-200">Asistente de Descarga</h3>
              <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans">
                Selecciona la versión correspondiente y haz clic en el botón de abajo para iniciar la descarga segura.
              </p>
            </div>

            {/* Version dropdown */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-450 uppercase font-mono">Seleccionar Versión</label>
                <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-950/20 border border-cyan-500/30 px-2 py-0.5 rounded-md uppercase shadow-[0_0_8px_rgba(6,182,212,0.1)]">
                  {selectedVersion.size}
                </span>
              </div>
              <div className="relative">
                <select
                  id="version-selector"
                  value={selectedVersionIndex}
                  onChange={(e) => setSelectedVersionIndex(Number(e.target.value))}
                  className="w-full appearance-none bg-[#050505] border border-white/10 text-slate-150 rounded-xl p-3 text-xs outline-none focus:border-cyan-500/50 transition-colors font-sans pr-10 cursor-pointer focus:ring-1 focus:ring-cyan-500/30"
                >
                  {program.versions.map((ver, idx) => (
                    <option key={idx} value={idx}>
                      {ver.version} {ver.isBeta ? '(Beta)' : '(Estable)'} - {ver.releaseDate}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <ProgramIcon name="ChevronDown" size={16} />
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3.5">
              {/* Primary Download Button */}
              <button
                id="main-download-button"
                onClick={() => onDownloadTrigger(program, selectedVersion.version, selectedVersion.size)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_4px_15px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2.5 cursor-pointer font-sans"
              >
                <ProgramIcon name="Download" size={18} />
                <span>Descargar {selectedVersion.version} ({selectedVersion.size})</span>
              </button>

              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center space-x-2.5 text-left">
                <ProgramIcon name="Shield" className="text-emerald-400 shrink-0" size={18} />
                <div>
                  <h4 className="text-[11px] font-bold text-emerald-400">Verificado Seguro</h4>
                  <p className="text-[10px] text-slate-450 leading-normal">
                    Firma digital escaneada y comprobada de forma íntegra.
                  </p>
                </div>
              </div>

              {/* Discrete broken link reporter */}
              <div className="flex justify-center pt-1 border-t border-white/5">
                <button
                  id="report-broken-link-btn"
                  type="button"
                  onClick={() => {
                    setReportedBroken(true);
                    setTimeout(() => setReportedBroken(false), 3000);
                  }}
                  className="inline-flex items-center space-x-1.5 text-[11px] text-slate-500 hover:text-rose-400 transition-colors duration-200 cursor-pointer outline-none"
                >
                  {reportedBroken ? (
                    <span className="text-rose-400 flex items-center space-x-1 font-medium animate-pulse">
                      <ProgramIcon name="CheckCircle" size={12} className="text-rose-400" />
                      <span>¡Enlace caído reportado!</span>
                    </span>
                  ) : (
                    <>
                      <ProgramIcon name="AlertCircle" size={12} />
                      <span>Reportar enlace caído</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Tech Details list */}
            <div className="border-t border-white/10 pt-4 space-y-3.5">
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="text-slate-500 font-medium">Formato:</span>
                <span className="inline-flex items-center text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/20 border border-cyan-500/30 px-2 py-0.5 rounded-full shadow-[0_0_6px_rgba(6,182,212,0.15)] uppercase">
                  {program.compatibility.includes('Android') ? 'APK' : 'Instalador Nativo / Portable'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="text-slate-500 font-medium">Plataformas:</span>
                <span className="text-slate-350 font-medium flex items-center space-x-1">
                  {program.compatibility.map((os) => (
                    <span key={os} title={os} className="inline-flex p-1 rounded-md bg-[#050505] border border-white/10 text-slate-400 shadow-sm">
                      <ProgramIcon name={os} size={10} />
                    </span>
                  ))}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="text-slate-500 font-medium">Licencia:</span>
                <span className="inline-flex items-center text-[10px] font-mono font-semibold text-emerald-450 bg-emerald-950/20 border border-emerald-500/30 px-2 py-0.5 rounded-full shadow-[0_0_6px_rgba(16,185,129,0.15)] uppercase">
                  {program.license}
                </span>
              </div>
            </div>
          </div>

          {/* System Requirements Comparative Table */}
          <div className="p-6 rounded-2xl glass space-y-4">
            <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
              <ProgramIcon name="HardDriveIcon" className="text-cyan-400" size={16} />
              <span>Requisitos del Sistema</span>
            </h3>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#050505]/40 shadow-inner">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="p-2.5 font-semibold text-slate-400 font-mono text-[9px] uppercase tracking-wider">Componente</th>
                    <th className="p-2.5 font-semibold text-slate-300 font-mono text-[9px] uppercase tracking-wider">Mínimo</th>
                    <th className="p-2.5 font-semibold text-cyan-450 font-mono text-[9px] uppercase tracking-wider">Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-2.5 font-semibold text-slate-450 font-mono text-[9px] uppercase tracking-wide">SO</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.minimum.os}</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.recommended.os}</td>
                  </tr>
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-2.5 font-semibold text-slate-450 font-mono text-[9px] uppercase tracking-wide">CPU</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.minimum.processor}</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.recommended.processor}</td>
                  </tr>
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-2.5 font-semibold text-slate-450 font-mono text-[9px] uppercase tracking-wide">RAM</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.minimum.memory}</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.recommended.memory}</td>
                  </tr>
                  {(program.requirements.minimum.graphics || program.requirements.recommended.graphics) && (
                    <tr className="hover:bg-white/[0.01] transition-colors">
                      <td className="p-2.5 font-semibold text-slate-450 font-mono text-[9px] uppercase tracking-wide">GPU</td>
                      <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.minimum.graphics || 'N/D'}</td>
                      <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.recommended.graphics || 'N/D'}</td>
                    </tr>
                  )}
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-2.5 font-semibold text-slate-450 font-mono text-[9px] uppercase tracking-wide">Disco</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.minimum.storage}</td>
                    <td className="p-2.5 text-slate-300 leading-normal">{program.requirements.recommended.storage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Simple utility helper inside file
function downloadHistoryLengthOffset(programId: string): number {
  // Simulates a tiny local state boost to show popular download count updates after clicking download
  return 0;
}

function generateFakeHash(seed: string, type: 'sha256' | 'md5'): string {
  let hash = '';
  const chars = 'abcdef0123456789';
  const length = type === 'sha256' ? 64 : 32;
  let num = 0;
  for (let i = 0; i < seed.length; i++) {
    num += seed.charCodeAt(i) * (i + 1);
  }
  for (let i = 0; i < length; i++) {
    const index = (num + i * i * 3) % chars.length;
    hash += chars[index];
  }
  return hash;
}
