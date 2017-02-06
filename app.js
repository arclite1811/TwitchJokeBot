var tmi = require ('tmi.js');

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

var client = new tmi.client(options);
client.connect();


client.on('connected', function(address, port) {
  client.action("arclite181", "Hello I am Joke Bot, my purpose in life is to tell jokes!");
});

client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;


    client.action("arclite181", userstate['display-name'] + " you are a total noob.");

    // Do your stuff.
});


client.on("whisper", function (from, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    if (message == "hi"){
    	client.action("arclite181", "asdfadfsa");
    }
    // Do your stuff.
});
