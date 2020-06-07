import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserRegistrationComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
