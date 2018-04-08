var tmi = require ('tmi.js');
const https = require('request');

var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    identity: {
      username: "arclite1811",
      password: "oauth:pmdj2zgfzmlp3027eepvp67cbjec4m"
    },
    channels: ["arclite181"]
};


var url1 = "https://api.icndb.com/jokes/random";
var joke = "";

var myFunction =  function() {
  https(url1, function(err, res, body){

  if (err) {
    return console.log(err);
  }

  var jokebody = JSON.parse(body);
  joke = jokebody["value"]["joke"];
  client.action("arclite181", joke);

});
}
function logJoke(){
    setTimeout(logJoke, 10000);
    return;
}

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
  client.action("arclite181", " Joke bot is in the house!!! Ask me to tell you a joke!");

});

client.on("whisper", function (from, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    if (message == "hi"){
      client.action("arclite181", userstate['display-name'] + " Howdy!");

    }
});

client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    if (message.toUpperCase() == "tell me a joke".toUpperCase()){
    myFunction();

    }
});