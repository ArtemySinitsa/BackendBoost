#!/usr/bin/env zx

$.verbose = false;

const changesToCheck = ["skills", "build/config.json"];

const getOutput = ({ stdout }) => stdout;

const getDiff = (resource) => $`git diff --name-only HEAD~ -- ${resource}`.then(getOutput);

const getWorkingTreeStatus = () => $`git status --porcelain`.then(getOutput);

const buildBooks = () => $`npm run build`;

const commit = (message) => $`npx zx .github/commit.mjs --message "${message}"`;

const updateBooks = async () => {
  const diffs = await Promise.all(changesToCheck.map((resource) => getDiff(resource)));
  const changes = diffs.filter(Boolean);

  if (changes.length === 0) {
    changesToCheck.forEach((resource) => echo(`No changes in ${resource}`));
    echo("Nothing to rebuild");
    process.exit(0);
  }

  echo("Changes detected");

  echo("Building books...");
  await buildBooks();

  if (!(await getWorkingTreeStatus())) {
    echo("Nothing to commit");
    process.exit(0);
  }

  echo("Commiting books...");
  await commit("build books");
};

updateBooks();
