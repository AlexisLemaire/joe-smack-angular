import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteListComponent } from './recette-list/recette-list.component';
import { HomeComponent } from './home/home.component';
import { RecetteComponent } from './recette/recette.component';
import { RecetteAjoutComponent } from './recette-ajout/recette-ajout.component';
import { RecetteUpdateComponent } from './recette-update/recette-update.component';
import { RecetteDeleteComponent } from './recette-delete/recette-delete.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    RecetteListComponent,
    HomeComponent,
    RecetteComponent,
    RecetteAjoutComponent,
    RecetteUpdateComponent,
    RecetteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
