import { IFilm } from './../../Model/FIlm/Film.model';
import { SHOW_TRAILER, GET_FILM_DETAIL } from './../Types/Film.type';

let initialState: IFilm = {
  filmDetail: {
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
  },
};

export const FilmReducer = (state: IFilm = initialState, action: any) => {
  switch (action.type) {
    case SHOW_TRAILER:
    case GET_FILM_DETAIL: {
      return { ...state, filmDetail: action.film };
    }
    // case GET_FILM_DETAIL: {
    //   return { ...state, filmDetail: action.film };
    // }
    default:
      return { ...state };
  }
};
