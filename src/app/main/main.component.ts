import { Component, OnInit } from '@angular/core';
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
    //console.log(checkPassword('brady'));
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
      var time = this.showTime(value.length);
      this.title = "The time it took to find your password is"
    }
    
  }
  showTime(length: number){
    console.log(length);
    var alphabet = 68;
    var results = Math.pow(alphabet,length);
    results /= 10000000000000;
    console.log(results); 
    return results;
    //68^4
    //
  }



}
