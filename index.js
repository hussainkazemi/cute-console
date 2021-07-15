const { CreateMessage } = require('./utils/MessageGeneraor');
const { GetRandomChar, GetStandardChar } = require('./utils/BorderUtils');


let Nconsole = function (message, border) {
    let borderChar, upperStatus;
    if(border)
      borderChar = border;
    else
       borderChar = GetRandomChar();

    let output = CreateMessage(message, borderChar,0);
    console.log(output);
}

let Uconsole = function (message, border){
    let borderChar, upperStatus;
    if(border)
        borderChar = border;
    else
        borderChar = GetRandomChar();

    let output = CreateMessage(message, borderChar,2);
    console.log(output);
}

let Lconsole = function (message, border){
    let borderChar, upperStatus;
    if(border)
        borderChar = border;
    else
        borderChar = GetRandomChar();

    let output = CreateMessage(message, borderChar,1);
    console.log(output);
}

module.exports = {
    Nconsole,
    Uconsole,
    Lconsole
}