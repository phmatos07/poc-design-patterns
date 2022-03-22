import { Profile } from './../models/profile.interface';
import { UserAbstract } from './class.abstract';

export class User extends UserAbstract implements Profile {

  constructor(name: string, age: number, email: string) {
    super(name, age, email);
    this.setCurrentDate();
  }

  setCurrentDate(): void {
    this.updateCurrentDate = this.generateCurrentDate();
  }
}
