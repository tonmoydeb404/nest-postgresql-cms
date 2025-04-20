export function removeUndefined<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(removeUndefined) as T;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj)
      .filter(([_, value]) => value !== undefined)
      .reduce((acc, [key, value]) => {
        acc[key] = removeUndefined(value);
        return acc;
      }, {} as T);
  }
  return obj;
}
