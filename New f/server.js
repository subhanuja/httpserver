const http = require('http');

const server = http.createServer((req,res) =>{
if (req.url === '/'){
    res.write('Welcome sazpin')
    Res.end();
}
if (req.url === '/api/courses')

res.write(JSON.stringify([1, 2, 3]))

});  

server.listen(8001);

console.log('listening on port 8001');
