export const toIso = (value: Date | string) => {
  return value instanceof Date ? value.toISOString() : value;
};
