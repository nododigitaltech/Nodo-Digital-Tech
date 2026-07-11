import React from 'react';
import * as LucideIcons from 'lucide-react';

interface ProgramIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const ProgramIcon: React.FC<ProgramIconProps> = ({ name, className = '', size }) => {
  // If the name is an image path or URL, render it directly as an image
  if (name && (name.startsWith('/') || name.startsWith('http') || name.includes('.'))) {
    return (
      <img
        src={name}
        alt="Logo"
        className={`object-contain rounded-xl ${className}`}
        style={size ? { width: size, height: size } : undefined}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Safe mapping of expected icons
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Code: LucideIcons.Code,
    Box: LucideIcons.Box,
    Cpu: LucideIcons.Cpu,
    Gamepad2: LucideIcons.Gamepad2,
    Tv: LucideIcons.Tv,
    Video: LucideIcons.Video,
    HardDrive: LucideIcons.HardDrive,
    Terminal: LucideIcons.Terminal,
    Layout: LucideIcons.Layout,
    Search: LucideIcons.Search,
    Star: LucideIcons.Star,
    Download: LucideIcons.Download,
    CheckCircle: LucideIcons.CheckCircle,
    Windows: LucideIcons.Laptop, // Fallback representing OS
    macOS: LucideIcons.Apple,
    Linux: LucideIcons.Terminal,
    Android: LucideIcons.Smartphone,
    iOS: LucideIcons.Smartphone,
    ArrowLeft: LucideIcons.ArrowLeft,
    Shield: LucideIcons.ShieldCheck,
    Calendar: LucideIcons.Calendar,
    HardDriveIcon: LucideIcons.HardDrive,
    Clock: LucideIcons.Clock,
    User: LucideIcons.User,
    Info: LucideIcons.Info,
    ChevronDown: LucideIcons.ChevronDown,
    Menu: LucideIcons.Menu,
    X: LucideIcons.X,
    Filter: LucideIcons.Filter,
    Activity: LucideIcons.Activity,
    AlertCircle: LucideIcons.AlertTriangle,
  };

  const IconComponent = iconMap[name] || LucideIcons.HelpCircle;

  return <IconComponent className={className} size={size} />;
};
