
/**
 * Undefined | null
 * Quando declaramos uma variável ela inicia seu valor como undefined, ou seja, indefinido!
 * Para o JavaScript undefined é como se fosse o NULL, mas vale ressaltar que esses 2 tipos são diferentes quando comparados.
 */
let value: undefined | null;
value = null;

// Boolean (true || false)
let isOpen: boolean;
isOpen = true;

// String (Apenas texto: "Lorem ipsum dolor" ou 'Lorem ipsum dolor' ou `Lorem ipsum dolor`)
let text: string;
text = "Lorem ipsum dolor";

// Number (Apenas números: int, float, hex, binary)
let numbers: number;
numbers = 1.0;

// Array (types[])
let list1: number[];
list1 = [0, 1, 2, 3];

let list2: string[];
list2 = ["text01", "text02"];

let list3: Array<number>;
list3 = [0, 1, 2, 3];

let list4: Array<string>;
list4 = ["text01", "text02"];

// Tuple
let listTuple: [string, number, object];
listTuple = ["Text", 1, {}];

// Enum
enum Colors {
  BLACK = '#000',
  WHITE = '#FFF'
}
Colors.BLACK;
Colors.WHITE;

// Void (Vazio)
function logger(): void {
  console.log('Test');
}

// Never (Nunca retornar nada)
function Erro(): never {
  throw new Error('Test');
}

// Object ({})
let TestObject: object;
TestObject = {
  key: 1
}