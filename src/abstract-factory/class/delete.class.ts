import { DeleteAbstract } from '../model/delete-abstract.interface';

export class Delete implements DeleteAbstract {
  delete(url: unknown): object {
    return {};
  }
}
