import { Sex } from './model/sex.enum';
import { UserA } from './model/user-a';
import { UserB } from './model/user-b';

/**
 * @description O Adapter atua como um wrapper entre dois objetos.
 * Ele captura chamadas para um objeto e as deixa reconhecíveis tanto em formato como interface para este segundo objeto.
 *
 * Exemplos de uso: O padrão Adapter é bastante comum no código TypeScript.
 * É frequentemente usado em sistemas baseados em algum código legado.
 * Nesses casos, os adaptadores criam código legado com classes modernas.
 *
 * Identificação: O adapter é reconhecível por um construtor que utiliza uma instância de tipo abstrato/interface diferente.
 * Quando o adaptador recebe uma chamada para qualquer um de seus métodos, ele converte parâmetros para o formato apropriado e
 * direciona a chamada para um ou vários métodos do objeto envolvido.
 *
 * @example Exemplo Prático:
 * const userA = new UserA('Phelipe', 33);
 * const userB = new UserB('Phelipe Matos', 30, Sex.MASCULINE, 'phelipe.matos07@gmail.com');
 *
 * const adapter = new Adapter(userA, userB);
 * console.log(adapter);
 *
 * Output:
 * Adapter {
 *  name: 'Phelipe',
 *  age: 33,
 *  sex: 'Masculino',
 *  email: 'phelipe.matos07@gmail.com'
 * }
 */
export class Adapter {

  name!: string;
  age!: number;
  sex!: Sex;
  email!: string;

  constructor(
    userA: UserA,
    userB: Required<UserB>
  ) {
    this.name = userA.name;
    this.age = userA.age;
    this.sex = userB.sex;
    this.email = userB.email;
  }
}
