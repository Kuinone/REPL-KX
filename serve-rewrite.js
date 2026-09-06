const http = require('http');
const fs = require('fs');
const path = require('path');
const OUT = path.join(process.cwd(), 'out');
const server = http.createServer((req, res) => {
  let url = new URL(req.url, 'http://x').pathname;
  // apply /song/* -> /song/_/ rewrite
  let rewrite = null;
  if (/^\/song\//.test(url)) rewrite = '/song/_/';
  const target = rewrite || url;
  let filePath = path.join(OUT, target);
  if (!filePath.endsWith('.html')) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }
  console.log(`REQ ${url} -> TARGET ${rewrite} | FILE ${filePath.replace(OUT,'')} | exists=${fs.existsSync(filePath)}`);
  if (!fs.existsSync(filePath)) { res.writeHead(404); res.end('404'); return; }
  const data = fs.readFileSync(filePath);
  res.writeHead(200, {'content-type':'text/html'});
  res.end(data);
});
server.listen(4877, () => console.log('listening 4877'));
