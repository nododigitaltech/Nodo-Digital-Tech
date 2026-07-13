import { Program } from '../types';

export const programsPart2: Program[] = [
  {
    id: 'after-effects',
    name: 'Adobe After Effects 2026',
    subtitle: 'El estándar de la industria para efectos visuales y gráficos animados',
    category: 'Software',
    subcategory: 'Efectos Visuales',
    icon: '/images/logos/After Effects Logo.png',
    rating: 4.9,
    downloads: 142000,
    size: '3.1 GB',
    latestVersion: '26.3.0.87',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-17',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe After Effects es la aplicación estándar en la industria de la postproducción audiovisual y el diseño digital, concebida para la creación de gráficos en movimiento (motion graphics), efectos visuales (VFX) avanzados y la composición digital de elementos complejos para cine, televisión, video y la web.',
    detailedDescription: 'Adobe After Effects es la aplicación estándar en la industria de la postproducción audiovisual y el diseño digital, concebida para la creación de gráficos en movimiento (motion graphics), efectos visuales (VFX) avanzados y la composición digital de elementos complejos para cine, televisión, video y la web. Su motor de renderizado y su estructura basada en capas y líneas de tiempo permiten integrar metraje real de video con elementos generados por computadora (CGI), animaciones vectoriales, tipografías dinámicas y efectos de partículas. Funciona como un espacio central donde convergen la manipulación espacial en 2D y 3D, la manipulación cromática y la sincronización temporal precisa, facilitando que los creadores unifiquen múltiples recursos gráficos bajo un mismo entorno de trabajo interconectado con el resto del ecosistema de Adobe.',
    features: [
      'Espacio de Composición Multidimensional (2D y 3D): Permite trabajar simultáneamente con elementos planos bidimensionales y objetos o cámaras tridimensionales, calculando de manera realista las interacciones de profundidad, la perspectiva y las sombras entre los diferentes elementos de la escena.',
      'Control de Animación por Fotogramas Clave (Keyframes) y Expresiones: Ofrece un control absoluto sobre el movimiento y las propiedades de los objetos a lo largo del tiempo, permitiendo automatizar comportamientos complejos, físicas o interpolaciones fluidas mediante el uso de expresiones basadas en JavaScript.',
      'Herramientas Avanzadas de Enmascaramiento y Rotoscopia: Facilita el aislamiento de sujetos u objetos en movimiento dentro de un video plano mediante la creación de máscaras vectoriales con calado ajustable y herramientas inteligentes para extraer elementos fotograma a fotograma.',
      'Efectos de Simulación y Estabilización de Imagen: Incluye motores de rastreo de cámara en 3D (3D Camera Tracker), seguimiento de movimiento de puntos y estabilizadores de imagen avanzados para corregir vibraciones de cámara o integrar gráficos fijos sobre superficies en movimiento real.',
      'Integración Nativa con Aplicaciones de Diseño: Se conecta de forma fluida con Adobe Illustrator y Photoshop, permitiendo importar archivos vectoriales nativos en capas independientes para animar cada trazo o elemento gráfico sin pérdida de calidad.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 11 v24H2 (Intel/AMD/Arm)',
        processor: 'Intel 6.ª gen, AMD Ryzen 1000 o Snapdragon X (con AVX2)',
        memory: '16 GB RAM',
        graphics: 'NVIDIA Maxwell, AMD o Intel dedicada de 4 GB VRAM (compatible con OpenCL 2.0)',
        storage: '8 GB de espacio disponible + unidad adicional de alta velocidad'
      },
      recommended: {
        os: 'Windows 11 v24H2 o posterior',
        processor: 'Intel 11.ª gen con Quick Sync / AMD Ryzen o Threadripper 3000',
        memory: '16 GB para HD / 32 GB o más para 4K',
        graphics: 'GPU dedicada con 8 GB de VRAM',
        storage: 'SSD rápido para instalación/caché + unidades adicionales de alta velocidad'
      }
    },
    versions: [
      {
        version: '26.3.0.87',
        releaseDate: '2026-06-17',
        size: '3.1 GB',
        changelog: [
          'Crear y usar Profundidad de campo en el procesador Advanced 3D: Permite crear un efecto de profundidad de campo para enfocar modelos 3D, mallas paramétricas, materiales de Substance 3D, texto 3D y capas de forma dentro del motor Advanced 3D.',
          'Copiar y pegar contenido de Illustrator y SVG: Permite pegar contenido SVG directamente desde Illustrator u otras aplicaciones hacia After Effects convirtiéndolo en capas de forma nativas y editables mediante la opción de menú de edición y pegar.',
          'Rastreador de máscaras actualizado: Ofrece un seguimiento de máscaras optimizado que es hasta 5 veces más rápido y preciso, incorporando controles accesibles para iniciar el proceso directo desde el panel de la línea de tiempo.',
          'Copiar un marco al portapapeles: Permite capturar el marco procesado actualmente como una imagen fija desde el panel de composición, material de archivo o capa para copiarlo al portapapeles del sistema con un solo clic.',
          'Efecto Curl Noise para patrones 2D animados en espiral: Crea ruido 2D con un comportamiento fluido y orgánico asemejándose a texturas de humo, agua o tinta, diseñado para lograr movimientos suaves y continuos en fondos y animaciones abstractas.',
          'Encuentra rápidamente fuentes variables por eje: Permite filtrar de forma directa la lista de tipografías para mostrar exclusivamente aquellas que son fuentes variables, facilitando su localización y trabajo con sus ejes.'
        ],
        downloadUrl: 'https://www.adobe.com/es/products/aftereffects.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$20.99' },
          { plan: 'Plan anual', price: 'US$239.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/es/products/aftereffects.html'
  },
  {
    id: 'adobe-audition',
    name: 'Adobe Audition 2026',
    subtitle: 'La herramienta definitiva para mezclar, editar y restaurar audio digital',
    category: 'Utilidades',
    subcategory: 'Edición de Audio',
    icon: '/images/logos/Adobe Audition Logo.png',
    rating: 4.8,
    downloads: 85000,
    size: '890 MB',
    latestVersion: '26.3.0.79',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-17',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Audition es una estación de trabajo de audio digital (DAW) profesional de vanguardia desarrollada por Adobe, concebida para la grabación, edición, mezcla, diseño de sonido y masterización de contenidos de audio con una precisión milimétrica.',
    detailedDescription: 'Adobe Audition es una estación de trabajo de audio digital (DAW) profesional de vanguardia desarrollada por Adobe, concebida para la grabación, edición, mezcla, diseño de sonido y masterización de contenidos de audio con una precisión milimétrica. El software integra un entorno de edición multipista no destructivo junto con una visualización de forma de onda y un visor de frecuencia espectral, permitiendo a los creadores aislar y corregir problemas de sonido a nivel microscópico. Está optimizado para integrarse de forma fluida con los flujos de trabajo de producción de video, especialmente mediante la conexión dinámica con Adobe Premiere Pro, facilitando la sincronización, el pulido y la entrega de pistas sonoras cristalinas para cine, televisión, pódcasts y medios digitales.',
    features: [
      'Entorno Multipista y Editor de Forma de Onda: Combina una vista multipista para construir composiciones complejas con capas de audio superpuestas y un editor de forma de onda dedicado a modificaciones precisas de amplitud y efectos puntuales.',
      'Visualización de Frecuencia Espectral: Permite examinar visualmente las frecuencias del sonido en un gráfico espectral para identificar, seleccionar y eliminar ruidos molestos (como zumbidos, clics o toses) directamente en el espectro visual sin afectar la voz o la música principal.',
      'Panel de Sonido Esencial (Essential Sound): Proporciona herramientas simplificadas e intuitivas para lograr resultados de mezcla con calidad profesional de estudio, incluso para usuarios que no son expertos en ingeniería de sonido.',
      'Herramientas Avanzadas de Restauración y Reducción de Ruido: Incluye efectos en tiempo real como DeNoise y DeReverb, además del eliminador de sonido (Sound Remover), para limpiar grabaciones defectuosas y eliminar ruidos de fondo o reverberaciones complejas de manera automatizada.',
      'Función de Remixado Inteligente y Ajuste de Volumen: Incorpora capacidades impulsadas por inteligencia artificial para reorganizar automáticamente cualquier pista musical adaptándola a la duración exacta de un video (Remix), junto con la función de atenuación automática (Auto-ducking) para equilibrar diálogos y música de fondo.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 11 v24H2 (Intel/AMD/Snapdragon X)',
        processor: 'Intel 6.ª gen, AMD Ryzen 1000 o Snapdragon X (con AVX2)',
        memory: '8 GB RAM',
        graphics: 'GPU con al menos 2 GB de VRAM',
        storage: '8 GB libres + unidad de alta velocidad para medios'
      },
      recommended: {
        os: 'Windows 11 v24H2 o posterior',
        processor: 'Intel 11.ª gen con Quick Sync / AMD Ryzen o Threadripper 3000',
        memory: '16 GB para HD / 32 GB o más para 4K',
        graphics: 'GPU dedicada con 8 GB de VRAM',
        storage: 'SSD rápido para instalación/caché + unidades de alta velocidad'
      }
    },
    versions: [
      {
        version: '26.3.0.79',
        releaseDate: '2026-06-17',
        size: '890 MB',
        changelog: [
          'Compatibilidad nativa con Windows ARM: Adobe Audition ahora se ejecuta de forma nativa en los sistemas Windows ARM, lo que ofrece un rendimiento y una eficiencia mejorados para dispositivos basados en ARM.'
        ],
        downloadUrl: 'https://www.adobe.com/products/audition.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$34.49' },
          { plan: 'Plan anual', price: 'US$263.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/products/audition.html'
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
    icon: '/images/logos/Adobe Premiere Logo.png',
    rating: 4.9,
    downloads: 245000,
    size: '2.4 GB',
    latestVersion: '26.3.0.93',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-09',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Premiere Pro es un software de edición de vídeo no lineal profesional desarrollado por Adobe Inc., integrado en la suite de Creative Cloud, y considerado un estándar de la industria para la producción, postproducción y creación de contenidos audiovisuales en cine, televisión y medios digitales.',
    detailedDescription: 'Adobe Premiere Pro es un software de edición de vídeo no lineal profesional desarrollado por Adobe Inc., integrado en la suite de Creative Cloud, y considerado un estándar de la industria para la producción, postproducción y creación de contenidos audiovisuales en cine, televisión y medios digitales. Su arquitectura permite la manipulación fluida de múltiples pistas de vídeo y audio de manera simultánea a través de una línea de tiempo flexible y personalizable, soportando resoluciones ultra altas desde 4K y 8K hasta formatos panorámicos masivos y realidad virtual, impulsado además por el motor de reproducción acelerada por hardware Mercury Playback Engine.',
    features: [
      'Edición no lineal multicapa y multipista: Permite organizar, recortar, superponer y coordinar una cantidad ilimitada de pistas de vídeo y audio de forma simultánea, facilitando el manejo de secuencias anidadas y jerarquizadas.',
      'Compatibilidad nativa con múltiples formatos y códecs: Admite la importación y exportación directa de una inmensa variedad de archivos multimedia y formatos RAW de cámaras profesionales sin necesidad de conversiones previas complejas.',
      'Integración total con el ecosistema Creative Cloud: Se conecta fluidamente con aplicaciones como After Effects, Photoshop y Adobe Audition, permitiendo incorporar gráficos animados, elementos visuales y mezclas de sonido avanzadas dentro del mismo flujo de trabajo.',
      'Herramientas avanzadas de colorimetría y gradación: Ofrece controles precisos de Lumetri Color para ajustar tonos, brillos, curvas de saturación y normalizar material de archivo o metadatos de registro de manera profesional.',
      'Funciones inteligentes impulsadas por IA: Integra capacidades automatizadas como la edición basada en transcripciones de texto, la detección de contenido e identificación rápida de objetos en las escenas.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 11 v24H2 (Intel/AMD/Arm)',
        processor: 'Intel 6.ª gen, AMD Ryzen 1000 o Snapdragon X (con AVX2)',
        memory: '8 GB RAM (16 GB para Windows en Arm)',
        graphics: 'NVIDIA Maxwell, AMD o Intel dedicada de 4 GB VRAM (Adreno para Arm)',
        storage: '8 GB libres + unidad adicional de alta velocidad (Pantalla: 1920x1080)'
      },
      recommended: {
        os: 'Windows 11 v24H2 o posterior',
        processor: 'Intel 11.ª gen con Quick Sync / AMD Ryzen o Threadripper 3000 / Snapdragon X',
        memory: '16 GB para HD / 32 GB o más para 4K',
        graphics: 'GPU dedicada con 8 GB de VRAM',
        storage: 'SSD rápido para instalación/caché + unidades de alta velocidad (Pantalla: 1080p+ / HDR)'
      }
    },
    versions: [
      {
        version: '26.3.0.93',
        releaseDate: '2026-07-09',
        size: '2.4 GB',
        changelog: [
          'Crear secuencias automáticamente a partir de medios de Tableros de Firefly: Importa medios de Tableros de Firefly a Premiere como una secuencia lista para editar con clips organizados en orden de selección.',
          'Crear subtítulos de una sola palabra para redes sociales: Genera subtítulos que muestran una palabra a la vez para videos de ritmo rápido, permitiendo personalizar el estilo y exportar los rótulos exactamente como aparecen en la vista previa.',
          'Crea transiciones personalizadas con Fusión de forma: Utiliza la transición Fusión de forma para crear desde barridos limpios hasta fusiones geométricas dinámicas, con control total sobre la forma, el movimiento y la sincronización.',
          'Resalta detalles con el efecto Ampliar: Atrae la atención a áreas importantes del vídeo con una vista de aumento personalizable, ajustando el zoom, la posición, la suavidad de los bordes y el estilo.',
          'Mejoras de Máscara de objeto: Cuenta con un rendimiento de seguimiento mejorado y restauración automática de máscaras al trasladar proyectos entre sistemas.',
          'Compatibilidad con Sony Burano V3: Añade soporte para dos nuevas resoluciones para material RAW X-OCN de la cámara Sony BURANO V3: anamórfico de marco completo 5.8K y recorte Super 35 3.8K (16:9), hasta 120 fps.',
          'Compatibilidad con Canon Cinema RAW Light para cuatro cámaras Canon: Añade compatibilidad con archivos Canon Cinema RAW Light de las EOS C50, EOS R6 Mark III, EOS R6 V y EOS C400.'
        ],
        downloadUrl: 'https://www.adobe.com/products/premiere.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$34.49' },
          { plan: 'Plan anual', price: 'US$263.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/products/premiere.html'
  },
  {
    id: 'adobe-illustrator',
    name: 'Adobe Illustrator 2026',
    subtitle: 'La aplicación de gráficos vectoriales de referencia para diseño y logotipos',
    category: 'Software',
    subcategory: 'Diseño Vectorial',
    icon: '/images/logos/Adobe Illustrator Logo.png',
    rating: 4.9,
    downloads: 195000,
    size: '1.9 GB',
    latestVersion: '30.6.0.109',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-07',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Illustrator es el software de gráficos vectoriales estándar de la industria desarrollado por Adobe Inc., diseñado específicamente para permitir a los artistas, diseñadores gráficos y profesionales crear ilustraciones vectoriales escalables infinitamente sin pérdida de calidad.',
    detailedDescription: 'Adobe Illustrator es el software de gráficos vectoriales estándar de la industria desarrollado por Adobe Inc., diseñado específicamente para permitir a los artistas, diseñadores gráficos y profesionales crear ilustraciones vectoriales escalables infinitamente sin pérdida de calidad, logotipos complejos, tipografías personalizadas, iconos detallados y complejos diseños de página para impresión, web y medios interactivos. Su motor matemático y vectorial permite trabajar con trazos, puntos de anclaje, curvas de Bezier y mallas de degradado de alta precisión, integrándose a la perfección con el ecosistema de Adobe Creative Cloud para flujos de trabajo multiplataforma fluidos.',
    features: [
      'Edición Vectorial de Precisión: Permite crear y modificar formas geométricas, trazados libres, plumas y puntos de anclaje que mantienen una definición nítida y perfecta sin importar si se escalan al tamaño de una tarjeta de presentación o al de una valla publicitaria gigante.',
      'Herramientas Avanzadas de Tipografía: Ofrece control minúsculo sobre las fuentes permitiendo convertir texto en trazos vectoriales editables, modificar glifos individuales, crear familias tipográficas propias y alinear textos en curvas o formas personalizadas.',
      'Mallas de Degradado (Gradient Mesh) y Colorimetría: Facilita la aplicación de transiciones de color sumamente complejas y realistas sobre objetos vectoriales mediante puntos de intersección en una malla, logrando efectos de volumen e iluminación tridimensional de nivel superior.',
      'Mesas de Trabajo Múltiples (Artboards): Permite organizar, visualizar y editar docenas de diseños, variaciones de tamaño o páginas individuales dentro de un mismo archivo de proyecto de manera simultánea y con opciones de exportación independiente.',
      'Herramientas de IA y Automatización Inteligente: Integra funciones impulsadas por inteligencia artificial para la vectorización avanzada de imágenes de mapa de bits, la recolorización generativa de ilustraciones y la creación rápida de patrones repetitivos dinámicos.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v22H2 / Windows 11 (v23H2, v24H2)',
        processor: 'Intel o AMD multinúcleo (64-bit, SSE 4.2+)',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con OpenGL 4.0 con 1 GB de VRAM',
        storage: '3 GB libres (Resolución: 1024x768)'
      },
      recommended: {
        os: 'Windows 11 o posterior',
        processor: 'Intel o AMD multinúcleo de alto rendimiento (64-bit)',
        memory: '16 GB RAM o más',
        graphics: 'GPU dedicada con 4 GB de VRAM o más',
        storage: 'SSD rápido para instalación/caché (Resolución: 1920x1080+)'
      }
    },
    versions: [
      {
        version: '30.6.0.109',
        releaseDate: '2026-07-07',
        size: '1.9 GB',
        changelog: [
          'Volver a vincular todas las instancias de una imagen vinculada a la vez: Vuelve a vincular una instancia de una imagen vinculada y actualiza automáticamente todas las ocurrencias en todo el documento.',
          'Acelera las tareas de alineación y espaciado con métodos abreviados de teclado: Asignar métodos abreviados de teclado, grabar las tareas de alineación y espaciado como acciones, y obtener una vista previa de los cambios de espaciado antes de aplicarlos.'
        ],
        downloadUrl: 'https://www.adobe.com/products/illustrator.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$34.49' },
          { plan: 'Plan anual', price: 'US$263.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/products/illustrator.html'
  },
  {
    id: 'ccleaner-pro',
    name: 'CCleaner Professional Plus',
    subtitle: 'La suite de optimización, limpieza y privacidad para tu PC',
    category: 'Utilidades',
    subcategory: 'Optimización',
    icon: '/images/logos/Ccleaner Logo.png',
    rating: 4.8,
    downloads: 320000,
    size: '42 MB',
    latestVersion: '7.09.1432',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-02',
    developer: 'Piriform Software',
    license: 'Plus (Completo)',
    description: 'CCleaner (originalmente conocido como Crap Cleaner) es una de las utilidades de optimización, mantenimiento y limpieza de sistemas operativos más veteranas y utilizadas del mercado.',
    detailedDescription: 'CCleaner (originalmente conocido como Crap Cleaner) es una de las utilidades de optimización, mantenimiento y limpieza de sistemas operativos más veteranas y utilizadas del mercado, desarrollada originalmente por Piriform y adquirida posteriormente por Avast (hoy parte de Gen Digital). Su función principal es la de buscar, detectar y eliminar archivos temporales, datos residuales, historiales de navegación, cookies de rastreo y entradas obsoletas del Registro de Windows que se van acumulando con el uso diario, permitiendo recuperar espacio de almacenamiento valioso y mejorar la fluidez general del equipo sin necesidad de realizar tareas complejas de mantenimiento manual.',
    features: [
      'Limpieza Profunda de Archivos Basura (Custom Clean): Analiza y elimina de forma segura archivos temporales, caché de aplicaciones, registros de errores y datos inútiles generados tanto por el sistema operativo como por aplicaciones de terceros instaladas en el equipo.',
      'Protección de Privacidad y Borrado de Rastros Web: Borra historiales de navegación, contraseñas guardadas temporalmente, caché y cookies de seguimiento de los principales navegadores (como Chrome, Firefox, Edge y Opera), evitando que los sitios web o usuarios compartidos accedan a la actividad privada.',
      'Limpieza y Reparación del Registro: Incluye un escáner integrado que detecta referencias rotas, extensiones de archivo huérfanas, rutas inválidas y entradas obsoletas en el Registro de Windows para intentar reducir errores y bloqueos del sistema.',
      'Gestor de Programas de Inicio (Startup): Permite controlar qué aplicaciones se ejecutan automáticamente al encender el equipo, facilitando la desactivación o el retraso de procesos innecesarios para acelerar significativamente el tiempo de arranque de la computadora.',
      'Herramientas de Desinstalación y Control de Software: Ofrece un administrador de aplicaciones mejorado que permite desinstalar programas de manera limpia y completa, eliminando archivos residuales o entradas que el desinstalador estándar de Windows a veces suele pasar por alto.',
      'Optimizaciones Avanzadas (Versiones Pro): Incorpora funciones automatizadas como la actualización de controladores obsoletos (Driver Updater), limpieza de unidades en la nube (Cloud Drive Cleaner) y funciones de limpieza inteligente en segundo plano cuando el equipo se encuentra inactivo.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / 8.1 / 10 / 11 (32/64-bit)',
        processor: 'Procesador de 1 GHz o superior',
        memory: '1 GB RAM',
        storage: '50-100 MB libres (Conexión a Internet obligatoria)'
      },
      recommended: {
        os: 'Windows 10 / 11 (64-bit)',
        processor: 'Procesador de 1 GHz o superior',
        memory: '2 GB RAM o más',
        storage: '100 MB libres'
      }
    },
    versions: [
      {
        version: '7.09.1432',
        releaseDate: '2026-07-02',
        size: '42 MB',
        changelog: [
          'Nuevos elementos en el Gestor de Inicio: Ahora puedes ver y desactivar los programas que se añaden de forma automática al menú contextual (el menú que aparece al hacer clic derecho en Windows).',
          'Nombres de programas mejorados: El Gestor de Inicio ahora muestra iconos y nombres de aplicaciones legibles para humanos en lugar de las confusas rutas o nombres de archivos originales (.exe).',
          'Solución de pantalla en blanco: Se corrigió un error visual por el cual la interfaz del programa a veces iniciaba completamente en color blanco o negro.',
          '🧹 Limpieza Avanzada y Registro: Soporte oficial añadido para Mozilla Thunderbird en Limpieza personalizada, corrección en la precisión del número de archivos eliminados y mejor visualización de problemas resueltos.',
          '🔄 Actualizador de Software (Software Updater): Los usuarios de la versión Professional ahora pueden elegir ignorar una versión específica de un programa o pausar por completo las alertas de actualización.',
          '🩺 Limpieza Inteligente (Health Check): Se incrementó el tamaño de la tipografía en la pantalla principal para facilitar su lectura en alta resolución y se actualizaron componentes de seguridad interna.'
        ],
        downloadUrl: 'https://www.ccleaner.com/es-es'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan 1 año', price: 'US$39.95' },
          { plan: 'Plan 2 años', price: 'US$69.95' }
        ]
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
    ],
    officialUrl: 'https://www.ccleaner.com/es-es'
  },
  {
    id: 'photoshop-2026',
    name: 'Adobe Photoshop 2026',
    subtitle: 'El software de retoque fotográfico y diseño digital más potente del mundo',
    category: 'Software',
    subcategory: 'Edición de Imagen',
    icon: '/images/logos/Adobe Photoshop Logo.png',
    rating: 4.9,
    downloads: 385000,
    size: '4.2 GB',
    latestVersion: '27.8.0.13',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-07-13',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Photoshop es el software de edición de imágenes ráster y manipulación fotográfica más avanzado y dominante del mundo, desarrollado por Adobe Inc., concebido para permitir a los fotógrafos, diseñadores gráficos, artistas digitales y profesionales de la industria crear, componer, retocar y transformar gráficos de mapa de bits con un nivel de control técnico y artístico inigualable.',
    detailedDescription: 'Adobe Photoshop es el software de edición de imágenes ráster y manipulación fotográfica más avanzado y dominante del mundo, desarrollado por Adobe Inc., concebido para permitir a los fotógrafos, diseñadores gráficos, artistas digitales y profesionales de la industria crear, componer, retocar y transformar gráficos de mapa de bits con un nivel de control técnico y artístico inigualable. Su motor operativo maneja complejos sistemas de capas, máscaras de opacidad, canales de color avanzados y herramientas de dibujo basadas en vectores y píxeles, permitiendo desde sutiles correcciones de color y retoque de retratos hasta la creación de fotomontajes hiperrealistas masivos y texturas tridimensionales complejas, complementado por potentes funciones impulsadas por inteligencia artificial para automatizar flujos de trabajo pesados.',
    features: [
      'Sistema Avanzado de Capas y Máscaras: Permite parar o estructurar proyectos complejos superponiendo elementos independientes con modos de fusión variados, opacidades y máscaras no destructivas para aislar o revelar partes específicas de la composición de manera flexible.',
      'Herramientas de Retoque y Relleno Inteligente con IA: Integra funciones punteras como el Relleno según el contenido (Content-Aware Fill) y la Creación Generativa por Inteligencia Artificial para eliminar, añadir o expandir elementos dentro de una fotografía de forma totalmente integrada y coherente con la iluminación del entorno.',
      'Edición de Color y Ajustes No Destructivos: Ofrece paneles profesionales de curvas, niveles, balance de color y tablas de búsqueda (LUTs) aplicados a través de capas de ajuste separadas, garantizando que el archivo original no sufra deterioro permanente en los píxeles.',
      'Manipulación Tipográfica y Vectorial Integrada: Combina la potencia del mapa de bits con herramientas de vectores precisas, permitiendo crear formas vectoriales, trazados y tipografías perfectamente escalables y editables dentro de la misma mesa de trabajo fotográfica.',
      'Soporte Completo para Canales 3D, Video y Formatos RAW: Admite la importación nativa de negativos digitales (RAW) de prácticamente cualquier cámara del mercado a través de Adobe Camera Raw, además de permitir la edición básica de secuencias de video en la línea de tiempo y la pintura de texturas sobre objetos tridimensionales.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v22H2 / Windows 11 v23H2 (Intel/AMD/WinARM)',
        processor: 'Intel or AMD con AVX2 y SSE 4.2 / Snapdragon X (Arm)',
        memory: '8 GB RAM',
        graphics: 'GPU compatible con DirectX 12 con 1.5 GB de VRAM',
        storage: '10 GB libres (Conexión a Internet obligatoria)'
      },
      recommended: {
        os: 'Windows 11 o posterior',
        processor: 'Intel o AMD multinúcleo rápido con AVX2 y SSE 4.2',
        memory: '16 GB RAM o superior',
        graphics: 'GPU compatible con DirectX 12 (4 GB VRAM para 4K+)',
        storage: '100 GB libres en SSD (unidad independiente para caché/scratch)'
      }
    },
    versions: [
      {
        version: '27.8.0.13',
        releaseDate: '2026-07-13',
        size: '4.2 GB',
        changelog: [
          'Usar Tableros de Firefly con Photoshop: Envía archivos PSD y PSDC de Photoshop directamente a Tableros de Firefly para colaborar y explorar la creatividad.',
          'Usar el modelo de IA generativa en Photoshop en el dispositivo: Elige si el procesamiento con IA generativa se ejecuta en la nube o localmente en tu dispositivo mediante la herramienta Quitar descargando un modelo de IA específico.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$34.49' },
          { plan: 'Plan anual', price: 'US$263.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/products/photoshop.html'
  },
  {
    id: 'cinema-4d',
    name: 'Cinema 4D Studio 2026',
    subtitle: 'Modelado, animación, simulación y renderizado 3D profesional ultrarrápido',
    category: 'Software',
    subcategory: 'Modelado 3D',
    icon: '/images/logos/Cinema 4D Logo.png',
    rating: 4.8,
    downloads: 72000,
    size: '1.4 GB',
    latestVersion: '4.2',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-25',
    developer: 'Maxon Computer',
    license: 'Studio (Completo)',
    description: 'Cinema 4D es un software profesional de modelado, animación, simulación y renderizado en 3D desarrollado por Maxon.',
    detailedDescription: 'Cinema 4D es un software profesional de modelado, animación, simulación y renderizado en 3D desarrollado por Maxon. Históricamente, Maxon estructuraba su software en varios niveles de licencias, donde la edición Cinema 4D Studio representaba la versión más completa, robusta y avanzada que integraba absolutamente todas las herramientas disponibles (incluyendo sistemas avanzados de rigging de personajes, dinámicas complejas, pelo, herramientas de escultura y nodos de render en red ilimitados). En las versiones modernas de Cinema 4D, Maxon unificó su oferta en una sola línea de producto principal de nivel profesional que contiene todo el poder de aquella antigua edición Studio, combinándolo además con motores de renderizado acelerados por GPU como Redshift. Es ampliamente utilizado en la industria del diseño de movimiento (motion graphics), efectos visuales (VFX), desarrollo de videojuegos, realidad virtual y visualización arquitectónica o de productos debido a su estabilidad y su curva de aprendizaje sumamente intuitiva.',
    features: [
      'El galardonado sistema MoGraph: Reconocido mundialmente en la industria y premiado por la Academia, permite clonar objetos de forma procedural, crear animaciones abstractas masivas, matrices y efectos con campos de fuerza (fields) de manera extremadamente rápida e intuitiva.',
      'Sistema de Simulación Unificado Avanzado: Integra un motor de simulaciones físicas basado en GPU capaz de interactuar de forma fluida y en tiempo real entre cuerpos rígidos, cuerpos blandos, telas, cuerdas, humo, fuego (pyro) y partículas unificadas.',
      'Modelado Poligonal y Paramétrico Flexible: Ofrece herramientas de modelado de superficies orgánicas e industriales sumamente potentes, modelado de subdivisión de superficies (SDS), y herramientas de escultura digital de alta precisión para esculpir formas complejas libremente.',
      'Rigging y Animación de Personajes: Incluye un conjunto completo de herramientas para crear esqueletos, controles cinemáticos directos e inversos (IK/FK), simulación de cabello, piel y plumas, facilitando la creación de animaciones complejas de criaturas y humanos.',
      'Integración Profunda de Renderizado (Redshift y Viewport HDR/EDR): Cuenta con un visor en tiempo real compatible con pantallas de alto rango dinámico y se integra de manera nativa con Redshift para lograr renderizados fotorrealistas acelerados por tarjeta gráfica.',
      'Compatibilidad Estándar e Intercambio de Datos: Soporta flujos de trabajo modernos mediante el formato universal USD (Universal Scene Description), Alembic, intercambio directo con ZBrush (GoZ) y una vinculación perfecta de postproducción con herramientas de composición como Adobe After Effects.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v22H2 / Windows 11 / macOS 14 (Sonoma)+',
        processor: 'Intel or AMD con AVX2 / Apple Silicon M1+ / Snapdragon X',
        memory: '16 GB RAM unificada',
        graphics: 'GPU compatible con DX12 (Maxwell/Polaris+) o Metal v2 (4 GB VRAM)',
        storage: 'Maxon App registrada (Internet obligatorio)'
      },
      recommended: {
        os: 'Windows 11 o posterior / macOS Sonoma o posterior',
        processor: 'Intel Core i7/i9 o AMD Ryzen 7/9 / Apple Silicon M3/M4',
        memory: '24 GB a 32 GB RAM (64 GB para simulaciones complejas)',
        graphics: 'NVIDIA RTX Ray Tracing (CUDA 9.0+) o AMD RDNA 2+ (8-12 GB VRAM)',
        storage: 'SSD NVMe rápido para caché y carga de programa'
      }
    },
    versions: [
      {
        version: '4.2',
        releaseDate: '2026-06-25',
        size: '1.4 GB',
        changelog: [
          'Solución de conflictos entre Redshift y Houdini: Corrige un error específico que afectaba de forma directa el proceso de instalación y comunicación entre el motor de renderizado y Houdini.',
          'Eliminación del bloqueo por carpetas DCC: Resuelve el problema donde la verificación de la carpeta de preferencias de aplicaciones de terceros (DCC) impedía erróneamente que los usuarios completaran la instalación de Redshift.',
          'Ajuste de licencias RLM: Se restringe la compatibilidad con licencias RLM flotantes antiguas que no estén unificadas, optimizando el inicio de sesión global.'
        ],
        downloadUrl: 'https://www.maxon.net/es/cinema-4d?srsltid=AfmBOooRsyU2TkkQul2DpTC_hqdxsseJWjzUgJSoFhs9QGnphok822P2'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$109' },
          { plan: 'Plan anual', price: 'US$839' }
        ]
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
    ],
    officialUrl: 'https://www.maxon.net/es/cinema-4d?srsltid=AfmBOooRsyU2TkkQul2DpTC_hqdxsseJWjzUgJSoFhs9QGnphok822P2'
  },
  {
    id: 'acrobat-pro',
    name: 'Adobe Acrobat Pro 2026',
    subtitle: 'La solución PDF definitiva para editar, convertir, proteger y firmar',
    category: 'Utilidades',
    subcategory: 'Gestión PDF',
    icon: '/images/logos/Adobe Acrobat Logo.png',
    rating: 4.8,
    downloads: 165000,
    size: '1.1 GB',
    latestVersion: '26.1.21691',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-05-12',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Acrobat Pro es la solución integral y avanzada de la familia Adobe para la gestión, creación, edición, conversión, firma y protección de documentos PDF de nivel profesional, cuyas características principales abarcan la edición directa de textos e imágenes dentro de los propios archivos PDF, la conversión bidimensional de documentos hacia y desde formatos de Microsoft Office (como Word, Excel o PowerPoint), la combinación de múltiples archivos en un único paquete organizado, la inserción de campos rellenables y firmas electrónicas avanzadas, la aplicación de contraseñas y restricciones de seguridad estrictas, y la colaboración en tiempo real con herramientas de seguimiento y revisión en la nube para flujos de trabajo empresariales y de oficina sin fricciones.',
    detailedDescription: 'Adobe Acrobat Pro es la solución integral y avanzada de la familia Adobe para la gestión, creación, edición, conversión, firma y protección de documentos PDF de nivel profesional, cuyas características principales abarcan la edición directa de textos e imágenes dentro de los propios archivos PDF, la conversión bidimensional de documentos hacia y desde formatos de Microsoft Office (como Word, Excel o PowerPoint), la combinación de múltiples archivos en un único paquete organizado, la inserción de campos rellenables y firmas electrónicas avanzadas, la aplicación de contraseñas y restricciones de seguridad estrictas, y la colaboración en tiempo real con herramientas de seguimiento y revisión en la nube para flujos de trabajo empresariales y de oficina sin fricciones.',
    features: [
      'Permite la edición directa de textos e imágenes dentro de los propios archivos PDF.',
      'Ofrece la conversión bidimensional de documentos hacia y desde formatos de Microsoft Office como Word, Excel o PowerPoint.',
      'Facilita la combinación de múltiples archivos en un único paquete organizado.',
      'Permite la inserción de campos rellenables y firmas electrónicas avanzadas.',
      'Aplica contraseñas y restricciones de seguridad estrictas.',
      'Incluye colaboración en tiempo real con herramientas de seguimiento y revisión en la nube para flujos de trabajo empresariales y de oficina sin fricciones.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10/11 (64 bits) / Server 2016+',
        processor: 'Intel o AMD a 1.5 GHz o superior',
        memory: '4 GB RAM',
        graphics: 'Aceleración de hardware (opcional)',
        storage: '4.5 GB de espacio disponible (Pantalla: 1024x768)'
      },
      recommended: {
        os: 'Windows 11 (64 bits)',
        processor: 'Intel o AMD multicore rápido',
        memory: '8 GB RAM o más',
        graphics: 'GPU compatible con DirectX con aceleración activa',
        storage: 'SSD rápido con más de 4.5 GB libres (Pantalla: 1080p+)'
      }
    },
    versions: [
      {
        version: '26.1.21691',
        releaseDate: '2026-05-12',
        size: '1.1 GB',
        changelog: [
          'La incorporación de PDF Spaces incluye pasos guiados con tarjetas de acción contextuales que muestran las siguientes acciones relevantes.',
          'Asistente de IA le permite editar y organizar archivos PDF mediante lenguaje natural, incluida la reorganización de páginas y la adición de encabezados, pies de página y marcas de agua.',
          'PDF Spaces permite a los propietarios compartir archivos en un solo espacio, hacer seguimiento de cuándo los destinatarios ven el espacio y agregar comentarios para recibir opiniones.',
          'Generar presentación admite indicaciones en japonés e italiano usando Adobe Express directamente dentro de Acrobat.',
          'Rellenar y firmar mejora la detección de campos de formulario para reducir la necesidad de correcciones manuales.',
          'Acrobat Reader en Windows incluye una opción para anclar Reader a la barra de tareas al iniciar para un acceso más rápido.'
        ],
        downloadUrl: 'https://www.adobe.com/products/acrobat-pro-cc.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$29.99' },
          { plan: 'Plan anual', price: 'US$239.88' }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev-ap1',
        username: 'legal_advisor',
        rating: 5,
        date: '2026-05-14',
        comment: 'La conversión a Word es la más limpia que he probado, excelente crack, pre-activado sin vueltas.'
      }
    ],
    officialUrl: 'https://www.adobe.com/products/acrobat-pro-cc.html'
  },
  {
    id: 'driver-booster',
    name: 'IObit Driver Booster Pro',
    subtitle: 'Actualizador de controladores de PC automático, rápido y seguro',
    category: 'Utilidades',
    subcategory: 'Controladores',
    icon: '/images/logos/Driver Booster Logo.png',
    rating: 4.7,
    downloads: 195000,
    size: '28 MB',
    latestVersion: '13.5.0.359',
    compatibility: ['Windows'],
    updateDate: '2026-06-17',
    developer: 'IObit',
    license: 'Pro (Completo)',
    description: 'Driver Booster es una utilidad especializada en la gestión, búsqueda y actualización de controladores de dispositivos (drivers) para sistemas operativos Windows, desarrollada por IObit.',
    detailedDescription: 'Driver Booster es una utilidad especializada en la gestión, búsqueda y actualización de controladores de dispositivos (drivers) para sistemas operativos Windows, desarrollada por IObit. Su función principal es la de analizar de forma automatizada el hardware interno y periféricos conectados a la computadora (como tarjetas gráficas, adaptadores de red, controladores de sonido, chipsets y dispositivos USB), identificar versiones obsoletas o faltantes, y descargar e instalar los paquetes correctos directamente desde las fuentes oficiales de los fabricantes. Está concebido para mantener el rendimiento del sistema optimizado, prevenir fallos de compatibilidad en juegos o aplicaciones exigentes, y asegurar la estabilidad general del equipo mediante un proceso automatizado que minimiza la intervención manual del usuario.',
    features: [
      'Escaneo Automatizado de Controladores Obsoletos: Realiza análisis profundos del sistema con un solo clic para detectar controladores desactualizados, reduciendo significativamente el riesgo de pérdida de rendimiento o fallos repentinos de hardware.',
      'Base de Datos Amplia y Segura: Accede a un catálogo masivo de controladores verificados que pasan por rigurosas pruebas de seguridad y compatibilidad de IObit, garantizando que las instalaciones provengan de los fabricantes legítimos.',
      'Modo de Juego y Optimización de Rendimiento (Game Boost): Prioriza los recursos del sistema durante la ejecución de videojuegos, deteniendo procesos en segundo plano innecesarios para mejorar los fotogramas por segundo (FPS) y la fluidez general.',
      'Punto de Restauración y Copia de Seguridad: Crea automáticamente una copia de seguridad o un punto de restauración del sistema antes de aplicar cualquier actualización de controladores, permitiendo revertir los cambios de forma instantánea si surge algún inconveniente de compatibilidad.',
      'Corrección de Errores de Dispositivos: Incorpora herramientas de diagnóstico integradas capaces de solucionar problemas comunes de hardware en Windows, tales como fallos de audio, pérdida de señal de red o errores con el Administrador de dispositivos.',
      'Actualización en Segundo Plano e Inactividad (Versiones Pro): Permite programar análisis automáticos y descargas de controladores mientras el equipo se encuentra inactivo, evitando interrumpir las tareas habituales del usuario.'
    ],
    requirements: {
      minimum: {
        os: 'Windows XP / Vista / 7 / 8 / 8.1 / 10 / 11 (32/64-bit)',
        processor: 'Intel, AMD o compatible a 1 GHz o más rápido',
        memory: '1 GB RAM',
        graphics: 'Resolución de 1024 x 768 píxeles o superior',
        storage: '1 GB libre (Internet para activación)'
      },
      recommended: {
        os: 'Windows 10 / 11 (con actualizaciones al día)',
        processor: 'Intel Core i3, AMD Ryzen 3 o superior (x86/x64/ARM64)',
        memory: '2 GB RAM o más',
        graphics: 'Conexión de banda ancha estable',
        storage: '4 GB libres en SSD (para respaldos automáticos)'
      }
    },
    versions: [
      {
        version: '13.5.0.359',
        releaseDate: '2026-06-17',
        size: '28.4 MB',
        changelog: [
          'Ampliación de la Base de Datos: Se expande la cobertura de drivers hasta alcanzar más de 18 millones de controladores y componentes de juego en su versión PRO, todos estrictamente firmados y verificados por los laboratorios de Microsoft WHQL.',
          'Optimización de Estabilidad para Windows 11: Corrección de pequeños fallos de compatibilidad con las actualizaciones de seguridad más recientes de Windows 10 y Windows 11.',
          'Refinamiento del Motor de Escaneo para ARM64: Ajuste de algoritmos para mejorar la detección nativa de controladores en arquitecturas ARM64 (laptops ultraligeras y tablets modernas).',
          'Parches de Herramientas de Reparación: Corrección de errores internos dentro de los módulos para solucionar problemas de audio ("Sin sonido"), fallos de resolución de pantalla y desconexiones de la tarjeta de red Wi-Fi/LAN.',
          'Actualización Limpia de Datos: Se mejoró la función de limpieza de datos de dispositivos inválidos o desconectados permanentemente de la placa madre para evitar conflictos en el registro de Windows.'
        ],
        downloadUrl: 'https://www.iobit.com/es/driver-booster-pro.php'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan anual 1 PC', price: 'EUR 17.99' },
          { plan: 'Plan anual 3 PCS', price: 'EUR 19.99' }
        ]
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
    ],
    officialUrl: 'https://www.iobit.com/es/driver-booster-pro.php'
  }
];
