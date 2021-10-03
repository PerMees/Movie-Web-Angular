import { IBannerFilm } from './../../_core/Model/BannerFilm.modal';
import { FilmService } from './../../_core/Services/Film.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="myCarousel">
      <nz-carousel [nzEffect]="'fade'" [nzEnableSwipe]="true">
        <div nz-carousel-content *ngFor="let banner of arrayBanner">
          <div class="carousel__item">
            <div class="overlay"></div>
            <img [src]="banner.hinhAnh" alt="" class="w-100" />
            <div class="carousel__play">
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
export class CarouselComponent implements OnInit {
  @ViewChild(NzCarouselComponent) antdCarousel!: NzCarouselComponent;
  arrayBanner: IBannerFilm[] = [];

  constructor(private filmService: FilmService) {}
  next() {
    this.antdCarousel.next();
  }
  prev() {
    this.antdCarousel.pre();
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
}
