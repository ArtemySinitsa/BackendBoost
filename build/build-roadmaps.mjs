#!/usr/bin/env zx

$.verbose = false;

const convertToDashedString = (str) =>
  str
    .replace(/[^a-zA-Z0-9-\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .toLowerCase();

const parseRoadmapsConfig = async () => {
  const ROADMAPS_CONFIG_PATH = "build/dynamic-roadmaps.json";

  try {
    return JSON.parse(await $`cat ${ROADMAPS_CONFIG_PATH}`);
  } catch (e) {
    throw new Error(`Failed to parse roadmaps config: ${e}`);
  }
};

const buildRoadmaps = async () => {
  const ROADMAPS_FOLDER = "roadmaps";
  const SKILLS_TITLE = "## Skills";

  const roadmaps = await parseRoadmapsConfig();

  for (const roadmap of roadmaps) {
    const { skills } = roadmap;

    const skillsList = skills.map(({ name }) => `* [${name}](#${convertToDashedString(name)})`).join("\n");
    const mergedSkills = await Promise.all(skills.map(async ({ path }) => await $`cat ${path}`)).then((contents) =>
      contents.join("<br><br><br>\r")
    );

    let output = `${SKILLS_TITLE}\n\n`;
    output += `${skillsList}\n`;
    output += mergedSkills;

    const roadmapOwnFolder = `${ROADMAPS_FOLDER}/${convertToDashedString(roadmap.name)}`;
    await $`mkdir -p ${roadmapOwnFolder}`;
    await $`echo ${output} > ${roadmapOwnFolder}/readme.md`;
  }
};

buildRoadmaps();
