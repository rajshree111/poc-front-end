import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadersComponent } from './views/headers/headers.component';
import { HomeComponent } from './views/home/home.component';
import { AdminComponent } from './views/admin/admin.component';
import { UsersComponent } from './views/users/users.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { LoginComponent } from './views/login/login.component';

import {CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    AdminComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
