import { Program } from '../types';

export const programsPart3: Program[] = [
  {
    id: 'camtasia-studio',
    name: 'Camtasia Studio 2026',
    subtitle: 'El grabador de pantalla y editor de video todo en uno',
    category: 'Software',
    subcategory: 'Grabación y Edición',
    icon: 'MonitorPlay',
    rating: 4.8,
    downloads: 125000,
    size: '345 MB',
    latestVersion: '2026 v26.1.3.17772',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-04-18',
    developer: 'TechSmith',
    license: 'Completo (Full)',
    description: 'Camtasia facilita la grabación de tu pantalla y la edición de videos profesionales con un flujo de trabajo extremadamente fluido.',
    detailedDescription: 'Ideal para tutoriales, lecciones en video y grabaciones de presentaciones. Cuenta con anotaciones llamativas, efectos de cursor dinámicos, plantillas listas para usar y exportación instantánea en alta fidelidad.',
    features: [
      'Grabación de alta resolución de pantalla, cámara web, micrófono y audio del sistema simultáneamente.',
      'Efectos de cursor dinámicos y zoom inteligente para guiar la atención del espectador.',
      'Cientos de anotaciones preconfiguradas, transiciones, comportamientos e intros animadas.',
      'Módulo de edición multipista intuitivo con herramientas de recorte rápido.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core i3 o AMD Ryzen 3 a 2.0 GHz',
        memory: '8 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '2 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i7 o AMD Ryzen 7 / Apple Silicon',
        memory: '16 GB RAM o superior',
        graphics: 'NVIDIA GTX 1050 / AMD RX 560 o superior',
        storage: '5 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v26.1.3.17772',
        releaseDate: '2026-04-18',
        size: '345 MB',
        changelog: [
          'Efectos de cursor personalizables con sombras realistas y colores dinámicos.',
          'Importante reducción del consumo de memoria RAM al previsualizar videos 4K.',
          'Corrección de cuelgues repentinos al sincronizar audios en formato WAV.'
        ],
        downloadUrl: 'https://www.techsmith.com/video-editor.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-15',
        size: '330 MB',
        changelog: [
          'Módulo IA para eliminación de ruido de fondo de micrófono integrada.'
        ],
        downloadUrl: 'https://www.techsmith.com/video-editor.html'
      }
    ],
    reviews: [
      {
        id: 'rev-cs1',
        username: 'prof_edu',
        rating: 5,
        date: '2026-04-20',
        comment: 'El mejor software para grabar clases. El crack funciona de maravilla.'
      }
    ]
  },
  {
    id: 'office-365-installer',
    name: 'Microsoft Office 365 - Online Installer',
    subtitle: 'Instalador y configurador inteligente de la suite Microsoft 365',
    category: 'Software',
    subcategory: 'Ofimática',
    icon: 'Cloud',
    rating: 4.9,
    downloads: 320000,
    size: '12 MB',
    latestVersion: 'v3.3.14',
    compatibility: ['Windows'],
    updateDate: '2026-04-15',
    developer: 'Microsoft Corporation / Community',
    license: 'Gratuito (Utilidad)',
    description: 'Permite descargar, instalar y configurar de forma personalizada los componentes oficiales de Microsoft Office 365 y licencias por volumen.',
    detailedDescription: 'Esta utilidad interactiva facilita la descarga directa desde servidores oficiales de Microsoft. Puedes elegir qué aplicaciones instalar (Word, Excel, Access, etc.), el idioma y el canal de actualización deseado.',
    features: [
      'Descarga directa a máxima velocidad desde los servidores oficiales de entrega de Microsoft.',
      'Instalación personalizada, pudiendo excluir aplicaciones no deseadas para ahorrar espacio.',
      'Soporte completo para cambiar idiomas y arquitecturas de forma interactiva (x86/x64).',
      'Incluye herramientas integradas para aplicar licencias por volumen seguras en un solo clic.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 / Windows 11',
        processor: 'Intel/AMD 1.5 GHz o superior',
        memory: '2 GB RAM',
        storage: '50 MB libres (para la utilidad, requiere internet para la suite)'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core o AMD multinúcleo',
        memory: '4 GB RAM o superior',
        storage: '100 MB libres'
      }
    },
    versions: [
      {
        version: 'v3.3.14',
        releaseDate: '2026-04-15',
        size: '12.4 MB',
        changelog: [
          'Añadida compatibilidad para descargar las últimas compilaciones estables de Microsoft Office 2026.',
          'Corrección de un error de ruteo que impedía la descarga de paquetes en conexiones IPv6.',
          'Actualizadas las firmas criptográficas de seguridad del activador por volumen.'
        ],
        downloadUrl: 'https://www.microsoft.com/microsoft-365/'
      },
      {
        version: 'v3.3.0',
        releaseDate: '2025-12-10',
        size: '11.8 MB',
        changelog: [
          'Mejora de interfaz visual agregando indicador de progreso de descarga detallado.'
        ],
        downloadUrl: 'https://www.microsoft.com/microsoft-365/'
      }
    ],
    reviews: [
      {
        id: 'rev-o365-1',
        username: 'office_user',
        rating: 5,
        date: '2026-04-17',
        comment: 'Increíble utilidad, me instalé solo Word, Excel y PowerPoint. Súper rápido todo.'
      }
    ]
  },
  {
    id: 'driver-easy',
    name: 'Driver Easy Professional',
    subtitle: 'Encuentra y descarga todos los controladores desfasados en segundos',
    category: 'Utilidades',
    subcategory: 'Controladores',
    icon: 'Wrench',
    rating: 4.8,
    downloads: 145000,
    size: '15 MB',
    latestVersion: 'v7.1.3.5200',
    compatibility: ['Windows'],
    updateDate: '2026-04-10',
    developer: 'Easeware Technology',
    license: 'Pro (Completo)',
    description: 'Driver Easy escanea tu PC de forma profunda para descargar e instalar automáticamente los controladores de hardware idóneos.',
    detailedDescription: 'Cuenta con una inmensa base de datos de más de 8 millones de controladores certificados, respaldo de seguridad y la capacidad de actualizar tu PC sin conexión a internet.',
    features: [
      'Detección automática instantánea de controladores desfasados, faltantes o incompatibles.',
      'Base de datos inmensa con más de 8 millones de controladores certificados por Microsoft WHQL.',
      'Copia de seguridad y restauración de controladores integrada para máxima seguridad.',
      'Escaneo offline de controladores para equipos que no disponen de conexión a internet.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / 8 / 10 / 11',
        processor: 'Intel/AMD 1 GHz o superior',
        memory: '1 GB RAM',
        storage: '30 MB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core o AMD Ryzen moderno',
        memory: '2 GB RAM o superior',
        storage: '100 MB libres'
      }
    },
    versions: [
      {
        version: 'v7.1.3.5200',
        releaseDate: '2026-04-10',
        size: '15.4 MB',
        changelog: [
          'Base de datos actualizada con soporte para chips Wi-Fi 7 y Bluetooth 5.4.',
          'Mejorado el algoritmo de escaneo en procesadores con arquitectura híbrida Intel de 14ª generación.',
          'Corrección de problemas visuales al escalar la ventana en monitores 4K.'
        ],
        downloadUrl: 'https://www.drivereasy.com/'
      },
      {
        version: 'v7.0.0',
        releaseDate: '2025-10-12',
        size: '14.8 MB',
        changelog: [
          'Rediseño completo de la interfaz visual simplificando el proceso de descarga masiva.'
        ],
        downloadUrl: 'https://www.drivereasy.com/'
      }
    ],
    reviews: [
      {
        id: 'rev-de1',
        username: 'tech_support',
        rating: 5,
        date: '2026-04-12',
        comment: 'Súper útil para ordenadores antiguos donde la tarjeta de red no funciona tras formatear.'
      }
    ]
  },
  {
    id: 'photoshop-elements',
    name: 'Adobe Photoshop Elements 2026',
    subtitle: 'La versión simplificada, rápida y accesible del software de edición líder',
    category: 'Software',
    subcategory: 'Edición de Imagen',
    icon: 'Layers',
    rating: 4.7,
    downloads: 95000,
    size: '1.6 GB',
    latestVersion: '2026 v26.3.0.82',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-04-05',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Photoshop Elements combina herramientas de retoque automatizadas por IA con una interfaz sencilla ideal para fotógrafos aficionados.',
    detailedDescription: 'Perfecto para usuarios que no requieren las complejas herramientas avanzadas de la versión completa de Photoshop. Cuenta con guías interactivas paso a paso, collages instantáneos, plantillas animadas y organización por etiquetas.',
    features: [
      'Retoque fotográfico automatizado y guiado en 3 modos: Rápido, Guiado y Experto.',
      'Módulo de eliminación de objetos no deseados por pincel inteligente de precisión.',
      'Añadido de efectos cinemáticos, coloración de fotos antiguas y retoques rápidos por IA.',
      'Organizador de catálogos fotográficos mediante reconocimiento de fecha y etiquetas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core i3 o AMD equivalente',
        memory: '8 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '5 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i5 o AMD Ryzen 5 o superior (Apple Silicon M-Series)',
        memory: '16 GB RAM o superior',
        graphics: 'Gráficos dedicados con 2GB VRAM o superior',
        storage: '10 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v26.3.0.82',
        releaseDate: '2026-04-05',
        size: '1.6 GB',
        changelog: [
          'Nuevas guías interactivas añadidas para realizar efectos de doble exposición artística.',
          'Optimizado el rendimiento del filtro IA para dar color a fotos en blanco y negro.',
          'Corrección de un error al abrir archivos RAW de ciertas cámaras compactas Sony.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop-elements.html'
      },
      {
        version: '2025 v25.0.0',
        releaseDate: '2025-10-18',
        size: '1.5 GB',
        changelog: [
          'Mejora de interfaz visual agregando soporte para temas oscuros en modo experto.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop-elements.html'
      }
    ],
    reviews: [
      {
        id: 'rev-pe1',
        username: 'family_photo',
        rating: 4.8,
        date: '2026-04-08',
        comment: 'Tengo todas las fotos de la familia editadas de forma preciosa sin calentarme la cabeza.'
      }
    ]
  },
  {
    id: 'software-updater',
    name: 'IObit Software Updater Pro',
    subtitle: 'Mantén todos tus programas instalados actualizados de forma segura',
    category: 'Utilidades',
    subcategory: 'Actualización',
    icon: 'RefreshCw',
    rating: 4.7,
    downloads: 85000,
    size: '22 MB',
    latestVersion: 'v8.5.0.17',
    compatibility: ['Windows'],
    updateDate: '2026-03-28',
    developer: 'IObit',
    license: 'Pro (Completo)',
    description: 'IObit Software Updater Pro escanea, detecta e instala actualizaciones de software para tus programas de forma silenciosa e inteligente.',
    detailedDescription: 'Garantiza la máxima estabilidad y seguridad de tus aplicaciones instaladas de forma automática en un solo clic, evitando la descarga manual de actualizadores repletos de publicidad o troyanos.',
    features: [
      'Escaneo automático en busca de parches de seguridad y actualizaciones de programas.',
      'Descarga e instalación silenciosa en segundo plano sin interrumpir tu flujo de trabajo.',
      'Soporte completo para programar actualizaciones en horas de menor uso de red.',
      'Módulo integrado para descargar programas esenciales y limpios en un clic.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / 8 / 10 / 11',
        processor: 'Intel/AMD 1 GHz o superior',
        memory: '1 GB RAM',
        storage: '40 MB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel/AMD multinúcleo moderno',
        memory: '2 GB RAM o superior',
        storage: '100 MB libres'
      }
    },
    versions: [
      {
        version: 'v8.5.0.17',
        releaseDate: '2026-03-28',
        size: '22.4 MB',
        changelog: [
          'Base de datos expandida con soporte para más de 120 programas nuevos.',
          'Mejorado el algoritmo de descargas paralelas para evitar saturar conexiones de red lentas.',
          'Corrección de cierres aleatorios al escanear aplicaciones portables.'
        ],
        downloadUrl: 'https://www.iobit.com/en/software-updater.php'
      },
      {
        version: 'v8.0.0',
        releaseDate: '2025-10-15',
        size: '20.5 MB',
        changelog: [
          'Nueva interfaz de usuario simplificada con vista de salud de software unificada.'
        ],
        downloadUrl: 'https://www.iobit.com/en/software-updater.php'
      }
    ],
    reviews: [
      {
        id: 'rev-su1',
        username: 'clean_pc_user',
        rating: 4.7,
        date: '2026-03-30',
        comment: 'Me actualiza Chrome, Zoom y WinRAR solo por la noche. Súper práctico.'
      }
    ]
  },
  {
    id: 'creative-cloud-collection',
    name: 'Adobe Creative Cloud Collection 2026',
    subtitle: 'La suite creativa completa de Adobe pre-activada en un solo instalador',
    category: 'Software',
    subcategory: 'Suite Creativa',
    icon: 'CloudLightning',
    rating: 4.9,
    downloads: 210000,
    size: '28.5 GB',
    latestVersion: '2026 v6.9',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-03-22',
    developer: 'Adobe Inc. / Painters',
    license: 'Pre-Activado / Completo',
    description: 'Creative Cloud Collection reúne todas las aplicaciones líderes de Adobe (Photoshop, Premiere, Illustrator, After Effects, etc.) en un solo instalador interactivo.',
    detailedDescription: 'La recopilación definitiva para creativos digitales. Todas las aplicaciones vienen configuradas con parches de activación invisibles, sin requerir suscripción activa y totalmente libres de procesos sospechosos en segundo plano.',
    features: [
      'Contiene más de 18 aplicaciones oficiales de la suite Adobe actualizadas a sus versiones de 2026.',
      'Instalador inteligente interactivo que permite elegir qué programas específicos desplegar.',
      'Todas las aplicaciones vienen pre-activadas con soporte completo para idiomas multi-idioma nativo.',
      'Limpieza completa de servicios innecesarios de Adobe en segundo plano para optimizar la RAM.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit (v22H2) / macOS 12+',
        processor: 'Intel Core de 8ª generación o AMD equivalente',
        memory: '16 GB RAM',
        graphics: 'GPU dedicada compatible con DirectX 12 con 4 GB de VRAM',
        storage: '50 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i7 o AMD Ryzen 7 o superior (Apple Silicon M-Series)',
        memory: '32 GB RAM o superior',
        graphics: 'GPU dedicada de última generación con 8 GB de VRAM o superior',
        storage: '150 GB libres en SSD NVMe'
      }
    },
    versions: [
      {
        version: '2026 v6.9',
        releaseDate: '2026-03-22',
        size: '28.5 GB',
        changelog: [
          'Actualizadas todas las aplicaciones internas de la suite a sus versiones del mes de marzo.',
          'Optimizado el instalador unificado para instalaciones de red simultáneas.',
          'Corrección de problemas de compatibilidad cruzada de códecs de audio entre Premiere y Audition.'
        ],
        downloadUrl: 'https://www.adobe.com/creativecloud.html'
      },
      {
        version: '2025 v6.5',
        releaseDate: '2025-11-15',
        size: '26.8 GB',
        changelog: [
          'Colección estable de versiones del año anterior totalmente integrada.'
        ],
        downloadUrl: 'https://www.adobe.com/creativecloud.html'
      }
    ],
    reviews: [
      {
        id: 'rev-ccc1',
        username: 'agency_director',
        rating: 5,
        date: '2026-03-25',
        comment: 'La mejor recopilación que se puede encontrar, limpia, directa y con instalación súper robusta.'
      }
    ]
  },
  {
    id: 'steinberg-nuendo',
    name: 'Steinberg Nuendo',
    subtitle: 'La suite de producción de audio para cine, televisión, juegos y VR',
    category: 'Software',
    subcategory: 'Producción Musical',
    icon: 'Disc',
    rating: 4.9,
    downloads: 54000,
    size: '1.2 GB',
    latestVersion: 'v15.0.21',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-03-15',
    developer: 'Steinberg Media Technologies',
    license: 'Completo (Full)',
    description: 'Nuendo es el software de referencia absoluta para posproducción de audio profesional en la industria del cine y videojuegos.',
    detailedDescription: 'Ofrece herramientas especializadas de doblaje automático (ADR), mezcla de sonido inmersivo Dolby Atmos, ruteo para realidad virtual y un motor de audio de 64 bits en coma flotante de máxima pureza acústica.',
    features: [
      'Módulos robustos para mezcla y posproducción de audio envolvente e inmersivo Dolby Atmos.',
      'Módulo ADR (Automatic Dialog Replacement) avanzado para grabación de voces y doblajes.',
      'Soporte completo de integración de middleware para motores de juegos como Wwise.',
      'Efectos acústicos nativos de nivel de estudio y soporte de plugins VST3 avanzado.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core i5 o AMD Ryzen 5 o superior',
        memory: '8 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '5 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core i7 o AMD Ryzen 7 o superior (Apple Silicon M-Series)',
        memory: '16 GB RAM o superior',
        graphics: 'Gráficos dedicados compatibles',
        storage: '20 GB libres (SSD altamente recomendado)'
      }
    },
    versions: [
      {
        version: 'v15.0.21',
        releaseDate: '2026-03-15',
        size: '1.2 GB',
        changelog: [
          'Mejoras en el motor de mezcla inmersiva con ruteo simplificado para auriculares estéreo.',
          'Nuevos compresores acústicos que simulan hardware de válvulas vintage.',
          'Corrección de caídas de latencia en controladores nativos Yamaha ASIO.'
        ],
        downloadUrl: 'https://www.steinberg.net/nuendo/'
      },
      {
        version: 'v14.0.0',
        releaseDate: '2025-10-18',
        size: '1.15 GB',
        changelog: [
          'Módulo de alineación de voces e instrumentos optimizado para ruidos de silbidos.'
        ],
        downloadUrl: 'https://www.steinberg.net/nuendo/'
      }
    ],
    reviews: [
      {
        id: 'rev-sn1',
        username: 'sound_designer',
        rating: 5,
        date: '2026-03-18',
        comment: 'La fidelidad del sonido es asombrosa, y el ruteo de Dolby Atmos funciona a la perfección en mi estudio.'
      }
    ]
  },
  {
    id: 'autocad-lt',
    name: 'Autodesk AutoCAD LT 2027',
    subtitle: 'El software de diseño asistido por computadora 2D de referencia',
    category: 'Software',
    subcategory: 'Diseño CAD',
    icon: 'Compass',
    rating: 4.8,
    downloads: 98000,
    size: '2.8 GB',
    latestVersion: 'v2027',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-03-10',
    developer: 'Autodesk Inc.',
    license: 'Completo (Pre-Activado)',
    description: 'AutoCAD LT 2027 es la herramienta perfecta para ingenieros, arquitectos y diseñadores que requieren del dibujo técnico en 2D con la máxima precisión.',
    detailedDescription: 'Ofrece herramientas avanzadas de acotado inteligente, bloques dinámicos, referencias externas, comparación de planos DWG y excelente soporte para exportaciones a formatos PDF vectoriales de alta definición.',
    features: [
      'Dibujo técnico en 2D de precisión geométrica con herramientas de acotado inteligente.',
      'Soporte completo y nativo para el formato de archivos DWG estándar de la industria.',
      'Módulo de comparación de planos (DWG Compare) para detectar cambios visuales al instante.',
      'Creación y edición de bloques dinámicos inteligentes para ahorrar tiempo de delineado.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel o AMD a 2.5 GHz o superior',
        memory: '8 GB RAM',
        graphics: 'GPU con 1 GB de VRAM compatible con DirectX 11',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel o AMD de 3.0 GHz o superior (Apple Silicon M-Series)',
        memory: '16 GB RAM o superior',
        graphics: 'GPU con 4 GB de VRAM compatible con DirectX 12',
        storage: '10 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: 'v2027',
        releaseDate: '2026-03-10',
        size: '2.8 GB',
        changelog: [
          'Lanzamiento oficial de AutoCAD LT 2027 con motor gráfico acelerado por GPU un 30% más rápido.',
          'Nueva herramienta inteligente de conteo de bloques dinámicos integrada.',
          'Corrección de cuelgues al trazar archivos de planos con referencias externas cruzadas.'
        ],
        downloadUrl: 'https://www.autodesk.com/products/autocad-lt/overview'
      },
      {
        version: 'v2026',
        releaseDate: '2025-03-15',
        size: '2.6 GB',
        changelog: [
          'Versión anterior muy estable con parches acumulativos de seguridad integrados.'
        ],
        downloadUrl: 'https://www.autodesk.com/products/autocad-lt/overview'
      }
    ],
    reviews: [
      {
        id: 'rev-ac1',
        username: 'arq_mario',
        rating: 5,
        date: '2026-03-12',
        comment: 'El mejor software para delineado de planos 2D. La velocidad de render en esta versión 2027 es fantástica.'
      }
    ]
  },
  {
    id: 'adobe-animate',
    name: 'Adobe Animate 2026',
    subtitle: 'Crea animaciones vectoriales interactivas para múltiples plataformas',
    category: 'Software',
    subcategory: 'Animación',
    icon: 'Play',
    rating: 4.8,
    downloads: 82050,
    size: '2.1 GB',
    latestVersion: '2026 v24.0.13.5',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-03-02',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Animate te permite diseñar animaciones vectoriales interactivas para juegos, series de televisión, la web y publicidad.',
    detailedDescription: 'La suite de animación heredera de Flash. Soporta exportaciones en formatos HTML5 Canvas, WebGL, Flash/Adobe Air, SVG y video HD. Incluye herramientas avanzadas de rigging de personajes mediante huesos (Asset Warp) e interpolaciones fluidas.',
    features: [
      'Herramienta de deformación de activos (Asset Warp) inteligente para crear rigs de personajes rápidos.',
      'Soporte completo para exportar animaciones fluidas a formatos modernos de videojuegos y web.',
      'Pinceles vectoriales de alta precisión con simulación realista de velocidad y presión.',
      'Sincronización de audio automática con detección facial y de diálogos de voz nativos.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS 11+',
        processor: 'Intel Core o AMD Ryzen de 4 núcleos',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con OpenGL 3.3',
        storage: '4 GB libres'
      },
      recommended: {
        os: 'Windows 11 / macOS Sonoma',
        processor: 'Intel Core o AMD Ryzen de 6 núcleos o superior',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada compatible con OpenGL 4.0 con 2GB VRAM',
        storage: '8 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v24.0.13.5',
        releaseDate: '2026-03-02',
        size: '2.1 GB',
        changelog: [
          'Mejorada la velocidad del renderizado en tiempo real de escenas con rigging denso.',
          'Nuevas plantillas de diseño y personajes vectoriales de inicio rápido.',
          'Corrección de pérdida de fotogramas al exportar en formato de compresión MP4.'
        ],
        downloadUrl: 'https://www.adobe.com/products/animate.html'
      },
      {
        version: '2025 v23.0.0',
        releaseDate: '2025-10-14',
        size: '1.9 GB',
        changelog: [
          'Módulo de deformación de activos vectoriales optimizado para figuras complejas.'
        ],
        downloadUrl: 'https://www.adobe.com/products/animate.html'
      }
    ],
    reviews: [
      {
        id: 'rev-aan1',
        username: 'anim_designer',
        rating: 4.7,
        date: '2026-03-05',
        comment: 'Muy estable. El rigging por Asset Warp me ahorra horas al animar mis sketches vectoriales.'
      }
    ]
  },
  {
    id: 'coreldraw-technical',
    name: 'CorelDRAW Technical Suite 2026',
    subtitle: 'La suite completa de ilustración técnica y diseño técnico de precisión',
    category: 'Software',
    subcategory: 'Diseño Gráfico',
    icon: 'Layout',
    rating: 4.8,
    downloads: 64100,
    size: '3.2 GB',
    latestVersion: '2026 v27.0.0.121',
    compatibility: ['Windows'],
    updateDate: '2026-02-25',
    developer: 'Corel Corporation',
    license: 'Completo (Full)',
    description: 'CorelDRAW Technical Suite reúne herramientas de ilustración de alta precisión con el galardonado motor de diseño de CorelDRAW en un solo entorno.',
    detailedDescription: 'Diseñada específicamente para ingenieros, maquetadores de manuales de instrucciones e ilustradores industriales. Cuenta con herramientas para proyectar planos 3D en planos isométricos planos, compatibilidad de formatos CAD de alto nivel e indexado de textos.',
    features: [
      'Proyección isométrica en tiempo real para dibujar piezas industriales complejas de forma rápida.',
      'Soporte completo e importación limpia para formatos CAD y modelos en 3D (DWG, IGES, STEP).',
      'Maquetación técnica avanzada para la creación ágil de manuales de montaje de múltiples páginas.',
      'Incluye CorelDRAW, Corel PHOTO-PAINT, Corel DESIGNER y XVL Studio Corel Edition de forma integrada.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 / Windows 11 (64-bit)',
        processor: 'Intel Core i3 o AMD Ryzen 3 o superior',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con OpenCL 1.2 con 2 GB de VRAM',
        storage: '5 GB libres'
      },
      recommended: {
        os: 'Windows 11',
        processor: 'Intel Core i7 o AMD Ryzen 7 o superior',
        memory: '16 GB RAM o superior',
        graphics: 'GPU dedicada compatible con OpenCL 2.0 con 4 GB de VRAM o superior',
        storage: '15 GB libres (SSD recomendado)'
      }
    },
    versions: [
      {
        version: '2026 v27.0.0.121',
        releaseDate: '2026-02-25',
        size: '3.2 GB',
        changelog: [
          'Lanzamiento comercial optimizado con algoritmos de trazado inteligente de líneas industriales.',
          'Nueva barra de herramientas con acceso directo a planos de proyección axonométrica.',
          'Corrección de distorsiones visuales al exportar planos en alta resolución en formato SVG.'
        ],
        downloadUrl: 'https://www.coreldraw.com/en/product/technical-suite/'
      },
      {
        version: '2025 v26.0.0',
        releaseDate: '2025-02-15',
        size: '3.0 GB',
        changelog: [
          'Colección anterior muy robusta con parches acumulativos de estabilidad integrados.'
        ],
        downloadUrl: 'https://www.coreldraw.com/en/product/technical-suite/'
      }
    ],
    reviews: [
      {
        id: 'rev-cdt1',
        username: 'tech_illustrator',
        rating: 5,
        date: '2026-02-27',
        comment: 'Imprescindible para maquetar despieces técnicos en perspectiva isométrica. Súper preciso.'
      }
    ]
  },
  {
    id: 'coreldraw-x6',
    name: 'CorelDRAW X6',
    subtitle: 'El clásico y legendario editor de gráficos vectoriales de alto rendimiento',
    category: 'Software',
    subcategory: 'Diseño Gráfico',
    icon: 'Scissors',
    rating: 4.8,
    downloads: 154000,
    size: '640 MB',
    latestVersion: 'v16.0.0 (X6)',
    compatibility: ['Windows'],
    updateDate: '2026-02-10',
    developer: 'Corel Corporation',
    license: 'Completo (Full)',
    description: 'CorelDRAW X6 destaca por ser la versión más ligera, estable y eficiente para computadoras de gama baja o sistemas operativos heredados.',
    detailedDescription: 'Un absoluto clásico de la industria gráfica. Su compatibilidad inigualable, rapidez al abrirse en equipos modestos y sólida estructura lo convierten en el software preferido por imprentas y talleres de rotulación a nivel mundial.',
    features: [
      'Entorno de ilustración vectorial y diseño de páginas sumamente ágil y de alta estabilidad.',
      'Excelente rendimiento y compatibilidad garantizada en ordenadores antiguos de bajos recursos.',
      'Herramientas potentes de edición fotográfica integrada mediante Corel PHOTO-PAINT X6.',
      'Soporte nativo robusto para procesadores multinúcleo y sistemas de archivos DWG.'
    ],
    requirements: {
      minimum: {
        os: 'Windows XP / Vista / 7 / 8 / 10 / 11',
        processor: 'Intel Pentium 4 o AMD Athlon 64 o superior',
        memory: '1 GB RAM',
        graphics: 'Gráficos integrados',
        storage: '1.5 GB libres'
      },
      recommended: {
        os: 'Windows 7 / Windows 10',
        processor: 'Intel Core o AMD multinúcleo',
        memory: '4 GB RAM o superior',
        graphics: 'Gráficos dedicados',
        storage: '3 GB libres'
      }
    },
    versions: [
      {
        version: 'v16.0.0 (X6)',
        releaseDate: '2026-02-10',
        size: '640 MB',
        changelog: [
          'Compilación clásica con parches de compatibilidad integrados para funcionar perfectamente en Windows 10 y Windows 11.',
          'Módulo de activación automático invisible e incorporado de fábrica.',
          'Optimizada la velocidad del procesamiento y la memoria caché al abrir archivos masivos de rotulación.'
        ],
        downloadUrl: 'https://www.coreldraw.com/'
      },
      {
        version: 'v15.0.0 (X5)',
        releaseDate: '2024-05-15',
        size: '580 MB',
        changelog: [
          'Versión clásica estable anterior adaptada para sistemas operativos de 32 bits.'
        ],
        downloadUrl: 'https://www.coreldraw.com/'
      }
    ],
    reviews: [
      {
        id: 'rev-cx6-1',
        username: 'plotter_guy',
        rating: 5,
        date: '2026-02-12',
        comment: 'La versión que nunca falla. Lo uso para mandar cortes al plotter de vinilo de mi imprenta y es indestructible.'
      }
    ]
  }
];
