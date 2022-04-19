import { DeleteAbstract } from './delete-abstract.interface';
import { GetAbstract } from './get-abstract.interface';
import { PostAbstract } from './post-abstract.interface';
import { PutAbstract } from './put-abstract.interface';

export interface CrudFactory {
  post(): PostAbstract;
  get(): GetAbstract;
  put(): PutAbstract;
  delete(): DeleteAbstract;
}
