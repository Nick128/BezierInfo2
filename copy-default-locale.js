var fs = require("fs-extra");

// copy the en-GB content as default content
fs.copySync("en-GB/index.html", "index.html");
fs.copySync("en-GB/article.js", "article.js");

// make sure to remove the `<base>` tag from the index, and replace the JSX "className" with "class"
var html = fs.readFileSync("index.html").toString();
html = html.replace('    <base href="..">\n', '');
html = html.replace('className=', 'class=');
html = "<!-- AUTOGENERATED CONTENT, PLEASE EDIT 'index.template.html' INSTEAD! -->\n" + html;
fs.writeFileSync("index.html", html);
