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
  title1 = "";
  text = "";
  hasNumber = false;
  hasUpper = false;
  hasLower = false;
  hasSympol = false;
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
    if(value.length === 0 ){
      this.hasNumber = false;
      this.hasUpper = false;
      this.hasLower = false;
      this.hasSympol = false;
      console.log("tómt");
    }
      var time = this.showTime(value);
      console.log(time);
     
      this.title = "Your password was not cracked!";
      this.title1 = "But the time it takes to crack it is:"
      //ef hann er minni en microsec
      if(time <= 0.000001){
        let nanosec = time * 1000000000;
        this.text = nanosec + " nanoseconds"; 
      //ef hann er minni en millisek
      }else if(time < 0.001){
        let microsec = time * 1000000;
        this.text = Math.round(microsec) + " microseconds";
      //ef hann er minni en sek
      }else if(time < 1.0){
        let millisec = time * 1000;
        this.text = Math.round(millisec) + " milliseconds";
      //ef hann er minni en min
      }else if(time < 60 ){
        let sek = time;
        this.text = Math.round(sek) + " seconds";
        console.log("sek");

      //ef hann er minni en klst
      }else if(time < 3600 ){
        let min = time / 60;
        this.text = Math.round(min) + " minutes";
        console.log("min");

      //minni enn dagur
      }else if(time < 86400){
        let hour = time / 3600;
        this.text = Math.round(hour) + " hours";
        console.log("klukkutíma");
        
      //minni enn vika 
      }else if(time < 604800){
        let day = time /86400;
        this.text = Math.round(day)+ " days";
        console.log("days");
      //UNAR HÉRNA VIKA VIRKAR EKKI WHYYY 
      //minna en mánuður
      }else if(time < 2629744){
        let week = time / 604800;
        this.text = Math.round(week)+ " weeks";
        console.log("afhvejru ekki hingað");
      //minna en ár
      }else if(time < 31556926){
        let month = time /2629744;
        this.text = Math.round(month) + " months";
        console.log("mánuðir")
      //minna en öld
      }else if(time < 3155692600){
        let year = time /31556926;
        this.text = Math.round(year)+ " years";
      //minna enn 1000 ár
      }else if(time < 31556926000){
        let hundYears = time / 3155692600;
        this.text = Math.round(hundYears)+ " hundred years";
      //minna enn milljon ár
      }else if(time < 31556926000000){
        let thosandYears = time /31556926000;
        this.text = Math.round(thosandYears)  + " thousand years";
        //minna en billion 
      }else if(time < 31556926000000000){
        let millionYears = time / 31556926000000;
        this.text = Math.round(millionYears) + " million years";
        //minna en trillion
      }else if(time < 31556926000000000000){
        let billion = time /31556926000000000;
        this.text = Math.round(billion) + " billion years";
      }else{
        let trillion = time / 31556926000000000000;
        this.text = Math.round(trillion)+ " trillion years";
      }
      
    
  }
  showTime(value : string){
    console.log(value.length);
    var character = "";
    var alphabet = 0;
    
    //alphabet lengd mismunandi
    //0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*?
    for(let i = 0; i< value.length; i++){
      character = value.charAt(i);
      
      if(character === character.toUpperCase() && !this.hasUpper){
        alphabet += 26;
        this.hasUpper =true;
      }else if(character === character.toLowerCase() && !this.hasLower){
        alphabet +=26;
        this.hasLower= true;
      }
      else if((character ==='#' || character === '$' || character === '%'|| character == '&' || character == '*') && !this.hasSympol ){
        alphabet += 5;
        this.hasSympol = true;
      }else if(parseInt(character) < 10  && !this.hasNumber){
        console.log(character);
        alphabet += 10;
        this.hasNumber = true;
      }
      
    }
    
    //á eftir að laga alphabet 
    var results = Math.pow(67,value.length);
    /*console.log(results);*/
    //erum að gera ráð fyrir að talvan sé mjög öflug
    //results /= 10000000000000;
    //þetta er bara test 
    results /= 2000000;
    //kemur í sek
    return results;
    
  }



}
