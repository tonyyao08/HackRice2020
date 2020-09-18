const Twilio = require("twilio");

const client = new Twilio("AC937b0681cf025f8b5e7568bcb18ebe95", "6c9e646889b16da54ea35c0cccee726e");

client.messages.list()
    .then(messages => console.log(`The most recent message is ${messages[0].body}`))
    .catch(err => console.error(err));

console.log('Gathering your message log...');
