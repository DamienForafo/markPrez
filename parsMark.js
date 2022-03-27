const fs = require ('fs-extra');
const markdown = require ('./markdown.js'); 

async function convertMarkdownToHtml() {
  console.log("Converting Markdown to HTML...");

  // markdown source
  const content = await fs.readFile("./presentation.md", "utf8");

  // converted to HTML
  const rendered = await markdown.render(content);

  const htmlFile = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <title>Convert Markdown to HTML with Node.js</title>
  <link rel="stylesheet" href="./default.css">
  </head>
  <body>
  ${rendered}
  </body>
  </html>`;
 return htmlFile ;
 //await fs.writeFile("./example-presentation/index.html", htmlFile, "utf8");

  const contcss = await fs.readFile("./node_modules/highlight.js/styles/default.css", "utf8");

  await fs.appendFile("./example-presentation/style.css", contcss, "utf8") ;

  console.log("HTML generated.");
};





