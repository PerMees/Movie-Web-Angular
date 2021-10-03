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
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <button class="myPrimaryBtn">asd</button>
      <button class="myBtn">asdasda</button>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
