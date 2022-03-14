const hljs = require ('highlight.js');

const MarkdownIt = require('markdown-it');

var md = require('markdown-it')({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
  
      return ''; // use external default escaping
    }
  });

  module.exports = md ;