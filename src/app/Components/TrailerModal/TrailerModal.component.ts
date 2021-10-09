import { Subscription } from 'rxjs';
import { IFilm } from './../../_core/Model/FIlm/Film.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer-modal',
  template: `
    <!-- Modal -->
    <div
      class="modal fade"
      style="margin-top: 4rem;"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-body ">
            <iframe
              class=" m-0"
              width="100%"
              [height]="height"
              [src]="trailer"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TrailerModalComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  height: number = 200;
  trailer: SafeResourceUrl = '';
  constructor(
    private store: Store<{ FilmReducer: IFilm }>,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    window.onload = () => {
      if (window.innerWidth >= 1024) this.height = 650;
      else if (window.innerWidth >= 768) this.height = 380;
      else if (window.innerWidth >= 540) this.height = 300;
    };
    window.onresize = () => {
      if (window.innerWidth >= 1024) this.height = 650;
      else if (window.innerWidth >= 768) this.height = 380;
      else if (window.innerWidth >= 540) this.height = 300;
    };

    this.store.select('FilmReducer').subscribe((res) => {
      let url: string = res.filmDetail.trailer;
      if (!res.filmDetail.trailer.includes('https://'))
        url = 'https://www.youtube.com/embed/eHsWYmnXk1o';
      this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
