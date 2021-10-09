import { GET_FILM_DETAIL } from './../../_core/NGRXStore/Types/Film.type';
import { Store } from '@ngrx/store';
import { FilmService } from './../../_core/Services/Film.service';
import { Subscription } from 'rxjs';
import { IFilmDetail } from './../../_core/Model/FIlm/FilmDetail.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  template: ` <app-detail-film></app-detail-film> `,
})
export class DetailComponent implements OnInit, OnDestroy {
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
  private maPhim!: number;
  private subParam!: Subscription;
  constructor(
    private activateRoute: ActivatedRoute,
    private filmService: FilmService,
    private title: Title,
    private store: Store
  ) {}

  ngOnInit() {
    this.subParam = this.activateRoute.queryParams.subscribe((params) => {
      this.maPhim = params.maPhim;
      this.title.setTitle(params.tenPhim);
    });
    this.filmService.getFilmDetail(this.maPhim).subscribe((film: any) => {
      this.film = film.content;
      this.store.dispatch({ type: GET_FILM_DETAIL, film: this.film });
    });
  }
  ngOnDestroy() {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
  }
}
