import { HeaderComponent } from './../../Components/Header/Header.component';
import { HomeComponent } from './Home.component';
import { AntdModule } from './../../_core/Shared/AntdModule/Antd.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { CommonModule } from '@angular/common';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [{ path: '', component: HomeComponent }, {}],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AntdModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [],
  declarations: [HomeTemplateComponent, HeaderComponent],
  providers: [],
})
export class HomeModule {}
