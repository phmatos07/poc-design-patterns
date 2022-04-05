import { ClassInformation } from '../decorators/class-information.decorator';
import { MinLength } from '../decorators/min-length.decorator';
import { Profile } from '../models/profile.interface';
import { UserAbstract } from './user.abstract';

@ClassInformation
export class User extends UserAbstract implements Profile {

  @MinLength(5)
  nickname?: string;

  birthFate?: string;

  constructor(name: string, age: number, email: string, nickname: string, birthFate: string) {
    super(name, age, email);
    this.setCurrentDate();
    this.updateProperties(nickname, birthFate);
  }

  setCurrentDate(): void {
    this.updateCurrentDate = this.generateCurrentDate();
  }

  private updateProperties(nickname: string, birthFate: string): void {
    this.nickname = nickname;
    this.birthFate = birthFate;
  }
}
