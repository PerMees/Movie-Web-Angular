import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-md bg-white shadow">
      <a class="navbar-brand" href="#">
        <img src="assets/img/logo/logo.png" alt="" width="45" />
      </a>
      <button
        (click)="openNav()"
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          *ngIf="navOpen"
          class="fas fa-times"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
        ></i>
        <i
          *ngIf="!navOpen"
          class="fas fa-bars"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
        ></i>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Trang chủ<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Liên hệ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tin tức</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ứng dụng</a>
          </li>
        </ul>
        <div class=" my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="button">
            Đăng ký
          </button>
          <button class="btn btn-outline-success my-2 my-sm-0" type="button">
            Đăng nhập
          </button>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;

  constructor() {}
  openNav() {
    this.navOpen = !this.navOpen;
  }
  ngOnInit() {}
}
