#!/usr/bin/env zx

$.verbose = false;

const changesToCheck = ["skills", "build/config.json"];

const getOutput = ({ stdout }) => stdout;

const getDiff = (commit = "HEAD~", resource) => $`git diff --name-only ${commit} -- ${resource}`.then(getOutput);

const getWorkingTreeStatus = () => $`git status --porcelain`.then(getOutput);

const buildBoosts = () => $`npm run build`;

const commit = (message) => $`npx zx .github/commit.mjs --message "${message}"`;

const updateBoosts = async () => {
  const diffs = await Promise.all(changesToCheck.map((resource) => getDiff(argv["latest-commit"], resource)));
  const changes = diffs.filter(Boolean);

  if (changes.length === 0) {
    changesToCheck.forEach((resource) => echo(`No changes in ${resource}`));
    echo("Nothing to rebuild");
    process.exit(0);
  }

  echo("Changes detected");

  echo("Building boosts...");
  await buildBoosts();

  if (!(await getWorkingTreeStatus())) {
    echo("Nothing to commit");
    process.exit(0);
  }

  echo("Commiting boosts...");
  await commit("build boosts");
};

updateBoosts();
