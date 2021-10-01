import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - Không thể tìm thấy trang</h2>
        </div>
        <a href="/">Về trang chủ </a>
      </div>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
