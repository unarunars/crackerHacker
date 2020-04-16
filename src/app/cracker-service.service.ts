import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { checkPassword } from 'src/assets/js/crack.js';
import { rainbowArr, passwordArr } from 'src/assets/js/rainbow.js';


@Injectable({
  providedIn: 'root'
})
export class CrackerServiceService {

  alphabet : string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*?';

  getPassword(pw): any{
    console.log(pw)
    var unicode = '';
    for (var i = 0; i < pw.length; i++)
        unicode += pw.charCodeAt(i);
    var unicode2 = parseInt(unicode);
    console.log(unicode, unicode2);
    console.log(rainbowArr[unicode2]);
    if (rainbowArr[unicode2])
    {
        console.log('rainbow');
        return {
            successful : true,
            how : 'rainbow',
            time : 0
        };
    }

    passwordArr.forEach(element => {
        if (this.leetSpeek(pw, element)) {
            var endTime = new Date();
            console.log('leet');
            return {
                successful : true,
                how : 'leetspeek'
            };
        }
        if (pw.includes(element)) {
            var bak = this.skeytiBak(pw, element);
            var fram = this.skeytiFram(pw, element);

            if (fram == true) {
              console.log('fram');
              return {
                successful : true,
                how : 'fram'
                }
            } else if (bak == true) {
              console.log('bak');
              return {
                successful : true,
                how : 'bak'
              }
            } else if (bak == false && fram == false) {
              console.log('includes');
              return {
                successful : true,
                how : 'includes'
              }
          }
        }
    });
  }

  leetSpeek(pw, testpw) : boolean {
    var leet = testpw.replace('e', '3');
    leet = leet.replace('o', '0');
    leet = leet.replace('l', '1');
    leet = leet.replace('a', '4');
    leet = leet.replace('s', '5');
    return (pw == leet);
}

  skeytiBak(pw, testpw) : boolean {
    for (var i = 0; i < this.alphabet.length; i++) {
        var temppw = testpw + this.alphabet[i];
        if (temppw == pw)
            return true;
    }
    return false;
}

  skeytiFram(pw, testpw) : boolean {
    for (var i = 0; i < this.alphabet.length; i++) {
        var temppw = this.alphabet[i] + testpw;
        if (temppw == pw)
            return true;
    }
    return false;
}

  constructor(
    private http: HttpClient,
  ) { }
}
