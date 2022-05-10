import { Profile } from './model/person.interface';

/**
 * @description O Proxy é um padrão de projeto estrutural que fornece um objeto que atua como um substituto para um objeto de serviço real usado por um cliente.
 * Um proxy recebe solicitações do cliente, realiza alguma tarefa (controle de acesso, armazenamento em cache etc.) e passa a solicitação para um objeto de serviço.
 *
 * @example
 * const proxy = new Proxy(Person);
 * proxy.setValue('name', 'Phelipe Matos');
 * proxy.defineProperty('email', 'phelipe.matos07@gmail.com');
 * const specificProperty = proxy.getValue('email');
 *
 * console.log(proxy.objectState, specificProperty);
 *
 */
export class Proxy<S extends Profile> {

  private _objectState!: S;

  constructor(newObject: S) {
    this._objectState = newObject;
  }

  defineProperty<K extends keyof S>(property: K, value: any): void {
    this._objectState[property] = value;
  }

  setValue(property: string, value: any): void {
    if (this.check(property, value)) {
      Reflect.set(this._objectState, property, value);
    }
  }

  getValue(property: string): any {
    if (this.check(property)) {
      return Reflect.get(this._objectState, property);
    }
  }

  private check(property: string, value?: any): boolean {

    const isString = value && typeof value !== 'string';
    const isNumber = value && typeof value !== 'number';

    if (property === 'name' && isString) {
      console.info("Por favor, digite apenas caracteres propriedade 'name'");
      return false;
    }

    if (property === 'age' && isNumber) {
      console.info("Por favor, digite apenas números na propriedade 'age'");
      return false;
    }

    if (property === 'nationality' && isString) {
      console.info("Por favor, digite apenas números na propriedade 'nationality'");
      return false;
    }

    if (property === 'email' && isString) {
      console.info("Por favor, digite apenas números na propriedade 'email'");
      return false;
    }

    if (!this._objectState.hasOwnProperty(property)) {
      console.info(`A propriedade '${property}' não foi definida no objeto.`);
      return false;
    }

    return true;
  }

  get objectState(): S {
    return this._objectState;
  }
}
