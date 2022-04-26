import { Sex } from './sex.enum';

export class UserB {
  constructor(
    public fullName: Readonly<string>,
    public age: Readonly<number>,
    public sex: Readonly<Sex>,
    public email: Readonly<string>
  ) { }
}
