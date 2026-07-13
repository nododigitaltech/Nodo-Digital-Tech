import { Program } from '../types';
import { programsPart1 } from './programs_part1';
import { programsPart2 } from './programs_part2';
import { programsPart3 } from './programs_part3';

const rawPrograms: Program[] = [
  ...programsPart1,
  ...programsPart2,
  ...programsPart3
];

function getProgramNameWithVersion(name: string, latestVersion: string): string {
  const nameLower = name.toLowerCase();
  const verLower = latestVersion.toLowerCase();
  
  if (nameLower.includes(verLower)) {
    return name;
  }
  
  const verWithoutV = latestVersion.startsWith('v') ? latestVersion.substring(1) : latestVersion;
  if (nameLower.includes(verWithoutV.toLowerCase())) {
    return name;
  }
  
  const yearMatch = name.match(/\b(202\d)\b/);
  if (yearMatch) {
    const year = yearMatch[1];
    if (latestVersion.startsWith(year)) {
      const subVer = latestVersion.substring(year.length).trim();
      if (subVer && !nameLower.includes(subVer.toLowerCase())) {
        return `${name} ${subVer}`;
      }
      return name;
    }
  }
  
  return `${name} ${latestVersion}`;
}

export const mockPrograms: Program[] = rawPrograms.map((p) => {
  // Clean version strings by removing leading 'v' or 'V'
  let latestVersion = p.latestVersion;
  if (latestVersion && (latestVersion.startsWith('v') || latestVersion.startsWith('V')) && latestVersion.length > 1) {
    latestVersion = latestVersion.substring(1);
  }

  // Determine name with version
  const name = getProgramNameWithVersion(p.name, latestVersion);

  // Determine format
  const format = 'Instalador Oficial';

  // Determine fileType
  const fileType = 'RAR';

  // Determine language
  const language = 'Español';

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

  // Remove all trace of macOS / Mac and Linux from compatibility, requirements, and text
  const compatibility = (p.compatibility || []).filter((os) => os !== 'macOS' && os !== 'Linux');

  const cleanText = (str: string) => {
    if (!str) return '';
    return str
      .replace(/,\s*macOS/gi, '')
      .replace(/,\s*mac/gi, '')
      .replace(/,\s*Linux/gi, '')
      .replace(/macOS\s*,\s*/gi, '')
      .replace(/mac\s*,\s*/gi, '')
      .replace(/Linux\s*,\s*/gi, '')
      .replace(/ \/ macOS[^\/]*|macOS \/ | \/ macOS|macOS/gi, '')
      .replace(/ \/ mac[^\/]*|mac \/ | \/ mac|mac/gi, '')
      .replace(/ \/ Linux[^\/]*|Linux \/ | \/ Linux|Linux/gi, '')
      .replace(/sistemas operativos \(Windows, Linux, macOS\)/gi, 'sistemas operativos (Windows)')
      .replace(/sistemas operativos \(Windows, Linux\)/gi, 'sistemas operativos (Windows)')
      .trim();
  };

  const requirements = p.requirements ? {
    minimum: {
      ...p.requirements.minimum,
      os: cleanText(p.requirements.minimum.os)
    },
    recommended: {
      ...p.requirements.recommended,
      os: cleanText(p.requirements.recommended.os)
    }
  } : p.requirements;

  const subtitle = cleanText(p.subtitle);
  const description = cleanText(p.description);
  const detailedDescription = cleanText(p.detailedDescription);

  const versions = p.versions ? p.versions.map((v) => {
    let cleanVer = v.version;
    if (cleanVer && (cleanVer.startsWith('v') || cleanVer.startsWith('V')) && cleanVer.length > 1) {
      cleanVer = cleanVer.substring(1);
    }
    return {
      ...v,
      version: cleanVer,
      changelog: v.changelog ? v.changelog.map(cleanText).filter(Boolean) : []
    };
  }) : p.versions;

  return {
    ...p,
    name,
    latestVersion,
    compatibility,
    requirements,
    subtitle,
    description,
    detailedDescription,
    versions,
    format,
    fileType,
    language,
    downloadType,
    officialUrl,
    pricing
  };
});
