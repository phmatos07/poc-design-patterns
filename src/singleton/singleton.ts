export class Singleton {

  private static instance: Singleton;
  private _counter = 0;

  private constructor() { }

  static getInstance(): Singleton {

    if (!Singleton.instance) {
      console.info(Singleton.instance, 'Criando instância da classe.');
      return Singleton.instance = new Singleton();
    }
    console.info(Singleton.instance, 'Usando mesma instância da classe já criada.');
    return Singleton.instance;
  }

  increment(): number {
    return this._counter++;
  }

  decrement(): number {
    return this._counter--;
  }

  get counter(): number {
    return this._counter;
  }
}
