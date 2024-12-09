import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ClassRecordComponent } from './class-record/class-record.component';



export const routes: Routes = [
  { path : 'registration', component: RegistrationComponent, title: 'Registration'},
  { path : 'profile', component: UserProfileComponent, title: 'User Profile'},
  { path : 'class-record', component: ClassRecordComponent, title: 'Class Record'}
];
