const path = require('path')  ;
const fs = require ('fs') ;
const archiver = require ('archiver');

  const paths = ref({
    md: '',
    css: '',
    config: '',
    env: [],
    assets: []
  });

const sourceDir = './prez' ;
const outPath = './prez.zip' ;

function zipDirectory(sourceDir, outPath) {

  await fs.mkdirs("./prez");

  foreach(file in paths)
  {
    const products_file = path.basename(file);
    fs.copy(
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
