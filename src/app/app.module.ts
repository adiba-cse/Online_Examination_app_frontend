import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule}from '@angular/forms';
import { AddpaperComponent } from './addpaper/addpaper.component';
import { SolveComponent } from './solve/solve.component';
import { ManagePapersComponent } from './manage-papers/manage-papers.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ViewsolutionComponent } from './viewsolution/viewsolution.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ResponseComponent } from './response/response.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddpaperComponent,
    SolveComponent,
    ManagePapersComponent,
    HeaderComponent,
    ViewsolutionComponent,
    ResponseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
     ReactiveFormsModule,
     SweetAlert2Module.forRoot(),
     BrowserAnimationsModule,
     MatInputModule,
     MatFormFieldModule,
     MatCheckboxModule,
     MatRadioModule,
MatSelectModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,
ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
