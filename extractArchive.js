const AdmZip = require("adm-zip"); //module pour dezip
const path = require("path");

var replaceExt = require('replace-ext'); //module pour changer l'extension
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

    zip.extractAllTo(path.join(os.tmpdir(), appPrefix)); //dezip du dossier dans le fichier temporaire avec pour nom PROJETCODEPREZ
    console.log(`OUI. ${path.parse(newPath).name}_extracted`);


  } catch (e) {
    console.log(`ERREUR. ${e}`);
  }

}

//nom du zip à extract
//extractArchive("./example-presentation.zip");