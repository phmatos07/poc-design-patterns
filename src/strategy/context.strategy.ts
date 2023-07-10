import { Strategy } from "./model/strategy.interface";

/**
 * O Strategy é um padrão de projeto comportamental que transforma um conjunto de comportamentos
 * em objetos e os torna intercambiáveis dentro do objeto de contexto original.
 */
export class ContextStrategy {

  /**
    * @type { Strategy } O Contexto mantém uma referência a uma das Estratégias
    * objetos. O Contexto não conhece a classe concreta de uma estratégia. Isto
    * deve funcionar com todas as estratégias por meio da interface de estratégia.
  */
  private strategy: Strategy;

  /**
   * Normalmente, o Context aceita uma estratégia por meio do construtor, mas também
   * fornece um configurador para alterá-lo em tempo de execução.
  */
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Normalmente, o Context permite substituir um objeto Strategy em tempo de execução.
  */
  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  /**
   * O Context delega algum trabalho ao objeto Strategy em vez de
   * implementando várias versões do algoritmo por conta própria.
  */
  public executeLogic(): void {
    const result = this.strategy.algorithm(['a', 'b', 'c', 'd', 'e']);
    console.group('Execução da Logica:');
    console.log(result.join(','));
    console.groupEnd();
  }
}
