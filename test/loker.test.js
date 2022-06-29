const assert = require("assert");

const loker = require("../loker");

describe("Test loker module", () => {
  describe("Test init function", () => {
    before(() => {
      loker.reset();
    });

    it("Is returning error", () => {
      assert.equal(loker.init(), "Argumen kurang");
    });

    const param = 1;
    it("Is returning success", () => {
      assert.equal(
        loker.init(param),
        `Berhasil membuat loker dengan jumlah ${param}`
      );
    });

    it("Is returning error", () => {
      assert.equal(loker.init(param), "Loker sudah dibuat sebelumnya");
    });

    after(() => {
      loker.reset();
    });
  });

  describe("Test reset function", () => {
    it("Is returning default object", () => {
      assert.equal(loker.reset(), "Program berhasil dihentikan");
    });
  });

  describe("Test input function", () => {
    before(() => {
      loker.reset();
    });

    it("Is returning error", () => {
      assert.equal(loker.inputID(), "Argumen kurang");
      assert.equal(loker.inputID(1), "Argumen kurang");
      assert.equal(loker.inputID(1, 2), "Loker belum dibuat");
    });

    it("Is returning success", () => {
      loker.init(1);
      assert.equal(
        loker.inputID("KTP", "123"),
        `Kartu identitas tersimpan di loker nomor 1`
      );
    });

    after(() => {
      loker.reset();
    });
  });

  describe("Test leave function", () => {
    before(() => {
      loker.reset();
    });

    it("Is returning error", () => {
      assert.equal(loker.leave(1), "Loker belum dibuat atau kosong");
    });

    it("Is returning success", () => {
      loker.init(1);
      loker.inputID("KTP", 123);
      assert.equal(loker.leave(1), `Loker nomor 1 berhasil dikosongkan`);
    });

    after(() => {
      loker.reset();
    });
  });

  describe("Test find function", () => {
    before(() => {
      loker.reset();
    });

    it("Is returning error", () => {
      assert.equal(loker.find(), "Argumen kurang");
    });

    it("Is returning error", () => {
      assert.equal(loker.find(123), "Loker belum dibuat");
    });

    it("Is returning error", () => {
      loker.init(1);
      loker.inputID("KTP", 123);
      assert.equal(loker.find(123), `Kartu identitas tersimpan di nomor 1`);
    });

    it("Is returning error", () => {
      assert.equal(loker.find(1234), `Kartu identitas tidak ditemukan`);
    });

    after(() => {
      loker.reset();
    });
  });

  describe("Test search function", () => {
    before(() => {
      loker.reset();
    });

    it("Is returning error", () => {
      assert.equal(loker.search(), "Argumen kurang");
    });

    it("Is returning error", () => {
      assert.equal(loker.search("KTP"), "Loker belum dibuat");
    });

    it("Is returning error", () => {
      loker.init(1);
      loker.inputID("KTP", 123);
      assert.equal(loker.search("KTP"), `123`);
    });

    it("Is returning error", () => {
      assert.equal(loker.search("SIM"), `Kosong`);
    });

    after(() => {
      loker.reset();
    });
  });
});
