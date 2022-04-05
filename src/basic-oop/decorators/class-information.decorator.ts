export function ClassInformation<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    className = constructor.name;
    quantityProperties = constructor.length;
    prototype = constructor.prototype;
  }
}

