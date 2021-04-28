
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
