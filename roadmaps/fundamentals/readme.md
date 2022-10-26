# Fundamentals

## Skills
* [Business Communication](../../business-communication/readme.md)
* [Git](../../skills/git/readme.md)
* [Network](../../skills/network/readme.md)
* [Algorithm](../../skills/algorithm/readme.md)
* [OOP](../../skills/oop/readme.md)
* [Design Patterns](../../skills/patterns/readme.md)
* [Databases](../../skills/databases/readme.md)

## Roadmap 

```mermaid
%%{init: { "fontFamily": "Sans-Serif" } }%%

graph TD
    business-communication(Business Communication) --> git(Git)
    git --> network(Network)
    network --> algorithm(Algorithm)
    algorithm --> oop(OOP)
    oop --> patterns(Design Patterns)
    patterns --> databases(Databases)
    databases --> frontend(Frontend)
    databases --> mobile(Mobile)
    databases --> backend(Backend)
    databases --> testing(Testing)

%% Skills
click business-communication "ArtemySinitsa/labs/blob/main/skills/business-communication/readme.md"
click git "ArtemySinitsa/labs/blob/main/skills/git/readme.md"
click network "ArtemySinitsa/labs/blob/main/skills/network/readme.md"
click algorithm "ArtemySinitsa/labs/blob/main/skills/algorithm/readme.md"
click oop "ArtemySinitsa/labs/blob/main/skills/oop/readme.md"
click patterns "ArtemySinitsa/labs/blob/main/skills/patterns/readme.md"
click databases "ArtemySinitsa/labs/blob/main/skills/databases/readme.md"


class business-communication,git,network,algorithm,oop,patterns,databases skill


%% Roadmaps
click frontend "ArtemySinitsa/labs/blob/main/roadmaps/frontend/readme.md"
click testing "ArtemySinitsa/labs/blob/main/roadmaps/testing/readme.md"
click mobile "ArtemySinitsa/labs/blob/main/roadmaps/mobile/readme.md"
click backend "ArtemySinitsa/labs/blob/main/roadmaps/backend/readme.md"

class frontend,testing,mobile,backend roadmap

classDef skill fill:#f7f8f8,stroke:#131314,stroke-width:1px,color:#131314
classDef roadmap fill:#f7f8f8,stroke:#EB3D26,stroke-width:1px,color:#EB3D26

linkStyle default fill:none,stroke-width:1.3px,stroke:#131314

```