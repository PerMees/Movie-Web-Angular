import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et
        molestiae aut laboriosam corrupti repellendus harum aliquid tempore,
        dignissimos debitis aperiam, voluptate facere dolorem! Nesciunt itaque
      </p>
      <button class="myPrimaryBtn">asd</button>
      <button class="myBtn">asdasda</button>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
