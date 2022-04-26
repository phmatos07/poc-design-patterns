import { NewUser } from './../models/new-user.type';

export class UserUtility {

  /**
   * @description Readonly: Constrói um tipo com todas as propriedades de Type definidas como readonly,
   * significando que as propriedades do tipo construído não podem ser reatribuídas.
  */
  private user!: Readonly<NewUser>;

  constructor(user: NewUser) {
    this.user = user;
    this.logObject<NewUser>(this.user);
  }

  /**
   * @description Partial: Constrói um tipo com todas as propriedades de Type definidas como opcionais.
   * Esse utilitário irá retornar um tipo que representa todos os subconjuntos de um determinado tipo.
   * @param fieldsToUpdate
  */
  partial(fieldsToUpdate: Partial<NewUser>): void {
    this.user = { ...this.user, ...fieldsToUpdate };
    this.logObject<NewUser>(this.user);
  }

  /**
   * @description Required: Constrói um tipo consistindo de todas propriedades de T definidas como obrigatórias. O oposto de Partial.
   * @param fieldsToUpdate
  */
  required(fieldsToUpdate: Required<NewUser>): void {
    this.user = { ...this.user, ...fieldsToUpdate };
    this.logObject<NewUser>(this.user);
  }

  /**
   * @description Constrói um tipo com um conjunto de propriedades Keys do tipo Type.
   * Esse utilitário pode ser usado para mapear as propriedades de um tipo para outro tipo.
  */
  record(): void {

    type NewProperties = 'ID_01' | 'ID_02';
    type NewType = Record<NewProperties, NewUser>;

    const newObject: NewType = {
      ID_01: { ...this.user },
      ID_02: { ...this.user }
    };

    this.logObject<NewType>(newObject);
  }

  /**
   * @description Constrói um tipo pegando um conjunto de propriedades Keys de Type.
   * @param newObject
  */
  pick(newObject: Pick<NewUser, 'name' | 'age'>): void {
    this.logObject(newObject);
  }

  /**
   * @description Exclude: Constrói um tipo excluindo de Type todos membros de união que são atribuíveis a ExcludedUnion.
  */
  exclude(): void {

    type Types = string | number | boolean;
    type NewType = Exclude<Types, boolean>;

    const test01: NewType = 'Phelipe Matos';
    const test02: NewType = 33;

    this.logObject<NewType>(test01);
    this.logObject<NewType>(test02);
  }

  /**
   * @description Extract: Constrói um tipo extraindo de Type todos membros de união que são atribuíveis a Union.
  */
  extract(): void {

    type Type01 = string | number | object | boolean;
    type Type02 = string | boolean | [];
    type NewType = Extract<Type01, Type02>;

    const test01: NewType = 'Phelipe Matos';
    const test02: NewType = true;

    this.logObject<NewType>(test01);
    this.logObject<NewType>(test02);
  }

  /**
   * @description NonNullable: Constrói um tipo por excluir null e undefined de Type.
  */
  nonNullable(): void {
    type Type = NonNullable<string | number | null | undefined>;
    const test: Type = 'Phelipe Matos';
    this.logObject<Type>(test);
  }

  /**
   * @description Parameters: Constrói uma tipo tupla a partir de tipos usados nos parâmetros de uma função tipo Type.
  */
  parameters(): void {
    type F1 = (arg: { a: number; b: string }) => void;
    type T0 = Parameters<() => string>;
    type T1 = Parameters<(s: string) => void>;
    type T2 = Parameters<<T>(arg: T) => T>;
    type T3 = Parameters<F1>;
    type T4 = Parameters<any>;
    type T5 = Parameters<never>;
  }

  /**
   * @description constructorParameters: Constrói um tipo tupla ou array a partir dos tipos de um tipo função construtora.
   * Isso gera um tipo tupla com todos os tipos parâmetros (ou o tipo never se Type não for uma função).
  */
  constructorParameters(): void {
    type T0 = ConstructorParameters<ErrorConstructor>;

    type T1 = [message?: string];
    type T2 = ConstructorParameters<FunctionConstructor>;

    type T3 = string[]
    type T4 = ConstructorParameters<RegExpConstructor>;

    type T5 = [pattern: string | RegExp, flags?: string];
    type T6 = ConstructorParameters<any>;

    type T7 = unknown[];
  }

  /**
   * @description ReturnType: Constrói um tipo consistindo do tipo retorno da função Type.
  */
  returnType(): void {
    type Type = ReturnType<(id:string)=> boolean>;
    const test: Type = true;
    this.logObject<Type>(test);
  }

  /**
   * @description InstanceType: Constrói um tipo consistindo do tipo instancia de uma função construtora em Type.
  */
  instanceType(): void {
    type T1 = InstanceType<any>;
    type T2 = InstanceType<never>;
  }

  /**
   * @description ThisParameterType: Extrai o tipo do parâmetro this para um tipo function, ou unknown se o tipo da função não tem o parâmetro this.
  */
  thisParameterType(): void {
    type Type = ThisParameterType<this>;
  }

  /**
   * @description ThisParameterType: Remove o parâmetro this de Type.
   * Se Type não tem parâmetro this explicitamente declarado, o resultado é simplesmente Type.
   * Caso contrário, um novo tipo função sem o parâmetro this é criado a partir de Type.
   * Generics são apagados e apenas a ultima assinatura sobrecarregada é propagada para o novo tipo função.
  */
  omitThisParameter(): void {
    const paraHex = (id: number) => id.toString(16);
    const cincoParaHex: OmitThisParameter<typeof paraHex> = paraHex.bind(5);
    console.log(cincoParaHex);
  }

  /**
   * @description Para ajudar na manipulação de strings em torno de literais de strings de modelo,
   * o TypeScript inclui um conjunto de tipos que podem ser usados ​​na manipulação de strings dentro do sistema de tipos.
   */
  manipulationTypes(): void {

    type TypeName01 = Uppercase<'phelipe'>;
    const name01: TypeName01 = 'PHELIPE';
    console.log(name01);

    type TypeName02 = Lowercase<'PHELIPE'>;
    const name02: TypeName02 = 'phelipe';
    console.log(name02);

    type TypeName03 = Capitalize<'phelipe'>;
    const name03: TypeName03 = 'Phelipe';
    console.log(name03);

    type TypeName04 = Uncapitalize<'PHELIPE'>;
    const name04: TypeName04 = 'pHELIPE';
    console.log(name04);
  }

  /**
   * @description Método responsável por printar no console o objeto passado conforme a tipagem genérica
   * @param fieldsToUpdate
   */
  private logObject<T>(object: T): void {
    console.group('VIEW DATA');
    console.log(object);
    console.groupEnd();
  }
}
