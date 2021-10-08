import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ng-container>
      <app-carousel></app-carousel>
      <app-list-film></app-list-film>
    </ng-container>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
