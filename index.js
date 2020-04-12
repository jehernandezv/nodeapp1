//cod http
const http = require('http');

const handleServer = function (request,response) {
    response.writeHead(200,{'content-type':'text/html'});
    response.write('<h1>Hola mundo</h1>');
    response.end();
}

const server = http.createServer(handleServer);
server.listen(3000,function () {
    console.log('Server on port 3000');
});


/*
//cod para read file
const fs = require('fs');
fs.readFile('./texto.txt', function(err,data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
*/
/*
//cod para fileSystem
const fs = require('fs');

fs.writeFile('./texto.txt','Linea uno',function (err) {
    if(err){
    console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');
*/

/*
//cod para mod de os
const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free men', os.freemem());
console.log('total men', (os.totalmem() / 8) / 1024);
*/

/*
//cod de ejemplo simple
const math = require('./math.js');
console.log(math.add(1,0));
console.log(math.substract(10,8));
console.log(math.multiply(1,0));
console.log(math.divide(1,1));*/

