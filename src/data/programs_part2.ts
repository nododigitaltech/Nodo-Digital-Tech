import { Program } from '../types';

export const programsPart2: Program[] = [
  {
    id: 'after-effects',
    name: 'Adobe After Effects 2026',
    subtitle: 'El estándar de la industria para efectos visuales y gráficos animados',
    category: 'Software',
    subcategory: 'Efectos Visuales',
    icon: 'Sparkles',
    rating: 4.9,
    downloads: 142000,
    size: '3.1 GB',
    latestVersion: '2026 v26.3.0.87',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-08',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe After Effects es la suite líder mundial de composición y creación de efectos digitales, gráficos en movimiento y transiciones dinámicas.',
    detailedDescription: 'Crea efectos visuales cinematográficos y gráficos en movimiento líderes del sector. Cuenta con la revolucionaria herramienta pincel tipo rotoscopia por IA, seguimiento de cámara 3D ultrarrápido y un ecosistema inigualable de plugins profesionales de terceros.',
    features: [
      'Pincel de rotoscopia por IA de nivel profesional para aislar objetos complejos en un solo clic.',
      'Soporte completo para espacios de trabajo 3D reales con profundidad y luces físicas.',
      'Herramientas avanzadas de seguimiento de movimiento e interpolación temporal por curvas.',
      'Integración impecable con Cinema 4D y Adobe Premiere Pro de forma nativa.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core o AMD de 4 núcleos a 2.0 GHz',
        memory: '16 GB RAM',
        graphics: 'GPU compatible con DirectX 12 o Metal con 4 GB de VRAM',
        storage: '15 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD de 8 núcleos o superior (Apple Silicon M-Series)',
        memory: '32 GB RAM o superior',
        graphics: 'NVIDIA RTX 3070 / AMD RX 6800 o superior con 8 GB de VRAM',
        storage: '50 GB libres en SSD NVMe'
      }
    },
    versions: [
      {
        version: '2026 v26.3.0.87',
        releaseDate: '2026-06-08',
        size: '3.1 GB',
        changelog: [
          'Mejorada la velocidad del renderizado 3D un 40% mediante la optimización de código nativo.',
          'Nuevos pinceles dinámicos inteligentes optimizados para cabello y plumas.',
          'Corrección de caídas de rendimiento en previsualizaciones de video en formato HEVC.'
        ],
        downloadUrl: 'https://www.adobe.com/products/aftereffects.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-15',
        size: '2.9 GB',
        changelog: [
          'Rediseño del panel de composición 3D con integración nativa de materiales avanzados PBR.'
        ],
        downloadUrl: 'https://www.adobe.com/products/aftereffects.html'
      }
    ],
    reviews: [
      {
        id: 'rev-ae1',
        username: 'motion_artist_88',
        rating: 5,
        date: '2026-06-12',
        comment: 'Descargado e instalado en menos de 5 minutos. Funciona de maravilla.'
      }
    ]
  },
  {
    id: 'adobe-audition',
    name: 'Adobe Audition 2026',
    subtitle: 'La herramienta definitiva para mezclar, editar y restaurar audio digital',
    category: 'Utilidades',
    subcategory: 'Edición de Audio',
    icon: 'Volume2',
    rating: 4.8,
    downloads: 85000,
    size: '890 MB',
    latestVersion: '2026 v26.3.0.79',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-05',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Audition es una estación de trabajo de audio digital profesional que permite grabar, mezclar, editar y aplicar efectos con la máxima fidelidad.',
    detailedDescription: 'Audition incluye visualización de espectro de frecuencia avanzada, herramientas de eliminación automática de ruido por IA, editor multipista intuitivo y efectos nativos de nivel de estudio de grabación comercial.',
    features: [
      'Visualizador de espectro de frecuencia avanzado para eliminar ruidos específicos con un pincel.',
      'Mezclador multipista intuitivo con inserción de efectos en tiempo real y envíos de bus.',
      'Herramientas potentes de restauración de grabaciones (eliminación de clics, siseo y estática).',
      'Ajuste inteligente de volumen compatible con el estándar internacional de sonoridad de televisión.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel o AMD multinúcleo con soporte de 64 bits',
        memory: '4 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD multinúcleo de 2.5 GHz o superior',
        memory: '8 GB RAM o superior',
        graphics: 'Gráficos dedicados',
        storage: '10 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v26.3.0.79',
        releaseDate: '2026-06-05',
        size: '890 MB',
        changelog: [
          'Reducción de ruido por IA optimizada para grabaciones de voz en exteriores.',
          'Importante mejora en el rendimiento al procesar efectos a tiempo real en el rack de efectos.',
          'Corrección de un error de sincronización al exportar en formato de compresión FLAC.'
        ],
        downloadUrl: 'https://www.adobe.com/products/audition.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-14',
        size: '850 MB',
        changelog: [
          'Nueva interfaz de asignación de hardware de audio mucho más sencilla e intuitiva.'
        ],
        downloadUrl: 'https://www.adobe.com/products/audition.html'
      }
    ],
    reviews: [
      {
        id: 'rev-au1',
        username: 'podcast_editor',
        rating: 5,
        date: '2026-06-07',
        comment: 'La limpieza de ruido de fondo me ha salvado la vida en un par de grabaciones callejeras. Increíble.'
      }
    ]
  },
  {
    id: 'media-encoder',
    name: 'Adobe Media Encoder 2026',
    subtitle: 'Módulo de renderizado, procesamiento y codificación universal',
    category: 'Utilidades',
    subcategory: 'Renderizado',
    icon: 'Sliders',
    rating: 4.8,
    downloads: 110000,
    size: '1.2 GB',
    latestVersion: '2026 v26.3.1.1',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-02',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Media Encoder gestiona de forma centralizada la exportación de tus proyectos de Premiere Pro, After Effects y Character Animator de manera eficiente.',
    detailedDescription: 'Soporta casi cualquier formato de salida de audio y video. Te permite añadir marcas de agua automáticamente, procesar exportaciones por lotes en segundo plano, usar plantillas preconfiguradas y optimizar vídeos para redes sociales.',
    features: [
      'Procesamiento por lotes eficiente en segundo plano para exportar decenas de videos sin pausar tu trabajo.',
      'Soporte completo para codificación HEVC/H.265, AV1, ProRes y DNxHR de forma nativa.',
      'Ajustes prestablecidos inteligentes para YouTube, Twitch, Vimeo, Facebook, iPhone y más.',
      'Ajuste automático del volumen de salida (Loudness Normalizer) integrado.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core o AMD Ryzen de 4 núcleos',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con DirectX 12 con 2 GB de VRAM',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD Ryzen de 8 núcleos o superior',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada compatible con hardware de aceleración con 6 GB de VRAM',
        storage: '15 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v26.3.1.1',
        releaseDate: '2026-06-02',
        size: '1.2 GB',
        changelog: [
          'Codificación de formato AV1 con compresión inteligente de archivos y calidad visual máxima.',
          'Soporte de exportación mejorado para metadatos HDR avanzadas en formatos de salida ProRes.',
          'Corrección de caídas de conexión al subir directamente a cuentas comerciales de YouTube.'
        ],
        downloadUrl: 'https://www.adobe.com/products/mediaencoder.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-16',
        size: '1.15 GB',
        changelog: [
          'Optimización de cola de renderizado en reposo con reducción automática de consumo energético.'
        ],
        downloadUrl: 'https://www.adobe.com/products/mediaencoder.html'
      }
    ],
    reviews: [
      {
        id: 'rev-me1',
        username: 'video_expert_pro',
        rating: 4.8,
        date: '2026-06-04',
        comment: 'Fundamental para exportar de forma masiva mis videos mientras sigo editando en Premiere.'
      }
    ]
  },
  {
    id: 'acrobat-reader',
    name: 'Adobe Acrobat Reader 2026',
    subtitle: 'El lector de documentos PDF oficial de confianza de millones',
    category: 'Utilidades',
    subcategory: 'Lectura PDF',
    icon: 'FileCheck',
    rating: 4.7,
    downloads: 384000,
    size: '185 MB',
    latestVersion: '2026.001.21691',
    compatibility: ['Windows', 'macOS', 'Android', 'iOS'],
    updateDate: '2026-05-28',
    developer: 'Adobe Inc.',
    license: 'Gratuito',
    description: 'Adobe Acrobat Reader es la aplicación gratuita líder para ver, rellenar, firmar, comentar y compartir archivos PDF con máxima fidelidad.',
    detailedDescription: 'Reader ofrece un entorno de visualización fluido compatible con cualquier norma de archivos PDF oficial. Cuenta con zoom inteligente, modo lectura adaptativo, buscador de palabras de alta velocidad y un amplio abanico de herramientas de comentarios.',
    features: [
      'Visualización, impresión y búsqueda ultrarrápida de archivos PDF con fidelidad completa.',
      'Herramientas integradas de comentarios y notas adhesivas para revisiones fluidas.',
      'Rellenado y firma rápida de formularios electrónicos mediante el sistema oficial Adobe Sign.',
      'Soporte nativo para lectura compartida en la nube con acceso multi-dispositivo.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / macOS 10.13 / Android / iOS',
        processor: 'Intel/AMD 1.5 GHz o superior',
        memory: '2 GB RAM',
        storage: '380 MB libres'
      },
      recommended: {
        os: 'Windows 10/11 / macOS Big Sur',
        processor: 'Intel o AMD multinúcleo moderno',
        memory: '4 GB RAM o superior',
        storage: '500 MB libres'
      }
    },
    versions: [
      {
        version: '2026.001.21691',
        releaseDate: '2026-05-28',
        size: '185 MB',
        changelog: [
          'Mejora de rendimiento al renderizar páginas que contienen vectores densos.',
          'Actualización de parches críticos de seguridad y estabilidad mensuales.',
          'Nuevo modo de visualización fluida adaptativa para pantallas táctiles de gran formato.'
        ],
        downloadUrl: 'https://get.adobe.com/reader/'
      },
      {
        version: '2025.001.20000',
        releaseDate: '2025-10-05',
        size: '180 MB',
        changelog: [
          'Integrada la barra lateral inteligente unificada para búsqueda integrada por temas.'
        ],
        downloadUrl: 'https://get.adobe.com/reader/'
      }
    ],
    reviews: [
      {
        id: 'rev-ar1',
        username: 'lectura_fina',
        rating: 4.8,
        date: '2026-05-30',
        comment: 'Sin enlaces falsos que te meten malware. Descarga e instalación directa en español.'
      }
    ]
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro 2026',
    subtitle: 'La suite de edición de video líder para cine, televisión y redes sociales',
    category: 'Software',
    subcategory: 'Edición de Video',
    icon: 'Scissors',
    rating: 4.9,
    downloads: 245000,
    size: '2.4 GB',
    latestVersion: '2026 v26.3.0.93',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-05-24',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Premiere Pro te permite crear películas, series de TV y vlogs impresionantes. Ofrece un flujo de trabajo optimizado que te ayuda a pulir tu historia.',
    detailedDescription: 'La estación de edición de vídeo definitiva. Cuenta con sincronización de audio automática, herramientas avanzadas de corrección de color Lumetri, edición basada en texto, generación inteligente de transcripciones y excelente soporte para proyectos en resoluciones masivas.',
    features: [
      'Edición basada en texto por IA para recortar diálogos y escenas borrando el texto escrito.',
      'Graduación e igualado de color Lumetri profesional de alta precisión tonal.',
      'Sincronización multicámara inteligente basada en audio con un solo clic.',
      'Ecosistema inmenso de plantillas animadas de títulos, tercios inferiores y motion graphics.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit (v22H2) / macOS 12+',
        processor: 'Intel Core de 6ª generación o AMD Ryzen 1000',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con DirectX 12 con 2 GB de VRAM',
        storage: '8 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core de 11ª generación o AMD Ryzen 5000 (M-Series ARM)',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada compatible con aceleración por hardware con 4 GB de VRAM o superior',
        storage: '25 GB libres en SSD (altamente recomendado para la caché)'
      }
    },
    versions: [
      {
        version: '2026 v26.3.0.93',
        releaseDate: '2026-05-24',
        size: '2.4 GB',
        changelog: [
          'Mejorada la velocidad del renderizado en tiempo real de transiciones complejas.',
          'Integrada la herramienta de detección automática de pausas y muletillas en diálogos de voz.',
          'Corrección de pérdida de fotogramas al previsualizar proyectos en formatos ProRes RAW.'
        ],
        downloadUrl: 'https://www.adobe.com/products/premiere.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-18',
        size: '2.3 GB',
        changelog: [
          'Añadida la capacidad de ajustar automáticamente la escala cromática de los clips HDR a SDR sin pérdidas.'
        ],
        downloadUrl: 'https://www.adobe.com/products/premiere.html'
      }
    ],
    reviews: [
      {
        id: 'rev-pr1',
        username: 'pro_editor_99',
        rating: 5,
        date: '2026-05-26',
        comment: 'Funciona rapidísimo con aceleración por GPU. Descarga directa real sin sorpresas.'
      }
    ]
  },
  {
    id: 'adobe-illustrator',
    name: 'Adobe Illustrator 2026',
    subtitle: 'La aplicación de gráficos vectoriales de referencia para diseño y logotipos',
    category: 'Software',
    subcategory: 'Diseño Vectorial',
    icon: 'Feather',
    rating: 4.9,
    downloads: 195000,
    size: '1.9 GB',
    latestVersion: '2026 v30.6.0.109',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-05-20',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Illustrator te permite crear desde logotipos limpios hasta ilustraciones detalladas con un lienzo infinito, pinceles personalizables y herramientas vectoriales de precisión.',
    detailedDescription: 'Illustrator es la herramienta predilecta de diseñadores gráficos a nivel mundial. Su sistema de trazados inteligentes permite crear escalados sin ninguna pérdida de nitidez ni pixelado. La versión de 2026 incluye un potente motor de generación de patrones vectoriales mediante indicaciones de texto descriptivo.',
    features: [
      'Dibujo vectorial de máxima precisión mediante curvas de Bézier e imanes inteligentes.',
      'Generador de vectores por IA (Text-to-Vector) que convierte texto descriptivo en trazados limpios.',
      'Amplia tipografía con integración nativa de fuentes OpenType y fuentes variables de alta calidad.',
      'Exportación eficiente en múltiples resoluciones y formatos con un solo clic (SVG, PDF, PNG, EPS).'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core o AMD Ryzen multinúcleo',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con OpenGL 4.0 con 1 GB de VRAM',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD Ryzen multinúcleo rápido (M-Series ARM)',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada con soporte OpenGL 4.2 con 4 GB de VRAM o superior',
        storage: '10 GB libres en SSD'
      }
    },
    versions: [
      {
        version: '2026 v30.6.0.109',
        releaseDate: '2026-05-20',
        size: '1.9 GB',
        changelog: [
          'Mejorada la velocidad del redibujado vectorial de mallas 3D de alta densidad.',
          'Nueva herramienta de emparejado de color inteligente que extrae paletas armónicas desde fotos.',
          'Corrección de cierres aleatorios al exportar archivos PDF con incrustación de tipografías exóticas.'
        ],
        downloadUrl: 'https://www.adobe.com/products/illustrator.html'
      },
      {
        version: '2025 v29.0.0',
        releaseDate: '2025-10-20',
        size: '1.8 GB',
        changelog: [
          'Integrada la capacidad de vectorizar imágenes de mapas de bits con mayor fidelidad lineal.'
        ],
        downloadUrl: 'https://www.adobe.com/products/illustrator.html'
      }
    ],
    reviews: [
      {
        id: 'rev-ai1',
        username: 'logo_creator',
        rating: 5,
        date: '2026-05-22',
        comment: 'La mejor herramienta de diseño del mundo. El crack preactivado funciona impecable.'
      }
    ]
  },
  {
    id: 'ccleaner-pro',
    name: 'CCleaner Professional Plus',
    subtitle: 'La suite de optimización, limpieza y privacidad para tu PC',
    category: 'Utilidades',
    subcategory: 'Optimización',
    icon: 'Wind',
    rating: 4.8,
    downloads: 320000,
    size: '42 MB',
    latestVersion: 'v6.41.0.2',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-05-15',
    developer: 'Piriform Software',
    license: 'Plus (Completo)',
    description: 'CCleaner Professional Plus limpia archivos basura, protege tu privacidad, desactiva procesos de inicio lentos y mantiene tus aplicaciones actualizadas automáticamente.',
    detailedDescription: 'La versión Professional Plus combina CCleaner con las galardonadas herramientas Recuva (recuperación de archivos), Defraggler (desfragmentador inteligente) y Speccy (análisis de componentes de hardware) en una sola suite centralizada.',
    features: [
      'Limpieza completa e inteligente de historiales de navegación, cookies y archivos temporales residuales.',
      'Actualizador automático de software para tapar agujeros de seguridad en apps desfasadas.',
      'Buscador e interruptor de programas que ralentizan el arranque inicial del sistema operativo.',
      'Incluye Recuva Pro, Defraggler Pro y Speccy Pro de forma integrada y con licencias completas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows XP / Vista / 7 / 8 / 10 / 11',
        processor: 'Intel/AMD 500 MHz',
        memory: '512 MB RAM',
        storage: '50 MB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel/AMD multinúcleo',
        memory: '2 GB RAM o superior',
        storage: '150 MB libres'
      }
    },
    versions: [
      {
        version: 'v6.41.0.2',
        releaseDate: '2026-05-15',
        size: '42 MB',
        changelog: [
          'Mejorada la limpieza de basura en los historiales de las últimas versiones de Opera GX y Brave.',
          'Módulo de salud de software optimizado para detectar descargas fallidas del sistema operativo.',
          'Corrección de un error de interfaz visual en pantallas de alta definición con escalado DPI de 150%.'
        ],
        downloadUrl: 'https://www.ccleaner.com/ccleaner'
      },
      {
        version: 'v6.40.0',
        releaseDate: '2026-02-28',
        size: '40 MB',
        changelog: [
          'Módulo desfragmentador inteligente integrado adaptado para la optimización de lectura en SSDs.'
        ],
        downloadUrl: 'https://www.ccleaner.com/ccleaner'
      }
    ],
    reviews: [
      {
        id: 'rev-ccp1',
        username: 'clean_guy',
        rating: 4.8,
        date: '2026-05-18',
        comment: 'La suite definitiva para dejar el ordenador de tus padres limpio como el primer día.'
      }
    ]
  },
  {
    id: 'photoshop-2026',
    name: 'Adobe Photoshop 2026',
    subtitle: 'El software de retoque fotográfico y diseño digital más potente del mundo',
    category: 'Software',
    subcategory: 'Edición de Imagen',
    icon: 'Palette',
    rating: 4.9,
    downloads: 385000,
    size: '4.2 GB',
    latestVersion: '2026 v27.8.0.13 (x64)',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-05-10',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Photoshop te permite retocar fotos, ilustrar en digital y componer diseños espectaculares utilizando potentes herramientas neuronales.',
    detailedDescription: 'Combina herramientas de pintura clásicas con tecnologías de IA Generativa de última generación. Permite expandir imágenes de forma automática con relleno generativo, sustituir cielos, eliminar sujetos complejos de forma limpia y realizar retoques faciales hiperrealistas mediante filtros neuronales avanzados.',
    features: [
      'Relleno Generativo por IA para expandir lienzos y añadir elementos coherentes con un prompt.',
      'Amplia suite de Filtros Neuronales (Neural Filters) para rejuvenecer rostros o cambiar expresiones.',
      'Herramientas potentes de corrección cromática y edición no destructiva por objetos inteligentes.',
      'Soporte completo para pinceles dinámicos con respuesta realista de presión y ángulo.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit (v22H2) / macOS 12+',
        processor: 'Intel o AMD con soporte de 64 bits, 2 GHz',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con DirectX 12 con 2 GB de VRAM',
        storage: '10 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel o AMD multinúcleo rápido (Apple Silicon M-Series)',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada compatible con DirectX 12 con 4 GB de VRAM o superior',
        storage: '30 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v27.8.0.13 (x64)',
        releaseDate: '2026-05-10',
        size: '4.2 GB',
        changelog: [
          'Mejorada la velocidad del procesamiento local del pincel corrector un 35%.',
          'Integración de la última suite de modelos neuronales de filtrado facial en local.',
          'Corrección de caídas de FPS al manipular archivos pesados de más de 1.5 GB PSB.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop.html'
      },
      {
        version: '2025 v26.0.0',
        releaseDate: '2025-10-22',
        size: '3.9 GB',
        changelog: [
          'Añadida la herramienta interactiva de expansión de lienzo basada en IA sin marcas de agua.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop.html'
      }
    ],
    reviews: [
      {
        id: 'rev-ps1',
        username: 'creative_mind',
        rating: 5,
        date: '2026-05-12',
        comment: 'Simplemente impecable. La versión viene totalmente lista para instalar y usar en español.'
      }
    ]
  },
  {
    id: 'cinema-4d',
    name: 'Cinema 4D Studio 2026',
    subtitle: 'Modelado, animación, simulación y renderizado 3D profesional ultrarrápido',
    category: 'Software',
    subcategory: 'Modelado 3D',
    icon: 'Box',
    rating: 4.8,
    downloads: 72000,
    size: '1.4 GB',
    latestVersion: 'v2026.4.2',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-05-05',
    developer: 'Maxon Computer',
    license: 'Studio (Completo)',
    description: 'Cinema 4D es la herramienta perfecta para artistas profesionales de 3D, gráficos en movimiento y modelado de mallas dinámicas.',
    detailedDescription: 'Destaca por su estabilidad extrema y su curva de aprendizaje rápida en comparación con otras suites 3D. Incluye potentes herramientas de clonación Mograph, simulación de telas, cuerdas, fluidos físicos acelerados por hardware y soporte de renderizado mediante el motor ultrarrápido Redshift.',
    features: [
      'Suite Mograph líder de la industria para generar animaciones y patrones complejos basados en nodos.',
      'Simulaciones unificadas avanzadas de gravedad, fluidos, telas, deformaciones y colisiones físicas.',
      'Soporte completo integrado para renderizado mediante Redshift con aceleración por GPU.',
      'Modelado poligonal interactivo y caja de herramientas de escultura digital de alta definición.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11.5+',
        processor: 'Intel Core o AMD Ryzen compatible con SSE3',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con OpenGL 4.1 con 4 GB de VRAM',
        storage: '3 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD Ryzen de última generación',
        memory: '16 GB RAM o superior',
        graphics: 'NVIDIA RTX 3060 o AMD RX 6700 XT o superior con 8 GB de VRAM',
        storage: '10 GB libres en SSD'
      }
    },
    versions: [
      {
        version: 'v2026.4.2',
        releaseDate: '2026-05-05',
        size: '1.4 GB',
        changelog: [
          'Mejoras importantes en el motor de simulación de cuerpos blandos en tiempo real mediante GPU.',
          'Nuevos nodos MoGraph especializados para la distribución inteligente de objetos orgánicos.',
          'Corrección de fugas de memoria al realizar previas de render con Redshift.'
        ],
        downloadUrl: 'https://www.maxon.net/en/cinema-4d'
      },
      {
        version: 'v2025.1.0',
        releaseDate: '2025-10-08',
        size: '1.3 GB',
        changelog: [
          'Añadida compatibilidad nativa con modelos en formato USDZ avanzados.'
        ],
        downloadUrl: 'https://www.maxon.net/en/cinema-4d'
      }
    ],
    reviews: [
      {
        id: 'rev-c4d1',
        username: '3d_animator',
        rating: 5,
        date: '2026-05-08',
        comment: 'La mejor herramienta de motion graphics 3D. Es súper estable y renderiza rapidísimo.'
      }
    ]
  },
  {
    id: 'acrobat-pro',
    name: 'Adobe Acrobat Pro 2026',
    subtitle: 'La solución PDF definitiva para editar, convertir, proteger y firmar',
    category: 'Utilidades',
    subcategory: 'Gestión PDF',
    icon: 'FileLock',
    rating: 4.8,
    downloads: 165000,
    size: '1.1 GB',
    latestVersion: '2026 v26.1.21691',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-04-28',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Acrobat Pro te permite editar documentos PDF de forma directa, exportarlos a Word o Excel, protegerlos mediante contraseñas y recolectar firmas digitales.',
    detailedDescription: 'La suite completa para administración corporativa de PDF. Incluye reconocimiento de caracteres por OCR de alta definición en más de 30 idiomas, herramientas de censura de información confidencial, combinación de archivos e indexado.',
    features: [
      'Edición de texto, párrafos e imágenes dentro de archivos PDF con maquetación inteligente automática.',
      'Conversión bidireccional perfecta a Word, Excel, PowerPoint, HTML o JPG.',
      'OCR avanzado que convierte páginas escaneadas o fotos en texto completamente editable.',
      'Cifrado mediante contraseña corporativa de 128 bits y control avanzado de permisos de impresión.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel/AMD 1.5 GHz o superior',
        memory: '2 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '1.5 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel o AMD multinúcleo moderno',
        memory: '4 GB RAM o superior',
        graphics: 'Gráficos dedicados',
        storage: '4 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v26.1.21691',
        releaseDate: '2026-04-28',
        size: '1.1 GB',
        changelog: [
          'OCR optimizado un 45% con mayor precisión de detección en fuentes tipográficas manuscritas.',
          'Módulo de compresión de PDF avanzado para reducir el tamaño hasta un 70% sin perder legibilidad.',
          'Parche mensual acumulativo de estabilidad de seguridad integrado.'
        ],
        downloadUrl: 'https://www.adobe.com/products/acrobat.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-12',
        size: '1.05 GB',
        changelog: [
          'Añadida la capacidad de comparar dos archivos PDF detectando automáticamente cambios de textos.'
        ],
        downloadUrl: 'https://www.adobe.com/products/acrobat.html'
      }
    ],
    reviews: [
      {
        id: 'rev-ap1',
        username: 'legal_advisor',
        rating: 5,
        date: '2026-04-30',
        comment: 'La conversión a Word es la más limpia que he probado, excelente crack, pre-activado sin vueltas.'
      }
    ]
  },
  {
    id: 'driver-booster',
    name: 'IObit Driver Booster Pro',
    subtitle: 'Actualizador de controladores de PC automático, rápido y seguro',
    category: 'Utilidades',
    subcategory: 'Controladores',
    icon: 'Cpu',
    rating: 4.7,
    downloads: 195000,
    size: '28 MB',
    latestVersion: 'v13.5.0.359',
    compatibility: ['Windows'],
    updateDate: '2026-04-22',
    developer: 'IObit',
    license: 'Pro (Completo)',
    description: 'IObit Driver Booster Pro escanea y actualiza más de 9.5 millones de controladores y componentes de juegos con un solo clic.',
    detailedDescription: 'Garantiza la máxima estabilidad de tu hardware de PC actualizando controladores desfasados, reparando fallos de red, problemas de sonido y optimizando el rendimiento de tus juegos mediante Game Ready Drivers.',
    features: [
      'Base de datos inmensa con más de 9.5 millones de controladores de dispositivos con firmas certificadas.',
      'Actualización masiva segura en un solo clic con creación de puntos de restauración automáticos.',
      'Reparación integrada de fallos comunes: sin sonido, fallos de conexión inalámbrica y mala resolución.',
      'Optimización de componentes de juego requeridos (DirectX, PhysX, .NET Framework, C++).'
    ],
    requirements: {
      minimum: {
        os: 'Windows XP / Vista / 7 / 8 / 10 / 11',
        processor: 'Intel/AMD 1 GHz o superior',
        memory: '1 GB RAM',
        storage: '50 MB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel/AMD multinúcleo moderno',
        memory: '2 GB RAM o superior',
        storage: '150 MB libres'
      }
    },
    versions: [
      {
        version: 'v13.5.0.359',
        releaseDate: '2026-04-22',
        size: '28.4 MB',
        changelog: [
          'Soporte completo para controladores certificados WHQL de tarjetas gráficas Nvidia serie 5000.',
          'Optimizado el escáner de red para controladores Wi-Fi 7 de última generación.',
          'Solución de errores al crear puntos de restauración automáticos en sistemas con poco espacio.'
        ],
        downloadUrl: 'https://www.iobit.com/en/driver-booster.php'
      },
      {
        version: 'v13.0.0',
        releaseDate: '2025-10-18',
        size: '26.8 MB',
        changelog: [
          'Rediseño visual de la interfaz del escáner mostrando detalladamente la antigüedad del driver.'
        ],
        downloadUrl: 'https://www.iobit.com/en/driver-booster.php'
      }
    ],
    reviews: [
      {
        id: 'rev-db1',
        username: 'gamer_albert',
        rating: 5,
        date: '2026-04-25',
        comment: 'Actualizó mis drivers de audio y de vídeo que me daban pantallazos azules. Un 10 de 10.'
      }
    ]
  }
];
