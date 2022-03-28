const path = require('path')  ;
const fs = require ('fs') ;
const archiver = require ('archiver');
const replaceExt = require('replace-ext');
const hasRead = require('./hasRead.js');
const jsonfile = require('fs-extra/lib/json');




async function zipDirectory(paths) {
  console.log(JSON.stringify(paths));

  f(hasRead("./prez"))
  {
    await fs.mkdir("./prez");

  }

  const sourceDir = './prez' ;
  const outPath = './prez.zip' ;

  var products_file = path.basename(paths.md);
  fs.copyFile(paths.md, sourceDir + products_file)
  console.log("fichie copier");

  if (paths.css != null)
  {

      products_file = path.basename(paths.css);
      fs.copyFile(paths.css, sourceDir + products_file)

  }
  
  products_file = path.basename(paths.config);
  fs.copyFile(paths.config, sourceDir + products_file)

  
  if (paths.env != null)
  {
    for (let file of paths.env)
    {
      products_file = path.basename(file);
      fs.copyFile(file, sourceDir + products_file)

    }
    
  }
  if (paths.assets != null)
  {
    for (let file of paths.assets)
    {
      products_file = path.basename(file);
      fs.copyFile(file, sourceDir = products_file)

    }
  }

    console.log("dossier créer");
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
      //file = file.substr(0, file.lastIndexOf(".")) + ".codeprez";
      newPath = replaceExt(file, '.codeprez');
    });
  }
module.exports = zipDirectory ;
