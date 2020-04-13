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
     
      this.title = "The time it took to find your password is";
      //ef hann er minni en microsec
      if(time <= 0.000001){
        let nanosec = time * 1000000000;
        this.text = nanosec + " nanoseconds"; 
      //ef hann er minni en millisek
      }else if(time < 0.001){
        let microsec = time * 1000000;
        this.text = Math.floor(microsec) + " microseconds";
      //ef hann er minni en sek
      }else if(time < 1.0){
        let millisec = time * 1000;
        this.text = Math.floor(millisec) + " milliseconds";
      //ef hann er minni en min
      }else if(time < 60 ){
        let sek = time;
        this.text = Math.floor(sek) + " seconds";
      //ef hann er minni en klst
      }else if(time < 3600 ){
        let min = time / 60;
        this.text = Math.floor(min) + " minutes";
      //minni enn dagur
      }else if(time < 86400){
        let hour = time / 3600;
        this.text = Math.floor(hour) + " hours";
      //minni enn vika 
      }else if(time < 604800){
        let day = time /86400;
        this.text = Math.floor(day)+ " days";
      //UNAR HÉRNA VIKA VIRKAR EKKI WHYYY 
      //minna en mánuður
      }else if(time < 2629744){
        let week = time / 604800;
        this.text = Math.floor(week)+ " weeks";
      //minna en ár
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
    //kemur í sek
    return results;
    
  }



}
