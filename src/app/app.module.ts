import { AuthUserGuard } from './auth-user.guard';
import { LoginSerService } from './login-ser.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirstUserComponent } from './first-user/first-user.component';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FirstUserComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'registration', component:RegistrationComponent},
      {path:'firstuser', component:FirstUserComponent}
      
    ]),
    NgbModule
  ],
  providers: [
    LoginSerService,
    AuthUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
