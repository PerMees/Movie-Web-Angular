import { IFilmDetail } from './../Model/FIlm/FilmDetail.model';
import { BASE_URL, GROUP_ID } from './../Utils/setting';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FilmService {
  constructor(private httpClient: HttpClient) {}
  getBannerFilm(): Observable<any> {
    let obser = this.httpClient.get(
      `${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`
    );
    return obser;
  }
  getFilmDetail(maPhim: number): Observable<any> {
    let obser = this.httpClient.get(
      `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
    return obser;
  }
  getListFilm(): Observable<any> {
    let obser = this.httpClient.get(
      `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`
    );
    return obser;
  }
}
