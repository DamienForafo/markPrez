const AdmZip = require("adm-zip");
const path = require("path");

// 
//



async function extractArchive(PATH) {
  try {
    const zip = new AdmZip(PATH);
    const outputDir = `${path.parse(PATH).name}_extracted`; //nom du dossier ou seront décompressé les fichiers
    zip.extractAllTo(outputDir); 

    console.log(`Création de ${outputDir} réussi`);

  } catch (e) {
    console.log(`ERREUR. ${e}`);
  }
}

//nom du zip à extract
extractArchive("./tagrossemere.zip");