const fs = require ('fs-extra');
const markdown = require ('./markdown.js'); 

(async function convertMarkdownToHtml() {
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

  await fs.mkdirs("./public");

  await fs.writeFile("./public/index.html", htmlFile, "utf8");

  await fs.copy(
    "./node_modules/highlight.js/styles/default.css",
    "./public/default.css",
    { overwrite: true }
  );

  console.log("HTML generated.");
})();






/*
function tocHtml() {
    if (tocHtml_) return tocHtml_;
    const MarkdownIt = require('markdown-it');
    const markdownIt = new MarkdownIt();
    let md = tocMd();
    md = md.replace(/# Table of contents/, '');
    md = replaceGitHubByJoplinAppLinks(md);
    tocHtml_ = markdownIt.render(md);
    tocHtml_ = `<div id="toc">${tocHtml_}</div>`;
    return tocHtml_;
}
*/