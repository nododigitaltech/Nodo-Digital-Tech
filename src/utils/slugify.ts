/**
 * Converts a string into a clean, URL-safe slug.
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-') // Replace spaces/special characters with dashes
    .replace(/(^-|-$)+/g, ''); // Trim leading/trailing dashes
};
