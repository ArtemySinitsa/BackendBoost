# Labs

A **Labs** project is to collect and structure all the available study materials in our department. *Not only materials created by our teammates, but any public resources that can help our mentors to support our mentee evolve*


## Structure
The high-level structure contains [**roadmaps**](./roadmaps/readme.md) and [**skills**](./skills/readme.md). 

### Skill
The term **skill** was taken from [WoD](https://employees-wod.itechart-group.com/skillsManagement/skills). It's a group of materials within a single  high-level topic. 

**Example:**
```
Git, Business Communication
```

### Roadmap
Roadmap is a set of skills that is required for a specific specialization.

**Example:**
```
Frontend, Testing
```

Roadmap can be based on another roadmap.
 
**Example:**
```
React Frontend, Manual Testing, Automation Testing
```


## Contributing

Before you start, please look at the detailed structure description for [**skills**](./skills/readme.md).

All the details about adding or updating content can be found [here](./contributing.md)

A roadmap can be created either manually or dynamically. 
To build a roadmap dynamically, include it into the roadmap [**configuration**](./build/dynamic-roadmaps.json). Every time a change in the skill folder is committed to the main branch the GitHub Action is triggered to rebuild roadmaps.

## Roadmaps
* [Fundamentals](./roadmaps/fundamentals/readme.md)
* [Frontend](./roadmaps/frontend/readme.md)
* [Mobile](./roadmaps/mobile/readme.md)
* [Testing](./roadmaps/testing/readme.md)
* [Node.js backend](./roadmaps/nodejs-backend/readme.md)
