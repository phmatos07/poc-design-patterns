import { User } from '../models/user.interface';

/**
 * @description Classes/funções genéricas são classes que tem um tipo desconhecido (unknown)
 * que por sua vez aceita qualquer coisa, mas a partir do ponto que esse tipo for definido,
 * ele não aceitará outros tipos.
 *
 * Algumas convenções de tipos:
 * S => State
 * T => Type
 * K => Key
 * V => Value
 * E => Element
 *
 * @example Exemplo de uso
 * let Teste01 = new UseState();
 * Teste01.state = 'Teste';
 * console.log(Teste01.state);
 *
 * let Teste02 = new UseState<number>();
 * Teste02.state = 10000;
 * console.log(Teste02.state);
 *
 * let Teste03 = new UseState<User>();
 * Teste03.state = {
 * id: '01',
 * name: 'Phelipe Matos',
 * age: 33,
 * email: 'phelipe.matos07@gmail.com'
 * };
 * console.log(Teste03.state);
 */
export class UseState<S extends User | string | number = string>  {

  private _state!: S;

  get state(): S {
    return this._state;
  }

  set state(newSate: S) {
    this._state = newSate;
  }
}
