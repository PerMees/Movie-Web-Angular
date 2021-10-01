import { USER_ACCOUNT } from './../../_core/NGRXStore/Types/User.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="header__nav navbar navbar-expand-md bg-white shadow">
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
        <div
          class="header__menu collapse navbar-collapse"
          id="collapsibleNavId"
        >
          <ul class="navbar-nav mx-auto mt-lg-0">
            <li class="nav-item">
              <a
                class="header__link myBtn"
                routerLinkActive="active"
                routerLink="/"
                >Trang chủ
              </a>
            </li>
            <li class="nav-item">
              <a
                class="header__link myBtn"
                routerLinkActive="active"
                routerLink="/contact"
                >Liên hệ</a
              >
            </li>
            <li class="nav-item">
              <a
                class="header__link myBtn"
                routerLinkActive="active"
                routerLink="/news"
                >Tin tức</a
              >
            </li>
            <li class="nav-item">
              <a
                class="header__link myBtn"
                routerLinkActive="active"
                routerLink="/app"
                >Ứng dụng</a
              >
            </li>
          </ul>
          <div *ngIf="!isLogin" class="header__control my-2 my-lg-0">
            <a routerLink="/register" class="myBtn">Đăng ký</a>
            <a routerLink="/login" class="myBtn">Đăng nhập</a>
          </div>
          <div *ngIf="isLogin" class="header__info">
            <a nz-dropdown nzTrigger="click" [nzDropdownMenu]="menu">
              Xin chào, {{ name }}
              <i nz-icon nzType="down"></i>
            </a>
            <nz-dropdown-menu #menu="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item routerLink="/info">Thông tin cá nhân</li>
                <li nz-menu-item (click)="logout()">Đăng xuất</li>
              </ul>
            </nz-dropdown-menu>
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;
  isLogin: boolean = false;
  name: any = '';
  constructor() {}
  openNav() {
    this.navOpen = !this.navOpen;
  }
  logout() {
    localStorage.clear();
    this.isLogin = false;
  }
  ngOnInit() {
    if (localStorage.getItem(USER_ACCOUNT)) {
      this.name = JSON.parse(localStorage.getItem(USER_ACCOUNT)!).hoTen;
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
}
