# poc-design-patterns

Prova de conceito para estudar **Design Patterns** e os fundamentos de **Programação Orientada a Objetos** com **TypeScript puro**, sem frameworks nem dependências de runtime.

Cada padrão fica em uma pasta própria dentro de `src/`. A classe principal tem comentários JSDoc que explicam o conceito, como reconhecer o padrão e um exemplo de uso. Os padrões com `index.ts` também têm um exemplo executável.

## Padrões implementados

| Padrão | Categoria | Arquivo principal | Exemplo executável | Ideia demonstrada |
| --- | --- | --- | --- | --- |
| **Singleton** | Criacional | [src/singleton/singleton.ts](src/singleton/singleton.ts) | ✅ | Uma única instância de `Singleton` (construtor privado + `getInstance()`) compartilhando um contador. |
| **Builder** | Criacional | [src/builder/array-builder.ts](src/builder/array-builder.ts) | ✅ | `ArrayBuilder<S>` monta uma lista passo a passo com métodos encadeáveis (`create`, `add`, `sort`, `upperCase`, `lowerCase`). |
| **Abstract Factory** | Criacional | [src/abstract-factory/abstract-factory.ts](src/abstract-factory/abstract-factory.ts) | ❌ | A fábrica `MyCrud01` implementa `CrudFactory` e cria os produtos `Get`, `Post`, `Put` e `Delete` por meio de interfaces abstratas. |
| **Adapter** | Estrutural | [src/adapter/adapter.ts](src/adapter/adapter.ts) | ✅ | Combina dois modelos incompatíveis (`UserA` e `UserB`) em um único formato. |
| **Proxy** | Estrutural | [src/proxy/proxy.ts](src/proxy/proxy.ts) | ✅ | Intercepta leitura e escrita de um objeto `Profile` usando `Reflect` e valida tipo e existência de cada propriedade. |

## Fundamentos de TypeScript / POO

A pasta [src/basic-oop/](src/basic-oop/) reúne exemplos de apoio que não fazem parte do fluxo executado:

- **Classes e herança**: a classe abstrata `UserAbstract` e a classe concreta `User`, com modificadores `private`/`protected`, getters e setters.
- **Generics**: `UseState<S>`, com restrição de tipo e tipo padrão.
- **Decorators**: `@ClassInformation` (de classe), `@MinLength` e `@MaxLength` (de propriedade).
- **Utility Types**: `UserUtility` demonstra `Readonly`, `Partial`, `Required`, `Record`, `Pick`, `Omit`, `Exclude`, `Extract`, `NonNullable`, `Parameters`, `ConstructorParameters`, `ReturnType`, `InstanceType`, `ThisParameterType`, `OmitThisParameter`, os tipos de manipulação de string (`Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`) e `keyof`.
- **Tipos**: tipos primitivos, arrays, tuplas, enums, `void`, `never`, type aliases e intersection types (`models/primitive-types.ts` e `models/alias.type.ts`).

## Estrutura

```
src/
├── index.ts              # Ponto de entrada: escolhe qual padrão executar
├── abstract-factory/     # class/ (produtos concretos) e model/ (interfaces)
├── adapter/              # adapter.ts, index.ts e model/
├── builder/              # array-builder.ts e index.ts
├── proxy/                # proxy.ts, index.ts e model/
├── singleton/            # singleton.ts e index.ts
└── basic-oop/            # classes/, decorators/ e models/
```

O código compilado vai para `dist/`, que está no `.gitignore`.

## Pré-requisitos

- [Node.js](https://nodejs.org/) e npm

## Instalação

```bash
git clone https://github.com/phmatos07/poc-design-patterns.git
cd poc-design-patterns
npm install
```

## Como executar

1. Em [src/index.ts](src/index.ts), deixe descomentada apenas a linha do padrão que você quer executar. O Adapter já vem ativado:

   ```ts
   // Adapter Pattern
   export * from './adapter/index';

   // Builder Pattern
   // export * from './builder/index';
   ```

2. Compile e execute:

   ```bash
   npm run build   # compila src/ para dist/
   npm start       # executa dist/index.js com nodemon
   ```

   Para recompilar automaticamente a cada alteração, use `npm run build:watch` em um terminal e `npm start` em outro.

### Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run build` | Compila o projeto com `tsc`. |
| `npm run build:watch` | Compila em modo *watch*. |
| `npm start` | Executa `dist/index.js` com `nodemon`, que reinicia a cada nova compilação. |

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/) (`strict`, alvo ES2020, módulos CommonJS, `experimentalDecorators`)
- [nodemon](https://nodemon.io/)

## Autor

**Phelipe Matos** — [phelipe.matos07@gmail.com](mailto:phelipe.matos07@gmail.com)

## Licença

Distribuído sob a licença **GPL-3.0**. Veja o arquivo [LICENSE](LICENSE).
