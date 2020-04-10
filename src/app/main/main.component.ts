import { Component, OnInit } from '@angular/core';
import { test } from 'src/assets/js/test.js';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  values = "";
  constructor() { }
  
  ngOnInit(): void {
    
    test();
  }
  onKey(event: any) { // without type info
    //this.values += event.target.value;
    this.values = event.target.value;
    console.log(this.values);
  }
  showTime(stringLength: number){
    var alphabet = 68;
    var results = Math.pow(2,8);
    results /= 200000;
    console.log(results); 
    //68^4
    //
  }



}
