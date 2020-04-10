import { Component, OnInit } from '@angular/core';
import { test } from 'src/assets/js/test.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    test();
  }

}
