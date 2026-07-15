export const weakEtag = (content: string): string => {
  let hash = 0x811c9dc5;

  for (let i = 0; i < content.length; i++) {
    hash ^= content.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return `W/"${(hash >>> 0).toString(16)}-${content.length}"`;
};
