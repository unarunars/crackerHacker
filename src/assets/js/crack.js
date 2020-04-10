import { rainbowArr } from 'src/assets/js/rainbow.js';

export function superTest() {
    console.log(rainbowArr[5056485349575654]);
}

export function checkPassword(pw) {
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

    
    return {
        succesful : false,
        how : 'none',
        time : null
    }
}