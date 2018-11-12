const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function () {
    let counter = 0;
    setInterval(function () {
        let color = '';
        if (counter === 1) {
            color = 'green';
        } else if (counter === 2) {
            color = 'amber';
        } else if (counter === 3) {
            color = 'red';
        } else {
            counter = 0;
        }
        io.emit('change', { color });
        counter++;
    }, 1000);
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
    console.log('Server running on', PORT);
});
