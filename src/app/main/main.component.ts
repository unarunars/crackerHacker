import { Component, OnInit } from '@angular/core';
import { createRainbow } from 'src/assets/js/rainbow.js';
import { checkPassword } from 'src/assets/js/crack.js';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  values = "";
  constructor() { }

  ngOnInit(): void {
    createRainbow();
    console.log(checkPassword('brady'));
  }
  onKey(event: any) { // without type info
    //this.values += event.target.value;
    this.values = event.target.value;
    console.log(this.values);
  }

}
