export const toArray = <T>(value: (T | readonly T[]) | null | undefined): T[] => {
  if (value == null) {
    return [];
  }

  return Array.isArray(value) ? [...value] : [value as T];
};
