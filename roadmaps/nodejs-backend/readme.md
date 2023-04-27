# Node.js backend

## Skills

- [Backend overview](../../skills/nodejs-backend/readme.md)
- [Docker](../../skills/docker/readme.md)
- [Databases](../../skills/databases/readme.md)
- [Node.js](../../skills/nodejs-backend/nodejs/readme.md)
- [Typescript](../../skills/typescript/readme.md)
- [Nest.js](../../skills/nodejs-backend/nest/readme.md)
- [Architectures](../../skills/nodejs-backend/architectures/readme.md)
- [CI/CD](../../skills/nodejs-backend/cicd/readme.md)
- Enterprise techniques

## Roadmap

```mermaid
%%{init: { "fontFamily": "Sans-Serif" } }%%

graph TD
    backend-overview(Client-server general overview) --> docker(Docker)
    docker --> databases(Databases)
    databases --> nodejs(Node.js)
    nodejs --> typescript(Typescript)
    typescript --> nest(Nest.js)
    nest --> architectures(Architectures)
    architectures --> cicd(CI/CD)

%% Skills
click backend-overview "ArtemySinitsa/labs/blob/main/skills/nodejs-backend/readme.md"
click docker "ArtemySinitsa/labs/blob/main/skills/docker/readme.md"
click databases "ArtemySinitsa/labs/blob/main/skills/databases/readme.md"
click nodejs "ArtemySinitsa/labs/blob/main/skills/nodejs-backend/nodejs/readme.md"
click typescript "ArtemySinitsa/labs/blob/main/skills/typescript/readme.md"
click nest "ArtemySinitsa/labs/blob/main/skills/nodejs-backend/nest/readme.md"
click architectures "ArtemySinitsa/labs/blob/main/skills/nodejs-backend/architectures/readme.md"
click cicd "ArtemySinitsa/labs/blob/main/skills/nodejs-backend/cicd/readme.md"

class backend-overview,docker,nodejs,typescript,nest,architectures,databases,cicd skill

classDef skill fill:#f7f8f8,stroke:#131314,stroke-width:1px,color:#131314

linkStyle default fill:none,stroke-width:1.3px,stroke:#131314

```
