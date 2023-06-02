#!/usr/bin/env zx

const DEFAULT_COMMIT_MESSAGE = "commit all files";

await $`git config --local user.email "backendboost@automation.com"`;
await $`git config --local user.name "backendboost"`;
await $`git add .`;
await $`git commit -m ${'"' + argv.message || DEFAULT_COMMIT_MESSAGE + '"'}`;
await $`git push`;
