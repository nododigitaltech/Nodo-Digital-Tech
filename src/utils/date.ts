/**
 * Formats an ISO date string (YYYY-MM-DD) into a human-readable Spanish date.
 * Example: '2026-07-09' -> '9 de Julio de 2026'
 */
export const formatSpanishDate = (dateStr: string): string => {
  if (!dateStr) return '';
  
  // Check if it matches YYYY-MM-DD
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return dateStr; // Return original if not in expected format
  
  const year = match[1];
  const monthIndex = parseInt(match[2], 10) - 1;
  const day = parseInt(match[3], 10); // parseInt removes leading zero, e.g. '09' -> 9
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const monthName = months[monthIndex] || '';
  return `${day} de ${monthName} de ${year}`;
};
