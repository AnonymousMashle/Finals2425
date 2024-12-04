import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { MoreComponent } from './more/more.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Home Page'},
  { path: 'about', component: AboutComponent, title: 'About Page'},
  { path: 'registration', component: RegistrationComponent, title: 'Registration Page'},
  { path: 'profile', component: ProfileComponent, title: 'Profile Page'},
  { path: 'login', component: LoginComponent, title: 'Login Page'},
  { path: 'header', component: HeaderComponent, outlet: 'header'},
  { path: 'footer', component: FooterComponent, outlet: 'footer'},
  { path: 'services', component: ServicesComponent, title: 'Service Page'},
  { path: 'service-details', component: ServiceDetailsComponent, title: 'Details Page'},
  { path: 'service-list', component: ServiceListComponent},

  { path: 'more', component: MoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
