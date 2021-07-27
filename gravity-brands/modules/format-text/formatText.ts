export const formatText = (str: string): string => {
  return str
    .trim()
    .replace('&amp;', '')
    .replace(/[\r\n]{3,}/g, '\n\n')
}
