export function formatName(name: string): string {
    return name
      ?.toLowerCase()
      ?.replace(/_/g, " ") // Replace underscores with spaces
      ?.replace(/\b\w/g, (char) => char?.toUpperCase()); // Capitalize the first letter of each word
  }