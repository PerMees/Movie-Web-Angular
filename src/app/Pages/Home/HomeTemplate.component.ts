import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template',
  template: `
    <div>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class HomeTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
