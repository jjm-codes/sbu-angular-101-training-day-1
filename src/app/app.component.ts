import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-first-app';
  isClicked: boolean = false;
  constructor() {
    console.log('I am in constructor.')
  }
  
  ngOnInit(): void {
    console.log('I am in Init.')
  }

  clickMe() {
    console.log('Button is clicked');
    this.isClicked = !this.isClicked;
  }
}
