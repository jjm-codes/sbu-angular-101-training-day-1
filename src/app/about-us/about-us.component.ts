import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log('I am called from about us destroy life cycle hook..')
  }

  ngOnInit(): void {
  }

}
