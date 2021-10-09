import { DetailFilmComponent } from './../../Components/DetailFilm/DetailFilm.component';
import { DetailComponent } from './Detail.component';
import { PipeModule } from './../../_core/Shared/PipeModule/Pipe.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListFilmComponent } from './../../Components/ListFilm/ListFilm.component';
import { SliderComponent } from '../../Components/Slider/Slider.component';
import { FooterComponent } from './../../Components/Footer/Footer.component';
import { HeaderComponent } from './../../Components/Header/Header.component';
import { HomeComponent } from './Home.component';
import { AntdModule } from './../../_core/Shared/AntdModule/Antd.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../NotFound/NotFound.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      { path: '', component: HomeComponent },
      // { path: 'contact', component: ContactComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'detail', component: DetailComponent },
      // { path: 'form', component: FormComponent },
      // { path: 'login', component: LoginComponent },
      // {
      //   path: 'register',
      //   component: RegisterComponent,
      //   canDeactivate: [isRegisterGuard],
      // },
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      //   canActivate: [isLoginGuard],
      // },
    ],
  },
];

@NgModule({
  imports: [
    CarouselModule,
    CommonModule,
    FormsModule,
    AntdModule,
    PipeModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [],
  declarations: [
    HomeTemplateComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    ListFilmComponent,
    FooterComponent,
    DetailFilmComponent,
    DetailComponent,
  ],
  providers: [],
})
export class HomeModule {}
