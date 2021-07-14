
let GetRandomChar = function(){
        symbolis = ['@','#','$','%','^','&','*','-','X','O','~', '='];
        max_number = symbolis.length - 1;
        return symbolis[ Math.floor(Math.random() *  max_number ) ];
}

let GetStandardChar = function(char) {
        standardChar = ''
        if (char === "")
            standardChar = '= ';
        else
            standardChar = char.charAt(0) +' ';
        return standardChar
}

module.exports = {
    GetRandomChar,
    GetStandardChar
}