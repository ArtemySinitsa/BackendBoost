# Node.js

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
   - 3rd party API integration