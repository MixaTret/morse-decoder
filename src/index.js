const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const binaryChunks = expr.match(/.{10}/g);

    function decodeBinaryToMorse(binary) {
        if (binary === '**********') {
            return ' '; // пробел
        }

        let morse = '';
        for (let i = 0; i < 10; i += 2) {
            const twoDigits = binary.slice(i, i + 2);
            if (twoDigits === '10') {
                morse += '.';
            } else if (twoDigits === '11') {
                morse += '-';
            }
        }

        return MORSE_TABLE[morse];
    }

    const decodedChars = binaryChunks.map(decodeBinaryToMorse);

    return decodedChars.join('');
}

module.exports = {
    decode
};