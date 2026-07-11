import { Program } from '../types';
import { programsPart1 } from './programs_part1';
import { programsPart2 } from './programs_part2';
import { programsPart3 } from './programs_part3';

const rawPrograms: Program[] = [
  ...programsPart1,
  ...programsPart2,
  ...programsPart3
];

export const mockPrograms: Program[] = rawPrograms.map((p) => {
  // Determine format
  const format = p.format || (
    p.category === 'Apps Móviles' ? 'Instalador APK' :
    p.category === 'Juegos' ? 'Instalador Digital (ISO)' : 'Instalador Oficial'
  );

  // Determine fileType
  const fileType = p.fileType || (
    p.category === 'Apps Móviles' ? 'APK' :
    p.id.charCodeAt(0) % 2 === 0 ? 'RAR' : 'ZIP'
  );

  // Determine language
  const language = p.language || (
    p.id.charCodeAt(1) % 2 === 0 ? 'Español' : 'Multilenguaje (Español incluido)'
  );

  // Determine downloadType
  const downloadType = p.downloadType || 'Gratis';

  // Determine officialUrl
  let officialUrl = p.officialUrl;
  if (!officialUrl) {
    const devClean = p.developer.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nameClean = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (p.versions && p.versions.length > 0 && p.versions[0].downloadUrl && !p.versions[0].downloadUrl.includes('mega.nz')) {
      try {
        const url = new URL(p.versions[0].downloadUrl);
        officialUrl = `${url.protocol}//${url.hostname}/`;
      } catch (e) {
        officialUrl = `https://www.${nameClean}.com/`;
      }
    } else {
      officialUrl = `https://www.${nameClean || devClean}.com/`;
    }
  }

  // Determine pricing
  let pricing = p.pricing;
  if (!pricing) {
    const isFree = p.license.toLowerCase().includes('gratis') || 
                   p.license.toLowerCase().includes('gratuito') || 
                   p.license.toLowerCase().includes('libre') ||
                   p.license.toLowerCase().includes('open source');
    if (isFree) {
      pricing = [
        {
          title: 'Opciones de Licencia',
          options: [
            { plan: 'Licencia Estándar (Uso Personal)', price: 'Gratis ($0.00 USD)' },
            { plan: 'Licencia Comercial', price: 'Gratis ($0.00 USD)' }
          ]
        }
      ];
    } else {
      // Paid or trial, let's create a realistic price based on length/character codes
      const basePrice = (p.id.charCodeAt(0) % 4) * 15 + 14.95;
      pricing = [
        {
          title: 'Licencia Personal',
          options: [
            { plan: 'Licencia Anual (1 PC/Usuario)', price: `$${basePrice.toFixed(2)} USD` },
            { plan: 'Licencia de por vida (1 PC/Usuario)', price: `$${(basePrice * 2.2).toFixed(2)} USD` }
          ]
        },
        {
          title: 'Planes Multiusuario / Equipos',
          options: [
            { plan: 'Licencia de por vida (Hasta 3 PCs)', price: `$${(basePrice * 4.5).toFixed(2)} USD` }
          ]
        }
      ];
    }
  }

  return {
    ...p,
    format,
    fileType,
    language,
    downloadType,
    officialUrl,
    pricing
  };
});
