const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;




app.get(/style|html|js/, (req, res) => {
  res.sendFile(`${__dirname}/${req.path}`);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
  res.status(404).send("404")///File(__dirname + '/public/404.html');
});


io.on("connection",function(socket){
    socket.on("disconnect",function(soc){
       
    })

})


io.on("connection", (socket) => {
    console.log(`user ${socket.id} connected`);

  socket.on("signup", (msg) => {
    
    console.log(`user ${msg.id} signup nickname ${msg.nickname}`)
  });
    
  socket.on("disconnectd", (reason) => {
    
    console.log(`user ${socket.id} disconnected`)
  });
});




http.listen(port, function(){
  console.log('listening on port ' + port)
  console.log(process.env.admin_name)
  console.log(process.env.admin_key)
  console.log("Hello World : )")
});
