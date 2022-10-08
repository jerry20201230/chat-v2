const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get(/style|html|js/, (req, res) => {
  res.sendFile(`${__dirname}/${req.path}`);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});


io.on("connect",function(socket_id){
    
})




http.listen(port, () => console.log('listening on port ' + port));