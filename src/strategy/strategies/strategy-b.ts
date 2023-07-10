import { Strategy } from "../model/strategy.interface";

export class StrategyB implements Strategy {

  public algorithm(data: string[]): string[] {
    return data.reverse();
  }
}
