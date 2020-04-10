import { rainbowArr, passwordArr } from 'src/assets/js/rainbow.js';

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*?';

export async function checkPassword(pw) {
    var unicode = '';
    for (var i = 0; i < pw.length; i++)
        unicode += pw.charCodeAt(i);
    unicode = parseInt(unicode);
    if (rainbowArr[unicode])
        return {
            successful : true,
            how : 'rainbow',
            time : 0
        };
    
    var startTime = new Date();

    passwordArr.forEach(element => {
        if (leetSpeek(pw, element)) {
            var endTime = new Date();
            console.log('leet');
            return {
                successful : true,
                how : 'leetspeek',
                time : endTime - startTime
            };
        }
        if (skeytiBak(pw, element)) {
            var endTime = new Date();
            console.log('bak');
            return {
                successful : true,
                how : 'skeytibak',
                time : endTime - startTime
            };
        }
        if (skeytiFram(pw, element)) {
            var endTime = new Date();
            console.log('fram');
            return {
                successful : true,
                how : 'skeytifram',
                time : endTime - startTime
            };
        }
    });
    
    return {
        succesful : false,
        how : 'none',
        time : null
    }
}

function leetSpeek(pw, testpw) {
    var leet = testpw.replace('e', '3');
    leet = leet.replace('o', '0');
    leet = leet.replace('l', '1');
    leet = leet.replace('a', '4');
    leet = leet.replace('s', '5');
    return (pw == leet);
}

function skeytiBak(pw, testpw) {
    for (var i = 0; i < alphabet.length; i++) {
        var temppw = testpw + alphabet[i];
        if (temppw == pw)
            return true;
    }
    return false;
}

function skeytiFram(pw, testpw) {
    for (var i = 0; i < alphabet.length; i++) {
        var temppw = alphabet[i] + testpw;
        if (temppw == pw)
            return true;
    }
    return false;
}