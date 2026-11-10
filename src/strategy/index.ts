import { ContextStrategy } from "./context.strategy";
import { StrategyA } from "./strategies/strategy-a";
import { StrategyB } from "./strategies/strategy-b";

/**
  * O código do cliente escolhe uma estratégia concreta e a passa para o contexto.
  * O cliente deve estar ciente das diferenças entre as estratégias para fazer a escolha certa.
 */
const context = new ContextStrategy(new StrategyA());
context.executeLogic();

context.setStrategy(new StrategyB());
context.executeLogic();