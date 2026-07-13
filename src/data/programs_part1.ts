import { Program } from '../types';

export const programsPart1: Program[] = [
  {
    id: 'winrar',
    name: 'Winrar 7.23',
    subtitle: 'El compresor y descompresor de archivos de referencia',
    category: 'Utilidades',
    subcategory: 'Compresión',
    icon: '/images/logos/WinRAR Logo.png',
    rating: 4.9,
    downloads: 345000,
    size: '3.76 MB',
    latestVersion: '7.23',
    compatibility: ['Windows', 'macOS', 'Linux'],
    updateDate: '2026-06-30',
    developer: 'RARLAB',
    license: 'Completa',
    description: 'WinRAR es la herramienta definitiva para abrir, comprimir y descomprimir ficheros y descargas adjuntas.',
    detailedDescription: 'WinRAR es la herramienta definitiva para abrir, comprimir y descomprimir ficheros y descargas adjuntas. Está diseñado para ahorrar tanto espacio en disco como tiempo al momento de enviar y recibir archivos a través de Internet o al realizar copias de seguridad. Es un programa líder a nivel mundial que destaca por su versatilidad, alta compatibilidad con múltiples formatos y una robusta seguridad en el manejo de datos.',
    features: [
      'Potente y Eficiente: Ofrece relaciones de compresión técnicamente superiores a la media, especialmente eficientes en ficheros ejecutables, bibliotecas de objetos y archivos grandes de texto. Cuenta además con la modalidad de compresión sólida.',
      'Gran Capacidad (Escalable): Es compatible con archivos masivos de hasta 9.000 Petabytes. El número de archivos que se pueden archivar es, a efectos prácticos, ilimitado gracias a su manejo de ficheros de 64 bits.',
      'Versatilidad: Permite crear archivos divididos en varias partes (multi-volumen) de cualquier tamaño, así como archivos auto-extraíbles programables o auto-extraíbles multi-volumen.',
      'Ideal para Copias de Seguridad: Permite automatizar operaciones mediante una interfaz de línea de órdenes, almacenar múltiples versiones de un archivo y añadir información redundante para facilitar la recuperación de datos ante posibles fallos.',
      'Seguridad Avanzada: Protección con contraseña mediante el cifrado Rijndael (AES-256), bloqueo contra modificaciones no deseadas, funciones de recuperación de archivos dañados, verificación antivirus configurable y borrado seguro para eliminar datos sensibles.',
      'Económico y Justo: Sus licencias son válidas de por vida, cubriendo cualquier versión actual y futura, para cualquier sistema operativo e idioma. Los usuarios domésticos pueden usar una licencia en todos sus equipos personales.',
      'Fácil de Usar: Incluye un asistente intuitivo para usuarios noveles, integración completa con el Explorador de Windows, y ayuda/soporte técnico totalmente en castellano.',
      'Alta Compatibilidad: Soporta plenamente archivos ZIP 2.0 y permite descomprimir una gran variedad de formatos, incluyendo CAB, ARJ, LZH, TAR, GZ, ACE, UUE, BZ2, ISO, JAR, Z y 7Z, además de atributos NTFS, flujos de datos y nombres en formato Unicode. Está traducido a más de 40 idiomas.'
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
        version: '7.23',
        releaseDate: '2026-06-30',
        size: '3.76 MB',
        changelog: [
          'Se ha revertido al estado anterior a la versión 7.20 el método para eliminar ficheros de archivos sólidos para finalizar el arreglo en WinRAR 7.21 y evitar errores potenciales en la suma de control.'
        ],
        downloadUrl: 'https://mega.nz/file/flZ3TQ7K#A6S9xnR0NFzPRoO4L2RhLdxdQD2Dq5ZNJHoTago-HSE',
        megaUrl: 'https://mega.nz/file/flZ3TQ7K#A6S9xnR0NFzPRoO4L2RhLdxdQD2Dq5ZNJHoTago-HSE',
        driveUrl: 'https://drive.google.com/file/d/1ggmJTFvbMwsCrDLoK5h4uE3UEreP3Ujb/view?usp=drive_link',
        mediafireUrl: 'https://www.mediafire.com/file/syvwba0ljwxlfun/WinRAR_7.23.rar/file'
      }
    ],
    pricing: [
      {
        title: 'LICENCIA PERSONAL',
        options: [
          { plan: 'Uso Personal (1 PC/Usuario)', price: 'US$29' }
        ]
      },
      {
        title: 'LICENCIA ESTUDIANTES',
        options: [
          { plan: 'Uso Personal (1 PC/Usuario)', price: 'US$21.75' }
        ]
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
    ],
    screenshots: [
      '/images/Winrar 7.23.png'
    ],
    officialUrl: 'https://winrar.es/'
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
    name: 'Internet Download Manager 6.43 Build 5',
    subtitle: 'El acelerador de descargas más popular del mercado',
    category: 'Utilidades',
    subcategory: 'Gestor de Descargas',
    icon: 'https://i0.wp.com/webkumal.com/storage/2023/03/idm.webp?fit=200%2C200&ssl=1',
    rating: 4.8,
    downloads: 412000,
    size: '11.8 MB',
    latestVersion: '6.43 Build 5',
    compatibility: ['Windows'],
    updateDate: '2026-07-11',
    developer: 'Tonec Inc.',
    license: 'De Pago',
    format: 'Instalador Oficial',
    fileType: 'RAR',
    language: 'Español',
    downloadType: 'Gratis',
    officialUrl: 'https://www.internetdownloadmanager.com/',
    description: 'Internet Download Manager (IDM) es una herramienta potente y fácil de usar diseñada para aumentar la velocidad de tus descargas hasta 8 veces, organizar archivos y recuperar descargas interrumpidas.',
    detailedDescription: 'Gracias a su innovadora tecnología de segmentación dinámica inteligente de archivos, IDM divide el contenido en partes durante el proceso de descarga y reutiliza las conexiones disponibles sin fases adicionales de inicio de sesión, garantizando el máximo rendimiento en todo momento.\n\nYa sea que descargues archivos pesados, música, software o videos, Internet Download Manager optimiza el uso de tu ancho de banda para ofrecerte una experiencia rápida, segura y sin interrupciones.',
    features: [
      'Aceleración de velocidad extrema: Multiplica la velocidad de tus descargas mediante un motor lógico inteligente de descarga por partes.',
      'Recuperación y continuación de descargas: ¿Se cortó el internet o se apagó la computadora? No te preocupes. IDM reanuda las descargas interrumpidas o rotas desde el punto exacto donde se detuvieron, evitando que tengas que empezar de cero.',
      'Integración perfecta con navegadores: Se acopla de manera automática y fluida en Microsoft Edge, Google Chrome, Mozilla Firefox, Opera y muchos más para capturar y gestionar tus descargas al instante.',
      'Descarga de videos en línea: Detecta automáticamente contenido multimedia y videos en reproductores web para que puedas descargarlos con un solo clic.',
      'Programador de tareas integrado (Scheduler): Te permite programar IDM para conectarse a una hora específica, descargar los archivos que deseas, desconectarse o incluso apagar la PC al finalizar.',
      'Organización y categorías: Clasifica automáticamente tus descargas en categorías personalizadas para mantener tus archivos siempre en orden.'
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
        version: '6.43 Build 5',
        releaseDate: '2026-07-11',
        size: '11.8 MB',
        changelog: [
          'Se corrigió un error que a veces provocaba que el Explorador de Windows se bloqueara.',
          'Se solucionó un problema que provocaba que el panel de descargas de IDM no apareciera en algunos sitios web.',
          'Se han solucionado problemas relacionados con el proxy/VPN que impedían que apareciera el panel "Descargar este vídeo" o provocaban errores 403 en algunos sitios web.'
        ],
        downloadUrl: 'https://mega.nz/file/WowiDZCA#FxjhuDrZ61U4zUJOFcgVpJ1FMDWN7XQiLk61qcj7dyo',
        megaUrl: 'https://mega.nz/file/WowiDZCA#FxjhuDrZ61U4zUJOFcgVpJ1FMDWN7XQiLk61qcj7dyo',
        driveUrl: 'https://drive.google.com/file/d/1gL6kk3BgjB0UH2hrkcXo4XpOQYXvazsA/view?usp=drive_link',
        mediafireUrl: 'https://www.mediafire.com/file/u6et89kfbipru2g/Internet_Download_Manager_6.43_Build_5.rar/file'
      }
    ],
    pricing: [
      {
        title: 'Opciones para 1 PC',
        options: [
          { plan: 'Licencia de 1 año (para 1 PC)', price: 'US$11.95' },
          { plan: 'Licencia de por vida (para 1 PC)', price: 'US$24.95' }
        ]
      },
      {
        title: 'Opciones para 2 o más PCs',
        options: [
          { plan: 'Licencia de 1 año (para cada PC)', price: 'US$9.95' },
          { plan: 'Licencia de por vida (para cada PC)', price: 'US$19.95' }
        ]
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
    ],
    screenshots: [
      '/images/IDM 6.43 Build 5 Registrado.jpg',
      '/images/IDM 6.43 Build 5 Versión.jpg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=oVNT55d8LpI&t=3s'
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
    icon: '/images/logos/IObit Uninstaller PRO Logo.png',
    rating: 4.7,
    downloads: 142000,
    size: '43.1 MB',
    latestVersion: '15.0.0.4',
    compatibility: ['Windows'],
    updateDate: '2025-08-20',
    developer: 'IObit',
    license: 'PRO',
    description: 'IObit Uninstaller es una herramienta fantástica diseñada para la desinstalación de software, que proporciona un método fácil y seguro para eliminar por completo programas no deseados, extensiones de navegador maliciosas o publicitarias, así como aplicaciones de Windows.',
    detailedDescription: 'IObit Uninstaller es una herramienta fantástica diseñada para la desinstalación de software, que proporciona un método fácil y seguro para eliminar por completo programas no deseados, extensiones de navegador maliciosas o publicitarias, así como aplicaciones de Windows, lo que le ayuda a mantener su PC limpio y garantiza una experiencia de navegación en línea fluida y segura.',
    features: [
      'Desinstalación Completa y Potente: Detecta y remueve con precisión software obstinado, paquetes de instalación inútiles (bundleware) y aplicaciones difíciles mediante un motor optimizado.',
      'Limpieza Profunda de Restos: Escanea de forma automática y elimina rastros residuales, archivos temporales y modificaciones del sistema de programas previamente borrados o interrumpidos.',
      'Monitor de Instalación en Tiempo Real: Registra y audita todos los cambios que un instalador realiza en el sistema operativo para poder revertirlos de forma limpia si la aplicación no es deseada.',
      'Gestión y Seguridad de Navegadores: Identifica y remueve extensiones basadas en anuncios o complementos maliciosos, además de bloquear notificaciones emergentes molestas de sitios web en Chrome, Firefox, Edge, etc.',
      'Desinstalación por Lotes (Bulk Uninstall): Permite seleccionar y desinstalar múltiples programas y aplicaciones al mismo tiempo con un solo clic.',
      'Actualizador y Salud de Software: Gestiona permisos, limpia archivos de instalación obsoletos y permite actualizar programas importantes de forma centralizada.'
    ],
    requirements: {
      minimum: {
        os: 'Windows XP, Vista, 7, 8, 8.1, 10 y Windows 11',
        processor: 'CPU de 1 GHz',
        memory: '512 MB de RAM',
        storage: '100 MB'
      },
      recommended: {
        os: 'Windows 10 o Windows 11 de 64 bits',
        processor: 'Procesador de doble núcleo a 1.5 GHz o superior',
        memory: '2 GB de RAM o más',
        storage: '200 MB'
      }
    },
    versions: [
      {
        version: '15.0.0.4',
        releaseDate: '2025-08-20',
        size: '43.1 MB',
        changelog: [
          'Motor de desinstalación mejorado para una eliminación de programas más rápida y completa',
          'Desinstalación silenciosa mejorada para ser más automática sin necesidad de operaciones manuales',
          'Base de datos de programas difíciles ampliada para admitir la eliminación de más de 4000 programas difíciles',
          'Estado del software optimizado para una limpieza residual más profunda y una detección más precisa del impacto del software en el rendimiento del sistema',
          'Compatibilidad añadida con sistemas ARM',
          'Dos temas: oscuro y claro',
          '39 idiomas compatibles'
        ],
        downloadUrl: 'https://www.iobit.com/es/advanceduninstallerpro.php'
      }
    ],
    pricing: [
      {
        title: 'LICENCIA PRO',
        options: [
          { plan: 'Suscripción de 1 Año (3 PCs)', price: 'EUR 17.99' }
        ]
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
    ],
    officialUrl: 'https://www.iobit.com/es/advanceduninstallerpro.php'
  },
  {
    id: 'filmora',
    name: 'Wondershare Filmora',
    subtitle: 'El editor de video moderno, sencillo y potente para creadores',
    category: 'Software',
    subcategory: 'Edición de Video',
    icon: '/images/logos/Filmora Logo.png',
    rating: 4.8,
    downloads: 215000,
    size: '752 MB',
    latestVersion: '15.3.3',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-03-10',
    developer: 'Wondershare Technology',
    license: 'Versión Completa',
    description: 'Wondershare Filmora es un software de edición de video multiplataforma y multifuncional diseñado tanto para creadores principiantes como avanzados, destacando por integrar de forma fluida herramientas impulsadas por inteligencia artificial (IA) que reducen el esfuerzo en tareas técnicas complejas.',
    detailedDescription: 'Wondershare Filmora es un software de edición de video multiplataforma y multifuncional diseñado tanto para creadores principiantes como avanzados, destacando por integrar de forma fluida herramientas impulsadas por inteligencia artificial (IA) que reducen el esfuerzo en tareas técnicas complejas. Es el editor de video con IA que simplifica la edición profesional. La tecnología de inteligencia artificial se integra perfectamente en el flujo de trabajo de la línea de tiempo para automatizar procesos pesados, permitiendo que cualquier usuario obtenga un control creativo rápido, inteligente y de alta calidad sin necesidad de contar con experiencia avanzada.',
    features: [
      'Editor de video con IA: Filmora simplifica la edición profesional mediante la integración perfecta de la inteligencia artificial en el flujo de trabajo de la línea de tiempo.',
      'Recorte inteligente con IA: Permite aislar sujetos o eliminar fondos de manera automática y precisa fotograma a fotograma, sin necesidad de usar pantalla verde.',
      'Eliminador de voz con IA: Separa las voces y la música de fondo con un solo clic para lograr una edición de sonido más limpia y flexible.',
      'Mejorador de video con IA: Permite equilibrar colores, aumentar la nitidez y mejorar los detalles visuales de las grabaciones al instante.',
      'Texto a voz: Convierte texto escrito en narraciones realistas utilizando diversos tonos e idiomas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7, 8, 8.1, 10 y 11 de 64 bits',
        processor: 'Intel i3 (2 GHz o superior)',
        memory: '8 GB de RAM',
        graphics: 'Tarjeta gráfica compatible con 2 GB de VRAM',
        storage: '10 GB de espacio'
      },
      recommended: {
        os: 'Windows 10/11 de 64 bits',
        processor: 'Procesador multicore reciente (Intel 6.ª Gen o superior)',
        memory: '16 GB de RAM o más',
        graphics: 'Tarjeta gráfica dedicada con 4 GB de VRAM',
        storage: 'Almacenamiento SSD'
      }
    },
    versions: [
      {
        version: '15.3.3',
        releaseDate: '2026-03-10',
        size: '752 MB',
        changelog: [
          'Herramienta Cuentagotas HSL (Pipette HSL): Permite hacer clic con una pipeta sobre cualquier color específico dentro del video para aislarlo, modificando su tono, saturación y luminancia sin alterar el resto de los colores.',
          'Nuevas Ruedas Cromáticas HDR: Se ampliaron las opciones de gradación de color añadiendo 6 ruedas cromáticas para control milimétrico sobre luces, sombras y tonos medios en clips de alto rango dinámico.',
          'Soporte para Colores Degradados: El editor de color ahora permite aplicar gradientes directamente en títulos y capas de ajuste.',
          'Transiciones AIGC: Nuevas transiciones generadas por Inteligencia Artificial que toman como base el primer y el último fotograma de los clips adyacentes para cambios fluidos.',
          'Rediseño de la Interfaz de Grabación: Barra de herramientas de grabación de pantalla más limpia y con opción de ocultarse automáticamente.',
          'Gestión de Proyectos Optimizada: Permite renombrar archivos y modificar las rutas de guardado directamente desde la interfaz activa.',
          'Gráficos Animados Mejorados: Soporte para mostrar datos en porcentajes, control sobre longitud de ejes y mayor resolución al exportar tablas o estadísticas.'
        ],
        downloadUrl: 'https://filmora.wondershare.es/'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Prueba Gratuita', price: 'Gratis' },
          { plan: 'Plan Trimestral', price: 'US$19.99' },
          { plan: 'Plan Anual Avanzado', price: 'US$44.99' },
          { plan: 'Plan Perpetuo', price: 'US$69.99' }
        ]
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
    icon: '/images/logos/Adobe Lightroom Logo.png',
    rating: 4.9,
    downloads: 165000,
    size: '1.8 GB',
    latestVersion: '15.4.1',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-18',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Lightroom es un ecosistema integral y un servicio de gestión fotográfica basado en la nube e independiente del dispositivo, diseñado específicamente para optimizar tanto el flujo de trabajo de fotógrafos aficionados como profesionales.',
    detailedDescription: 'Adobe Lightroom es un ecosistema integral y un servicio de gestión fotográfica basado en la nube e independiente del dispositivo, diseñado específicamente para optimizar tanto el flujo de trabajo de fotógrafos aficionados como profesionales. Su núcleo operativo gira en torno a un flujo de trabajo de revelado digital no destructivo, lo que significa que todas las modificaciones aplicadas desde el balance de blancos y la exposición hasta complejas gradaciones de color se almacenan como metadatos en lugar de alterar los datos puros y originales del archivo RAW capturado por el sensor de la cámara. Esto permite a los creadores experimentar libremente con el contraste, la saturación y la nitidez manteniendo intacta la integridad de la fuente original en todo momento.',
    features: [
      'Revelado Digital y Control Cromático de Alta Precisión: Permite ajustar con minuciosidad parámetros de exposición, sombras, altas luces, curvas de tonos paramétricas e independientes, y perfiles de color específicos para calibrar la respuesta tonal de diferentes cámaras.',
      'Tecnología de Enmascaramiento y Selección por IA: Integra herramientas inteligentes impulsadas por inteligencia artificial que detectan de manera automatizada y precisa elementos complejos en la escena como sujetos, fondos, cielos, ropa o rasgos faciales específicos para aplicar correcciones localizadas sin necesidad de realizar selecciones manuales exhaustivas.',
      'Gestión Inteligente de Biblioteca y Metadatos: Clasifica y filtra volúmenes masivos de imágenes utilizando un sistema automatizado de valoraciones mediante estrellas, etiquetas de color, metadatos personalizados, palabras clave y algoritmos de reconocimiento facial que agrupan a las personas de forma automática.',
      'Sincronización Transversal en la Nube: Almacena de manera segura tanto los archivos originales de alta resolución como los historiales de edición directamente en la infraestructura en la nube de Adobe, permitiendo iniciar el proceso de selección y postproducción en un dispositivo móvil o tableta y continuarlo fluidamente en una computadora de escritorio.',
      'Automatización Mediante Preajustes (Presets) y Edición en Lote: Facilita la aplicación instantánea de estilos visuales prediseñados con un solo clic y permite propagar o sincronizar ajustes complejos de manera simultánea en cientos de fotografías para acelerar drásticamente los plazos de entrega.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v22H2 / Windows 11',
        processor: 'Intel o AMD de 2 GHz (SSE 4.2, 64-bit) / ARM (emulación)',
        memory: '8 GB de RAM',
        graphics: 'GPU compatible con DirectX 12 con 2 GB de VRAM',
        storage: '8 GB libres'
      },
      recommended: {
        os: 'Windows 10 v22H2 / Windows 11 v23H2+',
        processor: 'Intel o AMD con AVX2 (64-bit)',
        memory: '16 GB de RAM o más',
        graphics: 'GPU compatible con DirectX 12 (4 GB VRAM para 4K, 8 GB VRAM para funciones de IA)',
        storage: 'SSD rápido para instalación y caché'
      }
    },
    versions: [
      {
        version: '15.4.1',
        releaseDate: '2026-06-18',
        size: '1.8 GB',
        changelog: [
          'Identificar imágenes duplicadas en el catálogo automáticamente: Detecta de forma automática las fotos duplicadas dentro de tu catálogo en Lightroom Classic y las agrupa en pilas para facilitar su revisión y limpieza posterior.',
          'Optimizar la selección centrada en personas con el panel Caras: Permite revisar las puntuaciones y los detalles de enfoque y estado de los ojos de cada persona detectada en las fotografías para seleccionar con rapidez las mejores tomas de una sesión.',
          'Seleccionar sujetos con mayor precisión al enmascarar: Ofrece una detección de sujetos mejorada para separar al sujeto de fondos complejos con un nivel de precisión superior, logrando máscaras más limpias y veloces.',
          'Aplicar los metadatos con IA y las colecciones inteligentes: Permite filtrar y organizar las imágenes dentro de tu biblioteca aprovechando nuevos filtros de metadatos impulsados por inteligencia artificial y colecciones inteligentes.',
          'Sincronizar palabras clave con el ecosistema de Lightroom: Sincroniza las palabras clave asignadas a las fotografías en Lightroom Classic directamente con las versiones de escritorio, web y móvil de Lightroom.',
          'Edite fotos de nuevas cámaras compatibles: Amplía la lista de perfiles disponibles para incluir las cámaras añadidas recientemente.',
          'Explora la compatibilidad con nuevos objetivos: Incorpora nuevos perfiles de lentes agregados recientemente a la lista de compatibilidad.',
          'Explorar pinceles optimizados para enmascarar: Proporciona un rendimiento mucho más fluido y receptivo al momento de crear y detallar máscaras con los pinceles.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop-lightroom.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$17.99' },
          { plan: 'Plan anual', price: 'US$119.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/products/photoshop-lightroom.html'
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve Studio',
    subtitle: 'La suite de edición de video, efectos y corrección de color profesional de Hollywood',
    category: 'Software',
    subcategory: 'Edición de Video',
    icon: '/images/logos/DaVinci Resolve Studio Logo.png',
    rating: 4.9,
    downloads: 154000,
    size: '3.4 GB',
    latestVersion: '21.0.2',
    compatibility: ['Windows', 'macOS', 'Linux'],
    updateDate: '2026-07-01',
    developer: 'Blackmagic Design',
    license: 'Studio (Completo)',
    description: 'DaVinci Resolve es una solución de software avanzada e integral que combina en una sola aplicación herramientas de edición profesional, etalonaje (corrección de color), efectos visuales, animaciones gráficas y postproducción de audio. Cuenta con una interfaz moderna y elegante que resulta rápida de aprender para nuevos usuarios, a la vez que potente para los profesionales. Permite trabajar con mayor rapidez y calidad al no tener que cambiar de software o aprender múltiples aplicaciones para diferentes tareas. Además, ofrece colaboración en tiempo real mediante bibliotecas de proyectos y Blackmagic Cloud.',
    detailedDescription: 'DaVinci Resolve es una solución de software avanzada e integral que combina en una sola aplicación herramientas de edición profesional, etalonaje (corrección de color), efectos visuales, animaciones gráficas y postproducción de audio. Cuenta con una interfaz moderna y elegante que resulta rápida de aprender para nuevos usuarios, a la vez que potente para los profesionales. Permite trabajar con mayor rapidez y calidad al no tener que cambiar de software o aprender múltiples aplicaciones para diferentes tareas. Además, ofrece colaboración en tiempo real mediante bibliotecas de proyectos y Blackmagic Cloud.\n\nEs el editor de video con IA que simplifica la edición profesional. La tecnología de inteligencia artificial se integra perfectamente en el flujo de trabajo de la línea de tiempo para automatizar procesos pesados, permitiendo que cualquier usuario obtenga un control creativo rápido, inteligente y de alta calidad sin necesidad de contar con experiencia avanzada.',
    features: [
      'Edición (Páginas Cut y Edit): Herramientas de edición profesionales para crear historias rápidamente, incluyendo recorte automático, edición basada en texto impulsada por IA, y cientos de títulos, efectos y transiciones.',
      'Corrección de Color (Página Color y Photo): El sistema de etalonaje más avanzado de la industria con opciones primarias y secundarias, efecto de reiluminación (Relight FX), máscaras de objetos intuitivas, mapas de profundidad 3D y compatibilidad con HDR y archivos RAW.',
      'Efectos Visuales y Gráficos (Página Fusion): Creación de efectos visuales cinematográficos y animaciones gráficas basadas en nodos, con herramientas 2D y 3D, partículas, seguimiento de cámara y funciones de rotoscopia.',
      'Audio (Página Fairlight): Módulo de audio profesional que soporta hasta 2,000 pistas con efectos en tiempo real, edición de gran precisión, reemplazo automático de diálogos (ADR) y masterización en formatos envolventes 3D.',
      'Gestión de Medios y Exportación (Páginas Media y Deliver): Espacios dedicados para organizar material, sincronizar clips, añadir metadatos y gestionar opciones avanzadas de exportación con cola de procesamiento.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10, macOS 12 Monterey o Linux (CentOS/Rocky)',
        processor: 'Intel Core i7 o AMD Ryzen 7 o superior',
        memory: '16 GB de RAM (32 GB para Fusion)',
        graphics: 'GPU de 4 GB VRAM (OpenCL 1.2 / CUDA 12.8)',
        storage: '80 GB libres en SSD'
      },
      recommended: {
        os: 'Windows 11 o macOS Sonoma / Sequoia',
        processor: 'Intel Core i9 o AMD Ryzen 9 / Apple Silicon',
        memory: '32 GB de RAM o más (ideal para 4K e IA)',
        graphics: 'GPU dedicada de 8 GB a 16 GB VRAM (RTX / Radeon)',
        storage: 'SSD NVMe de alta velocidad'
      }
    },
    versions: [
      {
        version: '21.0.2',
        releaseDate: '2026-07-01',
        size: '3.4 GB',
        changelog: [
          'Nueva página "Photo" (Fotografía): Integra un espacio de trabajo dedicado a la importación, gestión, recorte y etalonaje de fotografías estáticas utilizando flujos basados en nodos.',
          'IntelliSearch impulsado por IA: Herramienta de búsqueda para localizar clips u objetos específicos utilizando lenguaje natural o palabras clave basadas en diálogos.',
          'CineFocus: Ajuste sintético de la profundidad de campo con control de enfoque dinámico.',
          'Face Age Transformer y Face Reshaper: Aplica efectos de envejecimiento/rejuvenecimiento o remodelación facial con rastreo automático.',
          'AI Speech Generator y AI UltraSharpen: Generación de voces realistas desde texto o reescalado y mejora de nitidez con IA.',
          'Mejoras en el flujo de trabajo de la línea de tiempo y Fusion: Animaciones de fotogramas clave simplificadas y edición de efectos Fusion desde la página de edición.'
        ],
        downloadUrl: 'https://www.blackmagicdesign.com/mx/products/davinciresolve/studio'
      }
    ],
    pricing: [
      {
        title: 'LICENCIA STUDIO',
        options: [
          { plan: 'Licencia Vitalicia', price: 'US$295' }
        ]
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
    ],
    officialUrl: 'https://www.blackmagicdesign.com/mx/products/davinciresolve/studio'
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
