import { Profile } from '../models/profile.interface';

export abstract class UserAbstract implements Profile {

  id!: string;
  name!: string;
  age!: number;
  email!: string;
  private currentDate!: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  logObject(): void {
    console.group('DATA INFORMATION');
    console.log(`Nome: ${this.name}`);
    console.log(`Idade: ${this.age}`);
    console.log(`E-mail: ${this.email}`);
    console.log(`Data do Registro: ${this.getCurrentDate}`);
    console.groupEnd();
  }

  protected generateCurrentDate(): string {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  protected set updateCurrentDate(newDate: string) {
    this.currentDate = newDate;
  }

  get getCurrentDate(): string {
    return this.currentDate;
  }
}
