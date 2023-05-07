import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { HomePageModule } from './home-page/home-page.module';
import { FormPageModule } from './form-page/form-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageModule,
    FormPageModule,
  ]
})
export class ModulesModule { }
