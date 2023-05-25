#!/usr/bin/env zx

$.verbose = false;

if (await $`git diff --name-only HEAD~ -- skills`.then(({ stdout }) => stdout)) {
  echo("Changes in the skills folder detected");

  echo("Building books...");
  await $`npm run build`;

  echo("Commiting books...");
  await $`npx zx .github/commit.mjs --message "build books"`;
} else {
  echo("No changes in the skills folder detected");
}
