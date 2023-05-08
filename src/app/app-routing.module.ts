import { HomePageComponent } from './modules/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './modules/form-page/form-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "registration",
    component: FormPageComponent,
  },
  {
    path: "registration/edit",
    component: FormPageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
