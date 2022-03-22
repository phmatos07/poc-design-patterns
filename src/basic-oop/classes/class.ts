import { UserAbstract } from './class.abstract';

export class User extends UserAbstract {

  constructor(name: string, age: number, email: string) {
    super(name, age, email);
    this.setCurrentDate();
  }

  setCurrentDate(): void {
    this.updateCurrentDate = this.generateCurrentDate();
  }
}
