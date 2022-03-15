const AdmZip = require("adm-zip");
const path = require("path");

var replaceExt = require('replace-ext');
var fs = require('fs');
var dir = './PROJETCODEPREZ';

const electron = require('electron');
const os = require('os');


async function extractArchive(PATH) {
  let tmpDir;
  const appPrefix = 'PROJETCODEPREZ';
  try {

    newPath = replaceExt(PATH, '.zip'); //rename de extension pour l'unzip
    const zip = new AdmZip(newPath);

    zip.extractAllTo(path.join(os.tmpdir(), appPrefix)); 
    console.log(`OUI. ${path.parse(newPath).name}_extracted`);


  } catch (e) {
    console.log(`ERREUR. ${e}`);
  }

}

//nom du zip à extract
extractArchive("./example-presentation.zip");