import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { TravelListComponent } from './travel-list.component';

//Bootstrap
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TravelListComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
  ],
  exports: [
    TravelListComponent,
  ]
})
export class TravelListModule { }
