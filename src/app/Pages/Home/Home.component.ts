import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="">
      <h1>HomeComponent</h1>
      <button class="myPrimaryBtn">asd</button>
      <button class="myBtn">asdasda</button>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
