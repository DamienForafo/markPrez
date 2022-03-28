const path = require('path')  ;
const fs = require ('fs/promises') ;
const archiver = require ('archiver');
const replaceExt = require('replace-ext');

/*
  const paths = ref({
    md: '',
    css: '',
    config: '',
    env: [],
    assets: []
  });
*/


async function zipDirectory(paths) {

  await fs.mkdir("./prez");
  const sourceDir = './prez' ;
  const outPath = './prez.zip' ;

  var products_file = path.basename(paths.md);
  fs.copy(
    paths.md,
    sourceDir + products_file,
    { overwrite: true }
  )
  products_file = path.basename(paths.css);
  fs.copy(
    paths.css,
    sourceDir + products_file,
    { overwrite: true }
  )
  products_file = path.basename(paths.config);
  fs.copy(
    paths.config,
    sourceDir + products_file,
    { overwrite: true }
  )
  /*
  if (paths.env != null)
  {
    products_file = path.basename(paths.env);
    fs.copy(
      paths.config,
      sourceDir + products_file,
      { overwrite: true }
    )
  }
  if (paths.assets != null)
  {
    products_file = path.basename(paths.assets);
    fs.copy(
      paths.config,
      sourceDir + products_file,
      { overwrite: true }
    )
  }
  */

/*
  foreach(file in paths)
  {
    const products_file = path.basename(file);
    fs.copy(
      file,
      "./prez/" + products_file,
      { overwrite: true }
    );
  }
  */
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