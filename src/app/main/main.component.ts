import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  values = "";
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event: any) { // without type info
    //this.values += event.target.value;
    this.values = event.target.value;
    console.log(this.values);
  }

}
