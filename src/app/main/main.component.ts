import { Component, OnInit, SkipSelf } from '@angular/core';
import { createRainbow } from 'src/assets/js/rainbow.js';
import { checkPassword } from 'src/assets/js/crack.js';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //brady
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
   
      var time = this.showTime(value);
      console.log(time < 0);
      console.log(Math.sign(time));
      console.log(time);
      console.log(time.toFixed());
      console.log(time);
      this.title = "The time it took to find your password is";
     /* if(time < 0){
        var mill = time / 1000;
        this.text = mill + " milliseconds";
      }else if(time >= 60  && time < 3600){
        var min = time / 60;
        this.text = min + " minutes"
      }else if(time >= 3600 && time < 86400){
        var hour = time / 3600;
        this.text = hour + " hours";  
      }
      */
      this.text = "afhverju kemur þetta ekki args";
      
      /*else if(time >=86400 && time < 604800){
        var day = time /93600;
        this.text = month + " week";
      }else if( time >= 604800 && time < 1209600){
        var half
      }
      this.text = time + " sek";
    }*/
    
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
        console.log(character);
        alphabet += 10;
        hasNumber = true;
      }
      
    }
    console.log("results er: ", alphabet + "^"+ value.length);
    var results = Math.pow(alphabet,value.length);
    /*console.log(results);*/
    //erum að gera ráð fyrir að talvan sé mjög öflug
    results /= 10000000000000;
    return results;
    
  }



}
