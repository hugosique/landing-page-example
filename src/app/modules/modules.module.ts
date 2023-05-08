import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { HomePageModule } from './home-page/home-page.module';
import { FormPageModule } from './form-page/form-page.module';
import { AboutPageModule } from './about-page/about-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageModule,
    FormPageModule,
    AboutPageModule,
  ]
})
export class ModulesModule { }
