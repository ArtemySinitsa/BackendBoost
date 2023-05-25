#!/usr/bin/env zx

$.verbose = false;

const convertToDashedString = (str) =>
  str
    .replace(/[^a-zA-Z0-9-\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .toLowerCase();

const parseConfig = async () => {
  const CONFIG_PATH = "build/config.json";

  try {
    return JSON.parse(await $`cat ${CONFIG_PATH}`);
  } catch (e) {
    throw new Error(`Failed to parse the config: ${e}`);
  }
};

const buildBooks = async () => {
  const SKILLS_TITLE = "## Skills";

  const books = await parseConfig();

  for (const book of books) {
    const { skills } = book;

    const skillsList = skills.map(({ name }) => `* [${name}](#${convertToDashedString(name)})`).join("\n");
    const mergedSkills = await Promise.all(skills.map(async ({ path }) => await $`cat ${path}`)).then((contents) =>
      contents.join("<br><br><br>\r")
    );

    let output = `${SKILLS_TITLE}\n\n`;
    output += `${skillsList}\n`;
    output += mergedSkills;

    await $`mkdir -p books`;
    await $`echo ${output} > books/${convertToDashedString(book.name)}.md`;
  }
};

buildBooks();
