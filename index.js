const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

server.listen(process.env.PORT || 3000, () => {
    console.log('server is listening..')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});