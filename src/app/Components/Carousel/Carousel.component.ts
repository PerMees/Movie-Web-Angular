import { IFilm } from './../../_core/Model/FIlm/Film.model';
import { FilmReducer } from './../../_core/NGRXStore/Reducers/Film.reducer';
import { IFilmDetail } from './../../_core/Model/FIlm/FilmDetail.model';
import { SHOW_TRAILER } from './../../_core/NGRXStore/Types/Film.type';
import { Store } from '@ngrx/store';
import { IBannerFilm } from '../../_core/Model/FIlm/BannerFilm.model';
import { FilmService } from './../../_core/Services/Film.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="myCarousel">
      <nz-carousel [nzEffect]="'fade'" [nzEnableSwipe]="true">
        <div nz-carousel-content *ngFor="let banner of arrayBanner">
          <div class="carousel__item">
            <div class="overlay"></div>
            <img [src]="banner.hinhAnh" alt="" class="w-100" />
            <div
              class="carousel__play"
              (click)="showTrailer(banner.maPhim)"
              data-toggle="modal"
              data-target="#modelId"
            >
              <i class="fa fa-play"></i>
            </div>
          </div>
        </div>
      </nz-carousel>

      <a class="carousel__btn carousel__btn__prev" (click)="prev()">
        <i nz-icon nzType="left" nzTheme="outline"></i>
      </a>
      <a class="carousel__btn carousel__btn__next" (click)="next()">
        <i nz-icon nzType="right" nzTheme="outline"></i>
      </a>
    </div>
  `,
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild(NzCarouselComponent) antdCarousel!: NzCarouselComponent;
  sub!: Subscription;
  arrayBanner: IBannerFilm[] = [];

  constructor(private filmService: FilmService, private store: Store) {}
  next() {
    this.antdCarousel.next();
  }
  prev() {
    this.antdCarousel.pre();
  }
  showTrailer(maPhim: number) {
    this.filmService.getFilmDetail(maPhim).subscribe((res) => {
      this.store.dispatch({ type: SHOW_TRAILER, film: res.content });
    });
  }
  ngOnInit() {
    this.filmService.getBannerFilm().subscribe(
      (res) => {
        console.log(res);
        this.arrayBanner = res.content;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe;
    }
  }
}
