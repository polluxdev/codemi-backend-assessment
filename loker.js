const JSONHelper = require("./jsonHelper");
const emptyLoker = { tipe: null, nomor: null };
const defaultLoker = { data: [], terkecil: 0 };

module.exports.init = function (param) {
  if (!param) {
    return "Argumen kurang";
  }

  const loker = JSONHelper.readJSONFile();
  if (loker.data.length > 0) {
    return "Loker sudah dibuat sebelumnya";
  } else {
    for (let index = 0; index < param; index++) {
      loker.data.push(emptyLoker);
    }
  }

  JSONHelper.updateJSONFile(loker);

  return `Berhasil membuat loker dengan jumlah ${param}`;
};

module.exports.statusLoker = function () {
  const loker = JSONHelper.readJSONFile();
  let statusLoker = "No Loker\tTipe Identitas\tNo Identitas\n";

  for (let index = 0; index < loker.data.length; index++) {
    statusLoker =
      statusLoker +
      (index + 1) +
      "\t\t" +
      (loker.data[index].tipe ? loker.data[index].tipe : "") +
      "\t\t" +
      (loker.data[index].tipe ? loker.data[index].nomor : "") +
      "\n";
  }

  return statusLoker;
};

module.exports.reset = function () {
  JSONHelper.updateJSONFile(defaultLoker);

  return "Program berhasil dihentikan";
};

module.exports.inputID = function (tipe, nomor) {
  if (!tipe || !nomor) {
    return "Argumen kurang";
  }

  const loker = JSONHelper.readJSONFile();
  if (loker.data.length == loker.terkecil) {
    return "Maaf loker sudah penuh";
  }

  if (loker.data.length > 0) {
    loker.data[loker.terkecil] = { tipe, nomor };
    loker.terkecil = loker.terkecil + 1;

    JSONHelper.updateJSONFile(loker);

    return `Kartu identitas tersimpan di loker nomor ${loker.terkecil}`;
  } else {
    return "Loker belum dibuat";
  }
};

module.exports.leave = function (param) {
  if (!param) {
    return "Argumen kurang";
  }

  const loker = JSONHelper.readJSONFile();
  if (loker.data.length > 0) {
    loker.data[+param - 1] = emptyLoker;
    loker.terkecil = +param - 1;
    JSONHelper.updateJSONFile(loker);

    return `Loker nomor ${param} berhasil dikosongkan`;
  } else {
    return "Loker belum dibuat atau kosong";
  }
};

module.exports.find = function (param) {
  if (!param) {
    return "Argumen kurang";
  }

  const loker = JSONHelper.readJSONFile();
  if (loker.data.length > 0) {
    let idx;
    const id = loker.data.find((element, index) => {
      idx = index;
      return element.nomor == param;
    });
    if (id) {
      return `Kartu identitas tersimpan di nomor ${idx + 1}`;
    } else {
      return "Nomor identitas tidak ditemukan";
    }
  } else {
    return "Loker belum dibuat";
  }
};

module.exports.search = function (param) {
  if (!param) {
    return "Argumen kurang";
  }

  const loker = JSONHelper.readJSONFile();
  if (loker.data.length > 0) {
    const ids = [];
    loker.data.forEach((element) => {
      if (element.tipe == param) {
        ids.push(element.nomor);
      }
    });

    if (ids.length > 0) {
      return `${ids.join()}`;
    } else {
      return `Kosong`;
    }
  } else {
    return "Loker belum dibuat";
  }
};
