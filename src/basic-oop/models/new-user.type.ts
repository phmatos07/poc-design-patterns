import { User } from './user.interface';

// Omit: Constrói um tipo pegando todas as propriedades de Type e então removendo Keys.
export type NewUser = Omit<User, 'id'>;
