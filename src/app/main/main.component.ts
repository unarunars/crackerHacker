import { Component, OnInit, SkipSelf } from '@angular/core';
import { createRainbow } from 'src/assets/js/rainbow.js';
import { checkPassword } from 'src/assets/js/crack.js';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  value = "";
  title = "";
  text = "";
  constructor() { }
  
  ngOnInit(): void {
    createRainbow();
  }
  onKey(event: any) { // without type info
    //this.values += event.target.value;
    this.value = event.target.value;
    console.log(this.value);
    this.getCrackerHacker(this.value);
  }
  getCrackerHacker(value: string){
    
    let obj = checkPassword(value);
    console.log(obj);
    if(obj.successful){
      console.log("það fannst");
      this.title = "It was immediately"
      if(obj.how === 'rainbow'){
        this.text = "It was found in a list of known passwords"
      }

    }else{
      console.log(value.length);
      var time = this.showTime(value);
      this.title = "The time it took to find your password is"
      if(time < 0){
        var mill = time / 1000;
        this.text = mill + " milliseconds";
      }else if(time >= 60  && time < 3600){
        var min = time / 60;
        this.text = min + " minutes"
      }else if(time >= 3600 && time < 86400){
        var hour = time / 3600;
        this.text = hour + " hours";  
      }/*else if(time >=86400 && time < 604800){
        var day = time /93600;
        this.text = month + " week";
      }else if( time >= 604800 && time < 1209600){
        var half
      }
      this.text = time + " sek";*/
      this.text = "afhverju kemur þetta ekki args";
    }
    
  }
  showTime(value : string){
    console.log(length);
    var character = "";
    var alphabet = 0;
    var hasNumber = false;
    var hasUpper = false;
    var hasLower = false;
    var hasSympol = false;
    

    //alphabet lengd mismunandi
    //0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*?
    for(let i = 0; i< value.length; i++){
      character = value.charAt(i);
      console.log(character);
      console.log(parseInt(character));
      if(character === character.toUpperCase() && !hasUpper){
        alphabet += 26;
        hasUpper =true;
      }else if(character === character.toLowerCase() && !hasLower){
        alphabet +=26;
        hasLower= true;
      }
      else if((character ==='#' || character === '$' || character === '%'|| character == '&' || character == '*') && !hasSympol ){
        alphabet += 5;
        hasSympol = true;
      }else if(parseInt(character) < 10  && !hasNumber){
        console.log("tala");
        console.log(character);
        alphabet += 10;
        hasNumber = true;
      }
      
    }
    console.log("alphaber: ")
    console.log(alphabet)
    var results = Math.pow(alphabet,value.length);
    results /= 10000000000000;
    console.log(results); 
    return results;
    //68^4
    //
  }



}
