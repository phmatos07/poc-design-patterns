import { Strategy } from "../model/strategy.interface";

export class StrategyA implements Strategy {

  public algorithm(data: string[]): string[] {
    return data.sort();
  }
}
