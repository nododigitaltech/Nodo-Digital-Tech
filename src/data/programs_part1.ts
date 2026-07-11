import { Program } from '../types';

export const programsPart1: Program[] = [
  {
    id: 'winrar',
    name: 'WinRAR',
    subtitle: 'El compresor y descompresor de archivos de referencia',
    category: 'Utilidades',
    subcategory: 'Compresión',
    icon: 'Archive',
    rating: 4.9,
    downloads: 345000,
    size: '3.6 MB',
    latestVersion: 'v7.23',
    compatibility: ['Windows', 'macOS', 'Linux'],
    updateDate: '2026-07-09',
    developer: 'RARLAB',
    license: 'Prueba (Shareware)',
    description: 'WinRAR es una potente herramienta de compresión, descompresión y archivado de datos con soporte para formatos RAR, ZIP y muchos otros.',
    detailedDescription: 'WinRAR destaca por su velocidad de compresión, algoritmos avanzados de cifrado AES de 256 bits y capacidad para reparar archivos dañados. Permite crear archivos divididos y autoextraíbles de manera sumamente intuitiva.',
    features: [
      'Compresión y descompresión ultrarrápida compatible con RAR, ZIP, CAB, ARJ, LZH, TAR, GZ, ACE, UUE, BZ2, JAR, ISO y 7Z.',
      'Algoritmo de cifrado avanzado AES de 256 bits para máxima confidencialidad.',
      'Herramienta integrada de reparación para rescatar archivos comprimidos corruptos.',
      'Soporte completo para archivado de gran volumen de hasta 8.589 mil millones de gigabytes.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / macOS 10.12 / Linux',
        processor: 'Intel/AMD 1.0 GHz o superior',
        memory: '512 MB RAM',
        storage: '10 MB libres'
      },
      recommended: {
        os: 'Windows 10/11 / macOS Big Sur',
        processor: 'Intel/AMD multinúcleo',
        memory: '2 GB RAM o superior',
        storage: '50 MB libres'
      }
    },
    versions: [
      {
        version: 'v7.23',
        releaseDate: '2026-07-09',
        size: '3.6 MB',
        changelog: [
          'Mejoras notables en la velocidad de compresión de archivos pequeños.',
          'Corrección de vulnerabilidades de seguridad en el procesamiento de formatos CAB.',
          'Soporte optimizado para visualización de caracteres UTF-8 en rutas largas.'
        ],
        downloadUrl: 'https://www.win-rar.com/download.html'
      },
      {
        version: 'v7.20',
        releaseDate: '2026-04-15',
        size: '3.5 MB',
        changelog: [
          'Añadida opción para extraer archivos directamente al portapapeles del sistema.',
          'Optimización en la compresión multinúcleo para procesadores modernos.'
        ],
        downloadUrl: 'https://www.win-rar.com/download.html'
      }
    ],
    reviews: [
      {
        id: 'rev-wr1',
        username: 'marcos_rar',
        rating: 5,
        date: '2026-07-10',
        comment: 'Un clásico indispensable en cualquier ordenador. Descarga limpia y directa.'
      }
    ]
  },
  {
    id: 'capcut-pro-pc',
    name: 'CapCut Pro PC',
    subtitle: 'Editor de video versátil y potenciado por Inteligencia Artificial',
    category: 'Software',
    subcategory: 'Edición de Video',
    icon: 'Video',
    rating: 4.8,
    downloads: 295000,
    size: '1.2 GB',
    latestVersion: 'v8.9.1.3802',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-08',
    developer: 'ByteDance Ltd.',
    license: 'Gratuito / Funciones Pro',
    description: 'CapCut para PC ofrece una interfaz intuitiva con potentes herramientas de edición, transiciones avanzadas y efectos de IA de última generación.',
    detailedDescription: 'Diseñado tanto para creadores de contenido de redes sociales como para editores más avanzados. Cuenta con transcripción automática de subtítulos, eliminación de fondos por IA, biblioteca musical integrada y renderizado acelerado por hardware.',
    features: [
      'Subtítulos automáticos basados en reconocimiento de voz de alta precisión en más de 20 idiomas.',
      'Eliminación inteligente de fondos e incrustación de cromas por IA en un solo clic.',
      'Inmensa biblioteca de transiciones cinematográficas, efectos visuales de tendencia y filtros de color.',
      'Soporte completo para exportación en resolución 4K a 60 fotogramas por segundo.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core i3 o equivalente',
        memory: '8 GB RAM',
        graphics: 'Intel HD Graphics 5000 o equivalente',
        storage: '5 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i7 o Apple Silicon M-Series',
        memory: '16 GB RAM o superior',
        graphics: 'NVIDIA GTX 1660 / AMD RX 580 o superior con 4GB VRAM',
        storage: '20 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: 'v8.9.1.3802',
        releaseDate: '2026-07-08',
        size: '1.2 GB',
        changelog: [
          'Mejoras en el motor de transcripción automática por voz de IA con mayor precisión de puntuación.',
          'Nueva barra de herramientas flotante de edición rápida para líneas de tiempo complejas.',
          'Optimización en el renderizado con aceleración de GPU para tarjetas gráficas de última generación.'
        ],
        downloadUrl: 'https://www.capcut.com/'
      },
      {
        version: 'v8.8.0',
        releaseDate: '2026-05-12',
        size: '1.15 GB',
        changelog: [
          'Añadidos nuevos stickers cinéticos interactivos de tendencia global.',
          'Corrección de desincronización de audio al importar formatos contenedores MKV.'
        ],
        downloadUrl: 'https://www.capcut.com/'
      }
    ],
    reviews: [
      {
        id: 'rev-cc1',
        username: 'vlog_maker',
        rating: 4.7,
        date: '2026-07-09',
        comment: 'La fluidez en PC es asombrosa, los subtítulos automáticos me ahorran horas de trabajo.'
      }
    ]
  },
  {
    id: 'fl-studio',
    name: 'FL Studio',
    subtitle: 'La estación de trabajo de audio digital para productores de éxito',
    category: 'Software',
    subcategory: 'Producción Musical',
    icon: 'Music',
    rating: 4.9,
    downloads: 184000,
    size: '950 MB',
    latestVersion: 'v26.1.0.5530',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-05',
    developer: 'Image-Line',
    license: 'Versión Completa',
    description: 'FL Studio es una suite completa de producción de música con un entorno de desarrollo integrado que facilita la composición, arreglos, grabación y mezcla.',
    detailedDescription: 'FL Studio destaca por su flujo de trabajo secuenciador por pasos (Step Sequencer) líder en el mercado, un mezclador analógico avanzado y soporte para todos los estándares VST modernos. Es la herramienta predilecta de los productores de música electrónica y urbana a nivel mundial.',
    features: [
      'Secuenciador por pasos clásico y Piano Roll ultra avanzado para composición MIDI ágil.',
      'Mezclador profesional con ruteo flexible, automatizaciones precisas y efectos integrados.',
      'Soporte completo para plugins VST 1, 2 y 3 de 32 y 64 bits para expandir tu arsenal sonoro.',
      'Actualizaciones gratuitas de por vida (Lifetime Free Updates) de forma nativa.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 / macOS 10.15',
        processor: 'Intel o AMD compatible con SSE3',
        memory: '4 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '2 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i7/i9 o AMD Ryzen 7/9 / Apple Silicon',
        memory: '16 GB RAM o superior',
        graphics: 'Gráficos dedicados compatibles con OpenGL',
        storage: '10 GB libres (SSD altamente recomendado)'
      }
    },
    versions: [
      {
        version: 'v26.1.0.5530',
        releaseDate: '2026-07-05',
        size: '950 MB',
        changelog: [
          'Nuevo plugin Kepler Exo integrado que simula sintetizadores analógicos vintage.',
          'Importantes mejoras de latencia de audio en controladores nativos ASIO.',
          'Corrección de pérdida de ruteo de efectos al abrir proyectos heredados de la versión 20.'
        ],
        downloadUrl: 'https://www.image-line.com/fl-studio-download/'
      },
      {
        version: 'v25.0.0',
        releaseDate: '2026-03-20',
        size: '912 MB',
        changelog: [
          'Rediseño visual completo de la interfaz del mezclador con soporte para pantallas táctiles de alta precisión.',
          'Integración de asistente IA para separación de pistas de voz e instrumentos.'
        ],
        downloadUrl: 'https://www.image-line.com/fl-studio-download/'
      }
    ],
    reviews: [
      {
        id: 'rev-fl1',
        username: 'beat_maker_pro',
        rating: 5,
        date: '2026-07-07',
        comment: 'Sin duda el rey absoluto de la producción de ritmos. Versión estable y sin errores.'
      }
    ]
  },
  {
    id: 'idm',
    name: 'Internet Download Manager',
    subtitle: 'El acelerador de descargas más popular del mercado',
    category: 'Utilidades',
    subcategory: 'Gestor de Descargas',
    icon: 'Download',
    rating: 4.8,
    downloads: 412000,
    size: '11 MB',
    latestVersion: 'v6.43 Build 3',
    compatibility: ['Windows'],
    updateDate: '2026-07-04',
    developer: 'Tonec Inc.',
    license: 'Prueba / Premium',
    description: 'Internet Download Manager (IDM) acelera tus descargas hasta 5 veces gracias a su tecnología de segmentación dinámica de archivos inteligente.',
    detailedDescription: 'IDM se integra a la perfección con Chrome, Edge, Firefox y otros navegadores populares. Captura enlaces multimedia automáticamente, permitiendo reanudar descargas interrumpidas por pérdida de conexión o caídas de red.',
    features: [
      'Segmentación dinámica avanzada de archivos que acelera la descarga hasta un 500%.',
      'Integración total con navegadores mediante la extensión oficial IDM Integration Module.',
      'Programador de descargas automatizado para gestionar colas en horas de menor tráfico.',
      'Capacidad de reanudación robusta para archivos incompletos o conexiones cortadas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / 8 / 10',
        processor: 'Intel/AMD 1.0 GHz o equivalente',
        memory: '512 MB RAM',
        storage: '25 MB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core o AMD de 64 bits',
        memory: '2 GB RAM o superior',
        storage: '100 MB libres'
      }
    },
    versions: [
      {
        version: 'v6.43 Build 3',
        releaseDate: '2026-07-04',
        size: '11.2 MB',
        changelog: [
          'Soporte de descarga optimizado para servidores de video streaming protegidos con TLS 1.3.',
          'Corrección del problema de integración de la barra de descarga en las últimas versiones beta de Google Chrome.',
          'Estabilización de velocidad de segmentación en conexiones de fibra de más de 1Gbps.'
        ],
        downloadUrl: 'https://www.internetdownloadmanager.com/download.html'
      },
      {
        version: 'v6.42 Build 2',
        releaseDate: '2026-05-18',
        size: '10.9 MB',
        changelog: [
          'Mejorada la captura de descargas HTTPS redirigidas por proxies seguros.',
          'Parches menores de estabilidad interna.'
        ],
        downloadUrl: 'https://www.internetdownloadmanager.com/download.html'
      }
    ],
    reviews: [
      {
        id: 'rev-idm1',
        username: 'downloader_99',
        rating: 5,
        date: '2026-07-06',
        comment: 'Descargo todo a mi máxima velocidad contratada. Un software excelente.'
      }
    ]
  },
  {
    id: 'office-2024-ltsc',
    name: 'Microsoft Office 2024 LTSC',
    subtitle: 'La suite ofimática perpetua definitiva para entornos profesionales',
    category: 'Software',
    subcategory: 'Ofimática',
    icon: 'FileText',
    rating: 4.9,
    downloads: 156000,
    size: '4.1 GB',
    latestVersion: 'v2024 LTSC',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-02',
    developer: 'Microsoft Corporation',
    license: 'LTSC (Soporte a Largo Plazo)',
    description: 'Microsoft Office 2024 LTSC reúne las versiones perpetuas de Word, Excel, PowerPoint, Outlook y Access optimizadas para estabilidad absoluta.',
    detailedDescription: 'Office 2024 LTSC ofrece herramientas avanzadas de análisis de datos en Excel, mejor accesibilidad, un rendimiento fluido y la garantía de un software sin suscripciones obligatorias ni conexiones persistentes requeridas.',
    features: [
      'Contiene Word, Excel, PowerPoint, Outlook, Access y OneNote 2024 optimizados.',
      'Soporte a largo plazo LTSC garantizando actualizaciones de seguridad mensuales.',
      'Nuevas fórmulas matriciales, gráficos dinámicos y funciones lógicas avanzadas en Excel.',
      'Interfaz de usuario modernizada con soporte mejorado para temas oscuros integrales.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 / macOS 11+',
        processor: 'Dual Core 1.6 GHz o superior',
        memory: '4 GB RAM',
        graphics: 'Gráficos compatibles con DirectX 9 o posterior con WDDM 2.0',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Quad Core 2.0 GHz o superior',
        memory: '8 GB RAM o superior',
        graphics: 'Gráficos DirectX 12 compatibles con WDDM 2.0',
        storage: '10 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: 'v2024 LTSC',
        releaseDate: '2026-07-02',
        size: '4.1 GB',
        changelog: [
          'Lanzamiento oficial comercial con parches de seguridad acumulativos actualizados al mes de julio.',
          'Importante mejora en el rendimiento al abrir hojas de cálculo Excel masivas de más de 500k filas.',
          'Añadida compatibilidad nativa con imágenes en formato vectorial SVG avanzado en PowerPoint.'
        ],
        downloadUrl: 'https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft-office-volume-licensing'
      },
      {
        version: 'v2021 LTSC',
        releaseDate: '2024-09-15',
        size: '3.8 GB',
        changelog: [
          'Versión anterior estable con parches de seguridad de compatibilidad y soporte garantizados.'
        ],
        downloadUrl: 'https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft-office-volume-licensing'
      }
    ],
    reviews: [
      {
        id: 'rev-of1',
        username: 'oficina_pyme',
        rating: 5,
        date: '2026-07-05',
        comment: 'Instalado y activado sin ningún tipo de problemas. Excelente rendimiento en Word y Excel.'
      }
    ]
  },
  {
    id: 'mas-scripts',
    name: 'Microsoft Activation Scripts',
    subtitle: 'Herramienta de código abierto líder para activación de sistemas Microsoft',
    category: 'Utilidades',
    subcategory: 'Activación',
    icon: 'Terminal',
    rating: 4.9,
    downloads: 512000,
    size: '450 KB',
    latestVersion: 'v3.12',
    compatibility: ['Windows'],
    updateDate: '2026-06-28',
    developer: 'Massgrave',
    license: 'Código Abierto (GPL)',
    description: 'Microsoft Activation Scripts (MAS) es un activador de Windows y Office mediante métodos HWID, KMS38 y Online KMS, enfocado en transparencia y limpieza de código.',
    detailedDescription: 'MAS es ampliamente reconocido por ser el activador más seguro del mundo. Al ser de código abierto y basado en scripts de consola (.cmd), no contiene troyanos ni archivos binarios sospechosos. Ofrece activación permanente real en Windows y licencias por volumen en Office de forma instantánea.',
    features: [
      'Activación permanente de Windows por HWID (Licencia Digital real vinculada al hardware).',
      'Activación de Windows 10/11 hasta el año 2038 utilizando el método robusto KMS38.',
      'Activación de Office 2013 a 2024 LTSC mediante servidores locales seguros Online KMS.',
      'Código 100% visible, sin empaquetados .exe sospechosos, totalmente libre de falsos positivos.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / 8 / 8.1 / 10 / 11 / Server',
        processor: 'Cualquier procesador x86/x64/ARM64',
        memory: '256 MB RAM',
        storage: '1 MB libre'
      },
      recommended: {
        os: 'Windows 10 o Windows 11',
        processor: 'Cualquier procesador',
        memory: '512 MB RAM',
        storage: '5 MB libres'
      }
    },
    versions: [
      {
        version: 'v3.12',
        releaseDate: '2026-06-28',
        size: '450 KB',
        changelog: [
          'Soporte completo añadido para el método de licencia digital HWID en Windows 11 24H2.',
          'Corrección de problemas menores de ruteo de red en servidores KMS en línea para Office 2024 LTSC.',
          'Traducciones y mensajes mejorados en el menú interactivo principal de consola.'
        ],
        downloadUrl: 'https://github.com/massgravel/Microsoft-Activation-Scripts/releases'
      },
      {
        version: 'v3.10',
        releaseDate: '2026-02-15',
        size: '430 KB',
        changelog: [
          'Optimizada la velocidad de detección de licencias pre-existentes en el sistema.'
        ],
        downloadUrl: 'https://github.com/massgravel/Microsoft-Activation-Scripts/releases'
      }
    ],
    reviews: [
      {
        id: 'rev-mas1',
        username: 'sysadmin_lucas',
        rating: 5,
        date: '2026-07-01',
        comment: 'La mejor herramienta jamás creada para activaciones. Súper limpia, segura y fácil de auditar.'
      }
    ]
  },
  {
    id: 'iobit-uninstaller',
    name: 'IObit Uninstaller Pro',
    subtitle: 'Desinstalador profesional de programas y restos persistentes',
    category: 'Utilidades',
    subcategory: 'Desinstalación',
    icon: 'Trash2',
    rating: 4.7,
    downloads: 142000,
    size: '32 MB',
    latestVersion: 'v15.5.0.11',
    compatibility: ['Windows'],
    updateDate: '2026-06-25',
    developer: 'IObit',
    license: 'Pro / Licencia Comercial',
    description: 'IObit Uninstaller Pro elimina programas rebeldes, extensiones de navegador no deseadas y registros huérfanos con extrema facilidad.',
    detailedDescription: 'Gracias a su potente escáner de profundidad, detecta hasta un 50% más de restos de aplicaciones que el desinstalador estándar de Windows. Monitoriza instalaciones en tiempo real para deshacer cualquier cambio de forma limpia.',
    features: [
      'Eliminación de programas obstinados de forma masiva en un solo proceso.',
      'Limpieza automática de restos, carpetas huérfanas y claves del Registro corruptas.',
      'Monitor de instalación en tiempo real para registrar cambios de registros físicos.',
      'Gestor avanzado para desinstalar plugins maliciosos o extensiones no deseadas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows XP / Vista / 7 / 8 / 10',
        processor: 'Intel/AMD 500 MHz o superior',
        memory: '512 MB RAM',
        storage: '100 MB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core o AMD Ryzen de 64 bits',
        memory: '2 GB RAM o superior',
        storage: '300 MB libres'
      }
    },
    versions: [
      {
        version: 'v15.5.0.11',
        releaseDate: '2026-06-25',
        size: '32.4 MB',
        changelog: [
          'Algoritmo de escaneo profundo potenciado para rastrear restos de suites de diseño complejas como Adobe y Autodesk.',
          'Actualizada la base de datos de detección de plugins maliciosos con más de 200 nuevas firmas.',
          'Se solucionó un problema de desinstalación de aplicaciones nativas de la tienda de Windows.'
        ],
        downloadUrl: 'https://www.iobit.com/en/advanceduninstaller.php'
      },
      {
        version: 'v15.0.0',
        releaseDate: '2026-02-10',
        size: '31.1 MB',
        changelog: [
          'Mejora de la interfaz visual adaptada para pantallas 4K.',
          'Módulo de salud de software optimizado para actualizar dependencias antiguas.'
        ],
        downloadUrl: 'https://www.iobit.com/en/advanceduninstaller.php'
      }
    ],
    reviews: [
      {
        id: 'rev-iu1',
        username: 'clean_pc_expert',
        rating: 4.8,
        date: '2026-06-30',
        comment: 'Excelente software para purgar programas de Autodesk que suelen dejar basura por todos lados.'
      }
    ]
  },
  {
    id: 'filmora',
    name: 'Wondershare Filmora',
    subtitle: 'El editor de video moderno, sencillo y potente para creadores',
    category: 'Software',
    subcategory: 'Edición de Video',
    icon: 'Film',
    rating: 4.8,
    downloads: 215000,
    size: '580 MB',
    latestVersion: 'v15.6.12',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-22',
    developer: 'Wondershare Technology',
    license: 'Versión Completa',
    description: 'Wondershare Filmora ofrece un entorno de edición de vídeo extremadamente amigable con cientos de efectos visuales, plantillas preconfiguradas y filtros cinemáticos.',
    detailedDescription: 'Filmora es ideal para creadores que necesitan resultados rápidos y profesionales. Incluye herramientas automatizadas de IA como reencuadre inteligente, rastreo de movimiento, sincronización automática de música y edición de texto por voz.',
    features: [
      'Línea de tiempo magnética intuitiva con soporte de hasta 100 pistas simultáneas.',
      'Efectos, stickers y títulos animados listos para arrastrar y soltar.',
      'Herramientas avanzadas de Corrección de Color y combinación de clips inteligente.',
      'Pantalla dividida, clave cromática de fondo de precisión y transiciones 3D fluidas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core i3 o AMD Ryzen 3 a 2.0 GHz',
        memory: '8 GB RAM',
        graphics: 'Intel UHD Graphics 620 o dedicada con 2GB VRAM',
        storage: '2 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i7 o AMD Ryzen 7 / Apple Silicon',
        memory: '16 GB RAM o superior',
        graphics: 'NVIDIA GTX 1060 / AMD RX 570 o superior con 4GB VRAM',
        storage: '10 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: 'v15.6.12',
        releaseDate: '2026-06-22',
        size: '580 MB',
        changelog: [
          'Nuevo módulo IA Text-to-Video que genera borradores automáticos basados en texto descriptivo.',
          'Importante mejora de velocidad en exportaciones HEVC utilizando decodificadores Nvidia NVENC duales.',
          'Se agregaron 150 nuevos filtros de color graduados cinematográficos.'
        ],
        downloadUrl: 'https://filmora.wondershare.net/'
      },
      {
        version: 'v15.0.0',
        releaseDate: '2026-01-10',
        size: '550 MB',
        changelog: [
          'Rediseño completo de la suite de edición de audio integrada con reducción de ruido por IA de precisión.'
        ],
        downloadUrl: 'https://filmora.wondershare.net/'
      }
    ],
    reviews: [
      {
        id: 'rev-fm1',
        username: 'video_fan',
        rating: 4.8,
        date: '2026-06-24',
        comment: 'Muy fácil de usar. Mi canal de YouTube ha crecido un montón usando las plantillas de Filmora.'
      }
    ]
  },
  {
    id: 'lightroom-classic',
    name: 'Adobe Lightroom Classic 2026',
    subtitle: 'El estándar de oro en edición, retoque y catalogación fotográfica',
    category: 'Software',
    subcategory: 'Fotografía',
    icon: 'Image',
    rating: 4.9,
    downloads: 165000,
    size: '1.8 GB',
    latestVersion: '2026 v15.4.1',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-19',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Lightroom Classic te proporciona potentes herramientas y controles avanzados para que tus fotos se vean espectaculares. Organiza fotos de forma eficaz en tu escritorio.',
    detailedDescription: 'Optimizado para flujos de trabajo profesionales. Ofrece herramientas de selección inteligente de sujetos y cielos por IA, eliminación de ruido digital mediante algoritmos neuronales, perfiles de color Raw de nivel profesional y soporte para catálogos masivos de millones de fotos sin retrasos.',
    features: [
      'Edición y revelado no destructivo de archivos RAW de las marcas de cámaras líderes.',
      'Selección de máscara inteligente con un solo clic (Sujeto, Cielo, Fondo, Personas) potenciada por IA.',
      'Eliminación de ruido por IA (Denoise) integrada con resultados limpios a ISOs altísimos.',
      'Organización avanzada mediante reconocimiento facial y metadatos GPS incorporados.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit (v22H2) / macOS 12+',
        processor: 'Intel o AMD con soporte de 64 bits, 2 GHz',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con DirectX 12 o Metal con 2 GB de VRAM',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD multinúcleo rápido (Apple Silicon M-Series)',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada compatible con DirectX 12 con 4 GB de VRAM o superior',
        storage: '15 GB libres (SSD de alta velocidad)'
      }
    },
    versions: [
      {
        version: '2026 v15.4.1',
        releaseDate: '2026-06-19',
        size: '1.8 GB',
        changelog: [
          'Integrada la última versión del motor de reducción de ruido neuronal acelerado por hardware.',
          'Soporte nativo Raw añadido para los sensores de más de 35 cámaras lanzadas en 2026.',
          'Optimizado el rendimiento de carga y refresco de vista en cuadrícula de catálogos masivos de más de 100k imágenes.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop-lightroom.html'
      },
      {
        version: '2025 v14.0.0',
        releaseDate: '2025-10-12',
        size: '1.7 GB',
        changelog: [
          'Añadida la herramienta de desenfoque de lente interactiva para generar bokeh realista por mapas de profundidad.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop-lightroom.html'
      }
    ],
    reviews: [
      {
        id: 'rev-lr1',
        username: 'photo_wild',
        rating: 5,
        date: '2026-06-21',
        comment: 'Mi herramienta de trabajo diario. La optimización en procesadores Apple Silicon es simplemente perfecta.'
      }
    ]
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve Studio',
    subtitle: 'La suite de edición de video, efectos y corrección de color profesional de Hollywood',
    category: 'Software',
    subcategory: 'Edición de Video',
    icon: 'Clapperboard',
    rating: 4.9,
    downloads: 154000,
    size: '3.4 GB',
    latestVersion: 'v21.0.2',
    compatibility: ['Windows', 'macOS', 'Linux'],
    updateDate: '2026-06-15',
    developer: 'Blackmagic Design',
    license: 'Studio (Completo)',
    description: 'DaVinci Resolve es la única solución del mundo que combina edición, corrección de color, efectos visuales, gráficos en movimiento y posproducción de audio en una sola herramienta.',
    detailedDescription: 'Su motor de procesamiento de color de 32 bits en coma flotante patentado ofrece una fidelidad tonal inigualable. La versión Studio incluye el motor neuronal DaVinci Neural Engine, soporte para video HDR, renderizado 3D esteroscópico e innumerables plugins premium.',
    features: [
      'Módulos especializados: Edición, Montaje rápido, Color, Efectos Fusion, Audio Fairlight y Entrega.',
      'Corrección de color HDR avanzada y herramientas de graduación cromática líderes del cine.',
      'Efectos visuales Fusion en espacio 3D real con compositor mediante nodos de alta velocidad.',
      'Procesamiento acelerado por hardware para codificar y decodificar formatos H.264, H.265 y ProRes.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+ / Linux CentOS 7.3',
        processor: 'Intel Core i7 o AMD Ryzen 7 o superior',
        memory: '16 GB RAM',
        graphics: 'GPU dedicada compatible con CUDA 11 / OpenCL o Metal con 4 GB de VRAM',
        storage: '5 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i9 o AMD Ryzen 9 / Apple Silicon Ultra',
        memory: '32 GB RAM o superior',
        graphics: 'GPU dedicada de última generación (RTX 4070 / RX 7800 XT) con 8 GB de VRAM o superior',
        storage: '20 GB libres en SSD NVMe'
      }
    },
    versions: [
      {
        version: 'v21.0.2',
        releaseDate: '2026-06-15',
        size: '3.4 GB',
        changelog: [
          'Soporte completo para importación y decodificación de perfiles de cámara Blackmagic RAW de última generación.',
          'Importantes correcciones de estabilidad en el módulo de audio Fairlight al mezclar proyectos de más de 120 canales.',
          'Optimización en el corrector de color automático asistido por redes de aprendizaje DaVinci Neural.'
        ],
        downloadUrl: 'https://www.blackmagicdesign.com/products/davinciresolve'
      },
      {
        version: 'v20.0.0',
        releaseDate: '2025-11-20',
        size: '3.2 GB',
        changelog: [
          'Nueva línea de tiempo colaborativa multiusuario de baja latencia mediante servidores locales.'
        ],
        downloadUrl: 'https://www.blackmagicdesign.com/products/davinciresolve'
      }
    ],
    reviews: [
      {
        id: 'rev-dv1',
        username: 'cinema_color',
        rating: 5,
        date: '2026-06-18',
        comment: 'La mejor herramienta de etalonaje del mundo. La versión Studio de esta web funciona excelente con aceleración por GPU.'
      }
    ]
  },
  {
    id: 'virtualbox',
    name: 'VirtualBox',
    subtitle: 'La plataforma de virtualización multiplataforma y de código abierto',
    category: 'Utilidades',
    subcategory: 'Virtualización',
    icon: 'Cpu',
    rating: 4.8,
    downloads: 125000,
    size: '142 MB',
    latestVersion: 'v7.2.12',
    compatibility: ['Windows', 'macOS', 'Linux'],
    updateDate: '2026-06-10',
    developer: 'Oracle Corporation',
    license: 'Código Abierto (GPLv2)',
    description: 'VirtualBox permite ejecutar múltiples sistemas operativos (Windows, Linux, macOS) simultáneamente en una sola máquina sin alterar tu sistema principal.',
    detailedDescription: 'Oracle VM VirtualBox es una herramienta empresarial de virtualización robusta pero ligera para x86 y AMD64/Intel64. Ofrece excelente soporte para dispositivos de red virtuales, carpetas compartidas fluidas, aceleración 3D experimental e integración de pantalla completa sin retardos.',
    features: [
      'Soporte completo para virtualizar sistemas de 32 y 64 bits de forma nativa.',
      'Excelente integración mediante VirtualBox Guest Additions para compartir portapapeles y archivos.',
      'Soporte avanzado para clonación de instantáneas (Snapshots) para restaurar estados en segundos.',
      'Virtualización de puertos USB 2.0 y 3.0 para interactuar con periféricos de forma directa.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 / macOS Big Sur / Ubuntu LTS',
        processor: 'Intel o AMD con soporte de virtualización por hardware (VT-x o AMD-V)',
        memory: '4 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '500 MB libres para el programa (más almacenamiento de las VMs)'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD Ryzen multinúcleo con virtualización activada en BIOS',
        memory: '16 GB RAM o superior',
        graphics: 'Gráficos con soporte para aceleración 3D experimental',
        storage: '100 GB libres en SSD (para el almacenamiento fluido de las máquinas virtuales)'
      }
    },
    versions: [
      {
        version: 'v7.2.12',
        releaseDate: '2026-06-10',
        size: '142 MB',
        changelog: [
          'Soporte completo mejorado para la virtualización estable de núcleos de Linux v6.15+.',
          'Corrección de un error que provocaba la caída repentina del audio en sistemas de alojamiento macOS ARM.',
          'Actualización de seguridad importante en el módulo de red NAT integrado.'
        ],
        downloadUrl: 'https://www.virtualbox.org/wiki/Downloads'
      },
      {
        version: 'v7.1.0',
        releaseDate: '2026-03-05',
        size: '138 MB',
        changelog: [
          'Añadida la capacidad de clonar y empaquetar sistemas virtuales directamente a la nube de Oracle de forma segura.'
        ],
        downloadUrl: 'https://www.virtualbox.org/wiki/Downloads'
      }
    ],
    reviews: [
      {
        id: 'rev-vb1',
        username: 'sys_admin_pedro',
        rating: 4.8,
        date: '2026-06-12',
        comment: 'Una herramienta imprescindible para probar distribuciones de Linux de forma segura antes de instalarlas.'
      }
    ]
  }
];
