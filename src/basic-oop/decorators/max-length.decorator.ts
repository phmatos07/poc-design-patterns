export function MaxLength(length: number) {
  return (target: any, propertyKey: string) => {
    let val = target[propertyKey];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length > length) {
        console.group('ERROR');
        console.error(`Informe no máximo ${length} caracteres para propriedade ${propertyKey}.`);
        console.groupEnd();
        return;
      }
      val = value;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    });
  }
}
