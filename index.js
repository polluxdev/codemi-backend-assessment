#!/usr/bin/env node
const loker = require("./loker");
const args = process.argv;

const commands = [
  {
    name: "help",
    param: "",
    usage: "untuk menampilkan daftar perintah",
  },
  {
    name: "init",
    param: "<jumlah loker>",
    usage: "untuk mengatur jumlah loker",
  },
  {
    name: "status",
    param: "",
    usage: "untuk menampilkan status dari masing-masing nomor loker",
  },
  {
    name: "input",
    param: "<tipe identitas> <nomor identitas>",
    usage: "untuk memasukkan kartu identitas",
  },
  {
    name: "leave",
    param: "<nomor loker>",
    usage: "untuk mengosongkan loker",
  },
  {
    name: "find",
    param: "<nomor identitas>",
    usage: "untuk menampilkan nomor loker berdasarkan nomor identitas",
  },
  {
    name: "search",
    param: "<tipe identitas>",
    usage:
      "untuk menampilkan daftar nomor identitas sesuai tipe identitas yang dicari",
  },
  {
    name: "exit",
    param: "",
    usage: "untuk mengakhiri program",
  },
];

const usage = function () {
  let usageText = "simpan barangmu di loker supaya aman\n\nusage:\n";

  commands.forEach((element) => {
    usageText =
      usageText +
      "\t" +
      element.name +
      " " +
      element.param +
      (element.param.length == 0
        ? "\t\t\t\t\t\t"
        : element.param.length >= 20
        ? "\t"
        : "\t\t\t\t") +
      ": " +
      element.usage +
      "\n";
  });

  console.log(usageText);
};

switch (args[2]) {
  case "help":
    usage();
    break;
  case "status":
    console.log(loker.statusLoker());
    break;
  case "input":
    console.log(loker.inputID(args[3], args[4]));
    break;
  case "init":
    console.log(loker.init(args[3]));
    break;
  case "leave":
    console.log(loker.leave(args[3]));
    break;
  case "find":
    console.log(loker.find(args[3]));
    break;
  case "search":
    console.log(loker.search(args[3]));
    break;
  case "exit":
    console.log(loker.reset());
    break;
  default:
    console.log("Perintah tidak ditemukan\n");
    usage();
}
