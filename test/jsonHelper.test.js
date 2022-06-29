const assert = require("assert");

const JSONHelper = require("../jsonHelper");
const loker = require("../loker");

describe("Test Read & Write JSON File", () => {
  beforeEach(() => {
    JSONHelper.updateJSONFile({ data: [], terkecil: 0 });
  });

  describe("Test Read JSON File", () => {
    it("Is returning default object", () => {
      const json = JSONHelper.readJSONFile();
      assert.equal(
        JSON.stringify(json),
        JSON.stringify({ data: [], terkecil: 0 })
      );
    });
  });

  describe("Test Write JSON File", () => {
    it("Is returning updated object", () => {
      const updatedObj = { data: [{}, {}], terkecil: 1 };
      JSONHelper.updateJSONFile(updatedObj);
      const json = JSONHelper.readJSONFile();
      assert.equal(JSON.stringify(json), JSON.stringify(updatedObj));
    });
  });

  afterEach(() => {
    JSONHelper.updateJSONFile({ data: [], terkecil: 0 });
  });
});
