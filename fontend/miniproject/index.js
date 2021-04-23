console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   let num = Math.floor(Math.random()*21)+0;
   console.log('Number' + ':' +num);
   sock.on('data', function(data) {
       console.log('DATA ' + sock.remoteAddress + ': ' + data);
       console.log(round);
       
   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
});
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   var name = 6035512003;
   var nameST = name.toString();
   client.write(nameST);
});

client.on('data', function(data) {
    console.log('DATA: ' + data);
   if (data == "OK"){
    let num = Math.floor(Math.random()21)+0;
    var numST = num.toString();
    client.write(numST);
   }
   else if (data == "WRONG"){
    let num = Math.floor(Math.random()21)+0;
    var numST = num.toString();
    client.write(numST);
}
else if (data == "END" || data == 'wrong username'){
    client.destroy();
  }
   else {
    client.destroy();
  }
});
