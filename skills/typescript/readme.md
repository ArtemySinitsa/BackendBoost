# Typescript

## Description

A strongly typed programming language that builds on JavaScript and brings valuable benefits:
- Better code quality: TypeScript provides developers with the ability to catch errors early on in the development process. This helps to reduce the likelihood of runtime errors and improves the overall reliability of the code.
- Enhanced code maintainability: With its strong typing system and support for interfaces, TypeScript can make code more maintainable and easier to refactor. This can be particularly helpful when working on large-scale projects or when collaborating with other developers.
- Enhanced productivity: TypeScript provides several features such as code completion, type checking, and refactoring support that can help to improve developer productivity.

## Topics

- Overview
- Quick start
  - compiler
  - basic tsconfig
  - IDE setup
  - linter
  - first .ts file
- Migrating from JavaScript
- Basic ts types
- Object types
- type vs interface
- Classes
- tsconfig
- Generics
- Utility Types
- Type guards
- Declaration Files
- JSDoc

## Tasks

1. Migrate an existing project to TypeScript or initialize a new one.
   - Make sure that linter and tsconfig are set up
   - Make sure that compilation runs without errors
2. Add types for environment variables.
3. Improve classes using access modifiers and interface implementations.
4. Create a Generic (for example `IRepository<T>`)
5. Use a Utility Type

## Materials

| Name                                                                                                                                            | Type          | Description                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------- |
| [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)                              | article       | TypeScript overview                                        |
| [Typescript with VSCode](https://code.visualstudio.com/docs/languages/typescript)                                                               | article       | Setup TypeScript for VSCode                                |
| [Typescript with WebStorm](https://www.jetbrains.com/help/webstorm/typescript-support.html)                                                     | article       | Setup TypeScript for WebStorm                              |
| [How to setup TypeScript projects in 2021](https://blog.ghaiklor.com/2021/02/26/how-to-setup-typescript-projects-in-2021/)                      | article       |                                                            |
| [Migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)                                        | tutorial      | js => ts                                                   |
| [Basic types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)                                                               | documentation | Everyday types                                             |
| [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)                                                                     | documentation | How to type objects                                        |
| [Type vs interface stackoverflow](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)                               | stackoverflow | Difference between types and interfaces                    |
| [Type vs interface playground](https://www.typescriptlang.org/play/typescript/language-extensions/types-vs-interfaces.ts.html)                  | ts playground | Difference between types and interfaces                    |
| [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)                                                                          | documentation | Classes in TypeScript                                      |
| [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)                                                      | documentation | tsconfig overview                                          |
| [The recommended base for a TSConfig](https://www.npmjs.com/package/@tsconfig/recommended)                                                      | npm package   | Recommended tsconfig                                       |
| [TSConfig Reference](https://www.typescriptlang.org/tsconfig)                                                                                   | documentation | Full tsconfig documentation                                |
| [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)                                                                        | documentation | Creating custom types with Generics                        |
| [Utility Types](typescriptlang.org/docs/handbook/utility-types.html)                                                                            | documentation | Common type transformations                                |
| [Using type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)                                    | documentation | User-defined type guards                                   |
| [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)                                           | documentation | Definition files                                           |
| [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)                                                      | documentation | JSDoc + TypeScript                                         |
| [Extending js with types but with no bundling](https://github.com/georgolden/ts-guideline)                                                      | github repo   | Alternatives to full ts solution                           |
| [Types // as Comments ECMAScript Proposal](https://tc39.es/proposal-type-annotations/)                                                          | article       | \\/                                                        |
| [ECMAScript proposal: Type Annotations](https://github.com/tc39/proposal-type-annotations)                                                      | github repo   | Possible js/ts future                                      |
| [Typed JavaScript? For real? The “type annotations” proposal and what it’s all about by Gil Tayar](https://www.youtube.com/watch?v=SdV9Xy0E4CM) | video         | /\                                                         |
| [Collection of TypeScript type challenges](https://github.com/type-challenges/type-challenges)                                                  | github repo   | Collection of TypeScript type challenges with online judge |
| [TypeScript Compiler Internals](https://basarat.gitbook.io/typescript/overview)                                                                 | article       | Understanding TypeScript compiler                          |