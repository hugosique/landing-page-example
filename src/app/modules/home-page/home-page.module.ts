import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomePageComponent } from './home-page.component';

//Bootstrap
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TravelListModule } from './travel-list/travel-list.module';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    HeaderModule,
    FooterModule,
    NgbCollapseModule,
    TravelListModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomePageModule { }
