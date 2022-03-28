const path = require('path');
const fs = require ('fs/promises');
const archiver = require ('archiver');




async function zipDirectory(paths) {

  await fs.mkdir("./prez");
  const sourceDir = './prez' ;
  const outPath = './prez.zip' ;

  for (let file in paths)
  {
    const products_file = path.basename(file);
    await fs.copy(
      file,
      "./prez/" + products_file,
      { overwrite: true }
    );
  }
    const archive = archiver('zip', { zlib: { level: 9 }});
    const stream = fs.createWriteStream(outPath);
  
    return new Promise((resolve, reject) => {
      archive
        .directory(sourceDir, false)
        .on('error', err => reject(err))
        .pipe(stream)
      ;
  
      stream.on('close', () => resolve());
      archive.finalize();
      console.log('archive create');
      var file = path.basename(outPath);
      file = file.substr(0, file.lastIndexOf(".")) + ".codeprez";
    });
  }


  module.exports = zipDirectory;