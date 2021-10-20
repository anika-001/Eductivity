import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import firebase from 'firebase/app';
import 'firebase/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from './services/window.service';

import { NonogramComponent } from './nonogram/nonogram.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalmComponent } from './calm/calm.component';
import { StudyComponent } from './study/study.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { CardsComponent } from './cards/cards.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NonogramComponent,
    DashboardComponent,
    ForumComponent,
    NavbarComponent,
    CalmComponent,
    StudyComponent,
    SearchComponent,
    NewsComponent,
    CardsComponent,
    Dashboard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
