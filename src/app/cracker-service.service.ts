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

  async getPassword(pw : string): Promise<any>{
    var unicode = '';
    for (var i = 0; i < pw.length; i++)
        unicode += pw.charCodeAt(i);
    var unicode2 = parseInt(unicode);
    if (rainbowArr[unicode2])
    {
        console.log('rainbow');
        return {
            successful : true,
            how : 'rainbow'
        };
    }

    var arr = [];

    for (var i = 0; i < passwordArr.length; i++) {
      if (this.leetSpeek(pw, passwordArr[i])) {
        console.log('leet');
        arr.push({
            successful : true,
            how : 'leetspeek',
            password : passwordArr[i]
        });
      }
      var pwLeet = this.leetSpeekpw(passwordArr[i]);
      if (pw.includes(passwordArr[i]) || pw.includes(pwLeet)) {
        var bak = this.skeytiBak(pw, passwordArr[i]);
        var fram = this.skeytiFram(pw, passwordArr[i]);
        if (pwLeet != pw) {
          var bakLeet = this.skeytiBak(pw, pwLeet);
          var framLeet = this.skeytiFram(pw, pwLeet);

          if (framLeet == true) {
            console.log('fram');
            arr.push({
              successful : true,
              how : 'framLeet',
              password : passwordArr[i]
            });
          }
          if (bakLeet == true) {
            console.log('bak');
            arr.push({
              successful : true,
              how : 'bakLeet',
              password : passwordArr[i]
            });
          }
          if (bakLeet == false && framLeet == false) {
            console.log('includes');
            arr.push({
              successful : true,
              how : 'includesLeet',
              password : passwordArr[i]
            });
          }
        }
        if (fram == true) {
          console.log('fram');
          arr.push({
            successful : true,
            how : 'fram',
            password : passwordArr[i]
          });
        }
        if (bak == true) {
          console.log('bak');
          arr.push({
            successful : true,
            how : 'bak',
            password : passwordArr[i]
          });
        }
        if (bak == false && fram == false) {
          console.log('includes');
          arr.push({
            successful : true,
            how : 'includes',
            password : passwordArr[i]
          });
        }
      }
    }
    return arr;
  }

  leetSpeek(pw : string, testpw : string) : boolean {
    var leet = testpw.replace('e', '3');
    leet = leet.replace('o', '0');
    leet = leet.replace('l', '1');
    leet = leet.replace('a', '4');
    leet = leet.replace('s', '5');
    return (pw == leet);
  }

  leetSpeekpw(testpw : string) : string {
    var leet = testpw.replace('e', '3');
    leet = leet.replace('o', '0');
    leet = leet.replace('l', '1');
    leet = leet.replace('a', '4');
    leet = leet.replace('s', '5');
    return leet;
  }

  skeytiBak(pw : string, testpw : string) : boolean {
    for (var i = 0; i < this.alphabet.length; i++) {
        var temppw = testpw + this.alphabet[i];
        if (temppw == pw)
            return true;
    }
    return false;
  }

  skeytiFram(pw : string, testpw : string) : boolean {
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
