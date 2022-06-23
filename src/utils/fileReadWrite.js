const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, `../data/${fileName}.json`);

  const rawData = fs.readFileSync(filePath, "utf8");

  return JSON.parse(rawData);
};

const writeDataToFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../data/${fileName}.json`);

  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  readDataFromFile,
  writeDataToFile,
};
