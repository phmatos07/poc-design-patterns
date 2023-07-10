/**
  * A interface Strategy declara operações comuns a todas as versões suportadas de algum algoritmo.
  * O Context usa esta interface para chamar o algoritmo definido por Concrete Strategies.
 */
export interface Strategy {
  algorithm(data: string[]): string[];
}
