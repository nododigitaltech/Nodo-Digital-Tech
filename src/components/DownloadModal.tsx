import React, { useState, useEffect } from 'react';
import { Program } from '../types';
import { ProgramIcon } from './ProgramIcon';
import { motion, AnimatePresence } from 'motion/react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
  version: string;
  size: string;
  onDownloadStart: (programName: string, version: string, size: string) => string; // returns download id
  onDownloadProgress: (id: string, progress: number, status: 'downloading' | 'completed') => void;
}

type DownloadPhase = 'scans' | 'connecting' | 'downloading' | 'completed';

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

  const [phase, setPhase] = useState<DownloadPhase>('scans');
  const [selectedServer, setSelectedServer] = useState('Nodo-Mirror 1 [EE.UU. Gigabit]');
  
  const selectedVersionObj = program.versions.find((v) => v.version === version);
  const [scanSteps, setScanSteps] = useState<{ label: string; checked: boolean }[]>([
    { label: 'Analizando malware y troyanos', checked: false },
    { label: 'Verificando firma digital del desarrollador', checked: false },
    { label: 'Calculando Checksum SHA-256', checked: false },
  ]);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState('0 MB/s');
  const [downloadId, setDownloadId] = useState<string | null>(null);

  // Run security checks when modal opens
  useEffect(() => {
    if (!isOpen) return;

    setPhase('scans');
    setProgress(0);
    setScanSteps([
      { label: 'Analizando malware y troyanos', checked: false },
      { label: 'Verificando firma digital del desarrollador', checked: false },
      { label: 'Calculando Checksum SHA-256', checked: false },
    ]);

    // Step 1 check
    const t1 = setTimeout(() => {
      setScanSteps((prev) => [
        { ...prev[0], checked: true },
        prev[1],
        prev[2],
      ]);
    }, 700);

    // Step 2 check
    const t2 = setTimeout(() => {
      setScanSteps((prev) => [
        prev[0],
        { ...prev[1], checked: true },
        prev[2],
      ]);
    }, 1400);

    // Step 3 check
    const t3 = setTimeout(() => {
      setScanSteps((prev) => [
        prev[0],
        prev[1],
        { ...prev[2], checked: true },
      ]);
    }, 2100);

    // Transition to Connecting
    const t4 = setTimeout(() => {
      setPhase('connecting');
    }, 2800);

    // Transition to Downloading
    const t5 = setTimeout(() => {
      setPhase('downloading');
      // Register in App's active downloads list
      const id = onDownloadStart(program.name, version, size);
      setDownloadId(id);
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isOpen, program, version, size]);

  // Handle progress increments
  useEffect(() => {
    if (phase !== 'downloading' || !downloadId) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 12) + 5, 100);
        
        // Randomize speed reading
        const currentSpeed = (Math.random() * 20 + 25).toFixed(1);
        setSpeed(`${currentSpeed} MB/s`);

        if (next >= 100) {
          clearInterval(interval);
          setPhase('completed');
          onDownloadProgress(downloadId, 100, 'completed');
          
          // Trigger actual clean dummy text download so browser actually registers some physical download
          triggerMockFileDownload(program.name, version);

          // Open external download page in new tab
          if (selectedVersionObj?.downloadUrl) {
            try {
              window.open(selectedVersionObj.downloadUrl, '_blank');
            } catch (e) {
              console.log("Popup blocked:", e);
            }
          }
        } else {
          onDownloadProgress(downloadId, next, 'downloading');
        }

        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [phase, downloadId]);

  const triggerMockFileDownload = (pName: string, pVer: string) => {
    try {
      const text = `--- NODO DIGITAL TECH ---\n\n¡Gracias por descargar ${pName} ${pVer} desde Nodo Digital Tech!\n\nEste es un archivo de verificación de descarga limpia.\n\nInstrucciones Generales de Instalación:\n1. Descomprime o ejecuta el instalador oficial.\n2. No requieres desactivar tu antivirus. Nuestros instaladores están 100% libres de malware.\n3. Disfruta de tu software sin publicidad molestosa.\n\nÚnete a nuestro canal tecnológico para estar al día de las últimas actualizaciones.`;
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${pName.toLowerCase().replace(/\s+/g, '_')}_${pVer}_nodo_digital.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.log("Mock download skipped due to environment limits");
    }
  };

  const getInstructions = () => {
    if (program.compatibility.includes('Windows')) {
      return (
        <ul className="space-y-1.5 text-[11px] text-slate-400 font-sans list-disc list-inside">
          <li>Ejecuta el archivo descargado para iniciar el asistente oficial de instalación.</li>
          <li>Puedes mantener tu antivirus activo; el software ha sido validado con hash seguro.</li>
          <li>Sigue los pasos predeterminados y finaliza la instalación limpia.</li>
        </ul>
      );
    } else if (program.compatibility.includes('Android')) {
      return (
        <ul className="space-y-1.5 text-[11px] text-slate-400 font-sans list-disc list-inside">
          <li>Transfiere el archivo APK a tu dispositivo o ábrelo directamente en tu celular.</li>
          <li>Permite la opción de "Instalar desde fuentes desconocidas" en los ajustes de seguridad.</li>
          <li>Instala la aplicación de forma segura.</li>
        </ul>
      );
    } else {
      return (
        <ul className="space-y-1.5 text-[11px] text-slate-400 font-sans list-disc list-inside">
          <li>Descomprime el archivo empaquetado en tu directorio preferido.</li>
          <li>Ejecuta el binario ejecutable principal o el instalador del paquete.</li>
          <li>Sigue las instrucciones descritas en el archivo README.txt adjunto.</li>
        </ul>
      );
    }
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
            onClick={phase === 'completed' || phase === 'scans' ? onClose : undefined}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Modal Box */}
            <motion.div
              id="download-modal-box"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-[#050505] border border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden space-y-6 glass"
            >
              {/* Top ambient glowing decoration */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-10 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />

              {/* Close Button */}
              {(phase === 'completed' || phase === 'scans') && (
                <button
                  id="close-modal-btn"
                  onClick={onClose}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <ProgramIcon name="X" size={14} />
                </button>
              )}

              {/* Title & Program Overview */}
              <div className="text-center space-y-1.5">
                <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase font-mono">
                  NodoSafe Portal Seguro
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white">
                  Instalando {program.name}
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Versión: <span className="text-slate-200 font-semibold">{version}</span> • Tamaño: <span className="text-slate-200 font-semibold">{size}</span>
                </p>
              </div>

              {/* Phase 1: Security Scanning */}
              {phase === 'scans' && (
                <div className="space-y-4 py-3">
                  <div className="flex flex-col items-center justify-center space-y-3.5">
                    {/* Spinning Tech Loader */}
                    <div className="relative flex items-center justify-center w-14 h-14">
                      <div className="absolute inset-0 rounded-full border-4 border-white/5" />
                      <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" />
                      <ProgramIcon name="Shield" className="text-cyan-400" size={24} />
                    </div>
                    <span className="text-xs text-slate-300 font-bold font-mono">Realizando auditoría de seguridad...</span>
                  </div>

                  {/* Scan Items checkmarks */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
                    {scanSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-sans">{step.label}</span>
                        {step.checked ? (
                          <span className="text-emerald-450 font-semibold flex items-center space-x-1">
                            <ProgramIcon name="CheckCircle" size={12} />
                            <span className="text-[10px] font-mono">Listo</span>
                          </span>
                        ) : (
                          <span className="text-slate-600 animate-pulse font-mono text-[10px]">Analizando...</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Phase 2: Connecting to Servers */}
              {phase === 'connecting' && (
                <div className="space-y-4 py-4 text-center">
                  <div className="flex flex-col items-center justify-center space-y-3.5">
                    {/* Pulsing connections icon */}
                    <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 animate-pulse">
                      <ProgramIcon name="Activity" size={26} />
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-300 font-bold font-mono">Conectando a mirror seguro</h4>
                      <p className="text-[10px] text-slate-500 font-sans mt-0.5">Estableciendo canal cifrado SSL/TLS con servidor dedicado</p>
                    </div>
                  </div>

                  {/* Server settings dropdown */}
                  <div className="space-y-2 text-left p-3.5 rounded-xl bg-white/[0.02] border border-white/10 max-w-sm mx-auto">
                    <label className="text-[9.5px] font-bold text-slate-500 uppercase font-mono">Servidor Seleccionado</label>
                    <select
                      id="server-selector-modal"
                      value={selectedServer}
                      onChange={(e) => setSelectedServer(e.target.value)}
                      className="w-full bg-[#050505] border border-white/10 text-slate-200 text-xs rounded-lg p-2 outline-none cursor-pointer"
                    >
                      <option>Nodo-Mirror 1 [EE.UU. Gigabit Directo]</option>
                      <option>Nodo-Mirror 2 [Alemania Frankfurt Premium]</option>
                      <option>Nodo-P2P Cloud [Protocolo descentralizado torrent]</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Phase 3: Active Download */}
              {phase === 'downloading' && (
                <div className="space-y-5 py-2">
                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-end text-xs font-sans">
                      <span className="text-slate-400">Descargando desde {selectedServer.split(' ')[0]}</span>
                      <span className="font-bold text-cyan-400 text-sm">{progress}%</span>
                    </div>

                    {/* Outer Bar */}
                    <div className="w-full h-3.5 rounded-full bg-white/5 p-0.5 border border-white/10 overflow-hidden">
                      {/* Inner Glowing Process Bar */}
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 relative shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      >
                        {/* Glow effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/40 blur-xs rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Transfer Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-center p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono">Velocidad</span>
                      <p className="font-bold text-sm text-slate-200 mt-0.5">{speed}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono">Canal Seguro</span>
                      <p className="font-bold text-sm text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
                        <ProgramIcon name="Shield" size={12} />
                        <span>SSL Activo</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Phase 4: Download Completed & Guide */}
              {phase === 'completed' && (
                <div className="space-y-5 py-1">
                  <div className="flex flex-col items-center justify-center space-y-3 text-center">
                    {/* Glowing success circle */}
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <ProgramIcon name="CheckCircle" size={30} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-400 font-sans">¡Descarga Completada Exitosamente!</h4>
                      <p className="text-[11px] text-slate-400 font-sans mt-0.5">El archivo ha sido verificado con su Hash SHA-256 local.</p>
                    </div>
                  </div>

                  {/* External Redirection / Link */}
                  {selectedVersionObj?.downloadUrl && (
                    <div className="p-3.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex flex-col items-center justify-center space-y-2 text-center">
                      <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                        La simulación de descarga ha finalizado de forma segura. Si el enlace de descarga externo no se abrió de forma automática, puedes acceder haciendo clic aquí:
                      </p>
                      <a
                        href={selectedVersionObj.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs rounded-lg transition-all"
                      >
                        <ProgramIcon name="ExternalLink" size={12} />
                        <span>Acceder a la Descarga Externa</span>
                      </a>
                    </div>
                  )}

                  {/* Instructions Box */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider block">
                      Instrucciones de Instalación
                    </span>
                    {getInstructions()}
                  </div>

                  {/* Main buttons */}
                  <div className="flex gap-3">
                    <button
                      id="guide-close-modal"
                      onClick={onClose}
                      className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold text-xs rounded-xl transition-all cursor-pointer font-sans"
                    >
                      Cerrar ventana
                    </button>
                    <button
                      id="guide-redownload"
                      onClick={() => {
                        setPhase('scans');
                        setProgress(0);
                      }}
                      className="flex-1 py-3 bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:border-transparent font-bold text-xs rounded-xl transition-all cursor-pointer font-sans"
                    >
                      Volver a descargar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
