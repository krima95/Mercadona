const http = require('http-server');

const server = http.createServer({
  root: './dist', // Dossier où se trouvent les fichiers statiques
  cache: -1, // Désactive la mise en cache
});

server.listen(8080); // Port sur lequel le serveur écoutera
