#!/usr/bin/env zx

await $`git config --local user.email "itag.labs.automation@itag-labs.com"`;
await $`git config --local user.name "itag-labs-automation"`;
await $`git add .`;
await $`git commit -m "${argv.message || "commit all files"}"`;
await $`git push`;
