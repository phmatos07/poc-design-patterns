/**
 * @description O Builder é um padrão de projeto criacional, que permite a construção de objetos complexos passo a passo.
 *
 * Exemplos de uso: O padrão Builder é um padrão bem conhecido no mundo TypeScript.
 * É especialmente útil quando você precisa criar um objeto com muitas opções possíveis de configuração.
 *
 * Identificação: O padrão Builder pode ser reconhecido na classe que possui um único método de criação e
 * vários métodos para configurar o objeto resultante. Os métodos do Builder geralmente suportam encadeamento
 * (por exemplo, algumBuilder.configValorA(1).configValorB(2).criar()).
 *
 * @example Exemplo Prático:
 * const list = ['phelipe', 'karen', 'íkaro', 'izailda', 'ademir'];
 * const arrayBuilder = new ArrayBuilder<string>();
 * arrayBuilder.create(list)
 *   .add('jaqueline')
 *   .add('jaqueline2')
 *   .sort()
 *   .upperCase();
 *
 * console.log(arrayBuilder.stateArray);
 *
 */
export class ArrayBuilder<S extends string | number = string> {

  private _stateArray = new Array<S>();

  constructor() {
    this.reset();
  }

  reset(): void {
    this._stateArray = [];
  }

  create(list: Array<S>): this {
    this._stateArray = list;
    return this;
  }

  add(value: S): this {
    this._stateArray.push(value);
    return this;
  }

  sort(isReverse?: boolean): this {

    this._stateArray.sort();

    if (isReverse) {
      this._stateArray.reverse();
    }
    return this;
  }

  upperCase(): this {
    this._stateArray = this._stateArray.map(value => typeof value === 'string' ? value.toUpperCase() as S : value);
    return this;
  }

  lowerCase(): this {
    this._stateArray = this._stateArray.map(value => typeof value === 'string' ? value.toLowerCase() as S : value);
    return this;
  }

  get stateArray(): Array<S> {
    return this._stateArray;
  }
}
