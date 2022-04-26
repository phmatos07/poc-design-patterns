import { Singleton } from "./singleton";

const singleton01 = Singleton.getInstance();
singleton01.increment();
console.log(`Output Singleton01: ${singleton01.counter}`);

const singleton02 = Singleton.getInstance();
singleton02.increment();
console.log(`Output Singleton02: ${singleton02.counter}`);

const singleton03 = Singleton.getInstance();
singleton03.decrement();
console.log(`Output Singleton03: ${singleton03.counter}`);
