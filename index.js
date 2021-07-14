const { CreateMessage } = require('./utils/MessageGeneraor');
const { GetRandomChar } = require('./utils/BorderUtils');
let upperStatus = 2;
let borderChar = GetRandomChar();
let output = CreateMessage("Hussain kazemi", borderChar, upperStatus);
console.log(output);
