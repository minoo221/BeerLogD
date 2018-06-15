import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FlashMessagesModule} from "angular2-flash-messages";

import {environment,} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBeerComponent } from './components/add-beer/add-beer.component';
import { BeerdetailComponent } from './components/beerdetail/beerdetail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditBeerComponent } from './components/edit-beer/edit-beer.component';
import { BeersComponent } from './components/beers/beers.component';
import { BeerService } from './services/beer.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddBeerComponent,
    BeerdetailComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    EditBeerComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase,'beerlog'),
      AngularFirestoreModule,
      AngularFireAuthModule,
      FormsModule,
      FlashMessagesModule.forRoot()
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
