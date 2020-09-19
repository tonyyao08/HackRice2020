const Twilio = require("twilio");

const client = new Twilio("AC937b0681cf025f8b5e7568bcb18ebe95", "bfe350882f38d72a3ac4afc74c0f7b3e");

client.messages.list()
    .then(messages => console.log(`The most recent message is ${messages[0].body}`))
    .catch(err => console.error(err));

console.log('Gathering your message log...');

const to = +14109677946;
const from = +15137155202;
const body = `Thingy`;
// TODO: Send a message
  try {
    await client.messages.create({ to, from, body });
  } catch (err) {
    res.status(err.status).json({ success: false, message: err.message });
  }
