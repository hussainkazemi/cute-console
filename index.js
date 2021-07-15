const { CreateMessage } = require('./utils/MessageGeneraor');
const { GetRandomChar, GetStandardChar } = require('./utils/BorderUtils');


let fconsole = function (message, border, alphabetStatus) {
    let borderChar, upperStatus;
    if(border)
      borderChar = border;
    else
       borderChar = GetRandomChar();
    if (alphabetStatus)
        upperStatus = GetStandardChar(alphabetStatus);
    else
        upperStatus = 0;

    let output = CreateMessage(message, borderChar, upperStatus);
    console.log(output);
}
