import { Program } from '../types';

export const programsPart3: Program[] = [
  {
    id: 'camtasia-studio',
    name: 'Camtasia Studio 2026',
    subtitle: 'El grabador de pantalla y editor de video todo en uno',
    category: 'Software',
    subcategory: 'Grabación y Edición',
    icon: '/images/logos/Camtasia Studio Logo.png',
    rating: 4.8,
    downloads: 125000,
    size: '345 MB',
    latestVersion: '26.1.3.17772',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-11',
    developer: 'TechSmith',
    license: 'Completo (Full)',
    description: 'Camtasia (anteriormente conocido como Camtasia Studio en su versión para Windows) es una potente suite de software todo en uno orientada a la grabación de pantalla y la edición de vídeo, desarrollada por TechSmith.',
    detailedDescription: 'Camtasia (anteriormente conocido como Camtasia Studio en su versión para Windows) es una potente suite de software todo en uno orientada a la grabación de pantalla y la edición de vídeo, desarrollada por TechSmith. Está concebido específicamente para creadores de contenido, educadores, profesionales del marketing y equipos de soporte técnico que necesitan producir tutoriales en vídeo de alta calidad, demostraciones de software, cursos en línea y presentaciones interactivas de manera rápida y sin requerir conocimientos avanzados de postproducción audiovisual. Su entorno integra de forma nativa la captura simultánea de la pantalla del ordenador, la cámara web y el micrófono, combinándolo con una línea de tiempo multipista que facilita la adición de efectos visuales, transiciones, anotaciones y elementos interactivos.',
    features: [
      'Grabación de Pantalla y Captura Multifuente Avanzada: Permite capturar la pantalla completa, un área específica, una ventana o aplicaciones concretas, grabando simultáneamente el audio del sistema, la voz del micrófono y la señal de la cámara web para lograr una sincronización perfecta.',
      'Línea de Tiempo Multipista Intuitiva: Ofrece un espacio de trabajo basado en pistas separadas para vídeo, audio, subtítulos y anotaciones, permitiendo recortar, dividir, unir y reorganizar fragmentos multimedia con total precisión.',
      'Efectos de Cursor y Zoom Dinámico (Cursor FX): Cuenta con herramientas especializadas que resaltan automáticamente el movimiento del ratón, añaden clics audibles o visuales, y permiten aplicar acercamientos y alejamientos suaves (zoom-and-pan) para guiar la atención del espectador en los detalles del tutorial.',
      'Biblioteca Extensa de Activos y Plantillas Integradas: Proporciona acceso directo a una galería incorporada con introducciones (intros), tercios inferiores, fondos animados, música libre de derechos de autor y llamadas a la acción personalizables.',
      'Efectos de Pantalla Verde y Edición de Chroma Key: Permite eliminar y reemplazar el fondo de las grabaciones de la cámara web de manera limpia mediante la tecnología de croma, ideal para integrar al presentador sobre las diapositivas o la interfaz grabada.',
      'Interactividad y Puntos de Preguntas en Vídeo: Permite insertar marcadores interactivos, cuestionarios y enlaces dentro del mismo archivo de vídeo exportado para evaluar al usuario o redirigirlo a contenidos complementarios.',
      'Anotaciones, Formas y Subtítulos: Facilita la inserción de flechas, bocadillos de texto, desenfoques de privacidad para información sensible y subtítulos automáticos o manuales para mejorar la accesibilidad del contenido.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10/11 (64-bit) v20H2 o superior',
        processor: 'Intel Core 8.ª gen / AMD Ryzen 2000+',
        memory: '8 GB RAM (16 GB recomendado)',
        graphics: '2 GB VRAM (4 GB dedicados para 4K/IA)',
        storage: '4 GB libres en SSD'
      },
      recommended: {
        os: 'macOS 14 (Sonoma) o superior',
        processor: 'Intel Core 7.ª gen o Apple Silicon (M1 Pro/M2+)',
        memory: '8 GB mínimos (16 GB recomendado)',
        graphics: 'Gráficos integrados o dedicados',
        storage: '4 GB libres en SSD'
      }
    },
    versions: [
      {
        version: '26.1.3.17772',
        releaseDate: '2026-06-11',
        size: '345 MB',
        changelog: [
          'Edición de audio grupal: Los medios agrupados ahora procesan y muestran una forma de onda compuesta que considera todo el audio dentro de ese grupo.',
          'Compatibilidad ampliada: Se añadió la etiqueta "Long Path Aware" al manifiesto del Editor y de la Grabadora para soportar rutas de archivos muy largas.',
          'Mejoras de interfaz: Se optimizó la navegación por teclado en los paneles de herramientas y la accesibilidad para lectores de pantalla. Se actualizó el color de las carpetas en la pestaña de la biblioteca y se añadieron controles para cambiar el tamaño del panel de herramientas.',
          'Optimización de rendimiento: Se mejoró significativamente el rendimiento al editar grupos y al cargar proyectos en la línea de tiempo cuando contienen una gran cantidad de archivos con datos de cursor.'
        ],
        downloadUrl: 'https://www.techsmith.es/camtasia/'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Camtasia Starter anual', price: 'US$39' },
          { plan: 'Camtasia Essentials anual', price: 'US$179.88' },
          { plan: 'Camtasia Create anual', price: 'US$249' },
          { plan: 'Camtasia Pro anual', price: 'US$599' },
          { plan: 'Camtasia Business anual', price: 'US$198' },
          { plan: 'Camtasia Education anual', price: 'US$162.36' }
        ]
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
    ],
    officialUrl: 'https://www.techsmith.es/camtasia/'
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
    icon: '/images/logos/Driver Easy Logo.png',
    rating: 4.8,
    downloads: 145000,
    size: '15 MB',
    latestVersion: '7.1.3.5200',
    compatibility: ['Windows'],
    updateDate: '2026-06-08',
    developer: 'Easeware Technology',
    license: 'Pro (Completo)',
    description: 'Driver Easy es una conocida utilidad de software para sistemas operativos Windows, diseñada específicamente para automatizar la detección, descarga e instalación de controladores de dispositivos obsoletos, faltantes o incompatibles.',
    detailedDescription: 'Driver Easy es una conocida utilidad de software para sistemas operativos Windows, desarrollada por Easeware, diseñada específicamente para automatizar la detección, descarga e instalación de controladores de dispositivos (drivers) obsoletos, faltantes o incompatibles. Su función principal es la de escanear el hardware interno y los periféricos conectados al equipo (como tarjetas gráficas, adaptadores de red, controladores de audio, chipsets y dispositivos USB) comparándolos con una enorme base de datos en línea. Está concebido para ayudar a los usuarios a mantener sus equipos estables, prevenir conflictos de hardware y optimizar el rendimiento general del sistema sin necesidad de buscar manualmente cada controlador en los sitios web individuales de los fabricantes.',
    features: [
      'Escaneo Automatizado de Controladores: Realiza un análisis profundo del sistema con un solo clic para identificar con precisión qué controladores necesitan una actualización o presentan fallos.',
      'Base de Datos Masiva y Actualizada: Cuenta con un catálogo en constante crecimiento de millones de controladores certificados, asegurando una alta compatibilidad con una gran variedad de componentes de hardware antiguos y modernos.',
      'Modo de Descarga Fuera de Línea (Offline Scan): Ofrece una herramienta especializada para equipos que no tienen conexión a Internet, permitiendo realizar un análisis y guardar los datos de red necesarios para descargar los controladores desde otro ordenador funcional.',
      'Creación de Puntos de Restauración y Copias de Seguridad: Permite realizar copias de seguridad de los controladores actuales y crea puntos de restauración del sistema de manera automática antes de instalar cualquier actualización, garantizando la posibilidad de revertir cambios si ocurre algún inconveniente.',
      'Herramientas de Diagnóstico de Red y Hardware: Incluye utilidades adicionales para solucionar problemas comunes relacionados con fallos de conexión a Internet o componentes que no responden adecuadamente en el Administrador de dispositivos.',
      'Actualización en Bloque y Funciones Pro: Permite realizar descargas e instalaciones masivas automáticas con la versión Pro, además de programar análisis periódicos en segundo plano para mantener el equipo siempre al día.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 7 / 8 / 8.1 / 10 / 11 (32/64-bit)',
        processor: 'CPU a 1 GHz o más rápido (Intel, AMD o compatible)',
        memory: '512 MB RAM (1 GB recomendado para 32-bit)',
        graphics: 'Resolución de pantalla 800 x 600',
        storage: '20 MB de espacio libre para la instalación (Internet obligatorio)'
      },
      recommended: {
        os: 'Windows 10 / 11 (64-bit)',
        processor: 'CPU de doble núcleo a 2 GHz o superior',
        memory: '2 GB RAM o más',
        graphics: 'Conexión de banda ancha estable (descarga masiva)',
        storage: '500 MB libres o más (para almacenar instaladores descargados)'
      }
    },
    versions: [
      {
        version: '7.1.3.5200',
        releaseDate: '2026-06-08',
        size: '15.4 MB',
        changelog: [
          'Gestión de suscripción: Se añadió una pestaña dedicada a la configuración para gestionar tu cuenta y suscripción de forma más sencilla.',
          'Compatibilidad de idiomas: Se agregó soporte completo para Chino Tradicional.',
          'Traducciones mejoradas: Se actualizó y pulió la traducción al italiano, además de renombrar el Chino de China a Chino Simplificado.'
        ],
        downloadUrl: 'https://www.drivereasy.com/'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Pro 3 PCs', price: 'US$29.95' },
          { plan: 'Technician 50 PCs', price: 'US$99.50' }
        ]
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
    ],
    officialUrl: 'https://www.drivereasy.com/'
  },
  {
    id: 'photoshop-elements',
    name: 'Adobe Photoshop Elements 2026',
    subtitle: 'La versión simplificada, rápida y accesible del software de edición líder',
    category: 'Software',
    subcategory: 'Edición de Imagen',
    icon: '/images/logos/Adobe Photoshop Elements Logo.png',
    rating: 4.7,
    downloads: 95000,
    size: '1.6 GB',
    latestVersion: '26.3.0.82',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2025-10-01',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Photoshop Elements es un software de edición y organización de imágenes diseñado específicamente para aficionados, entusiastas de la fotografía y usuarios domésticos que buscan aprovechar la potencia del motor de retoque de Adobe sin la complejidad y la curva de aprendizaje técnica de la versión profesional Photoshop Pro.',
    detailedDescription: 'Adobe Photoshop Elements es un software de edición y organización de imágenes diseñado específicamente para aficionados, entusiastas de la fotografía y usuarios domésticos que buscan aprovechar la potencia del motor de retoque de Adobe sin la complejidad y la curva de aprendizaje técnica de la versión profesional Photoshop Pro. Su entorno de trabajo está estructurado en tres modos guiados e intuitivos (Rápido, Guiado y Experto) que facilitan desde la corrección automática de ojos rojos y la eliminación de objetos hasta la aplicación de efectos avanzados paso a paso, integrando además tecnologías de inteligencia artificial con Adobe Sensei para automatizar la selección de sujetos, la creación de collages, presentaciones multimedia y la organización inteligente de grandes bibliotecas de fotos por fechas, rostros y etiquetas geográficas.',
    features: [
      'Modos de Edición Guiada paso a paso: Ofrece decenas de asistentes integrados que guían visualmente al usuario a través de procesos complejos como la creación de efectos de doble exposición, la sustitución de fondos o la restauración de fotografías antiguas de manera sencilla.',
      'Organizador Inteligente con Automatización de IA: Permite clasificar, etiquetar y buscar automáticamente el contenido multimedia de todo el disco duro ordenándolo por rostros reconocidos, lugares específicos, eventos o temáticas mediante el uso de inteligencia artificial.',
      'Herramientas de Corrección y Creación Rápida: Facilita la eliminación de distracciones en las tomas, la nivelación automática de horizontes, la reparación de tonos de piel y la transformación de imágenes estáticas en GIF animados o presentaciones artísticas con un solo clic.',
      'Creación de Proyectos Fotográficos Impresos y Digitales: Incluye plantillas prediseñadas para diseñar calendarios, tarjetas de felicitación, álbumes de recortes fotográficos y cubiertas de fotos listas para compartir digitalmente o imprimir en casa.',
      'Actualizaciones automatizadas del flujo de trabajo: Se integra con funciones en la nube para sincronizar y acceder a las creaciones desde aplicaciones complementarias para dispositivos móviles y web, permitiendo aplicar correcciones rápidas desde cualquier lugar.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v22H2 / Windows 11 v23H2 (64-bit)',
        processor: 'Intel 6.ª gen o AMD con SSE 4.2',
        memory: '8 GB RAM',
        graphics: 'Controlador compatible con DirectX 12 con 1.5 GB VRAM',
        storage: '9 GB a 10 GB libres (Pantalla: 1280x800)'
      },
      recommended: {
        os: 'Windows 11 (64-bit) o posterior',
        processor: 'Intel Core 8.ª a 15.ª gen o AMD con AVX2 y SSE 4.2 (No ARM)',
        memory: '16 GB RAM',
        graphics: 'GPU compatible con DirectX 12 con 1.5 GB VRAM o más (Pantalla: 1920x1080+)',
        storage: 'SSD rápido con 9 GB libres'
      }
    },
    versions: [
      {
        version: '26.3.0.82',
        releaseDate: '2025-10-01',
        size: '1.6 GB',
        changelog: [
          'Generar imagen: Permite escribir una descripción para crear cualquier cosa, desde un fondo básico hasta una imagen detallada usando IA generativa. Se selecciona la herramienta en la barra de herramientas, se escribe la indicación, se hace clic en generar y se selecciona una de las cuatro variaciones previas. Incluye 25 créditos generativos al mes (1 crédito por acción).',
          'Insertar objeto: Permite pintar sobre un área y escribir una descripción para ver aparecer un objeto nuevo mediante IA generativa. Se usa el pincel de selección sobre la imagen, se describe el objeto, se genera y se elige entre cuatro variaciones. Consume 1 crédito por acción de los 25 créditos mensuales incluidos.',
          'Restaurar foto: Revive recuerdos eliminando automáticamente arañazos, pliegues y desgaste de las fotografías usando IA al seleccionar la opción en el menú Mejorar, permitiendo refinar el resultado con controles deslizantes y herramientas de la barra.',
          'Herramienta Eliminar mejorada: Potenciada por IA, detecta automáticamente personas en el fondo de las fotos para eliminarlas con facilidad al activar la opción de buscar personas y refinar el área antes de aplicar los cambios.',
          'Acceso a plantillas gratuitas de Adobe Express: Brinda acceso a miles de plantillas gratuitas para crear publicaciones en redes sociales, vídeos, pósteres y más.',
          'Corrector ortográfico: Resuelve problemas ortográficos, permite crear un diccionario propio, gestionar listas de palabras ignoradas o corregir errores.',
          'Vista previa en directo del modo de fusión: Permite pasar el cursor sobre cualquier modo de fusión para previsualizar los efectos de forma instantánea.',
          'Fuentes de color: Diseñadas para captar la atención con textos más vibrantes.',
          'Compatibilidad con el formato de archivo WebP: Permite abrir y guardar imágenes en formato WebP desde gráficos simples hasta fotos de alta calidad.',
          'Escalado dinámico: Ajusta la escala para adaptarse a elementos pequeños o diseños de tamaño completo.',
          'Edición guiada de texto en foto mejorada: Selecciona rápidamente el sujeto principal con un solo clic usando la función Seleccionar sujeto.',
          'Edición guiada de doble exposición: Incluye un control deslizante de intensidad para afinar la fuerza de las ediciones.',
          'Herramienta Recortar optimizada: Ofrece controles de recorte modernos y opciones de recortes favoritos sugeridos.',
          'Importar fotos móviles mediante código QR: Permite escanear un código para transferir fotos móviles directamente al programa.',
          'Barra de tareas contextuales: Facilita el acceso a herramientas y opciones para ediciones rápidas y ajustes avanzados.',
          'Información sobre herramientas enriquecida: Incorpora sugerencias y animaciones integradas para un aprendizaje rápido.'
        ],
        downloadUrl: 'https://www.adobe.com/products/photoshop-elements.html'
      }
    ],
    pricing: [
      {
        title: 'COMPRA ÚNICA',
        options: [
          { plan: 'Pago único', price: 'US$99.99' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/products/photoshop-elements.html'
  },
  {
    id: 'software-updater',
    name: 'IObit Software Updater Pro',
    subtitle: 'Mantén todos tus programas instalados actualizados de forma segura',
    category: 'Utilidades',
    subcategory: 'Actualización',
    icon: '/images/logos/IObit Software Updater Logo.png',
    rating: 4.7,
    downloads: 85000,
    size: '22 MB',
    latestVersion: '8.5.0.17',
    compatibility: ['Windows'],
    updateDate: '2026-05-15',
    developer: 'IObit',
    license: 'Pro (Completo)',
    description: 'IObit Software Updater es una utilidad ligera y eficiente para sistemas operativos Windows, diseñada específicamente para automatizar la gestión, el mantenimiento y la actualización de todos los programas instalados en el ordenador.',
    detailedDescription: 'IObit Software Updater es una utilidad ligera y eficiente para sistemas operativos Windows, desarrollada por IObit, diseñada específicamente para automatizar la gestión, el mantenimiento y la actualización de todos los programas instalados en el ordenador. Su función principal es la de escanear de manera inteligente el sistema para detectar aplicaciones obsoletas, identificar vulnerabilidades de seguridad y aplicar parches o descargas directamente desde fuentes 100% oficiales. Está concebido para ahorrarle al usuario la tediosa tarea de buscar actualizaciones y parches de seguridad de forma individual en distintos sitios web, minimizando riesgos ante ciberataques y manteniendo el software siempre al día con un solo clic.',
    features: [
      'Actualización con un Solo Clic (1-Click Update): Permite actualizar de forma masiva y automática todos los programas obsoletos detectados en el sistema sin necesidad de pasar por múltiples pasos de instalación o ventanas emergentes molestas.',
      'Base de Datos Ampliada de Aplicaciones: Cuenta con un catálogo masivo que supera el millar de programas populares e imprescindibles clasificados en categorías útiles como navegadores, seguridad, trabajo remoto, redes sociales, multimedia y herramientas de utilidad.',
      'Parches de Vulnerabilidades de Seguridad: Identifica brechas y fallos de seguridad en aplicaciones desactualizadas de forma proactiva, aplicando parches correctivos inmediatos para blindar el sistema contra posibles ataques o exploits.',
      'Instalación Segura y Limpia (Double Clean): Garantiza que todas las descargas provengan estrictamente de los sitios web oficiales de los desarrolladores, evitando paquetes de software adicional no deseado, adware o programas maliciosos (bundleware).',
      'Eliminación Automática de Archivos Residuales: Borra de manera automática los instaladores y paquetes temporales (setup files) descargados una vez finalizado el proceso de actualización, optimizando el espacio libre en el disco duro.',
      'Puntos de Restauración Automáticos (Double Safety): Crea un punto de restauración del sistema de manera preventiva antes de aplicar cualquier actualización importante, permitiendo revertir los cambios de forma instantánea ante cualquier eventualidad de compatibilidad.',
      'Actualizaciones Programadas en Segundo Plano (Versiones Pro): Permite programar análisis automáticos y descargas silenciosas cuando el equipo se encuentra inactivo, además de ofrecer la opción de apagar o reiniciar el ordenador de manera automática una vez concluidas las tareas de mantenimiento.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 11, 10, 8, 7, Vista o XP (32/64-bit)',
        processor: 'Intel, AMD o compatible a 1 GHz o superior',
        memory: '512 MB RAM',
        graphics: 'Resolución de 1024 x 768 píxeles o superior',
        storage: '300 MB de espacio libre para la instalación'
      },
      recommended: {
        os: 'Windows 10 / 11 actualizados',
        processor: 'Procesador de doble núcleo a 2 GHz o superior',
        memory: '2 GB RAM o más (para escaneos rápidos)',
        graphics: 'Conexión de banda ancha estable para descargas rápidas',
        storage: '1 GB libre (para instaladores .exe temporales)'
      }
    },
    versions: [
      {
        version: '8.5.0.17',
        releaseDate: '2026-05-15',
        size: '22.4 MB',
        changelog: [
          'Mayor soporte de software (+30 programas): Añade compatibilidad para descargar y actualizar de forma silenciosa más de 30 aplicaciones populares que no estaban integradas. Entre ellas destacan Bitwig Studio, Bandicam, Bluebeam Revu, Atomic Wallet y Balsamiq Wireframes.',
          'Corrección de falsos positivos en la detección: Soluciona un problema común donde el programa marcaba algunas aplicaciones de terceros como "desactualizadas" cuando en realidad ya tenían instalada la última versión disponible.',
          'Mejoras generales de rendimiento: Optimización interna del código para que el escaneo inicial de programas instalados en Windows sea más rápido y consuma menos memoria RAM.',
          'Corrección de bugs menores: Eliminación de errores visuales en la interfaz gráfica y fallos de conectividad con los servidores de descarga al procesar actualizaciones por lotes.'
        ],
        downloadUrl: 'https://www.iobit.com/es/iobit-software-updater.php'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Pago único', price: 'EUR 12.99' }
        ]
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
    ],
    officialUrl: 'https://www.iobit.com/es/iobit-software-updater.php'
  },
  {
    id: 'creative-cloud-collection',
    name: 'Adobe Creative Cloud Collection 2026',
    subtitle: 'La suite creativa completa de Adobe pre-activada en un solo instalador',
    category: 'Software',
    subcategory: 'Suite Creativa',
    icon: '/images/logos/Adobe Creative Cloud Logo.png',
    rating: 4.9,
    downloads: 210000,
    size: '28.5 GB',
    latestVersion: '6.9',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2026-06-23',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Creative Cloud es una plataforma integral basada en un modelo de suscripción (Software as a Service) que proporciona a los usuarios acceso a una colección de más de 20 aplicaciones y servicios de escritorio, móviles y web.',
    detailedDescription: 'Adobe Creative Cloud es una plataforma integral basada en un modelo de suscripción (Software as a Service) que proporciona a los usuarios acceso a una colección de más de 20 aplicaciones y servicios de escritorio, móviles y web. Está diseñada específicamente para profesionales, entusiastas y empresas dedicadas al diseño gráfico, la edición de vídeo, la fotografía, el desarrollo web, la animación y el contenido digital. En lugar de adquirir licencias de software independientes cada pocos años, los usuarios descargan e instalan las aplicaciones de manera local, recibiendo actualizaciones y mejoras constantes de rendimiento y seguridad de forma automatizada mientras su suscripción se encuentre activa.',
    features: [
      'Ecosistema Completo de Aplicaciones Profesionales: Incluye herramientas líderes en la industria como Adobe Photoshop, Illustrator, Premiere Pro, After Effects, InDesign y Audition, permitiendo alternar y conectar proyectos de distintas disciplinas creativas sin la necesidad de instalar complementos externos.',
      'Integración Avanzada con Servicios en la Nube: Ofrece almacenamiento en la nube para sincronizar archivos, catálogos y ajustes entre diferentes dispositivos, facilitando la colaboración en tiempo real o el intercambio fluido de recursos multimedia entre equipos de trabajo.',
      'Herramientas de Inteligencia Artificial Creativa: Integra potentes motores de IA como Adobe Firefly y Adobe Sensei directamente en las aplicaciones, automatizando tareas repetitivas y permitiendo generar imágenes, fondos, vectores y contenidos multimedia mediante descripciones de texto en lenguaje natural.',
      'Bibliotecas de Recursos y Tipografías Integradas: Proporciona acceso ilimitado a miles de fuentes profesionales con Adobe Fonts y a extensos catálogos de recursos multimedia de alta calidad mediante bibliotecas sincronizadas que actualizan los cambios de forma automática en todos los archivos vinculados.',
      'Versatilidad Multiplataforma: Cuenta tanto con versiones de alto rendimiento para computadoras de escritorio (Windows y macOS) como con aplicaciones complementarias optimizadas para tabletas y dispositivos móviles, permitiendo iniciar o retocar proyectos desde cualquier lugar.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v1903+ / macOS 10.12+',
        processor: 'Intel, AMD o ARM de 64 bits',
        memory: '2 GB RAM',
        graphics: 'Gráficos integrados compatibles',
        storage: '4 GB de espacio disponible (Internet obligatorio)'
      },
      recommended: {
        os: 'Windows 10 v20H2+ o posterior / macOS moderno',
        processor: 'Intel, AMD o ARM de 64 bits de alto rendimiento',
        memory: '4 GB RAM o más',
        graphics: 'Gráficos recomendados para las apps instaladas',
        storage: '4 GB o más (SSD recomendado para instalación)'
      }
    },
    versions: [
      {
        version: '6.9',
        releaseDate: '2026-06-23',
        size: '28.5 GB',
        changelog: [
          'Accede a Frame.io para abrir, copiar enlaces o descargar activos directamente desde la pestaña Archivos.',
          'Abre archivos directamente en Firefly Boards desde la pestaña Archivos.',
          'Interactuar con compañeros usando la función actualizada Preguntar a la comunidad en el menú Ayuda.',
          'Accede a tus recursos de Stock con licencia desde el botón Ver recursos de Stock con licencia en la pestaña Stock y Marketplace.',
          'Descubre sugerencias personalizadas en la pestaña Inicio adaptadas a tu plan de Creative Cloud.',
          'Accede al Asistente de IA directamente en la aplicación de Creative Cloud para escritorio (actualmente disponible para un número limitado de clientes).',
          'Se aplicaron correcciones de errores para mejorar el rendimiento y la estabilidad.'
        ],
        downloadUrl: 'https://www.adobe.com/creativecloud/pro.html'
      }
    ],
    pricing: [
      {
        title: 'PLANES INDIVIDUALES',
        options: [
          { plan: 'Plan mensual', price: 'US$104.99' },
          { plan: 'Plan anual', price: 'US$779.88' }
        ]
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
    ],
    officialUrl: 'https://www.adobe.com/creativecloud/pro.html'
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
    icon: '/images/logos/Adobe Animate Logo.png',
    rating: 4.8,
    downloads: 82050,
    size: '2.1 GB',
    latestVersion: '24.0.13.5',
    compatibility: ['Windows', 'macOS'],
    updateDate: '2023-10-10',
    developer: 'Adobe Inc.',
    license: 'Pre-Activado / Completo',
    description: 'Adobe Animate es el software líder en la industria para la creación de animaciones vectoriales e interactivas, desarrollado por Adobe Inc. (anteriormente conocido como Adobe Flash Professional), concebido para permitir a los animadores, diseñadores multimedia y desarrolladores de juegos dar vida a personajes y objetos con movimiento fluido.',
    detailedDescription: 'Adobe Animate es el software líder en la industria para la creación de animaciones vectoriales e interactivas, desarrollado por Adobe Inc. (anteriormente conocido como Adobe Flash Professional), concebido para permitir a los animadores, diseñadores multimedia y desarrolladores de juegos dar vida a personajes y objetos con movimiento fluido. Su entorno de trabajo combina potentes herramientas de dibujo vectorial con una línea de tiempo avanzada y sistemas de esqueleto cinemático (bone rigging), facilitando la producción de contenidos no solo para la web moderna mediante estándares abiertos como HTML5 Canvas, WebGL y SVG, sino también para plataformas de televisión, cine y experiencias interactivas multiplataforma.',
    features: [
      'Línea de Tiempo Avanzada y Control de Capas: Permite gestionar fotogramas clave, interpolaciones de movimiento (tweens) y capas jerárquicas con un control absoluto sobre el tiempo, la velocidad y la transición de cada elemento animado en la composición.',
      'Cinematografía de Personajes y Esqueletos (Bone Tool): Facilita la creación de animaciones articuladas mediante la vinculación de huesos en ilustraciones vectoriales, permitiendo movimientos naturales de extremidades de forma rápida y eficiente sin necesidad de redibujar fotograma por fotograma.',
      'Soporte Multiplataforma y Exportación Web: Diseñado para adaptarse a los estándares modernos de la web, exportando contenidos interactivos directamente a HTML5 Canvas, WebGL, Flash/AIR tradicional, o formatos de video de alta definición y GIF animados.',
      'Herramientas de Dibujo Vectorial Dinámico: Ofrece pinceles vectoriales con sensibilidad a la presión y la inclinación, trazos variables personalizables y la capacidad de crear activos gráficos reutilizables dentro de una biblioteca integrada.',
      'Sincronización de Audio y Animación Sincronizada: Permite importar archivos de sonido y sincronizarlos fotograma a fotograma directamente en la línea de tiempo para crear efectos de sincronización labial (lip-sync) y ambientación sonora precisa.'
    ],
    requirements: {
      minimum: {
        os: 'Windows 10 v22H2 / Win 11 / macOS 12-13',
        processor: 'Intel or AMD a 2 GHz+ / Apple Silicon',
        memory: '8 GB RAM',
        graphics: 'OpenGL 3.3 o posterior',
        storage: '4 GB (Win) / 6 GB (Mac) (Pantalla: 1024x900)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel, AMD o compatible a 2 GHz+',
        memory: '16 GB RAM recomendados',
        graphics: 'DirectX 12 con nivel de función 12_0',
        storage: '4 GB en SSD recomendado (Pantalla: 1280x1024)'
      }
    },
    versions: [
      {
        version: '24.0.13.5',
        releaseDate: '2023-10-10',
        size: '2.1 GB',
        changelog: [
          'Compatibilidad nativa con Apple Silicon: Animate se ejecuta de forma nativa en el conjunto de chips de Apple Silicon, ofreciendo un lanzamiento de aplicaciones hasta dos veces más rápido, publicación hasta dos veces más rápida y reproducción de la cronología hasta tres veces más rápida con un dibujo suave.',
          'Interfaz de usuario elegante: Cuenta con una nueva y elegante interfaz de usuario que proporciona más espacio para orquestar animaciones, permitiendo definir un tema de color uniforme para Creative Cloud desde las preferencias de la aplicación en Windows o macOS.',
          'Restablecer recurso deformado: Permite experimentar fácilmente con la creación de poses mediante una opción de restablecimiento con un solo clic, ubicada en la sección Opciones de Deformar del panel Propiedades (pestaña Objeto) al seleccionar un objeto deformado en la fase.'
        ],
        downloadUrl: 'https://www.adobe.com/products/animate.html'
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
        id: 'rev-aan1',
        username: 'anim_designer',
        rating: 4.7,
        date: '2026-03-05',
        comment: 'Muy estable. El rigging por Asset Warp me ahorra horas al animar mis sketches vectoriales.'
      }
    ],
    officialUrl: 'https://www.adobe.com/products/animate.html'
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
