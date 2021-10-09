import { SHOW_TRAILER } from './../../_core/NGRXStore/Types/Film.type';
import { FilmService } from './../../_core/Services/Film.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IFilm } from './../../_core/Model/FIlm/Film.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IFilmDetail } from 'src/app/_core/Model/FIlm/FilmDetail.model';
import * as moment from 'moment';
@Component({
  selector: 'app-detail-film',
  template: `
    <div
      class="detailFilm"
      style="background:url({{ film.hinhAnh }}),rgba(0, 0, 0, 0.5);"
    >
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 detailFilm__left">
              <img [src]="film.hinhAnh" alt="" />
            </div>
            <div class="col-12 col-md-8 detailFilm__right">
              <h3>
                {{ film.tenPhim }}
              </h3>
              <p>
                {{ film.moTa }}
              </p>
              <div class=" detailFilm__bottom">
                <ul class="text-white" type="none">
                  <li class="h-10">
                    <p class=" w-32 inline-block font-bold">
                      <b>Ngày khởi chiếu</b>
                      {{ ngayKhoiChieu }}
                    </p>
                  </li>
                  <li class="">
                    <div class="filmDetail__button">
                      <button
                        class="myPrimaryBtn"
                        (click)="showTrailer(film.maPhim)"
                        data-toggle="modal"
                        data-target="#modelId"
                      >
                        Xem Trailer
                      </button>
                      <button class="myPrimaryBtn">
                        <i class="fas fa-ticket-alt"></i>Mua vé ngay
                      </button>
                    </div>
                  </li>
                </ul>
                <nz-progress
                  class="ant-progress"
                  nzStrokeLinecap="square"
                  [nzPercent]="75"
                  nzType="circle"
                  [nzFormat]="formatProgress"
                  [nzStrokeColor]="{ '0%': '#facf4c', '100%': '#facf4c' }"
                ></nz-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DetailFilmComponent implements OnInit, OnDestroy {
  formatProgress = (percent: number) => `${percent / 10}`;
  film: IFilmDetail = {
    maPhim: 0,
    tenPhim: '',
    biDanh: '',
    trailer: '',
    hinhAnh: '',
    moTa: '',
    maNhom: '',
    hot: false,
    dangChieu: false,
    sapChieu: false,
    ngayKhoiChieu: '',
    danhGia: 0,
  };
  ngayKhoiChieu: any = '';
  sub!: Subscription;
  constructor(
    private store: Store<{ FilmReducer: IFilm }>,
    private filmService: FilmService
  ) {}
  showTrailer(maPhim: number) {
    this.store.dispatch({ type: SHOW_TRAILER, film: this.film });
  }
  ngOnInit() {
    this.store.select('FilmReducer').subscribe((res) => {
      this.film = res.filmDetail;
      this.ngayKhoiChieu = moment(this.film.ngayKhoiChieu).format('DD-MM-YYYY');
    });
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
