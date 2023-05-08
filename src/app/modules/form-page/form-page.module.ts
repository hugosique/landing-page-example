import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { FormPageComponent } from './form-page.component';

//Modules
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  exports: [
    FormPageComponent
  ],
})
export class FormPageModule { }
