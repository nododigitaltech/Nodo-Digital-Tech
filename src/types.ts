export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics?: string;
  storage: string;
}

export interface ProgramVersion {
  version: string;
  releaseDate: string;
  size: string;
  changelog: string[];
  downloadUrl: string;
  isBeta?: boolean;
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Program {
  id: string;
  name: string;
  subtitle: string;
  category: 'Software' | 'Juegos' | 'Utilidades' | 'Apps Móviles';
  subcategory: string;
  icon: string; // Lucide icon name
  rating: number;
  downloads: number;
  size: string;
  latestVersion: string;
  compatibility: ('Windows' | 'macOS' | 'Linux' | 'Android' | 'iOS')[];
  description: string;
  detailedDescription: string;
  features: string[];
  requirements: {
    minimum: SystemRequirements;
    recommended: SystemRequirements;
  };
  versions: ProgramVersion[];
  reviews: Review[];
  updateDate: string;
  developer: string;
  license: string;
}
