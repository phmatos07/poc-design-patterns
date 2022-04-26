import { Adapter } from './adapter';
import { Sex } from './model/sex.enum';
import { UserA } from './model/user-a';
import { UserB } from './model/user-b';

const userA = new UserA('Phelipe', 33);
const userB = new UserB('Phelipe Matos', 30, Sex.MASCULINE, 'phelipe.matos07@gmail.com');

const adapter = new Adapter(userA, userB);
console.log('Perfil:', adapter);
