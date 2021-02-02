const download = require("download");
const core = require("@actions/core");
const fs = require("fs");

const fecha = new Date();
const year = fecha.getFullYear();
const dia = `${date.getDate()}`.padStart(2, "0");
const mes = `${date.getMonth() + 1}`.padStart(2, "0");

const url = `${doc_url}${year}${mes}${dia}${sufijo}`;

const docFileName = `${year}${mes}${dia}.ods`;

let doc_url = "https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/vacunaCovid19.htm";
let sufijo = ".ods";


download(url, "./", { docFileName });

var filePath = "./view/index.html";

try {
  fs.readFile(filePath, "utf8", function (err, data) {
    var info = data.replace(
      /href=.* download/,
      'href="./' + docFileName + '"  download'
    );
    fs.writeFile(filePath, info, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
} catch (error) {
  console.log(error.message);
}

console.log("Response Okey", "Archivo Modificado");