import React, { useState } from 'react';
import { Program } from '../types';
import { ProgramIcon } from './ProgramIcon';
import { motion, AnimatePresence } from 'motion/react';
import { slugify } from '../utils/slugify';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
  version: string;
  size: string;
  onDownloadStart: (programName: string, version: string, size: string) => string; // returns download id
  onDownloadProgress: (id: string, progress: number, status: 'downloading' | 'completed') => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  program,
  version,
  size,
  onDownloadStart,
  onDownloadProgress,
}) => {
  if (!program) return null;

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const programSlug = slugify(program.name);
    const origin = window.location.origin && window.location.origin !== 'null' ? window.location.origin : window.location.protocol + '//' + window.location.host;
    const cleanUrl = `${origin}/?program=${programSlug}`;

    const performCopy = (text: string): Promise<boolean> => {
      return new Promise((resolve) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text)
            .then(() => resolve(true))
            .catch(() => resolve(fallbackCopy(text)));
        } else {
          resolve(fallbackCopy(text));
        }
      });
    };

    const fallbackCopy = (text: string): boolean => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
      } catch (err) {
        console.error('Fallback copy failed:', err);
        return false;
      }
    };

    performCopy(cleanUrl).then((success) => {
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    });
  };

  // Limpiar el nombre del programa para quitar la versión si ya está incluida
  const escapedVersion = version.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const cleanName = program.name.replace(new RegExp(`\\s*${escapedVersion}\\s*`, 'i'), '').trim();

  // Enlaces de descarga
  const isIdm = program.id === 'idm';
  const currentVersionObj = program.versions.find(v => v.version === version);
  const defaultFallbackUrl = "https://www.youtube.com/@NodoDigitalTech";

  const megaUrl = isIdm
    ? "https://mega.nz/file/r4ABADKA#UVPPUuuWqFJWQcdp1Aak3KATj7DH0-T2ADIQDMD8Axw"
    : (currentVersionObj?.megaUrl || program.megaUrl || defaultFallbackUrl);

  const driveUrl = isIdm
    ? "https://drive.google.com/file/d/1_wAW6zRSnUHcxGwt-CA47cJPoym-62v3/view"
    : (currentVersionObj?.driveUrl || program.driveUrl || defaultFallbackUrl);

  const mediafireUrl = isIdm
    ? "https://www.mediafire.com/file/yjoydzchpbp1bj1/Internet_Download_Manager_6.43_Build_3.rar/file"
    : (currentVersionObj?.mediafireUrl || program.mediafireUrl || defaultFallbackUrl);

  const handleMegaClick = (e: React.MouseEvent) => {
    const id = onDownloadStart(program.name, version, size);
    onDownloadProgress(id, 100, 'completed');
  };

  const handleDriveClick = (e: React.MouseEvent) => {
    const id = onDownloadStart(program.name, version, size);
    onDownloadProgress(id, 100, 'completed');
  };

  const handleMediafireClick = (e: React.MouseEvent) => {
    const id = onDownloadStart(program.name, version, size);
    onDownloadProgress(id, 100, 'completed');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            id="download-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal Box */}
            <motion.div
              id="download-modal-box"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-[#050505] border border-white/10 shadow-2xl p-6 sm:p-7 overflow-hidden space-y-5 glass my-8"
            >
              {/* Top ambient glowing decoration */}
              <div className="absolute -top-10 left-1/4 w-24 h-10 bg-red-500/10 rounded-full blur-xl pointer-events-none animate-pulse" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-10 bg-emerald-500/10 rounded-full blur-xl pointer-events-none animate-pulse" />
              <div className="absolute -top-10 right-1/4 w-24 h-10 bg-blue-500/10 rounded-full blur-xl pointer-events-none animate-pulse" />

              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
              >
                <ProgramIcon name="X" size={14} />
              </button>

              {/* Title & Header */}
              <div className="text-center space-y-1 pt-2">
                <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase font-mono">
                  Servidores de Enlace Seguro
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-extrabold text-white">
                  Descargar {program.name}
                </h3>
              </div>

              {/* Interactive Download Servers Section */}
              <div className="space-y-3">
                <p className="text-[11px] text-slate-400 text-center font-sans">
                  Haz clic en cualquiera de los servidores para iniciar tu descarga:
                </p>

                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                  {/* MEGA Link (Red Glow) */}
                  <a
                    id="mega-download-button"
                    href={megaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleMegaClick}
                    className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-red-500/5 via-transparent to-transparent border border-red-500/15 hover:border-red-500/50 hover:bg-red-500/[0.05] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] cursor-pointer text-center"
                  >
                    <div className="absolute inset-4 rounded-full bg-red-500/5 filter blur-sm pointer-events-none group-hover:bg-red-500/10" />
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/mega-icon.svg"
                      alt="MEGA"
                      className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-mono font-bold text-red-400 mt-2 uppercase tracking-wider relative z-10">
                      MEGA
                    </span>
                  </a>

                  {/* Google Drive Link (Green Glow) */}
                  <a
                    id="drive-download-button"
                    href={driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDriveClick}
                    className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent border border-emerald-500/15 hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] cursor-pointer text-center"
                  >
                    <div className="absolute inset-4 rounded-full bg-emerald-500/5 filter blur-sm pointer-events-none group-hover:bg-emerald-500/10" />
                    <img
                      src="https://cloud.gmelius.com/public/logos/google/Google_Drive_Logo_512px.png"
                      alt="Google Drive"
                      className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-mono font-bold text-emerald-400 mt-2 uppercase tracking-wider relative z-10">
                      Google Drive
                    </span>
                  </a>

                  {/* Mediafire Link (Blue Glow) */}
                  <a
                    id="mediafire-download-button"
                    href={mediafireUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleMediafireClick}
                    className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent border border-blue-500/15 hover:border-blue-500/50 hover:bg-blue-500/[0.05] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] cursor-pointer text-center"
                  >
                    <div className="absolute inset-4 rounded-full bg-blue-500/5 filter blur-sm pointer-events-none group-hover:bg-blue-500/10" />
                    <img
                      src="https://images.seeklogo.com/logo-png/39/2/mediafire-logo-png_seeklogo-390015.png"
                      alt="MediaFire"
                      className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-mono font-bold text-blue-400 mt-2 uppercase tracking-wider relative z-10">
                      MediaFire
                    </span>
                  </a>
                </div>
              </div>

              {/* YouTube Promo Section */}
              <div className="p-4 rounded-2xl bg-emerald-600/[0.03] border border-emerald-500/15 text-center space-y-2 max-w-sm mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/[0.02] rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-center space-x-1.5 text-emerald-400 font-bold text-[11px] font-sans uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>¡Únete a la Comunidad!</span>
                </div>
                <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans">
                  Te invitamos a visitar el canal <strong className="text-slate-200">NodoDigitalTech</strong> para tutoriales exclusivos de instalación, soporte técnico y lo mejor de la tecnología.
                </p>
                <a
                  id="youtube-channel-button"
                  href="https://www.youtube.com/@NodoDigitalTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-[10px] rounded-lg transition-all cursor-pointer font-sans shadow-[0_0_12px_rgba(16,185,129,0.45)] hover:shadow-[0_0_18px_rgba(16,185,129,0.65)]"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Visitar Canal de YouTube</span>
                </a>
              </div>

              {/* Specifications List */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5 max-w-sm mx-auto">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-500 font-medium">Programa:</span>
                  <span className="text-slate-200 font-semibold truncate max-w-[200px]" title={cleanName}>
                    {cleanName}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-500 font-medium">Versión:</span>
                  <span className="text-slate-200 font-mono font-semibold">{version}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-500 font-medium">Peso del archivo:</span>
                  <span className="text-slate-200 font-mono font-semibold text-cyan-400">{size}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-500 font-medium">Contraseña:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1 font-sans">
                    <ProgramIcon name="Shield" size={11} className="text-emerald-400" />
                    <span>Sin contraseña</span>
                  </span>
                </div>
              </div>

              {/* Antivirus Advisory Alert */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15 text-left space-y-1.5 max-w-sm mx-auto relative overflow-hidden">
                <div className="flex items-center space-x-2 text-amber-500 font-bold text-[11px] font-sans uppercase tracking-wide">
                  <ProgramIcon name="AlertCircle" size={13} className="text-amber-500 shrink-0" />
                  <span>Aviso de Seguridad</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                  Para activar el programa de forma correcta, es necesario <strong className="text-amber-400/90 font-semibold">desactivar temporalmente tu antivirus</strong>. El sistema podría reconocer el activador como malicioso debido a un falso positivo, pero te garantizamos que es <strong className="text-slate-200 font-semibold">totalmente seguro e inofensivo</strong>.
                </p>
              </div>

              {/* Footnote and Close Action */}
              <div className="space-y-2.5 pt-1">
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    id="modal-close-action-btn"
                    onClick={onClose}
                    className="py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer font-sans"
                  >
                    Volver
                  </button>
                  <button
                    id="modal-share-action-btn"
                    onClick={handleShare}
                    className={`py-2.5 border font-bold text-xs rounded-xl transition-all cursor-pointer font-sans flex items-center justify-center space-x-1.5 select-none ${
                      copied
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:text-white hover:bg-white/10 hover:border-cyan-500/30'
                    }`}
                  >
                    <ProgramIcon name={copied ? 'Check' : 'Share2'} size={12} className={copied ? 'text-emerald-400 shrink-0' : 'text-cyan-400 shrink-0'} />
                    <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
                  </button>
                </div>
                <p className="text-[9px] text-slate-500 text-center font-sans leading-normal">
                  NodoSafe protege tu navegación. Todos nuestros enlaces son escaneados y verificados diariamente.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
