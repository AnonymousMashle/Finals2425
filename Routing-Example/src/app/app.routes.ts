import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'services', component: ServicesComponent, outlet: 'services' },
  { path: 'services/:id', component: ServiceDetailsComponent, outlet: 'serviceDetails'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
