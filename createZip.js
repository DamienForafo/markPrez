<<<<<<< HEAD
const path = require('path');
const fs = require ('fs/promises');
=======
const path = require('path')  ;
const fs = require ('fs/promises') ;
>>>>>>> d9e39be2795ad3154539759c35adae9d8b35faae
const archiver = require ('archiver');
const replaceExt = require('replace-ext');

<<<<<<< HEAD
=======
/*
  const paths = ref({
    md: '',
    css: '',
    config: '',
    env: [],
    assets: []
  });
*/
>>>>>>> d9e39be2795ad3154539759c35adae9d8b35faae


async function zipDirectory(paths) {

<<<<<<< HEAD
async function zipDirectory(paths) {

=======
>>>>>>> d9e39be2795ad3154539759c35adae9d8b35faae
  await fs.mkdir("./prez");
  const sourceDir = './prez' ;
  const outPath = './prez.zip' ;

<<<<<<< HEAD
  for (let file in paths)
=======
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
  
  if (paths.env != null)
  {
    for (let file of paths.env)
    {
      products_file = path.basename(file);
     fs.copy(
      file,
      sourceDir + products_file,
      { overwrite: true }
     )
    }
    
  }
  if (paths.assets != null)
  {
    for (let file of paths.assets)
    {
      products_file = path.basename(file);
     fs.copy(
      file,
      sourceDir + products_file,
      { overwrite: true }
     )
    }
  }
  

/*
  foreach(file in paths)
>>>>>>> d9e39be2795ad3154539759c35adae9d8b35faae
  {
    const products_file = path.basename(file);
    await fs.copy(
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
<<<<<<< HEAD


  module.exports = zipDirectory;
=======
module.exports = zipDirectory ;
>>>>>>> d9e39be2795ad3154539759c35adae9d8b35faae
