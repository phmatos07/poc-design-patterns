import { ArrayBuilder } from './array-builder';

const list = ['phelipe', 'karen', 'íkaro', 'izailda', 'ademir'];
const arrayBuilder = new ArrayBuilder<string>();

arrayBuilder.create(list)
  .add('maria')
  .add('joão')
  .sort()
  .upperCase();

console.log('Listagem de Nome:', arrayBuilder.stateArray);
