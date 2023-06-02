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

const buildBoosts = async () => {
  const SKILLS_TITLE = "## Skills";

  const boosts = await parseConfig();

  for (const boost of boosts) {
    const { skills } = boost;

    const skillsList = skills.map(({ name }) => `* [${name}](#${convertToDashedString(name)})`).join("\n");
    const mergedSkills = await Promise.all(skills.map(async ({ path }) => await $`cat ${path}`)).then((contents) =>
      contents.join("<br><br><br>\r")
    );

    let output = `${SKILLS_TITLE}\n\n`;
    output += `${skillsList}\n`;
    output += mergedSkills;

    await $`echo ${output} > ${convertToDashedString(boost.name)}.md`;
  }
};

buildBoosts();
