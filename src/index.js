const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    if ( expr.length % 10 ) throw 'Invalid string length';
    
    const result = [];
    let currentSimbol;
    const arrSimbols = [];

    for(let i = 0; i <= expr.length; i += 2){
        if (i % 10 == 0){
            result.push( MORSE_TABLE[ arrSimbols.join('') ] );
            arrSimbols.length = 0;
        }

        currentSimbol= expr[i] + expr[i+1];        
        if (currentSimbol == '10'){
            arrSimbols.push('.');
        }else if(currentSimbol == '11'){
            arrSimbols.push('-');
        }else if (currentSimbol == '**'){
            result.push(' ');
            i += 8;
        }
        
    }

    return result.join('');
}

module.exports = {
    decode
}
