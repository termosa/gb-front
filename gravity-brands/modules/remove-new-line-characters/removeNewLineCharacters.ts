export const removeNewLineCharacters = (str: string): string => str
  .trim()
  .replace(/[\r\n]{3,}/g, '\n\n')
