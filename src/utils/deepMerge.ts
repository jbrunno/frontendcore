export const deepMerge = (target: any, source: any) => {
  if (!source) return target;

  const isObject = (obj: any) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  const newObject = { ...target };

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      newObject[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      newObject[key] = deepMerge({ ...targetValue }, sourceValue);
    } else {
      newObject[key] = sourceValue;
    }
  });

  return newObject;
};
