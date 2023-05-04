import { HeaderModule } from './../../shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomePageModule { }