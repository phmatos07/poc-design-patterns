import { Delete } from './class/delete.class';
import { Get } from './class/get.class';
import { Post } from './class/post.class';
import { Put } from './class/put.class';
import { CrudFactory } from './model/crud-factory.interface';
import { DeleteAbstract } from './model/delete-abstract.interface';
import { GetAbstract } from './model/get-abstract.interface';
import { PostAbstract } from './model/post-abstract.interface';
import { PutAbstract } from './model/put-abstract.interface';

/**
 * @description O Abstract Factory define uma interface para criar todos os produtos distintos,
 * mas deixa a criação real do produto para classes fábrica concretas.
 * Cada tipo de fábrica corresponde a uma determinada variedade de produtos.
 *
 * O código cliente chama os métodos de criação de um objeto fábrica em vez de
 * criar produtos diretamente com uma chamada de construtor (usando operador new).
 * Como uma fábrica corresponde a uma única variante de produto, todos os seus produtos serão compatíveis.
 *
 * O código cliente trabalha com fábricas e produtos somente através de suas interfaces abstratas.
 * Ele permite que o mesmo código cliente funcione com produtos diferentes.
 * Você apenas cria uma nova classe fábrica concreta e a passa para o código cliente.
 *
 * @example Exemplo de uso
 * const myCrud01 = new MyCrud01();
 * myCrud01.post();
 * myCrud01.get();
 * myCrud01.put();
 * myCrud01.delete();
 *
 * const myCrud02 = new MyCrud01();
 * myCrud02.post();
 * myCrud02.get();
 * myCrud02.put();
 * myCrud02.delete();
 */
class MyCrud01 implements CrudFactory {

  post<T>(): PostAbstract {
    return new Post();
  }

  get(): GetAbstract {
    return new Get();
  }

  put(): PutAbstract {
    return new Put();
  }

  delete(): DeleteAbstract {
    return new Delete();
  }
}
