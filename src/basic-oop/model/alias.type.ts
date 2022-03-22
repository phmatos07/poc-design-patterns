//  Simple type of alias
type ID = number | string;
let id01: ID = 111111;
let id02: ID = 'Lorem ipsum';

// Complex type of alias (Type Aliases com Intersection)
type UserRegistration = {
  id: number;
  name: string;
  age: number;
}

type Car = {
  model: string;
  color: string;
  plate: string;
  km?: number;
}

// Intersection
type Register = UserRegistration & Car;

const registerCar: Register[] = [
  {
    id: 1,
    name: 'Phelipe Matos',
    age: 33,
    model: 'Fox Connect 1.6V',
    color: 'Grafiti',
    plate: 'EEF-8471',
    km: 34.000
  },
  {
    id: 2,
    name: 'Íkaro Matos',
    age: 30,
    model: 'Onix 1.4V',
    color: 'Preto',
    plate: 'EGF-4471'
  },
];