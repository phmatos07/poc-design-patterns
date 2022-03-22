import { User } from './user.interface';

export interface Profile extends User {
  logObject?: () => void;
  get getCurrentDate(): string;
}