const fs = require("fs");

const data = JSON.parse(fs.readFileSync("qa.json"));
const philosophies = data.philosophies;

const random = philosophies[Math.floor(Math.random() * philosophies.length)];

let readme = fs.readFileSync("README.md", "utf-8");

const newReadme = readme.replace(
  /<!--START_SECTION:qa-->[\s\S]*<!--END_SECTION:qa-->/,
  `<!--START_SECTION:qa-->\n${random}\n<!--END_SECTION:qa-->`
);

fs.writeFileSync("README.md", newReadme);
