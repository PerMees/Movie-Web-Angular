import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { IFilmDetail } from './../../_core/Model/FIlm/FilmDetail.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/Film.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-list-film',
  template: `
    <div class="listFilm">
      <div class="container">
        <ul class="nav nav-pills mb-3  w-100" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation" (click)="changeTab(1)">
            <a [ngClass]="choose === 1 ? 'nav-link active' : ' nav-link'">
              PHIM ĐANG CHIẾU
            </a>
          </li>
          <li class="nav-item" role="presentation" (click)="changeTab(2)">
            <a [ngClass]="choose === 2 ? 'nav-link active' : ' nav-link'">
              PHIM SẮP CHIẾU
            </a>
          </li>
          <li class="nav-item" role="presentation" (click)="changeTab(3)">
            <a [ngClass]="choose === 3 ? 'nav-link active' : ' nav-link'">
              PHIM BOM TẤN
            </a>
          </li>
        </ul>
        <div class="tab-content shadow" id="pills-tabContent">
          <div class="">
            <owl-carousel-o [options]="customOptions" #listFilmOwlCarousel>
              <ng-container
                *ngFor="let film of arrListFilmRender; let index = index"
              >
                <ng-template carouselSlide>
                  <div class="listFilm__item">
                    <div class="card ">
                      <div class="card-top">
                        <div class="overlay">
                          <i class="fa fa-play text-center"></i>
                        </div>
                        <img [src]="arrListFilmRender[index][0].hinhAnh" />
                      </div>
                      <div class="card-body py-0">
                        <h3>
                          {{
                            arrListFilmRender[index][0].tenPhim | shortcut: 25
                          }}
                        </h3>
                        <p>{{ arrListFilmRender[index][0].danhGia }}/10</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="listFilm__item"
                    *ngIf="arrListFilmRender[index][1]"
                  >
                    <div class="card ">
                      <div class="card-top">
                        <div class="overlay">
                          <i class="fa fa-play text-center"></i>
                        </div>
                        <img [src]="arrListFilmRender[index][1].hinhAnh" />
                      </div>
                      <div class="card-body py-0">
                        <h3>
                          {{
                            arrListFilmRender[index][1].tenPhim | shortcut: 25
                          }}
                        </h3>
                        <p>{{ arrListFilmRender[index][1].danhGia }}/10</p>
                      </div>
                    </div>
                  </div>
                </ng-template>
              </ng-container>
            </owl-carousel-o>
            <a class="owl-prev" (click)="listFilmOwlCarousel.prev()">
              <i nz-icon nzType="left" nzTheme="outline"></i>
            </a>
            <a class="owl-next" (click)="listFilmOwlCarousel.next()">
              <i nz-icon nzType="right" nzTheme="outline"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ListFilmComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  arrFilm: IFilmDetail[] = [];
  arrListFilmRender: IFilmDetail[][] = [];
  choose: number = 1;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      690: {
        items: 3,
      },
      900: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor(private filmService: FilmService) {}
  changeTab(choose: number) {
    this.choose = choose;
    if (choose === 1)
      this.arrListFilmRender = _.chunk(
        this.arrFilm.filter((film) => film.dangChieu),
        2
      );
    else if (choose === 2)
      this.arrListFilmRender = _.chunk(
        this.arrFilm.filter((film) => film.sapChieu),
        2
      );
    else
      this.arrListFilmRender = _.chunk(
        this.arrFilm.filter((film) => film.hot),
        2
      );
  }
  ngOnInit() {
    this.filmService.getListFilm().subscribe(
      (res) => {
        /**
         *? Sử dụng Lodash _.chunk() chia array=> [[item1, item2],[item1, item2],...]
         *? để lúc render chia list film thành 2 hàng
         */
        this.arrFilm = res.content;
        this.arrListFilmRender = _.chunk(
          this.arrFilm.filter((film) => film.dangChieu),
          2
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
