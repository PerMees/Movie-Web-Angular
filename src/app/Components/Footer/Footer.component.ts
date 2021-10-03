import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container mx-auto">
        <div class="footer__top">
          <div class="row">
            <div class="col-md-4">
              <p class="footer__heading">TIX</p>
              <div class="row">
                <div class="col-6">
                  <a class="d-block footer__top__link" href="/">FAQ</a>
                  <a class="d-block footer__top__link" href="/"
                    >Brand Guidelines</a
                  >
                </div>
                <div class="col-6">
                  <a class="d-block footer__top__link" href="/"
                    >Thỏa thuận sử dụng</a
                  >
                  <a class="d-block footer__top__link" href="/"
                    >Chính sách bảo mật</a
                  >
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <p class="footer__heading">ĐỐI TÁC</p>
              <div class="row text-center">
                <div class="footer__top__brands">
                  <div class="logoPartner">
                    <img
                      src="assets/img/logo/cgv.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/mega.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/starlight.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/agribank.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                </div>
                <div class="footer__top__brands">
                  <div class="logoPartner">
                    <img
                      src="assets/img/logo/bhd.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/beta.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/dcine.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/viettin.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                </div>
                <div class="footer__top__brands">
                  <div class="logoPartner">
                    <img
                      src="assets/img/logo/galaxy.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/ddc.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/zalopay.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/ivb.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                </div>
                <div class="footer__top__brands">
                  <div class="logoPartner">
                    <img
                      src="assets/img/logo/cinestar.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/touch.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/payoo.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/123go.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                </div>
                <div class="footer__top__brands">
                  <div class="logoPartner">
                    <img
                      src="assets/img/logo/lotte.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/cinemax.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/vietcom.jpeg"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                  <div class=" mt-4 logoPartner">
                    <img
                      src="assets/img/logo/laban.png"
                      alt=""
                      class="mx-auto block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 row justify-contents-center">
              <div class="col-6 text-center">
                <p class="footer__heading">MOBILE APP</p>
                <div class="mobileIcon d-flex justify-contents-center">
                  <img
                    src="assets/img/logo/apple.png"
                    alt=""
                    width="30"
                    height="30"
                    class=" block mr-4 ml-auto"
                  />
                  <img
                    src="assets/img/logo/android.png"
                    alt=""
                    width="30"
                    height="30"
                    class="mr-auto"
                  />
                </div>
              </div>
              <div class="col-6 text-center">
                <p class="footer__heading">SOCIAL</p>
                <div class="socialIcon d-flex justify-contents-center">
                  <img
                    src="assets/img/logo/facebook.png"
                    alt=""
                    width="30"
                    height="30"
                    class=" block mr-4 ml-auto"
                  />
                  <img
                    src="assets/img/logo/zalo.png"
                    alt=""
                    width="30"
                    height="30"
                    class="mr-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="row">
            <div class="col-12 col-md-2 ">
              <img
                src="assets/img/logo/zion.jpeg"
                alt=""
                class="d-block mx-auto"
                width="80"
              />
            </div>
            <div class="col-12 col-md-8">
              <p class="footer__heading">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </p>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
              <p>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
              <p>
                Email:
                <a href="" class=" text-red-600 hover:text-white"
                  >support@tix.vn</a
                >
              </p>
            </div>
            <div class="col-12 col-md-2">
              <a
                href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1"
                ><img
                  src="assets/img/logo/logoSaleNoti.png"
                  alt=""
                  class="logoSaleNoti block mx-auto mb-5"
                  width="120"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
