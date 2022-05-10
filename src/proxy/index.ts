import { Person } from './model/person.const';
import { Proxy } from './proxy';

const proxy = new Proxy(Person);
proxy.setValue('name', 'Phelipe Matos');
proxy.defineProperty('email', 'phelipe.matos07@gmail.com');
const specificProperty = proxy.getValue('email');

console.log(proxy.objectState, specificProperty);
