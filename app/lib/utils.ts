export function convertMDWithInlineCodeToHTML(text: string): string {
  // Escape any existing HTML entities first
  const escapedText = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // Replace markdown inline code with HTML code tags
  return escapedText.replace(/(`([^`\n]+)`)/g, '<code>$2</code>');
}
