import { AuthUserGuard } from './auth-user.guard';
import { FirstUserComponent } from './first-user/first-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',
  component:LoginComponent},
  {path:'registration',
  component:RegistrationComponent},
  {path:'firstuser',
  component:FirstUserComponent,
  canActivate : [AuthUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
