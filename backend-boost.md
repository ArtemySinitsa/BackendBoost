## Skills

* [Backend overview](#backend-overview)
* [Docker](#docker)
* [Databases](#databases)
* [Node.js](#nodejs)
* [Typescript](#typescript)
* [Nest.js](#nestjs)
* [Architectures](#architectures)
* [CI/CD](#cicd)
# Backend overview

## Description

Backend refers to the logic and functions that happen behind the scenes but is necessary for the user to be able to send and receive information back and forth between the frontend and the database. Often used for server-side rendering as opposed to client-side rendering which is processed by the frontend, both of the elements work in tandem to provide for a well-functioning and efficient application. Backend developers build the “under the hood” parts of websites or mobile apps that users don’t interact with directly. This means that a back-end developer must be able to write code to receive the information input from the user and also save it somewhere – like in a database (relational or non relational).

It includes all the code needed to build out the database, server, and application.
From database migrations to API integrations to setting up the server-side technologies that make a website tick.

## Skills

* Working knowledge of back-end development (configuration, administration and management of databases and servers)
* Security and authentication best practices
* Back-End Tools and Technology
* Experience writing RESTful APIs

## Topics

* Client-server general overview
* WEb servers
* Middleware
* APIs
* Postman app
* Token-based Authentication and Single Sign-on
    * JSON Web Token (JWT)
    * Security Assertion Markup Language (SAML)

## Theoretical Materials

| Name                                                                                                                                                                               | Type    | Short Description                                                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------|
| [The Beginner’s Guide to Backend Development](https://learntocodewith.me/posts/backend-development/)                                                                               | article | The Beginner’s Guide to Backend Development                            |        
| [What is back-end?](https://www.youtube.com/watch?v=WwbBOQaM0Zw)                                                                                                                   | video   | What is back-end?                                                      |
| [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)                                                        | article | What is a web server?                                                  |
| [Rest API Definition for Beginners](https://www.freecodecamp.org/news/what-is-rest-rest-api-definition-for-beginners/)                                                             | article | Rest API Definition for Beginners                                      |
| [What Are APIs? - Simply Explained](https://www.youtube.com/watch?v=OVvTv9Hy91Q)                                                                                                   | video   | What Are APIs? - Simply Explained                                      |
| [Understand the Difference Between SOAP and REST APIs](https://www.youtube.com/watch?v=bPNfu0IZhoE)                                                                                | video   | Understand the Difference Between SOAP and REST APIs                   |
| [Middleware. NestJS - A progressive Node.js framework](https://docs.nestjs.com/middleware)                                                                                         | article | Middleware. NestJS - A progressive Node.js framework                   |
| [What is an API and how does it work?](https://www.youtube.com/watch?v=Yzx7ihtCGBs)                                                                                                | video   | What is an API and how does it work?                                   |
| [Node.js Crash Course Tutorial #8 - Middleware](https://www.youtube.com/watch?v=_GJKAs7A0_4)                                                                                       | video   | Node.js Crash Course Tutorial #8 - Middleware                          |
| [Best practices for REST API security: Authentication and authorization](https://stackoverflow.blog/2021/10/06/best-practices-for-authentication-and-authorization-for-rest-apis/) | article | Best practices for REST API security: Authentication and authorization |
| [JSON vs XML](https://www.w3schools.com/js/js_json_xml.asp)                                                                                                                        | article | Read short article about JSON and XML comparison                       |
| [A Comprehensive Guide To Backend Tech](https://techblog.geekyants.com/a-comprehensive-guide-to-backend-tech)                                                                      | article | A Comprehensive Guide To Backend Tech                                  |
| [Most Used REST API Authentication Methods](https://dzone.com/articles/four-most-used-rest-api-authentication-methods)                                                             | article | Read about most used REST API Authentication methods                   |
| [Awesome list of GraphQL](https://github.com/chentsulin/awesome-graphql)                                                                                                           | article | Awesome list of GraphQL                                                |
| [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/ )                                                                                                               | video   | The Fullstack Tutorial for GraphQL                                     |
| [OWASP Top Ten](https://owasp.org/www-project-top-ten/ )                                                                                                                           | article | Top 10 Web Application Security Risks                                  |
<br><br><br># Docker

## Theoretical Materials| Name                                                                                                                                        | Type     | Short Description

| Name                                                                                                                                                                 | Type     | Short Description                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------------------------------------------------------------|
| [Docker Tutorial for Beginners](https://www.youtube.com/watch?v=fqMOX6JJhGo) | video         | Get started using Docker with this end-to-end beginners course with hands-on labs.       |
test<br><br><br># Databases

## Description

As a backend developer, understanding databases is a crucial part of your job, as data storage and retrieval is often one of the primary tasks of a backend system. SQL and NoSQL databases are two of the most popular types of databases used in modern software development. Here are a few reasons why a backend developer should learn about both:

SQL databases: Structured Query Language (SQL) is a standard language used to manage and manipulate relational databases. SQL databases are ideal for handling structured data and are used by many businesses for their reliability and data consistency. As a backend developer, understanding SQL databases can help you create efficient, scalable, and reliable applications. Additionally, SQL is a widely used language that is not specific to any particular database system, so knowledge of SQL can be applied across multiple database platforms.

NoSQL databases: NoSQL databases are designed to handle unstructured or semi-structured data, which can be a better fit for certain types of applications, such as those that require high scalability or real-time data processing. As a backend developer, learning about NoSQL databases can help you identify when this type of database is more appropriate for your application needs. NoSQL databases also offer a flexible schema design, which means you can quickly iterate and change your data model as needed, which is useful for agile development.

Hybrid solutions: In some cases, a combination of SQL and NoSQL databases may be the best solution for an application. Understanding both types of databases can help you design more complex systems that take advantage of the strengths of each type of database. For example, you might use a SQL database to store structured data, while using a NoSQL database for unstructured data or as a caching layer.

In summary, backend developers should learn about both SQL and NoSQL databases because they each have their own strengths and weaknesses, and understanding how to use them effectively can help you build more robust and scalable applications.

## Topics

- Fundamentals Structured Query Language
- Tables, Views, Stored procedures
- Indexes
- Joins, Groups
- Storage subsystems, Transactions

## Theoretical Materials| Name | Type | Short Description

| Name                                                                                                                                 | Type     | Short Description |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------- |
| [Introduction to SQL, noSQL databases](https://www.pluralsight.com/blog/software-development/relational-vs-non-relational-databases) | article  | Introduction      |
| [SQL fundamentals](https://sqlbolt.com)                                                                                              | tutorial | SQL fundamentals  |
| [What is nosql?](https://www.youtube.com/watch?v=qI_g07C_Q5I&ab_channel=GOTOConferences)                                             | video    | noSql             |
| [noSql mongodDB](https://learn.mongodb.com/learning-paths/introduction-to-mongodb)                                                   | tutorial | noSql             |
| [stored procedures](https://www.sqlshack.com/sql-server-stored-procedures-for-beginners/)                                            | article  | stored procedures |
| [views](https://www.datacamp.com/article/views-in-sql)                                                                               | article  | views             |
| [views](https://www.tutorialspoint.com/sql/sql-using-views.htm)                                                                      | article  | views             |
| [indexes](https://planetscale.com/blog/how-do-database-indexes-work)                                                                 | article  | indexes           |
| [Transactions](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver16)        | article  | Transactions      |
<br><br><br># Node.js

## Description
Node.js is a powerful and popular runtime environment for server-side JavaScript applications. It allows developers to use JavaScript to build high-performance, scalable, and efficient network applications, such as web servers, APIs, and real-time applications.

Node.js provides a wide range of built-in modules that can be used to perform various tasks, such as file I/O, networking, cryptography, and more. It also has a vibrant ecosystem of third-party modules and packages that can be easily integrated into applications, making it a popular choice for developers across a range of industries.

## Topics
* Installing / configuring IDE
* V8, libuv, Event loop, worker threads, child_process
* Module System (commonJS, ES, global / module vars)
* Node.js async development / Control flow
* Node.js Profiling and Debugging
* Communication Protocols (http vs https, ws, rest, graphql)
* Node.js secure app (CORS, JWT, OAuth?) (Experience in Implementing Data Protection)
* Node.js package managers
* Events
* Buffer and Streams
* Error handling
* Node.js logging approaches
* Working with file system
* Node.js unit / integration testing (creating reasonable and valuable unit-tests) (Understanding the principles of software design, unit and integration testing.)
* Diagnostics (debugging, tracing, profiling, step debugging)
* Creating RESTfull services
* Http,rest(min) performance 

## Theoretical Materials

| Name                                                                                                                                                                    | Type          | Short Description                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| [V8 Node.js documentation](https://nodejs.org/api/v8.html)                                                                                                              | documentation | V8 Node.js documentation                                                                                                                                |        
| [How to set up VS Code for Node.js development](https://learn.microsoft.com/en-us/shows/beginners-series-to-nodejs/how-to-setup-vs-code-for-nodejs-development-5-of-26) | video         | How to set up VS Code for Node.js development                                                                                                           |        
| [Node.js Under The Hood](https://dev.to/_staticvoid/series/2008)                                                                                                        | article       | Node.js Under The Hood                                                                                                                                  |
| [CommonJS vs. ES modules in Node.js](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)                                                                        | article       | Comparing CommonJS modules and ES modules                                                                                                               |
| [Understanding Async Programming in Node.js](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)                                                      | article       | Understanding Async Programming in Node.js                                                                                                              |
| [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling)                                                                           | article       | Easy profiling for Node.js Applications                                                                                                                 |
| [Debugging and profiling Node.js applications](https://developer.ibm.com/tutorials/learn-nodejs-debugging-and-profiling-node-applications/)                             | tutorial      | Four tools to improve the code quality and performance of your Node applications                                                                        |
| [Why is HTTP not secure? HTTP vs. HTTPS](https://www.cloudflare.com/learning/ssl/why-is-http-not-secure/)                                                               | article       | HTTP vs. HTTPS: What are the differences?                                                                                                               |
| [8 elements of securing Node.js applications](https://developers.redhat.com/articles/2022/08/09/8-elements-securing-nodejs-applications)                                | article       | This article covers eight key elements of building security into your software development process to make your Node.js applications and modules robust |
| [Alternative Package Managers For Node.js](https://medium.com/maestral-solutions/alternative-package-managers-for-node-js-f52805b98064)                                 | article       | Alternative Package Managers For Node.js                                                                                                                |
| [Node Events Tutorial. Node.js Tutorials for Beginners](https://www.youtube.com/watch?v=2vaTy4dkbJM)                                                                    | video         | Node Events Tutorial. Node.js Tutorials for Beginners                                                                                                   |
| [Streams and Buffers in Node.js](https://medium.com/developers-arena/streams-and-buffers-in-nodejs-30ff53edd50f)                                                        | article       | Streams and Buffers in Node.js                                                                                                                          |
| [Node.js Stream api Documentation](https://nodejs.org/api/stream.html)                                                                                                  | documentation | Node.js Stream documentation                                                                                                                            |
| [Node.js FS api Documentation](https://nodejs.org/api/fs.html)                                                                                                          | documentation | Node.js FS documentation                                                                                                                                |
| [Error handling in Node.js](https://blog.logrocket.com/error-handling-node-js/)                                                                                         | article       | Error handling in Node.js                                                                                                                               |
| [Node.js logging best practices](https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/)                                                            | article       | Node.js logging best practices: The essential guide                                                                                                     |
| [How to Write Tests for Node.js](https://www.netguru.com/blog/how-to-write-tests-for-node-js)                                                                           | article       | How to Write Tests for Node.js                                                                                                                          |


## Task

1. Create a docker compose file
   - any type DB
   - tools to work with db: DataGrip(trial, license), Table Plus, DB Beaver, Compass(MongoDB)
2. Create a node js app   		
   - command line tool
     - CSV -> JSON converter
     - custom logger
       - log to file
       - log to console
       - log levels
     - error handling
     - option to save in DB
   - TCP socket server parser
     - send args and config as message
     - send a file path to start parsing
   - add HTTP interface to parser
     - upload the file via Postman
   - 3rd party API integration<br><br><br># Typescript

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
| [TypeScript Compiler Internals](https://basarat.gitbook.io/typescript/overview)                                                                 | article       | Understanding TypeScript compiler                          |<br><br><br># Nest.js

## Description

Nest.js is a powerful framework for building scalable and maintainable server-side applications with Node.js.
Key features:

- TypeScript support: Nest.js is built on top of TypeScript, which brings type safety, better code organization, and easier debugging.
- Modularity: Nest.js promotes modular architecture, which makes it easier to manage and test large codebases.
- Scalability: Nest.js is designed to be scalable and supports microservice architecture, allowing to build complex applications that can handle high traffic.
- Extensibility: Nest.js is highly extensible and supports a variety of plugins and modules to help customize and enhance the application.

## Topics

- Decorators
- Setup
- Modules
- Services
- Controllers
- Providers
- Pipes
- Guards
- Database integration
- Tests
- Security
  - Authentication
  - Authorization
  - CORS
  - Helmet

## Task

1. Set up Nest.js
2. Create domain model
3. Create domain services
4. Create application services including:
  - CRUD
  - Authentication and authorization
  - Integration with external systems
  - Validation
5. Create infrastructure
  - Storage (database, cache)
  - Logger
6. Create controllers
7. Cover with tests


## Materials

| Name                                                                                                                                                     | Type          | Description                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| [Nest.js overview](https://docs.nestjs.com/)                                                                                                             | article       | Introduction to Nest.js and philosophy                    |
| [JavaScript decorators](https://www.sitepoint.com/javascript-decorators-what-they-are/)                                                                  | article       | JavaScript Decorators: What They Are and When to Use Them |
| [TypeScript decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)                                                                    | documentation | How to use decorators in TypeScript                       |
| [First steps](https://docs.nestjs.com/first-steps)                                                                                                       | documentation | Core fundamentals of Nest.js                              |
| [Getting started with NestJS](https://wanago.io/2020/05/11/nestjs-api-controllers-routing-module/)                                                       | article       | First steps, controllers, services, modules               |
| [Modules](https://docs.nestjs.com/modules)                                                                                                               | documentation | All about modules                                         |
| [Controllers](https://docs.nestjs.com/controllers)                                                                                                       | documentation | All about controllers                                     |
| [Providers](https://docs.nestjs.com/providers)                                                                                                           | documentation | All about providers                                       |
| [Pipes](https://docs.nestjs.com/pipes)                                                                                                                   | documentation | All about pipes                                           |
| [Guards](https://docs.nestjs.com/guards)                                                                                                                 | documentation | All about guards                                          |
| [Series: API with NestJS](https://wanago.io/courses/api-with-nestjs/)                                                                                    | tutorial      | Full Nest.js tutorial                                     |
| [Setting up a PostgreSQL database with TypeORM](https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/)                                             | tutorial      |                                                           |
| [Setting up PostgreSQL and Prisma](https://wanago.io/2021/03/29/api-nestjs-prisma-postgresql/)                                                           | tutorial      |                                                           |
| [Introduction to MongoDB](https://wanago.io/2021/08/16/api-nestjs-mongodb/)                                                                              | tutorial      |                                                           |
| [Working with PostgreSQL using raw SQL queries](https://wanago.io/2022/08/29/api-nestjs-postgresql-raw-sql-queries/)                                     | tutorial      |                                                           |
| [Error handling and data validation](https://wanago.io/2020/06/01/api-nestjs-error-handling-validation/)                                                 | tutorial      |                                                           |
| [Looking into dependency injection and modules](https://wanago.io/2020/06/15/api-with-nestjs-6-looking-into-dependency-injection-and-modules/)           | tutorial      |                                                           |
| [Testing](https://docs.nestjs.com/fundamentals/testing)                                                                                                  | documentation | Official documentation about testing                      |
| [Writing unit tests](https://wanago.io/2020/07/06/api-nestjs-unit-tests/)                                                                                | tutorial      |                                                           |
| [Running unit tests with CI/CD and GitHub Actions](https://wanago.io/2023/02/20/api-nestjs-tests-ci-cd-github-actions/)                                  | tutorial      |                                                           |
| [Testing NestJS services with integration tests](https://wanago.io/2020/07/13/api-nestjs-testing-services-controllers-integration-tests/)                | tutorial      |                                                           |
| [Authentication](https://docs.nestjs.com/security/authentication)                                                                                        | documentation | Official documentation about authentication               |
| [Authenticating users with bcrypt, Passport, JWT and cookies](https://wanago.io/2020/05/25/api-nestjs-authenticating-users-bcrypt-passport-jwt-cookies/) | tutorial      |                                                           |
| [Two-factor authentication](https://wanago.io/2021/03/08/api-nestjs-two-factor-authentication/)                                                          | tutorial      |                                                           |
| [Server-side sessions](https://wanago.io/2021/06/07/api-nestjs-server-side-sessions-instead-of-json-web-tokens/)                                         | tutorial      |                                                           |
| [Authenticating users with Google](https://wanago.io/2021/07/26/api-nestjs-google-authentication/)                                                       | tutorial      |                                                           |
| [Authorization](https://docs.nestjs.com/security/authorization)                                                                                          | documentation | Official documentation about authorization                |
| [Authorization with roles and claims](https://wanago.io/2021/11/15/api-nestjs-authorization-roles-claims/)                                               | tutorial      |                                                           |
| [CORS](https://docs.nestjs.com/security/cors)                                                                                                            | documentation | Official documentation about CORS                         |
| [Exploring the idea of microservices](https://wanago.io/2020/11/16/api-nestjs-microservices/)                                                            | tutorial      |                                                           |
| [Nest.js Crash Course](https://www.youtube.com/watch?v=pcX97ZrTE6M&list=PL4cUxeGkcC9g8YFseGdkyj9RH9kVs_cMr)                                              | videos        | Quick introduction through a playlist of short videos     |
<br><br><br># Architectures

## Description

Why is learning about architectures in backend development important?

- Scalability: As your application grows and the number of users increases, you need to ensure that your backend architecture can handle the load. By learning about different architectures, you can choose the best one for your application and ensure that it can scale effectively.

- Maintainability: A well-designed architecture can make it easier to maintain and update your code. By learning about different architectures, you can choose the one that is most appropriate for your application and make sure that it is maintainable in the long run.

- Code organization: A good architecture can help you keep your code organized and structured. This makes it easier to understand and modify in the future.

- Best practices: Learning about different architectures will expose you to best practices and design patterns that can help you write better code. This can also help you to avoid common pitfalls and mistakes in your code.

Overall, learning about different architectures in Node.js backend development will make you a more effective and valuable developer.

## Topics

- Monolithic architecture
- Microservices architecture
- Layered pattern
- MV\* pattern
- Event-Driven pattern

## General backend best practices

https://github.com/Sairyss/backend-best-practices

## Theoretical Materials| Name | Type | Short Description | Priority | Estimation (h) |

| Name                                                                                                                                        | Type     | Short Description                                   | Priority | Estimation (h) |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | -------- | -------------- |
| [Guidelines for using architecture patterns](https://pubs.opengroup.org/architecture/togaf8-doc/arch/chap28.html)                           | tutorial | Guidelines for using architecture patterns          | 1        | 1              |
| [Layered Architecture](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)                         | article  | Layered pattern description                         | 1        | 1              |
| [Monolithic Architecture](https://medium.com/koderlabs/introduction-to-monolithic-architecture-and-microservices-architecture-b211a5955c63) | article  | Monolithic architecture description                 | 1        | 1              |
| [Monolithic Architecture](https://scaleyourapp.com/monolithic-architecture)                                                                 | article  | Monolithic architecture description                 | 1        | 1              |
| [Microservices Architecture](https://martinfowler.com/articles/microservices.html)                                                          | article  | Microservices architecture description              | 1        | 1              |
| [Microservices Architecture](https://www.youtube.com/watch?v=z8qhToMtYRc&ab_channel=GOTOConferences)                                        | video    | Microservices architecture description              | 1        | 1              |
| [Microservices Architecture](https://www.youtube.com/watch?v=j1gU2oGFayY)                                                                   | video    | Microservices architecture description              | 1        | 1              |
| [Event Driven Architecture](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch02.html)                    | article  | Event-driven architecture description               | 1        | 1              |
| [Client-server](https://www.oreilly.com/library/view/architectural-patterns/9781787287495/2b0ae6d7-6083-4ebb-982a-57eb8d2681ce.xhtml)       | article  | Client-server pattern description                   | 1        | 1              |
| [A Guided Tour inside a clean architecture](https://proandroiddev.com/a-guided-tour-inside-a-clean-architecture-code-base-48bb5cc9fc97)     | article  | A Guided Tour inside a clean architecture code base | 2        | 1              |
| [Clean architecture for the rest of us](https://pusher.com/tutorials/clean-architecture-introduction)                                       | article  | Clean architecture for the rest of us               | 2        | 1              |
| [Model-View-\*](https://www.beyondjava.net/model-view-whatever)                                                                             | article  | Model-View-Whatever                                 | 2        | 1              |
| [Model-View-\*](https://www.youtube.com/watch?v=X85soC5evw0&ab_channel=UlbiTV)                                                              | video    | Model-View-Whatever                                 | 2        | 1              |
| [Model-View-Controller](https://github.com/utimur/mvc)                                                                                      | code     | Model-View-Controller                               | 2        | 1              |
| [Clean Architecture and Design](https://www.youtube.com/watch?v=Nsjsiz2A9mg)                                                                | video    | Clean Architecture and Design                       | 1        | 1              |
| [Event Driven](https://www.youtube.com/watch?v=STKCRSUsyP0&list=PLzlEgn_KsNQ5lq8v0mVkPOzlHnrCmdBuG&index=1&ab_channel=GOTOConferences)      | video    | Event Driven Architecture                           | 1        | 1              |
| [Event Driven](https://github.dev/damiancipolat/Node-event-saga)                                                                            | code     | Event Driven Architecture                           | 1        | 1              |
<br><br><br># CI/CD

## Description

CI/CD stands for Continuous Integration/Continuous Delivery, which is a set of practices that involve automating the building, testing, and deployment of software applications. The goal of CI/CD is to enable rapid and frequent releases of software updates while maintaining the quality of the code.

In a CI/CD workflow, developers commit their code changes to a version control system, and the CI/CD pipeline automatically builds and tests the code. If the tests pass, the code is then deployed to a staging environment for further testing and feedback. Once the code is deemed ready, it is automatically deployed to production.

CI/CD offers several benefits to web developers, including:

- Faster and more frequent releases: With CI/CD, code changes can be deployed to production more frequently, enabling developers to deliver new features and fixes more quickly.
- Increased confidence in code quality: Automated testing ensures that code changes meet quality standards, reducing the risk of errors and bugs in production.
- Better collaboration and communication: By using a shared pipeline, developers can easily collaborate and communicate with each other, leading to better coordination and fewer errors.
- Improved productivity: By automating many of the time-consuming tasks involved in building and deploying software, CI/CD frees up developers to focus on writing code and delivering new features.

In summary, learning CI/CD is valuable for web developers as it can improve their productivity, code quality, and collaboration with their team. It also helps them deliver new features and updates faster and with greater confidence.

## Topics

- Github Actions and practice
- Quality gates
- Tests integration
- Static analysis
- Container registry
- Deployments provider (will use Digitalocean for practise)

## Theoretical Materials| Name | Type | Short Description

| Name                                                                                                                                                                 | Type     | Short Description                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| [What is CI/CD](https://about.gitlab.com/topics/ci-cd/)                                                                                                              | article  | CI/CD explained                                            |
| [A curated list of awesome things related to GitHub Actions](https://github.com/sdras/awesome-actions)                                                               | tutorial | A curated list of awesome things related to GitHub Actions |
| [Github Actions — Everything You Need to Know to Get Started](https://towardsdatascience.com/github-actions-everything-you-need-to-know-to-get-started-537f1dffa0ed) | article  | Github Actions— Everything You Need to Know to Get Started |
| [Github Actions — tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI&ab_channel=TechWorldwithNana)                                                                | tutorial | Github actions tutorial                                    |
| [What are quality gates](https://linearb.io/blog/quality-gates/)                                                                                                     | article  | Quality gates                                              |
| [Integration tests](https://www.knowledgehut.com/blog/software-test/ingintegration-testing)                                                                          | article  | Integration tests                                          |
| [Integration tests and practices](https://github.com/testjavascript/nodejs-integration-tests-best-practices#section-1-infrastructure-and-database-setup)             | code     | Integration tests                                          |
| [Static analysis](https://www.techtarget.com/whatis/definition/static-analysis-static-code-analysis)                                                                 | article  | static analysis tests                                      |
| [Static analysis example, sonarqube](https://medium.com/jahia-techblog/decorate-your-prs-with-sonarqube-and-github-actions-40e6990de242)                             | article  | static analysis tests                                      |
| [Container registry](https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry)                                                                | article  | Registry                                                   |
| [Container registry](https://www.mirantis.com/cloud-native-concepts/understanding-containers/what-is-a-container-registry/)                                          | article  | Registry                                                   |
| [Container registry, Docker CI/CD](https://www.youtube.com/watch?v=R8_veQiYBjI&ab_channel=TechWorldwithNana)                                                         | tutorial | Docker CI/CD, registry                                     |
| [Popular cloud server providers](https://dgtlinfra.com/top-10-cloud-service-providers-2022)                                                                          | tutorial | Cloud server providers                                     |

