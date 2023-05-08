import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { HomePageModule } from './home-page/home-page.module';
import { FormPageModule } from './form-page/form-page.module';
import { AboutPageModule } from './about-page/about-page.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageModule,
    FormPageModule,
    AboutPageModule,
    NoopAnimationsModule,
  ]
})
export class ModulesModule { }
