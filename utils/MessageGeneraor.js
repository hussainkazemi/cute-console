const {GetStandardChar} = require('./BorderUtils');

let CreateMessage = function(message, char, upperState){
        if(message === "")
            return ":(";
        
            
        char = GetStandardChar(char);
        row_len = 5;
        clmn_len = message.length + 4;
        white_space = '  ';
        single_white_spage = ' ';
        border = '';
        for (var row = 0; row < row_len; row++){
            for (var clmn = 0; clmn < clmn_len; clmn++){
                if(row == 0 || row == (row_len - 1) ) 
                    border = border + char;
                else if(clmn == 0 || clmn == (clmn_len - 1 ) )
                    border = border + char;
                else
                    if (row == 2 && clmn > 1 && clmn - 2 < message.length)
                        border = border + message[clmn - 2] + single_white_spage;
                    else
                        border = border + white_space;
            }
            border = border + '\n';
        }

        switch(upperState){
            case 1:
                border = border.toUpperCase();
            break;

            case 2: 
                border = border.toLowerCase();
            break;
        }

        
    return border;
}

module.exports = {
    CreateMessage
}
