const http = require('http');
const port = 3333;
const stats = require('./RamUsage');

http
    .createServer((req, res) => {
        if(req.url === '/'){
            res.end('<h1>Welcome to the memory checker!</h1>');
        } else if (req.url === '/stats') {
            res.end(JSON.stringify(stats, null, 2))
        } else {
            res.end('<h1>Error 404 Not Found</h1>')
        }
})
    .listen(port, () => {
        console.log(`Server is running in http://localhost:${port}`);
    });
