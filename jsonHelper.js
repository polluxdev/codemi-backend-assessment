const fs = require("fs");

const path = "./loker.json";

module.exports = {
  readJSONFile() {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
  },
  updateJSONFile(param) {
    return fs.writeFileSync(path, JSON.stringify(param));
  },
};
