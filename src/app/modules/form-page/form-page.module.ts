import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { FormPageComponent } from './form-page.component';

//Modules
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';



@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    FormPageComponent
  ]
})
export class FormPageModule { }
