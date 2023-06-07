#!/usr/bin/env zx

const DEFAULT_COMMIT_MESSAGE = "commit all files";

await $`git config --local user.email "backendboost@automation.com"`;
await $`git config --local user.name "backendboost"`;
await $`git add .`;

// workaround not to have extra symbols in commands with dashes
const commitMessage = argv.message || DEFAULT_COMMIT_MESSAGE;
const commitCommand = `git commit -m ${commitMessage}`;
await $([commitCommand]);

await $`git push`;
