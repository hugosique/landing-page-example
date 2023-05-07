import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { HomePageModule } from './home-page/home-page.module';
import { FormPageModule } from './form-page/form-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageModule,
    FormPageModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ModulesModule { }
