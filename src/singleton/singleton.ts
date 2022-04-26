/**
 * @description Singletons são usados ​​para criar uma instância de uma classe caso ela não exista ou então retornar a referência da já existente.
 * Isso significa que os singletons são criados exatamente uma vez durante o tempo de execução do aplicativo no escopo global.
 *
 * Com base nessa definição, os singletons parecem muito semelhantes às variáveis ​​globais.
 * Você pode estar se perguntando por que singletons devem ser usados ​​em uma linguagem de codificação com variáveis ​​globais.
 * Existem algumas coisas que tornam os singletons diferentes das variáveis ​​globais:
 *
 * As variáveis ​​globais têm escopo lexical, enquanto os singletons não.
 * Isso significa que, se houver outra variável com o mesmo nome da variável global dentro de um bloco de programação,
 * a primeira referência terá prioridade. Singletons, no entanto, não devem ter essa referência declarada novamente.
 *
 * - O valor de um singleton é modificado por meio de métodos.
 * - O singleton não é liberado até o término do programa, o que provavelmente não é o caso de uma variável global.
 *
 * Mesmo em uma linguagem que suporte variáveis ​​globais, singletons podem ser muito úteis.Há cenários em que singletons são úteis.
 * Algumas aplicações de singletons são objetos logger ou classes de definições de configuração.
 *
 */
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
