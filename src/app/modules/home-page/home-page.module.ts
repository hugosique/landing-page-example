import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomePageComponent } from './home-page.component';

//Bootstrap
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomePageModule { }
