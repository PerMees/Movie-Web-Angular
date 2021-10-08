import { FilmReducer } from './_core/NGRXStore/Reducers/Film.reducer';
import { TrailerModalComponent } from './Components/TrailerModal/TrailerModal.component';
import { HeaderInterceptor } from './_core/Guards/Author.interceptor';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './Pages/Home/Home.module';
import { AntdModule } from './_core/Shared/AntdModule/Antd.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
registerLocaleData(en);
// Using Ant Design because it is easy to use and format

const routes: Routes = [{ path: '', loadChildren: () => HomeModule }];

@NgModule({
  declarations: [AppComponent, TrailerModalComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntdModule,
    StoreModule.forRoot({ FilmReducer }),
  ],
  exports: [TrailerModalComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
