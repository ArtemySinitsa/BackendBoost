#!/usr/bin/env zx

$.verbose = false;

if (await $`git diff skills`.then(({ stdout }) => stdout)) {
  echo("Changes in the skills folder detected");

  echo("Building roadmaps...");
  await $`npx zx build/build.mjs`;

  echo("Commiting roadmaps...");
  await $`npx zx .github/commit.mjs --message "build roadmaps"`;
} else {
  echo("No changes in the skills folder detected");
}
